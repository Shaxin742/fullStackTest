import React, { Component } from "react";
import { test } from '../../api/components'
const AppInfoParser = require('app-info-parser')
export default class testPage extends Component {
  state = { item: '' };
  handleChange = (event) => {
    const parser = new AppInfoParser(event.target.files[0])
    let ggg = 'asasd'
    parser.parse().then(result => {
      console.log(result)
      console.log(ggg);
    }).catch(err => { })
  };
  render() {
    return (
      <div>
        <input
          type="file"
          accept=".apk,.ipa"
          onChange={(e) => this.handleChange(e)}
        />
      </div>
    )
  }
}
