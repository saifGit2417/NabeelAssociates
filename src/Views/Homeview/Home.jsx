import React from 'react'
import CountingNumber from '../../Components/Countingnumberpage/countingNumber'
import Designcarousal from '../../Components/Design Carousal home/Designcarousal'
import Homemotto from '../../Components/Homemotto/Homemotto'
import Homecarousal from '../../Components/Homepagecarousal/Homecarousal'
import Howwehelp from '../../Components/How we help/Howwehelp'

function Home() {
  return (
    <div>
      <Homecarousal />
      <Designcarousal />
      <Howwehelp />
      <CountingNumber />
      <Homemotto />
    </div>
  )
}

export default Home