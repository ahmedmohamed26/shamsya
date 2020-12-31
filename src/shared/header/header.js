import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const LinkItem = styled(NavLink)`
	color: #fff;
	text-decoration:none;
	padding:5px;
	text-transform:capitalize;
	border-bottom:2px solid transparent;
	&.active{
		border-bottom:2px solid #fff;
	}
`;



export default function Header() {
	useEffect(() => {
		localStorage.setItem('token', process.env.REACT_APP_API_KEY);
	}, []);
	return (
		<div>
			<AppBar position='static'>
				<Toolbar variant='dense'>
						<LinkItem exact to='/'>home</LinkItem>
						<LinkItem to='/question'>question</LinkItem>
				</Toolbar>
			</AppBar>
		</div>
	);
}
