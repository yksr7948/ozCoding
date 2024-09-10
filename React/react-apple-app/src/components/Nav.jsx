import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"

const Nav = () => {

  const [show, setShow] = useState("false");
  // 검색바 입력값 
  const [searchValue, setSearchValue] = useState();
  // react-router-dom에서 제공하는 함수(페이지 이동)
  const navigate = useNavigate();
  
  // 스크롤 이벤트
  const listener = () => {
    if(window.scrollY > 50){
      setShow("true");
    }else{
      setShow("false");
    }
  }
  // 페이지 이동
  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
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

      <Input
        type="text"
        className="nav_input"
        value={searchValue || ""}
        onChange={handleChange}
        placeholder="영화를 검색해주세요.">
      </Input>

      <Login>로그인</Login>
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
  background-color: ${props => props.show === "false" ? "#000000" : "#000000"};
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

// 검색바 styled
const Input = styled.input`
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  color: white;
  padding: 5px;
  border: 1px solid lightgray;
`

// 로그인 styled
const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover{
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent; 
  }
`
  
export default Nav