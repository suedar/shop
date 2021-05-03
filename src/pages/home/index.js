import React, { useEffect, useState, useRef } from 'react';

import location from '../../assets/menu/icon-location.svg';
import setting from '../../assets/menu/setting.svg';
import bag from '../../assets/menu/bag.svg';
import audio from '../../assets/menu/audio.svg';
import line from '../../assets/menu/line1.png';
import arrow from '../../assets/menu/arrow.svg';
import sort from '../../assets/menu/sort.svg';

import egg1 from '../../assets/product/egg1.png';
import egg2 from '../../assets/product/egg2.png';
import egg3 from '../../assets/product/egg3.png';
import egg4 from '../../assets/product/egg4.png';

import line1 from '../../assets/shop/line.png';

import shop1 from '../../assets/shop/shop1.png';
import shop2 from '../../assets/shop/shop2.png';
import shop3 from '../../assets/shop/shop3.png';
import shop4 from '../../assets/shop/shop3.png';
import day1 from '../../assets/shop/day1.png';
import day2 from '../../assets/shop/day2.png';
import day3 from '../../assets/shop/day3.png';
import add from '../../assets/shop/add.png';
import talk from '../../assets/shop/talk.png';

import Egg from './components/egg';
import Order from './components/order';

import option from '../../assets/menu/option.svg';

import './index.less';

const products = [
  {
    image: egg1,
    title: '农家土鸡蛋',
    onSellShop: 3,
    price: 56.4,
  },
  {
    image: egg2,
    title: '绿壳乌鸡蛋',
    onSellShop: 4,
    price: 75.5,
  },
  {
    image: egg3,
    title: '黑家土鸡蛋',
    onSellShop: 2,
    price: 78.4,
  },
  {
    image: egg4,
    title: '有机乌鸡蛋',
    onSellShop: 1,
    price: 99,
  },
];


const randoms = [
  {
    image: shop1,
    title: '永辉超市',
    onSellShop: 3,
    price: 5.0,
  },
  {
    image: shop2,
    title: '贞记生活超市',
    onSellShop: 4,
    price: 4.5,
  },
  {
    image: shop3,
    title: '阿昌生活馆',
    onSellShop: 2,
    price: 4.7,
  },
  {
    image: shop4,
    title: '天尚农贸超市',
    onSellShop: 1,
    price: 4.8,
  },
];

const shops = [{
  shopImage: shop1,
  image: day1,
  title: '贞记生活超市',
  price: 56
}, {
  shopImage: shop2,
  image: day2,
  title: '永辉超市',
  price: 58
}, {
  shopImage: shop3,
  image: day3,
  title: '阿昌生活馆',
  price: 55
}]

