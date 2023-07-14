const inputElement = document.querySelector('input')
const value1 = (inputElement as HTMLInputElement).value
const value2 = (<HTMLInputElement>inputElement).value

const getLength = (text:string | null) => {
    return text!.length
}

getLength(null)
getLength('sjdg')

// ! - Означает, что значение не null и не undefinded
// ? - Означает, что значения может не быть