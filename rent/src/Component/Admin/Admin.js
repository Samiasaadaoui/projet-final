
import { useSelector } from "react-redux";
import React from "react";
import AdminCard from "./AdminCard"
  



const Admin = () => {
  const { contacts} = useSelector((state) => state.authReducer);
  return (
    <div className="admin">
      {contacts.map(
        (contact) =>
          contact.role !== "admin" && <AdminCard key={contact._id} contact={contact} />
      )}
    </div>
  );
};

export default Admin;