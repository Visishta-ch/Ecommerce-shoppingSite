import React from 'react'

const Tours = () => {
  return (
    <section id="tours">
    <div className="tour-list">
      <h2 style={{ fontFamily: 'cursive' }}>TOURS</h2>
      <div className="tour-item">
        <span className="tour-date">JUNE 16</span>
        <span className="tour-place">DETROIT, MI</span>
        <span className="tour-place-1">DTE ENERGY MUSIC THEATRE</span>
        <button className="tour-btn">BUY TICKETS</button>
      </div>
      <div className="tour-item">
        <span className="tour-date">JUNE 19</span>
        <span className="tour-place">TORONTO,ON</span>
        <span className="tour-place-1">BUDWEISER STAGE</span>
        <button className="tour-btn">BUY TICKETS</button>
      </div>
      <div className="tour-item">
        <span className="tour-date">JUNE 22</span>
        <span className="tour-place">BRISTOW</span>
        <span className="tour-place-1">JIGGY LUBE LIVE</span>
        <button className="tour-btn">BUY TICKETS</button>
      </div>
      <div className="tour-item">
        <span className="tour-date">JUNE 29</span>
        <span className="tour-place">PHOENIX,AZ</span>
        <span className="tour-place-1">AK-CHIN PAVILON</span>
        <button className="tour-btn">BUY TICKETS</button>
      </div>
      <div className="tour-item">
        <span className="tour-date">JULY 2</span>
        <span className="tour-place">LAS VEGAS, NV</span>
        <span className="tour-place-1">T-MOBILE ARENA</span>
        <button className="tour-btn">BUY TICKETS</button>
      </div>
      <div className="tour-item">
        <span className="tour-date">JULY 10</span>
        <span className="tour-place">CONCORD, CA</span>
        <span className="tour-place-1">CONCORD PAVILION</span>
        <button className="tour-btn">BUY TICKETS</button>
      </div>
    </div>
  </section>
  )
}

export default Tours