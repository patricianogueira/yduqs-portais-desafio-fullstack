import { RegisterRequest } from "@/app/form/types";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

export async function registerUser(payload: RegisterRequest) {
  try {
    const response = await api.post("/register", payload);
    return response.data;
    
  } catch (error: any) {

    if (error.response) {
      throw new Error(error.response.data?.message || "Erro no servidor");
    }
  }
}
