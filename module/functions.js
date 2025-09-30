/*******************************************
 * 
 * Objetivo: Criação das funções para a api do whatsapp
 * Data: 24/09/2025
 * Developer: Roger Ribeiro de Oliveira
 * Versão 1.0
 * 
*************************/

const { json } = require('body-parser')
const list = require('./contatos.js')

const users = list.contatos['whats-users']

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
    let usersList = JSON.parse(JSON.stringify(users))
    message.users = usersList

    if (message.users.length > 0)
        return message
    else
        return MESSAGE_ERROR

}

const getSpecifyUserData = (number) => {

    let message = {

        "status": true,
        "statuscode": 200,
        "developer": "Roger Ribeiro de Oliveira",
        "userInfo": []

    }
    let usersList = JSON.parse(JSON.stringify(users))
    let info = usersList.find(info => info.number === number)
    if(!info)
       return MESSAGE_ERROR

    delete info.contacts
    message.userInfo.push(info)

    if (message.userInfo.push(info))
        return message
    else
        return MESSAGE_ERROR
}
const getUserContactsInfo = (number) => {

    let message = {

        "status": true,
        "statuscode": 200,
        "developer": "Roger Ribeiro de Oliveira",
        "userInfo": [],

    }
    let usersList = JSON.parse(JSON.stringify(users))
    let contacts = usersList
    let contactsOwner = contacts.find(user => user.number === number)
    if(!contactsOwner)
        return MESSAGE_ERROR
    let ownerContacts = contactsOwner['contacts']
    if(!ownerContacts)
        return MESSAGE_ERROR

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

    if (contacts.length > 0)
        return message
    else
        return MESSAGE_ERROR

}
const getAllMessagesFromUserNumber = (number) => {

    let message = {

        "status": true,
        "statuscode": 200,
        "developer": "Roger Ribeiro de Oliveira",
        "userInfo": ""


    }
    let usersList = JSON.parse(JSON.stringify(users))
    let contacts = usersList
    let contactsOwner = contacts.find(user => user.number === number)
    if(!contactsOwner)
        return MESSAGE_ERROR
    
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

    if (contacts.length > 0)
        return message
    else
        return MESSAGE_ERROR

}

const getMessagesBetweenUserAndContacts = (number, contact) => {

    let message = {

        "status": true,
        "statuscode": 200,
        "developer": "Roger Ribeiro de Oliveira"

    }

    message.userInfo = getAllMessagesFromUserNumber(number).userInfo
    
    if (!message.userInfo)
        return MESSAGE_ERROR

    delete message.userInfo.messagesExchanged

    let ownerMessages = getAllMessagesFromUserNumber(number).userInfo.messagesExchanged
    
    if (!ownerMessages)
        return MESSAGE_ERROR

    let exchangedMessages = ownerMessages.find(messages => messages.number === contact)
    message.userInfo.exchangedMessages = exchangedMessages

    if (message.userInfo)
        return message
    else
        return MESSAGE_ERROR
}
const getMessagesByKeyword = (number, contact, keyword) => {

    let message = {

        "status": true,
        "statuscode": 200,
        "developer": "Roger Ribeiro de Oliveira"

    }

    message.userInfo = getAllMessagesFromUserNumber(number).userInfo
    if(!message.userInfo)
        return MESSAGE_ERROR

    let messagesBetweenUserAndContact = getMessagesBetweenUserAndContacts(number, contact).userInfo.exchangedMessages
    if(!messagesBetweenUserAndContact)
        return MESSAGE_ERROR
    
    let content = messagesBetweenUserAndContact.messages.filter(messages => messages.content.toLowerCase().includes(keyword.toLowerCase()))
    message.userInfo.contact = messagesBetweenUserAndContact
    delete message.userInfo.contact.messages
    delete message.userInfo.messagesExchanged
    message.userInfo.contact.messagesFound = content

    if (message.userInfo.contact.messagesFound.length <= 0)
        return MESSAGE_ERROR
    else
        return message

}

module.exports = {
    getAllUsersData,
    getSpecifyUserData,
    getUserContactsInfo,
    getAllMessagesFromUserNumber,
    getMessagesBetweenUserAndContacts,
    getMessagesByKeyword
}