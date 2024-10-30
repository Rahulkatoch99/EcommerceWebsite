import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Container, Pagination, Row } from 'react-bootstrap';
import '../css/SearchResult.css';
import { Hourglass } from 'react-loader-spinner';

export const SearchResults = ({ data }) => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const [validResults, setValidResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkImages = async () => {
            const validItems = [];
            for (const item of data.results) {
                try {
                    const response = await fetch(item.image, { method: 'HEAD' });
                    if (response.ok) {
                        validItems.push(item);
                    }
                } catch (error) {
                    console.error(`Image check failed for ${item.image}:`, error);
                }
            }
            setValidResults(validItems);
            setLoading(false);
        };

        if (data.results && data.results.length > 0) {
            checkImages();
        } else {
            setLoading(false);
        }
    }, [data.results]);

    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const handleProductClick = (id) => {
        const selectedProduct = validResults.find(product => product.id === id);
        navigate(`/product/${id}`, { state: { product: selectedProduct } });
    };

    const totalPages = Math.ceil(validResults.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = validResults.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div style={{ backgroundColor: "white" }}>
            <Container>
                {loading ? (
                    <Hourglass
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="hourglass-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        colors={['#306cce', '#72a1ed']}
                    />
                ) : validResults.length === 0 ? (
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
                ) : (
                    <>
                        <Row>
                            {currentItems.map((item, index) => (
                                <Col key={index} xs={12} sm={6} md={4} lg={3}>
                                    <div className="search-card" onClick={() => handleProductClick(item.id)}>
                                        <div className="image-container">
                                            <img src={item.image} alt={item.name} className="search-image" />
                                        </div>
                                        <div className="search-info">
                                            <span className="search-name">{item.name}</span>
                                            <div className="search-pricing">
                                                {item.actual_price > 0 && (
                                                    <span className="original-price">₹{item.actual_price}</span>
                                                )}
                                                <span className="discounted-price">₹{item.discount_price}</span>
                                            </div>
                                            <div className="rating">
                                                {'★'.repeat(Math.floor(item.ratings))}
                                                {'☆'.repeat(5 - Math.floor(item.ratings))}
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
                    </>
                )}
            </Container>
        </div>
    );
};
