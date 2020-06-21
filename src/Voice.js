import React, {Component} from "react";

class Voice extends Component {
    constructor(props) {
        super(props);
        this.recognition = this.initializeSpeechRecognition();
    }

    initializeSpeechRecognition() {
        let recognition = new webkitSpeechRecognition();
        recognition.lang = 'ja';
        recognition.continuous = true;
        recognition.onresult = (event) => {
            console.log(event.results[0][0].transcript)
        }
    }

    record() {
        this.recognition.start();
    }

    render() {
        return(
            <div className="main">
                <h1>Web Speech API</h1>
                <div>
                    <button onClick={ () => this.record() }>Record</button>
                </div>
            </div>
        );
    }
}