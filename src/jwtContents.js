import jwt_decode from "jwt-decode";

const token = localStorage.getItem('JWT');

function isLoggedIn() {
  if(token) {
    return true;
  } else {
    return false;
  }
}

function getToken() {
  if(token) {
    return token;
  } else {
    return false;
  }
}

function getJwtContents() {
  if(token) {
    return jwt_decode(token);
  } else {
    return false;
  }
}

export default (isLoggedIn, getToken, getJwtContents)
