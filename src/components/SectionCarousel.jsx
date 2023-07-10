import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function SectionCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="mt-5">
      <h2 className="text-light"> Information</h2>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={
            "https://avatars.mds.yandex.net/i?id=6b6fcfe41a82edd8bdb4b08a1514b36a2c3eb0db-9183040-images-thumbs&n=13"
          }
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={
            "https://avatars.mds.yandex.net/i?id=832b7472f0abeb3e976a5e2c64f2c26e75fbd3b3-9106673-images-thumbs&n=13"
          }
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="text-dark">Second slide label</h3>
          <p className="text-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={
            "https://avatars.mds.yandex.net/i?id=71623f1f2e6dfb56b5296f558e0a42373c07e1e1-9213930-images-thumbs&n=13"
          }
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="text-primary">Third slide label</h3>
          <p className="text-light">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SectionCarousel;
