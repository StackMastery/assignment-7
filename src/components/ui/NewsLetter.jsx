import Input from './Input';

const NewsLetter = () => {

    return (
        <>
            <div className="w-full p-5 border-2 rounded-2xl border-white bg-[#ffffff26] -mt-48">
                <div className="rounded-2xl border bg-white w-full bg-heroBg bg-cover bg-center justify-center text-center p-6 py-10 space-y-4">
                    <h1 className="text-3xl sm:text-3xl font-semibold pt-8">Subscribe to our Newsletter</h1>
                    <p className="text-stone-600 font-light text-xl">Get the latest updates and news right in your inbox!</p>
                    <Input />
                </div>
            </div>              
        </>
    );
}

export default NewsLetter;
