import React, { useEffect } from 'react'
import { logout } from '../../Api/Api'
const AboutPage = () => {
  useEffect(()=>{
    async function name() {
      // logout()
    }

    name()
  },[])
  return (
    <div>AboutPage</div>
  )
}

export default AboutPage