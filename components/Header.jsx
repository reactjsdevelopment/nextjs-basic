import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-gray-900 text-white py-4 shadow-lg"> 
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">MyApp</h1>
                <nav>
                    <ul className="flex space-x-6"> 
                        <li>
                            <Link href="/" className="hover:text-indigo-400">Home</Link> 
                        </li>
                        <li>
                            <Link href="/signin" className="hover:text-indigo-400">Sign In</Link>
                        </li>
                        <li>
                            <Link href="/signup" className="hover:text-indigo-400">Sign Up</Link>
                        </li>
                        <li>
                            <Link href="/calories_deficit_calculator" className="hover:text-indigo-400">Calories Deficit Calculator</Link> 
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
