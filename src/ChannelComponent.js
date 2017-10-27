import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import { Panel, PanelGroup } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

class ChannelUserGrid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      channels: [
        {name: "channel 1"},
        {name: "channel 2"},
        {name: "channel 3"},
        {name: "channel 4"}
      ],
      users: [
        {name: "user 1"},
        {name: "user 5"}
      ]
    }
  }
  render() {
    return (
      <div className="Grid_css">
        <PanelGroup>
          <ChannelPanel channels={this.state.channels}/>
          <UserPanel users={this.state.users}/>
        </PanelGroup>
      </div>
    )    
  }
}

class ChannelPanel extends React.Component {
  render() {
    return (
      <Panel header="Channels" bsStyle="info">
        <Table striped hovered>
          <tbody>
            {this.props.channels.map(channel => (
              <tr>{channel.name}</tr>
            ))}
          </tbody>
        </Table>
      </Panel>
    )
  }
}

class UserPanel extends React.Component {
  render() {
    return (
      <Panel header="Users" bsStyle="danger">
        <Table striped hovered>
          <tbody>
            {this.props.users.map(user => (
              <tr>{user.name}</tr>
            ))}
          </tbody>
        </Table>
      </Panel>
    )
  }
}

export default ChannelUserGrid