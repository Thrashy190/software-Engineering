import React from "react";

const DifficultyIcon = ({ level }) => {
  const renderBars = () => {
    const bars = [];
    for (let i = 1; i <= 3; i++) {
      const isFilled = i <= level;
      bars.push(
        <div
          key={i}
          style={{
            width: "10px", // Ajusta el ancho de la barra según tus preferencias
            height: `${i * 15}px`, // Ajusta la altura de la barra según tus preferencias
            border: "1px solid #FAD264", // Ajusta el color del borde según tus preferencias
            borderRadius: "5px", // Ajusta el radio de las esquinas según tus preferencias
            backgroundColor: isFilled ? "#FAD264" : "transparent", // Relleno solo para la primera barra
            marginRight: "3px", // Espacio entre las barras
          }}
        ></div>
      );
    }
    return bars;
  };

  return (
    <div style={{ display: "flex", alignItems: "flex-end" }}>
      {renderBars()}
    </div>
  );
};

export default DifficultyIcon;
