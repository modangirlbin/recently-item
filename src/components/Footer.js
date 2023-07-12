import React, { Component } from 'react';
import '../css/footer.scss';

// 쪼갤가 말까 고민(수정이 들어올때 한번에 바뀌는 단위?)
// 기능 개발하기는 쪼개는개 나을거 같기도
// 스타일 입히기에는 합치는게 나을거 같기도 컴포넌트간 마진/보더등을 어디서 주어야 할까 
// container혹은templete사용? or 무조건 컴포넌트내? -> 이걸로 컴포넌트 나누는 기준 정해야 하지 싶음
// 스타일을 import했을때 캡슐화가 되는가?
class Footer extends Component {
  render() {
    return (
      <div id='footer' className='footer'>
        <p className='help'>이용 중 도움이 필요하시면 [고객지원] 페이지로, 로그인에 문제가 있다면 help@testsite.com으로 문의 해 주세요.</p>
      </div>
    );
  }
}

export default Footer;