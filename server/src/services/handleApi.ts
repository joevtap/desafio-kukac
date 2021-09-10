import axios from "axios";

export async function fetchCepData(cep: string) {
  try {
    const { data: viacepData } = await axios.get(
      `https://viacep.com.br/ws/${cep}/json/`
    );

    return viacepData;
  } catch (error) {
    return error;
  }
}
