import React from 'react';
import cat4 from '../images/cat4.jpg';
import cat from '../images/cat.jpg';
import cat3 from '../images/cat3.jpg';

function Home() {
    return (
        <div>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={cat4} className="d-block w-100" alt="..."></img>.
                        <div className="carousel-caption">
                            <h3 style={{ color: 'rgb(135, 30, 156)', textShadow: '2px 2px 4px rgba(2, 2, 2, 0.5)' }}>Akira Kitten</h3>
                            <p style={{ color: 'black' }}>  </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={cat} className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption">
                            <h3 style={{ color: 'rgb(135, 30, 156)', textShadow: '2px 2px 4px rgba(2, 2, 2, 0.5)' }}>Akira Kitten</h3>
                            <p style={{ color: 'black' }}> </p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src={cat3} className="d-block w-100" alt="..."></img>
                        <div className="carousel-caption">
                            <h3 style={{ color: 'rgb(135, 30, 156)', textShadow: '2px 2px 4px rgba(2, 2, 2, 0.5)' }}>Akira Kitten</h3>
                            <p style={{ color: 'black' }}> </p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    );
}

export default Home;