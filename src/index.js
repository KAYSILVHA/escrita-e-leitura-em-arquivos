const express = require('express')
const fs = require('fs/promises')
const app = express()
app.use(express.json())


app.get('/', async (req, res)=>{
  await fs.writeFile('./src/a.txt', 'Oi')
})

app.post('/', async (req, res)=>{
  const {nome, idade} = req.body;

  const teste = await fs.readFile('./src/users.json')
  const pessoas = JSON.parse(teste)
  pessoas.push({nome, idade});
  const pessoasStringFy = JSON.stringify(pessoas)
  await fs.writeFile('./src/users.json', pessoasStringFy)
  return res.json('Pessoa cadastrada com sucesso!')
})
app.listen(3000, ()=>{
  console.log("Sua API está rodando na porta 3000")
})