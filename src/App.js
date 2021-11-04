import { useState, useEffect } from 'react';
import './App.css';
// import Layout from './components/Layout';
// import Folders from './components/Folders';
import Notepad from './components/Notepad';
import Saved from './components/Saved';
import Menu from './components/Menu'

let firstInit = false

const  App = () =>{
  const [notes, setNotes] = useState([])
  const [currentNote, setCurrentNote] = useState({
      title: "",
      text: "",
      currentdate: new Date().toDateString(),
    })
  const [action, setActionType] = useState("add")

  useEffect(() => {
    getNotes();
  }, [])

  useEffect(() =>{
    if (firstInit === true){
      //checks for when theres nothing in notes
      if (notes.length === 0){
        setCurrentNote({
          title: "",
          text: "",
          currentdate: new Date().toDateString(),
        })
      } else {
       setCurrentNote(notes[0]);
      }
    }
  }, [notes])

  const getNotes = async () => {
    try {
      const res = await fetch(
        `https://notes-a5350-default-rtdb.firebaseio.com/notes.json`
      )
      const data = await res.json()

      let notesArr = [];

      for (const key in data) {
        notesArr.push({
          id: key,
          title: data[key].title,
          text: data[key].text,
          currentdate: data[key].currentdate,
        })
      }
      
      setNotes(notesArr);
      setActionType('replace')
      firstInit = true
    } catch (err) {
      console.error(err);
    }
  };


  const addNote = async newNote =>{
    let newNoteList = [newNote, ...notes]

    try{  
      await fetch(
        `https://notes-a5350-default-rtdb.firebaseio.com/notes.json`,
        { method: 'PUT',
          body: JSON.stringify(newNoteList)
        }
      );
      getNotes()
    } catch(err){
      console.err(err)
    }
  }

  const setNewNote = () =>{
    setActionType('add')
    setCurrentNote({
      title: "",
      text: "",
      currentdate: new Date().toDateString(),
    });
  }

  //pass in note to be replaced
  const replaceNote = async currNote =>{
    // find it out from current array
    let oldNoteRemoved = notes.filter((note) => note.id !== currNote.id);

    //update notes with new values
    let addReplacement = [currNote, ...oldNoteRemoved];

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

  const deleteNote = async () =>{
    //instead of deleting specific note, just filter out from all notes then put back
    let delNote = notes.filter((note) => note.id !== currentNote.id);
    
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
      {/* <Folders /> */}
      {/* <div> */}
        <Menu newNote={setNewNote} delNote={deleteNote}/>
        <div className="App">
          <Saved saved={notes} currentNote={currentNote} showNote={showNote} />
          <Notepad
            note={currentNote}
            action={action}
            addNote={addNote}
            replaceNote={replaceNote}
          />
        </div>
      {/* </div> */}
    </>
  );
}

export default App;
