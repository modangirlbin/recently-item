import React, { Component } from 'react';
import Header from './components/Header';
import ContainerTemplate from './components/container/ContainerTemplate';
import Footer from './components/Footer';

class App extends Component {
  constructor(props){
		super(props);
		this.state = {
			data : [
				{
					id: 1,
					date: '12.10',
					content: [
						{id: 1, type: 'default'},
						{id: 2, type: 'check', ico:'ico_video'},
						{id: 3, type: 'check', ico:'ico_mark'}
					]
				},
				{
					id :2,
					date: '12.11',
					content: [
						{id: 1, type: 'check', ico:'ico_video'},
						{id: 2, type: 'default'},
						{id: 3, type: 'check', ico:'ico_mark'}
					]
				},
				{
					id :3,
					date: '12.15',
					content: [
						{id: 1, type: 'default'},
						{id: 2, type: 'default'},
						{id: 3, type: 'check', ico:'ico_video'}
					]
				}
			],
			count: 0
		}
		//상품갯수
		let item_count = 0;
		let j = 0;
		while(j < this.state.data.length){
			item_count = item_count + this.state.data[j].content.length
			j++;			
		}
		this.state.count = item_count;
		console.log(this.state.count);
	}

  render() {
    return (
      <div>
        <Header/>
        <ContainerTemplate data={this.state.data} item_count={this.state.count}/>
        <Footer/>
      </div>
    );
  }
}

export default App;