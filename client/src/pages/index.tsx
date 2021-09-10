import type { NextPage } from 'next'
import { ChangeEvent, MouseEvent, useState } from 'react'
import { mask, unMask } from 'remask';
import axios from 'axios';

interface APIRequestTypes {
  name?: string;
  cep: string;
  income: number;
  dependents: number;
}

const Home: NextPage = () => {

  const [cep, setCep] = useState("");
  const [name, setName] = useState("");
  const [income, setIncome] = useState("");
  const [dependents, setDependents] = useState("");

  const APIRequest: APIRequestTypes = {
    name,
    cep: unMask(cep),
    income: Number(income),
    dependents: Number(dependents)
  }

  const handleCep = (event: ChangeEvent<HTMLInputElement>): void =>
    setCep(mask(event.target.value, "99999-999"))


  const handleName = (event: ChangeEvent<HTMLInputElement>): void =>
    setName(event.target.value)

  const handleIncome = (event: ChangeEvent<HTMLInputElement>): void =>
    setIncome(event.target.value)


  const handleDependents = (event: ChangeEvent<HTMLInputElement>): void =>
    setDependents(event.target.value)

  const submitForm = async (event: MouseEvent<HTMLInputElement>) => {
    event.preventDefault()


    if (/^\d{5}-\d{3}$/.test(cep) && income && dependents) {
      try {
        const req = await axios.post('http://localhost:3001/api', APIRequest);

        if (req.data.erro) {
          window.alert("ERRO: CEP Invalido!")
        } else {
          window.alert(JSON.stringify(req.data))
        }

      } catch (error) {
        console.error(error)
      }
    } else {
      window.alert("ERRO: Cheque seus dados")
    }

  }


  return (
    <div>
      <form>
        <label htmlFor="cep">CEP
          <input type="text" name="cep" id="cep" placeholder="CEP" value={cep} required onChange={handleCep} />
        </label>
        <label htmlFor="name">Nome
          <input type="text" name="name" id="name" placeholder="Nome" value={name} onChange={handleName} />
        </label>
        <label htmlFor="income">Renda mensal
          <input type="number" name="income" id="income" placeholder="Renda mensal" value={income} required onChange={handleIncome} />
        </label>
        <label htmlFor="dependents">Familiares dependentes
          <input type="number" name="dependents" id="dependents" placeholder="Familiares dependentes" value={dependents} required onChange={handleDependents} />
        </label>
        <button onClick={submitForm}>Submit</button>
      </form>

    </div>
  )
}

export default Home
