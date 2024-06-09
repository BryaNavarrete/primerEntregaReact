import logoPedidosYa from "../../img/LogoPedidos.png"
import CartWidget from "./CartWidget"
import "./NavBar.css"
import "./CartWidget.css"

const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          <img src={logoPedidosYa} width={150} alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav text-white">
              <a className="nav-link text-white active " aria-current="page" href="#">Hamburguesas</a>
              <a className="nav-link text-white" href="#">Helados</a>
              <a className="nav-link text-white" href="#">Pizzas</a>
              <a className="nav-link text-white" href="#">Mascotas</a>
            </div>
          </div>
        </div>
        <CartWidget />
      </nav>
    )
}
export default NavBar