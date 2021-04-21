import React from 'react';

import github from '../Images/github-icon.png';
import linkedin from '../Images/linkedin-icon.png';
import instagram from '../Images/instagram-icon.png';

class Footer extends React.Component {

  render () {
    return (
    <div className='footer'>
      <ul className='footer-icon-list'>

        <li className='footer-icons'><a href='https://www.instagram.com/gcassagnes/' target='_blank'> <img src={instagram} alt='Instagram' height='50' width='50'/> </a>
        </li>

        <li className='footer-icons'> <a href='https://linkedin.com/in/gercassa/' target='_blank'> <img src={linkedin} alt='LinkedIn' height='50' width='50'/> </a>
        </li>

        <li className='footer-icons'><a href='https://github.com/GerCassa' target='_blank'> <img src={github} alt='GitHub' height='50' width='50' /> </a>
        </li>
      </ul>
    </div>
    )
  }
}

export default Footer;