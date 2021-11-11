 import tictactoe from "../../assets/projects_images/tictaktoe.PNG";
import chatapp from "../../assets/projects_images/chatapp.JPG";
import hardware_store from "../../assets/projects_images/hardware_store.jpg";
import portfolio from "../../assets/projects_images/portfolio.JPG";
import movie from "../../assets/projects_images/movie.png";
import tesla from "../../assets/projects_images/tesla.PNG";
import blinking from "../../assets/projects_images/blinking.JPG";
import COVID from "../../assets/projects_images/COVID.jpg";
import Dev_talks from "../../assets/projects_images/Dev_talks.jpg";

const data_projects = [
  {
    name: "COVID 19 tracker",
    image: COVID,
    deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["react.js"],
  },

  {
    name: "Dev Talks",
    image: Dev_talks,
    deployed_url: "https://dev-talks.herokuapp.com/",
    github_url: "https://github.com/Dey-Sumit/Dev-talks",
    category: ["node.js", "mongoDB", "react.js"],
  },

  {
    name: "Realtime Chat App",
    image: chatapp,
    deployed_url: "https://sumit-chat.netlify.app/",
    github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
    category: ["node", "socket.io", "react"],
  },

  {
    name: "Shop Website",
    image: hardware_store,
    deployed_url: "!#",
    category: ["html_css", "vanilla"],
  },

  {
    name: "Dev Portfolio",
    image: portfolio,
    deployed_url: "http://suprateem.herokuapp.com/",
    category: ["vanilla"],
  },

  {
    name: "Movie Search World",
    image: movie,
    deployed_url: "https://movie-search-anuj.netlify.app/",
    github_url: "https://github.com/Anujsharma2590/movie-search-app",
    category: ["vanilla"],
  },

  {
    name: "Tesla-Clone",
    image: tesla,
    deployed_url: "https://tesla-anuj.netlify.app/",
    github_url: "https://github.com/Anujsharma2590/tesla.com-clone-react-redux",
    category: ["node", "redux", "react"],
  },

  {
    name: "Blinking bubbles",
    image: blinking,
    deployed_url: "https://dey-sumit.github.io/Blinking_Bubbles/",
    github_url: "https://github.com/Dey-Sumit/Blinking_Bubbles",
    category: ["processing"],
  },
  {
    name: "Tic-Tac-Toe",
    image: tictactoe,
    deployed_url: "https://tictaktoe-anuj.netlify.app/",
    github_url: "https://github.com/Anujsharma2590/tic-tac-toe-react",
    category: ["react.js"],
  },
];

export default data_projects;
