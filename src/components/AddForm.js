import { Form, Button } from "react-bootstrap";
import { EmployeeContext } from "../context/EmployeeContext";
import { useContext, useState } from "react";
const AddForm = () => {
  const { addEmployee } = useContext(EmployeeContext);
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [address, setAdress] = useState("");
  // const [phone, setPhone] = useState("");

  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const { name, email, address, phone } = newEmployee;

  const onInputChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newEmployee);
    addEmployee(newEmployee);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="py-2">
        <Form.Control
          type="text"
          placeholder="Name :"
          name="name"
          value={name}
          onChange={(e) => onInputChange(e)}
          required
        ></Form.Control>
      </Form.Group>

      <Form.Group className="py-2">
        <Form.Control
          type="email"
          placeholder="E-mail :"
          name="email"
          value={email}
          onChange={(e) => onInputChange(e)}
          required
        ></Form.Control>
      </Form.Group>

      <Form.Group className="py-2">
        <Form.Control
          placeholder="Adress :"
          as="textarea"
          value={address}
          name="address"
          onChange={(e) => onInputChange(e)}
          rows={3}
        ></Form.Control>
      </Form.Group>

      <Form.Group className="py-2">
        <Form.Control
          type="text"
          placeholder="Phone :"
          value={phone}
          name="phone"
          onChange={(e) => onInputChange(e)}
        ></Form.Control>
      </Form.Group>

      <Button variant="success" type="submit" className="w-100 mt-2">
        Add New Employee
      </Button>
    </Form>
  );
};

export default AddForm;
