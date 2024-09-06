import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components"

const Nav = () => {

  const [show, setShow] = useState("false");
  
  // 스크롤 이벤트
  const listener = () => {
    if(window.scrollY > 50){
      setShow("true");
    }else{
      setShow("false");
    }
  }

  // 스크롤 이벤트 등록
  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll',  listener);
    }
  }, [])

  // return
  return (
    <NavWrapper show={show}>
      <Logo>
        <img alt="logo" src="/images/apple-logo.png" onClick={() => (window.location.href="/")}></img>
      </Logo>
    </NavWrapper>
  )
}

// 네비바 styled
const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: ${props => props.show === "false" ? "#000000" : "#3c3c3c"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`
// 로고영역 styled
const Logo = styled.a`
  padding: 0;
  width: 70px;
  font-size: 0;
  display: inline-block;
  margin-bottom: 10px;
  cursor: pointer;

  img {
  display: block;
  width: 100%;
  }
`

export default Nav