import React, {Component} from 'react';
import Sendbird from 'sendbird';

import styled from 'styled-components';
import { sizeFallback } from '../styles/helpers/size'
class OpenChat extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: {}
		}
	}

	render() {
		return (
			<ChatOpen>
        <ChatLeft>
            <ChatMessage>Message</ChatMessage>
            <ChatInput>Input</ChatInput>
        </ChatLeft>
        <ChatRight>
         <ChatMember>Member</ChatMember>
        </ChatRight>
      </ChatOpen>
    );
	}
}

const ChatOpen = styled.div`
  display: flex;
`;

const ChatLeft = styled.section`
  flex: auto;
`;

const ChatRight = styled.section`
  ${sizeFallback`
    width: 300px;
  `}
`;

const ChatMessage = styled.div`
  flex-direction: column;
`;


const ChatInput = styled.div`
  flex-direction: column;
`;

const ChatMember = styled.div`
  width: 100%;
`;

export default OpenChat