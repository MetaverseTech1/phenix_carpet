// components/common/Reviews.jsx
"use client";

import React, { useState } from 'react';
import { Star } from 'lucide-react';

const Reviews = ({ product, setProduct }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    review: '',
    saveInfo: false
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.review.trim()) newErrors.review = 'Review is required';
    if (rating === 0) newErrors.rating = 'Rating is required';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length === 0) {
      const newReview = {
        name: formData.name,
        email: formData.email,
        review: formData.review,
        rating,
        date: new Date().toISOString()
      };
      
      setProduct(prev => ({
        ...prev,
        reviews: [...(prev.reviews || []), newReview]
      }));
      
      setFormData({ name: '', email: '', review: '', saveInfo: false });
      setRating(0);
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="w-full py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Reviews Section */}
        <div className="lg:w-1/3">
          <h2 className="text-xl text-start font-semibold mb-4">Reviews</h2>
          {(!product.reviews || product.reviews.length === 0) ? (
            <p className="text-gray-600 text-start text-sm">There are no reviews yet.</p>
          ) : (
            <div className="space-y-4 ">
              {product.reviews.map((review, index) => (
                <div key={index} className="border-b pb-4">
                  <div className="flex items-start  gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-800 text-sm mb-2">{review.review}</p>
                  <p className="text-xs text-gray-500">
                    By {review.name} on {new Date(review.date).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Review Form Section */}
        <div className="lg:w-1/2 flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-3">
            Be the first to review "{product.name}"
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Your email address will not be published. Required fields are marked *
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex gap-2 items-center">
              <label className="block text-xs tracking-[0.05rem] ">
                YOUR RATING *
              </label>
              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`w-4 h-4 cursor-pointer ${
                      index < (hover || rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                    }`}
                    onMouseEnter={() => setHover(index + 1)}
                    onMouseLeave={() => setHover(rating)}
                    onClick={() => setRating(index + 1)}
                  />
                ))}
              </div>
              {errors.rating && (
                <p className="text-red-500 text-xs mt-1">{errors.rating}</p>
              )}
            </div>

            <div>
             
              <textarea
                className="w-full border border-gray-300 tracking-[0.05rem] rounded p-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                rows={3}
                value={formData.review}
                onChange={(e) => setFormData(prev => ({ ...prev, review: e.target.value }))}
                placeholder='Your review *'
              />
              {errors.review && (
                <p className="text-red-500 text-xs mt-1">{errors.review}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
             
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder='Name *'
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div>
             
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded p-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder='Email *'

                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="saveInfo"
                checked={formData.saveInfo}
                onChange={(e) => setFormData(prev => ({ ...prev, saveInfo: e.target.checked }))}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="saveInfo" className="text-xs tracking-[0.05rem] text-gray-600">
                Save my name, email, and website in this browser for the next time I comment.
              </label>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-2 rounded text-sm hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reviews;