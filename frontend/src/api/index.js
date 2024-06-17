var socket = new WebSocket("ws://localhost:8080/ws");

let connect = (cb) => {
    console.log("Attempting connection");
    
    socket.onopen = () => {
        console.log("Successfully Connected")
    }

    socket.onmessage = (msg) => {
        console.log(msg)
        cb(msg)
    }

    socket.onclose = (event) => {
        console.timeLog("Socker Closed Connection: ", event)
    }

    socket.onerror = (error) => {
        console.log("Socker Error: ", error)
    }
}

let sendMsg = (msg) => {
    console.log("sending msg: ", msg)
    socket.send(msg)
}

export {connect, sendMsg};