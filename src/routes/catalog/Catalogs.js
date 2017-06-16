/**
 * Created by RomanPC on 16.06.2017.
 */
import React from 'react';
import Catalog from '../../components/Catalog';
import CatalogHeader from '../../components/CatalogHeader';
import {connect} from 'react-redux'

class Catalogs extends React.Component {

  render() {

    const {park} = this.props;

    return (
      <div >
        <CatalogHeader />
        <Catalog park={park} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    park: state.park
  }
}

export  default  connect(mapStateToProps)(Catalogs)
