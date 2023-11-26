import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import './App.css'

function App() {
  let [dogsArray, setDogsArray] = useState([]);

  useEffect(() => {
    whereMyDogsAt()
    }, []
  )

  const whereMyDogsAt = () => {
    Axios({
      method: 'GET',
      url: '/gallery'
    })
    .then ((response) => {
      console.log(response);
      setDogsArray(response.data)
      console.log('this is the data from the get', response.data);
    })
    .catch ((error) => {
      console.error(error)
    })
  }


    return (
      <div data-testid="app">
        <header>
          <h1>Our Dog's Happy Endings</h1>
        </header>
        <GalleryList dogs = {dogsArray} whereMyDogsAt = {whereMyDogsAt}/>
      </div>
    );
}

export default App;
