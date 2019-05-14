import React from "react";


export const navegation = () => {
    return (    
<ul className="nav nav-tabs">
  <li className="nav-item">
    <a className="nav-link active" href="#">Pedido</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Cocina</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Administración</a>
  </li>
</ul>
);
};

export default navegation;