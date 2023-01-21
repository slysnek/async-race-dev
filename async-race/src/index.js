import './main.scss';
import './fonts/fonts.scss'
import car from './images/car.svg'


function component(text) {
  const element = document.createElement('h1');
  element.textContent = text;
  return element;
}

const imgDiv = document.createElement('img');
imgDiv.src = car;
document.body.append(imgDiv);

document.body.prepend(component('Hello World'));