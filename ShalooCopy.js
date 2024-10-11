const person= {
    name:"Hishmat",
    age:24,
    department:{
        name:"CS",
        semester: 8
    },
    address:{
        City:"Mithi",
        street:{
            PinCode:69230,
            No:3,
            house:8
        }
    }
}

const person1= {...person} //shallow copy
person1.address.street.No=5
console.log(person)

const deepPerson = JSON.parse(JSON.stringify(person)) //Deep copy
deepPerson.address.street.No = 1
console.log(person)