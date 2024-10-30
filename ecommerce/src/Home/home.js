import React from 'react';
import ProductCard from '../components/ProductCard/js/ProductCard';
import { Frontpage } from "../components/FrontPage/js/front-page";

export const Home = () => {
    return (
        <>
            <Frontpage />
            <div className="home">
                <div className="products-grid">
                    <ProductCard />
                </div>
            </div>
        </>
    );
};
