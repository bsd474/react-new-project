const Navbar = () => {
    return (
        <nav className="max-w-sm mx-auto my-7">
            <ul className="flex items-center justify-between">
                <li className="hover:text-[#149eca] duration-200">
                    <a href="/">Home</a>
                </li>
                <li className="hover:text-[#149eca] duration-200">
                    <a href="/about">About</a>
                </li>
            </ul>
        </nav>
    );
    }
    export default Navbar;