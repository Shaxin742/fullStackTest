
import PrivateRoute from '../../components/PrivateRoute'
import Dash from '../../pages/dash'
import Test from '../../pages/test'
import Table from '../../pages/table'
import Editor from '../../pages/editor'
import D3 from '../../pages/d3'
import React from "react";
import { Redirect, Switch } from 'react-router-dom'

class ContentMain extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <PrivateRoute path='/dash' component={Dash} />
          <PrivateRoute path='/test' component={Test} />
          <PrivateRoute path='/user/table' component={Table} />
          <PrivateRoute path='/editor' component={Editor} />
          <PrivateRoute path='/d3' component={D3} />

          <Redirect exact from='/' to='/dash' />
        </Switch>
      </div>
    )
  }
}

export default ContentMain
