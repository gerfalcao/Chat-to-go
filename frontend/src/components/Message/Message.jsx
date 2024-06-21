import { Component } from "react";
import './Message.scss'

class Message extends Component {
    constructor(props) {
        super(props)
        let temp = JSON.parse(this.props.message)
        this.state = {
            message: temp
        };
    }

    render() {
        return (
            <div className="Message">
                <p>{this.state.message.body}</p>
            </div>
        )
    }
}

export default Message