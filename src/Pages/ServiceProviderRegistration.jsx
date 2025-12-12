import React, { useState } from 'react';
import './../Styles/ServiceProviderRegistration.css';

const ServiceProviderRegistration = () => {
    const [formData, setFormData] = useState({
        businessName: '',
        ownerName: '',
        email: '',
        phone: '',
        address: '',
        serviceCategory: '',
        experience: '',
        description: '',
        workingHours: '',
        priceRange: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="registration-container">
            <div className="registration-form">
                <h1>Service Provider Registration</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Business Name</label>
                        <input
                            type="text"
                            name="businessName"
                            value={formData.businessName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Owner Name</label>
                        <input
                            type="text"
                            name="ownerName"
                            value={formData.ownerName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Business Address</label>
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <label>Service Category</label>
                        <select
                            name="serviceCategory"
                            value={formData.serviceCategory}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="cleaning">Cleaning</option>
                            <option value="plumbing">Plumbing</option>
                            <option value="electrical">Electrical</option>
                            <option value="carpentry">Carpentry</option>
                            <option value="painting">Painting</option>
                            <option value="gardening">Gardening</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Years of Experience</label>
                        <input
                            type="number"
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            min="0"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Service Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Describe your services..."
                            required
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <label>Working Hours</label>
                        <input
                            type="text"
                            name="workingHours"
                            value={formData.workingHours}
                            onChange={handleChange}
                            placeholder="e.g., 9 AM - 6 PM"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Price Range</label>
                        <input
                            type="text"
                            name="priceRange"
                            value={formData.priceRange}
                            onChange={handleChange}
                            placeholder="e.g., $50 - $200"
                            required
                        />
                    </div>

                    <button type="submit" className="submit-btn">Register as Service Provider</button>
                </form>
            </div>
        </div>
    );
};

export default ServiceProviderRegistration;