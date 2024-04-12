
//filter object can take values like All, Active, Completed
const filter = {
    value : "all"
}

//created a filter reducer for updating state related to filters
const filterReducer = (state = filter, action) => {
    console.log("filter reducer...");
    switch(action.type){
        case "filters/changeValue" : {
            return {
                value : action.payload.value
            }
        }
        default:
            return state;
    }
}

export default filterReducer;