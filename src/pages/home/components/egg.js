import React from 'react';
import './egg.less';

import egg1 from '../../../assets/product/egg1.png';
import day1 from '../../../assets/shop/day1.png';
import close from '../../../assets/video/close.svg';
import egg from '../../../assets/video/egg.mp4';

export default () => {
  return <div className="egg">
    <div className="egg-left">
      <img src={egg1} alt=""></img>
      <div>来自<span>贞记生活超市</span></div>
      <div>产自<span>安徽九华山</span></div>
      <div>剩余观赏天数</div>
      <img src={day1} alt=""></img>
    </div>
    <div className="line">&nbsp;</div>
    <div className="egg-right">
      <div>
        <img src={close} alt=""></img>
      </div>
      <div className="egg-right-title">农家土鸡蛋</div>
      <video width="332" controls src={egg}></video>
      <div className="egg-right-text">
        <div>生产批次：JSD209234144</div>
        <div>保质期至：2021年5月12日</div>
        <div>贮存条件：常温阴凉干燥处</div>
        <div>生产日期：2021年3月12日</div>
      </div>
    </div>
  </div>
}