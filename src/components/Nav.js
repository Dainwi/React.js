import React from "react";

const Nav = () => {
  return (
    <>
      <nav>
        <div id="icon">
          <span id="nav" className="material-symbols-outlined" onClick={t}>
            menu
          </span>
         <a href="/" ><span className="name">YOUR FURNITURE</span></a>
          <div>
            <a href="/Singin">
              <span className="material-symbols-outlined" id="account">
                Account_circle
              </span>
            </a>
            <span className="material-symbols-outlined">shopping_cart</span>
          </div>
        </div>
        <ul id="myNav">
          <li>
            <a href="/">HOME</a>
          </li>
          <div>
          {/* <li>
            <a href="/">DEAL ZONE</a>
          </li>
          <li>
            <a href="/">SOFAS & RECLINERS</a>
          </li>
          <li>
            <a href="/">LIVING</a>
          </li>
          <li>
            <a href="/">BEDROOM & MATTRESSES</a>
          </li>
          <li>
            <a href="/">DINING</a>
          </li>
          <li>
            <a href="/">STORAGE</a>
          </li>
          <li>
            <a href="/">STUDY</a>
          </li>
          <li>
            <a href="/">LIGHTING & DECOR</a>
          </li>
          <li>
            <a href="/">OUTDOOR</a>
          </li>
          <li>
            <a href="/">INTERIORS</a>
          </li>
          <li>
            <a href="/">TRENDING</a>
          </li>*/}
          </div>
        <li> 
            <a href="/">STORES</a>
          </li>
          <li>
            <a href="/">HELP</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;

function t() {
  const m = document.getElementById("myNav");
  if (m.style.display !== "block") {
    m.style.display = "block";
  } else {
    m.style.display = "none";
  }

  const nav = document.getElementById("nav");
  if (nav.innerHTML === "menu") {
    nav.innerHTML = "close";
  } else {
    nav.innerHTML = "menu";
  }
}
