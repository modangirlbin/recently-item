import React, { Component } from 'react';
import Header from './components/Header';
import ContainerTemplate from './components/views/ContainerTemplate';
import Footer from './components/Footer';
import store from './store'

class App extends Component {

  constructor(props){
		super(props);
		this.state = store.getState();
	}

	componentDidMount(){
		store.subscribe(function(){  //store가 바뀌었을때
      this.setState({state:store.getState()}); //number값을 가져와서 this에 설정
    }.bind(this));
		// console.log(this.state.arr);

		// fetch('data.json')
    //   .then(function(result){
    //     return result.json();
    //   })
    //   .then(function(json){
    //     this.setState({data:json});
		
		// 상품갯수
		// let num = 0, i = 0;
		// while(i < this.state.arr.length){
		// 	num = num + this.state.arr[i].content.length;
		// 	i++;			
		// }
		// this.setState({count:num});

  }
	
  render() {
    return (
      <React.Fragment>
				{console.log(this.state)}
        <Header/>
        <ContainerTemplate 
					data={this.state.arr} 
					item_count={this.state.count}
				/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;