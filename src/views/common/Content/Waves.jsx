import React, { useEffect } from 'react';
import './_style.css';

const Waves = (props) => {
  const [svg, setSvg] = React.useState();

  useEffect(() => {
    setInterval(getRandomPath,10000);
    getRandomPath()
  }, []);

  let paths = [
    "M0,160L10.9,170.7C21.8,181,44,203,65,181.3C87.3,160,109,96,131,106.7C152.7,117,175,203,196,202.7C218.2,203,240,117,262,122.7C283.6,128,305,224,327,240C349.1,256,371,192,393,160C414.5,128,436,128,458,144C480,160,502,192,524,208C545.5,224,567,224,589,213.3C610.9,203,633,181,655,197.3C676.4,213,698,267,720,266.7C741.8,267,764,213,785,202.7C807.3,192,829,224,851,202.7C872.7,181,895,107,916,106.7C938.2,107,960,181,982,181.3C1003.6,181,1025,107,1047,69.3C1069.1,32,1091,32,1113,64C1134.5,96,1156,160,1178,176C1200,192,1222,160,1244,165.3C1265.5,171,1287,213,1309,197.3C1330.9,181,1353,107,1375,96C1396.4,85,1418,139,1429,165.3L1440,192L1440,320L1429.1,320C1418.2,320,1396,320,1375,320C1352.7,320,1331,320,1309,320C1287.3,320,1265,320,1244,320C1221.8,320,1200,320,1178,320C1156.4,320,1135,320,1113,320C1090.9,320,1069,320,1047,320C1025.5,320,1004,320,982,320C960,320,938,320,916,320C894.5,320,873,320,851,320C829.1,320,807,320,785,320C763.6,320,742,320,720,320C698.2,320,676,320,655,320C632.7,320,611,320,589,320C567.3,320,545,320,524,320C501.8,320,480,320,458,320C436.4,320,415,320,393,320C370.9,320,349,320,327,320C305.5,320,284,320,262,320C240,320,218,320,196,320C174.5,320,153,320,131,320C109.1,320,87,320,65,320C43.6,320,22,320,11,320L0,320Z",
    "M0,320L10.9,282.7C21.8,245,44,171,65,154.7C87.3,139,109,181,131,197.3C152.7,213,175,203,196,208C218.2,213,240,235,262,224C283.6,213,305,171,327,138.7C349.1,107,371,85,393,85.3C414.5,85,436,107,458,133.3C480,160,502,192,524,202.7C545.5,213,567,203,589,165.3C610.9,128,633,64,655,58.7C676.4,53,698,107,720,149.3C741.8,192,764,224,785,197.3C807.3,171,829,85,851,85.3C872.7,85,895,171,916,197.3C938.2,224,960,192,982,186.7C1003.6,181,1025,203,1047,208C1069.1,213,1091,203,1113,181.3C1134.5,160,1156,128,1178,128C1200,128,1222,160,1244,186.7C1265.5,213,1287,235,1309,240C1330.9,245,1353,235,1375,202.7C1396.4,171,1418,117,1429,90.7L1440,64L1440,320L1429.1,320C1418.2,320,1396,320,1375,320C1352.7,320,1331,320,1309,320C1287.3,320,1265,320,1244,320C1221.8,320,1200,320,1178,320C1156.4,320,1135,320,1113,320C1090.9,320,1069,320,1047,320C1025.5,320,1004,320,982,320C960,320,938,320,916,320C894.5,320,873,320,851,320C829.1,320,807,320,785,320C763.6,320,742,320,720,320C698.2,320,676,320,655,320C632.7,320,611,320,589,320C567.3,320,545,320,524,320C501.8,320,480,320,458,320C436.4,320,415,320,393,320C370.9,320,349,320,327,320C305.5,320,284,320,262,320C240,320,218,320,196,320C174.5,320,153,320,131,320C109.1,320,87,320,65,320C43.6,320,22,320,11,320L0,320Z",
    "M0,256L10.9,240C21.8,224,44,192,65,165.3C87.3,139,109,117,131,138.7C152.7,160,175,224,196,229.3C218.2,235,240,181,262,144C283.6,107,305,85,327,80C349.1,75,371,85,393,101.3C414.5,117,436,139,458,144C480,149,502,139,524,154.7C545.5,171,567,213,589,240C610.9,267,633,277,655,277.3C676.4,277,698,267,720,256C741.8,245,764,235,785,218.7C807.3,203,829,181,851,192C872.7,203,895,245,916,245.3C938.2,245,960,203,982,165.3C1003.6,128,1025,96,1047,74.7C1069.1,53,1091,43,1113,48C1134.5,53,1156,75,1178,112C1200,149,1222,203,1244,234.7C1265.5,267,1287,277,1309,250.7C1330.9,224,1353,160,1375,149.3C1396.4,139,1418,181,1429,202.7L1440,224L1440,320L1429.1,320C1418.2,320,1396,320,1375,320C1352.7,320,1331,320,1309,320C1287.3,320,1265,320,1244,320C1221.8,320,1200,320,1178,320C1156.4,320,1135,320,1113,320C1090.9,320,1069,320,1047,320C1025.5,320,1004,320,982,320C960,320,938,320,916,320C894.5,320,873,320,851,320C829.1,320,807,320,785,320C763.6,320,742,320,720,320C698.2,320,676,320,655,320C632.7,320,611,320,589,320C567.3,320,545,320,524,320C501.8,320,480,320,458,320C436.4,320,415,320,393,320C370.9,320,349,320,327,320C305.5,320,284,320,262,320C240,320,218,320,196,320C174.5,320,153,320,131,320C109.1,320,87,320,65,320C43.6,320,22,320,11,320L0,320Z",
    "M0,224L10.9,224C21.8,224,44,224,65,192C87.3,160,109,96,131,64C152.7,32,175,32,196,64C218.2,96,240,160,262,170.7C283.6,181,305,139,327,138.7C349.1,139,371,181,393,176C414.5,171,436,117,458,128C480,139,502,213,524,213.3C545.5,213,567,139,589,122.7C610.9,107,633,149,655,149.3C676.4,149,698,107,720,101.3C741.8,96,764,128,785,128C807.3,128,829,96,851,101.3C872.7,107,895,149,916,149.3C938.2,149,960,107,982,106.7C1003.6,107,1025,149,1047,149.3C1069.1,149,1091,107,1113,101.3C1134.5,96,1156,128,1178,133.3C1200,139,1222,117,1244,101.3C1265.5,85,1287,75,1309,112C1330.9,149,1353,235,1375,224C1396.4,213,1418,107,1429,53.3L1440,0L1440,320L1429.1,320C1418.2,320,1396,320,1375,320C1352.7,320,1331,320,1309,320C1287.3,320,1265,320,1244,320C1221.8,320,1200,320,1178,320C1156.4,320,1135,320,1113,320C1090.9,320,1069,320,1047,320C1025.5,320,1004,320,982,320C960,320,938,320,916,320C894.5,320,873,320,851,320C829.1,320,807,320,785,320C763.6,320,742,320,720,320C698.2,320,676,320,655,320C632.7,320,611,320,589,320C567.3,320,545,320,524,320C501.8,320,480,320,458,320C436.4,320,415,320,393,320C370.9,320,349,320,327,320C305.5,320,284,320,262,320C240,320,218,320,196,320C174.5,320,153,320,131,320C109.1,320,87,320,65,320C43.6,320,22,320,11,320L0,320Z",
    "M0,64L10.9,74.7C21.8,85,44,107,65,106.7C87.3,107,109,85,131,80C152.7,75,175,85,196,122.7C218.2,160,240,224,262,256C283.6,288,305,288,327,282.7C349.1,277,371,267,393,234.7C414.5,203,436,149,458,144C480,139,502,181,524,208C545.5,235,567,245,589,256C610.9,267,633,277,655,282.7C676.4,288,698,288,720,266.7C741.8,245,764,203,785,202.7C807.3,203,829,245,851,234.7C872.7,224,895,160,916,165.3C938.2,171,960,245,982,240C1003.6,235,1025,149,1047,128C1069.1,107,1091,149,1113,160C1134.5,171,1156,149,1178,160C1200,171,1222,213,1244,213.3C1265.5,213,1287,171,1309,176C1330.9,181,1353,235,1375,234.7C1396.4,235,1418,181,1429,154.7L1440,128L1440,320L1429.1,320C1418.2,320,1396,320,1375,320C1352.7,320,1331,320,1309,320C1287.3,320,1265,320,1244,320C1221.8,320,1200,320,1178,320C1156.4,320,1135,320,1113,320C1090.9,320,1069,320,1047,320C1025.5,320,1004,320,982,320C960,320,938,320,916,320C894.5,320,873,320,851,320C829.1,320,807,320,785,320C763.6,320,742,320,720,320C698.2,320,676,320,655,320C632.7,320,611,320,589,320C567.3,320,545,320,524,320C501.8,320,480,320,458,320C436.4,320,415,320,393,320C370.9,320,349,320,327,320C305.5,320,284,320,262,320C240,320,218,320,196,320C174.5,320,153,320,131,320C109.1,320,87,320,65,320C43.6,320,22,320,11,320L0,320Z",
    "M0,160L10.9,144C21.8,128,44,96,65,90.7C87.3,85,109,107,131,101.3C152.7,96,175,64,196,69.3C218.2,75,240,117,262,117.3C283.6,117,305,75,327,48C349.1,21,371,11,393,26.7C414.5,43,436,85,458,101.3C480,117,502,107,524,90.7C545.5,75,567,53,589,58.7C610.9,64,633,96,655,122.7C676.4,149,698,171,720,165.3C741.8,160,764,128,785,128C807.3,128,829,160,851,144C872.7,128,895,64,916,74.7C938.2,85,960,171,982,186.7C1003.6,203,1025,149,1047,154.7C1069.1,160,1091,224,1113,218.7C1134.5,213,1156,139,1178,117.3C1200,96,1222,128,1244,122.7C1265.5,117,1287,75,1309,96C1330.9,117,1353,203,1375,202.7C1396.4,203,1418,117,1429,74.7L1440,32L1440,320L1429.1,320C1418.2,320,1396,320,1375,320C1352.7,320,1331,320,1309,320C1287.3,320,1265,320,1244,320C1221.8,320,1200,320,1178,320C1156.4,320,1135,320,1113,320C1090.9,320,1069,320,1047,320C1025.5,320,1004,320,982,320C960,320,938,320,916,320C894.5,320,873,320,851,320C829.1,320,807,320,785,320C763.6,320,742,320,720,320C698.2,320,676,320,655,320C632.7,320,611,320,589,320C567.3,320,545,320,524,320C501.8,320,480,320,458,320C436.4,320,415,320,393,320C370.9,320,349,320,327,320C305.5,320,284,320,262,320C240,320,218,320,196,320C174.5,320,153,320,131,320C109.1,320,87,320,65,320C43.6,320,22,320,11,320L0,320Z",
    "M0,0L10.9,32C21.8,64,44,128,65,138.7C87.3,149,109,107,131,122.7C152.7,139,175,213,196,218.7C218.2,224,240,160,262,122.7C283.6,85,305,75,327,85.3C349.1,96,371,128,393,128C414.5,128,436,96,458,80C480,64,502,64,524,80C545.5,96,567,128,589,149.3C610.9,171,633,181,655,176C676.4,171,698,149,720,133.3C741.8,117,764,107,785,112C807.3,117,829,139,851,149.3C872.7,160,895,160,916,154.7C938.2,149,960,139,982,133.3C1003.6,128,1025,128,1047,128C1069.1,128,1091,128,1113,106.7C1134.5,85,1156,43,1178,53.3C1200,64,1222,128,1244,165.3C1265.5,203,1287,213,1309,192C1330.9,171,1353,117,1375,80C1396.4,43,1418,21,1429,10.7L1440,0L1440,320L1429.1,320C1418.2,320,1396,320,1375,320C1352.7,320,1331,320,1309,320C1287.3,320,1265,320,1244,320C1221.8,320,1200,320,1178,320C1156.4,320,1135,320,1113,320C1090.9,320,1069,320,1047,320C1025.5,320,1004,320,982,320C960,320,938,320,916,320C894.5,320,873,320,851,320C829.1,320,807,320,785,320C763.6,320,742,320,720,320C698.2,320,676,320,655,320C632.7,320,611,320,589,320C567.3,320,545,320,524,320C501.8,320,480,320,458,320C436.4,320,415,320,393,320C370.9,320,349,320,327,320C305.5,320,284,320,262,320C240,320,218,320,196,320C174.5,320,153,320,131,320C109.1,320,87,320,65,320C43.6,320,22,320,11,320L0,320Z",
    "M0,160L10.9,176C21.8,192,44,224,65,197.3C87.3,171,109,85,131,58.7C152.7,32,175,64,196,69.3C218.2,75,240,53,262,74.7C283.6,96,305,160,327,186.7C349.1,213,371,203,393,192C414.5,181,436,171,458,165.3C480,160,502,160,524,176C545.5,192,567,224,589,224C610.9,224,633,192,655,154.7C676.4,117,698,75,720,90.7C741.8,107,764,181,785,208C807.3,235,829,213,851,176C872.7,139,895,85,916,74.7C938.2,64,960,96,982,138.7C1003.6,181,1025,235,1047,234.7C1069.1,235,1091,181,1113,144C1134.5,107,1156,85,1178,69.3C1200,53,1222,43,1244,42.7C1265.5,43,1287,53,1309,101.3C1330.9,149,1353,235,1375,245.3C1396.4,256,1418,192,1429,160L1440,128L1440,320L1429.1,320C1418.2,320,1396,320,1375,320C1352.7,320,1331,320,1309,320C1287.3,320,1265,320,1244,320C1221.8,320,1200,320,1178,320C1156.4,320,1135,320,1113,320C1090.9,320,1069,320,1047,320C1025.5,320,1004,320,982,320C960,320,938,320,916,320C894.5,320,873,320,851,320C829.1,320,807,320,785,320C763.6,320,742,320,720,320C698.2,320,676,320,655,320C632.7,320,611,320,589,320C567.3,320,545,320,524,320C501.8,320,480,320,458,320C436.4,320,415,320,393,320C370.9,320,349,320,327,320C305.5,320,284,320,262,320C240,320,218,320,196,320C174.5,320,153,320,131,320C109.1,320,87,320,65,320C43.6,320,22,320,11,320L0,320Z",
    "M0,96L10.9,106.7C21.8,117,44,139,65,154.7C87.3,171,109,181,131,154.7C152.7,128,175,64,196,74.7C218.2,85,240,171,262,186.7C283.6,203,305,149,327,160C349.1,171,371,245,393,256C414.5,267,436,213,458,165.3C480,117,502,75,524,80C545.5,85,567,139,589,154.7C610.9,171,633,149,655,128C676.4,107,698,85,720,80C741.8,75,764,85,785,112C807.3,139,829,181,851,218.7C872.7,256,895,288,916,272C938.2,256,960,192,982,138.7C1003.6,85,1025,43,1047,64C1069.1,85,1091,171,1113,202.7C1134.5,235,1156,213,1178,186.7C1200,160,1222,128,1244,133.3C1265.5,139,1287,181,1309,165.3C1330.9,149,1353,75,1375,58.7C1396.4,43,1418,85,1429,106.7L1440,128L1440,320L1429.1,320C1418.2,320,1396,320,1375,320C1352.7,320,1331,320,1309,320C1287.3,320,1265,320,1244,320C1221.8,320,1200,320,1178,320C1156.4,320,1135,320,1113,320C1090.9,320,1069,320,1047,320C1025.5,320,1004,320,982,320C960,320,938,320,916,320C894.5,320,873,320,851,320C829.1,320,807,320,785,320C763.6,320,742,320,720,320C698.2,320,676,320,655,320C632.7,320,611,320,589,320C567.3,320,545,320,524,320C501.8,320,480,320,458,320C436.4,320,415,320,393,320C370.9,320,349,320,327,320C305.5,320,284,320,262,320C240,320,218,320,196,320C174.5,320,153,320,131,320C109.1,320,87,320,65,320C43.6,320,22,320,11,320L0,320Z",
    "M0,64L10.9,96C21.8,128,44,192,65,202.7C87.3,213,109,171,131,181.3C152.7,192,175,256,196,250.7C218.2,245,240,171,262,160C283.6,149,305,203,327,224C349.1,245,371,235,393,240C414.5,245,436,267,458,245.3C480,224,502,160,524,133.3C545.5,107,567,117,589,154.7C610.9,192,633,256,655,256C676.4,256,698,192,720,160C741.8,128,764,128,785,138.7C807.3,149,829,171,851,176C872.7,181,895,171,916,176C938.2,181,960,203,982,202.7C1003.6,203,1025,181,1047,165.3C1069.1,149,1091,139,1113,138.7C1134.5,139,1156,149,1178,138.7C1200,128,1222,96,1244,90.7C1265.5,85,1287,107,1309,133.3C1330.9,160,1353,192,1375,218.7C1396.4,245,1418,267,1429,277.3L1440,288L1440,320L1429.1,320C1418.2,320,1396,320,1375,320C1352.7,320,1331,320,1309,320C1287.3,320,1265,320,1244,320C1221.8,320,1200,320,1178,320C1156.4,320,1135,320,1113,320C1090.9,320,1069,320,1047,320C1025.5,320,1004,320,982,320C960,320,938,320,916,320C894.5,320,873,320,851,320C829.1,320,807,320,785,320C763.6,320,742,320,720,320C698.2,320,676,320,655,320C632.7,320,611,320,589,320C567.3,320,545,320,524,320C501.8,320,480,320,458,320C436.4,320,415,320,393,320C370.9,320,349,320,327,320C305.5,320,284,320,262,320C240,320,218,320,196,320C174.5,320,153,320,131,320C109.1,320,87,320,65,320C43.6,320,22,320,11,320L0,320Z",
    "M0,160L10.9,170.7C21.8,181,44,203,65,218.7C87.3,235,109,245,131,224C152.7,203,175,149,196,144C218.2,139,240,181,262,181.3C283.6,181,305,139,327,133.3C349.1,128,371,160,393,160C414.5,160,436,128,458,112C480,96,502,96,524,101.3C545.5,107,567,117,589,154.7C610.9,192,633,256,655,240C676.4,224,698,128,720,112C741.8,96,764,160,785,186.7C807.3,213,829,203,851,165.3C872.7,128,895,64,916,64C938.2,64,960,128,982,149.3C1003.6,171,1025,149,1047,165.3C1069.1,181,1091,235,1113,240C1134.5,245,1156,203,1178,165.3C1200,128,1222,96,1244,112C1265.5,128,1287,192,1309,213.3C1330.9,235,1353,213,1375,192C1396.4,171,1418,149,1429,138.7L1440,128L1440,320L1429.1,320C1418.2,320,1396,320,1375,320C1352.7,320,1331,320,1309,320C1287.3,320,1265,320,1244,320C1221.8,320,1200,320,1178,320C1156.4,320,1135,320,1113,320C1090.9,320,1069,320,1047,320C1025.5,320,1004,320,982,320C960,320,938,320,916,320C894.5,320,873,320,851,320C829.1,320,807,320,785,320C763.6,320,742,320,720,320C698.2,320,676,320,655,320C632.7,320,611,320,589,320C567.3,320,545,320,524,320C501.8,320,480,320,458,320C436.4,320,415,320,393,320C370.9,320,349,320,327,320C305.5,320,284,320,262,320C240,320,218,320,196,320C174.5,320,153,320,131,320C109.1,320,87,320,65,320C43.6,320,22,320,11,320L0,320Z",
    "M0,256L10.9,224C21.8,192,44,128,65,133.3C87.3,139,109,213,131,250.7C152.7,288,175,288,196,240C218.2,192,240,96,262,90.7C283.6,85,305,171,327,202.7C349.1,235,371,213,393,218.7C414.5,224,436,256,458,250.7C480,245,502,203,524,170.7C545.5,139,567,117,589,106.7C610.9,96,633,96,655,106.7C676.4,117,698,139,720,149.3C741.8,160,764,160,785,154.7C807.3,149,829,139,851,144C872.7,149,895,171,916,170.7C938.2,171,960,149,982,122.7C1003.6,96,1025,64,1047,64C1069.1,64,1091,96,1113,128C1134.5,160,1156,192,1178,218.7C1200,245,1222,267,1244,240C1265.5,213,1287,139,1309,133.3C1330.9,128,1353,192,1375,234.7C1396.4,277,1418,299,1429,309.3L1440,320L1440,320L1429.1,320C1418.2,320,1396,320,1375,320C1352.7,320,1331,320,1309,320C1287.3,320,1265,320,1244,320C1221.8,320,1200,320,1178,320C1156.4,320,1135,320,1113,320C1090.9,320,1069,320,1047,320C1025.5,320,1004,320,982,320C960,320,938,320,916,320C894.5,320,873,320,851,320C829.1,320,807,320,785,320C763.6,320,742,320,720,320C698.2,320,676,320,655,320C632.7,320,611,320,589,320C567.3,320,545,320,524,320C501.8,320,480,320,458,320C436.4,320,415,320,393,320C370.9,320,349,320,327,320C305.5,320,284,320,262,320C240,320,218,320,196,320C174.5,320,153,320,131,320C109.1,320,87,320,65,320C43.6,320,22,320,11,320L0,320Z",
    "M0,192L10.9,208C21.8,224,44,256,65,234.7C87.3,213,109,139,131,112C152.7,85,175,107,196,144C218.2,181,240,235,262,234.7C283.6,235,305,181,327,149.3C349.1,117,371,107,393,128C414.5,149,436,203,458,218.7C480,235,502,213,524,218.7C545.5,224,567,256,589,261.3C610.9,267,633,245,655,208C676.4,171,698,117,720,106.7C741.8,96,764,128,785,165.3C807.3,203,829,245,851,229.3C872.7,213,895,139,916,133.3C938.2,128,960,192,982,224C1003.6,256,1025,256,1047,245.3C1069.1,235,1091,213,1113,208C1134.5,203,1156,213,1178,197.3C1200,181,1222,139,1244,101.3C1265.5,64,1287,32,1309,53.3C1330.9,75,1353,149,1375,186.7C1396.4,224,1418,224,1429,224L1440,224L1440,320L1429.1,320C1418.2,320,1396,320,1375,320C1352.7,320,1331,320,1309,320C1287.3,320,1265,320,1244,320C1221.8,320,1200,320,1178,320C1156.4,320,1135,320,1113,320C1090.9,320,1069,320,1047,320C1025.5,320,1004,320,982,320C960,320,938,320,916,320C894.5,320,873,320,851,320C829.1,320,807,320,785,320C763.6,320,742,320,720,320C698.2,320,676,320,655,320C632.7,320,611,320,589,320C567.3,320,545,320,524,320C501.8,320,480,320,458,320C436.4,320,415,320,393,320C370.9,320,349,320,327,320C305.5,320,284,320,262,320C240,320,218,320,196,320C174.5,320,153,320,131,320C109.1,320,87,320,65,320C43.6,320,22,320,11,320L0,320Z",
    "M0,128L10.9,149.3C21.8,171,44,213,65,213.3C87.3,213,109,171,131,144C152.7,117,175,107,196,101.3C218.2,96,240,96,262,128C283.6,160,305,224,327,213.3C349.1,203,371,117,393,96C414.5,75,436,117,458,128C480,139,502,117,524,128C545.5,139,567,181,589,186.7C610.9,192,633,160,655,149.3C676.4,139,698,149,720,154.7C741.8,160,764,160,785,165.3C807.3,171,829,181,851,160C872.7,139,895,85,916,69.3C938.2,53,960,75,982,112C1003.6,149,1025,203,1047,213.3C1069.1,224,1091,192,1113,202.7C1134.5,213,1156,267,1178,250.7C1200,235,1222,149,1244,149.3C1265.5,149,1287,235,1309,256C1330.9,277,1353,235,1375,229.3C1396.4,224,1418,256,1429,272L1440,288L1440,320L1429.1,320C1418.2,320,1396,320,1375,320C1352.7,320,1331,320,1309,320C1287.3,320,1265,320,1244,320C1221.8,320,1200,320,1178,320C1156.4,320,1135,320,1113,320C1090.9,320,1069,320,1047,320C1025.5,320,1004,320,982,320C960,320,938,320,916,320C894.5,320,873,320,851,320C829.1,320,807,320,785,320C763.6,320,742,320,720,320C698.2,320,676,320,655,320C632.7,320,611,320,589,320C567.3,320,545,320,524,320C501.8,320,480,320,458,320C436.4,320,415,320,393,320C370.9,320,349,320,327,320C305.5,320,284,320,262,320C240,320,218,320,196,320C174.5,320,153,320,131,320C109.1,320,87,320,65,320C43.6,320,22,320,11,320L0,320Z"
  ]

  function getRandomPath() {
    const randomPath = paths[Math.floor(Math.random() * paths.length)];
    const randomPathTwo = paths[Math.floor(Math.random() * paths.length)];
    const randomPathThree = paths[Math.floor(Math.random() * paths.length)];
    setSvg(
      <svg className="vectorBottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path className="animate" fill="#163f77" fill-opacity=".3" d={randomPathThree}></path>
        <path className="animate" fill="#2463b7" fill-opacity=".6" d={randomPathTwo}></path>
        <path className="animate" fill="#2f80ed" fill-opacity="1" d={randomPath}></path>
      </svg>
    )
    /*
    console.log('test')
    const randomPath = paths[Math.floor(Math.random() * paths.length)];
    setPath(randomPath)
    */
  }

  return (
    <div>
      {svg}
    </div>
  );
}

export default Waves;
