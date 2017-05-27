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
import LanguageSwitcher from '../LanguageSwitcher'

class CatalogHeader extends React.Component {
  render() {
    return (
          <div className={[s.clearfix, s.header].join(' ')}>
            <div className={s.container}>
            <div className={s.heder_title}>
              <h2>Майстерня</h2>
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
    );
  }
}

export default withStyles(s)(CatalogHeader);
