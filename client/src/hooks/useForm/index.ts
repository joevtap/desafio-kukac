import { useState } from "react";
import { validateData } from "./validate";
import { mask } from "remask";
import axios from "axios";

interface APIRequestTypes {
  name?: string;
  cep: string;
  income: number;
  dependents: number;
}

interface ErrorsTypes {
  name?: string;
  cep: string;
  income: string;
  dependents: string;
}

const useForm = () => {
  const [values, setValues] = useState<APIRequestTypes>({
    name: "",
    cep: "",
    income: 0,
    dependents: 1,
  });

  const [errors, setErrors] = useState<ErrorsTypes>({
    name: "",
    cep: "",
    income: "",
    dependents: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;

    if (name == "cep") {
      setValues({
        ...values,
        [name]: mask(value, "99999-999"),
      });
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { errors, status } = validateData(values);
    setErrors(errors);

    if (status === "ok") {
      try {
        const req = await axios.post("http://localhost:3001/api", values);

        if (req.data.erro) {
          setErrors({ ...errors, cep: "CEP Invalido!" });
        } else {
          window.alert(JSON.stringify(req.data));
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return {
    values,
    errors,
    handleInput,
    handleSubmit,
  };
};

export default useForm;
