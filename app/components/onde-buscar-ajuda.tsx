"use client";
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
          console.log(resultado);
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
          className=" h-screen w-screen
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

          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75168.58778350841!2d-34.90848642667724!3d-8.043984238786006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab197aed31e8b1%3A0xfc286bacd8a1d143!2sDepartamento%20De%20Pol%C3%ADcia%20Da%20Mulher!5e0!3m2!1spt-BR!2sbr!4v1743984633398!5m2!1spt-BR!2sbr"
            width="600"
            height="350"
            loading="lazy"
          ></iframe> */}
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
