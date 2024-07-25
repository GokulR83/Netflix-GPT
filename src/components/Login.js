import { useRef, useState } from "react";
import Header from "./Header";
import { formValidate } from "../utils/formValidation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () =>{

        const navigate = useNavigate();
        const dispatch = useDispatch();

    const[isSignInForm, setIsSignInform ] = useState(true);
    const[ errorMessage, setErrorMessage ] = useState(null);

    const email = useRef(null);
    const password = useRef(null);

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
                const { uid, email, displayName } = auth.currentUser;
                console.log(auth.currentUser);
                navigate("/browse");
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
                console.log(auth.currentUser);
                navigate("/browse");
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
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_medium.jpg" alt="bg-image" />
            </div>
            <form className="p-8 bg-black absolute mt-20 mx-auto left-0 right-0 flex flex-col w-4/12 justify-center rounded-lg items-center text-white bg-opacity-80"
            onSubmit={(e)=> e.preventDefault()}
            >
                <h1 className="text-2xl font-bold py-6">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {
                    !isSignInForm && (
                        <input placeholder="Full Name" type="text" className="py-3 px-4 m-4 rounded-sm w-full bg-gray-900" />
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