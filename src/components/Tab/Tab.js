/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Tab.css';
import Link from '../Link';
import { Tab, Tabs, TabList, TabPanel, ReactTabs } from 'react-tabs';
import Img from './img.jpg';
import { BrowserHistory } from 'react-history';
import  { Push }  from 'react-history/Actions';

/*const Link = React.createClass({
  propTypes: {
    to: PropTypes.string.isRequired
  },

  getInitialState() {
    return { wasClicked: false }
  },

  render() {
    const { to, ...props } = this.props

    if (this.state.wasClicked)
      return( <Push path="/home?the=query#the-hash"/> )

    return (
      <span {...props} onClick={() => this.setState({ wasClicked: true })}/>
    )
  }
})*/

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
    name: 'мармур',
    link: '/production?type=marble'
  },
  {
    name: 'граніт',
    link: '/production?type=granit'
  },
  {
    name: 'пісковик',
    link: '/production?type=sandstone'
  },
  {
    name: 'вапняк',
    link: '/production?type=limestone'
  },
  {
    name: 'кварцит',
    link: '/production?type=quartzite'
  },
  {
    name: 'онікс',
    link: '/production?type=onyx'
  }
]

class Tabss extends React.Component {
  render() {
    return (
        <Tabs>
          <TabList className={s.none} >
            <Link/>
            <li className={s.inline}> Вид каменю: </li>
            {
              catalogNames.map(elem =>
                <Tab selectedClassName={s.disabled} className={s.inline}><Link className={s.insted} to={elem.link}>{elem.name}</Link></Tab>
              )
            }
          </TabList>
          <TabPanel>
            <div className={s.flex}>
              <div className={s.firstImg}>
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
            </div>
            <div className={s.filter_first}>
              <div className={s.filter_desc}>
                Складні архітектурні вироби
              </div>
              <div className={s.filter}>
                <hr/>
              </div>
            </div>
            <div className={s.secondSection}>
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
            </div>
            <div className={s.filter_first}>
              <div className={s.filter_desc}>
                Садово-паркове мистецтво
              </div>
              <div className={s.filter}>
                <hr/>
              </div>
            </div>
            <div className={s.big}>
            </div>
          </TabPanel>
        </Tabs>
    );
  }
}

export default withStyles(s)(Tabss);
