import React, { Component } from 'react';
import store from '../../store';
import '../../css/container/box_optioin.css';

class BoxOption extends Component {
  state = store.getState()
  // constructor(props){
  //   super(props);
  //   store.subscribe(function(){  //store가 바뀌었을때
  //     this.setState = store.getState();//number값을 가져와서 this에 설정
  //   }.bind(this));
  // }
	componentDidMount(){
    // 상품갯수 
		let num = 0, i = 0;
		while(i < this.state.arr.length){
			num = num + this.state.arr[i].content.length;
			i++;			
		}
		this.setState({count:num});
  }

  render() {
    return (
      <div className="box_option">
          {/* {console.log(this.props.item_count2);} */}
            <span className="piece_total"><span className="num">{this.state.count}</span>개</span>
            <div className="option_area">
                <span className="u_chkbx chkbx_only_prd">
                  <input type="checkbox" id="ckbx1"/>
                  <label htmlFor="ckbx1">상품만 보기<span className="bin"></span></label>
                  </span>
                <button type="button" className="btn_del">전체삭제</button>
            </div>
        </div>
    );
  }
}

export default BoxOption;