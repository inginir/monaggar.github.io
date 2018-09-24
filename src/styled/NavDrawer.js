import React, { Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Menu from 'material-ui/svg-icons/navigation/menu'
import styled from 'styled-components'

const StayVisible = styled.div`
    position: absolute;
    top:0;
    margin-left: ${props => (props.open) ? `${props.width}px` : 'none' }
    transition: margin 0.2s;
`


export default class NavDrawer extends Component {

    render() {
        return (

            <StayVisible open={this.props.open} width={this.props.width}>
                {console.log(this.props)}
                <FloatingActionButton onClick={this.props.toggle}>
                    <Menu />
                </FloatingActionButton>
            </StayVisible>
        )
    }





}