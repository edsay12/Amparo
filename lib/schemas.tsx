import { z } from "zod";

export const schemaStep1 = z.object({
  nome: z.string().optional(),
  email: z.string().email("E-mail inválido").optional(),
  telefone: z.string().min(10, "Informe um telefone válido"),
  cidade: z.string().min(3, "Informe cidade/estado"),
  contato: z.boolean().optional(),
});

export const schemaStep2 = z.object({
  tipoViolencia: z.string(),
  local: z.string(),
  data: z.string().optional(),
  hora: z.string().optional(),
  frequencia: z.string().optional(),
});

export const schemaStep3 = z.object({
  descricao: z.string().min(10, "Descreva o ocorrido"),
  agressor: z.string().optional(),
  testemunhas: z.string().optional(),
  evidencias: z.string().optional(),
  veracidade: z.literal(true, {
    errorMap: () => ({
      message: "Você deve confirmar a veracidade das informações",
    }),
  }),
});

export const denunciarViolenciaSchema = schemaStep1.merge(schemaStep2).merge(schemaStep3);

