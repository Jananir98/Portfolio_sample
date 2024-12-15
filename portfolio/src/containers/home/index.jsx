import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './styles.scss';
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';

const Home = () => {
  const navigate=useNavigate()
  const handleContact=()=>
    {
      navigate ('/contact')
    }
  return (
    <div className='home'>
      <Typewriter
        words={["Hello, I'm Janani Front End Developer"]}
        loop={1}
        cursor
        cursorStyle='...'
        typeSpeed={80}
        delaySpeed={1000}
      />
      <br/>
      <Animate play
      duration={1.5}
      delay={1.5}
      start={{
        transform:'translateY(550px)'
      }}
      end={{
        transform:'translatex(0px)'
      }}
      >
      <button className="button"  onClick={handleContact}><span>Contact Me </span></button></Animate>
    </div>
  );
}

export default Home;
