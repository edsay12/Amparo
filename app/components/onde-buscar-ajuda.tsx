"use client";
/* eslint-disable  @typescript-eslint/no-explicit-any */
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import Link from "next/link";

import { useState } from "react";
import { fetchDelegacias } from "@/lib/actions/getDelegacias.actions";
import Mapa from "@/components/mapa";

function SectionOndeBuscarAjuda() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
  const [delegacias, setDelegacias] = useState<any[]>([]);
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  async function getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const userLoc = { lat: latitude, lng: longitude };
          setUserLocation(userLoc);

          const resultado = await fetchDelegacias(latitude, longitude);
          setDelegacias(resultado);
        },
        (error) => {
          console.error("Erro ao obter localização:", error);
        }
      );
    } else {
      console.error("Geolocalização não suportada");
    }
  }

  return (
    <Section
      title="Onde Buscar Ajuda"
      description="Encontre os serviços de apoio mais próximos de você"
      id="onde"
    >
      <div className="flex w-full flex-col  md:flex-row gap-2 bg-purple-50 p-5 mt-12 ">
        <div className="space-y-4 w-full">
          <div className="space-y-2">
            <h4>Mapa de Serviços</h4>
            <p className="text-muted-foreground text-sm">
              Utilize o mapa interativo para localizar delegacias da mulher,
              centros de referência, casas- abrigo e outros serviços de apoio em
              sua região.
            </p>
          </div>

          <div className="space-y-4 ">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <span>Delegacias da Mulher</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <span>Centros de Referência</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <span>Casas-Abrigo</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
              <span>Serviços de Saúde Especializados</span>
            </div>
          </div>
          <div>
            <Button
              variant="default"
              className="mt-6"
              onClick={getUserLocation}
            >
              Buscar local proximo
            </Button>
          </div>
        </div>

        <div
          className=" h-full w-full
        "
        >
          <Mapa
            apiKey={apiKey}
            center={{
              lat: userLocation ? userLocation!.lat : -7.936129,
              lng: userLocation ? userLocation!.lng : -34.902804,
            }}
            markers={delegacias}
          />
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-center text-muted-foreground text-sm ">
          Não encontrou um serviço próximo? Ligue para o 180 - Central de
          Atendimento à Mulher
        </p>
        <Link href="/ligue180">
          <Button variant="outline" className="mt-6 text-gray-900">
            <PhoneCall className="h-5 w-5" />
            Ligue 180 (Ligação Gratuita)
          </Button>
        </Link>
      </div>
    </Section>
  );
}

export default SectionOndeBuscarAjuda;
