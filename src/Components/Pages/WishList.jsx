import React from 'react';
import Card from '../Utilities/Card';
import '../Styles/WishList.css';
import { useWishList } from '../Providers/WishListProvider';

const WishList = () => {
    const { wishList } = useWishList();

    return (
        <main className="main wishlist flex flex-col align-center">
            <h1>WishList</h1>
            <section className="wishlist-content flex-row-wrap align-center justify-center">
            {
                wishList.wishes && wishList.wishes.map(wish => (
                <Card key={wish._id} id={wish._id} imgSrc={wish.imgSrc} title={wish.title} stars={wish.stars} price={wish.price} wish="fas fa-heart" />
                ))
            }
            </section>
        </main>
    )
}

export default WishList