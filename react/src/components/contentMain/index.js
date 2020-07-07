
import PrivateRoute from '../../components/PrivateRoute'
import Test from '../../pages/test'
import Table from '../../pages/table'
import React from "react";

class ContentMain extends React.Component {
  render() {
    return (
      <div>
        <PrivateRoute path='/test' component={Test} />
        <PrivateRoute path='/user/table' component={Table} />
      </div>
    )
  }
}

export default ContentMain
