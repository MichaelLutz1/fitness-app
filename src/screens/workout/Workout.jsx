import { useState } from "react";
import { ExerciseCard } from "./ExerciseCard";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

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
    setExercises([...exercises, { name: name }]);
  }

  return (
    <>
      <h1>Workout page</h1>
      {exercises.map((ex, i) => (
        <ExerciseCard
          name={ex.name}
          setIsEditting={setIsEditting}
          index={i}
          key={ex.name}
        >
          {ex}
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
            Shoulder Press
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
