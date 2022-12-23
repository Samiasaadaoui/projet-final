import { useState } from 'react';
import React from 'react'
import Toast from 'react-bootstrap/Toast';
import { useSelector } from 'react-redux';


const Alerterror = () => {
  const errors = useSelector((state)=>state.alertReducer);
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);
 
  return (
    <div>
      {errors.map((el, idx) => (
        <Toast
          className="d-inline-block m-1"
          bg="danger"
          key={idx}
          show={showA}
          onClose={toggleShowA}
        >
      
          <Toast.Body className={el === "Dark" && "text-white"}>
            {el.msg}
          </Toast.Body>
        </Toast>
      ))}
    </div>
  );
};

export default Alerterror


