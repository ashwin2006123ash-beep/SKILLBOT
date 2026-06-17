import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#071A3D] text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-blue-400">
        🚀 SkillBot
      </h1>

      <div className="flex gap-8">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Companies</a>
        <a href="#">Login</a>
      </div>
    </nav>
  );
}

export default Navbar;