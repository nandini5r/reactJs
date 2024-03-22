import React from 'react'
import AboutBanner from './About-banner/AboutBanner'
import AboutContent from './About-content/AboutContent'
import AboutTeam from './About-team/AboutTeam'
import AboutUs from './About-us/AboutUs'

const About = () => {
  return (
    <div>
    <AboutBanner/>
    <AboutContent/>
    <AboutUs/>
    <AboutTeam/>
    </div>
  )
}

export default About