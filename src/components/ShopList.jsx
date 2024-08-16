import React, { useEffect, useState } from "react";
import { fetchShops } from "../services/shopService";
import { Link, useParams } from "react-router-dom";
import './ShopList.css'; // Import the CSS file

const ShopList = () => {
  const [shops, setShops] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const loadShops = async () => {
      const shopsData = await fetchShops();
      if (category) {
        const filteredShops = shopsData.filter(
          (shop) => shop.category === category
        );
        setShops(filteredShops);
      } else {
        setShops(shopsData);
      }
    };
    loadShops();
  }, [category]);

  return (
    <div>
      {category && (
        <h1 className="text-2xl font-bold mb-4">Shops for {category}</h1>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {shops.map((shop) => (
          <div key={shop.id} className="shop-item border rounded-lg p-4">
            <img
              src={shop.profilePic}
              alt={shop.name}
              className="w-full h-32 object-cover mb-2"
            />
            <h2 className="text-lg font-bold">{shop.name}</h2>
            <p className="text-sm mb-2">{shop.description}</p>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-2">⭐</span>
              <span>{shop.ratings}</span>
            </div>
            <Link to={`/shop/${shop.id}`} className="text-blue-500 mt-2 block">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopList;
