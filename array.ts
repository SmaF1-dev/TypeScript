let array:string[]
array = ['1', '2']

const numbers:ReadonlyArray<number> = [0,1,2,3] //Неизменяемый внутри массив

type TypeArray = [number, string, null] //Внутри массива должен быть обязательно такой порядок

const newArray:TypeArray = [1, 'sdg', null]