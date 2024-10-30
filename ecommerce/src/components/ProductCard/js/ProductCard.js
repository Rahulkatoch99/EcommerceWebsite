import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../css/ProductCard.css';
import { useNavigate } from 'react-router-dom';
import { getProductsByCategory } from '../../../api';
import { BiCamera } from 'react-icons/bi';


const products = [
    {
        id: 1,
        image: 'https://wpthemes.themehunk.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product26-320x320.png',
        title: 'Aliquam erat volutpat',
        originalPrice: 1000,
        discountedPrice: 999,
        rating: 3,
        discount: '1.00',
    },
    {
        id: 2,
        image: 'https://wpthemes.themehunk.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product27-320x320.png',
        title: 'Suspendisse gravida lacus varius',
        originalPrice: 1000,
        discountedPrice: 999,
        rating: 4,
        discount: '1.00',
    },
    {
        id: 3,
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/products11-320x320.png',
        title: 'Suspendisse vehicula at dui',
        originalPrice: 156,
        discountedPrice: 56,
        rating: 5,
        discount: '100.00',
    },
    {
        id: 4,
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product15-320x320.png',
        title: 'Fusce nec diam et dolor',
        originalPrice: 45,
        discountedPrice: 40,
        rating: 2,
        discount: '5.00',
    },
    {
        id: 5,
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product16-320x320.png',
        title: 'Donec ullamcorper turpis',
        originalPrice: 45,
        discountedPrice: 42,
        rating: 3,
        discount: '3.00',
    },
    {
        id: 6,
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product19-320x320.png',
        title: 'Aenean non pellentesque mauris',
        originalPrice: 1000,
        discountedPrice: 999,
        rating: 4,
        discount: '1.00',
    },
    {
        id: 7,
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product1-320x320.png',
        title: 'Pellentesque dignissim sapien...',
        originalPrice: 530,
        discountedPrice: 78,
        rating: 1,
        discount: '452.00',
    },
    {
        id: 8,
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product10-320x320.png',
        title: 'Curabitur ultricies ante ultricies...',
        originalPrice: 1110,
        discountedPrice: 45,
        rating: 5,
        discount: '1065.00',
    },
    {
        id: 9,
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product6-320x320.png',
        title: 'Morbi varius ligula eget ante',
        originalPrice: 55,
        discountedPrice: 45,
        rating: 3,
        discount: '10.00',
    },
    {
        id: 10,
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product7-320x320.png',
        title: 'Mauris elit magna, aliquet',
        originalPrice: 210,
        discountedPrice: 50,
        rating: 4,
        discount: '160.00',
    },
    {
        id: 11,
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product8-320x320.png',
        title: 'Vivamus luctus urna sed urna',
        originalPrice: 150,
        discountedPrice: 120,
        rating: 5,
        discount: '30.00',
    },
    {
        id: 12,
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product9-320x320.png',
        title: 'Nunc feugiat mi a tellus',
        originalPrice: 90,
        discountedPrice: 70,
        rating: 2,
        discount: '20.00',
    },
    {
        id: 13,
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product12-320x320.png',
        title: 'Vestibulum ante ipsum primis',
        originalPrice: 120,
        discountedPrice: 95,
        rating: 4,
        discount: '25.00',
    },
    {
        id: 14,
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product13-320x320.png',
        title: 'In faucibus orci luctus et',
        originalPrice: 80,
        discountedPrice: 60,
        rating: 3,
        discount: '20.00',
    },
    {
        id: 15,
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product14-320x320.png',
        title: 'Etiam feugiat lorem non metus',
        originalPrice: 200,
        discountedPrice: 180,
        rating: 5,
        discount: '20.00',
    },
    {
        id: 16,
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/product20-320x320.png',
        title: 'Phasellus viverra nulla ut',
        originalPrice: 220,
        discountedPrice: 200,
        rating: 2,
        discount: '20.00',
    }
];





const Category = [
    {
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/category-img-1-woo-slider.png',
        title: 'Cameras',

    },
    {
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2021/01/cate-audio.png',
        title: 'Audio',

    },
    {
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2020/07/category-img-6-woo-slider.png',
        title: 'Headphones',

    },
    {
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2021/01/cat-w.png',
        title: 'Smart Watch',

    },
    {
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2021/01/cate-phone.png',
        title: 'Smartphone',

    },
    {
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2021/01/cate-sp.png',
        title: 'Speaker',

    },
    {
        image: 'https://150698241.v2.pressablecdn.com/big-store-electro/wp-content/uploads/sites/164/2021/01/cate-s.png',
        title: 'Watches',

    },
];





