import { fetchCepData } from "../services/handleApi";

interface DataTypes {
  name?: string;
  cep: string;
  income: number;
  dependents: number;
}

export const processData = async (data: DataTypes) => {
  const { name, income, dependents, cep } = data;

  const viacepData = await fetchCepData(cep);

  if (viacepData.erro) {
    return viacepData;
  } else {
    const {
      logradouro: street,
      bairro: neighborhood,
      complemento: details,
      localidade: city,
      uf: fu,
    } = viacepData;

    const perCapitaIncome = income / dependents;

    const response = {
      name,
      perCapitaIncome,
      street,
      details,
      neighborhood,
      city,
      fu,
    };

    return response;
  }
};
