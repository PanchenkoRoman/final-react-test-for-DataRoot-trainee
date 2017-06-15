/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Insta.css';
import Link from '../Link';
import Img from './img.jpg';

const Catalog = [
  {
    link: '/',
    img: Img,
    alt: 'img'
  },
  {
    link: '/',
    img: Img,
    alt: 'img'
  },
  {
    link: '/',
    img: Img,
    alt: 'img'
  },
  {
    link: '/',
    img: Img,
    alt: 'img'
  },
  {
    link: '/',
    img: Img,
    alt: 'img'
  },
  {
    link: '/',
    img: Img,
    alt: 'img'
  }
];

class Insta extends React.Component {
  render() {
    return (
          <div className={s.container}>
            <div className={s.insta}>
              <div className={s.center}>
                <h1 className={s.title}>Краще один раз подивитись</h1>
                <span>Фото проектів з нашого <a href=""><strong>instagram</strong></a>.</span>
              </div>
              {
                Catalog.map((elem, index) =>
                  <div key={index} className={s.cards}>
                    <img src={elem.img} alt=""/>
                    <div className={s.card_desc}>#onyx #m-selection</div>
                  </div>
                )
              }
              <div className={s.center}>
                <a href="" className={s.go_to_button}>
                  Всі проекти
                </a>
              </div>
            </div>
          </div>
    );
  }
}

export default withStyles(s)(Insta);
