import React, { Component } from 'react';
import '../../css/views/banner_signin.css';

class BannerSignIn extends Component {
  render() {
    return (
      <div>
        <div className="wrap_banner_signin">
            <div className="banner_signin">
                <p className="txt">로그인하면 더 많은 쇼핑 히스토리를 확인할 수 있습니다.</p>
                <a href="http://dev-markup.cjmall.com/jsp/dp_lately/m/lately_product.jsp#" className="u_btn btn_signin"><span>로그인</span></a>
            </div>
        </div>
      </div>
    );
  }
}

export default BannerSignIn;