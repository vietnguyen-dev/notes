import { useState } from 'react';
import './App.css';
import Notepad from './components/Notepad';
import Saved from './components/Saved';
import Menu from './components/Menu'

let saved = [
  {id: 0, title: 'HI', text: 'whatever this is here', currentdate: new Date().toDateString()},
  {id: 1, title: 'Ebola is back', text: 'I like to eat corb]n', currentdate: new Date().toDateString()}
]

const  App = () =>{
  const [notes, setNotes] = useState(saved)
  const [curretNote, setCurrentNote] = useState(notes[0])
 

  const addNote = (newNote) =>{
    setNotes((prevNotes) => 
      [...prevNotes, newNote]
    )
  }

  const showNote = num => {
    // console.log(num)
    let showNote = notes.find(note => note.id === num)
    // console.log(showNote)
    setCurrentNote(showNote)
  }

  return (
    <>
     <Menu />
    <div className="App">
      <Saved saved={notes} showNote={showNote}/>
      <Notepad note={curretNote} addNote={addNote}/>
    </div>
    </>
  );
}

export default App;
