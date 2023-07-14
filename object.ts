type TypeUser = {
    name:string,
    age:number,
}

type TypeAddress = {
    city:string,
    country:string
}

const user:TypeUser = {
    name: 'Edd',
    age: 24
}

const address:TypeAddress = {
    city: 'SPB',
    country: 'Russia'
}

let common:TypeAddress & TypeUser

common = {
    ...user, ...address
}