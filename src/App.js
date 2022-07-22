import logo from './logo.svg';
import './App.css';
import { HeroImage, Portofolio } from './components/home';

function App() {
  return (
    <div className="App">
      <header className="fixed left-0 right-0 shadow w-full z-10 bg-white">
        <div className="container mx-auto py-3">
          <ul className="flex space-x-3">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">Demo</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Portofolio</a>
            </li>
          </ul>
        </div>
      </header>

      <div className="fixed z-20 bg-white rounded-md shadow right-0 top-1/2 -translate-y-1/2">
        <ul>
          <li className="border-b border-gray-100">
            <a href="#" className="px-4 py-2 flex hover:text-green-500">
              1
            </a>
          </li>
          <li className="border-b border-gray-100">
            <a href="#" className="px-4 py-2 flex hover:text-green-500">
              2
            </a>
          </li>
          <li className="border-b border-gray-100">
            <a href="#" className="px-4 py-2 flex hover:text-green-500">
              3
            </a>
          </li>
          <li className="border-b border-gray-100">
            <a href="#" className="px-4 py-2 flex hover:text-green-500">
              4
            </a>
          </li>
          <li className="border-b border-gray-100">
            <a href="#" className="px-4 py-2 flex hover:text-green-500">
              5
            </a>
          </li>
          <li>
            <a href="#" className="px-4 py-2 flex hover:text-green-500">
              6
            </a>
          </li>
        </ul>
      </div>

      <HeroImage />
      <Portofolio />
    </div>
  );
}

export default App;
