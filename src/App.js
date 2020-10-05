import React,{ useState, useEffect } from 'react';
import './App.css';
import { InputLabel, Input, IconButton } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import Message from './Message'
import db from './firebase';
import firebase from 'firebase'
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';


function App() {
 
  //using of state will help you to  to send message without refreshing it 
  //while with variable it is impossible, you to compulsory  reload or refresh the page to update it
  const [input,setInput]=useState('');


  const [messages,setMessages]=useState([]);


  const [username,setUsername]=useState('');
  useEffect(() => {
    db.collection("messages")
    .orderBy('timestamp','desc')
    .onSnapshot((snapshot) =>
      setMessages(snapshot.docs.map((doc) => ({id:doc.id,message:doc.data()})))
    );
  }, []);

  //use state = variable in react
  //use effect =  run code on a condition
  useEffect(() => {
    //run code
    //if its blank [] this code run once when the app components load
    setUsername(prompt('Please Enter your name'));
    
  }, [])//condition

  const sendMessage=(event) =>{
    //all the logic to send a message goes
    //message+new message=message
    event.preventDefault();
    db.collection('messages').add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }
  return (
    <div className="App"> 
    <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt=""/>
    {/* issue with the form is that it reloads the page as soon as we hit the enter key or the button */}
    {/* to stop this we need to enter a line event.preventDefault(); */}
    <form className="app__form">
    <FormControl className="app__formControl">
 
  <Input className="app__input" value={input} placeholder="Enter Message" onChange={event =>setInput(event.target.value)}/>
   {/* if we hit enter without any input in array we utilized the memory as well as it shows "" empty string to stop this we have
    added disabled={!input} to avoid empty entry */}
    <IconButton className="app__iconButton" disabled={!input} variant='contained' color="primary" type="submit" onClick={sendMessage}>
      <SendIcon />
    </IconButton>
  
</FormControl>
    </form>
   <FlipMove>
   {
      messages.map(({id,message})=>(
        <Message key={id} username={username} message={message}/>
      ))
    }
   </FlipMove>
    
    </div>
  );
}

export default App;
