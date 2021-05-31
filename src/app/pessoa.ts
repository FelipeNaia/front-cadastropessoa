import { Contato } from "./contato";

export interface Pessoa {
  id: number;
  nome: string;
  cpf: string;
  nascimento: string;
  contatos: Contato[]
}
