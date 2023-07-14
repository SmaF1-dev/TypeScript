function entity<T>(args: T): T{
    return args
}

entity<number>(1)
entity<string>('sdg')

const entity2 = <T>(args: T):T =>{
    return args
}

entity2<number>(1)
entity2<string>('sdg')

class Channel<T> {
    private name: T

    constructor(name: T){
        this.name = name
    }

    getName():T {
        return this.name
    }
}

new Channel<string>('SmaF1')
new Channel<number>(1)

interface IPair<K, V>{
    key: K
    value: V
}

const pair1:IPair<string, number> = {
    key: 'sdgh',
    value: 12
}

type TypeLength = {
    length: number
}

function getNameLength<T extends TypeLength>(entity: T): number{
    return entity.length
}

getNameLength('sdg')
getNameLength([2,3,4])