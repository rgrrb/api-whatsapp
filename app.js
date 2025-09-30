/* *********************************************************************
* Objetivo: API responsavel em criar endPoints refernte a estados e cidades
* Data: 29/08/2022  
* Autor: Roger Ribeiro de Oliveira
*
* Observações: Instalar dependencias para criar a API
*      express     - npm install express     --save Instala as dependencias para criar uma API
*      cors        - npm install cors        --save Instala as dependencias para configurar as permissões para uma api
*      body-parser - npm install body-parser --save Instala as dependencias para receber os tipos de dados via POST ou PUT
* 
* **********************************************************************/

//Import das dependencias do app
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const functions = require('./module/functions.js')

const PORT =  process.PORT || 8080

const app = express()

app.use((request, response, next) => {
    response.header('Acess-Control-Allow-Origin', '*') 
    response.header('Acess-Control-Allow-Methods', 'GET') 

    app.use(cors())
    next() 
})

app.get('/v1/whatsapp/users/list', function(request, response){
    let users = functions.getAllUsersData()
    response.status(users.statuscode)
    response.json(users)

})
app.get('/v1/whatsapp/users/:number', function(request, response){
    let number = request.params.number
    let users = functions.getSpecifyUserData(number)
    response.status(users.statuscode)
    response.json(users)

})

app.get('/v1/whatsapp/users/:number/contacts', function(request, response){
    let number = request.params.number
    let users = functions.getUserContactsInfo(number)
    response.status(users.statuscode)
    response.json(users)

})

app.get('/v1/whatsapp/users/:number/messages', function(request, response){
    let number = request.params.number
    let users = functions.getAllMessagesFromUserNumber(number)
    response.status(users.statuscode)
    response.json(users)

})

app.get('/v1/whatsapp/users/messages/contact/', function(request, response){
    let number = request.query.number
    let contact = request.query.contact
    let users = functions.getMessagesBetweenUserAndContacts(number, contact)
    response.status(users.statuscode)
    response.json(users)

})

app.get('/v1/whatsapp/contact/keyword/', function(request, response){
    let number = request.query.number

    let contact = request.query.contact

    let keyword = request.query.keyword

    let users = functions.getMessagesByKeyword(number, contact, keyword)
    response.status(users.statuscode)
    response.json(users)

})

app.listen(PORT, function(){
    console.log('conectado')
})