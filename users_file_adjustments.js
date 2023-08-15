// npm install prompt-sync
'use strict';
const ps = require('prompt-sync');
const prompt = ps();
const fs = require('fs');
class User{
    constructor(firstName,lastName,age,phoneNumber,adress,userName,passWord) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.phoneNumber = phoneNumber
        this.adress = adress
        this.userName = userName
        this.passWord = passWord
    }
    getFirstName(){
        return this.firstName
    }
    geLastName(){
        return this.lastName
    }
    getAge(){
        return this.age
    }
    getPhoneNumber(){
        return this.phoneNumber
    }
    getAdress(){
        return this.adress
    }
    validatePassWord(passWord){
        if (passWord === this.passWord){
            return true
        }
        else{
            return false
        }
    }
    validateUserName(userName){
        if(userName !== this.userName){
            return false
        }
        else{
            return true
        }
    }
}

function readUsers(){
    fs.readFile('Users.txt','utf8',(err,data) =>  {
        if(err){
            console.error(err);
            return
        }
        console.log(data);
    });
}
function addUser(user){
    fs.readFile('Users.txt','utf8',(err,data) => {
        if (err) {
            console.error(err);
            return
        }
        if (data.includes(user)) {
            return
        }
    else {
        fs.appendFile('Users.txt', user, err => {
            if (err) {
                console.error(err);
                return;
            }
        })
    }
})
}
addUser('amiraliNik')
addUser('aliDares')
readUsers()

