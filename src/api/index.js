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

    // setNotes(notesArr);
    return notesArr
  } catch (err) {
    console.error(err);
  }
};

export default getNotes;
