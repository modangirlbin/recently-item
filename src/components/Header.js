import React, { Component } from 'react';
import '../css/reset.scss';
import '../css/header.scss';

class Header extends Component {
  render() {
    return (
			<header id='header' className='header'>	
				<div className='area_head'>
					<a href='#none' className='link_home'>
						<span className='ico_home'>홈으로</span>
					</a>
					<h1 className='tit'>최근 본 목록</h1>
					<a href='#none' className='btn_search'>
						<span className='ico_search'>장바구니</span>
					</a>
				</div>
			</header>
    );
  }
}

export default Header;