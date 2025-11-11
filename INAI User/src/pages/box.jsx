import React from 'react';
import './box.css';
import { useNavigate } from 'react-router-dom';

const Box = () => {
  const navigate = useNavigate();

  return (
    <div className="box-page">
      <div className="box-card">
        <h2 className="box-title">One Button — Smooth Open</h2>
        <p className="box-desc">
          Click the button below to open a panel with a smooth animation. Customize
          text/colors in the HTML/CSS.
        </p>
        <button
          className="box-button"
          style={{ display: 'block', margin: '12px auto 0' }}
          onClick={() => navigate(-1)}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Box;
