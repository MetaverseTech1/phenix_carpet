// components/common/QuoteRequestForm.jsx
"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

const QuoteRequestForm = ({ isOpen, onClose, productDetails, setShowQuoteForm }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    size: "",
    quantity: "",
    additionalRequirements: "",
    referenceImage: null,
  });
  
  const [showThankYou, setShowThankYou] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, referenceImage: file }));
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowQuoteForm(false);
    }
  };

  const composeEmailBody = () => {
    return `
Product Details:
- Name: ${productDetails.name}
- Style Number: ${productDetails.styleNumber? productDetails.styleNumber : productDetails.productId}
- Description: ${productDetails.description || 'N/A'}

Customer Details:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Phone: ${formData.phoneNumber}

Order Requirements:
- Size: ${formData.size}
- Quantity: ${formData.quantity}
- Additional Requirements: ${formData.additionalRequirements || 'None'}

This is a quote request from The Phenix Carpets website.
    `.trim();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Compose email mailto link
    const subject = `Quote Request for ${productDetails.name} ${productDetails.styleNumber? productDetails.styleNumber : productDetails.productId}`;
    const body = composeEmailBody();
    const mailtoLink = `mailto:info@thephenixcarpets.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Show thank you message
    setShowThankYou(true);
    
    // Open email client after a short delay
    setTimeout(() => {
      window.location.href = mailtoLink;
      
      // Close the form after another short delay
      setTimeout(() => {
        onClose();
      }, 1500);
    }, 1500);
  };

  if (showThankYou) {
    return (
      <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center backdrop-blur-sm">
        <div className="bg-white rounded-lg p-8 max-w-md text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-gray-600">Your quote request has been prepared. Opening your email client...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative h-[80vh] overflow-auto scroll max-w-[90vw] w-auto bg-white rounded-lg shadow-2xl">
        <div className="bg-white rounded-lg w-full max-w-3xl relative">
          <div className="p-6 border-b">
            <h2 className="text-xl max-w-xl text-start font-semibold text-gray-900">
              Request Quote for {productDetails.name} <br/> {productDetails.styleNumber? productDetails.styleNumber : productDetails.productId}
            </h2>
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 p-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-start tracking-[0.04rem] text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 text-sm tracking-[0.04rem] py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label className="block text-start tracking-[0.04rem] text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 text-sm tracking-[0.04rem] py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-start tracking-[0.04rem] text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 text-sm tracking-[0.04rem] py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-start tracking-[0.04rem] text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 text-sm tracking-[0.04rem] py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter phone number"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-start tracking-[0.04rem] text-sm font-medium text-gray-700 mb-1">
                  Size
                </label>
                <input
                  type="text"
                  name="size"
                  value={formData.size}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 text-sm tracking-[0.04rem] py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter size requirements"
                />
              </div>
              <div>
                <label className="block text-start tracking-[0.04rem] text-sm font-medium text-gray-700 mb-1">
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  required
                  min="1"
                  className="w-full px-3 text-sm tracking-[0.04rem] py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter quantity"
                />
              </div>
            </div>

            <div>
              <label className="block text-start tracking-[0.04rem] text-sm font-medium text-gray-700 mb-1">
                Additional Requirements
              </label>
              <textarea
                name="additionalRequirements"
                value={formData.additionalRequirements}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter any additional requirements or messages"
              ></textarea>
            </div>

            <div>
              <label className="block text-start tracking-[0.04rem] text-sm font-medium text-gray-700 mb-1">
                Upload Reference Image (Optional)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Submit Quote Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteRequestForm;