import CustomShirtImage from "/images/frontpage/Custom-shirts.png";
export const FeatureSection = () => {
  return (
    <section
      data-aos="zoom-in"
      className="container w-full p-10 flex flex-wrap bg-slate-200 lg:m-auto my-10 mx-3"
    >
      <div className="flex flex-wrap flex-col justify-center py-10 lg:px-20 w-full lg:w-1/2 uppercase">
        <h1 className="text-lg font-semibold my-1">Customize your look</h1>
        <p className="text-sm my-1 leading-8">
          CUSTOMIZE YOUR TEAM’S STYLE WITH OUR GOLF SHIRTS. BLENDING COMFORT AND PERFORMANCE,
          HELPING YOU STAND OUT AT EVERY TOURNAMENT!
        </p>
      </div>
      <img src={CustomShirtImage} alt="Customized Golf Shirts" className="w-full lg:w-1/2" />
    </section>
  );
};
