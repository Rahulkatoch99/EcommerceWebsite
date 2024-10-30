import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../css/ProductDetails.css';

export const ProductDetails = ({ result }) => {
    const location = useLocation();
    const { product } = location.state || {};
    const [isHovering, setIsHovering] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const imgRef = useRef(null);
    const navigate = useNavigate()



    useEffect(() => {
        if (!result) {
            navigate('/');
        }
    }, [result, product, navigate]);

    if (!product) {
        return (
            <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <Row className="text-center">
                    <Col>
                        <img
                            src="https://jobs.ficsi.in/assets/front_end/images/no-data-found.jpg"
                            alt="No result found"
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }

    const handleMouseMove = (e) => {
        const { left, top, width, height } = imgRef.current.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        setPosition({ x, y });
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };


    return (
        <>
            <div className="product-details">
                <Container>
                    <Row>
                        <Col xs={12} md={6} className="mb-3">
                            <div
                                ref={imgRef}>
                                <div className="product-image text-center" >
                                    <img src={product.image} alt={product.name} className="fixed-image-size" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} />
                                    {isHovering && (
                                        <div
                                            className="magnifier"
                                            style={{
                                                display: 'block',
                                                top: position.y - 50,
                                                left: position.x - 50,
                                                width: 150,
                                                height: 150,
                                                backgroundImage: `url(${product.image})`,
                                                backgroundSize: `${imgRef.current.offsetWidth * 2}px ${imgRef.current.offsetHeight * 2}px`,
                                                backgroundPosition: `-${position.x * 4 - 50}px -${position.y * 2 - 50}px`,
                                            }}
                                        ></div>
                                    )}

                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="product-info">
                                <h4>{product.name.toUpperCase()}</h4>
                                <div className="rating">
                                    {'★'.repeat(product.ratings)}{'☆'.repeat(5 - product.ratings)}
                                </div>
                                <hr />
                                <div className="price">
                                    <span className="original-price">₹{product.actual_price}</span>
                                    <span className="discounted-price">₹{product.discount_price}</span>
                                </div>
                                <div className="description">
                                    <p style={{ fontWeight: '300' }}>{product.description}</p>
                                </div>
                                <div>
                                    <Button variant="warning" className="add-to-cart-btn">
                                        <a href={product.link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                            View On Amazon
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};
