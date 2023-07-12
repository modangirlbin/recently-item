import React, { Component } from 'react';
// import BannerSignIn from './BannerSignIn';
import BoxOption from '../containers/BoxOption';
import LatelyTemplate from './lately/LatelyTemplate';
import '../../css/contents.scss';

class ContainerTemplate extends Component {
  render() {
    return (
      <div id="contents" className="contents">
        <BoxOption
          item_count2={this.props.item_count} 
        />
        <LatelyTemplate 
          data={this.props.data}
        />
        <section className='area_banner'>
          <img className='img' src='https://raw.githubusercontent.com/modangirlbin/recently-item/master/src/img/banner.png' alt='이벤트배너'/>
        </section>
      </div>
    );
  }
}

export default ContainerTemplate;