import React, { Component } from 'react';

class BoxOption extends Component {

  render() {
    return (
      <div className='area_option'>
        <span className='num_total'><span className='offscreen'>총 목록개수</span>{this.props.count}개</span>
        <div className='group_option'>
          {/* <span className=''>
            <input type='checkbox' id='check1'/>
            <label htmlFor='check1'>상품만 보기<span className='bin'></span></label>
          </span> */}
          <button className='btn_search'><span className='ico_search'>검색</span></button>
          <button type='button' className='btn_delete'>전체삭제</button>
        </div>
      </div>
    );
  }
}

export default BoxOption;