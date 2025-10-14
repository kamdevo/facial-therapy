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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import {
  Appointments,
  Appointment,
  AppointmentStatus,
} from "@/lib/appointments";
import {
  Calendar,
  CheckCircle2,
  Clock,
  ListChecks,
  Plus,
  Search,
  Trash2,
  User2,
} from "lucide-react";

const statusColors: Record<AppointmentStatus, string> = {
  pending: "bg-amber-100 text-amber-800 border-amber-200",
  confirmed: "bg-emerald-100 text-emerald-800 border-emerald-200",
  cancelled: "bg-rose-100 text-rose-800 border-rose-200",
  completed: "bg-sky-100 text-sky-800 border-sky-200",
};

function StatusBadge({ value }: { value: AppointmentStatus }) {
  return (
    <Badge
      variant="secondary"
      className={`border ${statusColors[value]} capitalize`}
    >
      {value}
    </Badge>
  );
}

function useAppointments() {
  const [items, setItems] = useState<Appointment[]>([]);
  useEffect(() => {
    const unsubscribe = Appointments.subscribe(setItems);
    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);
  return items;
}

function AppointmentForm({
  initial,
  onSubmit,
}: {
  initial?: Partial<Appointment>;
  onSubmit: (
    data: Omit<Appointment, "id" | "createdAt" | "updatedAt" | "status"> & {
      status?: AppointmentStatus;
    },
  ) => void;
}) {
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
        <Input
          value={form.name}
          onChange={(e) => change("name", e.target.value)}
          required
          placeholder="Nombre completo"
        />
      </div>
      <div>
        <Label>Email</Label>
        <Input
          type="email"
          value={form.email}
          onChange={(e) => change("email", e.target.value)}
          required
          placeholder="correo@correo.com"
        />
      </div>
      <div>
        <Label>Teléfono</Label>
        <Input
          value={form.phone}
          onChange={(e) => change("phone", e.target.value)}
          placeholder="+57 300 000 0000"
        />
      </div>
      <div>
        <Label>Servicio</Label>
        <Input
          value={form.service}
          onChange={(e) => change("service", e.target.value)}
          placeholder="Servicio"
        />
      </div>
      <div>
        <Label>Fecha</Label>
        <Input
          type="date"
          value={form.date}
          onChange={(e) => change("date", e.target.value)}
        />
      </div>
      <div>
        <Label>Hora</Label>
        <Input
          type="time"
          value={form.time}
          onChange={(e) => change("time", e.target.value)}
        />
      </div>
      <div className="md:col-span-2">
        <Label>Notas</Label>
        <Input
          value={form.notes}
          onChange={(e) => change("notes", e.target.value)}
          placeholder="Notas adicionales"
        />
      </div>
      <div className="md:col-span-2 flex items-center justify-end gap-2 pt-2">
        <Button type="submit">Guardar</Button>
      </div>
    </form>
  );
}

