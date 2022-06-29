import React from "react";

class CustomerForm extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      name: "",
      email: "",
      mobile: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.mobile,
    };
    console.log(formData);
    this.props.handleSubmit(formData);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <h2>Add Customer</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">name</label>
          <input
            type="text"
            value={this.state.name}
            name="name"
            id="name"
            onChange={this.handleChange}
          />
          <br />

          <label htmlFor="email">email</label>
          <input
            type="text"
            value={this.state.email}
            name="email"
            id="email"
            onChange={this.handleChange}
          />
          <br />

          <label htmlFor="mobile">mobile</label>
          <input
            type="text"
            value={this.state.mobile}
            name="mobile"
            id="email"
            onChange={this.handleChange}
          />

          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default CustomerForm;
