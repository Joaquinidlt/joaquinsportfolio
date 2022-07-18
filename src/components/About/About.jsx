
import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import './About.css'
import CV1 from './../../img/ScreenCV1.png'; 
import CV2 from './../../img/ScreenCV2.png'; 
import Certificate from './../../img/CertificadoFSD.H.png'; 
import {RiDirectionLine} from 'react-icons/ri';

export default function About(){
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
                <img src={CV1} width='70%' margin='5px' />
                <img src={CV2} width='70%'  /> 
                <div/>
                <img src={Certificate} width='70%'  /> 
                <div className='containerInfoT' ><a href='https://certificates.soyhenry.com/cert?id=5ad1705c-5aff-4f7e-b420-54e567abc443' > 
                    Certificate </a>  
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
      
                </div>
            </div>
        </div>
    )
}
