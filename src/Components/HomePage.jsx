import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Import your images for the carousel
import imgCarousal from '../assets/imgCaroual3.jpg';
import imgCarousal2 from '../assets/imgcarousal.jpg';
import imgCarousal3 from '../assets/imgcarousal2.jpg';

// Carousel component definition
const CustomCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); 

        return () => clearInterval(interval); 
    }, [images.length]);

    return (
        <div className='relative w-full h-[400px] overflow-hidden'>
            <img
                src={images[currentIndex]}
                alt='Carousel'
                className='w-full h-full object-cover transition-opacity duration-1000 ease-in-out'
            />
        </div>
    );
};
const images = [imgCarousal, imgCarousal2, imgCarousal3];

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState(''); // State for search query

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(response => {
                setProducts(response.data.products);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>Error loading products: {error}</p>;

    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });


    return (
        <>
            <div className='h-[88px] w-full'>

                 
                </div> 

            {/* Carousel */}
            <div className=''>
            <CustomCarousel  images={images} />
            </div>

            {/* Search Bar */}
            <div className="flex justify-center mt-4">
                <input
                    type="text"
                    placeholder="Search for products"
                    className="w-full md:w-1/2 lg:w-1/3 py-2 px-4 rounded outline-none text-black border border-gray-300"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* Category Selection */}
            <div className="flex justify-center mt-4">
                {['all', 'beauty', 'fragrances', 'furniture', 'groceries'].map(category => (
                    <button
                        key={category}
                        className={`px-4 py-2 m-2 rounded ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>

            <div className="pt-16"> {/* Adjust padding-top to ensure content is not hidden behind the fixed header */}
                <main className="container mx-auto px-2 mt-4 overflow-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map(product => (
                                <div className="bg-white rounded-lg shadow-md p-4 flex flex-col" key={product.id}>
                                    <img className="w-full h-48 object-cover rounded-t-lg" src={product.thumbnail} alt={product.title} />
                                    <div className="flex-grow p-4 flex flex-col justify-between">
                                        <h3 className="text-lg font-semibold">{product.title}</h3>
                                        <p className="mt-2">
                                            <strong>Price:</strong> ${product.price}<br />
                                            <strong>Rating:</strong> {product.rating} ⭐<br />
                                            <strong>Discount:</strong> {product.discountPercentage}%<br />
                                        </p>
                                        <Link to={`/product/${product.id}`}>
                                            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded">
                                                View Details
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center col-span-full">No products found.</p>
                        )}
                    </div>
                </main>
            </div>
        </>
    );
};

export default ProductList;
