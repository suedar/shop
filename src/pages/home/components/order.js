import React, { useState } from 'react';

import order from '../../../assets/order/order.png';
import bag from '../../../assets/order/bag.png';
import close from '../../../assets/video/close.svg';
import code from '../../../assets/order/code.png';

import { Counter } from './counter/index';

import './order.less';

export default (props) => {
  const [product, setProduct] = useState([{
    type: 'egg',
    count: 1,
  }, {
    type: 'banana',
    count: 1,
  }, {
    type: 'fruit',
    count: 1,
    }]);
  const [confirm, setConfirm] = useState(false);

  const toggleCounter = (typeOrder, op) => {
    product[typeOrder].count += op;
    const curProduct = [...product];
    setProduct(curProduct);
  };

  const calPrice = () => {
    return product[0].count * 58 + product[1].count * 24 + product[2].count * 99;
  }
  return <div className="order">
    <div className="order-header">
      <div className="order-header-left">
        <span>送至</span>
        <span>浙江省杭州市五常街道龙湖冠寓1225</span>
      </div>
      <img onClick={() => props.onClose()} src={close} alt=""></img>
    </div>
    <div className="order-container">
      {/* <img src={order} /> */}
      <div className="order-container-content">
        <div>商品名</div>
        <div>数量</div>
        <div>单价</div>
        <div>金额</div>
        <div>来源</div>
        <div>农家土鸡蛋</div>
        {confirm ? <div>{product[0].count}</div>
        : <Counter typeOrder={0} product={product} toggleCounter={toggleCounter} />}
        <div>58.00</div>
        <div>58.00</div>
        <div>永辉超市</div>
        <div>特级香蕉</div>
        {confirm ? <div>{product[1].count}</div>
        : <Counter typeOrder={1} product={product} toggleCounter={toggleCounter} />}
        <div>24.00</div>
        <div>24.00</div>
        <div>阿昌生活馆</div>
        <div>泰国龙眼</div>
        {confirm ? <div>{product[2].count}</div>
        : <Counter typeOrder={2} product={product} toggleCounter={toggleCounter} />}
        <div>99.00</div>
        <div>99.00</div>
        <div>贞记生活超市</div>
      </div>
      <div className="order-container-footer">
        <span>合计</span>
        <span>{calPrice()}</span>
      </div>
      {confirm && <img className="code" src={code} onClick={() => {
        const utterThis = new window.SpeechSynthesisUtterance(
          '支付成功了！大约 3 小时后送达'
        );
        window.speechSynthesis.speak(utterThis);
      }} />}
    </div>
    <div className="order-footer">
      <img src={bag} />
      <div className="">{confirm ? <>完成支付！大概三小时后送达<span>查看物流信息</span></> : <>您要购买的是以上商品吗？<span onClick={() => {
        setConfirm(true);
        const utterThis = new window.SpeechSynthesisUtterance(
          '请扫码结账，商品将配送至浙江省杭州市五常路龙湖冠寓 1225'
        );
        window.speechSynthesis.speak(utterThis);
      }}>确认下单</span></>}</div>
    </div>
  </div>
}