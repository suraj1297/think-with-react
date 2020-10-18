/*
    // Functional component
    const Container = () =>{
        return React.createElement(`div`,null,`Hey ProGrads! Welcome to React Learning`,
        React.createElement(`div`,null,`Let's rock and roll`)
        );
    }
    // Render the Container
    const container = document.getElementById('react-container');
    ReactDOM.render(React.createElement(Container),container);
*/


/*
class ReactContainer extends React.Component {

    // constructor - to initialize the state 
    constructor() {
        super()
        this.state = {}
    }

    // render method to render the react dom 
    render() {
        return React.createElement(`div`, null, `Hey ProGrads`,
            React.createElement(`div`, null, `Let's rock and roll`)
        );
    }

}

*/

class ReactContainer extends React.Component {

    // constructor - to initialize the state 
    constructor() {
        super()
        this.state = {}
    }

    // render method to render the react dom 
    render() {
        return (
            <div>
                Hey ProGrads
                <div>Let's rock and roll</div>
            </div>
        )
    }

}



const container = document.getElementById('react-container');
ReactDOM.render(<ReactContainer />, container);