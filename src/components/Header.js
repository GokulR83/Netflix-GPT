import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () =>{
      signOut(auth).then(() => {
        navigate("/");
      }).catch((error) => {
        navigate("/error");
      });
  }
  return (
    <div className='absolute w-full px-4 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img 
        className='w-44'
        src= {"https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"}
        alt="logo" />
        {
          user && (
              <div className='flex text-white m-4 items-center gap-6'>
                <img 
                  className='rounded-sm w-9 h-9'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKNdKRIgbcMkyGq1cQeq40IA-IQS-FDWnTQ&s' alt='user'/>
                <button className='border border-red-600 rounded-lg px-4 py-2 hover:bg-red-600 ease-in-out transition-all'
                onClick={handleSignOut}
                >Sign Out</button>
              </div>
          )
        }
    </div>
  )
}

export default Header