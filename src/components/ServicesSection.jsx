import "./Services.css";

const servicesData = [
  {
    id: 1,
    label: "Office of multiple interest content",
    title: "Collaborative & partnership",
  },
  {
    id: 2,
    label: "The hanger US Air force digital experimental",
    title: "We talk about our weight",
  },
  {
    id: 3,
    label: "Delta faucet content, social, digital",
    title: "Piloting digital confidence",
  },
];

function Services() {
  const handleClick = (title) => {
    console.log("Clicked:", title);
  };

  return (
    <section className="services">

      {/* CURVE */}
      <svg className="services__curve" viewBox="0 0 600 280">
        <path
          d="M 600 30 C 450 20, 320 180, 200 140 S 80 260, 0 220"
          stroke="#ff5c5c"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* HEADING */}
      <h1 className="services__heading">
        What we <span className="highlight">can</span><br />
        <span className="offer">
          <span className="underline">offer</span> you!
        </span>
      </h1>

      <hr className="services__divider" />

      {/* LIST */}
      <ul className="services__list">
        {servicesData.map((item) => (
          <li className="services__item" key={item.id}>
            
            <button
              className="services__btn"
              onClick={() => handleClick(item.title)}
            >
              <span className="services__label">{item.label}</span>

              <span className="services__title">{item.title}</span>

              <span className="services__arrow">→</span>
            </button>

          </li>
        ))}
      </ul>

    </section>
  );
}

export default Services;