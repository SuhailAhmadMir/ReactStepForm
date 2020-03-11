import React, { Component } from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import AppBar from "material-ui/AppBar"
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }
  back = e => {
    e.preventDefault()
    this.props.previousStep()
  }
  render() {
    const { values, handleChange } = this.props
    console.log("FormPersonalDetailsProps--> ", this.props)
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Personal Details" />
          <TextField
            hintText="Enter Your Occupation"
            floatingLabelText="Occupation"
            onChange={handleChange("occupation")}
            defaultValue={values.occupation}
            variant="filled"
          />
        </React.Fragment>
        <br />
        <React.Fragment>
          <TextField
            hintText="Enter Your City"
            floatingLabelText="City"
            onChange={handleChange("city")}
            defaultValue={values.city}
            variant="filled"
          />
        </React.Fragment>
        <br />
        <React.Fragment>
          <TextField
            hintText="Enter Your Bio"
            floatingLabelText="Bio"
            onChange={handleChange("bio")}
            defaultValue={values.bio}
            variant="filled"
          />
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
export default FormPersonalDetails
