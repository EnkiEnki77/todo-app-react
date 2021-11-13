import React from 'react'
import { useState } from 'react'
import {addDoc, serverTimestamp, collection} from "firebase/firestore"
import db from "../utils/firebase.js"

function Taskinput() {
 const [input, setInput ] =  useState('')

 //async makes the function asyncronous meaning it runs at the same time as everything else
 const handleForm = async(e) => {
     //prevents the form from refreshing the page
     e.preventDefault()
    
     //addDoc adds a document of data to firebase. It takes two parameters. The first is collection which determines the collection within
     //firebase the document is stored within. The second determines what key value pairs are encapsulated within the document object
     //collection also takes two parameters, the first is the variable containing getFirestore() this tells addDoc to send the data to the
     //firebase data base. The second parameter tells it which collection to place it withinxx`
     await addDoc(collection(db, 'tasks'), {
         //serverTimestamp() returns the current date/time from google's server 
        date: serverTimestamp(),
        //makes the value for task whatever value is stored within input after the input form is submitted
        task: input,

     })
     //sets the input back to empty when the data is submitted
     setInput('')
 }


    return (
        //we have a form that submits data inputted within the child input to firebase and it has an event handler called onSubmit that 
       // runs a function that manipulates that data beforehand
        <form onSubmit = {handleForm} className ='taskInput'>
            <input type = 'text' 
            // value is what determines the value that is placed in the input, so when you type into the input since thats whats passed
            //to setInput it retains it but since at the handleForm function the input is set back to '' after the form is submitted it
            //it ends up clearing everything that was typed.
            value = {input} 
            placeholder= 'Create new todo'
            //when the input is typed into a function runs that takes the value typed in and stores it in input using setInput  
            onChange = {(e) => {setInput(e.target.value)}} />
        </form>
    )
}

export default Taskinput