const ProductCard = () => {
    const [topRatedProducts, setTopRatedProducts] = useState([]);
    const navigate = useNavigate()
    const [activeLink, setActiveLink] = useState("#home");
    const [techCurrentSlide, setTechCurrentSlide] = useState(0);
    const [categoryCurrentSlide, setCategoryCurrentSlide] = useState(0);
    const [saleProduct, setSaleProduct] = useState(0);

    const techTotalSlides = Math.ceil(products.length / 8);
    const categoryTotalSlides = Math.ceil(Category.length / 6);

    const handleNavClick = (link) => setActiveLink(link);
    const handleSelectTech = (selectedIndex) => setTechCurrentSlide(selectedIndex);
    const handleSelectCategory = (selectedIndex) => setCategoryCurrentSlide(selectedIndex);
    const handleSelectSaleProduct = (selectedIndex) => setSaleProduct(selectedIndex);


    const handlePrev = (currentSlide, setSlide, totalSlides) => {
        setSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
    };
    const handleNext = (currentSlide, setSlide, totalSlides) => {
        setSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
    };

    const linkStyle = (link) => ({
        color: activeLink === link ? 'black' : 'grey',
        textDecoration: 'none',
        fontWeight: 'bold',
    });


    const handleProductClick = (id) => {
        const selectedProduct = topRatedProducts.find(product => product.id === id);
        navigate(`/product/${id}`, { state: { product: selectedProduct, topRatedProducts } });
    };


    const handleCategory = (categoryTitle) => {
        navigate(`/category/${categoryTitle.toLowerCase()}`);

    }



    useEffect(() => {
        const fetchTopRatedProducts = async () => {
            try {
                const response = await getProductsByCategory('products_50_off');
                if (response.data && Array.isArray(response.data.products_50_off)) {
                   
                    setTopRatedProducts(response.data.products_50_off);
                } else {
                    console.error('Unexpected response format:', response.data);
                }
            } catch (error) {
                console.error('Error fetching top-rated products:', error);
            }
        };

        fetchTopRatedProducts();
    }, []);




    return (
        <>
            <Container fluid>
                <Row className="Product-dropdown-row">
                    <Container>
                        <Row>
                            <Col xs={6}>
                                <div style={{ marginTop: "20px", marginRight: "80px" }}>
                                    <h6 style={{ fontWeight: "bold" }}>Latest Tech</h6>
                                </div>
                            </Col>
                            <Col xs={6} className="link">
                                <Container fluid className="p-0">
                                    <Navbar expand="lg" className="p-2" style={{ backgroundColor: "white" }}>
                                        <Nav className="me-auto">
                                            {["#Accessories", "#Cameras", "#Headphones", "#Smart Watch"].map((link) => (
                                                <Nav.Link
                                                    key={link}
                                                    href={link}
                                                    onClick={() => handleNavClick(link)}
                                                    style={linkStyle(link)}
                                                >
                                                    {link.replace('#', '')}
                                                </Nav.Link>
                                            ))}
                                            <div style={{ marginTop: "6px", marginRight: "6px", marginLeft: "50px" }}>
                                                <button onClick={() => handlePrev(techCurrentSlide, setTechCurrentSlide, techTotalSlides)} style={buttonStyle}><i className="slick-nav fa fa-angle-left" /></button>
                                            </div>
                                            <div style={{ marginTop: "6px" }}>
                                                <button onClick={() => handleNext(techCurrentSlide, setTechCurrentSlide, techTotalSlides)} style={buttonStyle}><i className="slick-nav fa fa-angle-right" /></button>
                                            </div>
                                        </Nav>
                                    </Navbar>
                                </Container>
                            </Col>
                        </Row>
                        <hr style={{ margin: "0 18%", backgroundColor: "yellow", height: "2px", border: "none" }} />
                    </Container>
                </Row>
                <Row style={{ backgroundColor: "white" }}>
                    <Container>
                        <div style={{ marginLeft: "17%", marginRight: "12%" }}>
                            <Carousel activeIndex={techCurrentSlide} onSelect={handleSelectTech} controls={false} indicators={false}>
                                {Array.from({ length: techTotalSlides }).map((_, slideIndex) => (
                                    <Carousel.Item key={slideIndex}>
                                        <Row>
                                            {products.slice(slideIndex * 8, (slideIndex + 1) * 8).map((product, index) => {
                                                const discount = product.discount || '0.00'; // Set default value if discount is undefined
                                                return (
                                                    <Col key={index} xs={12} sm={6} md={4} lg={3} onClick={() => handleProductClick(product.id)}>
                                                        <div className="product-card">
                                                            <img src={product.image} alt={product.title} className="product-image" />
                                                            <div className="product-info">
                                                                <span>{product.title}</span>
                                                                <div className="product-pricing">
                                                                    {product.originalPrice > 0 && <span className="original-price">₹{product.originalPrice}</span>}
                                                                    <span className="discounted-price">₹{product.discountedPrice}</span>
                                                                </div>
                                                                <div className="discount">--₹{discount}</div>
                                                                <div className="rating">
                                                                    {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                );
                                            })}
                                        </Row>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                    </Container>
                </Row>

            </Container>
            <Container fluid>
                <Row className="Product-dropdown-row">
                    <Container>
                        <Row>
                            <Col xs={6}>
                                <div style={{ marginTop: "20px", marginRight: "40px" }}>
                                    <h6 style={{ fontWeight: "bold" }}>Choose Category</h6>
                                </div>
                            </Col>
                            <Col xs={6} className="link">
                                <Container fluid className="p-0">
                                    <div>
                                        <div style={{ marginTop: "6px", marginRight: "4px" }}>
                                            <button onClick={() => handlePrev(categoryCurrentSlide, setCategoryCurrentSlide, categoryTotalSlides)} style={buttonStyle}><i className="slick-nav fa fa-angle-left" /></button>
                                        </div>
                                        <div style={{ marginTop: "-25px", marginLeft: "60px" }}>
                                            <button onClick={() => handleNext(categoryCurrentSlide, setCategoryCurrentSlide, categoryTotalSlides)} style={buttonStyle}><i className="slick-nav fa fa-angle-right" /></button>
                                        </div>
                                    </div>
                                </Container>
                            </Col>
                        </Row>
                        <hr style={{ margin: "0 18%", backgroundColor: "yellow", height: "2px", border: "none" }} />
                    </Container>
                </Row>
                <Row style={{ backgroundColor: "white", paddingBottom: "25px" }}>
                    <Container>
                        <div style={{ marginLeft: "17%", marginRight: "12%" }}>
                            <Carousel activeIndex={categoryCurrentSlide} onSelect={handleSelectCategory} controls={false} indicators={false}>
                                {Array.from({ length: categoryTotalSlides }).map((_, slideIndex) => (
                                    <Carousel.Item key={slideIndex}>
                                        <Row className="d-flex flex-nowrap">
                                            {Category.slice(slideIndex * 6, (slideIndex + 1) * 6).map((category, index) => (
                                                <Col key={index} xs={12} sm={6} md={4} lg={2} onClick={(e) => handleCategory(category.title)}>
                                                    <div className="category-card">
                                                        <img src={category.image} alt={category.title} className="product-image" />
                                                        <div className="category-info">
                                                            <span>{category.title}</span>
                                                        </div>
                                                    </div>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                    </Container>
                </Row>
                <Row className="justify-content-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", backdropFilter: "blur(4px)", paddingBottom: "165px" }}>
                    <Col xs={12} sm={8} md={8} lg={6}>
                        <Container style={{ marginTop: "100px" }}>
                            <div style={{ textAlign: "center", color: "white" }}>
                                <h5>Work Like a Professional, With Best in its Class</h5>
                            </div>
                            <div>
                                <Button variant="warning">Check Out</Button>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row className="Product-dropdown-row">
                    <Container>
                        <Row>
                            <Col xs={6}>
                                <div style={{ marginTop: "30px", marginRight: "80px" }}>
                                    <h6 style={{ fontWeight: "bold" }}>Top Rated Product</h6>
                                </div>
                            </Col>
                            <Col xs={6} className="link">
                                <Container fluid className="p-0">
                                    <div>
                                        <div style={{ marginTop: "25px", marginRight: "4px" }}>
                                            <button onClick={() => handlePrev(saleProduct, setSaleProduct, techTotalSlides)} style={buttonStyle}><i className="slick-nav fa fa-angle-left" /></button>
                                        </div>
                                        <div style={{ marginTop: "-25px", marginLeft: "60px" }}>
                                            <button onClick={() => handleNext(saleProduct, setSaleProduct, techTotalSlides)} style={buttonStyle}><i className="slick-nav fa fa-angle-right" /></button>
                                        </div>
                                    </div>
                                </Container>
                            </Col>
                        </Row>
                        <hr style={{ margin: "0 18%", backgroundColor: "yellow", height: "2px", border: "none" }} />
                    </Container>
                </Row>
                <Row style={{ backgroundColor: "white" }}>
                    <Container>
                        <div style={{ marginLeft: "17%", marginRight: "12%" }}>
                            <Carousel activeIndex={saleProduct} onSelect={handleSelectSaleProduct} controls={false} indicators={false}>
                                {Array.from({ length: techTotalSlides }).map((_, slideIndex) => (
                                    <Carousel.Item key={slideIndex}>
                                        <Row>
                                            {topRatedProducts.slice(slideIndex * 8, (slideIndex + 1) * 8).map((product, index) => (
                                                <Col key={index} xs={12} sm={6} md={4} lg={3} onClick={() => handleProductClick(product.id)}>
                                                    <div className="product-card">
                                                        <img src={product.image} alt={product.name} className="product-image" />
                                                        <div className="product-info">
                                                            <span>{product.name}</span>
                                                            <div className="product-pricing">
                                                                {product.originalPrice > 0 && <span className="original-price">₹{product.actual_price}</span>}
                                                                <span className="discounted-price">₹{product.discount_price}</span>
                                                            </div>
                                                            {product.discount && <div className="discount">-₹{product.discount}</div>}
                                                            <div className="rating">
                                                                {'★'.repeat(product.ratings)}{'☆'.repeat(5 - product.ratings)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                    </Container>
                </Row>
            </Container>
        </>
    );
};

const buttonStyle = {
    background: "white",
    width: "25px",
    height: "25px",
    lineHeight: "25px",
    fontSize: "12px",
    color: "#ccc",
    border: "1px solid #ccc",
    borderRadius: "4px"
};

export default ProductCard;