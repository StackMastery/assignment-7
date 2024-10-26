import HeroImage from '../assets/images/heroImage.webp';
import Button from './ui/Button';
import { toast as showToast, Bounce } from 'react-toastify'; // Rename import to avoid conflicts

const HeroBanner = ({ setCoinValue, coinvalue }) => {

    const displaySuccessToast = () => {
        showToast.success('Success Fuly Added Free Credit', {
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
            <section className="flex justify-center pt-28 p-5">
                <div className="inline-flex flex-col items-center text-center px-10 gap-3 w-1 bg-black py-14 rounded-2xl bg-heroBg bg-cover bg-center justify-center">
                    <img width={230} src={HeroImage} alt="Hero Image" className="self-center" />
                    <h1 className="text-white text-3xl sm:text-4xl font-semibold pt-8">Assemble Your Ultimate Dream 11 Team</h1>
                    <p className="text-text-2 font-light text-xl sm:text-2xl">Beyond Boundaries Beyond Limits</p>
                    <div
                        onClick={() => {
                            setCoinValue(coinvalue + 5000000);
                            displaySuccessToast();
                        }}
                    >
                        <Button name="Claim Free Credit" className="mt-5" href="" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroBanner;
