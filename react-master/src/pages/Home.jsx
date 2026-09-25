import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center">

      <div className="text-center max-w-3xl px-4">

        <h1 className="text-5xl font-bold text-orange-600">
          Student Project Hub
        </h1>

        <p className="text-xl text-gray-700 mt-4">
          Find. Collaborate. Build.
        </p>

        <p className="text-gray-600 mt-6">
          Connect with students, discover exciting projects,
          build strong teams, and turn ideas into reality.
        </p>

        <div className="flex justify-center gap-4 mt-2">

          <Link
            to="/projects"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
          >
            Browse Projects
          </Link>

          <Link
            to="/CreateProject"
            className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-100"
          >
            Create Project
          </Link>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-orange-600">
            120+
          </h2>
          <p className="text-gray-600 mt-2">
            Students
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-orange-600">
            35+
          </h2>
          <p className="text-gray-600 mt-2">
            Projects
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-orange-600">
            18+
          </h2>
          <p className="text-gray-600 mt-2">
            Teams
          </p>
        </div>

      </div>
      <div className="mt-10">

    <h2 className="text-2xl font-bold text-center text-orange-600">
      Why Use Student Project Hub?
    </h2>

    <div className="grid md:grid-cols-3 gap-4 mt-7">

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold">
          🔍 Find Projects
        </h3>

        <p className="text-gray-600 mt-2">
          Discover projects that match your skills and interests.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold">
          🤝 Build Teams
        </h3>

        <p className="text-gray-600 mt-2">
          Connect with students and form strong project teams.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold">
          🏆 Gain Experience
        </h3>

        <p className="text-gray-600 mt-2">
          Work on real projects and improve your portfolio.
        </p>
      </div>
      

  </div>
  <div className="text-center mt-20">

  <h2 className="text-3xl font-bold text-orange-600">
    Ready to Build Something Amazing?
  </h2>

  <p className="text-gray-600 mt-3">
    Join projects, find teammates, and bring ideas to life.
  </p>

  <Link
    to="/CreateProject"
    className="inline-block mt-6 bg-orange-500 text-white px-8 py-3 rounded-lg"
  >
    Get Started
  </Link>

</div>

</div>

      </div>
      

    </div>
  );
}

export default Home;