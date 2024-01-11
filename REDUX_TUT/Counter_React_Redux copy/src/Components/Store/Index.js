import {configureStore, createSlice} from "@reduxjs/toolkit"

// const INITIAL_VALUE={
//     counter: 0,
//     privacy:false
// }

const counterSlice=createSlice({
    name:"counter",
    initialState:{counterVal:0},
    reducers:{
        increment:(state)=>{
            state.counterVal++;

        },
        decrement:(state)=>{
            state.counterVal--;

        },
        add:(state,action)=>{
            state.counterVal+=Number(action.payload.value);

        },
        subtract:(state,action)=>{
            state.counterVal-=Number(action.payload.value);

        }
    }
})

const privacySclice=createSlice({
    name:"privacy",
    initialState:false,
    reducers:{
        toggle:(state)=>{
           return state= !state;
        }
    }
})


const counterStore = configureStore({reducer:{
    counter:counterSlice.reducer,
    privacy:privacySclice.reducer
}});

export const counterActions=counterSlice.actions;
export const privacyActions=privacySclice.actions;
export default counterStore;



// const counterReducer=(store=INITIAL_VALUE,action)=>{
//     if(action.type==="INCREMENT"){
//         return({...store,counter:store.counter+1})

//     }
//     else if(action.type==="DECREMENT"){
//         return({...store,counter:store.counter-1})

//     }
//     else if(action.type=="ADD"){
//         return {...store,counter:store.counter+Number(action.payload.value)}
//     }
//     else if(action.type=="SUBTRACT"){
//         return {...store,counter:store.counter-Number(action.payload.value)}
//     }
//     else if(action.type=="PRIVACY_TOGGLE"){
//         return {...store,privacy:!store.privacy}
//     }
//     return store;
// }
