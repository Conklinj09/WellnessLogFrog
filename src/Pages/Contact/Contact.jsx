import React from "react";
import "./Contact.css";

function Contact() {
    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <p>
                Have any questions, feedback, or need support? Reach out to us!
            </p>
            <div className="contact-details">
                <p>📧 Email: support@wellnesslogfrog.com</p>
                <p>📍 Location: Deep within the Lush Green Forest 🌿</p>
            </div>
            <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" rows="4" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;
