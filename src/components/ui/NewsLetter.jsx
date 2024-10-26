import { useRef } from "react";
import { Button2 } from "./Button";
import { toast, Bounce } from "react-toastify";

const NewsLetter = () => {

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

    const inputEmail = useRef(null);

    return (
        <>
            <div className="w-full p-5 border-2 rounded-2xl border-white bg-[#ffffff26] -translate-y-48">
                <div className="rounded-2xl border bg-white w-full bg-heroBg bg-cover bg-center justify-center text-center p-6 py-10 space-y-4">
                    <h1 className="text-3xl sm:text-3xl font-semibold pt-8">Subscribe to our Newsletter</h1>
                    <p className="text-stone-600 font-light text-xl">Get the latest updates and news right in your inbox!</p>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            const email = inputEmail.current.value
                            showToast(`${email.toUpperCase()} Is Succesfuly Subscribed`, 'success')
                        }}
                    >
                        <div className="flex gap-5 flex-col justify-center md:flex-row">
                            <input 
                                ref={inputEmail}
                                type="email" 
                                className="border w-full md:w-4/12 outline-none py-3 p-5  rounded-xl"
                            />
                            <Button2 />
                        </div>
                    </form>
                </div>
            </div>              
        </>
    );
}

export default NewsLetter;
