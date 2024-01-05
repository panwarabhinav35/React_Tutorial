import { createContext } from "react";

export const TODOItems=createContext({
    todoItems:[],
    AddNewItem:()=>{},
    deleteItem:()=>{}
});