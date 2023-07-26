'use strict';
const ps = require('prompt-sync');
const prompt = ps();
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
let amirali = new User('amirali','nik',16,120050,'saadatAbad','arvin_debug','amirali85')
while(true)
{
if (amirali.validateUserName(prompt('please enter your username : ')) === true){
    if (amirali.validatePassWord(prompt('please enter your password : ')) === true){
        console.log('You\'ve successfully logged in')
        break
    }
    else{
        console.log('Wrong password')
        while (amirali.validatePassWord(prompt('please enter your correct password : ')) !== true){
            console.log('Wrong password')
        }
        break
    }
}
else {
    console.log('Wrong username please check your username then try again')
}
}