import { PropTypes } from 'prop-types'

const ToDoHero = ({todos_completed, total_todos}) => {
  return (
    <section className='todohero_section'>
        <div>
            <p className='text_large'>{total_todos === 0 ? "No Task" : todos_completed === total_todos ? "Tasks Completed" : "Tasks Due"}</p>
            <p className='text_small'>{total_todos === 0 ? "Add some tasks!" : todos_completed === total_todos ? "You are Awesome!" : "Keep it up!"}</p>
        </div>
        <div>
            {todos_completed}/{total_todos}
        </div>
    </section>
  )
}

ToDoHero.propTypes = {
    todos_completed: PropTypes.number,
    total_todos: PropTypes.number
}

export default ToDoHero