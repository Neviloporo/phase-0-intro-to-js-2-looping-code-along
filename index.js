// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}

function writeCards(names, birthday) {
    let messages = [];

for (let i = 0; i <names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${birthday} gift!`);
    }

    return messages;   

}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}