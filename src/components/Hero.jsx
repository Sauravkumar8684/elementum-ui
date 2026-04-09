import "./Hero.css";

const avatars = [
  { id: 1, src: "https://randomuser.me/api/portraits/men/11.jpg", class: "a1" },
  { id: 2, src: "https://randomuser.me/api/portraits/men/32.jpg", class: "a2" },
  { id: 3, src: "https://randomuser.me/api/portraits/women/44.jpg", class: "a3" },
  { id: 4, src: "https://randomuser.me/api/portraits/men/67.jpg", class: "a4" },
  { id: 5, src: "https://randomuser.me/api/portraits/women/68.jpg", class: "a5" },
  { id: 6, src: "https://randomuser.me/api/portraits/men/41.jpg", class: "a6" },
  { id: 7, src: "https://randomuser.me/api/portraits/men/55.jpg", class: "a7" },
  { id: 8, src: "https://randomuser.me/api/portraits/women/33.jpg", class: "a8" },
];

function Hero() {
  return (
    <section className="hero">

      {/* LEFT SHAPE */}
      <div className="hero-shape"></div>

      {/* TEXT */}
      <div className="hero-content">
        <h1>
          The <span className="underline">thinkers</span> and <br />
          doers were <span className="pink">changing</span> <br />
          the <span className="green">status</span> Quo with
        </h1>

        <p>
          We are a team of strategists, designers, communicators,
          researchers. Together, we believe that progress only
          happens when you refuse to play things safe.
        </p>
      </div>

      {/* AVATARS */}
      {avatars.map((img) => (
        <img
          key={img.id}
          src={img.src}
          className={`avatar ${img.class}`}
          alt="user"
        />
      ))}

    </section>
  );
}

export default Hero;