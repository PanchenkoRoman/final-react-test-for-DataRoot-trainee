
import React from 'react';
import Header from '../../components/Header';
import MainCatalog from '../../components/MainCatalog';
import About from '../../components/About';
import Insta from '../../components/Insta';
import {connect} from 'react-redux'


class Home extends React.Component {

  render() {

    const {aboutUs, projects} = this.props;

    return (
      <div >
        <Header/>
        <MainCatalog />
        <About aboutUs={aboutUs} />
        <Insta projects={projects} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    aboutUs: state.aboutUs,
    projects: state.projects
  }
}

export  default  connect(mapStateToProps)(Home)
