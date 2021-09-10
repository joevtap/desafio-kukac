export interface ErrorsTypes {
  name?: string;
  cep: string;
  income: string;
  dependents: string;
}

export function validateData(values) {
  let errors: ErrorsTypes = {
    name: "",
    cep: "",
    income: "",
    dependents: "",
  };

  let status = "ok";

  if (!values.cep) {
    errors.cep = "Informe o CEP";
    status = "err";
  } else if (!/^\d{5}-\d{3}$/.test(values.cep)) {
    errors.cep = "CEP não está no formato correto";
    status = "err";
  }
  if (values.income <= 0) {
    errors.income = "Informe renda mensal válida";
    status = "err";
  }

  if (!(values.dependents > 0)) {
    errors.dependents = "Informe a quantidade de dependentes (mínimo é 1)";
    status = "err";
  }

  return { errors, status };
}
