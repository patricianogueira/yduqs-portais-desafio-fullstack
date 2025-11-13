"use client";
import { Box, TextField, Typography, Button, Checkbox, FormControlLabel } from "@mui/material";
import Navbar from "../src/components/navbar/Navbar";
import Footer from "../src/components/footer/Footer";

export default function FormPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-[#144BC8] text-white text-center py-8">
        <Typography variant="h5" fontWeight={600}>
          Queremos saber um pouco mais sobre você
        </Typography>
      </section>

      <Box
        component="form"
        className="flex flex-col gap-4 max-w-lg mx-auto py-8 w-full"
      >
        <TextField label="Nome completo" fullWidth />
        <TextField label="CPF" fullWidth />
        <TextField label="Data de nascimento" fullWidth />
        <TextField label="E-mail" fullWidth />
        <TextField label="Celular para contato" fullWidth />
        <TextField label="Ano de conclusão do ensino médio" fullWidth />

        <FormControlLabel
          control={<Checkbox />}
          label="Li e concordo com os termos do edital..."
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Aceito receber atualizações sobre minha inscrição pelo WhatsApp."
        />

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#144BC8",
            borderRadius: 2,
            py: 1.5,
            mt: 2,
            textTransform: "none",
          }}
        >
          Avançar
        </Button>
      </Box>

      <Footer />
    </main>
  );
}
