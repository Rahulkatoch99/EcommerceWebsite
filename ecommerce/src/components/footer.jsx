import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";

export const Footer = () => {
  const social = ["Facebook", "Twitter", "Instagram", "Whatsapp"];
  const offlineStores = ["TEXAS, USA", "TORONTO, CANADA", "LONDON, UK", "NOIDA, INDIA"];
  const usefulLinks = [
    "Refund Policy",
    "Order Details",
    "Track Package",
    "Shopping History",
    "Update Profile",
    "Delete Profile",
    "Subscriptions",
  ];
  const about = [
    "Multiple Branches",
    "Take Franchise",
    "Scheduled Offers",
    "More Links",
  ];
  const endpoints = [
    "Orders",
    "Downloads",
    "Addresses",
    "Account details",
    "Lost password",
  ];

  const contactInfo = [
    "Address: C – 1, Sector 7 NOIDA, UP",
    "Wheeling, NOIDA",
    "201301",
    "Contact : (+91) 120 419-0000",
    "304-650-2694",
    "E-mail : rahul.katoch@impressico.com",
    "contact@impressico.com",
  ];

  const [activeLink, setActiveLink] = useState("");
  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  const handleNavLeave = () => {
    setActiveLink("");
  };

  const linkStyle = (link) => ({
    color: activeLink === link ? "yellow" : "black",
    textDecoration: "none",
  });

  const products = [
    {
      id: 1,
      image:
        "https://wpthemes.themehunk.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product26-320x320.png",
      title: "Aliquam erat volutpat",
      originalPrice: 1000,
      discountedPrice: 999,
      rating: 3,
      discount: "1.00",
    },
    {
      id: 2,
      image:
        "https://wpthemes.themehunk.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product27-320x320.png",
      title: "Suspendisse gravida lacus varius",
      originalPrice: 1000,
      discountedPrice: 999,
      rating: 4,
      discount: "1.00",
    },
    {
      id: 3,
      image:
        "https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/products11-320x320.png",
      title: "Suspendisse vehicula at dui",
      originalPrice: 156,
      discountedPrice: 56,
      rating: 5,
      discount: "100.00",
    },
    {
      id: 4,
      image:
        "https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product15-320x320.png",
      title: "Fusce nec diam et dolor",
      originalPrice: 45,
      discountedPrice: 40,
      rating: 2,
      discount: "5.00",
    },
    {
      id: 5,
      image:
        "https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product16-320x320.png",
      title: "Donec ullamcorper turpis",
      originalPrice: 45,
      discountedPrice: 42,
      rating: 3,
      discount: "3.00",
    },
    {
      id: 6,
      image:
        "https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product19-320x320.png",
      title: "Aenean non pellentesque mauris",
      originalPrice: 1000,
      discountedPrice: 999,
      rating: 4,
      discount: "1.00",
    },
    {
      id: 7,
      image:
        "https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product1-320x320.png",
      title: "Pellentesque dignissim sapien...",
      originalPrice: 530,
      discountedPrice: 78,
      rating: 1,
      discount: "452.00",
    },
    {
      id: 8,
      image:
        "https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product10-320x320.png",
      title: "Curabitur ultricies ante ultricies...",
      originalPrice: 1110,
      discountedPrice: 45,
      rating: 5,
      discount: "1065.00",
    },
    {
      id: 9,
      image:
        "https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product6-320x320.png",
      title: "Morbi varius ligula eget ante",
      originalPrice: 55,
      discountedPrice: 45,
      rating: 3,
      discount: "10.00",
    },
    {
      id: 10,
      image:
        "https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product7-320x320.png",
      title: "Mauris elit magna, aliquet",
      originalPrice: 210,
      discountedPrice: 50,
      rating: 4,
      discount: "160.00",
    },
    {
      id: 11,
      image:
        "https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product8-320x320.png",
      title: "Vivamus luctus urna sed urna",
      originalPrice: 150,
      discountedPrice: 120,
      rating: 5,
      discount: "30.00",
    },
    {
      id: 12,
      image:
        "https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product9-320x320.png",
      title: "Nunc feugiat mi a tellus",
      originalPrice: 90,
      discountedPrice: 70,
      rating: 2,
      discount: "20.00",
    },
    {
      id: 13,
      image:
        "https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product12-320x320.png",
      title: "Vestibulum ante ipsum primis",
      originalPrice: 120,
      discountedPrice: 95,
      rating: 4,
      discount: "25.00",
    },
    {
      id: 14,
      image:
        "https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product13-320x320.png",
      title: "In faucibus orci luctus et",
      originalPrice: 80,
      discountedPrice: 60,
      rating: 3,
      discount: "20.00",
    },
    {
      id: 15,
      image:
        "https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product14-320x320.png",
      title: "Etiam feugiat lorem non metus",
      originalPrice: 200,
      discountedPrice: 180,
      rating: 5,
      discount: "20.00",
    },
    {
      id: 16,
      image:
        "https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product20-320x320.png",
      title: "Phasellus viverra nulla ut",
      originalPrice: 220,
      discountedPrice: 200,
      rating: 2,
      discount: "20.00",
    },
  ];

  const [currentBatch, setCurrentBatch] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBatch(
        (prevBatch) => (prevBatch + 1) % Math.ceil(products.length / 4)
      );
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const Products = products.slice(currentBatch * 4, (currentBatch + 1) * 4);

  return (
    <div>
      <Container fluid style={{ backgroundColor: "white" }}>
        <Row
          style={{
            backgroundColor: "white",
            marginRight: "20px",
            marginLeft: "20px",
            padding: "100px",
          }}
        >
          <Col xs={12} sm={6} md={4} lg={3} xl={3}>
            <p
              style={{
                fontWeight: "bolder",
                paddingBottom: "5px",
                display: "flex",
              }}
            >
              Connect With Us
            </p>
            {social.map((platform, index) => (
              <span
                style={{ padding: "1px", fontSize: "smaller", display: "flex" }}
                key={index}
              >
                {platform}
                <br />
              </span>
            ))}
            <p
              style={{
                fontWeight: "bolder",
                paddingTop: "15px",
                paddingBottom: "5px",
                display: "flex",
              }}
            >
              Useful Links
            </p>
            {usefulLinks.map((link, index) => (
              <span
                style={{ padding: "1px", fontSize: "smaller", display: "flex" }}
                key={index}
              >
                {link}
                <br />
              </span>
            ))}
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} xl={3}>
            <p
              style={{
                fontWeight: "bolder",
                paddingBottom: "5px",
                display: "flex",
              }}
            >
              More About Store
            </p>
            {about.map((about, index) => (
              <span
                style={{ padding: "1px", fontSize: "smaller", display: "flex" }}
                key={index}
              >
                {about}
                <br />
              </span>
            ))}
            <p
              style={{
                fontWeight: "bolder",
                paddingTop: "15px",
                paddingBottom: "5px",
                display: "flex",
              }}
            >
              End Points
            </p>
            {endpoints.map((ep, index) => (
              <span
                style={{ padding: "1px", fontSize: "smaller", display: "flex" }}
                key={index}
              >
                <a
                  style={linkStyle(`#${ep}`)}
                  onMouseOver={() => handleNavClick(`#${ep}`)}
                  onMouseLeave={handleNavLeave}
                  href="#"
                >
                  {ep}
                </a>
                <br />
              </span>
            ))}
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} xl={3}>
            <p
              style={{
                fontWeight: "bolder",
                paddingBottom: "5px",
                display: "flex",
              }}
            >
              Products
            </p>
            <Row>
              {Products.map((product, index) => (
                <div
                  style={{
                    display: "flex",
                    margin: "0",
                    paddingLeft: "0px",
                    paddingBottom: "25px",
                  }}
                  key={index}
                >
                  <Col xs={3} md={3} style={{ padding: "0", maxWidth: "50px" }}>
                    <Card style={{ border: "none" }}>
                      <Card.Img
                        variant="top"
                        src={product.image}
                        style={{ width: "40px", borderRadius: "50px" }}
                      />
                    </Card>
                  </Col>
                  <Col>
                    <Card.Body>
                      <Card.Title
                        style={{
                          fontSize: "smaller",
                          display: "flex",
                          marginBottom: "0",
                        }}
                      >
                        {product.title}
                      </Card.Title>
                      <Card.Text
                        style={{
                          color: "#ff0",
                          fontSize: "smaller",
                          display: "flex",
                          padding: "0",
                          margin: "0",
                        }}
                      >
                        {"★".repeat(product.rating)}
                        {"☆".repeat(5 - product.rating)}
                      </Card.Text>
                      <Card.Text
                        style={{
                          fontSize: "smaller",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {product.originalPrice && (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              padding: "0",
                              margin: "0",
                            }}
                          >
                            <del
                              style={{ marginRight: "4px", color: "#B8B8B8" }}
                            >
                              {product.originalPrice}
                            </del>
                            <span style={{ color: "#FFD200" }}>
                              £{product.discountedPrice}
                            </span>
                          </div>
                        )}
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </div>
              ))}
            </Row>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} xl={3}>
            <p
              style={{
                fontWeight: "bolder",
                paddingBottom: "5px",
                display: "flex",
              }}
            >
              Contact Details
            </p>
            {contactInfo.map((ci, index) => (
              <span
                style={{ padding: "1px", fontSize: "smaller", display: "flex" }}
                key={index}
              >
                {ci}
                <br />
              </span>
            ))}

            <p
              style={{
                fontWeight: "bolder",
                paddingTop: "15px",
                paddingBottom: "5px",
                display: "flex",
              }}
            >
              Offline Stores
            </p>
            {offlineStores.map((os, index) => (
              <span
                style={{ padding: "1px", fontSize: "smaller", display: "flex" }}
                key={index}
              >
                {os}
                <br />
              </span>
            ))}
          </Col>
        </Row>
        <p style={{ fontSize: "smaller" }}>
          © 2024 Impressico Store Developed by Rahul Katoch
        </p>
      </Container>
    </div>
  );
};


