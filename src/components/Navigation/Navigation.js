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
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';

const messages = defineMessages({
  production: {
    id: 'navigation.production',
    defaultMessage: 'Каталог продукції',
    description: 'production link in header and futer',
  },
  about: {
    id: 'navigation.about',
    defaultMessage: 'Про нас',
    description: 'About link in header and futer',
  },
  works: {
    id: 'navigation.works',
    defaultMessage: 'Наші роботи',
    description: 'Works link in header and futer',
  },
});

class Navigation extends React.Component {
  render() {
    return (
      <div className={s.nav} role="navigation">
        <Link className={s.link} to="/production">
          <FormattedMessage {...messages.production} />
        </Link><br/>
        <Link className={s.link} to="/about">
          <FormattedMessage {...messages.about} />
        </Link><br/>
        <Link className={s.link} to="/error">
          <FormattedMessage {...messages.works} />
        </Link>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
