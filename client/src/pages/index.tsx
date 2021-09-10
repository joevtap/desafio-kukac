import type { NextPage } from 'next'
import useForm from '../hooks/useForm'
import { TextField } from '../components/TextField';
import Head from "next/head";


const Home: NextPage = () => {

  const { values, handleInput, handleSubmit, errors } = useForm();

  return (
    <div>

      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>


      <form onSubmit={handleSubmit}>
        <TextField type="text" name="cep" placeholder="99999-999" isRequired={true} value={values.cep} errors={errors} label="CEP" onChange={handleInput} />
        <label htmlFor="cep">CEP
          <input type="text" name="cep" id="cep" placeholder="CEP" value={values.cep} required onChange={handleInput} />
          {errors.cep && <p>{errors.cep}</p>}
        </label>
        <label htmlFor="name">Nome
          <input type="text" name="name" id="name" placeholder="Nome" value={values.name} onChange={handleInput} />
          {errors.name && <p>{errors.name}</p>}

        </label>
        <label htmlFor="income">Renda mensal
          <input type="number" name="income" id="income" placeholder="Renda mensal" value={values.income} required onChange={handleInput} />
          {errors.income && <p>{errors.income}</p>}
        </label>
        <label htmlFor="dependents">Familiares dependentes
          <input type="number" name="dependents"
            id="dependents" placeholder="Familiares dependentes" value={values.dependents} required onChange={handleInput} />
          {errors.dependents && <p>{errors.dependents}</p>}

        </label>
        <button>Submit</button>
      </form>

    </div>
  )
}

export default Home
