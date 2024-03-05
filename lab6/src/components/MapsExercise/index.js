import StopWatch from "../DurationExercise/StopWatch"

export default function MapsExercise({exercise, setMenuScreen}) {
    let {name} = exercise
    return <div>
      <p>{name}</p>
      <StopWatch/>
      <button onClick={setMenuScreen}>return to menu</button>
    </div>
}