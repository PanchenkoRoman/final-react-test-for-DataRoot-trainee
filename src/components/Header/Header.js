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
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import LanguageSwitcher from '../LanguageSwitcher';
import logo from './logo.png';
import logodf from './logodf.png';
import { slide as Menu } from 'react-burger-menu';
import menu from './menu.png';
import close from './close.svg';

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '30px',
    top: '36px',
    cuursor: 'pointer'
  },
  bmCrossButton: {
    right: '30px',
    top: '36px',
  },
  bmMenu: {
    overflov: 'hidden',
    height: 'auto'
  },
  bmOverlay: {
    background: 'white'
  },
  bmMenuWrap: {
    top: '0px'
  }
}

class MenuResponsive extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <div>
        майстернч
        <Menu right styles={ styles }
              customCrossIcon={ <img src={close} /> }
              customBurgerIcon={ <img src={menu} /> }
              width={ '100%' }>
          <div className={s.menu_nav}>
            <div className={s.nav}>
              <div className={s.menu_logo}>
                <img src={logodf} alt="React" />
              </div>
              <div className={s.logo_desc}>
                <h2>Майстерня</h2><br/>
                <span className={s.main_contact}>+38 066 445 59 00</span><br/>
                <span className={s.contact_desc}>м. Мукачево, вул. Переяславська, 1</span><br/>
              </div>
              <Navigation></Navigation>
            </div>
          </div>
        </Menu>
      </div>
    );
  }
}



const messages = defineMessages({
  bannerTitle: {
    id: 'header.banner.title',
    defaultMessage: 'Майстерня',
    description: 'Title in page header',
  },
  bannerDesc: {
    id: 'header.banner.desc',
    defaultMessage: 'Complex web apps made easy',
    description: 'Description in header',
  },
});

class Header extends React.Component {
  render() {
    return (
        <div className={s.container}>
          <div  className={s.none}>
            <MenuResponsive />
          </div>
          <div className={s.banner}>
            <Link className={s.brand} to="/">
            <img src={logo} alt="React" />
            <h2 className={s.bannerTitle}>
              <FormattedMessage {...messages.bannerTitle} />
            </h2>
            </Link>
          </div>
          <div className={[s.menu_wrapper, s.clearfix].join(' ')}>
            <div className={s.menu_title}>
              <div className={s.menu_title_wrapper}>
                <h1>Створюємо шедeври з натурального каменю власноруч </h1>
              </div>
              <div className={s.menu_title_bottom}>
                <span className={s.noneBl}><LanguageSwitcher /></span>
                <a href='' className={s.go_to_button}>Зв’язатись з нами</a>
              </div>
            </div>
            <div className={[s.menu_nav, s.noneBl].join(' ')}>
              <div className={s.nav}>
                <div className={s.menu_logo}>
                  <img src={logodf} alt="React" />
                </div>
                <div className={s.logo_desc}>
                  <h2>Майстерня</h2><br/>
                  <span className={s.main_contact}>+38 066 445 59 00</span><br/>
                  <span className={s.contact_desc}>м. Мукачево, вул. Переяславська, 1</span><br/>
                </div>
                <Navigation></Navigation>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default withStyles(s)(Header);

