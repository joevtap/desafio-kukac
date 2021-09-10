
import { TextField } from '../components/TextField';
import { SubmitButton } from '../components/SubmitButton';
import useForm from '../hooks/useForm'

export const FormLeft = () => {
  const { values, handleInput, handleSubmit, errors } = useForm();

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="text"
        name="cep"
        placeholder="99999-999"
        isRequired={true} value={values.cep}
        errors={errors}
        label="CEP"
        onChange={handleInput} />
      <TextField
        type="text"
        name="name"
        placeholder="Fulano de tal"
        isRequired={false}
        value={values.name}
        errors={errors}
        label="Seu nome"
        onChange={handleInput}
      />
      <TextField
        type="number"
        name="income"
        placeholder="Renda mensal"
        isRequired={true}
        value={values.income}
        errors={errors}
        label="Renda mensal"
        onChange={handleInput}
      />
      <TextField
        type="number"
        name="dependents"
        placeholder="Nº de dependentes"
        isRequired={true}
        value={values.dependents}
        errors={errors}
        label="Nº de dependentes"
        onChange={handleInput}
      />

      <SubmitButton>Enviar</SubmitButton>
    </form>
  )
}
