# API-IMOBILIARIA

Esta API é o resultado final do Projeto de Módulo 5 da Resília Eduação.

O objetivo da API é fornecer o back-end para a nossa aplicação princial projetada em React. Realizando o CRUD para o nosso aplicativo que simula um site para buscar e encontrar propriedades para aluguel e venda.




## Stack utilizada

**Back-end:** Node, Express, TypeScript


## Autores

- [@anacornachi](https://github.com/anacornachi)
- [@helenamachado](https://github.com/helena-machado)
- [@ivangeier](https://github.com/ivangeier)
- [@nadiamaziel](https://github.com/Nadiamizael)
- [@sabrinacouto](https://github.com/sabrinacouto)
## Live URL

https://api-imobiliaria-m5.herokuapp.com/


# Documentação da API

## Propriedades

#### Retorna todas as propriedades cadastradas

```http
  GET /properties
```


#### Retorna um item

```http
  GET /property/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### Pesquisa uma propriedade através do parâmetros

```http
  GET /properties/search/
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `mode`      | `string` | Aluguel ou Venda `&mode=aluguel` `&mode=venda` |
| `min` `max`      | `number` | Valor mínimo e máximo `&min=1000` `&max=50000` **Obrigatório**. `&min=1000&max=1000` min e max devem ser utilizados na mesma query, caso contrário os valores serão ignorados |
| `beds`      | `number` | Numero de quartos `&beds=2` |
| `baths`      | `number` | Numero de banheiros `&baths=1` |
| `garage`      | `number` | Numero de garagens `&garage=2` |
| `type`      | `string` | Tipo de imóvel `&type=casa` |
| `state`      | `string` | Estado onde esta o imóvel `&state=SP` |

#### Deletar propriedade

```http
  DELETE /properties/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### Registrar um nova propriedade

```http
  POST /properties/register
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `title`      | `string` | **Obrigatório**. Título da propriedade/Anuncio |
| `state`      | `string` | **Obrigatório**. Estado |
| `street`      | `string` | **Obrigatório**. Logradouro |
| `city`      | `string` | **Obrigatório**. Nome da cidade |
| `amountBedrooms`      | `number` | **Obrigatório**. Número de quartos |
| `amountBathrooms`      | `number` | **Obrigatório**. Número de banheiros |
| `amountGarage`      | `number` | **Obrigatório**. Número de garagens |
| `valueCondominium`      | `number` | **Obrigatório**. O ID do item que voc+ê quer |
| `iptu`      | `number` | **Obrigatório**. Valor do condominio |
| `valueRental`      | `number` | **Obrigatório**. Valor do aluguel do imóvel |
| `valueSell`      | `number` | **Obrigatório**. Valor de venda do imóvel |
| `isSelling`      | `boolean` | **Obrigatório**. Imóvel esta a venda |
| `tisRenting`      | `boolean` | **Obrigatório**. Imóvel esta para alugar |
| `type`      | `string` | **Obrigatório**. Tipo de proṕriedade |
| `images`      | `[string]` | **Obrigatório**. Imagens da propriedade, array de string os os links |


## Usuário

####  Retornar usuário por ID
##### Rota autenticada 🔐
Retorna as informações do próprio usuário logado

```http
  GET /user
```

####  Criar um novo usuário

```http
  POST /user/register
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `firstName`      | `string` | **Obrigatório**. Primeiro nome do usuário |
| `lastName`      | `string` | **Obrigatório**. Sobrenome do usuário |
| `cpf`      | `string` | **Obrigatório e único**. CPF do usuário |
| `email`      | `string` | **Obrigatório**. E-mail do usuário |
| `password`      | `string` | **Obrigatório**. Senha do usuário |
| `role`      | `string` | **Obrigatório**. Tipo de usuário (admin, client, realEstate) |
| `state`      | `string` | **Obrigatório**. Estado do usuário |


####  Atualizar a senha
##### Rota autenticada 🔐
Atualiza a senha do usuário logado

```http
  PUT /user/update
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `oldPassword`      | `string` | **Obrigatório**. Senha antiga utilizada pela usuário |
| `newPassword`      | `string` | **Obrigatório**. Nova senha do usuário |

####  Deletar usuário
##### Rota autenticada 🔐
Inativa o usuário logado do sistema

```http
  DELETE /user/delete
```

####  Atualizar um usuário
##### Rota autenticada 🔐
Atualiza o usuário logado do sistema

```http
  PUT /user/update
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `firstName`      | `string` | Primeiro nome do usuário |
| `lastName`      | `string` | Sobrenome do usuário |
| `email`      | `string` | E-mail do usuário |
| `state`      | `string` | Estado do usuário |

####  Login
Loga um usuário no sistema

```http
  POST /login
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email`      | `string` | E-mail do usuário |
| `password`      | `string` | Senha do usuário |

## Imobiliária

####  Registrar Imobiliária
Cria uma nova imobiliária no sistema

```http
  POST /realestate/register
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `userData: {`      | `object` | **Obrigatório**. Objeto com os dados do usuário para cadastro |
| `firstName`      | `string` | **Obrigatório**. Primeiro nome do usuário |
| `lastName`      | `string` | **Obrigatório**. Sobrenome do usuário |
| `cpf`      | `string` | **Obrigatório e único**. CPF do usuário |
| `email`      | `string` | **Obrigatório**. E-mail do usuário |
| `password`      | `string` | **Obrigatório**. Senha do usuário |
| `role`      | `string` | **Obrigatório**. Tipo de usuário (admin, client, realEstate) |
| `state`      | `string` | **Obrigatório**. Estado do usuário |
| `},`      |  |  |
| `realEstateData: {`      | `object` | **Obrigatório**. Objeto com os dados da imobiliaria para cadastro |
| `name`      | `string` | **Obrigatório**. Nome da imobiliária |
| `cnpj`      | `string` | **Obrigatório**. CNPJ da imobiliária |
| `city`      | `string` | **Obrigatório**. Cidade onde esta a imobiliária |
| `initialBroker`      | `string` | **Obrigatório**. Quantidade de corretores |
| `initialProperties`      | `string` | **Obrigatório**. Quantidade de propriedades |
| `},`      |  |  |
## Licença

[MIT](https://choosealicense.com/licenses/mit/)
