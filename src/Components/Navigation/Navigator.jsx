import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { resetFormData } from "../../store/features/form/formSlice.js";

import ModalInfo from "../Modals/ModalInfo.jsx";

const Navigator = () => {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const formData = useSelector((state) => state.form.formData);

  const handleButton = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  const handleLogout = () => {
    dispatch(resetFormData());
    setShowModal(false);
  }
  return (
    <nav className="navbar container">
      <ModalInfo
        visible={showModal}
        styleClass={'notification-error'}
        onClose={handleCloseModal}
        message={
          <>
            Está seguro que desea cerrar la sesión?
            <button onClick={handleLogout} >Logout</button>
          </>
        }
      />
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/counter" className="nav-link">Counter</Link>
        <Link to="/think" className="nav-link">Think</Link>
        <Link to="/product" className="nav-link">Product</Link>
        <Link to="/about" className="nav-link">About</Link>
      </div>

      <div style={{display: "flex", gap: "1rem", alignItems: "center"}}>
        {formData.username && formData.email && (
          <>
            <span>{`Bienvenido: ${formData.username} | ${formData.email}`}</span>
            <button type="button" onClick={handleButton}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navigator;