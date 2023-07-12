import {createStore} from 'redux';

let data = 
  {arr : 
    [
      {
        "id": 1,
        "date": "12.10",
        "content": [
          {"id": 1, "type": "default"},
          {"id": 2, "type": "check", "ico": "ico_live"},
          {"id": 3, "type": "check", "ico": "ico_event"}
        ]
      },
      {
        "id": 2,
        "date": "12.11",
        "content": [
          {"id": 1, "type": "check", "ico":"ico_live"},
          {"id": 2, "type": "default"},
          {"id": 3, "type": "check", "ico":"ico_event"}
        ]
      },
      {
        "id" :3,
        "date": "12.15",
        "content": [
          {"id": 1, "type": "default"},
          {"id": 2, "type": "default"},
          {"id": 3, "type": "check", "ico":"ico_live"}
        ]
      }
    ],
    count: 0
  }

export default createStore(function(state, action){
  if(state === undefined){  //초기값
    return data;
  }
  if(action.type === 'DELETE'){
    console.log(action.idx1, action.idx2, state);
      // return {...data, data: data.arr[action.idx1].content.splice(action.idx2,1) };
      return {...data, arr:data.arr.filter(user => user.id !== action.idx1) };
  }
  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 
