import React from 'react'
import propTypes from 'prop-types'
//props are the properties of a component that can be modified
export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.list1}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}
//protype declaration help to know whether props type pased is correct or not
Navbar.prototype=
{title: propTypes.string.isRequired,
    //isrequired props are those which ensures that given prop must be passed during function calling
     
 list1: propTypes.string}

 //default props is used to set default vlues of props in case it is not passed as argument during function calling

 Navbar.defauletprops=
 {
    title: "enter title here",
    list1: "enter 1st element of list"
 }