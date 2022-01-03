import "./styles.css";
//previous function that called people
//function people(first, last, pronouns, year, color, animal) {
//return (
//<div class="row">
//<div class="blue">{first}</div>
//<div>{last}</div>
//<div class="blue">{pronouns}</div>
//<div>{year}</div>
//<div>{color}</div>
//<div class="blue">{animal}</div>
//</div>
//);
//}

function people(first, last) {
  //this is not necessary but why does the 2D array not render?
  <div class="row">
    <div> {first}</div>
    <div>{last}</div>
  </div>;
}
export default function App() {
  //these are from prvious session and can be called in the App div with {denny}
  //const denny = people("Denny", "Fernandexz", "He/His", 2022, "Blue", "Dogs");
  //const heber = people("Heber","Cruz-Hernandez","He/His","2023","Green","Cats");

  // "you" array that contains data for first and last in the people function
  let you = [
    ["Denny", "Fernandez"],
    ["Heber", "Cruz-Hernandez"]
  ];
  // blank array called elements that is supposed to hold the information from "you" once ran through the for
  //loop
  let elements = [];
  //for loop that tries to gather information from "you" and push the information to elements to be displayed
  for (let u of you) {
    let first = u[0];
    let last = u[1];
    elements.push(people(first, last));
  }

  return (
    <div className="App">
      <h1>First Step to Student roaster Project</h1>
      {elements}
    </div>
  );
}
