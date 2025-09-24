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

const getAllusersData = () => {

    let message = {

        "status": true,
        "statuscode": 200,
        "developer": "Roger Ribeiro de Oliveira",
        "users": []

    }

    message.users = users

    return message

}

const getSpecifyDataOfUser = (number) => {

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
        "contactsOwnerInfo": [],

    }

    let contacts = users
    let contactsOwner = contacts.find(user => user.number === number)
    let ownerContacts = contactsOwner['contacts']
    
    let ownerInfo = {
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
            "image": ownerContacts.image
            
        }
        ownerInfo.contacts.push(contactsInfo)
    })

    message.contactsOwnerInfo.push(ownerInfo)
    
    return message

}
const getAllMessagesFromUserNumber = (number) => {

    let message = {

        "status": true,
        "statuscode": 200,
        "developer": "Roger Ribeiro de Oliveira",
        "contentOwnerID": "",
        "messages": []

    }

    let contacts = users
    let contactsOwner = contacts.find(user => user.number === number)
    let ownerContacts = contactsOwner['contacts']
    
    ownerContacts.forEach(function (ownerContacts) {
        let contactsInfo = {
            "name": ownerContacts.name,
            "number": ownerContacts.number,
            "messages": ownerContacts.messages
            
        }
        message.messages.push(contactsInfo)
    })

    message.contentOwnerID = contactsOwner.id
    
    return message

}

const getMessagesBetweenUserAndContacts = (number, contact) => {

    let message = {

        "status": true,
        "statuscode": 200,
        "developer": "Roger Ribeiro de Oliveira",
        "contentOwnerID": "",
        "messages": []

    }

    let ownerMessages = getAllMessagesFromUserNumber(number)
    //const exchangedMessages = ownerMessages.find(messages => )
    return ownerMessages
}

console.log(getUserContactsInfo("11987876567"))