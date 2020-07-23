import React from 'react'
import Card from '../UI/Card'
import Logo from '../Logo'

/**
* @author
* @function Hero
**/

const Hero = (props) => {
  return(
    <div>
        <Card>
          <div style={{ padding: '50px 0'}}>
            <Logo />
            </div>
        </Card>
    </div>
   )

 }

export default Hero;