import React, { Component } from 'react';
import '../../../css/container/lately/lately_product.css';
import ItemsTemplate from './Items/ItemsTemplate';
// 쪼개는 단점 :경로 복잡해짐

//constructor 생성자, js문법 클래스생성차 클래스 실행할때 바로생성
//super 모두상속
class LatelyTemplate extends Component {
	constructor(props){
		super(props);
		this.state = {
			data : [
				{
					id: 1,
					date: '12.10',
					content: [
						{id:1,type: 'default'},
						{id:2,type: 'check', ico:'ico_video'},
						{id:3,type: 'check', ico:'ico_mark'}
					]
				},
				{
					id :2,
					date: '12.11',
					content: [
						{id:1,type: 'check', ico:'ico_video'},
						{id:2,type: 'default'},
						{id:3,type: 'check', ico:'ico_mark'}
					]
				},
				{
					id :3,
					date: '12.15',
					content: [
						{id:1,type: 'default'},
						{id:2,type: 'default'},
						{id:3,type: 'check', ico:'ico_video'}
					]
				}
			]
		}
	}
	render(){
		let lists = [];
		let i = 0;
		let data = this.state.data;
		while(i<this.state.data.length){
			lists.push(
			<ItemsTemplate key={data[i].id} key2={data[i].content} data={data[i]} idx={i}/>
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