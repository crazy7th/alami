export function HeaderNav(props) {
  return (
    <ul id="headerNav" className={props.showMenu ? 'absolute md:relative md:flex items-center space-y-4 md:space-y-0 md:space-x-6 bg-white left-0 right-0 p-4 md:p-0' : 'hidden absolute md:relative md:flex items-center space-y-4 md:space-y-0 md:space-x-6 bg-white left-0 right-0 p-4 md:p-0'}>
      <li>
        <div className="relative">
          <button className="peer py-2 hover:text-[#F57D85] flex items-center">
            Demos ▾
          </button>

          <div className={props.showMenu ? 'top-0 left-[100px] absolute rounded-lg hidden peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg' : 'absolute rounded-lg hidden peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg'}>
            <a className="px-5 py-3 hover:bg-gray-200" href="#" onClick={props.hideMenu}>Demos 1</a>
            <a className="px-5 py-3 hover:bg-gray-200" href="#" onClick={props.hideMenu}>Demos 2</a>
            <a className="px-5 py-3 hover:bg-gray-200" href="#" onClick={props.hideMenu}>Demos 3</a>
            <a className="px-5 py-3 hover:bg-gray-200" href="#" onClick={props.hideMenu}>Demos 4</a>
          </div>
        </div>
      </li>
      <li>
        <div className="relative">
          <button className="peer py-2 hover:text-[#F57D85] flex items-center">
            Pages ▾
          </button>

          <div className={props.showMenu ? 'top-0 left-[100px] absolute rounded-lg hidden peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg' : 'absolute rounded-lg hidden peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg'}>
            <a className="px-5 py-3 hover:bg-gray-200" href="#" onClick={props.hideMenu}>About Us</a>
            <a className="px-5 py-3 hover:bg-gray-200" href="#" onClick={props.hideMenu}>Contact Us</a>
            <a className="px-5 py-3 hover:bg-gray-200" href="#" onClick={props.hideMenu}>Privacy Policy</a>
          </div>
        </div>
      </li>
      <li>
        <div className="relative">
          <button className="peer py-2 hover:text-[#F57D85] flex items-center">
            Portofolio ▾
          </button>

          <div className={props.showMenu ? 'top-0 left-[100px] absolute rounded-lg hidden peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg' : 'absolute rounded-lg hidden peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg'}>
            <a className="px-5 py-3 hover:bg-gray-200" href="#portofolio" onClick={props.hideMenu}>Portofolio 1</a>
            <a className="px-5 py-3 hover:bg-gray-200" href="#portofolio" onClick={props.hideMenu}>Portofolio 2</a>
            <a className="px-5 py-3 hover:bg-gray-200" href="#portofolio" onClick={props.hideMenu}>Portofolio 3</a>
            <a className="px-5 py-3 hover:bg-gray-200" href="#portofolio" onClick={props.hideMenu}>Portofolio 4</a>
          </div>
        </div>
      </li>
    </ul>
  );
};

