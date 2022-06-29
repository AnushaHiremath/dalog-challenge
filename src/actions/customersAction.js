import axios from "../config/axios";

export const addCustomer = (customer) => {
  return {
    type: "ADD_CUSTOMER",
    payload: customer,
  };
};

export const startAddCustomer = (formData, redirect) => {
  return (dispatch) => {
    axios
      .post("/customers", formData, {
        headers: {
          "x-auth": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.hasOwnProperty("errors")) {
          alert(response.data.message);
        } else {
          const customer = response.data;
          dispatch(addCustomer(customer));
          redirect();
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
};
