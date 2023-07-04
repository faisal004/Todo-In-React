

const Modal = ({ selectedTodo, handleEditChange, handleEditSubmit, handleCancelEdit }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Edit TODO</h3>
        <form onSubmit={handleEditSubmit}>
          <input type="text" name="title" value={selectedTodo.title} onChange={handleEditChange} />
          <input type="text" name="description" value={selectedTodo.description} onChange={handleEditChange} />
          <div className="modal-buttons">
            <button type="submit">Save</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
