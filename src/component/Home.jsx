import Navbar from "./Navbar";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


import {
  
} from "lucide-react";



function Home(){

return (<section className="min-h-screen text-white overflow-hidden" >
              <Navbar />
         <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between  lg:pt-24">

              <div className="max-w-xl">
                <p className="text-violet-900 tracking-widest uppercase mb-4">
                Hello, I'm
              </p>

          <h1 className="text-5xl text-black md:text-7xl font-bold mb-4">
            Aditya Ujalambkar
          </h1>

          <h2 className="text-3xl md:text-5xl font-semibold text-violet-900 mb-6">
            Java Full Stack Developer
          </h2>

          <p className="text-gray-900 text-lg leading-relaxed mb-8">
            I build scalable Spring Boot applications and modern
            React frontends that solve real-world business problems.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <button className="bg-violet-600 hover:bg-violet-700 px-8 py-4 rounded-xl font-medium transition">
              View Projects
            </button>

            <button className="border text-black border-gray-600 hover:border-violet-500 px-8 py-4 rounded-xl transition">
              Contact Me
            </button>
          </div>
          {/* Social Links */}
          <div className="flex gap-8 text-2xl">
              <FaGithub href="github.com/nexadew2"/>
              <FaLinkedin />
              <FaEnvelope />
          </div>
                    </div>

          <div className="relative mt-4 lg:mt-0">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-yellow-600 blur-[120px] opacity-30 rounded-full" />

          <img
            src="/public/aditya_developer.png"
            alt="Developer"
            className="relative w-[700px] md:w-[700px] object-cover"
          />
        </div>

        </div>
        </section>
)

}

export default Home;