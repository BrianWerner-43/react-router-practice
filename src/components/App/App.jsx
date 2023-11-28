import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';
import Nav from '../Nav/Nav.jsx';

function App() {
    return (
        <div className="App">
          <Router>
            <header className="App-header">
            <h1 className="App-title">GitHub Student List</h1>
            </header>
            <br/>
          <Nav />
            
          <Route exact path="/home">
            <StudentForm />
          </Route>
            
          <Route exact path="/allStudents">
           <p>Student list:</p>
            <StudentList />
          </Route>
          <Route excat path="/about">
            <p>This a about page!</p>
          </Route>
          </Router>
        </div>
    );
}

export default App;
