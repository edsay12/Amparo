const prepararDadosParaAPI = (answers: Record<number, string>) => {
  const dataNascimento = new Date(answers[1]);
  const anoAtual = 2023;

  const idade = anoAtual - dataNascimento.getFullYear();

  const dadosAPI = {
    ANO: 2023,
    NU_IDADE_N: idade,
    CS_RACA: answers[2],
    LOCAL_OCOR: answers[3],
    TIPO_RELACAO: answers[4],
    AUTOR_SEXO: Number(answers[5]),
    OUT_VEZES: Number(answers[6]),
    CS_ESCOL_N: answers[7],
    UF: "PE",
  };

  return dadosAPI;
};

async function getPredicoes(data: Record<number, string>) {
  const dados = prepararDadosParaAPI(data);
  try {
    const response = await fetch("http://localhost:8000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...dados,
      }),
    });
    const resultado = await response.json();
    console.log("Resultado da API:", resultado);
    return resultado;
  } catch {
    return null;
  }
}

export default getPredicoes;
