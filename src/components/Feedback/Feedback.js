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
//import map from './ma';
import Navigation from '../Navigation';





class Feedback extends React.Component {
  render() {
    return (
        <div id="#to" className={s.container}>
          <div className={s.form_container}>
            <div className={s.center}>
              <h1>Виготовимо наступний шедевр разом</h1>
              <h6>Зв’яжіться з нами та дізнайтесь більше</h6>
            </div>
            <div>
              <form action="post" className={s.main_form}>
                <input type="text" placeholder="Ім’я" required/>
                <input type="tel" placeholder="Тлелефон" required/>
                <input type="e-mail" placeholder="E-mail" required/>
                <textarea name="" placeholder="Ваша ідея або питання">
                </textarea>
                <input type="submit" value="Зв’язатись" className={s.submit_form}/>
              </form>
            </div>
          </div>
          <div className={s.contacts_container}>
            <iframe className={s.map} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1982.868364176605!2d22.719296312654762!3d48.440952597368586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1496424843810" allowfullscreen></iframe>
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
