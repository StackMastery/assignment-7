import { toast, Bounce } from "react-toastify";
import { Button2 } from "./Button";
import { useRef } from "react";

const Input = ({className, buttonClass, inputClass}) => {

    const inputEmail = useRef(null);

    const showToast = (msg, mode) => {
        
        let modeOfToast = toast.success;
    
        if (mode === 'error') {
            modeOfToast = toast.error;
        } else if (mode === 'info') {
            modeOfToast = toast.info;
        } else if (mode === 'warn') {
            modeOfToast = toast.warn;
        }

        modeOfToast(`${msg}`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };
    
    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const email = inputEmail.current.value;
                    email === ''
                        ? showToast('Please Enter A Valid Email', 'error')
                        : showToast(`${email.toUpperCase()} Is Successfully Subscribed`, 'success');
                }}
            >
                <div className={`flex gap-5 flex-col justify-center md:flex-row ${className || ''}`}>
                    <input
                        ref={inputEmail}
                        type="email"
                        placeholder="Enter your email"
                        className={`border w-full md:w-4/12 outline-none py-3 p-5 rounded-xl  ${inputClass || ''}`}
                    />
                    <Button2 className={buttonClass} />
                </div>
            </form>
        </>
    );
};

export default Input;
