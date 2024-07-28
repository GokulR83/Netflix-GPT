import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
import { setToggleGptSearch } from '../utils/gptSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const toggleGptSearch = useSelector(store => store.gpt.toggleGptSearch);

  const handleSignOut = () =>{
      signOut(auth).then(() => {
        navigate("/");
      }).catch((error) => {
        navigate("/error");
      });
  }
  useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const { uid, email, displayName, photoURL } = user;
            dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL:photoURL }));
            navigate("/browse");
        } else {
            dispatch(removeUser());
            navigate("/");
        }
        });
        return () => unsubscribe();
    }, []);

    const handleToggleGpt = () =>{
          dispatch(setToggleGptSearch());
    }

  return (
    <div className='absolute w-full px-4 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img 
        className='w-44'
        src= {LOGO}
        alt="logo" />
        {
          user && (
              <div className='flex text-white m-4 items-center gap-6'>
                <div className="flex items-center gap-2">
                <img 
                  className='rounded-sm w-9 h-9'
                src={user.photoURL}
                alt='user'/>
                <p>{user.displayName}</p>
                </div>
                <button className='font-medium text-white hover:text-red-600 ease-in-out'
                 onClick={handleToggleGpt}
                >{toggleGptSearch ? "Home" : "Gpt Search" }</button>
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