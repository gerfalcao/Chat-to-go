import './ChatInput.scss'
const { Component } = require("react");


class ChatInput extends Component {
    render() {
        return (
            <div className="ChatInput">
                <input onKeyDown={this.props.send} placeholder='Type a message and hit Enter' />
            </div>
        )
    }
}

export default ChatInput