interface ICar {
    id?: number
    name?:string
    price?:number
    yearBuilt?: number
}

interface ICarCreate extends Omit<ICar, 'id'> { } //С помощью Omit берем всё, кроме id
interface ICarId extends Pick<ICar, 'id'> { } // С помощью Pick берем только id
interface IOptionalCar extends Partial<ICar> { } // Partial делает все свойства необязательными
interface IReadOnlyCar extends Readonly<ICar> { } //Все поля только для чтения

type TypeCarRecord = Record<'name'| 'price', string | number>
//При выдаче такого типа и name и price могут быть строкой или числом

interface IRequiredCar extends Required<ICar> { } //Делает все поля обязательными

type TypeGetName = () => string
type Return = ReturnType<TypeGetName> //Возвращает типБ который возвращает функция

type Any1 = Extract<'max' | 'andrey', 'andrey' | 'misha'> //Extract вернет то, что дублируется
type Any2 = Exclude<'max' | 'andrey', 'andrey' | 'misha'> //Исключает всё, кроме 1 параметра
type NotNull = NonNullable<string | number | null | undefined> //Исключает null и undefinded



const car: IOptionalCar = {}