import React from 'react';
import logo from './logo.svg';
import './App.css';
import Info from './Info.js'
import Titre from './Title.js'
import Date from './Date.js'

function App() {
  return (
    <div className="lol">
      <div className="lm">
        <h1>ibrahim jemal</h1>
        <h2>web developer</h2>
        <img className="pm" src="https://www.novelios.com/wp-content/uploads/2019/03/recrutement4.jpg"></img>
        <div className="tb"><Titre name="Personal info" color="white" /></div>
        <Info name="adress" abc=" taniour km 1.5"/>
        <Info name="phone" abc="28496086"/>
        <Info name="E-mail" abc="brahim.jemal284@gmail.com"/>
        <Info name="Date of birth" abc="21/07/2003"/>
        <Info name="linkedln" abc="https://www.facebook.com/brahim.jemal"/>
        <div className="tb"><Titre name="skills" color="white"/>s</div>
        <Info name="C/C+" abc="70%"/>
        <Info name="JAVA" abc="15%"/>
        <Info name="J2EE" abc="30%"/>
        <Info name="HTML5" abc="100%"/>
        <Info name="CSS3" abc="20%"/>
        <Info name="Javascript" abc="70%"/>
        <Info name="PHP5" abc="40%"/>
        <Info name="SQL" abc="55%"/>
        <Info name="Symfony" abc="45%"/>
        <Info name="Hidermate" abc="40%"/>
        <Info name="LDA" abc="40%"/>
      </div>
      <div>
        <div className="kool">
          <p> Ambitious,Social and creative studentin 2nd year of delopmet aiming to build a solid technical profile in a professionel 
          environment .
          </p>
          <p> active member in GO MY CODE (SFAX).
          a people in tayab mhiri secandary school and web level 2 developer in GO MY CODE .  
          </p>
        </div>
        <hr/>
        <Titre name="Experience" color="#148b5a"/>
        <hr/>
        <Date date="2017-10"name="Contestant" abc="IEEEXtreme.tunisia" abf="24-hour programming compe tition"/>
        <Date date="2017-12" name="Trainer" abc="" abf=""/>
        <Date date="2018-01/2018-04" name="Trainer" abc="" abf=""/>
        <Date date="2018-01" name="Contestant" abc="" abf=""/>
        <Date date="2018-01" name="Web deloper " abc="" abf=""/>
        <Date date="2018-07" name="Contestant" abc="" abf=""/>
        <Date date="2018-07" name="intern" abc="" abf=""/>
        <Date date="2018/2019-05" name="Chaiman" abc="" abf=""/>
        <Date date="2018/2019-05" name="Community manager" abc="" abf=""/>
        <Date date="2015-03" name="Freelance Guitarist" abc="" abf=""/>
        <hr/>
        <Titre name="Education" color="#148b5a"/>
        <hr/>
        <Date date="2011-09" name="Carthage byrsa high school"/>
        <Date date="2016-09" name="natilonal institute of applied sciences and technology (INSAT)"/>

      </div>
    </div>
  );
}

export default App;
