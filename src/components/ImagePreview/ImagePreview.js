import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import { Col, Modal, Row } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./index.css";

const ImagePreview = (props) => {
  const { startIndex, setPreviewImageIdx, galleryData } = props;
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleScreenChange = (isFullScreen) => {
    setIsFullscreen(isFullScreen);
  };

  const handleLeft = () => {
    if (startIndex - 1 < 0) {
      setPreviewImageIdx(galleryData.length - 1);
    } else {
      setPreviewImageIdx(startIndex - 1);
    }
  };
  const handleRight = () => {
    if (startIndex + 1 > galleryData.length - 1) {
      setPreviewImageIdx(0);
    } else {
      setPreviewImageIdx(startIndex + 1);
    }
  };

  return (
    <Modal
      open={startIndex !== null}
      footer={null}
      closable={false}
      maskClosable
      onCancel={() => setPreviewImageIdx(null)}
      className="modalPreview"
    >
      <Row align="bottom">
        <Col xs={2} sm={2} md={2} className="center">
          <LeftOutlined className="navBtn" onClick={handleLeft} />
        </Col>
        <Col xs={20} sm={20} md={20}>
          <ImageGallery
            items={galleryData}
            showPlayButton={false}
            disableSwipe={true}
            startIndex={startIndex}
            showNav={false}
            onSlide={(index) => setPreviewImageIdx(index)}
            onThumbnailClick={(_e, index) => setPreviewImageIdx(index)}
            showThumbnails={!isFullscreen}
            onScreenChange={handleScreenChange}
          />
        </Col>
        <Col xs={2} sm={2} md={2} className="center">
          <RightOutlined className="navBtn" onClick={handleRight} />
        </Col>
      </Row>
    </Modal>
  );
};

export default ImagePreview;
