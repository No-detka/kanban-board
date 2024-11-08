import {Routes, Route} from 'react-router-dom'
import css from './Main.module.css'
import Board from '../board/Board'
 import TaskDetail from '../task-detail/TaskDetail'

const Main = props => {
    
    return (
        <main className={css.main}>
            <Routes>
                <Route exact path="/" element={<Board {...props} />} />
                  <Route path="/tasks/:taskId" element={<TaskDetail {...props} />} />               
            </Routes>
        </main>
    )
}

export default Main