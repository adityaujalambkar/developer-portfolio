export default function Experience() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto">

          <div className="border-l-4 border-violet-500 pl-8 mb-10">
            <h3 className="text-2xl font-semibold">
              Software Engineer
            </h3>

            <p className="text-violet-400">
              Company Name • 2023 - Present
            </p>

            <ul className="mt-4 text-gray-400 space-y-2">
              <li>
                Developed Spring Boot microservices.
              </li>
              <li>
                Created React dashboards.
              </li>
              <li>
                Optimized MySQL queries.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}