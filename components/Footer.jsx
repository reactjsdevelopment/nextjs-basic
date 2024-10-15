const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6 border-t border-gray-700"> 
            <div className="container mx-auto text-center">
                <p className="text-sm mb-2">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
                <nav>
                    <ul className="flex justify-center space-x-4"> 
                        <li>
                            <a href="/privacy" className="hover:text-indigo-400">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/terms" className="hover:text-indigo-400">Terms of Service</a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-indigo-400">Contact Us</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
