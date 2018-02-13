import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { Login, Chat } from '../components'
import styled from 'styled-components';

class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			key: 'value'
		}
	}

	render() {
		return (
			<Chat>
				<Route exact path='/' component={Login} />
				<Route path='/chat' component={Chat} />
			</Chat>
		);
	}
}

export default Main

const MainBoard = styled.div`
	position: relative;
`;