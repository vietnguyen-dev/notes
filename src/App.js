import { useState, useEffect } from 'react';
import './App.css';
import Notepad from './components/Notepad';
import Saved from './components/Saved';
import Menu from './components/Menu'

const  App = () =>{
  const [notes, setNotes] = useState([])
  const [currentNote, setCurrentNote] = useState("s")
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
    setCurrentNote("")
  }

  //pass in note to be replaced
  const replaceNote = async currNote =>{
    // find it out from current array
    let oldNoteRemoved = notes.filter((note) => note.id !== currNote.id);

    //update notes with new values
    let addReplacement = [...oldNoteRemoved, currNote];

    //send to database
    try {
      await fetch(
        `https://notes-a5350-default-rtdb.firebaseio.com/notes.json/`,
        { method: "PUT", body: JSON.stringify(addReplacement) }
      );
      getNotes();
    } catch (err) {
      console.err(err);
    }
  }

  const showNote = id => {
    let showNote = notes.find(note => note.id === id)
    setActionType('replace')
    setCurrentNote(showNote)
  }

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
