import { Link } from "react-router-dom"

const Help = () => {
  return (
    <main className="help-main">
      <h1>Ayuda y Documentación</h1>
      <section>
        <h2>¿Cómo funciona el chat?</h2>
        <p>
          Esta aplicación permite enviar y recibir mensajes en tiempo real simulando un chat similar a WhatsApp. Solo los usuarios autenticados pueden acceder al chat.
        </p>
      </section>
      <section>
        <h2>Tecnologías utilizadas</h2>
        <ul>
          <li>React</li>
          <li>React Router DOM</li>
          <li>Hooks: useState, useEffect, useNavigate</li>
          <li>Context API</li>
          <li>localStorage</li>
        </ul>
      </section>
      <section>
        <h2>Posibles mejoras futuras</h2>
        <ul>
          <li>Soporte para mensajes multimedia</li>
          <li>Notificaciones en tiempo real</li>
          <li>Mejoras en la interfaz de usuario</li>
          <li>Soporte para múltiples salas de chat</li>
        </ul>
      </section>
      <p style={{ marginTop: "2rem", textAlign: "center" }}>
        <Link to="/chat" className="help-link">
          Volver al chat
        </Link>
      </p>
    </main>
  )
}

export default Help