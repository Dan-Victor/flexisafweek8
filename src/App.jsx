import { useState } from 'react'
import './App.css'
import fcbremenLogo from './assets/fcbremen.png'
import player  from './assets/roup.png'
import top from "./assets/top.png"
import vs from './assets/vs.png'
import ball from './assets/ball.png'
import gall from './assets/gall.png'
import sign from './assets/sign.png'
import rec from './assets/rec.png'

const App = ()=> {
 
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu2 = () => {
    setIsOpen(false);
  };

  return (
  <>
    <div className='bground'>
      <div>
      <header>
     <img src={fcbremenLogo} className='for-fl' alt='club-logo'/>
       <nav>
        <ul className={`lii ${isOpen ? 'active' : ''}`}>
        <a href='#'><li onClick={toggleMenu2}>Home</li></a>
        <a href='#'><li onClick={toggleMenu2}>News</li></a>
        <a href='#'><li onClick={toggleMenu2}>Ticket</li></a>
        <a href='#'><li onClick={toggleMenu2}>Shop</li></a>
        <a href='#'><li onClick={toggleMenu2}>Team</li></a>
        </ul>
      
       </nav>
       <div className='hamburger'onClick={toggleMenu} >
          <div className='hamburger-menu'></div>
          <div className='hamburger-menu'></div>
          <div className='hamburger-menu'></div>
          </div>
      </header>
      
      <div className='mf'>
      <h1  className='bred'>FC Bremgarten</h1>
      <p className='forp'>“Discover the power of Bremgarten’s <br/>
      squad. Explore our website now!”</p>
      </div>
      <div className='vp'>
      <img src={top} alt='top'/>
      <img className='playert' src={vs} alt='player'/>
            </div>
      </div>
      <img className='player' src={player} alt='soc-player'/>
     
    </div>
    <div className='sec-sec'>
      
    <h2 className='cbrem'>FC Bremgarten <span> / News</span></h2> 
    <div className='tui'>
   <img src={ball} className='hui' alt='ball' />
   
   <img src={gall} className='hui' alt='gall' />
   <div className='res'>
   <img src={sign} alt='sign'/>
   <img src={rec} alt='rec'/>
   </div>
   </div>
    </div>
    <div className='cont'>
      <h1 className='gin'>Get In Touch</h1>
      <h1 className='su'>Sign Up</h1>
      <p className='cmm'>To Communicate With Us About Everything Exclusive
      <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 10.377L20.2947 10.377L12.4122 2.48108L14.8891 0L27 12.1317L14.8891 24.2633L12.4122 21.7822L20.2947 13.8863L0 13.8863V10.377Z" fill="white"/>
</svg>

      </p>

    </div>
   <footer>
    <h2 className='spo'>Sponsors</h2>
    <svg className='sors' width="477" height="115" viewBox="0 0 477 115" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M477 80.5015L455.257 31.4553L443.61 40.2003L461.472 80.5015H477ZM456.283 80.5015L441.923 48.1349L430.275 56.8799L440.755 80.5015H456.283ZM428.645 64.8406L435.585 80.5015H420.058L417 73.5856L428.645 64.8406Z" fill="white"/>
<path d="M270.643 71.2567C269.571 71.8248 268.48 72.3265 267.372 72.7603C265.936 73.338 264.472 73.794 262.99 74.1255C261.8 74.4191 260.588 74.5352 259.377 74.4715C258.027 74.3757 256.707 73.9139 255.501 73.1159C253.877 72.0511 252.602 70.261 251.908 68.0728C251.323 65.8219 251.253 63.3984 251.706 61.0966C252.349 57.5854 253.5 54.266 255.098 51.316C256.148 49.2945 257.331 47.3971 258.53 45.5211C259.703 43.685 260.893 41.8663 262.098 40.0652C261.323 41.7306 260.675 43.4909 260.163 45.3206C259.736 46.7904 259.443 48.3204 259.291 49.8792C259.098 51.6501 259.263 53.456 259.771 55.118C260.473 57.1407 261.762 58.7195 263.355 59.5094C264.467 60.0334 265.646 60.278 266.828 60.2302C268.669 60.1352 270.497 59.7823 272.28 59.1777C274.278 58.5778 276.267 57.9263 278.246 57.223C290.32 52.9461 326.583 40.2394 326.583 40.2394C326.583 40.2394 284.684 63.6766 270.643 71.2567Z" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
<g clip-path="url(#clip0_63_7)">
<path d="M106.455 28.6401V69.2866C110.318 69.5194 114.17 69.802 118.012 70.1344V78.7522C111.919 78.2248 105.82 77.8246 99.7172 77.5519V28.6401H106.455ZM160 28.645L151.226 55.0498L159.998 84.4336L159.988 84.4389C157.431 83.9665 154.87 83.5172 152.308 83.0909L147.382 66.5992L142.409 81.56C140.05 81.2217 137.69 80.9026 135.327 80.6027L143.881 54.8729L136.048 28.6454H143.337L147.723 43.3231L152.599 28.645H160ZM76.5916 77.1248V28.6446H95.4009V37.3399H83.3297V48.6086H92.4631V57.2265H83.3297V77.1231L76.5916 77.1248ZM51.4313 37.3403V28.6442H72.2719V37.3399H65.2203V77.3604C62.9713 77.4375 60.7247 77.5276 58.4828 77.6375V37.3403H51.4313ZM28.3962 80.1427V28.6458H47.1119V37.3407H35.1334V49.1189C37.8853 49.0731 41.7981 49.0216 44.2325 49.0289V57.6475C41.1853 57.5988 37.7456 57.7019 35.1334 57.7355V70.7826C39.1233 70.3744 43.1163 70.0202 47.1119 69.7198V78.3384C40.8661 78.8062 34.6267 79.4072 28.3962 80.1427ZM15.1784 60.2209L15.1781 28.6442H21.9163V80.9556C19.4531 81.2845 16.9945 81.6339 14.5403 82.0038L6.7375 52.9072V83.2499C4.4875 83.6302 2.24167 84.0272 0 84.4409V28.645H6.40344L15.1784 60.2209ZM123.57 79.2718V28.645H130.309V79.9943C128.065 79.7347 125.82 79.4949 123.57 79.2718Z" fill="#DB202C"/>
</g>
<defs>
<clipPath id="clip0_63_7">
<rect width="160" height="55.9784" fill="white" transform="translate(0 28.6401)"/>
</clipPath>
</defs>
</svg>
<div className='for-fo'>
<p className='for-p'>
<span className='time'>Club<br/></span>
About<br/>

ownership<br/>

Faclities<br/>

Supporters<br/>
Contact Us
</p>

<p className='for-p'>
<span className='time'>Ticket<br/></span>


Single Tickets<br/>

Premium Tickets<br/>

Season Tickets<br/>

Supporters<br/>
</p>

<p className='for-p'>
<span className='time'>News<br/></span>

News Letter
</p>
</div>
<p className='brem'>Bremgarten | &copy; 2024</p>
   </footer>
  </>
  )
}

export default App
