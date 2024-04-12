//this state is used if I don't provide any kind of preloaded state
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
    return maxID+1;
}

//created a task reducer for updating state related to tasks
const taskReducer = (state = taskobjs,action) => {
    console.log("task reducer...");
    switch(action.type){
        case "tasks/taskAdded" : 
        state.tasks.push({
            id: generateID(state.tasks),
            text: action.payload.text,
            completed: false
       })
            return {
                ...state,
                tasks : state.tasks
            }
        
        case "tasks/taskCompleted" : 
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
        
        case "tasks/taskDeleted" : 
            return {
                ...state,
                tasks: state.tasks.filter((task) => {
                    return task.id !== action.payload.id;
                })
            }
        
        default:
         return state;
    }
}

export default taskReducer;