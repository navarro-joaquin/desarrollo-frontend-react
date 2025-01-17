import { useState } from "react";
import { motion } from "motion/react"

import { useSelector, useDispatch } from "react-redux";
import { updateForm, resetForm } from "../../store/features/form/formSlice.js";

import useForm from "../Hooks/useForm.js";
import ModalInfo from "../Modals/ModalInfo.jsx";

// eslint-disable-next-line react/prop-types
const FormWithMotionAndHook = ({titleForm}) => {
  const dispatch = useDispatch();

  //const formState = useSelector((state) => state.form.formData);
  //console.log('Valor actual en el store', formState);

  const { formData: initialState } = useSelector((state) => state.form);

  const {formData, handleChange} = useForm(initialState);

  const [showModal, setShowModal] = useState(false);
  const [style, setStyle] = useState('notification-success');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('datos del formulario', formData);

    if (formData.password === 'mod7USIP-ALVARO') {
      dispatch(updateForm(formData));
      setStyle('notification-correct');
      setMessage(`Bienvenido: ${formData.username}!!`);
      setShowModal(true);
    } else {
      setStyle('notification-error');
      setMessage(`Username/Password incorrectos!`);
      setShowModal(true);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const onCloseModalInfo = () => {
    setShowModal(false);
  };

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
    >
      <ModalInfo
        visible={showModal}
        message={message}
        styleClass={style}
        onClose={onCloseModalInfo}
      />
      <form onSubmit={handleSubmit}>
        <motion.div
          initial={{x: -100}}
          animate={{x: 0}}
          transition={{duration: 0.5}}
        >
          <h3>{titleForm}</h3>
        </motion.div>
        <motion.div
          initial={{x: -100}}
          animate={{x: 0}}
          transition={{duration: 0.5}}
        >
          <div>
            <label className="form-label">
              Module:
              <input
                type="text"
                name="module"
                className="form-input"
                value={formData.module}
                onChange={handleChange}
                disabled
                required
              />
            </label>
          </div>
        </motion.div>
        <motion.div
          initial={{x: -100}}
          animate={{x: 0}}
          transition={{duration: 0.5}}
        >
          <div>
            <label className="form-label">
              Username:
              <input
                type="text"
                name="username"
                className="form-input"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        </motion.div>
        <motion.div
          initial={{x: -100}}
          animate={{x: 0}}
          transition={{duration: 0.5}}
        >
          <div>
            <label className="form-label">
              Email:
              <input
                type="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        </motion.div>
        <motion.div
          initial={{x: -100}}
          animate={{x: 0}}
          transition={{duration: 0.5}}
        >
          <div className="container">
            <label className="form-label">
              Password:
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                className="form-input input"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </label>
            <button
              type="button"
              className="show-button"
              onClick={handleShowPassword}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{y: 100}}
          animate={{y: 0}}
          transition={{duration: 0.5}}
        >
          <button
            type="submit"
            className="form-submit"
          >
            Enviar
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
};
export default FormWithMotionAndHook;