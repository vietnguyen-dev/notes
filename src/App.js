import { useState, useEffect } from 'react';
import './App.css';
import Notepad from './components/Notepad';
import Saved from './components/Saved';
import Menu from './components/Menu'

const  App = () =>{
  const [notes, setNotes] = useState([])
  const [currentNote, setCurrentNote] = useState({})
  const [action, setActionType] = useState("add")

  const getNotes = async () => {
    try {
      const res = await fetch(
        `https://notes-a5350-default-rtdb.firebaseio.com/notes.json`
      );
      const data = await res.json();

      let notesArr = [];

      for (const key in data) {
        notesArr.push({
          id: key,
          title: data[key].title,
          text: data[key].text,
          currentdate: data[key].currentdate,
        });
      }

      let reverseArr = notesArr.reverse()

      setNotes(reverseArr);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() =>{
   getNotes()
  }, [])

  const addNote = async newNote =>{
    try{  
      await fetch(
        `https://notes-a5350-default-rtdb.firebaseio.com/notes.json`,
        { method: 'POST',
          body: JSON.stringify(newNote)
        }
      );
      getNotes()
    } catch(err){
      console.err(err)
    }
  }

  const setNewNote = () =>{
    setActionType('add')
    setCurrentNote({})
  }

  //pass in note to be replaced
  // find it in current array
  //update that object with new values
  const replaceNote = currNote =>{
    console.log(currNote)
    console.log(currentNote)
    //  try {
    //   await fetch(
    //      `https://notes-a5350-default-rtdb.firebaseio.com/notes.json/${currNote[0]}`,
    //      { method: "PUT", body: JSON.stringify(currNote[1]) }
    //    );
    //    getNotes();
    //  } catch (err) {
    //    console.err(err);
    //  }
  }

  const showNote = id => {
    let showNote = notes.find(note => note.id === id)
    setActionType('replace')
    setCurrentNote(showNote)
  }


  //filter array from node to be deleted
  //put new array in databse
  //dont actually need to delete
  const deleteNote = async id =>{
      let delNote = notes.filter((note) => note.id !== id);
    try{
      await fetch(`https://notes-a5350-default-rtdb.firebaseio.com/notes.json`,
      {method: 'PUT', body: JSON.stringify(delNote)})
      getNotes()
    } catch(err){
      console.error(err)
    }
  }

  return (
    <>
    <Menu newNote={setNewNote}/>
    <div className="App">
      <Saved saved={notes} showNote={showNote} deleteNote={deleteNote}/>
      <Notepad note={currentNote} action={action} addNote={addNote} replaceNote={replaceNote}/>
    </div>
    </>
  );
}

export default App;
