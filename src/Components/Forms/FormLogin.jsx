import { useState } from "react";
// eslint-disable-next-line react/prop-types

const FormLogin = ({ titleForm }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('datos del formulario', formData);
  }

  const handleChange = (e) => {
    // debugger;
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>{titleForm}</h3>
        <div>
          <label>
            Username:
            <input
              type='text'
              name='username'
              value={formData.username}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </>
  )
}

export default FormLogin;