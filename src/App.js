import React, { Component } from 'react';
import Header from './components/Header';
import ContainerTemplate from './components/container/ContainerTemplate';
import Footer from './components/Footer';
import store from './store'

class App extends Component {

  constructor(props){
		super(props); 
		this.state = {
			data: store.getState(),
			count: 0
		}
		console.log(this.state)
	}
	componentDidMount(){
		store.subscribe(function(){  //store가 바뀌었을때
      this.setState({state:store.getState()}); //number값을 가져와서 this에 설정
    }.bind(this));
    // fetch('data.json')
    //   .then(function(result){
    //     return result.json();
    //   })
    //   .then(function(json){
    //     this.setState({data:json});

		// 상품갯수
		let num = 0, i = 0;
		while(i < this.state.data.arr.length){
			num = num + this.state.data.arr[i].content.length;
			i++;			
		}
		this.setState({count:num});
  }
	
  render() {
    return (
      <React.Fragment>
        <Header/>
        <ContainerTemplate 
					data={this.state.data} 
					item_count={this.state.count}
				/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;