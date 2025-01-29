import { Carousel, Typography, Rating } from "@material-tailwind/react";
import Test1 from "../../assets/testimonials/test1.jpg";
import Test2 from "../../assets/testimonials/test2.jpg";
import Test3 from "../../assets/testimonials/test3.jpg";
import Test4 from "../../assets/testimonials/test4.jpg";

export default function CarouselTestimonials() {
  return (
    <div className="px-2 pb-2 justify-center items-center">
      <h2 className="text-lg sm:text-xl font-extrabold text-center text-gray-800 mt-5 mb-3">What Our Clients Say</h2>
      <Carousel className="rounded-xl ">
        <div className="relative h-full w-full">
          <img
            src={Test2}
            alt="image 2"
            className="h-80 w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h2"
                color="white"
                className="mb-4 lg:text-xl md:text-lg sm:text-base text-base mt-2"
              >
                "McDonald's Manager. ~ Aurora, CO"
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-5 lg:text-xl md:text-lg sm:text-base text-base opacity-80"
              >
                "Mayor Security Company is our trusted partner for
                ensuring the safety of our retail locations."
              </Typography>
              <Rating className="mb-10" value={5} readonly />
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={Test1}
            alt="image 1"
            className="h-80 w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h2"
                color="white"
                className="mb-4 lg:text-xl md:text-lg sm:text-base text-base mt-2"
              >
                "Lowes Manager. ~ Denver, CO"
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-5 lg:text-xl md:text-lg sm:text-base text-base opacity-80"
              >
                "Mayor Security LLC delivers comprehensive
                security services for our premises with
                professionalism and adaptability."
              </Typography>
              <Rating className="mb-10" value={5} readonly />
            </div>
          </div>
        </div>

        <div className="relative h-full w-full">
          <img
            src={Test3}
            alt="image 3"
            className="h-80 w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h2"
                color="white"
                className="mb-4 lg:text-xl md:text-lg sm:text-base text-base mt-2"
              >
                "Marq Iliff Manager. ~ Aurora, CO"
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-5 lg:text-xl md:text-lg sm:text-base text-sm opacity-80"
              >
                "Mayor Security company maintains a safe
                environment for our residents at Marq Iliff
                Apartments."
              </Typography>
              <Rating className="mb-10" value={5} readonly />
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={Test4}
            alt="image 4"
            className="h-80 w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h2"
                color="white"
                className="mb-4 lg:text-xl md:text-lg sm:text-base text-base mt-2"
              >
                "Angels Jewelry Manager. ~ Aurora, CO"
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-5 lg:text-xl md:text-lg sm:text-base text-sm opacity-80"
              >
                "Mayor Security Company's guards have been instrumental in
                safeguarding our jewelry store. Their professionalism and
                vigilance provide reassurance to both our staff and customers,
                ensuring a secure shopping environment."
              </Typography>
              <Rating className="mb-10" value={5} readonly />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}