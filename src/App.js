import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import { Grid, Row, Col } from 'react-bootstrap';

import ChatGrid from './ChatComponent.js';
import ChannelUserGrid from './ChannelComponent.js';

class ChatApp extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={6} md={4}><ChannelUserGrid/></Col>
            <Col xs={12} md={8}><ChatGrid/></Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default ChatApp;
