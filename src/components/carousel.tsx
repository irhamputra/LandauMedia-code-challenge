import React from "react";
import { Carousel } from "react-responsive-carousel";

interface ICarousel {
  postsURL: string[] | any;
}

const CarouselImage: React.FC<{ postsURL: any }> = ({
  postsURL
}: ICarousel) => {
  return (
    <Carousel
      showThumbs={false}
      showIndicators={postsURL.postsURL.length > 1}
      showArrows={false}
      showStatus={false}
    >
      {postsURL.postsURL.map((photo: string, i: number) => {
        return <img src={photo} key={i} alt={i.toString()} />;
      })}
    </Carousel>
  );
};

export default CarouselImage;
