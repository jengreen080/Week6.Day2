// Episode 1

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//     };
    
//     const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
// }

//     const verdict = declareMurderer();
//     console.log(verdict);

// my prediction: The murderer is Miss Scarlet. CORRECT

// Episode 2

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//     murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// my prediction: Error. murderer can not be redefined. CORRECT I think

// Episode 3

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//     let murderer = 'Mrs. Peacock';
//     return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// my prediction: first verdict - The murderer is Mrs Peacock. Second verdict - The murderer is Professor Plum CORRECT

// Episode 4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//     let suspectThree = 'Colonel Mustard';
//     return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// my prediction: line 65 - The suspects are Miss Scarlet, Professor Plum, Colonel Mustard CORRECT
// my prediction: line 66 - Suspect three is Mrs Peacock CORRECT

// Episode 5

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// my prediction: The weapon is the revolver CORRECT

// Episode 6

// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//     murderer = 'Mr. Green';

//     const plotTwist = function() {
//     murderer = 'Mrs. White';
//     }

//     plotTwist();
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// my prediction: The murderer is Colonel Mustard WRONG
// but I think I get why

// Episode 7

// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//     murderer = 'Mr. Green';

//     const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//         murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//     }

//     plotTwist();
// }

// const declareMurderer = function() {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// my prediction: The murderer is Miss Scarlett. A 'let' can't override a 'let'? that would be an error? So it brings back the value that it can aka Miss Scarlett. WRONG
// is it to do with the indentation of it all? Mr Green is further left so takes precedent?

// Episode 8

// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
// };

// const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room'; 

//     const plotTwist = function(room) {
//     if (scenario.room === room) {
//         scenario.murderer = 'Colonel Mustard';
//     }

//     const unexpectedOutcome = function(murderer) {
//         if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//         }
//     }

//     unexpectedOutcome('Colonel Mustard');
//     }

//     plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

// my prediction: The weapon is lead pipe. On the reasoning of order. Colonoel Mustard is declared the murderer after the weapon could change if he was the murderer. WRONNGG
// I don't like this. It doesn't make logical sense

// Episode 9

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
    let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// my prediction: The murderer is Professor Plum. Mrs Peacock doesn't get read and I'm assuming JS sees this line as do nothing. So the murderer stays Professor Plum? CORRECT