// import "./About.css";

// function AboutSection() {
//   return (
//     <section className="about">

//       <div className="container">

//         {/* TOP */}
//         <div className="row">
//           <div className="left">
//             <h2>
//               Tomorrow should <br />
//               be better than <span className="green">today</span>
//             </h2>
//             <p>
//               We are a team of strategists, designers, communicators,
//               researchers. Together, we believe that progress only happens
//               when you refuse to play things safe.
//             </p>
//             <button className="read-btn">Read More →</button>
//           </div>

//           <div className="right">
//             <div className="circle">
//               <img
//                 src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80"
//                 alt="team"
//               />
//             </div>
//             <div className="triangle t1"></div>
//           </div>
//         </div>

//         {/* BOTTOM */}
//         <div className="row reverse">
//           <div className="right">
//             <div className="circle">
//               <img
//                 src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
//                 alt="team"
//               />
//             </div>
//             <div className="triangle t2"></div>
//           </div>

//           <div className="left">
//             <h2>
//               <span className="green">See</span>{" "}
//               how we can <br />
//               help you <span className="underline">progress</span>
//             </h2>
//             <p>
//               We add a layer of fearless insights and action that allows
//               change makers to accelerate their progress in areas such as
//               brand, design digital, comms and social research.
//             </p>
//             <button className="read-btn">Read more →</button>
//           </div>
//         </div>

//       </div>

//       {/* CURVE SVG */}
//       <svg className="curve" viewBox="0 0 900 400" fill="none">
//         <path
//           d="M 0 370 C 250 450, 500 100, 700 200 S 850 80, 900 120"
//           stroke="#ff5c5c"
//           strokeWidth="2.5"
//           fill="none"
//           strokeLinecap="round"
//         />
//       </svg>

//     </section>
//   );
// }

// export default AboutSection;

import "./About.css";

/* 🔥 Reusable Block Component */
function AboutBlock({ title, text, image, reverse }) {
  return (
    <div className={`row ${reverse ? "reverse" : ""}`}>

      {/* TEXT */}
      <div className="left">
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
        <p>{text}</p>
        <button className="read-btn">Read more →</button>
      </div>

      {/* IMAGE */}
      <div className="right">
        <div className="circle">
          <img src={image} alt="about section" />
        </div>

        {/* triangle condition */}
        {!reverse && <div className="triangle t1"></div>}
        {reverse && <div className="triangle t2"></div>}
      </div>

    </div>
  );
}

function AboutSection() {
  return (
    <section className="about">

      <div className="container">

        <AboutBlock
          title={`Tomorrow should <br /> be better than <span class="green">today</span>`}
          text="We are a team of strategists, designers, communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe."
          image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80"
        />

        <AboutBlock
          reverse
          title={`<span class="green">See</span> how we can <br /> help you <span class="underline">progress</span>`}
          text="We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design, digital, comms and social research."
          image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
        />

      </div>

      {/* CURVE */}
      <svg className="curve" viewBox="0 0 900 400">
        <path
          d="M 0 370 C 250 450, 500 100, 700 200 S 850 80, 900 120"
          stroke="#ff5c5c"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

    </section>
  );
}

export default AboutSection;