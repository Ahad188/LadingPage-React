import { useState } from "react";
import {logo,lock, hamburgerMenu, close} from '../../assets'
 
const Navbar = () => {
     const [toggle,setToggle]=useState(false)
     const handleClick = ()=> setToggle(!toggle)
     return (
          <div className='w-full h-[80px] bg-white border-b'>
        <div className='md:max-w-[1240px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4'>
            
            <img src={logo} className="h-[25px]" />
            
            <div className='hidden md:flex items-center '>
                <ul className='flex gap-4'>
                    <li className="hover:text-[#20B486] cursor-pointer text-2xl">Home</li>
                    <li className="hover:text-[#20B486] cursor-pointer text-2xl">About</li>
                    <li className="hover:text-[#20B486] cursor-pointer text-2xl">Support</li>
                    <li className="hover:text-[#20B486] cursor-pointer text-2xl">Platform</li>
                    <li className="hover:text-[#20B486] cursor-pointer text-2xl">Pricing</li>
                </ul>
            </div>


            <div className='hidden md:flex'>
                <button className='flex justify-between items-center  bg-transparent text-2xl  px-6 gap-2'>
                    <img src={lock} />
                    Login
                </button>
                {/* <button className='px-8 py-3 rounded-md bg-[#20B486] text-white font-bold'>Sign Up For Free</button> */}
            </div>

            <div className='md:hidden'  onClick={handleClick}>
                    <img src={toggle?close:hamburgerMenu} />
            </div>




        </div>

        <div className={toggle?'absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b':'hidden'}>
            <ul>
                    <li className='p-4 hover:bg-[#20B486] hover:text-[#FFF] '>Home</li>
                    <li className='p-4 hover:bg-[#20B486] hover:text-[#FFF]'>About</li>
                    <li className='p-4 hover:bg-[#20B486] hover:text-[#FFF]'>Support</li>
                    <li className='p-4 hover:bg-[#20B486] hover:text-[#FFF]'>Platform</li>
                    <li className='p-4 hover:bg-[#20B486] hover:text-[#FFF]'>Pricing</li>
                    <div className='flex flex-col my-4 gap-4'>
                        <button className='border border-b-[#309a78] flex justify-center items-center  bg-transparent  px-6 gap-2 py-4'>
                         <img src={lock} />
                         Login
                        </button>
                        {/* <button className='px-8 py-5 rounded-md bg-[#20B486] text-white font-bold'>Sign Up For Free</button> */}
                    </div>
            </ul>
        </div>
        
        
    </div>
     );
};

export default Navbar;