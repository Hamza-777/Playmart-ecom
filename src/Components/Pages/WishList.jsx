import React from 'react';
import Card from '../Utilities/Card';
import '../Styles/WishList.css';
import { useWishList } from '../Providers/WishListProvider';
import { useAuth } from '../Providers/AuthProvider';
import EmptyPage from '../Utilities/EmptyPage';

const WishList = () => {
    const { wishList: { wishes } } = useWishList();
    const { authState } = useAuth();

    console.log(authState);

    return (
        <main className="main wishlist flex flex-col align-center">
            <h1>My WishList ({wishes.length})</h1>
            <section className="wishlist-content flex-row-wrap align-center justify-center">
            {
                wishes.length > 0 ? wishes.map(wish => (
                <Card key={wish._id} id={wish._id} imgSrc={wish.imgSrc} title={wish.title} stars={wish.stars} price={wish.price} inWishList={wish.inWishList} inCart={wish.inCart} />
                )) : <EmptyPage page='wishlist' />
            }
            </section>
        </main>
    )
}

export default WishList