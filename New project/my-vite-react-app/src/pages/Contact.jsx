import React from "react";

function Contact() {
  return (
    <section>
      <h2>Contact us</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
