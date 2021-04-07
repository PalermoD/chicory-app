import React, { useState } from "react";
import "react-dropdown/style.css";
import {
  Main,
  DropDownContainer,
  DropDownHeader,
  ListItem,
  DropDownList,
  DropDownListContainer,
  Logo,
} from "./Dropdown.styles";

const DropdownMenu = (retailers) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    localStorage.setItem("selectedOption", JSON.stringify(value));
    setIsOpen(false);
    console.log(selectedOption);
  };

  const retrievedObject = localStorage.getItem("selectedOption");

  console.log(retrievedObject, 'RETRIVED OBJECT')

  return (
    <Main>
      <img
        src="https://static1.squarespace.com/static/5f1759f10de2dd310eb34d73/t/5f175b3a0de2dd310eb36096/1617654488262/?format=1500w"
        alt="gone"
        width="600"
      />
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
        {
          retrievedObject ?
          <Logo
            src={
              retrievedObject
                ? JSON.parse(retrievedObject).logoUrl
                : selectedOption ?  selectedOption.logoUrl : ''
            }
            alt="logo"
          />
          :
          null
        }
          {retrievedObject
            ? JSON.parse(retrievedObject).name
            : selectedOption ? selectedOption.name : "Select a Reatailer"}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {retailers.retailers.map((option) => (
                <ListItem onClick={onOptionClicked(option)} key={option.id}>
                  <Logo src={option.logoUrl} alt="logo" width="50" />
                  {option.name}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
};

export default DropdownMenu;
