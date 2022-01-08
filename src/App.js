import "./styles.css";

function people(first, last, pronouns, year, color, animal) {
  //this is not necessary but why does the 2D array not render?
  // you need to return the information in jsx ( use {}) and then call the parameters so it will render
  return (
    <p>
      {" "}
      {first} {last} {pronouns} {year} {color} {animal}{" "}
    </p>
  );
}
export default function App() {
  //this is a 2d array that holds the information from each individual and is later called in the for loop
  let you = [
    ["Denny", "Fernandez", "He/His", "2022", "Blue", "Dogs"],
    ["Heber", "Cruz-Hernandez", "He/His", "2023", "Green", "Cats"],
    ["Mateo", "Cruz", "He/His", "2024", "Yellow", "Dogs"]
  ];
  // let elements reamain blank so that the for loop will run and input it later
  let elements = [];
  //for loop that tries to gather information from "you" and push the information to elements to be displayed
  // hold each parameter as a variable to that you can assaign it a piece of information from the
  // you 2d array. As it itterates. each variable is assigned the parameter from the you 2d array
  // we use .push to push the information inoto the elements array that is later called in our
  // return App.
  for (let u of you) {
    // first is the parameter of people and is then assaigned the [0] piece of inforamtion in the 2d array
    // for people. This continues until every parameter in the people function is called
    let first = u[0];
    let last = u[1];
    let pronouns = u[2];
    let year = u[3];
    let color = u[4];
    let animal = u[5];
    //elements.push is where the information is going once the for loop has ran through
    //we call people with all of the parameters since the information is now updated and the
    // elements array now has information to call on.
    elements.push(people(first, last, pronouns, year, color, animal));
  }

  return (
    <div className="App">
      <h1>First Step to Student roaster Project</h1>
      {elements}
    </div>
  );
}
