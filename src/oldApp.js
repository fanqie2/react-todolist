import React from 'react';
import './App.css';
import {
  useState,
  useEffect
} from 'react';



const App = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState('apple');

  useEffect(() => {
    alert(`你点击了 ${count} 次`);
  }, [count])

  const style = {
    margin: 70,
    fontSize: 25
  }
  const btn = {
    width: 50,
    height: 37,
    fontSize: 18
  }
  const red = {
    color: 'red',
    fontSize: 50
  }
  const blue = {
    color: 'blue',
    fontSize: 50
  }

  const pop = {
    color: 'blue',
    display: 'block',
    padding: 5,
    marginTop: 20,
    fontSize: 15,
    width: 70
  }

  return (
    <div style={style}>
      <p><span style={blue}> {user} </span> clicked <span style={red}> {count} </span> times</p>
      <button style={btn} onClick={() => setCount(count + 1)}>
        +
      </button>
      <button style={btn} onClick={() => setCount(count - 1)}>
        -
      </button>

      <button style={pop} onClick={()=>setUser(user==='apple'?'facebook':'apple')}>切换</button>
    </div>
  );
}

export default App;