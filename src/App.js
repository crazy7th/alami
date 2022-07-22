import './App.css';
import { HeroImage, Portofolio } from './components/home';
import { FloatingMenu } from './components/common';

function App() {
  return (
    <div className="App">
      <header className="fixed left-0 right-0 shadow w-full z-10 bg-white">
        <div className="container mx-auto px-4 py-3 flex justify-end">
          <div className="flex-1 flex items-center">
            <div className="mr-16">
              <a href="/" className="flex items-center">
                <img src="/img/catering.svg" alt="logo ketring" className="h-8"/>
                <p className="font-medium">ke<span className="text-[#FF4328]">tring</span></p>
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

      <FloatingMenu />

      <HeroImage />
      <Portofolio />
    </div>
  );
}

export default App;
