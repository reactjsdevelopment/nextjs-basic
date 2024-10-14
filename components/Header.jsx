// components/Header.jsx
import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-gray-900 text-white py-4 shadow-lg"> {/* Updated background color */}
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">MyApp</h1> {/* Increased font size for better visibility */}
                <nav>
                    <ul className="flex space-x-6"> {/* Increased spacing between links */}
                        <li>
                            <Link href="/" className="hover:text-indigo-400">Home</Link> {/* Added hover effect */}
                        </li>
                        <li>
                            <Link href="/signin" className="hover:text-indigo-400">Sign In</Link>
                        </li>
                        <li>
                            <Link href="/signup" className="hover:text-indigo-400">Sign Up</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
