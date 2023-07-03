import React, { useState } from 'react';
import Modal from 'react-modal';

const Table = () => {
  const data = [
    { id: 1, title: 'Todo 1', description: 'Description 1' },
    { id: 2, title: 'Todo 2', description: 'Description 2' },
    { id: 3, title: 'Todo 3', description: 'Description 3' },
    { id: 4, title: 'Todo 1', description: 'Description 1' },
    { id: 5, title: 'Todo 2', description: 'Description 2' },
    { id: 6, title: 'Todo 3', description: 'Description 3' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
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
              <td>
                <button id='edit'>Edit</button>
                <button id='delete'>Delete</button>
                <button type="button" onClick={openModal}>Open Dialog</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <div>
          This is an open dialog window
          <button onClick={closeModal}>Close</button>
        </div>
      </Modal>
    </>
  );
};

export default Table;
