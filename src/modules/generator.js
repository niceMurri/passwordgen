const rand = (max, min) => Math.floor(Math.random() * (max - min) + min)

const genLetterUpperCase = () => String.fromCharCode(rand(65, 90))
const genLetterLowerCase = () => String.fromCharCode(rand(97, 122));
const genNumber = () => String.fromCharCode(rand(48, 57));

const symbol = '!@#$%¨&*()-=+`{}^~][;:><.,/?'
const genSymbol = () => symbol[rand(0, symbol.length)];

//shuffle arr

const shuffle = array => {

  for(let i = array.length - 1 ; i > 0 ;i--){

    const rand = Math.floor(Math.random() * (i + 1));
    [array[i], array[rand]] = [array[rand], array[i]];
  }

  return array;
}

export default function generatePassword(quantity, upperCase, lowerCase, number, symbol) {
  let password = [];

  for(let i = 0; i < quantity; i++){
    upperCase && password.push(genLetterUpperCase());
    lowerCase && password.push(genLetterLowerCase());
    number && password.push(genNumber());
    symbol && password.push(genSymbol());
  }

  password = shuffle(password).slice(0,quantity).join('');


  return password;
}
