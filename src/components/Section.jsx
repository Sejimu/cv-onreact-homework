import React from "react";

function Section() {
  return (
    <div className="wrapper container">
      <div className="wraper-left">
        <h1 className="text-light">Front-End Developer</h1>
        <p className="text-light">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          pretium libero non risus condimentum scelerisque. Quisque sit amet
          turpis ligula. Nullam vulputate velit quis lacus dignissim, a mattis
          nulla convallis. Mauris non ex nec nulla fermentum feugiat. Proin eget
          facilisis tellus.
        </p>
      </div>
      <div className="wrapper-right">
        <img
          src={
            "https://avatars.mds.yandex.net/i?id=e9b9a8ee440ff67f6644b769f80447bdf1dffbab-8979882-images-thumbs&n=13"
          }
        />
      </div>
    </div>
  );
}

export default Section;
