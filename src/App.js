import React, { Component } from "react";
import "./App.css";
import { session, transport } from "./Scribbletune";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: session(),
      playStatus: false
    };
  }

  togglePlayChannel = rowId => {
    const channel = this.state.session.channels[rowId];
    this.state.playStatus ? channel.stopClip(0) : channel.startClip(0);
    this.setState({ playStatus: !this.state.playStatus });
  };

  render() {
    transport.start(130);

    const channel = {
      sample: "/sounds/snare.wav",
      clips: [{ pattern: "x-x-" }]
    };

    this.state.session.createChannel(channel);
    return (
      <div className="App">
        <div style={{ border: "5px solid pink", width: 100, height: 100 }} />
        <button onClick={() => this.togglePlayChannel(0)}>
          {this.state.playStatus ? `Pause` : `Play`}
        </button>
      </div>
    );
  }
}

export default App;
