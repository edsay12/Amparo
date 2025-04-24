import { z } from "zod";

export const schemaStep1 = z.object({
  nome: z.string().optional().optional(),
  email: z.string().email("E-mail inválido").optional(),
  telefone: z.string({
    required_error: "Informe um telefone válido",
  }).min(10, "Informe um telefone válido"),
  cidade: z.string({
    required_error: "Informe cidade/estado",
  }).min(3, "Informe cidade/estado"),
  aceitoSerContactado: z.boolean().optional(),
});

export const schemaStep2 = z.object({
  tipoViolencia: z.string({
    required_error: "Selecione o tipo de violência",
  }),
  local: z.string({
    required_error: "Informe o local da ocorrência",
  }),
  data: z.string({
    required_error: "Informe a data da ocorrência",
  }),
  hora: z.string().optional(),
  frequencia: z.string().optional(),
});

export const schemaStep3 = z.object({
  descricao: z.string({
    required_error: "Descreva o ocorrido",
  }).min(100, "Deve conter pelo menos 100 caracteres"),
  agressor: z.string({}).optional(),
  testemunhas: z.string().optional(),
  evidencias: z.string({
    required_error: "Descreva as evidências disponíveis",
  }),
  veracidade: z.literal(true, {
    errorMap: () => ({
      message: "Você deve confirmar a veracidade das informações",
    }),
  }),
});

export const denunciarViolenciaSchema = schemaStep1.merge(schemaStep2).merge(schemaStep3);

