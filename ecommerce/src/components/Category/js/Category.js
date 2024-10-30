import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { NavBar } from '../../../Navbar/Navbar';
import { Button, Col, Container, Pagination, Row } from 'react-bootstrap';
import '../css/Category.css';



const mockData = [
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



export const Category = () => {
    const navigate = useNavigate();
    const { category } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    if (!category) {
        return <Container><h2>Category not found</h2></Container>;
    }

    const totalPages = Math.ceil(mockData.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = mockData.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <>
            <div className="category-details">
                <Container>
                    <Row>
                        {currentItems.map((item, index) => (
                            <Col key={index} xs={12} sm={6} md={4} lg={3} onClick={() => handleProductClick(item.id)}>
                                <div className="product-card">
                                    <img src={item.image} alt={item.title} className="product-image" />
                                    <div className="product-info">
                                        <span>{item.title}</span>
                                        <div className="product-pricing">
                                            {item.originalPrice > 0 && <span className="original-price">£{item.originalPrice}</span>}
                                            <span className="discounted-price">£{item.discountedPrice}</span>
                                        </div>
                                        <div className="rating">
                                            {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <Row className="justify-content-center">
                        <div className="pagination-container">
                            <Pagination>
                                <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
                                <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
                                {[...Array(totalPages)].map((_, index) => (
                                    <Pagination.Item
                                        key={index + 1}
                                        active={index + 1 === currentPage}
                                        onClick={() => handlePageChange(index + 1)}
                                    >
                                        {index + 1}
                                    </Pagination.Item>
                                ))}
                                <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
                                <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
                            </Pagination>
                        </div>
                    </Row>


                </Container>

            </div>
        </>
    );
};