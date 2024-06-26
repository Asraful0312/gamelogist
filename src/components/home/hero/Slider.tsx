import { useEffect, useState } from "react";

const images = [
  {
    src: "images/1.jpeg",
    title: "GOD OF WAR",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
  },
  {
    src: "images/2.jpg",
    title: "CYBER PUNK",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
  },
  {
    src: "images/3.jpeg",
    title: "VALORANT",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
  },
  {
    src: "images/4.jpg",
    title: "ASSASSIN'S CREED",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
  },
  {
    src: "images/5.jpg",
    title: "CALL OF DUTY",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
  },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div className="slider pt-10">
      <h1 className="text-2xl absolute top-[12%] z-30 md:text-3xl leading-9 mt-10 text-white text-center font-bold w-10/12 max-w-lg left-[8%]">
        BROWSE THOUSANDS OF <span className="text-blue-200">GAMES</span>
      </h1>
      {/* <!-- list Items --> */}
      <div className="list">
        {images.map((image, index) => (
          <div
            className={`item ${index === activeIndex ? "active" : ""}`}
            key={index}
          >
            <img src={image.src} alt={`Slide ${index + 1}`} />
            <div className="content">
              <p>DISCOVER</p>
              <h2>{image.title}</h2>
              <p>{image.content}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <!-- button arrows --> */}
      <div className="arrows">
        <button id="prev" onClick={handlePrev}>
          &lt;
        </button>
        <button id="next" onClick={handleNext}>
          &gt;
        </button>
      </div>
      {/* <!-- thumbnail --> */}
      <div className="thumbnail">
        {images.map((image, index) => (
          <div
            onClick={() => handleThumbnailClick(index)}
            onMouseOver={() => handleThumbnailClick(index)}
            className={`item ${index === activeIndex ? "active" : ""}`}
            key={index}
          >
            <div className="item">
              <img src={image.src} />
              <div className="content">{image.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
