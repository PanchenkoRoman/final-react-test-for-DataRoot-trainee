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
import Catalog from '../../components/Catalog';
import CatalogHeader from '../../components/CatalogHeader';

export default {

  path: '/Production',

  async action() {
    return {
      title: 'Production',
      chunk: 'Production',
      component: <Layout><CatalogHeader /><Catalog /></Layout>,
    };
  },

};
