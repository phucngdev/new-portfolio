import React from "react";
import image from "../../public/image.jpg";

const Home = () => {
  return (
    <>
      <main className="container mx-auto">
        <section className="flex items-center justify-center gap-5">
          <div className="">
            <img
              src={image}
              alt=""
              className="h-[300px] w-full max-w-[300px] rounded-lg bg-cover bg-center bg-no-repeat sm:h-[400px] sm:max-w-[400px] md:h-[450px] md:max-w-[450px] lg:h-[500px]"
            />
          </div>
          <div className="flex flex-col">
            <span class="xl:text-7xl animate-gradient bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.green.500),theme(colors.sky.400),theme(colors.yellow.200),theme(colors.sky.400),theme(colors.green.200),theme(colors.green.300))] bg-[length:200%_auto] bg-clip-text text-3xl font-bold tracking-tighter text-transparent">
              Frontend Development
            </span>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
