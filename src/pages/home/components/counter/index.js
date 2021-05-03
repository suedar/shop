import React, { useEffect, useState } from 'react';

import './index.less';

export const Counter = function ({
  typeOrder,
  product,
  toggleCounter
}) {
  // const [product, setProduct] = useState(_product);
  return <div className={'counter'}>
    <div
        className={'left'}
        onClick={() => product[typeOrder].count > 1 && toggleCounter(typeOrder, -1)}
    >-</div>
    <div className={'text'}>{product[typeOrder].count}</div>
    <div
      className={'right'}
      onClick={() => toggleCounter(typeOrder, 1)}
    >+</div>
  </div>;
};
