import React, { useState } from "react";

const Form = ({ data, setData }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
  });

  const populateData = (e) => {
    e.preventDefault();
    let isUnique = false;

    if (
      formData.firstName == "" ||
      formData.lastName == "" ||
      formData.contact == ""
    ) {
      alert("Input fields should not be empty");
      return;
    }
    data.forEach((item) => {
      if (
        item.firstName == formData.firstName &&
        item.lastName == formData.lastName
      ) {
        alert("Name should be unique");
        isUnique = true;
        return;
      }
      if (item.contact == formData.contact) {
        alert("Contact should be unique");
        isUnique = true;
        return;
      }
    });
    if (!isUnique) {
      setData([...data, formData]);
    }
    setFormData({ firstName: "", lastName: "", contact: "" });
  };

  return (
    <div className="form-outer">
      <h1>Enter details</h1>
      <form>
        <div className="inputName">
          <div className="inputField">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value.trim() })
              }
            />
          </div>
          <div className="inputField">
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value.trim() })
              }
              s
            />
          </div>
        </div>
        <div className="inputField ">
          <input
            type="tel"
            name="contact"
            placeholder="Contact"
            value={formData.contact}
            onChange={(e) =>
              setFormData({ ...formData, contact: e.target.value.trim() })
            }
          />
        </div>
        <div className="button-div">
          <button className="save-button" onClick={populateData}>
            Save
          </button>
          <button
            className="save-button "
            onClick={(e) => {
              e.preventDefault();
              setFormData({ firstName: "", lastName: "", contact: "" });
            }}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