export default function Admin() {
  const requiredKey = "jennifer"; // Código de acceso establecido
  const [auth, setAuth] = useState<boolean>(() => {
    try {
      return localStorage.getItem("facialtherapy:admin:key") === requiredKey;
    } catch {
      return false;
    }
  });
  const [pass, setPass] = useState("");

  const all = useAppointments();
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"all" | AppointmentStatus>("all");
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return all.filter((a) => {
      const matchesQ = [a.name, a.email, a.phone, a.service, a.notes]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(q);
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

  if (!auth) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-cream-50 via-sand-50 to-teal-50">
        <Card className="w-full max-w-md p-6 md:p-8 space-y-6 shadow-xl border-sand-200">
          <div className="space-y-2 text-center">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-teal-500 to-bronze-400 rounded-2xl flex items-center justify-center mb-4">
              <User2 className="text-white" size={32} />
            </div>
            <h1 className="text-2xl md:text-3xl font-playfair font-bold text-foreground">
              Acceso Admin
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
              Ingresa el código de acceso para continuar
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (pass === requiredKey) {
                localStorage.setItem("facialtherapy:admin:key", pass);
                setAuth(true);
              } else {
                toast({
                  title: "Código incorrecto",
                  description: "Verifica el código e inténtalo nuevamente.",
                  variant: "destructive",
                });
              }
            }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="password" className="text-base">Código de Acceso</Label>
              <Input
                id="password"
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="Ingresa el código"
                className="h-12 text-base"
                autoFocus
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full h-12 text-base bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700"
            >
              Entrar al Dashboard
            </Button>
          </form>
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-2">
            <Clock size={12} />
            <span>Acceso protegido • Solo administradores</span>
          </div>
        </Card>
      </div>
    );
  }

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
        <div className="flex h-14 md:h-16 items-center gap-2 border-b px-3 md:px-4">
          <SidebarTrigger />
          <Separator orientation="vertical" className="mx-1 md:mx-2 h-6" />
          <div className="flex items-center gap-2 md:gap-3">
            <h1 className="text-lg md:text-xl font-semibold font-playfair">Dashboard</h1>
            <Badge variant="secondary" className="hidden sm:inline-flex text-xs">
              Agendamientos
            </Badge>
          </div>
        </div>

        <div className="p-3 md:p-4 lg:p-6 space-y-3 md:space-y-4">
          <Card className="p-3 md:p-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar..."
                  className="pl-8 h-10"
                />
              </div>
              <div className="flex gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="capitalize flex-1 sm:flex-none h-10" size="sm">
                      <span className="hidden sm:inline">{status === "all" ? "Todos" : status}</span>
                      <span className="sm:hidden">{status === "all" ? "Filtrar" : status}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Estado</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {(
                      [
                        "all",
                        "pending",
                        "confirmed",
                        "cancelled",
                        "completed",
                      ] as const
                    ).map((s) => (
                      <DropdownMenuItem
                        key={s}
                        onClick={() => setStatus(s as any)}
                        className="capitalize"
                      >
                        {s === "all" ? "Todos" : s}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <Dialog open={openCreate} onOpenChange={setOpenCreate}>
                  <DialogTrigger asChild>
                    <Button className="gap-2 flex-1 sm:flex-none h-10" size="sm">
                      <Plus className="h-4 w-4" /> 
                      <span className="hidden sm:inline">Nuevo</span>
                      <span className="sm:hidden">Crear</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="w-[95vw] max-w-[600px] max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Crear agendamiento</DialogTitle>
                      <DialogDescription>
                        Registrar una nueva cita.
                      </DialogDescription>
                    </DialogHeader>
                    <AppointmentForm
                      onSubmit={(data) => {
                        const created = Appointments.create(data);
                        toast({
                          title: "Agendamiento creado",
                          description: `${created.name} - ${created.service ?? ""}`,
                        });
                        setOpenCreate(false);
                      }}
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </Card>

          <Card className="p-0 overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-8 md:w-12 text-xs md:text-sm">#</TableHead>
                    <TableHead className="min-w-[140px] md:min-w-[160px] text-xs md:text-sm">Cliente</TableHead>
                    <TableHead className="hidden lg:table-cell text-xs md:text-sm">
                      Contacto
                    </TableHead>
                    <TableHead className="hidden sm:table-cell text-xs md:text-sm">Servicio</TableHead>
                    <TableHead className="hidden md:table-cell text-xs md:text-sm">Fecha</TableHead>
                    <TableHead className="text-xs md:text-sm">Estado</TableHead>
                    <TableHead className="text-right text-xs md:text-sm">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paged.map((a, idx) => (
                    <TableRow key={a.id} className="hover:bg-muted/40">
                      <TableCell className="text-xs md:text-sm">{(page - 1) * pageSize + idx + 1}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1.5 md:gap-2">
                          <User2 className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground flex-shrink-0" />
                          <div className="flex flex-col min-w-0">
                            <span className="font-medium text-xs md:text-sm truncate">{a.name}</span>
                            <span className="text-[10px] md:text-xs text-muted-foreground lg:hidden truncate">
                              {a.email}
                            </span>
                            <span className="text-[10px] md:text-xs text-muted-foreground sm:hidden">
                              {a.service || "-"}
                            </span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="hidden lg:table-cell">
                        <div className="text-xs md:text-sm leading-tight">
                          <div className="truncate max-w-[180px]">{a.email}</div>
                          {a.phone && (
                            <div className="text-muted-foreground truncate">{a.phone}</div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell capitalize text-xs md:text-sm">
                        <span className="truncate max-w-[120px] inline-block">
                          {a.service ?? "-"}
                        </span>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 flex-shrink-0" />
                          <span className="truncate">
                            {a.date || "-"}
                            {a.time ? ` ${a.time}` : ""}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <StatusBadge value={a.status} />
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 text-xs md:text-sm">
                              <span className="hidden sm:inline">Acciones</span>
                              <span className="sm:hidden">•••</span>
                            </Button>
                          </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Estado</DropdownMenuLabel>
                          {(
                            [
                              "pending",
                              "confirmed",
                              "completed",
                              "cancelled",
                            ] as const
                          ).map((s) => (
                            <DropdownMenuItem
                              key={s}
                              onClick={() => {
                                Appointments.update(a.id, { status: s });
                                toast({
                                  title: "Estado actualizado",
                                  description: `${a.name} ➜ ${s}`,
                                });
                              }}
                              className="capitalize"
                            >
                              {s}
                            </DropdownMenuItem>
                          ))}
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => setViewing(a)}>
                            Ver detalles
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setEditing(a)}>
                            Editar
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="text-rose-600"
                            onClick={() => {
                              const ok = Appointments.remove(a.id);
                              if (ok)
                                toast({
                                  title: "Eliminado",
                                  description: `${a.name}`,
                                });
                            }}
                          >
                            <Trash2 className="h-4 w-4 mr-2" /> Eliminar
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
                {paged.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={7}
                      className="text-center py-10 text-muted-foreground"
                    >
                      Sin resultados
                    </TableCell>
                  </TableRow>
                )}
                </TableBody>
                <TableCaption>Total: {filtered.length}</TableCaption>
              </Table>
            </div>
          </Card>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs md:text-sm text-muted-foreground">
              Página {page} de {totalPages} • {filtered.length} total
            </div>
            <Pagination>
              <PaginationContent className="gap-1">
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    aria-disabled={page === 1}
                    className="h-8 px-2 md:h-10 md:px-4 text-xs md:text-sm"
                  />
                </PaginationItem>
                {Array.from({ length: Math.min(totalPages, 5) }).map((_, i) => {
                  const pageNum = totalPages <= 5 ? i + 1 : 
                    page <= 3 ? i + 1 :
                    page >= totalPages - 2 ? totalPages - 4 + i :
                    page - 2 + i;
                  return (
                    <PaginationItem key={i} className="hidden sm:block">
                      <PaginationLink
                        isActive={page === pageNum}
                        onClick={() => setPage(pageNum)}
                        className="h-8 w-8 md:h-10 md:w-10 text-xs md:text-sm"
                      >
                        {pageNum}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}
                <PaginationItem>
                  <PaginationNext
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    aria-disabled={page === totalPages}
                    className="h-8 px-2 md:h-10 md:px-4 text-xs md:text-sm"
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>

        <Dialog open={!!editing} onOpenChange={(o) => !o && setEditing(null)}>
          <DialogContent className="w-[95vw] max-w-[600px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-lg md:text-xl">Editar agendamiento</DialogTitle>
              <DialogDescription className="text-sm">
                Actualizar datos del cliente y cita.
              </DialogDescription>
            </DialogHeader>
            {editing && (
              <AppointmentForm
                initial={editing}
                onSubmit={(data) => {
                  const updated = Appointments.update(editing.id, data);
                  if (updated)
                    toast({
                      title: "Agendamiento actualizado",
                      description: `${updated.name}`,
                    });
                  setEditing(null);
                }}
              />
            )}
          </DialogContent>
        </Dialog>

        <Dialog open={!!viewing} onOpenChange={(o) => !o && setViewing(null)}>
          <DialogContent className="w-[95vw] max-w-[500px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-lg md:text-xl">Detalles</DialogTitle>
              <DialogDescription className="text-sm">
                Información del agendamiento
              </DialogDescription>
            </DialogHeader>
            {viewing && (
              <div className="space-y-3 text-xs md:text-sm">
                <div className="grid grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] gap-x-3 gap-y-2">
                  <div className="font-medium text-muted-foreground">Cliente</div>
                  <div className="font-medium break-words">{viewing.name}</div>
                  <div className="font-medium text-muted-foreground">Email</div>
                  <div className="break-all">{viewing.email}</div>
                  <div className="font-medium text-muted-foreground">Teléfono</div>
                  <div>{viewing.phone || "-"}</div>
                  <div className="font-medium text-muted-foreground">Servicio</div>
                  <div className="break-words">{viewing.service || "-"}</div>
                  <div className="font-medium text-muted-foreground">Fecha</div>
                  <div>
                    {viewing.date || "-"} {viewing.time || ""}
                  </div>
                  <div className="font-medium text-muted-foreground">Estado</div>
                  <div className="capitalize">{viewing.status}</div>
                </div>
                <Separator />
                <div>
                  <div className="font-medium text-muted-foreground mb-1">Notas</div>
                  <div className="text-foreground/80 break-words">
                    {viewing.notes || "-"}
                  </div>
                </div>
                <Separator />
                <div className="text-xs text-muted-foreground">
                  Creado: {new Date(viewing.createdAt).toLocaleString()}
                </div>
              </div>
            )}
            <DialogFooter className="sm:justify-center">
              <Button variant="outline" onClick={() => setViewing(null)} className="w-full sm:w-auto">
                Cerrar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </SidebarInset>
    </SidebarProvider>
  );
}
