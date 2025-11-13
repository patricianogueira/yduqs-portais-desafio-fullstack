export interface FormUserData {
  nome: string;
  cpf: string;
  nascimento: string;
  email: string;
  celular: string;
  anoConclusao: string;
  termos: boolean;
  whatsapp: boolean;
}

export function validateForm(form: FormUserData): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!form.nome.trim()) {
    errors.nome = "Informe seu nome completo.";
  } else {
    const partesNome = form.nome.trim().split(" ");
    if (partesNome.length < 2) {
      errors.nome = "Informe nome e sobrenome.";
    }
  }

  if (!form.cpf.trim()) errors.cpf = "Informe seu CPF.";

  if (!form.nascimento.trim()) {
    errors.nascimento = "Informe sua data de nascimento.";
  } else {
    const nascimento = new Date(form.nascimento);
    const hoje = new Date();

    const idade =
      hoje.getFullYear() -
      nascimento.getFullYear() -
      (hoje <
      new Date(hoje.getFullYear(), nascimento.getMonth(), nascimento.getDate())
        ? 1
        : 0);

    if (idade < 16) {
      errors.nascimento = "Você precisa ter pelo menos 16 anos.";
    } else if (idade > 125) {
      errors.nascimento = "Idade inválida.";
    }
  }

  if (!form.email.trim()) errors.email = "Informe seu e-mail.";
  if (!form.celular.trim()) errors.celular = "Informe seu celular.";
  if (!form.anoConclusao.trim())
    errors.anoConclusao = "Informe o ano de conclusão.";
  if (!form.termos)
    errors.termos = "É necessário aceitar os termos do edital.";

  return errors;
}
