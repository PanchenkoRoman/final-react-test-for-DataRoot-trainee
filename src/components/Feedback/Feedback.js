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
import s from './Feedback.css';
import map from './map.png';
import Navigation from '../Navigation';


class Feedback extends React.Component {
  render() {
    return (
        <div className={s.container}>
          <div className={s.form_container}>
            <div className={s.center}>
              <h1>Виготовимо наступний шедевр разом</h1>
              <h6>Зв’яжіться з нами та дізнайтесь більше</h6>
            </div>
            <div>
              <form action="post" className={s.main_form}>
                <input type="text" placeholder="Ім’я"/>
                <input type="tel" placeholder="Тлелефон"/>
                <input type="e-mail" placeholder="E-mail"/>
                <textarea name="" placeholder="Ваша ідея або питання">
                </textarea>
                <submit className={s.submit_form}>Зв’язатись</submit>
              </form>
            </div>
          </div>
          <div className={s.contacts_container}>
            <div className={s.map}>
              <img src={map} alt="map"/>
            </div>
            <div className={s.nav}>
              <h2>Контакти</h2><br/>
              <span className={s.main_contact}>+38 066 445 59 00</span><br/>
              <span className={s.contact_desc}>м. Мукачево, вул. Переяславська, 1</span><br/>
              <Navigation></Navigation>
            </div>
          </div>
      </div>
    );
  }
}

export default withStyles(s)(Feedback);
