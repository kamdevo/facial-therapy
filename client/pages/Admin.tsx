import { useEffect, useMemo, useState } from "react";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarInset,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { Appointments, Appointment, AppointmentStatus } from "@/lib/appointments";
import { Calendar, CheckCircle2, Clock, ListChecks, Plus, Search, Trash2, User2 } from "lucide-react";

const statusColors: Record<AppointmentStatus, string> = {
  pending: "bg-amber-100 text-amber-800 border-amber-200",
  confirmed: "bg-emerald-100 text-emerald-800 border-emerald-200",
  cancelled: "bg-rose-100 text-rose-800 border-rose-200",
  completed: "bg-sky-100 text-sky-800 border-sky-200",
};

function StatusBadge({ value }: { value: AppointmentStatus }) {
  return <Badge variant="secondary" className={`border ${statusColors[value]} capitalize`}>{value}</Badge>;
}

function useAppointments() {
  const [items, setItems] = useState<Appointment[]>([]);
  useEffect(() => Appointments.subscribe(setItems), []);
  return items;
}

function AppointmentForm({ initial, onSubmit }: { initial?: Partial<Appointment>; onSubmit: (data: Omit<Appointment, "id" | "createdAt" | "updatedAt" | "status"> & { status?: AppointmentStatus }) => void }) {
  const [form, setForm] = useState({
    name: initial?.name ?? "",
    email: initial?.email ?? "",
    phone: initial?.phone ?? "",
    service: initial?.service ?? "",
    date: initial?.date ?? "",
    time: initial?.time ?? "",
    notes: initial?.notes ?? "",
    status: (initial?.status as AppointmentStatus | undefined) ?? "pending",
  });
  const change = (k: string, v: string) => setForm((s) => ({ ...s, [k]: v }));
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const data = { ...form };
        onSubmit(data);
      }}
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <div>
        <Label>Nombre</Label>
        <Input value={form.name} onChange={(e) => change("name", e.target.value)} required placeholder="Nombre completo" />
      </div>
      <div>
        <Label>Email</Label>
        <Input type="email" value={form.email} onChange={(e) => change("email", e.target.value)} required placeholder="correo@correo.com" />
      </div>
      <div>
        <Label>Teléfono</Label>
        <Input value={form.phone} onChange={(e) => change("phone", e.target.value)} placeholder="+57 300 000 0000" />
      </div>
      <div>
        <Label>Servicio</Label>
        <Input value={form.service} onChange={(e) => change("service", e.target.value)} placeholder="Servicio" />
      </div>
      <div>
        <Label>Fecha</Label>
        <Input type="date" value={form.date} onChange={(e) => change("date", e.target.value)} />
      </div>
      <div>
        <Label>Hora</Label>
        <Input type="time" value={form.time} onChange={(e) => change("time", e.target.value)} />
      </div>
      <div className="md:col-span-2">
        <Label>Notas</Label>
        <Input value={form.notes} onChange={(e) => change("notes", e.target.value)} placeholder="Notas adicionales" />
      </div>
      <div className="md:col-span-2 flex items-center justify-end gap-2 pt-2">
        <Button type="submit">Guardar</Button>
      </div>
    </form>
  );
}

