import { createStore } from "redux";

const store = createStore(function(state,action){
    if(action.type === "changeName"){
        return({
            ...state,
            user:{
                name : action.payload.name
            }
        })
    }
    
    return state
},{
    user:{
        name: "poxos"
    }
})

export default store