const baseState = [
    {
        todo: "lean es6+",
        done: true
    },
    {   todo: "Try immer",
        done: false
    }
];

const newbaseState = [
    {...baseState,
        done: true}
];

console.log(newbaseState);