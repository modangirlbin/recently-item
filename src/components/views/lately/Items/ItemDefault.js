import React, { Component } from 'react';
import store from '../../../../store';

class ItemDefault extends Component {
 state = store.getState()

  render() {
		return (
			<li>
				<a href='#none' className='link_item'>
					<span className='thumb_item'>
						<img src='https://raw.githubusercontent.com/modangirlbin/recently-item/master/src/img/img_item1.png?token=GHSAT0AAAAAACE6V5BQFS7SYRE6EDZA47EOZFNDOSQ' alt=''/>
					</span>
					<div className='info_item'>
						<strong className='tit_prod'><span className='link_tit'>[PALLA] 에이백 A-bag 라지</span></strong>
						<span className='txt_price'>
							<span className='num'>138,000</span><span className='txt'>원~</span>
						</span>
					</div>
				</a>
				{/* selected */}
				<button type='button' className='btn_choice' onClick={function(e){
					e.preventDefault();
					e.target.parentNode.classList.toggle('selected');
				}}>
					<span className='ico_heart'>쇼핑찜하기</span>
				</button>
				<button type='button' className='btn_delete' onClick={function(){
					this.props.onClick2();
				}.bind(this)}><span className='ic2_14'>삭제하기</span></button>
			</li>
		);
  }
}

export default ItemDefault;