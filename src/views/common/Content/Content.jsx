import React from 'react';
import Particles from 'react-particles-js';
import Waves from './Waves';

import './_style.css';

const Content = ({ children }) =>

  <div className={"siteContent"}>
    <Particles
      params={{
        "particles": {
            "number": {
                "value": 100,
                "density": {
                    "enable": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "speed": 4,
                    "size_min": 0.3
                }
            },
            "line_linked": {
                "enable": false
            },
            "move": {
                "random": true,
                "speed": 2,
                "direction": "top",
                "out_mode": "out"
            }
        },
      }}
      className="absolute" />
    <div className="mainContent">
      {children}
    </div>
    <Waves className="bottom"/>
    {/*
    <svg className="vectorBottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path className="vectorBottom" fill="#163f77" fill-opacity="1" d="M0,224L10.9,213.3C21.8,203,44,181,65,176C87.3,171,109,181,131,165.3C152.7,149,175,107,196,90.7C218.2,75,240,85,262,101.3C283.6,117,305,139,327,133.3C349.1,128,371,96,393,85.3C414.5,75,436,85,458,101.3C480,117,502,139,524,122.7C545.5,107,567,53,589,58.7C610.9,64,633,128,655,181.3C676.4,235,698,277,720,256C741.8,235,764,149,785,133.3C807.3,117,829,171,851,192C872.7,213,895,203,916,192C938.2,181,960,171,982,138.7C1003.6,107,1025,53,1047,32C1069.1,11,1091,21,1113,53.3C1134.5,85,1156,139,1178,154.7C1200,171,1222,149,1244,128C1265.5,107,1287,85,1309,74.7C1330.9,64,1353,64,1375,85.3C1396.4,107,1418,149,1429,170.7L1440,192L1440,320L1429.1,320C1418.2,320,1396,320,1375,320C1352.7,320,1331,320,1309,320C1287.3,320,1265,320,1244,320C1221.8,320,1200,320,1178,320C1156.4,320,1135,320,1113,320C1090.9,320,1069,320,1047,320C1025.5,320,1004,320,982,320C960,320,938,320,916,320C894.5,320,873,320,851,320C829.1,320,807,320,785,320C763.6,320,742,320,720,320C698.2,320,676,320,655,320C632.7,320,611,320,589,320C567.3,320,545,320,524,320C501.8,320,480,320,458,320C436.4,320,415,320,393,320C370.9,320,349,320,327,320C305.5,320,284,320,262,320C240,320,218,320,196,320C174.5,320,153,320,131,320C109.1,320,87,320,65,320C43.6,320,22,320,11,320L0,320Z">
      </path>
      <path className="vectorBottom" fill="#2463b7" fill-opacity="1" d="M0,192L10.9,165.3C21.8,139,44,85,65,64C87.3,43,109,53,131,96C152.7,139,175,213,196,202.7C218.2,192,240,96,262,80C283.6,64,305,128,327,149.3C349.1,171,371,149,393,154.7C414.5,160,436,192,458,176C480,160,502,96,524,96C545.5,96,567,160,589,176C610.9,192,633,160,655,176C676.4,192,698,256,720,240C741.8,224,764,128,785,96C807.3,64,829,96,851,133.3C872.7,171,895,213,916,202.7C938.2,192,960,128,982,133.3C1003.6,139,1025,213,1047,240C1069.1,267,1091,245,1113,250.7C1134.5,256,1156,288,1178,288C1200,288,1222,256,1244,218.7C1265.5,181,1287,139,1309,101.3C1330.9,64,1353,32,1375,69.3C1396.4,107,1418,213,1429,266.7L1440,320L1440,320L1429.1,320C1418.2,320,1396,320,1375,320C1352.7,320,1331,320,1309,320C1287.3,320,1265,320,1244,320C1221.8,320,1200,320,1178,320C1156.4,320,1135,320,1113,320C1090.9,320,1069,320,1047,320C1025.5,320,1004,320,982,320C960,320,938,320,916,320C894.5,320,873,320,851,320C829.1,320,807,320,785,320C763.6,320,742,320,720,320C698.2,320,676,320,655,320C632.7,320,611,320,589,320C567.3,320,545,320,524,320C501.8,320,480,320,458,320C436.4,320,415,320,393,320C370.9,320,349,320,327,320C305.5,320,284,320,262,320C240,320,218,320,196,320C174.5,320,153,320,131,320C109.1,320,87,320,65,320C43.6,320,22,320,11,320L0,320Z"></path>
      <path className="vectorBottom" fill="#2f80ed" fill-opacity="1" d="M0,160L16,154.7C32,149,64,139,96,117.3C128,96,160,64,192,64C224,64,256,96,288,133.3C320,171,352,213,384,197.3C416,181,448,107,480,106.7C512,107,544,181,576,202.7C608,224,640,192,672,165.3C704,139,736,117,768,128C800,139,832,181,864,170.7C896,160,928,96,960,96C992,96,1024,160,1056,176C1088,192,1120,160,1152,170.7C1184,181,1216,235,1248,229.3C1280,224,1312,160,1344,122.7C1376,85,1408,75,1424,69.3L1440,64L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"></path>
    </svg>
    */}
  </div>

export default Content;
