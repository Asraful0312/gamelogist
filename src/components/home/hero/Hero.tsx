import { ChevronDown } from "lucide-react";
import Wrapper from "../../shared/Wrapper";
import styles from "./style.module.css";

const Hero = () => {
  return (
    <section className="w-full relative h-[90vh] md:h-[70vh] lg:h-[80vh] xl:h-[100vh]">
      <video
        className="w-full h-full object-cover"
        src="/hero.mp4"
        autoPlay
        muted
        loop
      ></video>

      <div className="absolute inset-0 bg-black/30">
        <Wrapper className="flex items-center flex-col md:flex-row mt-32 md:mt-44 gap-36 justify-center">
          <div className="w-full max-w-2xl flex flex-col items-center">
            <h1 className="text-3xl leading-9 text-white text-center font-bold">
              BROWSE AND DISCOVER THOUSANDS OF{" "}
              <span className="text-blue-200">GAMES</span> TO PLAY TODAY
            </h1>

            <p className="text-muted-foreground my-6 text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
              repudiandae magni earum tempora officia soluta! Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Optio, quisquam! Laborum
              tenetur enim voluptatem, repellendus corporis, magnam ex veniam
              culpa dicta dolore nemo voluptas, esse repudiandae dolorem numquam
              veritatis accusantium.
            </p>

            <button className={styles.glowingBtn}>
              <span className="glowing-txt">
                DISC<span className="faulty-letter">OVER</span> NOW
              </span>
            </button>

            <ChevronDown className="text-white animate-bounce mt-14 rounded-full size-8 outline outline-blue-200 p-1 shrink-0" />
          </div>
        </Wrapper>
      </div>
    </section>
  );
};

export default Hero;
