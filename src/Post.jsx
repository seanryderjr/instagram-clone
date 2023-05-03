import React, { useState } from "react";
import "./Post.css";

function Post() {
  const [selectedImage, setSelectedImage] = useState(
    "https://picsum.photos/200/300?random=1"
  );

  function handleImageClick(event) {
    setSelectedImage(event.target.src);
  }

  return (
    <div className="post">
      <div className="selected">
        <img src={selectedImage} alt="Selected Image" />
      </div>
      
      <div className="gal-grid">
      <div className="post-bar">
        <h4>Gallery v</h4>
      </div>
        <div className="gal-grid-item">
          <img
            src="https://picsum.photos/200/300?random=1"
            alt="random"
            onClick={handleImageClick}
          />
          <img
            src="https://picsum.photos/200/300?random=2"
            alt="random"
            onClick={handleImageClick}
          />
          <img
            src="https://picsum.photos/200/300?random=3"
            alt="random"
            onClick={handleImageClick}
          />
          <img
            src="https://picsum.photos/200/300?random=4"
            alt="random"
            onClick={handleImageClick}
          />
          <img
            src="https://picsum.photos/200/300?random=5"
            alt="random"
            onClick={handleImageClick}
          />
          <img
            src="https://picsum.photos/200/300?random=6"
            alt="random"
            onClick={handleImageClick}
          />
          <img
            src="https://picsum.photos/200/300?random=7"
            alt="random"
            onClick={handleImageClick}
          />
          <img
            src="https://picsum.photos/200/300?random=8"
            alt="random"
            onClick={handleImageClick}
          />
          <img
            src="https://picsum.photos/200/300?random=9"
            alt="random"
            onClick={handleImageClick}
          />
          <img
            src="https://picsum.photos/200/300?random=10"
            alt="random"
            onClick={handleImageClick}
          />
          <img
            src="https://picsum.photos/200/300?random=11"
            alt="random"
            onClick={handleImageClick}
          />
          <img
            src="https://picsum.photos/200/300?random=12"
            alt="random"
            onClick={handleImageClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Post;
