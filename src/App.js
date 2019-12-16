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
      <div className="my-div">
        {/* 요소 밖에선 이렇게 주석*/ }
        <h2>리액트 안녕!</h2>
        <h2>{text}</h2>
        { condition && '보여주세요' }
        <div style={style}        
          // self-closed 태그에서만 작동하는 주석
          // 마지막 />가 꼭 새 줄에 있어야함
          /* 이렇게도 작성 가능쓰 */
        />
        // 여기에 쓰는 건 그대로 렌더링 됨
        /* 여긴 주석 못씀ㅋ */
      </div> 
    );
  }
}

/*
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
*/


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