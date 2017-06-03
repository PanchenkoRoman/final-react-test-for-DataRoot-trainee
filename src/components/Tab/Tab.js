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
import s from './Tab.css';
import { Tab, Tabs, TabList, TabPanel, ReactTabs } from 'react-tabs';
import Img from './img.jpg';
import First from './first.png';
import Hard from './hard.png';
import Hf from './hf.png';
import Hfto from './hf2.png';
import Big from './Group.png';



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
  }
];

const catalogSecond = [
  {
    link: '/',
    alt: 'first'
  },
  {
    link: '/',
    alt: 'second'
  },
  {
    link: '/',
    alt: 'third'
  }
];

const catalogNames = [
  {
    name: 'мармур'
  },
  {
    name: 'граніт'
  },
  {
    name: 'пісковик'
  },
  {
    name: 'вапняк'
  },
  {
    name: 'квацит'
  },
  {
    name: 'онікс'
  }
]

class Tabss extends React.Component {
  render() {
    return (
        <Tabs>
          <TabList className={s.none} >
            <li className={s.inline}> Вид каменю: </li>
            {
              catalogNames.map(elem =>
                <Tab selectedClassName={s.disabled} className={s.inline}>{elem.name}</Tab>
              )
            }
          </TabList>
          <TabPanel>
            <div className={s.firstImg}>
              <img src={First} altText='img'/>
            </div>
            <div className={s.smallContainer}>
              {
                Catalog.map(elem =>
                      <div className={s.small}>
                        <img className={s.smallImg} src={elem.img} altText={elem.alt}/>
                      </div>
                )
              }
            </div>
            <div className={s.filter_first}>
              <div className={s.filter_desc}>
                Складні архітектурні вироби
              </div>
              <div className={s.filter}>
                <hr/>
              </div>
            </div>
            {
              catalogSecond.map(elem =>
                  <div className={s.imgWrap}>
                  <div className={
                    elem.alt == 'first' ? s.vb :
                    elem.alt == 'second' ? s.second : s.third
                  }></div>
                  </div>
                )
             }
            <div className={s.filter_first}>
              <div className={s.filter_desc}>
                Садово-паркове мистецтво
              </div>
              <div className={s.filter}>
                <hr/>
              </div>
            </div>
            <img src={Big}/>
          </TabPanel>
        </Tabs>
    );
  }
}

export default withStyles(s)(Tabss);
