import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
    return (
        <>
            <nav className="grid grid-cols-3 my-2 ml-28 mr-28">
                <div>
                    <h3 style={{fontWeight:'700'}} className="my-3 text-2xl">Recipe Calories</h3>
                </div>
                <div className="flex justify-evenly ">
                    <a href="#" className="hover:bg-gray-300 transition py-3 px-4 rounded-2xl">Home</a>
                    <a href="#" className="hover:bg-gray-300 transition py-3 px-4 rounded-2xl">Recipe</a>
                    <a href="#"className="hover:bg-gray-300 transition py-3 px-4 rounded-2xl">About</a>
                </div>
                <div className="flex justify-end">
                    <div className="relative">
                        <button className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <FaSearch className="text-gray-500" />
                        </button>
                        <input
                            type="search"
                            placeholder="Search"
                            className="pl-20 w-64 h-12 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button className="ml-4 h-12 w-12 flex items-center justify-center bg-green-400 rounded-full">
                        <CgProfile className="h-8 w-8" />
                    </button>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
