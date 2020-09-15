import jwt_decode from "jwt-decode";

const token = localStorage.getItem('JWT');

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

function isLoggedIn() {
  if(token) {
    return true;
  } else {
    return false;
  }
}

function getJwtContents() {
  if(token) {
    return jwt_decode(token);
  } else {
    return null;
  }
}

export default (isLoggedIn, getJwtContents)
