import './main.scss';
import './fonts/fonts.scss'
import car from './images/dice.png'


function component(text: string | null) {
  const element = document.createElement('h1');
  element.textContent = text;
  return element;
}

const imgDiv = document.createElement('img');
imgDiv.src = car;
document.body.append(imgDiv);

document.body.prepend(component('Hello World'));