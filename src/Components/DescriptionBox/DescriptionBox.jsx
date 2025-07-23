import React from "react";
import "./DescriptionBox.css";

function DescriptionBox() {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Welcome to our online store – your one-stop destination for stylish
          and affordable clothing for women, men, kids, and little girls. We
          offer a wide variety of trendy outfits to suit every age and style,
          ensuring comfort, quality, and fashion all in one place. Whether
          you're shopping for yourself or your family, our collection is
          designed to make everyone look and feel their best. Shop with ease,
          enjoy fast delivery, and experience a smooth and secure online
          shopping experience.
        </p>
        <p>Stylish aur affordable kapray for women, men, kids aur bachiyan sab kuch ek hi jagah!</p>
      </div>
    </div>
  );
}

export default DescriptionBox;
