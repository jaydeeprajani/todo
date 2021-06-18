import {React,useState} from 'react';
import './App.css';

function App() {

  const [item ,setItem] = useState('');
  const [todos, setDotos] = useState([]);

  function handleSubmit(e)
  {
    console.log(e);
    e.preventDefault();
    setDotos([...todos,item]);
    setItem('');
  }

  function handleItem(e)
  {
    console.log(e);
    setItem(e.target.value);
  }

  function handleDelete(todo)
  {
    setDotos(todos.filter(todoElement => todoElement !== todo));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Todo App</h3>
      <form onSubmit={handleSubmit}>
          <input className="txtAddItem" placeholder="Add item" value={item} onChange={handleItem} required ></input>&nbsp;
          <button className="btnSubmit" type="submit">Add</button>
      </form>     
      <ul>
        {
          todos.map(todo => {
            return <li><button onClick={()=> handleDelete(todo)}>X </button> {todo}</li>
          })
        }
      </ul>
       
      </header>
    </div>
  );
}

export default App;
