"use server";
/* eslint-disable  @typescript-eslint/no-explicit-any */
export async function fetchDelegacias(lat: number, lng: number) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const radius = 10000; // em metros
  console.log(apiKey);

  type resultado = {
    tipo: string;
    nome: string;
    lat: number;
    lng: number;
  };

  const resultados: resultado[] = [];
  const tiposBusca = [
    { tipo: "Delegacia", keyword: "delegacia da mulher" },
    { tipo: "Centro de Referência", keyword: "centro de referência mulher" },
    { tipo: "Serviço de Saúde", keyword: "saúde mulher violência" },
  ];

  try {
    for (const busca of tiposBusca) {
      const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&keyword=${encodeURIComponent(
        busca.keyword
      )}&key=${apiKey}&language=pt-BR`;

      const res = await fetch(url);
      const data = await res.json();

      if (data?.results) {
        const locais = data.results.map((item: any) => ({
          nome: item.name,
          lat: item.geometry.location.lat,
          lng: item.geometry.location.lng,
          tipo: busca.tipo,
        }));
        resultados.push(...locais);
      }
    }
    return resultados;
  } catch (error) {
    console.log(error);
    return [];
  }
}
