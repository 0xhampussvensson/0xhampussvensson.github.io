import { Button } from "@/components/ui/button";
import { motion, useScroll } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react"; // icona a tua scelta

const Hero = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Scroll indicator */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          originX: 0,
          backgroundColor: "#0066FF",
          zIndex: 50,
        }}
      />

      <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-white pt-32 pb-24 md:pt-40 md:pb-32">
        {/* Contenuto Hero */}
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-3 text-sm text-gray-500 md:text-base"
          >
            Industrial Engineering & Management
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl"
          >
            Hampus Svensson
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mx-auto mt-5 max-w-2xl text-lg text-gray-600 md:text-xl"
          >
            Quality-focused engineer crafting efficient systems and data-driven
            solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a href="#projects">
              <Button
                size="lg"
                className="transition-transform duration-300 hover:scale-105"
              >
                View Projects
              </Button>
            </a>
            <a href="#contact">
              <Button
                variant="outline"
                size="lg"
                className="transition-transform duration-300 hover:scale-105"
              >
                Contact
              </Button>
            </a>
          </motion.div>
          <a href="mailto:hampus.svensson@outlook.com">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-xl mx-auto cursor-pointer hover:bg-blue-100 transition-colors"
            >
              <div className="text-center sm:text-left">
                <p className="text-gray-700 font-medium">
                  Interested in my Master's thesis on nuclear district heating?
                  <p className="text-gray-500 text-sm mt-1 ">
                    Contact me via email!
                  </p>
                </p>
              </div>
              <ExternalLink className="w-6 h-6 text-blue-600" />
            </motion.div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
