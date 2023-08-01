import React from 'react';

const Banner = () => {
  return (
    <div className="banner-container">
      {/* Espacio para hacer fotografías */}
      <input type="file" accept="image/*" capture="camera" />
      <p>Haz clic para tomar una fotografía</p>
    </div>
  );
};

export default Banner;

/*import React from 'react';

const Banner = () => {
  const handleTakePhoto = () => {
    // Aquí puedes agregar la lógica para tomar la foto
    alert('Foto tomada'); // Por ahora, solo mostramos una alerta al hacer clic en el botón
  };

  return (
    <div className="banner-container">
      <button className="btn btn-primary" onClick={handleTakePhoto}>
        Tomar Foto
      </button>
    </div>
  );
};

export default Banner;*/
