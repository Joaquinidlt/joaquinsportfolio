import React from 'react';
import './Joaquin.css';
import ReactPlayer from 'react-player'
import CardEMarket from './../../img/PantallaCardE-Market.png';
import Certificate from './../../img/CertificadoFSD.H.png';
import Mobile1 from './../../img/MarketMobile1.png';
import Mobile2 from './../../img/MarketMobile2.png';
import Mobile3 from './../../img/MarketMobile3.png';
import CountryAPP from './../../img/CountryApp.png';
import CountryAPP2 from './../../img/CountryApp2.png';
import {RiDirectionLine} from 'react-icons/ri';

export default function Joaquin(){
    return(  
        <div className = 'containerP'>
            <div className = 'containerJ'>
                <div className = 'containerTitleJ' >JOAQUIN IGNACIO DE LA TORRE</div>
                <div className = 'containerInfoJ'>Full Stack Developer</div>
                <div className = 'containerInfoK'>
                    I am friendly, understanding, responsible, dedicated and respectful.
                    I like to be constantly learning, and facing challenges.
                    I have done a FullStack Bootcamp in JavaScript, I work with several technologies, among those are HTML 5, CSS3, JavaScript, React, Node, Redux, Sequelize, SQL, MongoDB...
                    At the moment I'm learning React Native, creating an E-Commerce Mobile App.
                </div>
                <img src={Certificate} width='80%'  /> 
                <div className='containerInfoTPLT' ><a href='https://certificates.soyhenry.com/cert?id=5ad1705c-5aff-4f7e-b420-54e567abc443' > 
                    Certificate <ion-icon name="eye-outline"></ion-icon></a>  
                </div>
                <div className = 'containerInfoK'>
                    I have several projects done, one group project (8 members) and 3 individual projects.
                </div>
                <div className = 'containerInfoGP'>
                    Group Proyect: E-Commerce (E-Market)
                </div>
                <div className = 'containerInfoGP'>
                    Individual Proyects: Country App, Weather App and My Portfolio. E-Commerce Mobile App in progress...
                </div>  
                <div className = 'containerInfoTP'></div>

                <div className = 'containerInfoTP'>
                    E-Market 
                </div>
                <div className = 'containerInfoK'>
                <ReactPlayer 
                    url='https://www.youtube.com/watch?v=sMeybf-Z5Tc' 
                    loop
                    controls
                    width='100%'
                />
                </div>
                <img src={CardEMarket} width='97%'/>  
                <div className='containerInfoTPL' ><a href='https://github.com/bano0224/Henry-PF' > 
                <ion-icon name="code-slash-outline"></ion-icon></a>  
                </div>
           
                <div className = 'containerInfoTP'>
                    Weather App
                </div>
                <ReactPlayer 
                    url='https://youtu.be/LvcMSeK0R_o' 
                    loop
                    controls
                    width='100%'
                />
                <div className = 'containerInfoTP'>
                    Country App
                </div>
                <img src={CountryAPP} width='100%' />
                <img src={CountryAPP2} width='100%'/>
                <div className='containerInfoTPL' ><a href='https://github.com/Joaquinidlt/PI-Countries/tree/master' > 
                <ion-icon name="code-slash-outline"></ion-icon></a>  
                </div>
                <div className = 'containerInfoTP'>
                    E-Market Mobile
                </div>
                <div className = 'containerInfoK'>
                    In production...
                </div>
                <div className='mobileStyle' >
                    <img src={Mobile2} width='33%'/>
                    <img src={Mobile1} width='33%'/>
                    <img src={Mobile3} width='33%'/>
                </div>
                <div className = 'containerInfoK'>
                    Thank you for taking the time to look at my portfolio.
                </div>
                <div className = 'containerInfoTPLB'>
                    <a href = 'https://www.linkedin.com/in/joaquin-de-la-torre-developer/' >
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                    <a href = 'https://github.com/Joaquinidlt' color='white' >
                        <ion-icon name="logo-github" ></ion-icon>
                    </a>
                    <a href="mailto:joaquindlt16@gmail.com">
                        <ion-icon name="mail-outline" ></ion-icon>
                    </a>
                    <a href = '/CV'>
                        <ion-icon name="document-outline"></ion-icon>
                    </a>       
                </div>
            </div>
        </div>
    )
}
