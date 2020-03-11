import React, { Component } from "react"
import FormUserDetails from "./FormUserDetails"
import FormPersonalDetails from "./FormPersonalDetails"
import Confirm from "./Confirm"
import Success from "./Success"

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  }

  // Proceed to the next step
  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1
    })
  }

  // Go back to Previous step
  previousStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  }

  // Handle Fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value })
  }
  render() {
    const { step } = this.state
    const { firstName, lastName, email, occupation, city, bio } = this.state
    const values = { firstName, lastName, email, occupation, city, bio }

    switch (step) {
      case 1:
        return (
          <h1>
            <FormUserDetails
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </h1>
        )
      case 2:
        return (
          <h1>
            <FormPersonalDetails
              nextStep={this.nextStep}
              previousStep={this.previousStep}
              handleChange={this.handleChange}
              values={values}
            />
          </h1>
        )
      case 3:
        return (
          <h1>
            <Confirm
              nextStep={this.nextStep}
              previousStep={this.previousStep}
              values={values}
            />
          </h1>
        )
      case 4:
        return (
          <h1>
            <Success />
          </h1>
        )
    }
  }
}

export default UserForm
