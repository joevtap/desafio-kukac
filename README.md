![Banner](./banner.png)

## Índice

- [Ideia](#ideia)
- [Design](#design)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como rodar o projeto](#como-rodar-o-projeto)
- [Alterar portas](#alterar-portas)

## Ideia

Este é um app criado como projeto para o processo seletivo de estágio na Kukac. Não haviam instruções a respeito da temática do app, então contextualizei o que foi pedido em um formulário de pesqusia destinado a colaboradores de uma empresa fictícia.

## Design

A o design de interface foi feito por meio do Figma (ferramenta de prototipação) utilizando de cores baseadas na imagem escolhida por mim em um [repositório de imagens free to use](https://unsplash.com/photos/m_7p45JfXQo).

Acesse o projeto no Figma [clicando aqui](https://www.figma.com/file/bOJ0kt1OB9hR0FdtUpvhbG/Kukac-Pesquisa-de-colaboradores?node-id=0%3A1)

## Tecnologias Utilizadas

Foram utilizadas algumas tecnologias da minha stack favorita, PERN (ou PENN):

- Express
- React (Next.js)
- Node
- Typescript
- CSS

## Como rodar o projeto

Para rodar o projeto, primeiro é preciso cloná-lo em sua máquina local. Para fazer isso, insira no terminal (na pasta de destino desejada)

> git clone https://github.com/joevtap/desafio-kukac

Depois de clonar, navegue até a raíz do projeto

> cd desafio-kukac

Instale as dependências com

> npm run install

Ou

> yarn run install

Agora será preciso iniciar o server e o client em duas instâncias de terminal diferentes. Não será possível iniciar ambos na mesma instância.

**Tenha certeza de que as portas 3000 e 3001 do seu localhost estão livres**

Para iniciar o server:

> npm run server

Para iniciar o client:

> npm run client

## Alterar portas

Se for necessário, você pode alterar as portas que o projeto utilizará.

Pra fazer isso, primeiramente modifique as portas padrão no arquivo `.env` localizado na raiz do projeto

Depois, inicie o servidor normalmente.

Para iniciar o client, será necessário fazer isso manualmente:

> cd client && yarn dev --port 5000

Substitua `5000` pela mesma porta pro cliente definida no arquivo `.env`
