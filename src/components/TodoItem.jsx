import { useDispatch } from 'react-redux';
import {toggleComplete, removeTodo} from '../store/todoSlice';

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <li data-test-id="todo-item">
      <input
        data-test-id="todo-item-checkbox"
        type='checkbox'
        checked={completed}
        onChange={() => dispatch(toggleComplete({ id }))}
      />
      <span
          data-test-id="todo-item-text"
      >
          {text}
      </span>
      <span
          data-test-id="todo-item-deleting"
          onClick={() => dispatch(removeTodo({id}))}>&times;</span>
    </li>
  );
};

export default TodoItem;
