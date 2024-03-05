import './App.css';
import {useCallback, useState} from 'react'
import DurationExercise from './components/DurationExercise/index';
import RepetitionExercise from './components/RepetitionExercise/index';
import MapsExercise from './components/MapsExercise';

const MenuScreen = "menu"
const ExerScreen = "exercise"
const DurationEx = "duration"
const RepetitionEx = "repetition"
const MapsEx = "Maps"



//exercise list
let Exlist = [
  {type: DurationEx, name: "Running"},
  {type: RepetitionEx, name: "Push"},
  {type: DurationEx, name: "Cycle"},
  {type: RepetitionEx, name: "Maps"}
]


function App() {
  //setting up screens with menu and when user clicks the exercises
  let [currentScreen, setCurrentScreen] = useState(MenuScreen)
  let [currentEx, setCurrentEx] = useState("")
  let screenComponent = undefined
  let buttonClick = useCallback((exercise) => {
    setCurrentEx(exercise)
    setCurrentScreen(ExerScreen)
  })

  if(currentScreen === MenuScreen) {
    screenComponent = 
    <div>
      <p>Exercise Menu</p>
      <ul>
        {Exlist.map((exercise)=> {
         return <li key={exercise.name}>
          <button onClick={() => buttonClick(exercise)}>{exercise.name}</button>
        </li>
        })}
      </ul>
    </div>
  } else if (currentScreen === ExerScreen) {
    //sets which exercises type between timer and counter
    switch(currentEx.type){
      case DurationEx:
        screenComponent = <DurationExercise 
        exercise={currentEx}
        setMenuScreen={()=>setCurrentScreen(MenuScreen)}
       />
      break;
      case RepetitionEx: 
      screenComponent = <RepetitionExercise 
      exercise={currentEx}
      setMenuScreen={()=>setCurrentScreen(MenuScreen)}
      />
      break;
      case MapsEx: 
      screenComponent = <MapsExercise 
      exercise={currentEx}
      setMenuScreen={()=>setCurrentScreen(MenuScreen)}
      />
      break;
      default:
        screenComponent = undefined
    }
    
  }
   
  

  return (
    <div className="App">
      <header className="App-header">
        <p>{screenComponent}</p>
      </header>
    </div>
  );
}

export default App;
