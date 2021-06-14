import React, { Component } from 'react';
import JSONTree from 'react-json-tree';
import { GraphContainer } from '@marklogic-community/grove-react-visjs-graph';
 
class DetailView extends Component {
  render() {
    let detail = this.props.detail;
    let label = this.props.label;
    let id = this.props.id;
    return (
      <div>
        <h1>{label}</h1>
        <JSONTree data={detail} />
        <GraphContainer startingUris={[id]} />
      </div>
    );
  }
}
  
export default DetailView;
