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