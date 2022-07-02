import {createStore} from 'redux';

let data = {
  arr :
    [
      {
        "id": "1",
        "date": "12.10",
        "content": [
          {"id": "1", "type": "default"},
          {"id": "2", "type": "check", "ico": "ico_video"},
          {"id": "3", "type": "check", "ico": "ico_mark"}
        ]
      },
      {
        "id": "2",
        "date": "12.11",
        "content": [
          {"id": "1", "type": "check", "ico":"ico_video"},
          {"id": "2", "type": "default"},
          {"id": "3", "type": "check", "ico":"ico_mark"}
        ]
      },
      {
        "id" :"3",
        "date": "12.15",
        "content": [
          {"id": "1", "type": "default"},
          {"id": "2", "type": "default"},
          {"id": "3", "type": "check", "ico":"ico_video"}
        ]
      }
    ]
  }

export default createStore(function(state, action){
  if(state === undefined){  //초기값
    return state = data;
  }
  if(action.type === 'DELETE'){
      // return {state[1]:state[1].splice(1,1)}
      state[action.idx1].content.splice(action.idx2,1);
      return state;
      
  }
  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 

console.log(data.arr);