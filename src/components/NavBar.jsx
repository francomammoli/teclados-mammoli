import React from 'react';
import {Link} from 'react-router-dom';
import CartWidget from './CartWidget';

function NavBar() {
  
  return <div>

  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/'>Keyboards</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto  mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to='/'>Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/'>Mas vendidos</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to='/' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Filtrar por
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to='/'>Fecha</Link></li>
            <li><Link className="dropdown-item" to='/'>Precio</Link></li>
            <li><hr className="dropdown-divider"></hr></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" to='/'>Ofertas</Link>
        </li>
      </ul>
      <div><CartWidget></CartWidget></div>
    </div>
  </div>
</nav>

</div>  

}

export default NavBar;