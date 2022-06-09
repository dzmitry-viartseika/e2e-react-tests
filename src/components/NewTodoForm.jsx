const NewTodoForm = ({ value, updateText, handleAction, handleHideAction }) => {
  return (
    <label>
      <input
        data-test-id="add-new-task-input"
        placeholder="Add new task"
        value={value}
        onChange={(e) => updateText(e.target.value)}
      />
      <button
          onClick={handleAction}
          data-test-id="add-todo-button"
      >Add todo</button>
      <button
          onClick={handleHideAction}
          data-test-id="add-todo-hide-completed-tasks"
      >Hide completed tasks</button>
    </label>
  );
};

export default NewTodoForm;
