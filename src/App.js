import React, { Component } from 'react';
import Header from './components/Header';
import ContainerTemplate from './components/container/ContainerTemplate';
import Footer from './components/Footer';

class App extends Component {

  constructor(props){
		super(props); 
		this.state = {
			data: {},
			count: 0
		}
		// console.log(this.state)
	}
	componentDidMount(){
    fetch('data.json')
      .then(function(result){
        return result.json();
      })
      .then(function(json){
        this.setState({data:json});
			// console.log(json);

		// 상품갯수
		let num = 0, i = 0;
		while(i < json.length){
			num = num + json[i].content.length;
			i++;			
		}
		this.setState({count:num});
		}.bind(this));

  }
	
  render() {
    return (
      <React.Fragment>
        <Header/>
        <ContainerTemplate 
					data={this.state.data} 
					item_count={this.state.count}
					// deleteItem={function(a, b){
					// 	deleteItem(a,b);
					// }}
				/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;