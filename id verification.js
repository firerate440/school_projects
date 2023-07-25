'use strict';
const ps = require('prompt-sync');
const prompt = ps();

let i = 0
while (i === 0) {
    function id() {

        return prompt('Enter your id number : ');}
    id = id()
    if (Number.isNaN(parseInt(id)) === true || id.toString().length !== 10) {
        console.log('Your id number should be 10 digit number please check your id again then Enter your id number')
    }
    else {
        let num = id.toString();
        let sum = parseInt(num[0]) * 10 + parseInt(num[1]) * 9 + parseInt(num[2]) * 8 + parseInt(num[3]) * 7 + parseInt(num[4]) * 6 + parseInt(num[5]) * 5 + parseInt(num[6]) * 4 + parseInt(num[7]) * 3 + parseInt(num[8]) * 2
        if (sum  % 11 < 2 ) {
            if (parseInt(num[9]) === 1){
                console.log('Your id is valid')
                break
            }
            else{
                console.log('Your id is not valid')
                break
            }
        }
        else{
            if (parseInt(num[9]) === 11 - sum  % 11){
                console.log('Your id is valid')
                break
            }
            else {
                console.log('Your id is not valid')
                break
            }
        }
    }
}