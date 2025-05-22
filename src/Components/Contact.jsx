import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function ContactPage() {
  return (
    <div className="container py-4">
    <h2 className="text-center fw-bold">Contact Us</h2>
    <div className="row mt-4">
      {/* Contact Details */}
      <div className="col-md-5 text-light bg-dark p-4 rounded">
        <div className="mb-4 d-flex align-items-center">
          <i className="fas fa-map-marker-alt fa-2x me-3 text-primary"></i>
          <div>
            <h5 className="fw-bold">Address</h5>
            <p>4671 Sugar Camp Road, Owatonna, Minnesota, 55060</p>
          </div>
        </div>
        <div className="mb-4 d-flex align-items-center">
          <i className="fas fa-phone-alt fa-2x me-3 text-success"></i>
          <div>
            <h5 className="fw-bold">Phone</h5>
            <p>571-457-2321</p>
          </div>
        </div>
        <div className="mb-4 d-flex align-items-center">
          <i className="fas fa-envelope fa-2x me-3 text-warning"></i>
          <div>
            <h5 className="fw-bold">Email</h5>
            <p>ntamerwoal@imfano.ga</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="col-md-6 mt-5">
        <div className="bg-white p-4 shadow rounded">
          <h4 className="fw-bold">Send Message</h4>
          <form>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Full Name" required />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Email" required />
            </div>
            <div className="mb-3">
              <input type="number" className="form-control" placeholder="Phone Number" required />
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="3" placeholder="Type your Message..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              <i className="fas fa-paper-plane me-2"></i> Send
            </button>
          </form>
        </div>
      </div>
    </div>


      {/* Embedded Google Map */}
      <div className="row mt-0">
        <div className="col">
          <h2 className="text-center mb-3 mt-3">Our Location</h2>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.9537353153166!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d2fed4f5b6e1!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1625070000000!5m2!1sen!2sus"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;