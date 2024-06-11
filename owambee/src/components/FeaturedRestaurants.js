import React from 'react';

function FeaturedRestaurants() {
    const restaurants = [
        { name: 'The Place', rating: '96%', distance: '1.2 miles', delivery: 'Free delivery', image: 'place.jpg' },
        { name: 'Yakoyo', rating: '92%', distance: '1.8 miles', delivery: 'Free delivery', image: 'yakoyo.jpg' },
        { name: 'Agoyin Palace', rating: '89%', distance: '2.3 miles', delivery: 'Free delivery', image: 'agoyin.jpg' },
    ];

    return (
        <div className="featured-restaurants">
            <h2>Top restaurants near you</h2>
            <div className="restaurants-list">
                {restaurants.map((restaurant, index) => (
                    <div key={index} className="restaurant">
                        <img src={`./assets/images/${restaurant.image}`} alt={restaurant.name} />
                        <h3>{restaurant.name}</h3>
                        <p>{restaurant.rating}</p>
                        <p>{restaurant.distance}</p>
                        <p>{restaurant.delivery}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FeaturedRestaurants;
