import React, { Component } from 'react';
import store from '../../../../store';

class ItemDefault extends Component {
 state = store.getState()

  render() {
		return (
			<li>
				<a href="#none">
					<span className="link_thumb">
						<img src="../../../../img_item1.png" className="img_g" alt="쇼핑찜 썸네일 이미지"/>
					</span>
					<div className="info_thumb">
						<strong className="tit_prod"><span className="link_tit">[PALLA] 에이백 A-bag 라지</span></strong>
						<span className="txt_price">
							<span className="num">138,000</span><span className="txt">원~</span>
						</span>
					</div>
				</a>
				{/* selected */}
				<button type="button" className="btn_choice" onClick={function(e){
					e.preventDefault();
					e.target.parentNode.classList.toggle('selected');
				}}>
					<span className="ico_heart">쇼핑찜하기</span>
				</button>
				<button type="button" className="btn_del" onClick={function(){
					this.props.onClick2();
				}.bind(this)}><span className="ic2_14">삭제하기</span></button>
			</li>
		);
  }
}

export default ItemDefault;