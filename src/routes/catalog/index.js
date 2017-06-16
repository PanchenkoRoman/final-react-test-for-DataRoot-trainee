/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Catalogs from './Catalogs';
import * as load from '../../actions/Load'

export default {

  path: '/catalog',

  async action(context) {

    await Promise.all([
      context.store.dispatch(load.getData('park', 'GET_DATA_PARK_')),
    ]);
    console.log(context.store.getState().park);

    return {
      title: 'Production',
      chunk: 'Catalog',
      component: <Layout><Catalogs /></Layout>,
    };
  },

};