export default function Admin() {
  const all = useAppointments();
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"all" | AppointmentStatus>("all");
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return all.filter((a) => {
      const matchesQ = [a.name, a.email, a.phone, a.service, a.notes].filter(Boolean).join(" ").toLowerCase().includes(q);
      const matchesS = status === "all" ? true : a.status === status;
      return matchesQ && matchesS;
    });
  }, [all, query, status]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [totalPages, page]);

  const [openCreate, setOpenCreate] = useState(false);
  const [editing, setEditing] = useState<Appointment | null>(null);
  const [viewing, setViewing] = useState<Appointment | null>(null);

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Panel</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <button className="justify-start">
                    <ListChecks className="mr-2 h-4 w-4" /> Agendas
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <div className="flex h-14 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <Separator orientation="vertical" className="mx-2 h-6" />
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <Badge variant="secondary" className="hidden sm:inline-flex">Agendamientos</Badge>
          </div>
        </div>

        <div className="p-4 md:p-6 space-y-4">
          <Card className="p-4">
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar por nombre, email, teléfono o servicio" className="pl-8" />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="capitalize">{status === "all" ? "Todos" : status}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Estado</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {(["all", "pending", "confirmed", "cancelled", "completed"] as const).map((s) => (
                    <DropdownMenuItem key={s} onClick={() => setStatus(s as any)} className="capitalize">
                      {s}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Dialog open={openCreate} onOpenChange={setOpenCreate}>
                <DialogTrigger asChild>
                  <Button className="gap-2"><Plus className="h-4 w-4" /> Nuevo</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Crear agendamiento</DialogTitle>
                    <DialogDescription>Registrar una nueva cita.</DialogDescription>
                  </DialogHeader>
                  <AppointmentForm onSubmit={(data) => {
                    const created = Appointments.create(data);
                    toast({ title: "Agendamiento creado", description: `${created.name} - ${created.service ?? ""}` });
                    setOpenCreate(false);
                  }} />
                </DialogContent>
              </Dialog>
            </div>
          </Card>

          <Card className="p-0 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">#</TableHead>
                  <TableHead className="min-w-[160px]">Cliente</TableHead>
                  <TableHead className="hidden md:table-cell">Contacto</TableHead>
                  <TableHead>Servicio</TableHead>
                  <TableHead className="hidden sm:table-cell">Fecha</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paged.map((a, idx) => (
                  <TableRow key={a.id} className="hover:bg-muted/40">
                    <TableCell>{(page - 1) * pageSize + idx + 1}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <User2 className="h-4 w-4 text-muted-foreground" />
                        <div className="flex flex-col">
                          <span className="font-medium">{a.name}</span>
                          <span className="text-xs text-muted-foreground md:hidden">{a.email}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div className="text-sm leading-tight">
                        <div>{a.email}</div>
                        {a.phone && <div className="text-muted-foreground">{a.phone}</div>}
                      </div>
                    </TableCell>
                    <TableCell className="capitalize">{a.service ?? "-"}</TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{a.date || "-"}{a.time ? ` ${a.time}` : ""}</span>
                      </div>
                    </TableCell>
                    <TableCell><StatusBadge value={a.status} /></TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">Acciones</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Estado</DropdownMenuLabel>
                          {(["pending", "confirmed", "completed", "cancelled"] as const).map((s) => (
                            <DropdownMenuItem key={s} onClick={() => {
                              Appointments.update(a.id, { status: s });
                              toast({ title: "Estado actualizado", description: `${a.name} ➜ ${s}` });
                            }} className="capitalize">
                              {s}
                            </DropdownMenuItem>
                          ))}
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => setViewing(a)}>Ver detalles</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setEditing(a)}>Editar</DropdownMenuItem>
                          <DropdownMenuItem className="text-rose-600" onClick={() => {
                            const ok = Appointments.remove(a.id);
                            if (ok) toast({ title: "Eliminado", description: `${a.name}` });
                          }}>
                            <Trash2 className="h-4 w-4 mr-2" /> Eliminar
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
                {paged.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-10 text-muted-foreground">Sin resultados</TableCell>
                  </TableRow>
                )}
              </TableBody>
              <TableCaption>Total: {filtered.length}</TableCaption>
            </Table>
          </Card>

          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">Página {page} de {totalPages}</div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious onClick={() => setPage((p) => Math.max(1, p - 1))} aria-disabled={page === 1} />
                </PaginationItem>
                {Array.from({ length: totalPages }).map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink isActive={page === i + 1} onClick={() => setPage(i + 1)}>{i + 1}</PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext onClick={() => setPage((p) => Math.min(totalPages, p + 1))} aria-disabled={page === totalPages} />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>

        <Dialog open={!!editing} onOpenChange={(o) => !o && setEditing(null)}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Editar agendamiento</DialogTitle>
              <DialogDescription>Actualizar datos del cliente y cita.</DialogDescription>
            </DialogHeader>
            {editing && (
              <AppointmentForm
                initial={editing}
                onSubmit={(data) => {
                  const updated = Appointments.update(editing.id, data);
                  if (updated) toast({ title: "Agendamiento actualizado", description: `${updated.name}` });
                  setEditing(null);
                }}
              />
            )}
          </DialogContent>
        </Dialog>

        <Dialog open={!!viewing} onOpenChange={(o) => !o && setViewing(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Detalles</DialogTitle>
              <DialogDescription>Información del agendamiento</DialogDescription>
            </DialogHeader>
            {viewing && (
              <div className="space-y-2 text-sm">
                <div className="grid grid-cols-2 gap-2">
                  <div className="font-medium">Cliente</div>
                  <div>{viewing.name}</div>
                  <div className="font-medium">Email</div>
                  <div>{viewing.email}</div>
                  <div className="font-medium">Teléfono</div>
                  <div>{viewing.phone || "-"}</div>
                  <div className="font-medium">Servicio</div>
                  <div>{viewing.service || "-"}</div>
                  <div className="font-medium">Fecha</div>
                  <div>{viewing.date || "-"} {viewing.time || ""}</div>
                  <div className="font-medium">Estado</div>
                  <div className="capitalize">{viewing.status}</div>
                </div>
                <Separator />
                <div>
                  <div className="font-medium">Notas</div>
                  <div className="text-muted-foreground">{viewing.notes || "-"}</div>
                </div>
                <Separator />
                <div className="text-muted-foreground">Creado: {new Date(viewing.createdAt).toLocaleString()}</div>
              </div>
            )}
            <DialogFooter>
              <Button variant="outline" onClick={() => setViewing(null)}>Cerrar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </SidebarInset>
    </SidebarProvider>
  );
}
