//Strict mode
'use strict'

//using react class to create new function
class TreasureButton extends React.Component {
    constructor(props) {
        super(props)

        //declaring that to begin with, "treasure" is not found.
        this.state = {opened: false}
    }

    //what happens
    render() {
        //if button is pressed
        if (this.state.opened === true) {
            return "Hmm.. You see that someone's already been here. Shame."
        }

        return React.createElement(
            "div",    //what element to create
            null,   // no function
            React.CreateElement(   //Create new element inside div
                "button",
                {onClick: () => this.setState({ opened: true })},    //by pressing the button state changes to true
                "Press the button for a secret Treasure.."
            )
        )
    }
}

