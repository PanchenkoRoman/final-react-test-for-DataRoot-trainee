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
import s from './Catalog.css';



class Catalog extends React.Component {
  render() {
    return (
        <div className={s.container}>
          <h1>Каталог продукції</h1>
          <div className={s.filter_wrapper}>
            <div className={s.filter_first}>
              <div className={s.filter_desc}></div>
              <div></div>
            </div>
          </div>
        </div>
    );
  }
}

export default withStyles(s)(Catalog);
