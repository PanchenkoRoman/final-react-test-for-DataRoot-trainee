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
import Tabss from '../Tab';
import s from './Catalog.css';



class Catalog extends React.Component {
  render() {
    return (
        <div className={s.container}>
          <h1>Каталог продукції</h1>
          <div className={s.filter_wrapper}>
            <div className={s.filter_first}>
              <div className={s.filter_desc}>
                Внутрішнє та зовнішнє оздоблення
              </div>
              <div className={s.filter}>
                <hr className={s.none}/>
                <div className={s.filter_origin}>
                  <Tabss />
                </div>
              </div>
            </div>
          < /div>
        </div>
    );
  }
}

export default withStyles(s)(Catalog);
