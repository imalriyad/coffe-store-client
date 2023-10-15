const About = () => {
  const services = [
    "Premium Coffee Blends",
    "Freshly Baked Pastries",
    "Cozy Atmosphere",
    "Friendly Baristas",
  ];

  return (
    <div className="px-4 max-w-xl mx-auto">
      <h1 className="md:text-4xl text-3xl text-center my-10 font-semibold">
        About Espresso Emporium
      </h1>
      <p>
        At Espresso Emporium, we are passionate about delivering the finest
        coffee experience to our customers. Our store is a haven for coffee
        lovers, providing a handpicked selection of premium coffee blends,
        freshly baked pastries, and a warm and inviting atmosphere.
      </p>
      <p className="md:block mt-5 mb-14 hidden">
        <span className="text-2xl font-semibold">In Conclusion: </span>
        Espresso Emporium is your go-to destination for a coffee experience like
        no other. Our dedicated team of baristas ensures you get the perfect
        brew every time. Whether you are looking for a cozy place to relax or a
        quick coffee fix on the go, Espresso Emporium is here to satisfy your
        coffee cravings.
      </p>
      <p>
        <h1 className="text-2xl my-5 md:text-4xl font-semibold">
          Services We Provide
        </h1>
        {services.map((service) => {
          return (
            <li key={service} className="mt-3">
              {service}
            </li>
          );
        })}
      </p>
    </div>
  );
};

export default About;
