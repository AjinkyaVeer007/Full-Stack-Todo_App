import { useNavigate } from "react-router-dom";
import { RiMastodonLine } from "react-icons/ri";

function Navbar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear("token");
    navigate("/");
  };

  return (
    <header className="text-gray-600 body-font bg-blue-500">
      <div className="container mx-auto flex flex-wrap justify-between p-2 flex-col md:flex-row items-center">
        <div className="flex justify-center items-center gap-4">
          <RiMastodonLine size="50px" style={{ color: "white" }} />
          <h1 className="text-white font-bold text-2xl">Todo</h1>
        </div>
        <button
          onClick={logout}
          className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 font-bold"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Navbar;
