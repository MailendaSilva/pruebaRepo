import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
    <NavBar />
    <ItemListContainer greeting={'Bienvenidos'}/>
    </div>
  )
}

export default App