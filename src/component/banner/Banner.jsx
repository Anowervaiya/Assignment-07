
import image from '../../assets/shape.png';
function Banner(params) {
  return (
    <div
      class="hero min-h-[400px] md:min-h-[700px]   rounded-2xl "
      style={{
        backgroundImage: `url(${image})`,
        backgroundColor: 'black',
      }}
    >
      <div class="hero-overlay rounded-2xl bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-2xl">
          <h1 class="mb-5 text-3xl lg:text-5xl font-bold">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p class="mb-5">
            Embarking on a journey to learn cooking opens doors to creativity
            and nourishment. With each recipe mastered, one gains culinary
            confidence, enriching not only meals but also life's experiences and
            connections.
          </p>
          <button class="btn rounded-full btn-primary hover:bg-inherit mr-4">
            Explore Now
          </button>
          <button className="btn rounded-full bg-inherit text-white hover:bg-inherit">
            Our FeedBack
          </button>
        </div>
      </div>
    </div>
  );
}
export default Banner;