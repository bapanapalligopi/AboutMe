import calci from "../images/calculator/calculator1.png";
import recipe from "../images/recipemaker/recipe1.png";
import weather from "../images/weather/weather1.png";
import calcivideo from "../vidoes/calculator.mp4";
import recipevideo from "../vidoes/recipemaker.mp4";
import weathervideo from "../vidoes/weather.mp4";
const project1 = {
  id: 7,
  title: "Calculator App",
  description:
    "The React Calculator app is a user-friendly web application designed to perform arithmetic operations such as addition, subtraction, multiplication, and division. With its intuitive interface, users can input numerical values and execute calculations effortlessly. The app supports both basic and advanced mathematical operations, providing a versatile tool for various calculation needs.",
  url: calci,
  view: "https://bapanapalligopi.github.io/Calculator/",
  githuburl: "https://github.com/bapanapalligopi/Calculator",
  lang: "Html, Css, JavaScript and React Js.",

  videourl: calcivideo,
};

const project2 = {
  id: 8,
  title: "Recipe Maker",
  description:
    "The React Recipe Maker app is a convenient and user-friendly web application designed to help users discover and explore a wide variety of recipes. Leveraging the power of React and a food API, this app provides users with an extensive database of recipes from various cuisines around the world.",
  url: recipe,

  view: "https://bapanapalligopi.github.io/Recipe-Maker/",
  githuburl: "https://github.com/bapanapalligopi/Recipe-Maker",
  lang: "HTML, CSS, JAVASCRIPT and REACT.",
  videourl: recipevideo,
};

const project3 = {
  id: 9,
  title: "Weather App",
  description:
    "The React Weather App is a dynamic and user-friendly web application designed to provide users with real-time weather information for any location around the world. Leveraging the power of React and a weather API, this app delivers accurate and up-to-date weather forecasts, enabling users to plan their activities and stay informed about weather conditions.",
  url: weather,
  view: "https://bapanapalligopi.github.io/WeatherReportByCity/",
  githuburl: "https://github.com/bapanapalligopi/WeatherReportByCity",
  lang: "HTML, CSS, JAVASCRIPT, REACT and OPEN WEATHER API",
  videourl: weathervideo,
};

const Projecttwo = [project1, project2, project3];
export default Projecttwo;
