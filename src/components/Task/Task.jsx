
import './Task.css'

const Task = ({eachTask,index,deleteTask}) => {  

      const  handleDelete=()=>{
        deleteTask(index)
      }
    
    return ( 
        <div className="task" >
        <div class="success-prompt-wrap">
        <p class="success-prompt-heading">{eachTask.Name}
        </p><div class="success-prompt-prompt">
          <p>{eachTask.Descripition}</p>
        </div>
          <div class="success-button-container">
            <button onClick={handleDelete}  type="button" class="success-button-secondary">Delete</button>
          </div>
      </div>
        </div>
     );
}
 
export default Task;