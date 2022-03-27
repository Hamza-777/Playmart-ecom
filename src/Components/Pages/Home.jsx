import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';
import { useProduct } from '../Providers/ProductProvider';
import Card from '../Utilities/Card';

const Home = () => {
    const { products } = useProduct();

    return (
        <main className="main">
            <div className="categories">
                <div className="category flex-center games">
                    <h1>Video Games</h1>
                    <Link to="/product-listing" className="btn btn-to flex-center">&#10095;</Link>
                    <div className="fader"></div>
                </div>
            </div>
            <div className="trendings flex-center flex-col align-start">
                <h1>🔥 Trendings 🔥</h1>
                <div className="trending-games flex align-center">
                    {
                        products && products.map(product => (
                            product.stars >= 4 && <Card key={product._id} id={product._id} imgSrc={product.imgSrc} title={product.title} price={product.price} stars={product.stars} />
                        ))
                    }
                </div>
            </div>
        </main>
    )
}

export default Home