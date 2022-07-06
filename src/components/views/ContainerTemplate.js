import React, { Component } from 'react';
// import BannerSignIn from './BannerSignIn';
import BoxOption from '../containers/BoxOption';
import LatelyTemplate from './lately/LatelyTemplate';
// 단점 : css 두형태 작성헷갈리고, 찾기 힘들고, 수정힘들고
let styles = {
  container:{
    paddingTop: '4.4rem'
  },
  wrap_lately:{
    lineHeight: '1.35',
    background: '#fff'
  }
}

class ContainerTemplate extends Component {
  render() {
    return (
      <div id="container" className="container" style={styles.container}>
        <div id="content" className="content" style={styles.content}>
          {/* <BannerSignIn/> */}
          <div className="wrap_lately">
            <BoxOption
              item_count2={this.props.item_count} 
            />
            <LatelyTemplate 
              data2={this.props.data}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ContainerTemplate;