
import './App.css';
import { useEffect, useState } from 'react';
import Taskinput from './components/Taskinput';
import Task from './components/Task'
import db from './utils/firebase';
import {collection, onSnapshot} from 'firebase/firestore'
// import Task from './components/Task';



function App() {

  const [documents, setDocuments] = useState([])

  useEffect(() => {
    //born and state change(based on dependency)
    //unsubscribe is a variable we're using to store the onSnapshot firebase method
    //onSnapshot is a method of firebase it looks in a specified firebase collection
    //then it takes a function that is passed a parameter that is a snapshot of said firebase collection and does something with it
    const unsubscribe = onSnapshot(collection(db, 'tasks'), (snapshot) => {
      //in this case we are accessing the documents of the snapshot using .docs. It returns the documents in an array. Since its an array
      //we can map through the array to retrieve each individual object. These individual items are represented as the parameter passed to
      //the function within map. We then use .data() on those items, it returns an object of all the fields within that document
      let tasks = []
      snapshot.docs.map((doc) => {
       return tasks.push(doc.data())
      })
      setDocuments(tasks)
    })

    //death
    return () => unsubscribe() 
     //dependency
  }, [])
  console.log(documents)


  return (
    <div className="App">
     <div className = 'taskListContainer'>
        <h1>TODO</h1>
       <Taskinput/>
      <div className = 'taskContainer'>
         {documents.map((item) => {
           return <Task title = {item.task}/>
         })}
      </div>
     </div>
    </div>
  );
}

export default App;
