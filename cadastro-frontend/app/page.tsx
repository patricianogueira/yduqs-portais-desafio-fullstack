"use client";
import { useState, useCallback } from "react";
import Navbar from "./src/components/navbar/Navbar";
import { CourseOptionCard } from "./src/components/card/CouseCard";
import Footer from "./src/components/footer/Footer";
import { Box } from "@mui/material";

export default function Home() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleSelect = useCallback((type: string) => {
    setSelectedCard(type);

    if (type === "preco") {

    }
  }, []);

  const courses = [
    {
      type: "Presencial | Manhã",
      label: "Presencial",
      typeCard: "preco",
      price: { value: "R$ 169,95", qtd: "18x" },
      address: {
        title: "CAMPINAS - VILA INDUSTRIAL",
        description: "RUA DR. SALES DE OLIVEIRA, Nº 1661 - VILA INDUSTRIAL - CAMP...",
      },
    },
    {
      type: "Digital (EaD)",
      label: "Digital",
      typeCard: "info",
      info: "Inscreva-se para saber tudo sobre os valores e garantir a sua vaga!",
      address: {
        title: "BARRA DA TIJUCA - TOM JOB...",
        description: "AV. DAS AMÉRICAS, 4.200, BLOCO 11 - BARRA DA TIJUCA...",
      },
    },
  ] as const;

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-blue-800 text-white text-center py-8">
        <h1 className="text-2xl font-semibold">
          Vamos começar, escolha as opções do seu curso
        </h1>
        <p className="text-sm text-blue-100">
          Use os filtros para saber o preço do seu curso e fazer sua inscrição.
        </p>
      </section>

      <section className="flex flex-col items-start justify-center py-8 mx-[88px]">
        <p
          className="text-base mb-4 text-left"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            color: "#121212",
          }}
        >
          {courses.length} opções encontradas
        </p>


        <Box className="flex flex-wrap gap-6 justify-start">
          {courses.map((course) => (
            <CourseOptionCard
              key={course.type}
              {...course}
              onSelect={handleSelect}
            />
          ))}
        </Box>
      </section>

      <Footer />
    </main>
  );
}
