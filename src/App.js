import './App.css';
import React, { useState } from 'react';
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import { Container, Button } from 'react-bootstrap';
import AllTheBooks from './components/AllTheBooks'
import fantasy from './books/fantasy.json'
import history from './books/history.json'
import horror from './books/horror.json'
import romance from './books/romance.json'
import scifi from './books/scifi.json'

function App() {

  let [type, setType] = useState('all'); //type contiene lo stato, setType contiene una funziona che modifica lo stato 
  const allBooks = [...fantasy, ...history, ...horror, ...romance, ...scifi]; // creo un array che contiene tutti i libri dopo aver creato un file json con tutti i prodotti all'interno

  return (
    <>
    <MyNav />
    <Container className='my-3'>
      <Welcome />
      <Container className='d-flex justify-content-around'>
        <Button variant='dark' className="m-3" onClick={()=> setType ('all')}>All</Button>
        <Button variant = "dark" className="m-3" onClick={()=> setType ('fantasy')}>Fantasy</Button>
        <Button variant = "dark" className="m-3" onClick={()=> setType ('history')}>History</Button>
        <Button variant = "dark" className="m-3" onClick={()=> setType ('horror')}>Horror</Button>
        <Button variant = "dark" className="m-3" onClick={()=> setType ('romance')}>Romance</Button>
        <Button variant = "dark" className="m-3" onClick={()=> setType ('scifi')}>Scifi</Button>
      </Container>
      {type === 'all' && <AllTheBooks key="all" books = {allBooks}/>}
      {type === 'fantasy' && <AllTheBooks key="fantasy" books = {fantasy}/>}
      {type === 'history' && <AllTheBooks key="history" books = {history}/>}
      {type === 'horror' && <AllTheBooks key="horror" books = {horror}/>}
      {type === 'romance' && <AllTheBooks key="romance" books = {romance}/>}
      {type === 'scifi' && <AllTheBooks key="scifi" books = {scifi}/>}
    </Container> 
    <MyFooter />
    </>
  );
}

export default App;
