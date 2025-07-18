
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-green-700">Templish</Link>
      <nav className="space-x-4 text-sm font-medium">
        <Link to="/" className="text-gray-700 hover:text-green-700">Home</Link>
        <Link to="/about" className="text-gray-700 hover:text-green-700">About</Link>
        <Link to="/reset" className="text-gray-700 hover:text-green-700">Reset</Link>
        <Link to="/resources" className="text-gray-700 hover:text-green-700">Resources</Link>
        <Link to="/blog" className="text-gray-700 hover:text-green-700">Blog</Link>
      </nav>
    </header>
  );
}
