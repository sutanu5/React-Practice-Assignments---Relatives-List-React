import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <div id="main">
                    <ol key="relativeList">
                        <li key="relativeListitem1">Ram</li>
                        <li key="relativeListitem2">Sam</li>
                        <li key="relativeListitem3">Jodu</li>
                
                    </ol>
            </div>
        )
    }
}


export default App;
