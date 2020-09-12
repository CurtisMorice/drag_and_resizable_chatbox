import React from 'react';
import { Rnd } from 'react-rnd';
import Logo from './logo-shield.png'


const ChatBox = () => (
  <div className="outer-container">
    <div className="inner-wrapper">
      <div className="content">
        <div className="response-box-left">
          <img src={Logo} draggable="false" alt="capella-logo"/>
          <p className="p-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean efficitur sit amet massa fringilla egestas.
            Nullam condimentum luctus turpis.
          </p>
        </div>
        <div className="response-box-right">
          <p className="p-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean efficitur sit amet massa fringilla egestas.
            Nullam condimentum luctus turpis.
          </p>
          <img src={Logo} draggable="false" alt="capella-logo"/>
        </div>
      </div>
    <footer>
      <div className="inner-footer">
        <input type="text" placeholder="Type your question here"/>
        <button onClick="someFunction();">Submit</button>
      </div>
    </footer>
    </div>
  </div>
);


export default () => (
  <div
    style={{
      width: '600px',
      height: '350px',
    }}
  >
    <Rnd
      default={{
        x: 150,
        y: 205,
        width: 320,
        height: 500,
      }}
      minWidth={320}
      minHeight={400}
      bounds="window"
    >
      <ChatBox />
    </Rnd>
  </div>
);