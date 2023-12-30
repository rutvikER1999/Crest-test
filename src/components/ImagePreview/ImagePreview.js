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

  return (
    <Modal
      open={startIndex !== null}
      footer={null}
      closable={false}
      maskClosable
      onCancel={() => setPreviewImageIdx(null)}
      style={{ minHeight: "40vh", minWidth: "60vw" }}
    >
      <Row align="bottom">
        <Col span={3} className="center">
          <LeftOutlined
            style={{ fontSize: "50px", paddingBottom: "10px" }}
            onClick={() => setPreviewImageIdx(startIndex - 1)}
          />
        </Col>
        <Col span={18}>
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
        <Col span={3} className="center">
          <RightOutlined
            style={{ fontSize: "50px", paddingBottom: "10px" }}
            onClick={() => setPreviewImageIdx(startIndex + 1)}
          />
        </Col>
      </Row>
    </Modal>
  );
};

export default ImagePreview;
