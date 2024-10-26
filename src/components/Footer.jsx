import NewsLetter from "./ui/NewsLetter";

const Footer = () => {
    return (
        <>
            <footer className="flex justify-center bg-[#06091A] mt-56">
                <div className="inline-flex w-1 xl:px-0 p-5 py-10 justify-center">
                    {/* NewsLetter */}
                    <NewsLetter />
                </div>
            </footer>
        </>
    );
}

export default Footer;
