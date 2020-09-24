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
import Show from './Components/show/Show';
import {createBrowserHistory} from 'history'; 

import {Router, Route,Switch,Redirect} from 'react-router-dom';

const history = createBrowserHistory();

function App() {

  const [data, setData] = React.useState({})

  const returnValues = values => {
    setData({...data, ...data.values, ...values})
  }  

  return (
    <div className="App">     
      <Router history={history}>
        <Header/>
        <Switch>       
          <Route path='/' exact component={Home} />
          <Route path='/personal' component={() => <Personal returnVal = {returnValues} />} />
          <Route path='/education' component={() => <Education returnVal = {returnValues} />} />
          <Route path='/experience' component={() => <Experience returnVal = {returnValues} />} />
          <Route path='/skills' component={() => <Skill returnVal = {returnValues}/>} />
          <Route path='/objective' component={() => <Objective returnVal = {returnValues} />} />
          <Route path='/projects' component={() => <Projects returnVal = {returnValues} />} />
          <Route path='/more' component={() => <Add />} />
          <Route path='/help' component={() => <Help />} />
          <Route path='/show' component={() => <Show data={data} />} />
          <Redirect to='/' />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
