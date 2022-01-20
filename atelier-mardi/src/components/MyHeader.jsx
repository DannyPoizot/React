import React from "react";


function MyHeader() {
  return (
    <header>
      <nav>
        <img src="logo192.png" width="60px" alt="img" />
          <ul className='navItems'>
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
          </ul>
      </nav>
    </header>
  );
}
export default MyHeader;
