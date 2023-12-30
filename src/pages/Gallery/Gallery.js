import React, { useEffect, useMemo, useState } from "react";
import { Col, Image, Row } from "antd";
import images from "../../../src/mockdata/gallery-images.json";
import Header from "../../components/GalleryHeader/Header";
import ImagePreview from "../../components/ImagePreview/ImagePreview";
import "./index.css";

const Gallery = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [currentCategory, setcurrentCategory] = useState("All");
  const [previewImageIdx, setPreviewImageIdx] = useState(null);
  const [galleryData, setGalleryData] = useState([]);
  
  const getAllCategories = useMemo(
    () => Array.from(new Set(["All", ...images.map((item) => item.category)])),
    [images]
  );

  useEffect(() => {
    setCategoryList(getAllCategories);
    setGalleryData();
  }, [getAllCategories]);

  useEffect(() => {
    if (currentCategory === "All") {
      setGalleryData(images);
    } else {
      setGalleryData(images.filter((img) => img.category === currentCategory));
    }
  }, [currentCategory]);

  const previewImage = (index) => {
    setPreviewImageIdx(index);
  };

  return (
    <Row gutter={[20, 20]} className="gallery-container">
      <Header
        title="Gallery"
        description="image gallery dispalying various category images"
        categoryList={categoryList}
        setcurrentCategory={setcurrentCategory}
        currentCategory={currentCategory}
      />
      {galleryData.map((image, index) => (
        <Col
          md={6}
          sm={8}
          xs={24}
          key={image.id}
          className="image-container"
          onClick={() => {
            previewImage(index);
          }}
        >
          <Image
            src={image.original}
            preview={false}
            alt="unavailable"
            className="gallery-image"
          />
        </Col>
      ))}
      <ImagePreview
        startIndex={previewImageIdx}
        setPreviewImageIdx={setPreviewImageIdx}
        galleryData={galleryData}
      />
    </Row>
  );
};

export default Gallery;
