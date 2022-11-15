const getImageUrl = (index) =>
  new URL(`./assets/project-screenshots/${index}.png`, import.meta.url);

const projects = [
  {
    name: 'PhotoMap',
    description: 'Interactive map made with React and Firebase',
    imgUrl: getImageUrl(0),
    gitHubUrl: 'https://github.com/ChandeOk/PhotoMap/tree/main/photomap',
    demoUrl: 'https://photomap-a9c91.firebaseapp.com/',
  },
  {
    name: 'SignUp Form',
    description: 'SignUp form made with Vanila JS',
    imgUrl: getImageUrl(1),
    gitHubUrl: 'https://github.com/ChandeOk/odin-signUp',
    demoUrl: 'https://chandeok.github.io/odin-signUp/',
  },
  {
    name: 'ToDo',
    description: 'Simple ToDo app made with localStorage and Vanila JS',
    imgUrl: getImageUrl(2),
    gitHubUrl: 'https://github.com/ChandeOk/odin-todo',
    demoUrl: 'https://chandeok.github.io/odin-todo/',
  },
  {
    name: 'Grid Layout',
    description: 'Dashboard grid layout',
    imgUrl: getImageUrl(3),
    gitHubUrl: 'https://github.com/ChandeOk/odin-dashboard',
    demoUrl: 'https://chandeok.github.io/odin-dashboard/',
  },
  {
    name: 'Weather App',
    description: 'Check weather (F or C) with dinamicaly changing background',
    imgUrl: getImageUrl(4),
    gitHubUrl: 'https://github.com/ChandeOk/odin-weather-app',
    demoUrl: 'http://lolweather.fun/',
  },
  {
    name: 'Battleship',
    description: 'Do you realy need a description? :)',
    imgUrl: getImageUrl(5),
    gitHubUrl: 'https://github.com/ChandeOk/odin-battleship',
    demoUrl: 'https://chandeok.github.io/odin-battleship/',
  },
];
export default projects;
