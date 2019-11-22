import React from 'react';
import './App.css';
//import Table from './components/table/Table';
import Card from './components/card/Card';
import { Jumbotron, Container } from 'reactstrap';

function App() {
  return (
    <div className="app">
       <Jumbotron fluid>
        <Container fluid>
          <h1>Tabla Personajes</h1>
          <Card />
        </Container>
      </Jumbotron>
    </div>
  );
}

export default App;
