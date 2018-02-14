import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { Login, OpenChat } from '../components'
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
			<MainBoard>
				<Route exact path='/' component={Login} />
				<Route path='/chat/open' component={OpenChat} />
			</MainBoard>
		);
	}
}

export default Main

const MainBoard = styled.div`
	min-height: 100vh;
`;