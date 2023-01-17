import { useState } from "react";
import { ExerciseCard } from "./ExerciseCard";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

let newKey = 0;
function Workout() {
  const [isEditting, setIsEditting] = useState(null);
  const [exercises, setExercises] = useState([]);
  // Exercise --
  //  {name:
  //  reps:
  //  weight:
  //  lastReps:
  //  lastWeight:
  //  }
  function handleClick(name) {
    setExercises([...exercises, { name: name, id: newKey }]);
    newKey++;
  }

  return (
    <>
      <h1>Workout page</h1>
      {exercises.map((ex) => (
        <ExerciseCard name={ex.name} setIsEditting={setIsEditting} key={ex.id}>
          {ex.name}
        </ExerciseCard>
      ))}

      <div className="addBtn">
        chad add button
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          <Dropdown.Item
            onClick={() => {
              handleClick("Shoulder Press");
            }}
          >
            Shoulder Press
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              handleClick("Squat");
            }}
          >
            Squat
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleClick("BenchPress")}>
            Bench Press
          </Dropdown.Item>
        </DropdownButton>
      </div>
    </>
  );
}

export default Workout;
