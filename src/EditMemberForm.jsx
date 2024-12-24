import React, { useState } from 'react';
import './EditMemberForm.css';

const EditMemberForm = ({ member, goBack, onSave }) => {
  const [formData, setFormData] = useState(member);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData); 
  };

  return (
    <div className="edit-member-form">
      <header className="edit-header">
        <h2>Edit Member</h2>
        <button onClick={goBack} className="back-button">Back</button>
      </header>
      <form className="form-container">
        <div className="form-group">
          <label>Picture:</label>
          <input type="file" name="image" onChange={(e) => console.log(e.target.files[0])} />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Mobile:</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Plan Detail:</label>
          <input
            type="text"
            name="planDetail"
            value={formData.planDetail}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Duration:</label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>End Date:</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <div>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === 'Male'}
              onChange={handleChange}
            /> Male
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === 'Female'}
              onChange={handleChange}
            /> Female
          </div>
        </div>
        <button type="button" onClick={handleSave} className="save-button">Save & Next</button>
      </form>
    </div>
  );
};

export default EditMemberForm;
