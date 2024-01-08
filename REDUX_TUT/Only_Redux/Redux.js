const redux = require('redux');
const INITIAL_VALUE={
    counter:0,
}
const Reducer= (store=INITIAL_VALUE,action)=>{
    let newStore=store;
    if(action.type==='INCREAMENT'){
        newStore.counter=newStore.counter+1;
    }
    else if(action.type==='DECREMENT'){
        newStore.counter=newStore.counter-1;
    }
    return newStore

}
const store=redux.createStore(Reducer);

const subscriber=()=>{
   const state = store.getState();
   console.log(state);
}

store.subscribe(subscriber);

store.dispatch({type:'INCREAMENT'})
store.dispatch({type:'DECREMENT'})
store.dispatch({type:'INCREAMENT'})
store.dispatch({type:'INCREAMENT'})