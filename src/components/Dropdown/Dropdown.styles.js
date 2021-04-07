import styled from 'styled-components';
export const Main = styled("div")`
  padding: 20px;
  text-align: center;
  background: black;
  height: 95vh;
`;

export const DropDownContainer = styled("div")`
  width: 50.5em;
  margin: 0 auto;
`;

export const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #6d239c;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const DropDownListContainer = styled("div")`
  overflow-y: auto;
  height: 230px;
`;

export const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 0;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #6d239c;
  font-size: 1.3rem;
  font-weight: bold;
  text-align: left;

  &:first-child {
    padding-top: 0.8em;
    color: #6d239c;
  }
`;

export const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  color: #6d239c;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  &:hover {
    background: #6d239c;
    color: #fff;
  }
`;

export const LogoContainer = styled.div`
    flex-basis: 40%;
`;

export const Logo = styled.img`
    width: 45px;
    margin: 15px;
`;
