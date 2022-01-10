import "./styles.css";

function people() {}
let you = [
  ["Denny", "Fernandez", "He/His", "2022", "Blue", "Dogs"],
  ["Heber", "Cruz-Hernandez", "He/His", "2023", "Green", "Cats"],
  ["Mateo", "Cruz", "He/His", "2024", "Yellow", "Dogs"]
];
//I tried to use the .map notation but I am still having some trouble using it
export default function App() {
  let personInfo = you.map(people);

  return (
    <div className="App">
      <h1>First Step to Student roaster Project</h1>
      {personInfo}
    </div>
  );
}
