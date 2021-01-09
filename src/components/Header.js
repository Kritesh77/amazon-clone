import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
class Header extends React.Component {
  render() {
    return (
      <header className="header-desktop">
        <div className="logo">
          <a href="./index.html">
            <h5 className="whitetext">amazon</h5>
          </a>
        </div>
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header-right">
          <a href="./index.html">
            <span className="whitetext txt-sm">Hello, Sign in</span>
            <br />
            <p>SIGNIN</p>
          </a>

          <a href="./index.html">
            <span className="whitetext txt-sm">Returns</span>
            <br />
            <p>& ORDERS</p>
          </a>
          <a href="./index.html">
            <span className="whitetext txt-sm">Your</span>
            <br />
            <p>Prime</p>
          </a>
          <div class="header__cart">
            <ShoppingCartIcon className="header__shoppingCart" />
            <span>0</span>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
