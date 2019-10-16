import './style/style.css';
import { logResultFromPartialApplication } from './add-numbers';
// uses style-loader and adds style tag to the top of the index.html because we
// are using a url import style from "./style/style.css"; uses style-loader and
// inlines the style

console.log('Hello world');
console.log('Result from partial application: ', logResultFromPartialApplication())


function foo() {
  let num = 0;
  num = num + 10;
  num = num + 20;
  const element = document.createElement('h1');
  element.innerHTML = 'Hello Webpack';
  element.classList.add('foo');
  return element;
}

document.body.appendChild(foo());
