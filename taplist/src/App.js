import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import BeerTile from './components/BeerTile'

import firebase from './firebase'

function GetTapList(){
  const [tapList, setTapList] = useState([])

  useEffect(() => {
    firebase
      .firestore()
      .collection('taplists')
      .orderBy('lineNumber')
      .onSnapshot((snapshot) => {
        const newTap = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setTapList(newTap)
      })
  },[])

  return tapList
}

function App() {
  const list = GetTapList()
  return (
    <div className="App">
      <header>
        <h1>On Tap Today!</h1>
      </header>
      <div class="container-fluid">
        <div class="row justify-content-md-center">
          {list.map((tap) => 
            <div class="col">
              <BeerTile {...tap} />
            </div>
          )}
        </div>
      </div>
      <footer class="mastfoot mt-auto">
      <div class="inner">
        <p>Beer is free all the time.</p>
      </div>
    </footer>
    </div>
  );
}

export default App;
