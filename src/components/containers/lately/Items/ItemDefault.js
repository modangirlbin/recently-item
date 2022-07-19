import ItemDefault from "../../../views/lately/Items/ItemDefault";
// import React, { Component } from 'react';
// import store from '../../../../store';
import {connect} from 'react-redux';

// function mapStateToProps(state){
//   return {
//       key: this., 
//       id1 : {id1-1} ,
//       id2: {content[i].id-1}
//   }
// }

function mapDispatchToProps(dispatch, ownProps){
  return {
      onClick2:function(){
          dispatch({type:'DELETE', idx1:ownProps.id1, idx2:ownProps.id2});
      },
      // key: {content[i].id}, 
      // id1 : {id1-1} ,
      // id2: {content[i].id-1}
  }
}
export default connect(null, mapDispatchToProps)(ItemDefault);


// export default class extends Component{
//   state = store.getState()


//   render(){
//     return <ItemDefault onClick2={function(){
//       store.dispatch({type:'DELETE', idx1:this.props.id1, idx2:this.props.id2});
//       console.log(this.state)
//     }.bind(this)}/>
//   }
// }