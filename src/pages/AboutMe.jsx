import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

function AboutMe() {
  return (
    <div className="container">
      <h2 className="text-light">Schools</h2>
      <div className="d-flex justify-content-around mt-5">
        <p className="text-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium
          libero non risus condimentum scelerisque. Quisque sit amet turpis
          ligula. Nullam vulputate velit quis lacus dignissim, a mattis nulla
          convallis.{" "}
        </p>{" "}
        <Col xs={6} md={4}>
          <Image
            src={
              "https://avatars.mds.yandex.net/i?id=f6dca0b183723d0eb9a0efd537f56f96-5231908-images-thumbs&n=13/181x190"
            }
            roundedCircle
          />
        </Col>
      </div>
      <h2 className="text-light">Univercites</h2>
      <div className="d-flex justify-content-around mt-5">
        <Col xs={6} md={4}>
          <Image
            src={
              "https://avatars.mds.yandex.net/i?id=99d44fd2bdc4799cb508601ec787579840aae2ee-9066083-images-thumbs&n=13/181x190"
            }
            roundedCircle
          />
        </Col>
        <p className="text-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium
          libero non risus condimentum scelerisque. Quisque sit amet turpis
          ligula. Nullam vulputate velit quis lacus dignissim, a mattis nulla
          convallis.{" "}
        </p>
      </div>
      <h2 className="text-light">My Jobs</h2>
      <div className="d-flex justify-content-around mt-5">
        <p className="text-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium
          libero non risus condimentum scelerisque. Quisque sit amet turpis
          ligula. Nullam vulputate velit quis lacus dignissim, a mattis nulla
          convallis.{" "}
        </p>{" "}
        <Col xs={6} md={4}>
          <Image
            src={
              "https://avatars.mds.yandex.net/i?id=bdec6f9426025db9adb1469087ccc3e4cb2df41b-9185952-images-thumbs&n=13/181x190"
            }
            roundedCircle
          />
        </Col>
      </div>
    </div>
  );
}

export default AboutMe;
