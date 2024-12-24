import React from 'react';
import { jsPDF } from 'jspdf'; 
import './GenerateInvoiceForm.css';

const GenerateInvoiceForm = ({ memberData }) => {
  // Function to generate and download the invoice as PDF
  const generateInvoicePDF = () => {
    const doc = new jsPDF();

    
    doc.setFontSize(20);
    doc.text('Invoice for Member', 20, 20);

    
    doc.setFontSize(14);
    doc.text(`Name: ${memberData?.name}`, 20, 40);
    doc.text(`Email: ${memberData?.email}`, 20, 50);
    doc.text(`Mobile: ${memberData?.mobile}`, 20, 60);
    doc.text(`Address: ${memberData?.address}`, 20, 70);
    doc.text(`Plan Detail: ${memberData?.planDetail}`, 20, 80);
    doc.text(`Duration: ${memberData?.duration}`, 20, 90);
    doc.text(`Start Date: ${memberData?.startDate}`, 20, 100);
    doc.text(`End Date: ${memberData?.endDate}`, 20, 110);
    doc.text(`Gender: ${memberData?.gender}`, 20, 120);

    
    if (memberData?.image) {
      const imgWidth = 40; 
      const imgHeight = 40; 
      const x = 160;
      const y = 20; 

    
      doc.addImage(memberData.image, 'JPEG', x, y, imgWidth, imgHeight);
    } else {
      doc.setFontSize(12);
      doc.text('No photo available.', 160, 40); 
    }

  
    doc.save('invoice.pdf');
  };

  
  const printInvoice = () => {
    window.print();
  };

  
  const sendInvoice = () => {
    const emailSubject = 'Your Invoice';
    const emailBody = `Dear ${memberData?.name},\n\nPlease find attached your invoice details.\n\nThank you!`;

   
    window.location.href = `mailto:?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <div className="generate-invoice-form">
      <header className="form-header">
        <h1>Generate Invoice</h1>
        <div className="admin-info">
          <span>admin@gmail.com</span>
        </div>
      </header>
      <main>
        <form className="form-container">
          <div className="image-section">
            <div className="image-preview-container">
              {memberData?.image ? (
                <img src={memberData.image} alt="Preview" className="image-preview" />
              ) : (
                <div className="image-placeholder">No image selected</div>
              )}
            </div>
          </div>
          <div className="form-grid">
            <label>
              Name:
              <input type="text" value={memberData?.name || ''} readOnly />
            </label>
            <label>
              Email:
              <input type="text" value={memberData?.email || ''} readOnly />
            </label>
            <label>
              Mobile No.:
              <input type="text" value={memberData?.mobile || ''} readOnly />
            </label>
            <label>
              Address:
              <input type="text" value={memberData?.address || ''} readOnly />
            </label>
            <label>
              Plan Detail:
              <input type="text" value={memberData?.planDetail || ''} readOnly />
            </label>
            <label>
              Duration:
              <input type="text" value={memberData?.duration || ''} readOnly />
            </label>
            <label>
              Start Date:
              <input type="text" value={memberData?.startDate || ''} readOnly />
            </label>
            <label>
              End Date:
              <input type="text" value={memberData?.endDate || ''} readOnly />
            </label>
            <div>
              Gender:
              <span>{memberData?.gender}</span>
            </div>
          </div>
          <div className="button-group">
            <button type="button" className="submit-button" onClick={generateInvoicePDF}>
              Save as PDF
            </button>
            <button type="button" className="print-button" onClick={printInvoice}>
              Print
            </button>
            <button type="button" className="send-button" onClick={sendInvoice}>
              Send Invoice
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default GenerateInvoiceForm;

