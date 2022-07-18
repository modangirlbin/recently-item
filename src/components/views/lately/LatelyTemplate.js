import React, { Component } from 'react';
import '../../../css/views/lately/lately_product.css';
import ItemsTemplate from './Items/ItemsTemplate';
// 쪼개는 단점 :경로 복잡해짐

//constructor 생성자, js문법 클래스생성차 클래스 실행할때 바로생성
//super 모두상속
class LatelyTemplate extends Component {

	render(){
		let data = this.props.data;
		
		return (
			<div className="lately_product">
				{/* 날짜별 리스트 */}
				{data.map(
					data => (
							<ItemsTemplate 
							key={data.id} content={data.content} 
							data={data} idx={data.id} 
							>하이</ItemsTemplate>
						)
					)}
			</div>
		);
	}
};

export default LatelyTemplate;