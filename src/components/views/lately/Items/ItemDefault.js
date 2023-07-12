import React, { Component } from 'react';
import store from '../../../../store';

class ItemDefault extends Component {
 state = store.getState()

  render() {
		return (
			<li>
				<a href='#none' className='link_item'>
					<span className='thumb_item'>
						<img src='https://raw.githubusercontent.com/modangirlbin/recently-item/master/src/img/img_item4.png' alt=''/>
					</span>
					<div className='info_item'>
						<span className='tit_item'><strong>[숑숑옷방]</strong> 멍멍 냥냥 우리집 강아지 인싸되는 원피스 빨강/파랑/노랑 있어요</span>
						<span className='price_item'>
							138,000원~
						</span>
					</div>
				</a>
				<span className='box_btn selected'>
				<button type='button' className='btn_choice' 			onClick={function(e){
						e.preventDefault();
						e.target.parentNode.classList.toggle('selected');
					}}><span className="offscreen">관심상품 등록하기</span></button>
					<button type='button' className='btn_delete' 		onClick={function(){
							this.props.onClick2();
					}.bind(this)}><span className="offscreen">삭제하기</span></button>
				</span>
			</li>
		);
  }
}

export default ItemDefault;