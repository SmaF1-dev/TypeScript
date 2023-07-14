interface IUserAge {
    age: number
}

interface IUser extends IUserAge {
    name:string
    email:string
}

type TypeUser = {
    name:string
    email:string
}

type TypePers = {
    age: number
} & TypeUser

const user: IUser = {
    email: 'sdgsdg@mdf.eu',
    name: 'max',
    age: 21
}

const users: IUser[] = [
    user,
    {
        age:24,
        name: 'Max',
        email: 'dfhdf'
    }
]