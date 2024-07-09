export default function DoSomething() {

}

// exporting a component
export const DoSomething = () => {

}

// how to declare new functions for react
const DoSomething = () => {
    // normally will return HTML
    return <div></div>
}


// inline functions
<button onClick={() => { console.log('Hello World') }}>
</button>


// Ternary Operators
let age = 16;
// let name = "Pedro";

if (age > 16) { 
    name = "Pedro"
} else {
    name = "Jack"
}
// If
let name = age > 10 && "Pedro"
// Or
let name2 = age > 10 || "Pedro"
// If Else
let name3 = age > 10 ? "Pedro" : "Jack"


const Component = () => {
    return age > 10 ? <div>Pedro</div> : <div>Jack</div>
}


// Objects/Dictionary/Hash tables/Hash maps Destructuring
const person = {
    name1:"Pedro",
    age1: 20,
    isMarried1: false,

}

// ...(object) keeps whatever is in the object, can specify changes after comma. Works with arrays too
const person2 = {...person, name: "Jack"}

const newName = person.name1
const newAge = person.age1
const isMarried = person.isMarried1

const {name1, age1, isMarried1} = person;

const names = ["pedro", "jack", "Jessica"];
const names2 = [...names, "Joel"];

// add 1 to end of all names
names.map((name)=>{
    return name + "1";
})




