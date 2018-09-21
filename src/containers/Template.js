import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MenuDrawer from '../components/MenuDrawer'
import { Route } from 'react-router-dom';
import Profile from './Profile'
import Home from './Home'
import { Header, Main } from '../styled/styledTemplate'

class Template extends Component {

	render() {
		return (
			<div>
				<MuiThemeProvider>
					<div>
						<MenuDrawer />
						<Header>
							CSG Template
            		</Header>

						<Main>
							{this.props.children}
							Main!!!!!!!!
            		</Main>

					</div>
				</MuiThemeProvider>

				<Route path="/Profile" component={Profile} />
				<Route path="/Home" component={Home} />

			</div>
		)
	}
}

export default Template
