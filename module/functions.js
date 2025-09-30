/*******************************************
 * 
 * Objetivo: Criação das funções para a api do whatsapp
 * Data: 24/09/2025
 * Developer: Roger Ribeiro de Oliveira
 * Versão 1.0
 * 
*************************/

const list = require('./contatos.js')

const users = list.contatos['whats-users']

const usersContacts = users[0].contacts

const MESSAGE_ERROR = {

    "status": false,
    "statuscode": 500,
    "developer": "Roger Ribeiro de Oliveira",

}

const getAllUsersData = () => {

    let message = {

        "status": true,
        "statuscode": 200,
        "developer": "Roger Ribeiro de Oliveira",
        "users": []

    }

    message.users = users

    return message

}

const getSpecifyUserData = (number) => {

    let message = {

        "status": true,
        "statuscode": 200,
        "developer": "Roger Ribeiro de Oliveira",
        "userInfo": []

    }

    let info = users.find(info => info.number === number)

    delete info.contacts
    message.userInfo.push(info)

    return message
}
const getUserContactsInfo = (number) => {

    let message = {

        "status": true,
        "statuscode": 200,
        "developer": "Roger Ribeiro de Oliveira",
        "userInfo": [],

    }

    let contacts = users
    let contactsOwner = contacts.find(user => user.number === number)
    let ownerContacts = contactsOwner['contacts']

    let userInfo = {
        "id": contactsOwner.id,
        "number": contactsOwner.number,
        "nome": contactsOwner.account,
        "contacts": []
    }

    ownerContacts.forEach(function (ownerContacts) {
        let contactsInfo = {
            "name": ownerContacts.name,
            "number": ownerContacts.number,
            "description": ownerContacts.description,
            "image": ownerContacts.image,


        }
        userInfo.contacts.push(contactsInfo)
    })

    message.userInfo.push(userInfo)

    return message

}
const getAllMessagesFromUserNumber = (number) => {

    let message = {

        "status": true,
        "statuscode": 200,
        "developer": "Roger Ribeiro de Oliveira",
        "userInfo": ""


    }

    let contacts = users
    let contactsOwner = contacts.find(user => user.number === number)
    let ownerContacts = contactsOwner['contacts']

    let userInfo = {
        "id": contactsOwner.id,
        "number": contactsOwner.number,
        "nome": contactsOwner.account,
        "messagesExchanged": []
    }

    ownerContacts.forEach(function (ownerContacts) {
        let contactsInfo = {
            "name": ownerContacts.name,
            "number": ownerContacts.number,
            "messages": ownerContacts.messages

        }
        userInfo.messagesExchanged.push(contactsInfo)
    })

    message.userInfo = userInfo

    return message

}

const getMessagesBetweenUserAndContacts = (number, contact) => {

    let message = {

        "status": true,
        "statuscode": 200,
        "developer": "Roger Ribeiro de Oliveira"

    }

    message.userInfo = getAllMessagesFromUserNumber(number).userInfo
    delete message.userInfo.messagesExchanged
    let ownerMessages = getAllMessagesFromUserNumber(number).userInfo.messagesExchanged
    let exchangedMessages = ownerMessages.find(messages => messages.number === contact)
    message.userInfo.exchangedMessages = exchangedMessages

    return message
}
const getMessagesByKeyword = (number, contact, keyword) => {

    let message = {

        "status": true,
        "statuscode": 200,
        "developer": "Roger Ribeiro de Oliveira"

    }

    message.userInfo = getAllMessagesFromUserNumber(number).userInfo

    let messagesBetweenUserAndContact = getMessagesBetweenUserAndContacts(number, contact).userInfo.exchangedMessages
    
    let content = messagesBetweenUserAndContact.messages.filter(messages => messages.content.includes(keyword))

    delete message.userInfo.messagesExchanged

    message.userInfo.messagesFound = content

    return message
    
}
console.log(JSON.stringify(getMessagesByKeyword("11987876567", "26999999963", "Great"), null, 2))
