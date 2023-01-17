# Desafio para o processo seletivo SHARENERGY 2023/01


## `Back-end `

Foi utilizado para o banco do mongoDB o site do mesmo como hospedeiro.
Para o banco funcionar na sua máquina será necessário seguir os passos a seguir:

# Vá ao site do MongoDB:

* link para fazer login:
https://www.mongodb.com/cloud/atlas/register

* Após o login, nesta página(https://cloud.mongodb.com/v2/63bdfef41443017aaccae0bb#/clusters),
click no botão 'Create'

* No link(https://cloud.mongodb.com/v2/63bdfef41443017aaccae0bb#/clusters/edit?from=ctaClusterHeader)
vá vá nas opções que fica abaixo do nome 'Atlas'

* Click em 'New Project'

* Dê um nome ao seu projeto e click em next

* Click em 'Create Project'

* Click em 'Add Current IP Adress' para que seja pego o seu ip atual para funcionando do banco

* Click em 'Build Database'

* Vá à opção que mais condizer com o que desejar, entre os serviços prestados, e click em 'Create'

* Click em 'Create Cluster'

* Adicione um username e um password que será usado posteriormente

* Feito, click em 'Create User'

* Click em 'Finish and Closed'

* CLick em 'Connect' para gerar o código de conexão

* Vá em 'Connect your application'(2ª opção)

* Cópie o código gerado

* Vá nos arquivos de back-end/src/server.ts

* Cole o link copiado em na:
 => Linha 16(mongoose.connect())

 * Em <password> coloque o password adicionado anteriormente
 Ex.: 'mongoose.connect("mongodb+srv://desafio:desafio1234@cluster0.hsuctxx.mongodb.net/?retryWrites=true&w=majority")'


### `npm install`

Para instalar as dependências, tanto em front quanto em back-end

### `npm run dev`

Para executar o back-end no seu computador. Lembre-se de se digirir à pasta antes de executar

### `npm start`

Para executar o projeto em front-end na porta (http://localhost:3000) do seu browser. Lembre-se de se digirir à pasta antes de executar

.
