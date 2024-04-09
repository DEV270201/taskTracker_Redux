const taskobjs = {
    tasks : [
        {
            id:0, text: "Revise Redux", completed:false
        },
        {
            id:1, text: "Start writing MongoDB queries", completed:false 
        }
    ]
}

const generateID = (tasks) => {
    const maxID = tasks.reduce((maxID,task)=> Math.max(maxID,task.id),-1);
    return maxID;
}

//created a task reducer for updating state related to tasks
const taskReducer = (state = taskobjs,action) => {
    switch(action.type){
        case "tasks/taskAdded" : {
            return {
                ...state,
                tasks : [
                    ...state.tasks,{
                         id: generateID(state.todos),
                         text: action.payload.text,
                         completed: false
                    }
                ]
            }
        }
        case "tasks/taskCompleted" : {
            return {
                ...state,
                tasks : state.tasks.map((task)=>{
                    if(task.id !== action.payload.id)
                       return task;
                    return {
                        ...task,completed: true
                    }
                })
            }
        }
        case "tasks/taskDeleted" : {
            return {
                ...state,
                tasks: state.tasks.filter((task) => {
                    return task.id !== action.payload.id;
                })
            }
        }
        default:
         return state;
    }
}

export default taskReducer;