import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter">

      {/* TOP */}
      <div className="news-top">
        <h2>
          Subscribe to <br />
          our newsletter
        </h2>

        <p>
          To make your stay special and even more memorable
        </p>

        <button className="subscribe-btn">Subscribe Now</button>
      </div>

      {/* DIVIDER */}
      <hr />

      {/* FOOTER */}
      <div className="footer">

        <div>
          <h4>Company</h4>
          <p>Home</p>
          <p>Studio</p>
          <p>Service</p>
          <p>Blog</p>
        </div>

        <div>
          <h4>Terms & Policies</h4>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Explore</p>
          <p>Accessibility</p>
        </div>

        <div>
          <h4>Follow Us</h4>
          <p>Instagram</p>
          <p>LinkedIn</p>
          <p>Youtube</p>
          <p>Twitter</p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>1498w Fulton ste, STE 2D Chicago, IL 63867.</p>
          <p>(123) 456789000</p>
          <p>info@elementum.com</p>
        </div>

      </div>

    </section>
  );
}

export default Newsletter;