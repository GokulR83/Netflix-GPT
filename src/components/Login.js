import { useRef, useState } from "react";
import Header from "./Header";
import { formValidate } from "../utils/formValidation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, DEFAULT_USER_ICON } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Login = () =>{
        const navigate = useNavigate();
        const dispatch = useDispatch();

    const[isSignInForm, setIsSignInform ] = useState(true);
    const[ errorMessage, setErrorMessage ] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const toggleSignInForm = () =>{
        setIsSignInform(!isSignInForm);
    }
    const handleClick = () =>{
        //! Validate the form data
        const message = formValidate(email.current.value,password.current.value);
        setErrorMessage(message);
        //& SignIn / SignUp - Operations
        if(message) return null;
        if(!isSignInForm){
            //? Sign Up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                updateProfile(auth.currentUser, {
                displayName: name.current.value, 
                photoURL: DEFAULT_USER_ICON
                }).then(() => {
                    const { uid, email, displayName, photoURL } = auth.currentUser;
                    dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL:photoURL }));
                    navigate('/');
                }).catch((error) => {
                    setErrorMessage(error.message);
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode +"-" +errorMessage);
            });
        }
        else{
            //? Sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => { 
                const user = userCredential.user;
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if(errorCode)
                setErrorMessage("email   or password are invalid");
            });
        }
    }
    return(
        <div className="">
            <Header />
            <div className="h-screen fixed w-full">
                <img src={BG_URL} className="object-cover w-full h-full" alt="bg-image" />
            </div>
            <form className="p-8 bg-black absolute mt-32 md:mt-20 mx-auto left-0 right-0 flex flex-col w-2/3 md:w-4/12 justify-center rounded-lg items-center text-white bg-opacity-80 "
            onSubmit={(e)=> e.preventDefault()}
            >
                <h1 className="text-2xl font-bold py-6">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {
                    !isSignInForm && (
                        <input ref={name} placeholder="Full Name" type="text" className="py-3 px-4 m-4 rounded-sm w-full bg-gray-900" />
                    )
                }
                <input 
                ref={email}
                placeholder="Email Address" type="email" className="py-3 px-4 m-4 rounded-sm w-full bg-gray-900" />
                <input 
                ref={password}
                placeholder="Password" type="password" className="py-3 px-4 m-4 rounded-sm w-full bg-gray-900" />
                <p className="text-red-500 font-sm">{errorMessage}</p>
                <button 
                className="py-3 px-4 text-white bg-red-700 rounded-sm shadow-lg m-6 w-full"
                onClick={handleClick}
                >{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p
                onClick={toggleSignInForm}
                className="cursor-pointer text-gray-400"
                >{!isSignInForm ? "Already a user? Sign In" : "New to Netflix? Sign Up"}</p>
            </form>
        </div>
    );
}

export default Login;