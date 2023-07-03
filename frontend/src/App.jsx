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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const todo = {
      title: title,
      description: description
    };
    try {
      let res = await fetch("http://localhost:3000/todos", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(todo),
      });
      let response = await res.json();
      console.log(response);
      setTitle("");
      setDescription("");
     
    } catch (error) {
      console.log("Error:", error);
    }
  }

  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit} className="card">
        Todo title:
        <input type="text" name="title" onChange={handleChange} />
        Todo description:
        <input type="text" name="description" onChange={handleChange} />
        <button type="submit">Submit TODO</button>
      </form>
      <Table />
    </>
  );
}

export default App;
