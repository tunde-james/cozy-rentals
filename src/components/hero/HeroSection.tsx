import Image from "next/image";
import Navbar from "../navbar/Navbar";

function HeroSection() {
  return (
    <header className="h-[790px] w-full bg-[url('/images/hero_image.webp')] object-contain">
      <section className="h-full w-full bg-slate-600/30 p-3 backdrop-brightness-75 sm:mx-auto sm:max-w-[75rem] sm:p-8">
        <Navbar />

        <div className="flex flex-col items-center justify-center sm:w-[584px] sm:flex-row sm:justify-between ">
          <p className="my-7 text-center text-2xl font-bold text-white sm:text-[52px]">
            The most affortable place to stay in the san franciso bay area
          </p>

          <div className="flex flex-col items-center justify-center">
            <div>
              <Image
                src="/images/map.png"
                alt="A map"
                width={408}
                height={440}
              />
            </div>

            <form className="rounded-md bg-white">
              <div className="rounded-3xl border-gray-600">
                <select className="border-r border-gray-400 p-3">
                  <option>all type</option>
                </select>

                <select className="border-r border-gray-400 p-3">
                  <option>neighborhood</option>
                </select>

                <button>🔍</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </header>
  );
}

export default HeroSection;
