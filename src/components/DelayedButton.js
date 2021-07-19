// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {

    render(){
        return <button onClick={e => {
            e.persist()
            return (setTimeout(() => {
            this.props.onDelayedClick(e)
        }, this.props.delay))}}>hi</button>
    }
}

export default DelayedButton