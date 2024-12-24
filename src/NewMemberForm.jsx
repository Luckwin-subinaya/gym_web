import React, { useState } from 'react';
import GenerateInvoiceForm from './GenerateInvoiceForm';
import  './NewMemberForm.css';
const NewMemberForm = ({ goBack }) => {
  const [memberData, setMemberData] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    planDetail: '',
    duration: '',
    startDate: '',
    endDate: '',
    gender: '',
    image: null,
  });

  const [isInvoicePage, setIsInvoicePage] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMemberData({ ...memberData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setMemberData({ ...memberData, image: imageUrl });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsInvoicePage(true); 
  };

  return (
    <div>
      {isInvoicePage ? (
        <GenerateInvoiceForm memberData={memberData} />
      ) : (
        <form onSubmit={handleSubmit} className="new-member-form">
          <h1>New Member Form</h1>
          <div>
            <label>Image:</label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {memberData.image && (
              <div className="image-preview">
                <img src={memberData.image} alt="Preview" />
              </div>
            )}
          </div>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={memberData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={memberData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Mobile:</label>
            <input
              type="text"
              name="mobile"
              placeholder="Enter mobile number"
              value={memberData.mobile}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              name="address"
              placeholder="Enter address"
              value={memberData.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Plan Detail:</label>
            <input
              type="text"
              name="planDetail"
              placeholder="Enter plan detail"
              value={memberData.planDetail}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Duration:</label>
            <input
              type="text"
              name="duration"
              placeholder="Enter duration (e.g., 6 months)"
              value={memberData.duration}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Start Date:</label>
            <input
              type="date"
              name="startDate"
              value={memberData.startDate}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>End Date:</label>
            <input
              type="date"
              name="endDate"
              value={memberData.endDate}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Gender:</label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={memberData.gender === 'Male'}
                onChange={handleInputChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={memberData.gender === 'Female'}
                onChange={handleInputChange}
              />
              Female
            </label>
          </div>
          <button type="submit">Save & Next</button>
        </form>
      )}
    </div>
  );
};

export default NewMemberForm;
