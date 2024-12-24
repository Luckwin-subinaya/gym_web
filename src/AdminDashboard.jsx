import React, { useState } from "react";
import "./AdminDashboard.css";
import NewMemberForm from "./NewMemberForm";
import EditMemberForm from "./EditMemberForm";

const AdminDashboard = ({ navigateToLanding }) => {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Member-1",
      email: "member1@gmail.com",
      mobile: "1234567890",
      address: "Address 1",
      planDetail: "Cardio",
      duration: "6 months",
      startDate: "2024-01-01",
      endDate: "2024-06-30",
      gender: "Male",
      image: null,
    },
    {
      id: 2,
      name: "Member-2",
      email: "member2@gmail.com",
      mobile: "0987654321",
      address: "Address 2",
      planDetail: "Yoga",
      duration: "3 months",
      startDate: "2024-02-01",
      endDate: "2024-04-30",
      gender: "Female",
      image: null,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [showNewMemberForm, setShowNewMemberForm] = useState(false);
  const [showEditMemberForm, setShowEditMemberForm] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const adminEmail = "admin@gmail.com";

  // Open New Member Form
  const handleNewMemberClick = () => setShowNewMemberForm(true);

  // Open Edit Member Form
  const handleEditClick = (member) => {
    setSelectedMember(member);
    setShowEditMemberForm(true);
  };

  // Save a New Member
  const handleSaveNewMember = (newMember) => {
    if (
      members.some(
        (member) => member.email === newMember.email || member.mobile === newMember.mobile
      )
    ) {
      alert("Member with this email or mobile already exists!");
      return;
    }
    setMembers([...members, { ...newMember, id: members.length + 1 }]);
    setShowNewMemberForm(false);
  };

  // Save Edited Member
  const handleSaveEditedMember = (updatedMember) => {
    setMembers(
      members.map((member) =>
        member.id === updatedMember.id ? updatedMember : member
      )
    );
    setShowEditMemberForm(false);
  };

  // Delete Member
  const handleDeleteMember = (memberId) => {
    if (window.confirm("Are you sure you want to delete this member?")) {
      setMembers(members.filter((member) => member.id !== memberId));
    }
  };

  // Filter Members by Search Term
  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (showNewMemberForm) {
    return (
      <NewMemberForm
        goBack={() => setShowNewMemberForm(false)}
        onSave={handleSaveNewMember}
        adminEmail={adminEmail}
        setMembers={setMembers} // Pass the setMembers function to NewMemberForm
      />
    );
  }

  if (showEditMemberForm && selectedMember) {
    return (
      <EditMemberForm
        member={selectedMember}
        goBack={() => setShowEditMemberForm(false)}
        onSave={handleSaveEditedMember}
      />
    );
  }

  return (
    <div>
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <div className="admin-info">
          <span>{adminEmail}</span>
          <button className="logout-button" onClick={navigateToLanding}>
            Logout
          </button>
        </div>
      </header>
      <main className="dashboard-main">
        <div className="dashboard-container">
          <h2>Members</h2>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search members by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="new-member-button" onClick={handleNewMemberClick}>
              Add New Member
            </button>
          </div>
          <table className="members-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Plan</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.length > 0 ? (
                filteredMembers.map((member) => (
                  <tr key={member.id}>
                    <td>
                      {member.name} ({member.planDetail})
                    </td>
                    <td>{member.email}</td>
                    <td>{member.planDetail}</td>
                    <td>
                      <button
                        onClick={() => handleEditClick(member)}
                        className="edit-button"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteMember(member.id)}
                        className="delete-button"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" style={{ textAlign: "center" }}>
                    No members found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
