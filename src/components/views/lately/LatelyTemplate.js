import React, { Component } from 'react';
import ItemsTemplate from './Items/ItemsTemplate';
import store from '../../../store';

// 쪼개는 단점 :경로 복잡해짐

//constructor 생성자, js문법 클래스생성차 클래스 실행할때 바로생성
//super 모두상속
class LatelyTemplate extends Component {
state = store.getState();
render(){		
		return (
			<div className="area_lists">
				{/* 날짜별 리스트 */}
				{this.state.arr.map(
					data => (
							<ItemsTemplate 
							key={data.id} content={data.content} 
							data={data} id1={data.id} 
							>하이</ItemsTemplate>
						)
					)}
			</div>
		);
	}
};

export default LatelyTemplate;