// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
    render(){
        return (
            <button onClick = {e => {this.props.onReceiveCoordinates([e.clientX, e.clientY])}}>onClick</button>
        )
    }
}

export default CoordinatesButton