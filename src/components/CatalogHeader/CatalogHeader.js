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
import s from './CatalogHeader.css';
import LanguageSwitcher from '../LanguageSwitcher';
import Navigation from '../Navigation';
import { slide as Menu } from 'react-burger-menu';
import logodf from './logodf.png';
import menu from './menu.png';
import Link from '../Link';
import close from './close.svg';

var styles = {
  bmBurgerButton: {
    position: 'absolute',
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
      <div className={s.none}>
        <div className={s.mobile}>
          <h2>Майстерня</h2>
        </div>
        <hr className={s.hr}/>
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
          <div className={s.butBot}>
            <a href='' className={s.go_to_button}>Зв’язатись з нами</a>
          </div>
        </Menu>
      </div>
    );
  }
}

class CatalogHeader extends React.Component {
  render() {
    return (
          <div>
            <MenuResponsive/>
          <div className={[s.clearfix, s.header, s.noneBl].join(' ')}>
            <div className={s.container}>
            <div className={s.heder_title}>
              <Link className={s.brand} to="/"><h2>Майстерня</h2></Link>
            </div>
            <div className={s.heder_info}>
              <div className={s.header_component}>
                <span className={s.main_contact}>+38 066 445 59 00</span><br/>
                <span className={s.contact_desc}>Доставка по Україні</span><br/>
              </div>
              <div className={s.header_component}>
                <a href='' className={s.go_to_button}>Зв’язатись з нами</a>
               </div>
              <div className={s.header_component}>
                <LanguageSwitcher className={s.lan} />
              </div>
            </div>
          </div>
      </div>
      </div>
    );
  }
}

export default withStyles(s)(CatalogHeader);
