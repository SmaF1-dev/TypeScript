type TypeIsNumber<T> = T extends number ? 'yes' : 'no'

type Type1 = TypeIsNumber<number>
type Type2 = TypeIsNumber<string>

type TypeBrand = 'bmw' | 'mclaren' | 'mercedes'
type TypePrice = '$1000000' | '$12515124' | '$235239'

type TypeCar = `${TypeBrand} ${TypePrice}`

const car1:TypeCar = 'bmw $12515124' //Предлагает все варианты перекреста TypeBrand и TypePrice и запрещает писать что-то другое
