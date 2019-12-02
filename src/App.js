import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  render(){
    const text = '당신은 어썸한가요?';
    const condition = true;
    const style = {
      backgroundColor: 'gray',
      border: '1px solid black',
      height: Math.round(Math.random() * 300) + 50,
      width: Math.round(Math.random() * 300) + 50,
      WebkitTransition: 'all',
      MozTransition: 'all',
      msTransition: 'all'
    };
    return (
      <Fragment>
        <h2>리액트 안녕!</h2>
        <h2>{text}</h2>
        { condition && '보여주세요' }
        <div style={style}></div>
      </Fragment> 
    );
  }
}

/*
class App extends Component{
  render(){
   return (
    <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <h2>Welcome to React</h2>
    </div>
    <p calssName="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div> 
   );
  }
}
*/

export default App;

/*
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

*/