import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MenuDrawer from '../components/MenuDrawer'
import { Route } from 'react-router-dom';
import Profile from './Profile'
import Home from './Home'
import { Header, Main } from '../styled/Template'
import { Stage, Layer, Text, Rect } from 'react-konva';
import Konva from 'konva';

function insideBox() {
	console.log("ouii");
}

class Template extends Component {

	state = {
		rows: 3
	}

	componentWillMount() {
		let height = window.innerHeight
		let width = window.innerWidth
		let size = (height > width) ? width * 0.8 : height * 0.8
		let rows = this.state.rows
		let units = size / rows

		this.setState({
			size: size,
			rows: rows,
			units: units
		})
	}

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
				
				<Stage onMouseEnter={insideBox}
					width={this.state.units}
					height={this.state.units}>
					<Layer>
						<Rect fill='green'
							width={this.state.units}
							height={this.state.units} />
						<Text text="Finally?YESSSS" />
					</Layer>
				</Stage>
				<Route path="/Profile" component={Profile} />
				<Route path="/Home" component={Home} />

			</div>
		)
	}
}

export default Template
