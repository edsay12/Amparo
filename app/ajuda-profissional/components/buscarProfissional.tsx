"use client";
import { Profissional } from "@/@types";
import Section from "@/components/Section";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Profissionais } from "@/lib/constants/profissionais";

import { Badge, Clock, Mail, MapPin, Phone, Search, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

function BuscarProfissional() {
  // Estados para os filtros
  const [especialidade, setEspecialidade] = useState<string>("todos");
  const [localizacao, setLocalizacao] = useState<string>("");
  const [atendimento, setAtendimento] = useState<string>("todos");
  const [ordenacao, setOrdenacao] = useState<string>("relevancia");

  // Estado para paginação
  const [currentPage, setCurrentPage] = useState<number>(1);
  const professionalsPerPage = 6;
  // Estado para os profissionais filtrados
  const [filteredProfessionals, setFilteredProfessionals] =
    useState<Profissional[]>(Profissionais);

  // Aplicar filtros
  const applyFilters = () => {
    let result = Profissionais;

    // Filtrar por especialidade
    if (especialidade !== "todos") {
      result = result.filter((prof) => prof.tipo === especialidade);
    }

    // Filtrar por localização
    if (localizacao.trim() !== "") {
      const searchTerm = localizacao.toLowerCase().trim();
      result = result.filter((prof) =>
        prof.local.toLowerCase().includes(searchTerm)
      );
    }

    // Filtrar por tipo de atendimento
    if (atendimento !== "todos") {
      result = result.filter((prof) =>
        prof.tipoDeAtendimento.includes(atendimento)
      );
    }

    // Ordenar resultados
    if (ordenacao === "avaliacao") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    } else if (ordenacao === "recentes") {
      // Aqui seria uma ordenação por data, mas como não temos esse campo,
      // vamos apenas inverter a ordem para simular
      result = [...result].reverse();
    }

    setFilteredProfessionals(result);
    setCurrentPage(1); // Voltar para a primeira página ao filtrar
  };

  // Calcular profissionais para a página atual
  const indexOfLastProfessional = currentPage * professionalsPerPage;
  const indexOfFirstProfessional =
    indexOfLastProfessional - professionalsPerPage;
  const currentProfessionals = filteredProfessionals.slice(
    indexOfFirstProfessional,
    indexOfLastProfessional
  );

  // Calcular total de páginas
  const totalPages = Math.ceil(
    filteredProfessionals.length / professionalsPerPage
  );

  // Mudar de página
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Renderizar estrelas de avaliação
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-current" : ""}`}
        />
      ));
  };

  // Efeito para aplicar filtros quando os valores mudarem
  useEffect(() => {
    applyFilters();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [especialidade, atendimento, ordenacao]);

  // Função para lidar com a pesquisa por localização
  const handleLocationSearch = () => {
    applyFilters();
  };

  return (
    <Section>
      <Card className="p-6 rounded-lg shadow-md border border-purple-100 mb-8">
        <h2 className="text-xl font-bold text-purple-800 mb-4">
          Buscar Profissionais
        </h2>

        <div className="grid gap-4 md:grid-cols-3 mb-4">
          <div>
            <Label htmlFor="especialidade" className="mb-1 block">
              Especialidade
            </Label>
            <Select
              defaultValue="psicologos"
              value={especialidade}
              onValueChange={setEspecialidade}
            >
              <SelectTrigger id="especialidade">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="psicologos">Psicólogos</SelectItem>
                <SelectItem value="assistentes">Assistentes Sociais</SelectItem>
                <SelectItem value="advogados">Advogados</SelectItem>
                <SelectItem value="medicos">Médicos</SelectItem>
                <SelectItem value="todos">Todos os Profissionais</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="localizacao" className="mb-1 block">
              Localização
            </Label>
            <Input
              id="localizacao"
              placeholder="Digite sua cidade ou estado"
              value={localizacao}
              onChange={(e) => setLocalizacao(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLocationSearch()}
            />
          </div>

          <div>
            <Label htmlFor="atendimento" className="mb-1 block">
              Tipo de Atendimento
            </Label>
            <Select
              defaultValue="todos"
              value={atendimento}
              onValueChange={setAtendimento}
            >
              <SelectTrigger id="atendimento">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos</SelectItem>
                <SelectItem value="presencial">Presencial</SelectItem>
                <SelectItem value="online">Online</SelectItem>
                <SelectItem value="gratuito">Gratuito</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button className="w-full bg-purple-800 hover:bg-purple-900 mt-2">
          <Search className="mr-2 h-4 w-4" /> Buscar Profissionais
        </Button>
      </Card>

      {/* Resultados da busca */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-purple-800">
            Profissionais Disponíveis
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">
              {filteredProfessionals.length} resultados
            </span>
            <Select value={ordenacao} onValueChange={setOrdenacao}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevancia">Relevância</SelectItem>
                <SelectItem value="avaliacao">Melhor Avaliação</SelectItem>
                <SelectItem value="recentes">Mais Recentes</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {filteredProfessionals.length === 0 ? (
          <div className="bg-white p-8 rounded-lg border border-purple-200 text-center">
            <h3 className="text-xl font-bold text-purple-800 mb-2">
              Nenhum profissional encontrado
            </h3>
            <p className="text-gray-600 mb-4">
              Não encontramos profissionais que correspondam aos seus critérios
              de busca.
            </p>
            <Button
              variant="outline"
              className="border-purple-300 text-purple-700 hover:bg-purple-50"
              onClick={() => {
                setEspecialidade("todos");
                setLocalizacao("");
                setAtendimento("todos");
                setOrdenacao("relevancia");
              }}
            >
              Limpar filtros
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {currentProfessionals.map((prof) => (
              <Card
                key={prof.id}
                className="border-purple-200 hover:shadow-md transition-shadow"
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12 border-2 border-purple-200">
                        <Image
                          src={prof.image}
                          alt={prof.nome}
                          width={100}
                          height={100}
                        />
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{prof.nome}</CardTitle>
                        <CardDescription className="flex items-center gap-1">
                          {prof.titulo}
                          <Badge className={`ml-2 ${prof.badgeColor}`}>
                            {prof.badge}
                          </Badge>
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex text-yellow-400">
                      {renderStars(prof.rating)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-700">{prof.descricao}</p>

                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4 text-purple-600" />
                      <span>
                        {prof.local} -{" "}
                        {prof.tipoDeAtendimento.includes("presencial") &&
                        prof.tipoDeAtendimento.includes("online")
                          ? "Presencial e Online"
                          : prof.tipoDeAtendimento.includes("presencial")
                          ? "Apenas Presencial"
                          : "Apenas Online"}
                      </span>
                    </div>

                    {prof.telefone && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="h-4 w-4 text-purple-600" />
                        <span>{prof.telefone}</span>
                      </div>
                    )}

                    {prof.email && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="h-4 w-4 text-purple-600" />
                        <span>{prof.email}</span>
                      </div>
                    )}

                    <div
                      className={`${prof.notaEspecial.bgColor} p-2 rounded-md ${prof.notaEspecial.corDoTexto} flex items-center gap-2 mt-2`}
                    >
                      <Clock className="h-4 w-4" />
                      <span>{prof.notaEspecial.texto}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <Button className="bg-purple-700 hover:bg-purple-800">
                      {prof.organizacao
                        ? "Mais Informações"
                        : "Entrar em Contato"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Paginação */}
        {filteredProfessionals.length > 0 && (
          <div className="mt-10">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) paginate(currentPage - 1);
                    }}
                    className={
                      currentPage === 1 ? "pointer-events-none opacity-50" : ""
                    }
                  />
                </PaginationItem>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (number) => {
                    // Mostrar apenas algumas páginas para não sobrecarregar a interface
                    if (
                      number === 1 ||
                      number === totalPages ||
                      (number >= currentPage - 1 && number <= currentPage + 1)
                    ) {
                      return (
                        <PaginationItem key={number}>
                          <PaginationLink
                            href="#"
                            isActive={currentPage === number}
                            onClick={(e) => {
                              e.preventDefault();
                              paginate(number);
                            }}
                          >
                            {number}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    }

                    // Adicionar elipses para indicar páginas omitidas
                    if (number === currentPage - 2 && currentPage > 3) {
                      return (
                        <PaginationItem key="ellipsis-start">
                          <PaginationEllipsis />
                        </PaginationItem>
                      );
                    }

                    if (
                      number === currentPage + 2 &&
                      currentPage < totalPages - 2
                    ) {
                      return (
                        <PaginationItem key="ellipsis-end">
                          <PaginationEllipsis />
                        </PaginationItem>
                      );
                    }

                    return null;
                  }
                )}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages) paginate(currentPage + 1);
                    }}
                    className={
                      currentPage === totalPages
                        ? "pointer-events-none opacity-50"
                        : ""
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>

      <Card className="bg-white p-6 rounded-lg shadow-md border border-purple-100 mb-8">
        <h2 className="text-xl font-bold text-purple-800 mb-4">
          Como escolher o profissional adequado
        </h2>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="bg-purple-100 p-2 rounded-full text-purple-700 mt-1">
              1
            </div>
            <div>
              <h3 className="font-semibold text-lg">
                Identifique suas necessidades
              </h3>
              <p className="text-gray-600">
                Diferentes tipos de violência podem requerer diferentes tipos de
                apoio. Psicólogos ajudam com o trauma emocional, advogados com
                questões legais, e assistentes sociais com recursos e planos de
                segurança.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-purple-100 p-2 rounded-full text-purple-700 mt-1">
              2
            </div>
            <div>
              <h3 className="font-semibold text-lg">
                Verifique a especialização
              </h3>
              <p className="text-gray-600">
                Busque profissionais com experiência específica em violência
                contra a mulher. Eles terão melhor compreensão da sua situação e
                das melhores abordagens.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-purple-100 p-2 rounded-full text-purple-700 mt-1">
              3
            </div>
            <div>
              <h3 className="font-semibold text-lg">
                Considere a acessibilidade
              </h3>
              <p className="text-gray-600">
                Avalie se você prefere atendimento presencial ou online, e se o
                profissional está em uma localização acessível para você.
                Verifique também as opções de pagamento e se há atendimento
                gratuito disponível.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-purple-100 p-2 rounded-full text-purple-700 mt-1">
              4
            </div>
            <div>
              <h3 className="font-semibold text-lg">Confie na sua intuição</h3>
              <p className="text-gray-600">
                É importante que você se sinta confortável e segura com o
                profissional escolhido. Se não se sentir à vontade após o
                primeiro contato, é perfeitamente aceitável buscar outra pessoa.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </Section>
  );
}

export default BuscarProfissional;
