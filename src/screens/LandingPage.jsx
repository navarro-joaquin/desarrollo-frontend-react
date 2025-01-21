const LandingPage = () => {
  return (
    <div className="contenedor">
      <header className="encabezado">
        <h1>Módulo 7: <span>DESARROLLO FRONTEND CON REACTJS</span></h1>
      </header>
      <section className="bienvenido">
        <h2>Bienvenido</h2>
        <p>Este módulo se centra en el uso de <strong>React</strong>, incluyendo la creación de <strong>componentes</strong>, el manejo de <strong>hooks</strong>, y el uso de <strong>Redux</strong>.</p>
      </section>
      <section className="temas">
        <h2>Temas cubiertos</h2>
        <div className="temas-grid">
          <p>Componentes funcionales y de clase</p>
          <p>Uso de <strong>React hooks</strong> como <strong>useState</strong> y <strong>useEffect</strong></p>
          <p>Creación de <strong>custom hooks</strong> como useForm</p>
          <p>Gestión de variables de estado con <strong>useState</strong></p>
          <p>Gestión de estado global con <strong>Redux</strong></p>
          <p>Integración de <strong>Redux</strong> con <strong>React</strong></p>
          <p>Manejo de <strong>Formularios</strong> con <strong>React</strong></p>
          <p>Publicando nuestra <strong>Página</strong> con <strong>GitHub Pages</strong></p>
        </div>
      </section>
      <section className="recursos">
        <h2>Recursos Adicionales</h2>
        <p>Para profundizar en los temas cubiertos, consulta los siguientes recursos:</p>
        <ul>
          <li>
            <a href="https://react.dev/" target="_blank">ReactJS</a>
          </li>
          <li>
            <a href="https://redux.js.org/" target="_blank">Redux</a>
          </li>
          <li>
            <a href="https://reactrouter.com/home/" target="_blank">React Router</a>
          </li>
          <li>
            <a href="https://motion.dev/" target="_blank">Motion</a>
          </li>
        </ul>
      </section>
      <footer>
        <hr/>
        <p>&copy; 2024 Módulo 7. USIP.</p>
      </footer>
    </div>
  );
}

export default LandingPage;