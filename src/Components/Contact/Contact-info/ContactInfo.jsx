import React from 'react'
import './ContactInfo.scss'
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
const ContactInfo = () => {
  return (
    <div className='contact-info1'>
    <div className='head'>
    <h3>ENDLESS OPPORTUNITIES</h3>
    <h1>
  

Your move! Let's connect 
    </h1>
    <p>Ready to take the next step? Whether you're looking to boost your team with top-notch talent or explore new career opportunities, we're here to help. Our friendly team is waiting to hear from you!

    Feel free to reach out using the contact details below or drop us a message using the form. We're excited to start the conversation and see how we can work together to achieve your goals.
    
    Don't wait any longer—it's your turn to get in touch! We can't wait to hear from you."</p>
    </div>
    <div className='info'>
      <HomeIcon className='icon'/>
      <div>
        <h2>New Delhi ,India</h2>
        <p>C-31, LGF, Nizamuddin East, New Delhi-110013</p>
      </div>
    </div>
   
    <div className='info'>
        <PhoneIcon className='icon'/>
      <div>
        <h2>01141422406</h2>
        <h2>+91 9643885549</h2>
        <p>Mon to Fri 10am to &pm</p>
      </div>
    </div>
    <div className='info'>
      <MailIcon className='icon' />
      <div>
        <h2>reqxtechnologies@gmail.com</h2>
        <p>Send us your query anytime!</p>
      </div>
    </div>
  </div>
  )
}

export default ContactInfo