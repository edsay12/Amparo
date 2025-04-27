export type PredicoesData = {
  ANO: number;
  NU_IDADE_N: number;
  CS_RACA: string;
  LOCAL_OCOR: string;
  TIPO_RELACAO: string;
  AUTOR_SEXO: number;
  OUT_VEZES: number;
  CS_ESCOL_N: string;
  UF: string;
};

export type PredicoesResultados = {
  fisica: number;
  psicológica: number;
  outros: number;
  nenhuma: number;
};

export type TipoProfissional = "psicologos" | "assistentes" | "advogados" | "medicos"
export type TipoAtendimento = "presencial" | "online" | "gratuito" | "todos"


export type  Profissional =  {
  id: number
  nome: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image:any
  titulo: string
  tipo: TipoProfissional
  badge: string
  badgeColor: string
  rating: number
  descricao: string
  local: string
  tipoDeAtendimento: string[]
  telefone: string
  email: string
  notaEspecial: {
    texto: string
    bgColor: string
    corDoTexto: string
  }
  organizacao?: boolean
}