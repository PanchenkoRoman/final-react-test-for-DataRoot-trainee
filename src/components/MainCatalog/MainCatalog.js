/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MainCatalog.css';
import Link from '../Link';
import Navigation from '../Navigation';
import First from './1.jpg';
import Second from './2.jpg';
import Third from './3.jpg';
import Fourth from './4.jpg';

/* var BackgroundStyle = {
  width: '415px',
  backgroundImage: `url(${Third})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain'
} */
const Catalog = [
    {
      link: '/',
      img: First,
      alt: 'img',
      name: 'Портрети'
    },
    {
      link: '/',
      img: Second,
      alt: 'img',
      name: 'Скульптури'
    },
    {
      link: '/',
      img: Third,
      alt: 'img',
      name: 'Каміни'
    },
    {
      link: '/',
      img: Fourth,
      alt: 'img',
      name: 'Столешні'
    }
];

class MainCatalog extends React.Component {
  render() {
    return (
        <div className={s.container}>
          <div className={s.second_section}>
            <h1>Каталог продукції</h1>
            <div className={s.block}>
              <ul>
                <li>
                  <a href="" className={s.filter}>
                    Внутрішнє та зовнішнє<br/> оздоблення
                  </a>
                </li>
                <li>
                  <a href="" className={s.filter}>
                    Складні архітектурні<br/> вироби
                  </a>
                </li>
                <li>
                  <a href="" className={s.filter}>
                    Садово-паркове<br/> мистецтво
                  </a>
                </li>
              </ul>
                <Link className={s.go_to_button} to="/production">
                  Каталог продукції
                </Link>
            </div>
            {
              Catalog.map((elem, index) =>
                <div key={index} className={s.block}>
                  <img src={elem.img} alt=""/>
                  <Link className={s.link} to="/production">{elem.name}</Link>
                </div>
              )
            }

          </div>
        </div>
    );
  }
}

export default withStyles(s)(MainCatalog);

