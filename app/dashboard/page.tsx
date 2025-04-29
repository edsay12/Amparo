"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
  AlertTriangle,
  ArrowUpDown,
  CheckCircle2,
  Clock,
  Download,
  Eye,
  FileText,
  Filter,
  MapPin,
  MoreHorizontal,
  Search,
  Shield,
  Trash2,
} from "lucide-react";

// Dados simulados para as denúncias
const mockReports = [
  {
    id: "DN2024-78945",
    type: "Violência Física",
    location: "São Paulo, SP",
    status: "Em análise",
    priority: "Alta",
    date: "12/03/2024",
    reporter: "Anônimo",
    assignedTo: "Ana Silva",
  },
  {
    id: "DN2024-78932",
    type: "Violência Psicológica",
    location: "Rio de Janeiro, RJ",
    status: "Encaminhada",
    priority: "Média",
    date: "11/03/2024",
    reporter: "Maria Santos",
    assignedTo: "Carlos Oliveira",
  },
  {
    id: "DN2024-78901",
    type: "Violência Sexual",
    location: "Belo Horizonte, MG",
    status: "Em análise",
    priority: "Alta",
    date: "10/03/2024",
    reporter: "Anônimo",
    assignedTo: "Juliana Costa",
  },
  {
    id: "DN2024-78890",
    type: "Violência Moral",
    location: "Salvador, BA",
    status: "Encaminhada",
    priority: "Média",
    date: "09/03/2024",
    reporter: "Patrícia Almeida",
    assignedTo: "Roberto Ferreira",
  },
  {
    id: "DN2024-78875",
    type: "Violência Patrimonial",
    location: "Brasília, DF",
    status: "Resolvida",
    priority: "Baixa",
    date: "08/03/2024",
    reporter: "Luciana Gomes",
    assignedTo: "Ana Silva",
  },
  {
    id: "DN2024-78860",
    type: "Violência Física",
    location: "Fortaleza, CE",
    status: "Arquivada",
    priority: "Baixa",
    date: "07/03/2024",
    reporter: "Anônimo",
    assignedTo: "Carlos Oliveira",
  },
  {
    id: "DN2024-78845",
    type: "Violência Psicológica",
    location: "Recife, PE",
    status: "Resolvida",
    priority: "Média",
    date: "06/03/2024",
    reporter: "Fernanda Lima",
    assignedTo: "Juliana Costa",
  },
  {
    id: "DN2024-78830",
    type: "Violência Sexual",
    location: "Porto Alegre, RS",
    status: "Em análise",
    priority: "Alta",
    date: "05/03/2024",
    reporter: "Anônimo",
    assignedTo: "Roberto Ferreira",
  },
  {
    id: "DN2024-78815",
    type: "Violência Moral",
    location: "Curitiba, PR",
    status: "Encaminhada",
    priority: "Média",
    date: "04/03/2024",
    reporter: "Camila Rodrigues",
    assignedTo: "Ana Silva",
  },
  {
    id: "DN2024-78800",
    type: "Violência Patrimonial",
    location: "Manaus, AM",
    status: "Resolvida",
    priority: "Baixa",
    date: "03/03/2024",
    reporter: "Anônimo",
    assignedTo: "Carlos Oliveira",
  },
];

