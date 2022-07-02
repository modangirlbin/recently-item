import React, { Component } from 'react';
import '../../css/container/box_optioin.css';

class BoxOption extends Component {
  render() {
    return (
      <div className="box_option">
            <span className="piece_total"><span className="num">{this.props.item_count2}</span>개</span>
            <div className="option_area">
                <span className="u_chkbx chkbx_only_prd">
                  <input type="checkbox" id="ckbx1"
                    onClick={function(e){
                      e.preventDefault();
                      this.props.filterItems();
                    }.bind(this)}
                  />
                  <label htmlFor="ckbx1">상품만 보기<span className="bin"></span></label>
                  </span>
                <button type="button" className="btn_del">전체삭제</button>
            </div>
        </div>
    );
  }
}

export default BoxOption;