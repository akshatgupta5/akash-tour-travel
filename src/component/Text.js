// import { useState } from "react";
import React from "react";

export default function Text(props) {
  const normalmode={
    color: props.mode==='light'?'black':'white',
    backgroundColor: props.mode==='light'?'white':'grey',
    borderColor: props.mode==='light'?'black':'white'
  };
  return(
    <>
    {/* <!-- header --> */}
    <header style={normalmode}
      data-aos="fade-left"
      data-aos-delay="50"
      data-aos-easing="ease-in-out-cubic"
    >
      <div className="jumbotron">
        <h1>Discover the World with Our Extraordinary Travel Experiences!</h1>
      </div>
      <p>"Welcome to Our World of Wanderlust and Adventure!

At Akash Tour & Travels, we are thrilled to embark on a journey of exploration and discovery with you. As passionate travelers ourselves, we understand the desire to unravel the mysteries of new lands, immerse ourselves in diverse cultures, and create cherished memories that last a lifetime.

Our dedicated team of travel experts is here to curate unparalleled travel experiences tailored to your unique preferences. From awe-inspiring destinations to carefully crafted itineraries, we strive to bring your dream vacations to life.

Whether you seek thrilling escapades, serene getaways, or cultural encounters, we have a myriad of options to suit every traveler. Choose from our extensive range of tour packages or let us customize an itinerary that aligns perfectly with your desires.

With a commitment to excellence and a relentless pursuit of customer satisfaction, we promise seamless travel arrangements, top-notch services, and utmost attention to detail throughout your journey. Your safety, comfort, and happiness are our utmost priorities, and we leave no stone unturned to ensure you have the time of your life.

So, come join us on an unforgettable expedition, as we invite you to unlock the wonders of the world, one destination at a time. Let the adventures begin!"</p>
    </header>
    {/* <!-- main --> */}
    <main style={normalmode}>
      {/* <!-- services --> */}
      <section id="services">
  <h1>Services</h1>
  <p>Welcome to our premier car rental services! At our agency, we take pride in offering top-notch car rental solutions to suit your every travel need. Whether you prefer a chauffeur-driven experience or the freedom of self-driving, we've got you covered.</p><p>

1. For those who desire a stress-free and comfortable ride, our Cab Rental service provides a fleet of well-maintained cars with professional and experienced drivers. Sit back, relax, and let our skilled chauffeurs take you to your destination while you enjoy the journey.</p><p>

2. If you're an adventurous soul seeking independence and flexibility, our Self-Driving Car Rental is the ideal choice for you. We offer a diverse range of vehicles, from compact cars to spacious SUVs, all equipped with modern features and safety amenities. Explore the scenic routes at your own pace, stop wherever you please, and create your personalized itinerary.</p>
  <div className="row">
    <div
className="col-xs-12 col-sm-4"
data-aos="zoom-in-left"
data-aos-delay="50"
data-aos-easing="ease-in-out-cubic"
    >
      <div className="well well-lg">
        <img src={require("../images/1.jpg")} alt="Card" className="service-image"/>
      </div>
    </div>
    <div
className="col-xs-12 col-sm-4"
data-aos="zoom-in"
data-aos-delay="50"
data-aos-easing="ease-in-out-cubic"
    >
      <div className="well well-lg">
      <img src={require("../images/2.jpg")} alt="Card" className="service-image"/>
      </div>
    </div>
    <div
className="col-xs-12 col-sm-4"
data-aos="zoom-in-right"
data-aos-delay="50"
data-aos-easing="ease-in-out-cubic"
    >
      <div className="well well-lg">
      <img src={require("../images/3.jpg")} alt="Card" className="service-image"/>
      </div>
    </div>
  </div>
</section>

      {/* <!-- contact --> */}
      <section id="contact">
        <h1>Contact</h1>
        <div className="row">
          <div
            className="col-xs-12 col-sm-6 col-md-6"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="50"
            data-aos-easing="ease-in-out-cubic"
          >
            <div className="well well-lg"><img src={require("../images/Card.jpg")} alt="Card" /></div>
          </div>
          <div
            className="col-xs-12 col-sm-6 col-md-6"
            data-aos="fade-down"
            data-aos-duration="3000"
            data-aos-delay="50"
            data-aos-easing="ease-in-out-cubic"
          >
            <div className="well well-lg"><h1>7</h1></div>
          </div>
        </div>
      </section>
    </main>

    {/* <!-- footer --> */}
    <footer data-aos="flip-left" data-aos-easing="ease-out-cubic" style={normalmode}>
      <div className="jumbotron">
        <h1>"Travel with Confidence"</h1>
      </div>
      <p>

Our customer-centric approach ensures that your travel experience is seamless and enjoyable from start to finish. With easy booking processes, transparent pricing, and reliable customer support, we strive to exceed your expectations and provide you with the utmost satisfaction.</p><p>

Whether it's a short trip within the city or an extended adventure to distant destinations, our car rental services promise convenience, comfort, and affordability. Choose our agency for your next journey, and let us be your trusted travel companion on the road. Embrace the joy of travel with us and unlock unforgettable memories on every mile.</p>
    </footer>

    {/* <!-- whatsapp --> */}
    <a
      href="https://wa.me/9876712637?text=Hi there! I'm planning to travel soon and I'm in need of some assistance. Can you help me with information on your available tour packages, destinations, and pricing? I'm interested in exploring new places and experiencing unique adventures. Also, if you have any recommendations for solo travelers or group tours, that would be great! Looking forward to hearing from you. 🌍✈️"
      className="whatsapp_float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa fa-whatsapp whatsapp-icon"></i>
    </a>
    </>
  );
}
