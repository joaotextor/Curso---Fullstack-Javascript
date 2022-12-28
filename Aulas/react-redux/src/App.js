import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'


function App() {
  const [inputTask, setInputTask] = useState()

  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()

  const handleInputChange = e => {
    setInputTask(e.target.value)
  }

  const handleSubmit = () => {
    dispatch({
      type: 'ADD_TASK',
      payload: inputTask
    })
  }

  const handleRemove = task => {
    dispatch({
      type: 'REMOVE_TASK',
      payload: task
    })
  }

  return (
    <>
      <ul>
        {
          tasks.map(task => 
            <li key={task}>
              {task+' '}
              <button onClick={() => handleRemove(task)}>Remove</button>
            </li> 
          )
        }
      </ul>
      <input type="text" onChange={handleInputChange} value={inputTask}/>
      <button onClick={handleSubmit}>Insert</button>
    </>
  );
}

export default App;
