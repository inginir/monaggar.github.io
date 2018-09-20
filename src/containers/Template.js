import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'


class Template extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <header>
            <h1>TicTacToe</h1>
            <p>Template!</p>
            <RaisedButton label={'WHOOO dis?'} 
                          primary={true}
                          onMouseEnter={() => console.log("heloooo")}/>
          </header>
          <main>
            {this.props.children}
          </main>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Template
