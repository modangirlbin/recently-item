import React, { Component } from 'react';
import '../css/common.css';
import '../css/header.css';

class Header extends Component {
  render() {
    return (
			<header id="header" className="visible head_sub_type">	
				<div className="wrap_tit">
					<h1 className="tit">
					최근 본 상품
					</h1>
					<a href="http://dev-markup.cjmall.com/jsp/dp_lately/m/lately_product.jsp#off_canvas" className="btn_navi"><span>전체메뉴 열기</span></a>
					<a href="http://dev-markup.cjmall.com/jsp/dp_lately/m/lately_product.jsp#" className="btn_srh"><span className="blind">검색페이지로 이동</span></a>
					<a href="http://dev-markup.cjmall.com/jsp/dp_lately/m/lately_product.jsp#" className="btn_move_cart">
						<div className="cart_item_count ">
							<span className="txt_a11y blind">장바구니</span>
							<strong className="num">99</strong>
							<span className="txt_a11y blind">개 담겨있음</span>
						</div>
					</a>
				</div>
			</header>
    );
  }
}

export default Header;