import "./styles.css";
// Denny Fernandez He/His 2022 Blue Dogs
// Heber Cruz-Hernandez He/His 2023 Green Cats

// this is the people function that has parameters relating to the information that was given
function people(first, last, pronouns, year, color, animal) {
  return (
    //the row class is how we devide each person on our list
    <div class="row">
      <div class="blue">{first}</div>
      <div>{last}</div>
      <div class="blue">{pronouns}</div>
      <div>{year}</div>
      <div>{color}</div>
      <div class="blue">{animal}</div>
    </div>
  );
  //the divs are what take up space in each column and will hold places for each peice of information
  //notice that we have {}, that is because contains our parameter and will give us a chance to display it
  // in our default function App
}

export default function App() {
  //we want to call our function and keep it constant
  // Now we simply add the information provided that relates to the person(see above)
  // people (x,y,z,a,b,c)... the information are the divs and is what will appear once rendred
  const denny = people("Denny", "Fernandexz", "He/His", 2022, "Blue", "Dogs");
  //this is now the second person in the list
  const heber = people(
    "Heber",
    "Cruz-Hernandez",
    "He/His",
    "2023",
    "Green",
    "Cats"
  );
  return (
    <div className="App">
      <h1>First Step to Student roaster Project</h1>
      {denny}
      {heber}
    </div>
  );
  //Like in the previous Do Now (2.2) you need to have the {} to display the information in the
  // by simply putting calling the name of the person, we were able to display the entirerty of thier
  // information.
  //THIS IS HOW YOU DISPLAY FUNCTIONS IN YOUR CODE!!!!!
}
