const projects = [
  {
    title: "Trading Application",
    description:
      "Automated trading app using Kite APIs.",
  },
  {
    title: "Document Manager",
    description:
      "Manage home documents securely.",
  },
  {
    title: "Chess Multiplayer",
    description:
      "Realtime multiplayer game with WebSocket.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className=" py-24">
      <div className="container mx-auto px-6">

        <h2 className="text-black text-center text-4xl font-bold mb-16">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#0d0f1a] rounded-2xl p-6"
            >
              <h3 className="text-white text-xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {project.description}
              </p>

              <button className="text-violet-400">
                View Project →
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}