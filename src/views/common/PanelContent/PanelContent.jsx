import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Shortener from '../../Shortener';

class PanelContent extends Component {

render () {
  return (
    <div>
      <div className="content">
        <Switch>
          <Route path='/' exact={true} component={Shortener} />
        </Switch>
      </div>
      <div style={{clear: 'both'}}/>
    </div>
  )
}

}

export default PanelContent;
