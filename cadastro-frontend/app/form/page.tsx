"use client";

import { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import Navbar from "../src/components/navbar/Navbar";
import Footer from "../src/components/footer/Footer";
import { validateForm, FormUserData } from "../src/utils/formValidation";
import { RegisterRequest } from "./types";
import { registerUser } from "../src/services/registerService";
import FormAlertDialog from "../src/components/alert/AlertDialog";

export default function FormPage() {
  const [form, setForm] = useState<FormUserData>({
    nome: "",
    cpf: "",
    nascimento: "",
    email: "",
    celular: "",
    anoConclusao: "",
    termos: false,
    whatsapp: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [modal, setModal] = useState({
    open: false,
    message: "",
    type: "success" as "success" | "error",
  });
  const handleChange = (field: string, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    const payload: RegisterRequest = {
      fullName: form.nome,
      cpf: form.cpf,
      birthDate: form.nascimento,
      email: form.email,
      phone: form.celular,
      highSchoolGraduationYear: form.anoConclusao,
      agreeToTerms: form.termos,
      acceptUpdates: form.whatsapp,
    };


    try {
      await registerUser(payload);

      setModal({ open: true, message: "Formulário enviado com sucesso!", type: "success" });

      setForm({
        nome: "",
        cpf: "",
        nascimento: "",
        email: "",
        celular: "",
        anoConclusao: "",
        termos: false,
        whatsapp: false,
      });

    } catch (err: any) {
      setModal({ open: true, message: err.message, type: "error" });
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-[#144BC8] text-white text-center py-8">
        <Typography
          variant="h5"
          fontWeight={500}
          fontSize={32}
          fontFamily="Montserrat"
        >
          Queremos saber um pouco mais sobre você
        </Typography>
      </section>

      <section className="mx-4 md:mx-[88px]">
        <Box
          component="form"
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 max-w-lg mx-auto py-8 w-full"
        >
          <TextField
            label="Nome completo"
            value={form.nome}
            onChange={(e) => handleChange("nome", e.target.value)}
            fullWidth
            error={!!errors.nome}
            helperText={errors.nome}
          />

          <TextField
            label="CPF"
            value={form.cpf}
            onChange={(e) => handleChange("cpf", e.target.value)}
            fullWidth
            error={!!errors.cpf}
            helperText={errors.cpf}
          />

          <TextField
            label="Data de nascimento"
            type="date"
            value={form.nascimento}
            onChange={(e) => handleChange("nascimento", e.target.value)}
            fullWidth
            error={!!errors.nascimento}
            helperText={errors.nascimento}
          />

          <TextField
            label="E-mail"
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            fullWidth
            error={!!errors.email}
            helperText={errors.email}
          />

          <TextField
            label="Celular para contato"
            value={form.celular}
            onChange={(e) => handleChange("celular", e.target.value)}
            fullWidth
            error={!!errors.celular}
            helperText={errors.celular}
          />

          <TextField
            label="Ano de conclusão do ensino médio"
            value={form.anoConclusao}
            onChange={(e) => handleChange("anoConclusao", e.target.value)}
            fullWidth
            error={!!errors.anoConclusao}
            helperText={errors.anoConclusao}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={form.whatsapp}
                onChange={(e) => handleChange("whatsapp", e.target.checked)}
              />
            }
            label={
              <span
                className="text-[16px] font-medium"
                color="#121212"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Aceito receber atualizações sobre minha inscrição pelo WhatsApp.
              </span>
            }
          />

          <Box>
            <FormControlLabel
              control={
                <Checkbox
                  checked={form.termos}
                  onChange={(e) => handleChange("termos", e.target.checked)}
                />
              }
              label={
                <p
                  className="text-[16px] font-medium leading-relaxed" color="#121212"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Li e concordo com os{" "}
                  <a
                    href="#"
                    className="underline text-[#144BC8] hover:text-[#0F3EA3] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    termos do edital
                  </a>
                  , bem como com o tratamento dos meus dados para fins de prospecção dos serviços
                  educacionais prestados pela Estácio e demais instituições de ensino do mesmo{" "}
                  <a
                    href="#"
                    className="underline text-[#144BC8] hover:text-[#0F3EA3] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Grupo Econômico
                  </a>
                  , de acordo com a nossa política de privacidade.
                </p>
              }
            />
            {errors.termos && (
              <Typography variant="caption" color="error" sx={{ ml: 4 }}>
                {errors.termos}
              </Typography>
            )}
          </Box>

          <Box className="flex justify-end md:justify-start">
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#144BC8",
                borderRadius: 2,
                py: 1.5,
                mt: 2,
                width: 110,
                textTransform: "none",
              }}
            >
              Avançar
            </Button>
          </Box>

        </Box>
      </section>

      <Footer />

      <FormAlertDialog
        open={modal.open}
        message={modal.message}
        type={modal.type}
        onClose={() => setModal({ ...modal, open: false })}
      />

    </main>
  );
}
