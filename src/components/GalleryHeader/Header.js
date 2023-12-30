import { Col, Flex, Typography } from "antd";
import React from "react";
import { CustomButton } from "../../components";

export const Header = (props) => {
  const { Title, Paragraph } = Typography;
  const {
    title,
    description,
    categoryList,
    currentCategory,
    setcurrentCategory,
  } = props;

  return (
    <Col sm={24} xs={24} className="gallery-header">
      <Title level={2} strong>
        {title}
      </Title>
      <Paragraph>{description}</Paragraph>
      <Flex wrap="wrap" gap="small" align="center" justify="center">
        {categoryList.map((category) => (
          <CustomButton
            title={category}
            key={category}
            selected={currentCategory === category}
            onClick={setcurrentCategory}
          />
        ))}
      </Flex>
    </Col>
  );
};
