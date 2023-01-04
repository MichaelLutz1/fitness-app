import { useState } from "react";
import { ExerciseCard } from "./ExerciseCard";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Workout() {
  let exercises = [];
  const [isEditting, setIsEditting] = useState(null);
  exercises.push({name:'bob'})
  exercises.push({name:'kevin'})
//  {name:
//  reps:
//  weight:
//  lastReps:
//  lastWeight:
//  }

  return (<>
  <h1>Workout page</h1>
  {exercises.map((ex, i) => <ExerciseCard name ={ex.name} setIsEditting={setIsEditting} index = {i} key={ex.name}>{ex}</ExerciseCard>)}

  <div className="addBtn">chad add button
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item onClick={()=>{console.log("asfdlkjal;kjfasdl;kj")}}>Action</Dropdown.Item>
      <Dropdown.Item>Another action</Dropdown.Item>
      <Dropdown.Item onClick={() => (console.log('clicked'))} >Something else</Dropdown.Item>
    </DropdownButton>
  </div>
  </>);
}

export default Workout;
