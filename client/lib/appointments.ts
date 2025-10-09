import { nanoid } from "nanoid/non-secure";

export type AppointmentStatus = "pending" | "confirmed" | "cancelled" | "completed";

export interface Appointment {
  id: string;
  name: string;
  email: string;
  phone?: string;
  service?: string;
  date?: string; // YYYY-MM-DD
  time?: string; // HH:mm
  notes?: string;
  status: AppointmentStatus;
  createdAt: string; // ISO
  updatedAt: string; // ISO
}

const STORAGE_KEY = "facialtherapy:appointments";

function nowISO() {
  return new Date().toISOString();
}

function safeParse<T>(str: string | null, fallback: T): T {
  if (!str) return fallback;
  try {
    return JSON.parse(str) as T;
  } catch {
    return fallback;
  }
}

function load(): Appointment[] {
  if (typeof window === "undefined") return [];
  return safeParse<Appointment[]>(localStorage.getItem(STORAGE_KEY), []);
}

function save(list: Appointment[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

const bc = typeof window !== "undefined" && "BroadcastChannel" in window ? new BroadcastChannel("appointments") : null;

export type Listener = (items: Appointment[]) => void;
const listeners = new Set<Listener>();

function notify() {
  const items = load();
  listeners.forEach((l) => l(items));
}

if (typeof window !== "undefined") {
  window.addEventListener("storage", (e) => {
    if (e.key === STORAGE_KEY) notify();
  });
}

if (bc) {
  bc.onmessage = (ev) => {
    if (ev?.data?.type === "sync" && ev?.data?.key === STORAGE_KEY) {
      notify();
    }
  };
}

function broadcast() {
  if (bc) bc.postMessage({ type: "sync", key: STORAGE_KEY, ts: Date.now() });
}

export const Appointments = {
  list(): Appointment[] {
    return load().sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  },
  get(id: string): Appointment | undefined {
    return load().find((a) => a.id === id);
  },
  create(input: Omit<Appointment, "id" | "createdAt" | "updatedAt" | "status"> & { status?: AppointmentStatus }): Appointment {
    const items = load();
    const item: Appointment = {
      id: nanoid(),
      status: input.status ?? "pending",
      createdAt: nowISO(),
      updatedAt: nowISO(),
      ...input,
    };
    items.unshift(item);
    save(items);
    broadcast();
    notify();
    return item;
  },
  update(id: string, patch: Partial<Omit<Appointment, "id" | "createdAt">>): Appointment | undefined {
    const items = load();
    const idx = items.findIndex((a) => a.id === id);
    if (idx === -1) return undefined;
    const next: Appointment = { ...items[idx], ...patch, updatedAt: nowISO() };
    items[idx] = next;
    save(items);
    broadcast();
    notify();
    return next;
  },
  remove(id: string): boolean {
    const items = load();
    const next = items.filter((a) => a.id !== id);
    const changed = next.length !== items.length;
    if (changed) {
      save(next);
      broadcast();
      notify();
    }
    return changed;
  },
  subscribe(listener: Listener) {
    listeners.add(listener);
    listener(this.list());
    return () => listeners.delete(listener);
  },
};
