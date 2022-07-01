import React, { Component } from 'react';
import '../../../css/container/lately/lately_product.css';
import ItemsTemplate from './Items/ItemsTemplate';
// 쪼개는 단점 :경로 복잡해짐

//constructor 생성자, js문법 클래스생성차 클래스 실행할때 바로생성
//super 모두상속
class LatelyTemplate extends Component {

	render(){
		//날짜별 리스트
		let lists = [];
		let i = 0;
		let data = this.props.data2;
		while(i < data.length){
			lists.push(
			<ItemsTemplate 
				key={data[i].id} key2={data[i].content} 
				data={data[i]} idx={i} 
				// deleteItem2={function(){console.log('hi')}}
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