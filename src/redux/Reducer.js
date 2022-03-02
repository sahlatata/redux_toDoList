import {ADDTASK, DELETETASK, EDITTASK, REVERSEDONE } from "./ActionTypes";

const initialState ={
tab: [
    {id:Math.random(), description:"Prendre une Douche",isDone :false},   
    {id:Math.random(), description:"Faire une Sieste",isDone :true},
    {id:Math.random(), description:"Laver le linge",isDone :false},
    {id:Math.random(), description:"Acheter du pain ",isDone :false},
    ],

}

const Reducer = (state = initialState,action)=>{
switch (action.type) {
case ADDTASK: return {...state,tab:[...state.tab,{id:Math.random(), description:action.payload,isDone :false}] }
case DELETETASK : return {...state,tab:state.tab.filter((task)=>task.id!==action.payload)}
case EDITTASK:return {...state,tab: state.tab.map((task) =>task.id == action.payload.id? { ...task, description: action.payload.description }: task)};
case REVERSEDONE: return { ...state,tab: state.tab.map((task) =>task.id == action.payload ? { ...task, isDone: !task.isDone } : task)};
default:return state 

}
}
export default Reducer