import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />

      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="/images/man.png" />
    </Nav>
  );
}

// const Capital letter to start with

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;

  align-item: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-left: 20px;
 
 
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      margin-right: 4px;
    }
    span {
      font-size: 13px;
      cursor: pointer;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: center;
        transition: all ease 0.5s;
      }
    }
  
    &:hover {
    span:after {
      opacity: 1;
      transform: scaleX(1);
    }
  }
`;

const UserImg = styled.img`
  border-radius: 50%;
  height: 48px;
  width: 48px;
  cursor: pointer;
  margin: auto 0;
`;

export default Header;
