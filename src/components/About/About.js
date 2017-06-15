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
import s from './About.css';
import Link from '../Link';
import Img from './img.jpg';

const BackgroundStyle = {
  width: '36%',
  height: '533px',
  backgroundImage: `url(${Img})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'inline-block',
  verticalAlign: 'middle'
}

const Paragraph = [
  {
    text: "Майстерня - це місце, де ваша ідея реалізовується з натурального каменю Вже більше 5 років ми створюємо унікальні дизайн-проекти для приватних і громадських інтер'єрів."
  },
  {
    text: "Ми пропонуємо різні варіанти співпраці, серед яких створення дизайн-проектів будь-якої складності, їх авторський супровід та повна реалізація."
  },
  {
    text: "Найважливіше для нас - ваше естетичне задоволення, тож ми гарантуємо якість нашої роботи та дотримання термінів виконання."
  },
]


class About extends React.Component {
  render() {
    return (
          <div className={s.container}>
            <div className={s.about}>
              <div style={BackgroundStyle} className={s.backImg}>
              </div>
              <div className={[s.about_block, s.about_block_text].join(' ')}>
                <h1 className={s.main_h}>Про нас</h1>
                {
                  Paragraph.map((elem, index) =>
                      <span className={s.text}>{elem.text}</span>
                  )
                }
                <Link className={s.link} to="/about">
                  Детальніше
                </Link>
                <Link className={s.link} to="/production">
                  Переглянути роботи
                </Link>
              </div>
            </div>
          </div>
    );
  }
}

export default withStyles(s)(About);
