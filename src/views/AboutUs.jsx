import React from 'react';

export default function AboutUs() {
  return (
    <div className="aoubt-container">
      <section className="text-center mt-4">
        <h1>ABOUT US</h1>
      </section>
      <section className="text-center mt-4">
        <h3>OUR MISSION</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam fugiat voluptate eveniet ex, possimus dicta non. Asperiores neque incidunt, ducimus dolore accusantium quis ullam nostrum, qui
          harum dignissimos omnis odio.
        </p>
      </section>
      <section className="text-center mt-4">
        <h3>OUR HISTORY</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos porro eius magni odio sed dolorem natus dolore eveniet atque quod sapiente repellendus ex optio nesciunt ab facere modi,
          numquam itaque.
        </p>
      </section>
      <section className="text-center mt-4">
        <h3>OUR TEAM</h3>
        <div className="team-members">
          <div className="team-card">
            <img src="src\assets\m1.jpg" alt="Team Member 1" className="team-photo" />
            <h4 className="team-name">Amirul Momin</h4>
            <p className="team-position">Founder & Director</p>
          </div>
          <div className="team-card">
            <img src="src\assets\m2.jpg" alt="Team Member 2" className="team-photo" />
            <h4 className="team-name">Tanvir Arif</h4>
            <p className="team-position">Adoption Coordinator</p>
          </div>
          <div className="team-card">
            <img src="src\assets\m3.jpg" alt="Team Member 3" className="team-photo" />
            <h4 className="team-name">Eusha Ahmed</h4>
            <p className="team-position">Veterinary Specialist</p>
          </div>
        </div>
      </section>
    </div>
  );
}
