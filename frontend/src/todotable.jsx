import React, { useState, useEffect } from 'react';
import Modal from './modal'; // 

const Table = () => {
  const [data, setData] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/todos');
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3000/todos/${id}`, {
        method: 'DELETE',
      });
      setData(data.filter((item) => item.id !== id));
      console.log(`Deleted item with ID ${id}`);
    } catch (error) {
      console.log('Error deleting item:', error);
    }
  };

  const handleUpdate = (id) => {
    const todoToUpdate = data.find((item) => item.id === id);
    setSelectedTodo(todoToUpdate);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setSelectedTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:3000/todos/${selectedTodo.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedTodo),
      });
      const updatedData = data.map((item) => {
        if (item.id === selectedTodo.id) {
          return selectedTodo;
        }
        return item;
      });
      setData(updatedData);
      setSelectedTodo(null);
      console.log(`Updated item with ID ${selectedTodo.id}`);
    } catch (error) {
      console.log('Error updating item:', error);
    }
  };

  const handleCancelEdit = () => {
    setSelectedTodo(null);
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td id="button-table">
                <button id="edit" onClick={() => handleUpdate(item.id)}>
                  Edit
                </button>
                <button id="delete" onClick={() => handleDelete(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedTodo && (
        <Modal
          selectedTodo={selectedTodo}
          handleEditChange={handleEditChange}
          handleEditSubmit={handleEditSubmit}
          handleCancelEdit={handleCancelEdit}
        />
      )}
    </>
  );
};

export default Table;
