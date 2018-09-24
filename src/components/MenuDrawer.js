import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'
import NavDrawer from '../styled/NavDrawer'


export default class MenuDrawer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            width: 250
        }

        this.toggle = this.toggle.bind(this);
    }



    toggle() {
        //USE SET STATE SINCE REACT DOES IT WHEN IS BEST
        this.setState(
            {
                open: !this.state.open
                
            }
        );
    }

    // toggle = () => {
    //     this.setState((prevState, props) => {
    //         return {
    //             open: !prevState.open
    //         }
    //     })
    // }

    render() {
        return (
            <div>
                <NavDrawer open={this.state.open} width={this.state.width} toggle={this.toggle}/>
                <Drawer open={this.state.open}>

                    <Link to={'/home'}>
                        <MenuItem primaryText={'logout'} onClick={this.toggle}/>
                    </Link>

                    <Link to={'/login'}>
                        <MenuItem primaryText={'change user'} onClick={this.toggle}/>
                    </Link>

                    <Link to={'/sequences'}>
                        <MenuItem primaryText={'my sequences'} onClick={this.toggle}/>
                    </Link>

                    <Link to={'/sequences'}>
                        <MenuItem primaryText={'new sequence'} onClick={this.toggle}/>
                    </Link>

                    <Link to={'/courses'}>
                        <MenuItem primaryText={'new course'} onClick={this.toggle}/>
                    </Link>

                </Drawer>
            </div>
        )
    }
}