import React, {Component, Fragment} from 'react';
import main from '../../assets/images/main.png';

class MainApp extends Component {

  render() {
    return (
        <Fragment>
          <div style={{textAlign: 'center'}}>
            <img src={main} alt="main"/>
          </div>
        </Fragment>
    );
  }
}

export default MainApp;