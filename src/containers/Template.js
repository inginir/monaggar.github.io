import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MenuDrawer from '../components/MenuDrawer'
import { Header, Main } from '../styled/Template'
import TemplateRoutes from '../routes/TemplateRoutes'
import BoxKonva from '../components/BoxKonva'

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

				<BoxKonva size={50} />

				{TemplateRoutes}

			</div>
		)
	}
}

export default Template
