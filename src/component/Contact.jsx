import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="container mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Let's Work Together
        </h2>

        <p className="text-gray-400 mb-10">
          Open to Full Stack Developer opportunities.
        </p>

        <div className="flex justify-center gap-8 text-3xl">
          <FaGithub />
          <FaLinkedin />
          <FaEnvelope />
        </div>
      </div>
    </section>
  );
}