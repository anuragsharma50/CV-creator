import React from 'react';
import './App.css';
import Header from './Components/Header';
import Personal from './Components/Personal';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Skill from './Components/Skill';
import Objective from './Components/Objective';
import Projects from './Components/Projects';
import Add from './Components/Add';
import Help from './Components/Help';

import Home from './Components/Home';
import Show from './Components/Show';

import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

function App() {

  const [personal, setPersonal] = React.useState({})

  const returnValues = values => {
    setPersonal(values)
    console.log("Home",values)
  }  

  return (
    <div className="App">     
      <Router>
        <Header/>
        <Switch>       
          <Route path='/' exact component={Home} />
          <Route path='/personal' component={() => <Personal returnVal = {returnValues} />} />
          <Route path='/education' component={() => <Education />} />
          <Route path='/experience' component={() => <Experience />} />
          <Route path='/skills' component={() => <Skill />} />
          <Route path='/objective' component={() => <Objective />} />
          <Route path='/projects' component={() => <Projects />} />
          <Route path='/more' component={() => <Add />} />
          <Route path='/help' component={() => <Help />} />
          <Route path='/show' component={() => <Show parsonalInfo={personal} />} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
