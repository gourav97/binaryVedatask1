import React from 'react'

import './UseCase.css'
import logo1 from '../../assets/apiTeam.png'
import logo2 from '../../assets/graphQL.png'
import logo3 from '../../assets/superchargeWorkflow.png'
import CustomInfo from '../../components/customInfo/CustomInfo'


const UseCase = () => {
    return (
        <div className='bv__content'>
            <div className='bv__headings'>
                <h1>Experience the freedom to build <br/> features, right away.
                </h1>
                <p>You can now harness components of our platform and build powerful <br />
                integration for our 2 million users or simply just for your team</p>
            </div>
            <div className='bv__features-content'>
              <CustomInfo logo={logo1} text1="Dedicated API team" text2="Our team are avaiable to answer question via or Slacl developer community and Email"/>
              <CustomInfo logo={logo2} text1="Our API uses GraphQL" text2="Giving you the flexibility to select all the data you need with a single request"/>
              <CustomInfo logo={logo3} text1="SuperCharge your workFlow" text2="Automate workflows extract designs and analayse data to take Marvel to the next level"/>
        
                

            </div>
            
        </div>
    )
}

export default UseCase
