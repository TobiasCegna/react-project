import React from 'react';

const Registro = () => {
  return (
    <div style={styles.container}>
      <h2>Registro</h2>
      <form style={styles.form}>
        {/* Campo de Nombre */}
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" className="form-control" placeholder="Ingresa tu nombre" />
        </div>

        {/* Campo de Apellido */}
        <div className="form-group">
          <label htmlFor="apellido">Apellido</label>
          <input type="text" id="apellido" name="apellido" className="form-control" placeholder="Ingresa tu apellido" />
        </div>

        {/* Campo de Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" className="form-control" placeholder="Ingresa tu email" />
        </div>

        {/* Campo de Teléfono */}
        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input type="tel" id="telefono" name="telefono" className="form-control" placeholder="Ingresa tu teléfono" />
        </div>

        {/* Campo de Contraseña */}
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" className="form-control" placeholder="Ingresa tu contraseña" />
        </div>

        {/* Campo de Confirmar Contraseña */}
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar Contraseña</label>
          <input type="password" id="confirmPassword" name="confirmPassword" className="form-control" placeholder="Confirma tu contraseña" />
        </div>

        {/* Botón de Enviar */}
        <button type="submit" className="btn btn-primary">Registrar</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
};

export default Registro;
