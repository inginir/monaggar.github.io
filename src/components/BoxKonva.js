import React, {Component} from 'react'
import { Stage, Layer, Text, Rect } from 'react-konva';

export default class BoxKonva extends Component {

    constructor(props){
        super(props);
        this.insideBox = this.insideBox.bind(this);

    }

    state = {
        fill:'green'
    }

    insideBox() {
        console.log("InsideBox");
        this.setState({fill:'yellow'})
    }

    render() {
        return (
            <Stage onMouseEnter={this.insideBox}
                width={this.props.size}
                height={this.props.size}>
                <Layer>
                    <Rect fill={this.state.fill}
                            width={this.props.size}
                            height={this.props.size} />
                    <Text text="Finally?YESSSS" />
                </Layer>
            </Stage>
        )
    }
}

