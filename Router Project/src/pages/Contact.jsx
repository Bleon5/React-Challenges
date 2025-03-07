import React from "react";

function Contact() {
  return (
    <section>
      <h2>Contact Us</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="eamil" id="eamil" name="email" />
        </div>
        <div>
          <label htmlFor="mesasge">Message</label>
          <textarea id="message" name="message" />
        </div>
        <button type="sumbit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
