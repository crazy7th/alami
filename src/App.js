import logo from './logo.svg';
import './App.css';
import { HeroImage, Portofolio } from './components/home';

function App() {
  return (
    <div className="App">
      <header className="fixed left-0 right-0 shadow w-full z-10 bg-white">
        <div className="container mx-auto px-4 py-3 flex justify-end">
          <div className="flex-1 flex items-center">
            <div className="mr-16">
              <a href="/" className="hover:text-[#F57D85]">
                <div className="bg-[#404040] w-32 h-8 drop-shadow"/>
              </a>
            </div>
            <ul className="flex items-center space-x-6">
              <li>
                <div className="relative">
                    <button className="peer py-2 hover:text-[#F57D85] flex items-center">
                      Demos ▾
                    </button>
                    
                    <div className="absolute hidden peer-hover:flex hover:flex
                    w-[200px] flex-col bg-white drop-shadow-lg">
                        <a className="px-5 py-3 hover:bg-gray-200" href="#">Demos 1</a>
                        <a className="px-5 py-3 hover:bg-gray-200" href="#">Demos 2</a>
                        <a className="px-5 py-3 hover:bg-gray-200" href="#">Demos 3</a>
                        <a className="px-5 py-3 hover:bg-gray-200" href="#">Demos 4</a>
                    </div>
                </div>
              </li>
              <li>
                <div className="relative">
                    <button className="peer py-2 hover:text-[#F57D85] flex items-center">
                      Pages ▾
                    </button>
                    
                    <div className="absolute hidden peer-hover:flex hover:flex
                    w-[200px] flex-col bg-white drop-shadow-lg">
                        <a className="px-5 py-3 hover:bg-gray-200" href="#">About Us</a>
                        <a className="px-5 py-3 hover:bg-gray-200" href="#">Contact Us</a>
                        <a className="px-5 py-3 hover:bg-gray-200" href="#">Privacy Policy</a>
                    </div>
                </div>
              </li>
              <li>
                <div className="relative">
                    <button className="peer py-2 hover:text-[#F57D85] flex items-center">
                      Portofolio ▾
                    </button>
                    
                    <div className="absolute hidden peer-hover:flex hover:flex
                    w-[200px] flex-col bg-white drop-shadow-lg">
                        <a className="px-5 py-3 hover:bg-gray-200" href="#portofolio">Portofolio 1</a>
                        <a className="px-5 py-3 hover:bg-gray-200" href="#portofolio">Portofolio 2</a>
                        <a className="px-5 py-3 hover:bg-gray-200" href="#portofolio">Portofolio 3</a>
                        <a className="px-5 py-3 hover:bg-gray-200" href="#portofolio">Portofolio 4</a>
                    </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex items-center space-x-6">
            <div>cart</div>
            <div>search</div>
          </div>
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
