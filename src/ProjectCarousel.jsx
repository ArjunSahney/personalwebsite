import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProjectCarousel = () => {
  return (
    <Carousel>
      <div>
        <a href="https://github.com/ArjunSahney/Hidden-Markov-Model">
          <img src="MarkovModel.svg.png" alt="Hidden Markov Model" />
          <p className="legend">Hidden Markov Model</p>
        </a>
      </div>
      <div>
        <a href="https://github.com/ArjunSahney/XOR_Gate_ANN">
          <img src="Neural net.jpg" alt="XOR ANN" />
          <p className="legend">XOR ANN</p>
        </a>
      </div>
      <div>
        <a href="https://github.com/CS50Spring2023/tse-ArjunSahney">
          <img src="Search engine.jpg" alt="Tiny Search Engine" />
          <p className="legend">Tiny Search Engine</p>
        </a>
      </div>
    </Carousel>
  );
};

export default ProjectCarousel;
