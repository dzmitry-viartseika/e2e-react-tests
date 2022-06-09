import {useState} from 'react';
import { addTodo, hideCompletedTodo } from './store/todoSlice';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';
import { useDispatch } from 'react-redux';

import './App.css';


function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAction = () => {
    if(text.trim().length) {
      dispatch(addTodo({text}));
      setText('');
    }
  }

  const handleHideAction = () => {
    dispatch(hideCompletedTodo());
  };

  return (
    <div className='App'>
      <NewTodoForm
        value={text}
        isDisabled={!text}
        updateText={setText}
        handleAction={handleAction}
        handleHideAction={handleHideAction}
      />
      <TodoList />
    </div>
  );
}

export default App;
