// components/Mapa.tsx
"use client";

import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { Pin } from "lucide-react";
import { useState } from "react";

const containerStyle = {
  width: "100%",
  height: "400px",
};

type MapaProps = {
  center: { lat: number; lng: number };
  markers: { lat: number; lng: number; nome: string }[];
  apiKey: string;
};

export default function Mapa({ center, markers, apiKey }: MapaProps) {
  const [activeMarker, setActiveMarker] = useState<number | null>(null);

  const handleActiveMarker = (index: number) => {
    setActiveMarker(index);
  };

  const handleCloseInfoWindow = () => {
    setActiveMarker(null);
  };

  return (
    <LoadScript googleMapsApiKey={apiKey} language="pt-BR">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker
          position={center}
          label={{
            text: "Você",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        />
        {markers.map((m, i) => (
          <div key={i}>
            <Marker
              position={{ lat: m.lat, lng: m.lng }}
              title={m.nome}
              onMouseOver={() => setActiveMarker(i)}
              onMouseOut={() => setActiveMarker(null)}
              onClick={() => handleActiveMarker(i)}
            />
            {activeMarker === i && (
              <InfoWindow
                position={{ lat: m.lat, lng: m.lng }}
                onCloseClick={handleCloseInfoWindow}
                options={{
                  pixelOffset: new window.google.maps.Size(0, -40), // Ajusta a posição para ficar acima do marcador
                }}
              >
                <div>
                  <h3 className="font-bold">{m.nome}</h3>
                </div>
              </InfoWindow>
            )}
          </div>
        ))}
      </GoogleMap>
    </LoadScript>
  );
}
