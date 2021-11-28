//page135 assignment
const participants = [
    {name: 'Abu', idNumber: 'S7282395H', gender: 'female'},
    {name: 'Mary', idNumber: 'T4689018Z', gender: 'male'},
    {name: 'Suzi', idNumber: 'G5512873T', gender: 'male'},
    {name: 'T Chakra', idNumber: 'T8198514B', gender: 'female'}];

//TODO: assign idNumber of all participants to idNumbers
const idNum = participants.map((participant) => participant.idNumber) ;
console.log(idNum);