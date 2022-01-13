import React from 'react'
import './header.css'



import CustomButton from '../../components/customButton/CustomButtton';


const Header = ({text1, text2, buttonText1, buttonText2, logo}) => (
    <div className="bv__header section__padding" id="home">
      <div className="bv__header-content">
        <h1 className="header__text">{text1}</h1>
        <p>{text2}</p>
        
  
        <div className="bv__header-content__input">
        {/* <button type="button">Submit your app</button>
          <button type="button">View API Docs</button> */}
          <CustomButton type='submit'>{buttonText1}</CustomButton>
          <CustomButton  inverted type='submit'>{buttonText2}</CustomButton>

        </div>

      </div>
  
      <div className="bv__header-image">
        <img src={logo} alt="illustration" />
      </div>
    </div>
  );
  
  export default Header;
