import { useState } from 'react';
import './App.css';
import Table from './todotable';

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "title") {
      setTitle(value);
      console.log("Title:", value);
    } else if (name === "description") {
      setDescription(value);
      console.log("Description:", value);
    }
  };

  return (
    <>
      <h1>Todo App</h1>
      <div className="card">
        Todo title:
        <input type="text" name="title" onChange={handleChange} />
        Todo description:
        <input type="text" name="description" onChange={handleChange} />
        <button>Submit TODO</button>
      
      </div>
      <Table/>
    </>
  );
}

export default App;
