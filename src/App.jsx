import React, { useState } from 'react';
import {
  RiSearchLine,
  RiNotification3Line,
  RiCheckboxBlankCircleFill,
  RiCheckDoubleFill,
  RiMessage2Line,
  RiMenu3Fill,
  RiImage2Line,
  RiEmotionHappyLine,
  RiSendPlane2Line,
  RiMore2Fill
} from 'react-icons/ri';

import {
  BiMicrophone,
  BiMap,
} from 'react-icons/bi';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prv) => !prv);

  return (
    <div className="main-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full h-[8vh] md:h-[6vh] flex items-center justify-between px-8 bg-[#141517]">
        <div>
          <img src="logo.png" className="w-10 h-10 object-cover" alt="logo-meco" />
        </div>
        <form action="" className="hidden md:block">
          <div className="relative">
            <input
              type="text"
              className="bg-[#050505] outline-none py-1 pl-4 pr-8 rounded text-gray-300"
              placeholder="Search"
            />
            <RiSearchLine className="absolute right-2 top-2 text-gray-300" />
          </div>
        </form>
        <div className="flex items-center gap-6">
          <div className="relative">
            <RiNotification3Line className="text-xl text-gray-300" />
            <span className="bg-purple-600 absolute rounded-full text-[10px] text-white py-[2px] px-[6px] -top-2 -right-2">2</span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=826&t=st=1663987470~exp=1663988070~hmac=1570f2579fa89fb2a4f7ad869c44dfbf927158ef194fc7ff67b4247e3fbc4293"
              className="w-6 h-6 object-cover rounded-full ring-2 ring-white"
              alt="me-ando-cagando"
            />
          </div>
        </div>
      </header>
      {/* Content */}
      <main className="h-[92vh] md:h-[95vh] grid grid-cols-1 md:grid-cols-8">
        <button
          type="button"
          className="fixed bottom-4 right-4 bg-[#22222A] p-3 rounded-full text-white"
          onClick={toggleMenu}
        >
          <RiMenu3Fill />
        </button>
        <section className={`col-span-2 bg-[#22222A] p-8 overflow-y-auto fixed top-0 h-full w-full transition-all lg:static ${isMenuOpen ? 'left-0' : '-left-full'}`}>
          {/* Title and search */}
          <div className="mb-8">
            <h1 className="text-white text-3xl mb-4">Messages</h1>
            <form action="" className="hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  className="bg-[#050505] outline-none py-2 pl-4 pr-8 rounded text-gray-300 w-full"
                  placeholder="Type any shit..."
                />
                <RiSearchLine className="absolute right-2 top-3 text-gray-300" />
              </div>
            </form>
          </div>
          <div>
            <a href="#puta" className="flex w-full gap-2 mb-8 py-2">
              <div className="w-[15%] relative flex items-center justify-center">
                <img
                  src="https://img.freepik.com/free-photo/beautiful-curly-girl-pointing-finger_176420-168.jpg"
                  className="w-10 h-10 object-cover rounded-full"
                  alt="me-la-follo"
                />
                <RiCheckboxBlankCircleFill className="text-sm absolute text-green-500 right-0 bottom-1 ring-2 ring-white rounded-full" />
              </div>
              <div className="w-[85%] flex justify-between">
                <div>
                  <h3 className="text-gray-300 font-semibold">Benito Camelo</h3>
                  <p className="text-green-300">typing...</p>
                </div>
                <div>
                  <h3 className="text-gray-500">4:30 pm</h3>
                  <span className="text-xs bg-red-600 text-white rounded-full py-1 px-2 float-right">
                    2
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a href="#puta" className="flex w-full gap-2 mb-8 rin rin-[#1E1F24] bg-[#1E1F24] rounded-lg">
              <div className="w-[15%] relative flex items-center justify-center">
                <img
                  src="https://img.freepik.com/free-photo/beautiful-curly-girl-pointing-finger_176420-168.jpg"
                  className="w-10 h-10 object-cover rounded-full"
                  alt="me-la-follo"
                />
              </div>
              <div className="w-[85%] flex justify-between">
                <div>
                  <h3 className="text-gray-300 font-semibold">Antonio Orozco</h3>
                  <p className="text-gray-500">El Robert se la come</p>
                </div>
                <div>
                  <h3 className="text-gray-500">4:30 pm</h3>
                  <span className="text-xs text-white py-1 px-2 float-right">
                    <RiCheckDoubleFill />
                  </span>
                </div>
              </div>
            </a>
            <a href="#puta" className="flex w-full gap-2 mb-8">
              <div className="w-[15%] relative flex items-center justify-center">
                <img
                  src="https://img.freepik.com/free-photo/beautiful-curly-girl-pointing-finger_176420-168.jpg"
                  className="w-10 h-10 object-cover rounded-full"
                  alt="me-la-follo"
                />
              </div>
              <div className="w-[85%] flex justify-between">
                <div>
                  <h3 className="text-gray-300 font-semibold">Rober</h3>
                  <p className="text-green-300">El to;o se la come</p>
                </div>
                <p className="text-gray-300 font-semibold">Hour</p>
                <div className="">
                  <h3 className="text-gray-500">4:30 pm</h3>
                  <span className="text-xs bg-red-600 text-white rounded-full py-1 px-2 float-right">
                    <RiCheckDoubleFill />
                  </span>
                </div>
              </div>
            </a>
            <h5 className="text-gray-300 flex items-center gap-2">
              <RiMessage2Line />
              All Messages
            </h5>
            <a href="#puta" className="flex w-full gap-2 mb-8">
              <div className="w-[15%] relative flex items-center justify-center">
                <img
                  src="https://img.freepik.com/free-photo/beautiful-curly-girl-pointing-finger_176420-168.jpg"
                  className="w-10 h-10 object-cover rounded-full"
                  alt="me-la-follo"
                />
              </div>
              <div className="w-[85%] flex justify-between">
                <div>
                  <h3 className="text-gray-300 font-semibold">Rober</h3>
                  <p className="text-green-300">El to;o se la come</p>
                </div>
                <p className="text-gray-300 font-semibold">Hour</p>
                <div className="">
                  <h3 className="text-gray-500">4:30 pm</h3>
                  <span className="text-xs bg-red-600 text-white rounded-full py-1 px-2 float-right">
                    <RiCheckDoubleFill />
                  </span>
                </div>
              </div>
            </a>
            <a href="#puta" className="flex w-full gap-2 mb-8">
              <div className="w-[15%] relative flex items-center justify-center">
                <img
                  src="https://img.freepik.com/free-photo/beautiful-curly-girl-pointing-finger_176420-168.jpg"
                  className="w-10 h-10 object-cover rounded-full"
                  alt="me-la-follo"
                />
              </div>
              <div className="w-[85%] flex justify-between">
                <div>
                  <h3 className="text-gray-300 font-semibold">Rober</h3>
                  <p className="text-green-300">El to;o se la come</p>
                </div>
                <p className="text-gray-300 font-semibold">Hour</p>
                <div className="">
                  <h3 className="text-gray-500">4:30 pm</h3>
                  <span className="text-xs bg-red-600 text-white rounded-full py-1 px-2 float-right">
                    <RiCheckDoubleFill />
                  </span>
                </div>
              </div>
            </a>
            <a href="#puta" className="flex w-full gap-2 mb-8">
              <div className="w-[15%] relative flex items-center justify-center">
                <img
                  src="https://img.freepik.com/free-photo/beautiful-curly-girl-pointing-finger_176420-168.jpg"
                  className="w-10 h-10 object-cover rounded-full"
                  alt="me-la-follo"
                />
              </div>
              <div className="w-[85%] flex justify-between">
                <div>
                  <h3 className="text-gray-300 font-semibold">Rober</h3>
                  <p className="text-green-300">El to;o se la come</p>
                </div>
                <p className="text-gray-300 font-semibold">Hour</p>
                <div className="">
                  <h3 className="text-gray-500">4:30 pm</h3>
                  <span className="text-xs bg-red-600 text-white rounded-full py-1 px-2 float-right">
                    <RiCheckDoubleFill />
                  </span>
                </div>
              </div>
            </a>
            <a href="#puta" className="flex w-full gap-2 mb-8">
              <div className="w-[15%] relative flex items-center justify-center">
                <img
                  src="https://img.freepik.com/free-photo/beautiful-curly-girl-pointing-finger_176420-168.jpg"
                  className="w-10 h-10 object-cover rounded-full"
                  alt="me-la-follo"
                />
              </div>
              <div className="w-[85%] flex justify-between">
                <div>
                  <h3 className="text-gray-300 font-semibold">Rober</h3>
                  <p className="text-green-300">El to;o se la come</p>
                </div>
                <p className="text-gray-300 font-semibold">Hour</p>
                <div className="">
                  <h3 className="text-gray-500">4:30 pm</h3>
                  <span className="text-xs bg-red-600 text-white rounded-full py-1 px-2 float-right">
                    <RiCheckDoubleFill />
                  </span>
                </div>
              </div>
            </a>
            <a href="#puta" className="flex w-full gap-2 mb-8">
              <div className="w-[15%] relative flex items-center justify-center">
                <img
                  src="https://img.freepik.com/free-photo/beautiful-curly-girl-pointing-finger_176420-168.jpg"
                  className="w-10 h-10 object-cover rounded-full"
                  alt="me-la-follo"
                />
              </div>
              <div className="w-[85%] flex justify-between">
                <div>
                  <h3 className="text-gray-300 font-semibold">Rober</h3>
                  <p className="text-green-300">El to;o se la come</p>
                </div>
                <p className="text-gray-300 font-semibold">Hour</p>
                <div className="">
                  <h3 className="text-gray-500">4:30 pm</h3>
                  <span className="text-xs bg-red-600 text-white rounded-full py-1 px-2 float-right">
                    <RiCheckDoubleFill />
                  </span>
                </div>
              </div>
            </a>
          </div>
        </section>
        <section className="bg-[#1E1F24] col-span-4 p-8 relative">
          <div className="flex-1 flex items-center justify-between">
            <div>
              <h1 className="text-3xl text-gray-300">Los pito grande de Tijuana</h1>
              <p className="text-gray-500">Menor a 3cm, la tiene el toño</p>
            </div>
            <div className="flex item-center">
              <div className="flex items-start">
                <img
                  src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing-gray-wall_231208-10760.jpg"
                  alt="otra imagen del toño desnudo" 
                  className="w-8 h-8 object-cover rounded-full"
                />
                <img
                  src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing-gray-wall_231208-10760.jpg"
                  alt="otra imagen del toño desnudo" 
                  className="w-8 h-8 object-cover rounded-full"
                />
                <img
                  src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing-gray-wall_231208-10760.jpg"
                  alt="otra imagen del toño desnudo" 
                  className="w-8 h-8 object-cover rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="absolute bg-[#22222A] left-0 bottom-0 w-full p-8">
            <form className="relative" action="">
              <div className='absolute right-4 top-[18px] flex items-center gap-2 text-gray-300'>
                <RiImage2Line className="hover:cursor-pointer text-gray-500" />
                <RiEmotionHappyLine className="hover:cursor-pointer text-gray-500"/>
                <RiSendPlane2Line className="hover:cursor-pointer text-gray-500"/>
                <BiMap className="hover:cursor-pointer text-gray-500 text-xl"/>
              </div>
              <BiMicrophone className="absolute left-4 text-gray-500 top-[18px] text-xl" />
              <input
                type="text"
                className="bg-[#1E1F24] p-4 px-10 outline-none  w-full rounded-full text-gray-300"
                placeholder="Me ando lavando el culo, atte toño"
              />
            </form>
          </div>
          {/* Content Message */}
          
          <div className="mt-32 overflow-y-auto h-[calc(100% -60px)]">
            <div className="flex gap-4">
              <img
                src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing-gray-wall_231208-10760.jpg"
                alt="El toño se puso en 4 siuuuuu"
                className="w-10 h-10 object-cover rounded-full"
              />
              <div>
                <h4 className="text-gray-300 font-semibold mb-2"> killan jens
                  <span className="text-gray-500 font-normal text-sm ml-8">10:12 AM</span>
                </h4>
                <div className="flex items-center gap-2 mb-2">
                  <p className="bg-[#292A30] py-2 px-4 rounded-tr-lg rounded-br-lg rounded-bl-lg text-gray-500">
                    el rober se la come, una pizza :=D
                  </p>
                  <button className="text-gray-500">
                    <RiMore2Fill />
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <p className="bg-[#292A30] py-2 px-4 rounded-tr-lg rounded-br-lg rounded-bl-lg text-gray-500">
                    Se Sabe
                  </p>
                  <button className="text-gray-500">
                    <RiMore2Fill />
                  </button>
                </div>
              </div>
            </div>
            {/* Divider */}
            <div className="my-8 relative">
              <p className="text-sm text-center bg-[#1E1F24] py-1 px-4 absolute -top-[14px] ml-[50%] -translate-x-[50%] rounded-br-lg text-gray-500">Today, March 24</p>
              <hr className="border-gray-600"/>
            </div>

            <div className="flex justify-end gap-4">
              <img
                src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing-gray-wall_231208-10760.jpg"
                alt="El toño se puso en 4 siuuuuu"
                className="w-10 h-10 object-cover rounded-full order-1"
              />
              <div>
                <h4 className="text-gray-300 font-semibold mb-2 text-right">
                  <span className="text-gray-500 font-normal text-sm mr-8">10:12 AM</span>
                  El cacas
                </h4>
                <div className="flex items-center gap-2 mb-2 justify-end">
                  <p className="bg-purple-600 py-2 px-4 rounded-tl-lg rounded-bl-lg rounded-br-lg text-white order-1">
                    el rober se la come, una pizza :=D
                  </p>
                  <button className="text-gray-500">
                    <RiMore2Fill />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-red-700 col-span-2">El Sr. Orozco se la come entera</section>
      </main>
    </div>
  );
}

export default App;
