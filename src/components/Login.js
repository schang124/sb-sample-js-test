import React, {Component} from 'react';
import SendBird from 'sendbird';
import { APP_ID } from '../consts';

import styled from 'styled-components';
import { sizeFallback } from '../styles/helpers/size';
let sb = null;

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userId: '',
			nickname: ''
		};

		this._handleChange = this._handleChange.bind(this);
		this._handleClick = this._handleClick.bind(this);
	}

	componentDidMount(){
		sb = new SendBird({
			appId: APP_ID
		})
	}

	_handleChange(e){
		this.setState({ [e.target.name]: e.target.value });
	}

	_handleClick(){
		const {userId, nickname } = this.state;
		const _this = this;
		sb.connect(userId, function(user, error) {
			if(error){
				console.error(error);
				alert(`Sorry, ${user}.\nAn error is occurred.\nPlease try to login again.`);
				return;
			}

			sb.updateCurrentUserInfo(nickname, '', function(response, error) {
				if(error) console.log(response, error);
			});

			_this.props.history.push('/chat/open');
		});
	}

	render() {
		const { userId, nickname} = this.state;
		return (
			<LoginContainer>
				<LoginBox>
					<Title>SendBird Chat</Title>
					<InputBox>
						<Input
							name="userId"
							type="text"
							value={userId}
							placeholder="USER ID"
							onChange={this._handleChange}
						/>
					</InputBox>
					<InputBox>
						<Input
							name="nickname"
							type="text"
							value={nickname}
							placeholder="NICKNAME"
							onChange={this._handleChange}
						/>
					</InputBox>
					<ButtonSubmit onClick={this._handleClick}>Open Chat</ButtonSubmit>
				</LoginBox>
			</LoginContainer>

		);
	}
}

export default Login

// login
const LoginContainer = styled.div`
	display: flex;
	min-height: 100vh;
	text-align: center;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
`;

const LoginBox = styled.div`
	margin: auto;
	${sizeFallback`
		width: 300px;
		padding: 16px;
	`}
	background-color: rgba(255, 255, 255, 0.8);
	box-shadow: rgba(0, 0, 0, 0.2) 0 16px 60px;
`;

// title
const Title = styled.h1`
	${sizeFallback`
		padding: 4px 0 6px;
		font-size: 24px;
	`}
	text-align: left;
	font-weight: bold;
	color: #695BCC;
`;

// input
const InputBox = styled.div`
	${sizeFallback`
		padding: 4px 0;
	`}
`;

const Input = styled.input.attrs({
	type: props => props.type,
	value: props => props.value
})`
	width: 100%;
	${sizeFallback`
		padding: 0 9px;
		height: 40px;
		font-size: 16px;
	`}
	color: #695BCC;
	border: 0;
	outline: 0;
	box-sizing: border-box;
	
	::placeholder{
		opacity: 0.5;
	}
`;

// button
const ButtonSubmit = styled.button`
	width: 100%;
	${sizeFallback`
		margin-top: 10px;
		height: 40px;
	`}
	color: white;
	background-color: #695BCC; 
`;