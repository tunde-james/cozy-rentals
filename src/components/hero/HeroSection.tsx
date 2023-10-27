import Image from "next/image";
import Navbar from "../navbar/Navbar";

function HeroSection() {
  return (
    <header className="h-[600px] w-full bg-[url('/images/hero_image.webp')] bg-cover bg-no-repeat object-contain">
      <section className="h-full w-full bg-slate-600/10 backdrop-brightness-75">
        <Navbar />

        <div className="container mt-10 flex flex-col items-center justify-center px-5 md:px-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center text-3xl font-bold text-white sm:w-[384px] sm:text-start sm:text-4xl">
            The most affortable place to stay in the san franciso bay area
          </p>

          <div className="flex flex-col items-center justify-center">
            <Image src="/images/map.png" alt="" width={300} height={300} />

            <form className="flex bg-white px-6 pt-2">
              <div className="flex bg-surface1-light">
                <select
                  name=""
                  id=""
                  className="border-r border-r-gray-500 bg-surface1-light"
                >
                  <option value="" className="">
                    all type
                  </option>
                </select>

                <select
                  name=""
                  id=""
                  className="border-r border-r-gray-500 bg-surface1-light"
                >
                  <option value="" className="">
                    neighbourhood
                  </option>
                </select>

                <button className="text-black">Q</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </header>
  );
}

export default HeroSection;
