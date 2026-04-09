import "./Testimonial.css";

function Testimonial() {
  return (
    <section className="testimonial">

      {/* Heading */}
      <h2 className="t-heading">
        <span className="highlight">What</span> our customer <br />
        says <span className="underline">About Us</span>
      </h2>

      {/* Card */}
      <div className="t-card">
        <p>
          Elementum delivered the site within the timeline as they requested.
          In the end, the client found a 50% increase in traffic within days since
          its launch. They also had an impressive ability to use technologies that
          the company hasn't used, which have also proved to be easy to use and reliable
        </p>
      </div>

      {/* Floating Images */}
      <img className="t-img img1" src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
      <img className="t-img img2" src="https://randomuser.me/api/portraits/women/44.jpg" alt="" />
      <img className="t-img img3" src="https://randomuser.me/api/portraits/men/67.jpg" alt="" />
      <img className="t-img img4" src="https://randomuser.me/api/portraits/women/68.jpg" alt="" />
      <img className="t-img img5" src="https://randomuser.me/api/portraits/men/41.jpg" alt="" />
      <img className="t-img img6" src="https://randomuser.me/api/portraits/women/12.jpg" alt="user" />
     <img className="t-img img7" src="https://randomuser.me/api/portraits/men/22.jpg" alt="user" />
     <img className="t-img img8" src="https://randomuser.me/api/portraits/women/33.jpg" alt="user" />
     <img className="t-img img9" src="https://randomuser.me/api/portraits/men/55.jpg" alt="user" />

    </section>
  );
}

export default Testimonial;