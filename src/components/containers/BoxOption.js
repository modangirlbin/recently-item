import BoxOption from '../views/BoxOption';
import {connect} from 'react-redux';



function mapStateToProps(state){
  // 상품갯수 
  let num = 0, i = 0;
  while(i < state.arr.length){
    num = num + state.arr[i].content.length;
    i++;			
  }
  state.count=num;
  console.log(state.count);

  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(BoxOption);

// import React, { Component } from 'react';
// import store from '../../store';

// export default class extends Component {
//   state = store.getState();
//   constructor(props){
//     super(props);
//     store.subscribe(function(){  //store가 바뀌었을때
//       this.setState = store.getState();//number값을 가져와서 this에 설정
//     }.bind(this));
//   }
// 	componentDidMount(){
//     // 상품갯수 
// 		let num = 0, i = 0;
// 		while(i < this.state.arr.length){
// 			num = num + this.state.arr[i].content.length;
// 			i++;			
// 		}
// 		this.setState({count:num});
//     console.log(this.state.count)
//   }

//   render(){
//     return <BoxOption count={this.state.count}></BoxOption>
//   }
// }