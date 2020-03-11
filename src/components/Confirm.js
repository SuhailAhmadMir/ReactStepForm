import React, { Component } from "react"
import { List, ListItem } from "material-ui"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import AppBar from "material-ui/AppBar"
import RaisedButton from "material-ui/RaisedButton"
export class Confirm extends Component {
  back = e => {
    e.preventDefault()
    this.props.previousStep()
  }
  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Personal Details" />
          <List>
            <ListItem primaryText="First Name" secondaryText={firstName} />
            <ListItem primaryText="Last Name" secondaryText={lastName} />
            <ListItem primaryText="Email" secondaryText={email} />
            <ListItem primaryText="Occupation" secondaryText={occupation} />
            <ListItem primaryText="City" secondaryText={city} />
            <ListItem primaryText="Bio" secondaryText={bio} />
          </List>
        </React.Fragment>
        <br />
        <RaisedButton
          label="Continue"
          primary={true}
          style={styles.button}
          onClick={this.continue}
        />

        <RaisedButton
          label="Back"
          onClick={this.back}
          primary={true}
          previousStep={this.props.previousStep}
          style={styles.button}
        />
      </MuiThemeProvider>
    )
  }
}
const styles = {
  button: {
    margin: 15
  }
}
export default Confirm
