import type { NextPage } from 'next'
import { Form } from '../components/Form';
import { FormLeft } from '../components/FormLeft'

import Head from "next/head";



const Home: NextPage = () => {



  return (
    <div>

      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Form>
        <FormLeft />
        <div>
          <img src="art.jpg" alt="art" />
        </div>
      </Form>

    </div >
  )
}

export default Home
