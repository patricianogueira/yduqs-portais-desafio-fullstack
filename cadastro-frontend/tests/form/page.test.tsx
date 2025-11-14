import FormPage from "@/app/form/page";
import { render, screen, fireEvent } from "@testing-library/react";

describe("FormPage", () => {
  test("preenche o formulário corretamente", () => {
    const { container } = render(<FormPage />);

    const nome = container.querySelector("#nome-completo") as HTMLInputElement;
    const cpf = container.querySelector("#cpf") as HTMLInputElement;
    const nascimento = container.querySelector("#data-nascimento") as HTMLInputElement;
    const email = container.querySelector("#email") as HTMLInputElement;
    const celular = container.querySelector("#celular-contato") as HTMLInputElement;
    const anoConclusao = container.querySelector("#ano-conclusao") as HTMLInputElement;

    const checkboxInputs = container.querySelectorAll('input[type="checkbox"]');
    const checkboxWhats = checkboxInputs[0];
    const checkboxTermos = checkboxInputs[1];

    fireEvent.change(nome, { target: { value: "João da Silva" } });
    fireEvent.change(cpf, { target: { value: "12345678900" } });
    fireEvent.change(nascimento, { target: { value: "2000-01-01" } });
    fireEvent.change(email, { target: { value: "teste@teste.com" } });
    fireEvent.change(celular, { target: { value: "11999999999" } });
    fireEvent.change(anoConclusao, { target: { value: "2020" } });

    fireEvent.click(checkboxWhats);
    fireEvent.click(checkboxTermos);

    expect(nome.value).toBe("João da Silva");
    expect(cpf.value).toBe("12345678900");
    expect(nascimento.value).toBe("2000-01-01");
    expect(email.value).toBe("teste@teste.com");
    expect(celular.value).toBe("11999999999");
    expect(anoConclusao.value).toBe("2020");

    expect(checkboxWhats).toBeChecked();
    expect(checkboxTermos).toBeChecked();
  });
});