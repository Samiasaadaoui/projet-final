import React from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deletecontact } from "../../redux/action/contactAction";



const AdminCard = ({contact}) => {
    const dispatch = useDispatch();
  return (
    <div>
      {" "}
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{contact.name}</td>
            <td>{contact.role}</td>
            <td>
              <Button
                variant="danger"
                onClick={() => dispatch(deletecontact(contact._id))}
              >
                DELETE
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
    
 

export default AdminCard