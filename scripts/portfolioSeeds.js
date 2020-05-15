let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/myportfolio",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
  }
);

let portfolioSeeds = [
  {
    title: "Code Refactor",
    image: "homework_01_code-refactor.png",
    site: "https://alanashworth.github.io/GT-Homework-01/",
    repo: "https://github.com/AlanAshworth/GT-Homework-01",
  },
  {
    title: "Responsiveness Portfolio",
    image: "homework_02_responsiveness-portfolio.png",
    site: "https://alanashworth.github.io/GT-Homework-02/",
    repo: "https://github.com/AlanAshworth/GT-Homework-02",
  },
  {
    title: "Password Generator",
    image: "homework_03_password-generator.png",
    site: "https://alanashworth.github.io/GT-Homework-03/",
    repo: "https://github.com/AlanAshworth/GT-Homework-03",
  },
  {
    title: "Code Quiz",
    image: "homework_04_code-quiz.png",
    site: "https://alanashworth.github.io/GT-Homework-04/",
    repo: "https://github.com/AlanAshworth/GT-Homework-04",
  },
  {
    title: "Day Planner",
    image: "homework_05_day-planner.png",
    site: "https://alanashworth.github.io/GT-Homework-05/",
    repo: "https://github.com/AlanAshworth/GT-Homework-05",
  },
  {
    title: "Weather Dashboard",
    image: "homework_06_weather-dashboard.png",
    site: "https://alanashworth.github.io/GT-Homework-06/",
    repo: "https://github.com/AlanAshworth/GT-Homework-06",
  },
  {
    title: "Project 2",
    image: "project_02_project-2.png",
    site: "https://steam-comparison.herokuapp.com/",
    repo: "https://github.com/SamSherrill/project-2",
  },
  {
    title: "Updated Portfolio Page",
    image: "homework_08_updated-portfolio-page.png",
    site: "https://alanashworth.github.io/GT-Homework-08-Updated-Portfolio-Page/",
    repo: "https://github.com/AlanAshworth/GT-Homework-08-Updated-Portfolio-Page",
  },
  {
    title: "Good README Generator",
    image: "homework_09_good-readme-generator.png",
    site: "",
    repo: "https://github.com/AlanAshworth/GT-Homework-09-Good-README-Generator",
  },
  {
    title: "Team Profile Generator",
    image: "homework_10_team-profile-generator.png",
    site: "",
    repo: "https://github.com/AlanAshworth/GT-Homework-10-Team-Profile-Generator",
  },
  {
    title: "Note Taker",
    image: "homework_11_note-taker.png",
    site: "https://blooming-temple-60682.herokuapp.com/",
    repo: "https://github.com/AlanAshworth/GT-Homework-11-Note-Taker",
  },
  {
    title: "Employee Tracker",
    image: "homework_12_employee-tracker.png",
    site: "",
    repo: "https://github.com/AlanAshworth/GT-Homework-12-Employee-Tracker",
  },
  {
    title: "Node Express Handlebars",
    image: "homework_13_node-express-handlebars.png",
    site: "https://immense-peak-43329.herokuapp.com/",
    repo: "https://github.com/AlanAshworth/GT-Homework-13-Node-Express-Handlebars",
  },
  {
    title: "Fitness Tracker",
    image: "homework_14_nosql-workout-tracker.png",
    site: "https://gentle-badlands-62416.herokuapp.com/",
    repo: "https://github.com/AlanAshworth/GT-Homework-14-NoSQL-Workout-Tracker",
  },
  {
    title: "Budget Tracker",
    image: "homework_15_pwa-budget-tracker.png",
    site: "https://stark-sea-84315.herokuapp.com/",
    repo: "https://github.com/AlanAshworth/GT-Homework-15-Online-Offline-Budget-Tracker",
  },
  {
    title: "React Employee Tracker",
    image: "homework_19_react-employee-tracker.png",
    site: "",
    repo: "https://github.com/AlanAshworth/gt-homework-19-employee-directory",
  },
  {
    title: "React Portfolio",
    image: "homework_20_react-portfolio.png",
    site: "https://dry-beach-35920.herokuapp.com/",
    repo: "https://github.com/AlanAshworth/GT-Homework-20-React-Portfolio",
  },
];

db.Portfolio.deleteMany({})
  .then(() => db.Portfolio.collection.insertMany(portfolioSeeds))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
