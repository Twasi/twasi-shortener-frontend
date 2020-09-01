import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Shortener from '../../Shortener';
import NotFound from '../NotFound';

class PanelContent extends Component {

render () {
  return (
    <div>
      <div className="content">
        <Switch>
          <Route path='/' exact={true} component={Shortener} />
          <Route path='*' exact={true} component={NotFound} />
        </Switch>
      </div>
      <div style={{clear: 'both'}}/>
    </div>
  )
}

}

export default PanelContent;
