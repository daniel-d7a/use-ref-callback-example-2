import { useRef, useEffect } from "react";

import "./styles.css";

export default function App() {
  const imagesRef = useRef(new Map());

  return (
    <div className="App">
      <div className="image-carousel">
        {images.map((image, index) => (
          <img
            key={image}
            ref={(node) => {
              if (node) {
                imagesRef.current.set(index, node);
              } else {
                imagesRef.current.delete(index);
              }
            }}
            src={`${BaseUrl}${image}`}
            alt="super car"
          />
        ))}
      </div>

      <div className="container-row">
        {images.map((image, index) => (
          <button
            onClick={() => {
              imagesRef.current.get(index).scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center"
              });
            }}
          >
            scroll to index {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

const BaseUrl = "https://source.unsplash.com/";

const images = [
  "N4SGUrLEHxU",
  "WJiSMLedW3o",
  "d3Nuz-3LtA8",
  "_DzW3MT-iIY",
  "SU6MbWxLozY",
  "yxyIwykexwg",
  "140cHe0oS58",
  "TdONq3n-PUA"
];
