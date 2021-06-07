import {Pessoa} from "./pessoa";

export interface PessoaResponse {
  content: Pessoa[],
  totalElements: number,
  totalPages: number
}
