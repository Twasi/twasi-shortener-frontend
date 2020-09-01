import React, { Component } from 'react';

import URLShortenForm from './URLShortenForm';

import './style.css';

class Shortener extends Component {
  render() {
    return (
      <div className="content">
        <div className="contentWrapper">
          <div className="centeredContentBox">
            <URLShortenForm/>
          </div>
        </div>
      </div>
    );
  }
}

export default Shortener;
