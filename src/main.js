import "./assets/css/style.css";
import generatePassword from "./modules/generator";

//requires
const axios = require('axios').default;

//get elements
const genpass = document.querySelector('.gen-pass');

const range = document.querySelector("#rangeValue");
const numbersCharactersDisplay = document.querySelector(".caracter-numbers");

const btn = document.querySelector("button");

let displayGenPassword;

//range events
range.oninput = (e) => {
  numbersCharactersDisplay.innerHTML = range.value;
};

//generate password
btn.addEventListener("click", (e) => {

    axios.get('../public/displayPassword.html')
    .then(html => {
        genResult(html.data);
    })
    .catch(e => {
        genResult('ERROR');
    });

});
//gen-result
function genResult(html){

    genpass.innerHTML = html;

    displayGenPassword = document.querySelector(".gen-result");
    displayGenPassword.innerHTML = generatePassword(range.value, true,true,true,true);

    clickAndCopy(displayGenPassword);


}

function clickAndCopy(element){
    element.addEventListener('click', e => {
        navigator.clipboard.writeText(element.innerText);
        
    })
}
