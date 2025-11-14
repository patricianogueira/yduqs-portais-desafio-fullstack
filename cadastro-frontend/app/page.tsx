"use client";
import { useState, useCallback } from "react";
import Navbar from "./src/components/navbar/Navbar";
import { CourseOptionCard } from "./src/components/card/CouseCard";
import Footer from "./src/components/footer/Footer";
import { Box } from "@mui/material";
import ParcelDrawer from "./src/components/drawer/Drawer";
import { InstallmentOption } from "./src/components/drawer/types";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [selected, setSelected] = useState<"preco" | "info" | "">("");
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState<InstallmentOption[] | undefined>(undefined);
  const [infoText, setInfoText] = useState<string>("");

  const handleSelect = (type: "preco" | "info") => {
    setSelected(type);
    setDrawerOpen(true);
    if (type === "preco") {
      setDrawerContent(optionsPrice);
      setInfoText("");
    } else {
      setDrawerContent(undefined);
      setInfoText(infoDrawer || "");
    }
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    setSelected("");
  };

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

  const optionsPrice: InstallmentOption[] = [
    { label: "1x R$ 2.613,6", total: "R$ 2.613,60", value: "1x" },
    { label: "3x R$ 900,90", total: "R$ 2.702,70", value: "3x" },
    { label: "6x R$ 465,30", total: "R$ 2.791,80", value: "6x" },
    { label: "9x R$ 320,10", total: "R$ 2.880,90", value: "9x" },
    { label: "12x R$ 247,5", total: "R$ 2.946,00", value: "12x" },
    { label: "15x R$ 200,97", total: "R$ 3.014,55", value: "15x" },
    { label: "18x R$ 169,95", total: "R$ 3.059,10", value: "18x" },
  ];

  const infoDrawer =
    "Inscreva-se para saber tudo sobre os valores e garantir a sua vaga!";

  const accordionItems = [
    {
      title: "Sobre a Bolsa Incentivo",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel turpis eget sapien tincidunt imperdiet. Pellentesque habitant morbi tristique senectus.",
    },
    {
      title: "Resumo das suas escolhas",
      content:
        "Mauris non justo at ligula dapibus lacinia. Duis at nunc vel purus interdum malesuada. Integer ut orci in mauris porta efficitur.",
    },
  ];

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

      <section className="flex flex-col items-start justify-center py-8 mx-4 md:mx-[88px]">
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
              onSelect={() => handleSelect(course.typeCard)}
            />
          ))}
        </Box>
      </section>

      <Footer />

      <ParcelDrawer
        open={isDrawerOpen}
        onClose={handleCloseDrawer}
        content={drawerContent || []}
        infoAccordions={accordionItems}
        infoMessage={infoText}
        onClick={() => router.push("/form")}
      />
    </main>
  );
}