export default function AdminDenuncias() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");

  // Filtrar denúncias com base nos critérios selecionados
  const filteredReports = mockReports.filter((report) => {
    const matchesSearch =
      report.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.reporter.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || report.status === statusFilter;
    const matchesType = typeFilter === "all" || report.type === typeFilter;
    const matchesPriority =
      priorityFilter === "all" || report.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesType && matchesPriority;
  });

  // Contagem por status para os cards de resumo
  const statusCounts = {
    total: mockReports.length,
    emAnalise: mockReports.filter((r) => r.status === "Em análise").length,
    encaminhada: mockReports.filter((r) => r.status === "Encaminhada").length,
    resolvida: mockReports.filter((r) => r.status === "Resolvida").length,
    arquivada: mockReports.filter((r) => r.status === "Arquivada").length,
  };

  // Contagem por prioridade para os cards de resumo
  const priorityCounts = {
    alta: mockReports.filter((r) => r.priority === "Alta").length,
    media: mockReports.filter((r) => r.priority === "Média").length,
    baixa: mockReports.filter((r) => r.priority === "Baixa").length,
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Denúncias</h1>
        <div className="flex items-center space-x-2 mt-2 md:mt-0">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Cards de resumo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total de Denúncias
                </p>
                <h3 className="text-2xl font-bold mt-1">
                  {statusCounts.total}
                </h3>
              </div>
              <div className="p-2 bg-purple-100 rounded-full">
                <FileText className="h-5 w-5 text-purple-700" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Em Análise
                </p>
                <h3 className="text-2xl font-bold mt-1">
                  {statusCounts.emAnalise}
                </h3>
              </div>
              <div className="p-2 bg-yellow-100 rounded-full">
                <Clock className="h-5 w-5 text-yellow-700" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Resolvidas
                </p>
                <h3 className="text-2xl font-bold mt-1">
                  {statusCounts.resolvida}
                </h3>
              </div>
              <div className="p-2 bg-green-100 rounded-full">
                <CheckCircle2 className="h-5 w-5 text-green-700" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Prioridade Alta
                </p>
                <h3 className="text-2xl font-bold mt-1">
                  {priorityCounts.alta}
                </h3>
              </div>
              <div className="p-2 bg-red-100 rounded-full">
                <AlertTriangle className="h-5 w-5 text-red-700" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filtros e pesquisa */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por ID, localização ou denunciante..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[160px]">
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    <span>Status</span>
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os status</SelectItem>
                  <SelectItem value="Em análise">Em análise</SelectItem>
                  <SelectItem value="Encaminhada">Encaminhada</SelectItem>
                  <SelectItem value="Resolvida">Resolvida</SelectItem>
                  <SelectItem value="Arquivada">Arquivada</SelectItem>
                </SelectContent>
              </Select>

              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-[160px]">
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    <span>Tipo</span>
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os tipos</SelectItem>
                  <SelectItem value="Violência Física">
                    Violência Física
                  </SelectItem>
                  <SelectItem value="Violência Psicológica">
                    Violência Psicológica
                  </SelectItem>
                  <SelectItem value="Violência Sexual">
                    Violência Sexual
                  </SelectItem>
                  <SelectItem value="Violência Moral">
                    Violência Moral
                  </SelectItem>
                  <SelectItem value="Violência Patrimonial">
                    Violência Patrimonial
                  </SelectItem>
                </SelectContent>
              </Select>

              <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                <SelectTrigger className="w-[160px]">
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    <span>Prioridade</span>
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as prioridades</SelectItem>
                  <SelectItem value="Alta">Alta</SelectItem>
                  <SelectItem value="Média">Média</SelectItem>
                  <SelectItem value="Baixa">Baixa</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabela de denúncias */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Denúncias</CardTitle>
          <CardDescription>
            {filteredReports.length}{" "}
            {filteredReports.length === 1
              ? "denúncia encontrada"
              : "denúncias encontradas"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">
                    <div className="flex items-center gap-1 cursor-pointer">
                      ID <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">
                    <div className="flex items-center gap-1 cursor-pointer">
                      Tipo <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">
                    <div className="flex items-center gap-1 cursor-pointer">
                      Localização <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">
                    <div className="flex items-center gap-1 cursor-pointer">
                      Status <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">
                    <div className="flex items-center gap-1 cursor-pointer">
                      Prioridade <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">
                    <div className="flex items-center gap-1 cursor-pointer">
                      Data <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">
                    <div className="flex items-center gap-1 cursor-pointer">
                      Responsável <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </th>
                  <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredReports.map((report, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-2 text-sm font-medium">
                      {report.id}
                    </td>
                    <td className="py-3 px-2 text-sm">{report.type}</td>
                    <td className="py-3 px-2 text-sm flex items-center">
                      <MapPin className="h-3 w-3 mr-1 text-gray-500" />
                      {report.location}
                    </td>
                    <td className="py-3 px-2 text-sm">
                      <Badge
                        className={`${
                          report.status === "Em análise"
                            ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                            : report.status === "Encaminhada"
                            ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                            : report.status === "Resolvida"
                            ? "bg-green-100 text-green-800 hover:bg-green-100"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                        }`}
                      >
                        {report.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-2 text-sm">
                      <Badge
                        className={`${
                          report.priority === "Alta"
                            ? "bg-red-100 text-red-800 hover:bg-red-100"
                            : report.priority === "Média"
                            ? "bg-orange-100 text-orange-800 hover:bg-orange-100"
                            : "bg-green-100 text-green-800 hover:bg-green-100"
                        }`}
                      >
                        {report.priority}
                      </Badge>
                    </td>
                    <td className="py-3 px-2 text-sm">{report.date}</td>
                    <td className="py-3 px-2 text-sm">{report.assignedTo}</td>
                    <td className="py-3 px-2 text-sm text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Ações</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="cursor-pointer">
                            <Eye className="h-4 w-4 mr-2" />
                            Ver detalhes
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">
                            <Shield className="h-4 w-4 mr-2" />
                            Atualizar status
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">
                            <FileText className="h-4 w-4 mr-2" />
                            Gerar relatório
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600 cursor-pointer">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Arquivar
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredReports.length === 0 && (
            <div className="py-8 text-center">
              <p className="text-muted-foreground">
                Nenhuma denúncia encontrada com os filtros selecionados.
              </p>
            </div>
          )}

          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-muted-foreground">
              Mostrando{" "}
              <span className="font-medium">{filteredReports.length}</span> de{" "}
              <span className="font-medium">{mockReports.length}</span>{" "}
              denúncias
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Anterior
              </Button>
              <Button variant="outline" size="sm" className="bg-purple-50">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                Próxima
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
