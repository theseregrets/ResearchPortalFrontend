import React from 'react';
import Profile from './profile.png';

export default function Team() {
  return (
    <div>
      <div className="container">
        <h1 className="display-4 text-center ">The Team</h1>
        <div className="row">
          <div className="col-3">
            <div className="card" style={{ width: '15rem' }}>
              <img src={Profile} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text text-center ">Lorem, ipsum dolor.</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card" style={{ width: '15rem' }}>
              <img src={Profile} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text text-center ">Lorem, ipsum dolor.</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card" style={{ width: '15rem' }}>
              <img src={Profile} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text text-center ">Lorem, ipsum dolor.</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card" style={{ width: '15rem' }}>
              <img src={Profile} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text text-center ">Lorem, ipsum dolor.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
