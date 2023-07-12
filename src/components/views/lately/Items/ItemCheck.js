import React, { Component } from 'react';
// import ItemCheck from './children/ItemCheck';
// 쪼개는 단점 :경로 복잡해짐(작성하면서 경로 안맞는거 계속보고있음)

class ItemCheck extends Component {
	render() {
		// console.log(this.props);
		return (
			<li className="type_page">
				<a href="#none">
					<span className={this.props.ico}>이벤트</span>
					<span className="tit_page"><strong>BEST</strong> 상품 출석 체크이벤트체크이벤트체크이벤트체크이벤트체크이벤트체크이벤트체크이벤트체크이벤트체크이벤트</span>
				</a>
				<button type='button' className='btn_delete'><span className="offscreen">삭제하기</span></button>
			</li>
		);
  }
}

export default ItemCheck;