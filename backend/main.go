package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gerfalcao/Chat-to-go.git/pkg/websocket"
)


func serveWs(w http.ResponseWriter, r *http.Request) {
	ws, err := websocket.Upgrade(w, r)
	if err != nil {
		log.Println(err)
	}

	websocket.Reader(ws)
}

func setupRoutes(){
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Simple Server")
	})
	http.HandleFunc("/ws",serveWs)
}

func main(){
	fmt.Println("Chat To Go v0.01")
	setupRoutes()
	http.ListenAndServe(":8080", nil)
}