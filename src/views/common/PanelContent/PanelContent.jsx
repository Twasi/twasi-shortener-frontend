import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Shortener from '../../Shortener';
import ConfirmRedirection from '../ConfirmRedirection';

class PanelContent extends Component {

render () {

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  return (
    <div>
      <div className="content">
        <Switch>
          {urlParams.has('confirmRedirection') ?
            <Route path="/" exact={true} component={ConfirmRedirection} />
          :
            <Route path='/' exact={true} component={Shortener}/>
          }
        </Switch>
      </div>
      <div style={{clear: 'both'}}/>
    </div>
  )
}

}

export default PanelContent;
