import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import { Panel, PanelGroup } from 'react-bootstrap';
import { Media } from 'react-bootstrap';

class ChatGrid extends React.Component {
  render() {
    return (
      <div className="Grid_css">
        <Chats/>
      </div>
    )
  }
}

class ChatHeader extends React.Component {
  render() {
    const dateStr = new Date(this.props.ts * 1000).toUTCString()
    return (<div><b>{this.props.author}</b> at {dateStr}</div>)
  }
}

class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chatHeader: <ChatHeader author={this.props.conversation.author} ts={this.props.conversation.ts}/>
    }
  }
  
  render() {
    return (
      <div className="ChatBlob_css">
        <Media>
          <Media.Left align="middle">
            <img width={50} height={50} src={this.props.conversation.avatar} alt="A"/>
          </Media.Left>
          <Media.Body>
            <Panel header={this.state.chatHeader}>
                {this.props.conversation.text}
            </Panel>
          </Media.Body>
        </Media>
      </div>
    )
  }
}

class Chats extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      conversations: [
        {author: "user1", text: "this is some sample text", avatar: "https://avatars2.githubusercontent.com/u/810438?s=88&v=4", ts: 1508962011},
        {author: "user2", text: "some more sample text", avatar: "https://avatars1.githubusercontent.com/u/17039503?s=88&v=4", ts: 1508962101},
        {author: "user3", text: "last piece of sample text", avatar: "https://avatars1.githubusercontent.com/u/2771466?s=88&v=4", ts: 1508962110},
        {author: "user4", text: "that was not the last.", avatar: "https://avatars0.githubusercontent.com/u/8848349?s=88&v=4", ts: 1508962180}
      ]
    }
  }

  render() {
    return (
      <div>
        <PanelGroup>
            {this.state.conversations.map(conversation => (
              <Chat conversation={conversation}/>
            ))}
        </PanelGroup>
      </div>
    )
  }
}

export default ChatGrid