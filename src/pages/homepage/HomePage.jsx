import React from 'react'

import { Navbar } from '../../components'

import {Header, Footer,UseCase} from '../../containers'
import logo1 from '../../assets/illustration.png'
import logo2 from '../../assets/showcase.png'
import logo3 from '../../assets/botbot.png'

const HomePage = () => {
    return (
        <div className='homepage'>
            <div className='gradient_bg'>
              <Navbar />
              <Header text1={`Let's build the future \n of design, now.`}
                 text2={`Create amazing tools and intergration for 1 million \n
                users or customize Marvel for your team`} 
                buttonText1="Submit Your app" 
                buttonText2="View API Docs" 
                logo={logo1}
                />
              <UseCase />

              <Header text1={`Showcase your app in our \n integrations directory`}
                 text2={`Create amazing tools and intergration for 1 million \n
                users or customize Marvel for your team`} 
                buttonText1="Become a partner" 
                buttonText2="Integrations" 
                logo={logo2}
             
                />
              
              <Header text1={`A Slack-bot for creating \n and managing prototypes`}
                 text2={`Create amazing tools and intergration for 1 million \n
                users or customize Marvel for your team`} 
                buttonText1="Become a partner" 
                buttonText2="Integrations" 
                logo={logo3}
            
                />
            </div>
            
            
            <Footer />
        </div>
    )
}

export default HomePage
