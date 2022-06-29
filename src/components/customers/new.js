import React from "react";
import { connect } from "react-redux";
import { startAddCustomer } from "../../actions/customersAction";

import CustomerForm from "./form";

function CustomerNew(props) {
  const handleSubmit = (formData) => {
    const redirect = () => props.history.push("/customers");
    props.dispatch(startAddCustomer(formData, redirect));
  };

  return (
    <div>
      <CustomerForm handleSubmit={handleSubmit} />
      <h2>Hello</h2>
    </div>
  );
}

export default connect()(CustomerNew);
