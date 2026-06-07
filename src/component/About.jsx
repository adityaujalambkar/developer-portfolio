export default function About() {
  return (
    <section
      id="about"
      className="bg-white text-white py-24"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-3xl text-black font-bold uppercase tracking-wider mb-4">
              About Me
            </p>

            <h2 className="text-4xl text-violet-900 font-bold mb-6">
              Java Full Stack Developer
            </h2>

            <p className="text-black leading-8">
              I have 2+ years of experience building scalable
              applications using Java, Spring Boot, React,
              MySQL and REST APIs.

              I enjoy solving business problems and creating
              clean user experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-900 p-6 rounded-xl">
              <h3 className="text-violet-400 text-3xl font-bold">
                2+
              </h3>
              <p>Years Experience</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h3 className="text-violet-400 text-3xl font-bold">
                10+
              </h3>
              <p>Projects</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h3 className="text-violet-400 text-3xl font-bold">
                100+
              </h3>
              <p>DSA Problems</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h3 className="text-violet-400 text-3xl font-bold">
                5+
              </h3>
              <p>Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}