export function ExerciseCard(props){
    return(
        <div className="card">
            <h2>{props.name}</h2>
        <a onClick={() => props.setIsEditting(props.index)}>...</a>
        </div>

    )
}