const Home = function () {
  const [isListening, setIsListening] = useState(false);
  const [isAskForEgg, setIsAskForEgg] = useState(false);
  const [isProduct, setIsProduct] = useState(false);
  const [isShop, setIsShop] = useState(false);
  const [isEgg, setIsAgg] = useState(false);
  const [isOrder, setIsOrder] = useState(false);
  const [isRandom, setIsRandom] = useState(false);
  const lineRef = useRef();

  const [isStart, setIsStart] = useState(false);
  const refStart = useRef(isStart);

  const newRecognition = new window.webkitSpeechRecognition();
  const [taskList, setTaskList] = useState([
    '你有什么想买的吗?',
    // '我想买一盒鸡蛋',
    // '你想买什么类型的鸡蛋呢?',
  ]);
  newRecognition.continuous = true;

  newRecognition.onresult = function (event) {
    console.log(event.results[0][0].transcript, 'onresult');
    const result = event.results[0][0].transcript;
    setTaskList([...taskList, result]);
    if (result === '我想买一盒鸡蛋') {
      const reply = '你想买什么类型的鸡蛋呢?';
      const utterThis = new window.SpeechSynthesisUtterance(reply);
      window.speechSynthesis.speak(utterThis);
      setTaskList([...taskList, result, reply]);
      setIsAskForEgg(true);
    } else {
      const utterThis = new window.SpeechSynthesisUtterance(
        '对不起, 我不知道您在说什么'
      );
      window.speechSynthesis.speak(utterThis);
    }
  };

  useEffect(() => {
    window.onkeydown = function (e) {
      if (!refStart.current) {
        const utterThis = new window.SpeechSynthesisUtterance(
          '您有什么想买的吗'
        );
        window.speechSynthesis.speak(utterThis);
      }
      if (e.code === 'ShiftLeft') {
        setIsListening(true);
        setIsStart(true)
        setIsAskForEgg(false);
        refStart.current = true;
        newRecognition.stop();
        newRecognition.start();
      }
    };
    window.onkeyup = function (e) {
      if (e.code === 'ShiftLeft') {
        setIsListening(false);
        newRecognition.stop();
        lineRef.current && (lineRef.current.style.animationPlayState = 'paused');
      }
    };
  }, []);

  const renderStart = () => {
    if (!isStart) {
      return (
        <>
          <div className="header">
            <div className="header-left">
              <img src={location} alt=""></img>
              <span className="text">浙江省杭州市五常街道龙湖冠寓1225</span>
            </div>
            <div className="header-right">
              <img src={setting} alt="" />
            </div>
          </div>
          <div className="content">
            <div className="ask">您有什么想买的吗&nbsp;&nbsp;😃</div>
            <div className="hint">
              试着对我说 “我想逛逛市场” 、 “我想买一盒鸡蛋”
            </div>
          </div>
        </>
      );
    }
    return (
      <div className="start">
        {taskList.map((item, index) => {
          const word = item + '  ' + (index % 2 === 1 ? '👧🏼' : '😃');
          return <div className="start-item">{word}</div>;
        })}
      </div>
    );
  };
  const renderProduct = () => {
    return (
      <>
        <div className="product-container-content-type">
          <span>
            价格
            <img src={sort} alt="" />
          </span>
          <span>销量</span>
          <span>筛选</span>
        </div>
        <div className="product-container-content-product">
          {products.map((item) => {
            return (
              <div
                className="product-container-content-product-item"
                onClick={() => setIsShop(true)}
              >
                <div className="product-container-content-product-item-header">
                  <img src={item.image} alt="" />
                  <img src={option} alt="" />
                </div>
                <div className="product-container-content-product-item-content">
                  <div className="product-container-content-product-item-title">
                    {item.title}
                  </div>
                  <div className="product-container-content-product-item-on-sell">
                    {item.onSellShop}家店在卖
                  </div>
                  <div className="product-container-content-product-item-price">
                    <span className="product-container-content-product-item-money">
                      {item.price}
                    </span>
                    &nbsp;/盒(30枚)
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };
  const renderShop = () => {
    return <div className="product-container-content-shop">
      <div className="product-container-content-shop-main">
        <img src={egg1} alt="" />
        <span className="product-container-content-shop-main-title">农家土鸡蛋</span>
        <img className="product-container-content-shop-main-line" src={line1} alt="" />
        <div className="product-container-content-product-item-price">
          <span className="product-container-content-product-item-money">
            56.4
          </span>
          &nbsp;/盒(30枚)
        </div>
      </div>
      <div className="line">&nbsp;</div>
      {shops.map((item, index) => {
        return <div className="product-container-content-shop-item">
          <img src={item.shopImage} alt="" />
          <span className="product-container-content-shop-item-title">{item.title}</span>
          <img src={item.image} alt="" />
          <div className="product-container-content-product-item-price">
            <span className="product-container-content-product-item-money">
              56.4
            </span>
            &nbsp;/盒(30枚)
          </div>
          <div className="product-container-content-shop-item-footer">
            <img onClick={() => setIsOrder(true)} src={add} alt="" />
            {index === 2 && <img src={talk} alt="" />}
          </div>
        </div>
      })}
    </div>
  }
  const renderRandom = () => {
    return (
      <>
        <div className="product-container-content-type">
          <span>
            价格
            <img src={sort} alt="" />
          </span>
          <span>销量</span>
          <span>筛选</span>
        </div>
        <div className="product-container-content-product random">
          {randoms.map((item) => {
            return (
              <div
                className="product-container-content-product-item"
                onClick={() => setIsShop(true)}
              >
                <div className="product-container-content-product-item-header">
                  <img src={item.image} alt="" />
                  <img src={option} alt="" />
                </div>
                <div className="product-container-content-product-item-content">
                  <div className="product-container-content-product-item-title">
                    {item.title}
                  </div>
                  <div className="product-container-content-product-item-on-sell">
                    {item.onSellShop}家店在卖
                  </div>
                  <div className="product-container-content-product-item-price">
                    <span className="product-container-content-product-item-money">
                      {item.price}
                    </span>
                    &nbsp;2445人买过
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };
  const renderContent = () => {
    if (!isProduct && !isRandom) {
      return renderStart();
    }
    return (
      <div className="product-container">
        <div className="product-container-header">
          <div>
            <img onClick={() => isShop ? setIsShop(false) : isRandom ? setIsRandom(false) : setIsProduct(false)} src={arrow} alt="" />
          </div>
          <div>"{isRandom ? "我想随便逛一逛" : "我想买一盒鸡蛋"}"</div>
        </div>
        <div className="product-container-content">{isShop ? renderShop() : isRandom ? renderRandom() : renderProduct()}</div>
      </div>
    );
  };
  return (
    <div className="home">
      <div className="home-container">{renderContent()}</div>
      <div className="footer">
        <div className="footer-left">
          <div className="button">
            <img src={bag} alt=""></img>
          </div>
          {isShop && <div className="footer-left-line">你想要买那家店的 😊</div>}
        </div>
        {!isShop && <div className="footer-right">
          {isListening && (
            <img ref={lineRef} className="line" src={line} alt=""></img>
          )}
          {isAskForEgg && (
            <div className="more">
              {['农家土鸡蛋', '绿壳土鸡蛋', '查看更多'].map((item, index) => {
                return (
                  <span onClick={() => index === 2 && setIsProduct(true)}>
                    {item}
                  </span>
                );
              })}
            </div>
          )}
          <div className="button">
            <img src={audio} alt=""></img>
          </div>
        </div>}
      </div>
      {isEgg && <Egg onClose={() => setIsAgg(false)}/>}
      {isOrder && <Order onClose={() => setIsOrder(false)}/>}
    </div>
  );
};

export default Home;
