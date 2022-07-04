import React, { Component } from 'react';
import ItemsTemplate from './Items/ItemsTemplate';
import store from '../../../store'
import '../../../css/container/lately/lately_product.css';
// 쪼개는 단점 :경로 복잡해짐

//constructor 생성자, js문법 클래스생성차 클래스 실행할때 바로생성
//super 모두상속
class LatelyTemplate extends Component {
	state = {
		arr : store.getState().arr
	}
  // constructor(props){
  //   super(props);
  //   store.subscribe(this.state.arr)
		
  // }
	componentDidMount(){
		store.subscribe = () => {
      this.setState({arr : store.getState().arr}); //number값을 가져와서 this에 설정
		}
    
	}
	render(){
		//날짜별 리스트
		console.log(store.getState())
		let lists = [];
		let i = 0;
		let data = this.state.arr;

		// store.subscribe(function(){this.setState({arr : store.getState().arr})})
		while(i < data.length){
			lists.push(
			<ItemsTemplate 
				key={data[i].id} key2={data[i].content} 
				data={data[i]} idx={i}
			/>
			);
			i++;
		}

		return (
			<div className="lately_product">
				{lists}
			</div>
		);
	}
};

export default LatelyTemplate;