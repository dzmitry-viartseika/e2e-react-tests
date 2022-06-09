const NewTodoForm = ({ value, updateText, handleAction }) => {
  return (
    <label>
      <input
        data-test-id="add-new-task-input"
        data
        placeholer='new todo'
        value={value}
        onChange={(e) => updateText(e.target.value)}
      />
      <button
          onClick={handleAction}
          data-test-id="add-todo-button"
      >Add todo</button>
    </label>
  );
};

export default NewTodoForm;
