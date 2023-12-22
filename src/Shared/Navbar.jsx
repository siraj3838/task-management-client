import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navList = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "btn hover:bg-[#eb8d22ec] bg-[#eb8d22ec] border-0 border-b-4 hover:border-gray-600 border-gray-600 text-white font-semibold hover:scale-110 duration-400 transition-all py-2 px-5 rounded-md" : " hover:scale-110 transition-all font-bold text-[#eb8d22ec] mt-2 btn btn-outline hover:bg-transparent hover:text-[#eb8d22ec] duration-400"
            }
        >
            Home
        </NavLink>

    </>
    return (
        <div className="">
            <div className="navbar max-w-screen-xl mx-auto lg:-mt-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navList}
                        </ul>
                    </div>
                    <div className="flex items-center md:gap-96 lg:gap-36">
                        {/* Website Logo */}
                        <Link to={'/'}>
                            <img className="w-44" src="https://i.ibb.co/YPpX4Zw/1694337400-devtown-removebg-preview.png" alt="" />
                        </Link>

                    </div>
                </div>
                <div className="navbar-end hidden md:flex">
                    <ul className="menu menu-horizontal px-1 flex items-center gap-9">
                        {navList}
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Navbar;