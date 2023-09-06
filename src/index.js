import './styles/main.scss';
import generateJoke from "./generateJoke";
import laughing from './assets/laughing.png';

const laughImg = document.getElementById('laughImg');
laughImg.src = laughing;
laughImg.style.height = "70px";
laughImg.style.marginBottom = "25px";

console.log(generateJoke());