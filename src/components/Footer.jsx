import NewsLetter from "./ui/NewsLetter";
import Logo from '../assets/dark.svg'
import Input from "./ui/Input";

const Footer = () => {


    const quickLinks = [
        {
            name : 'Home',
            href: '/',
        },
        {
            name : 'Services',
            href: '/',
        },
        {
            name : 'About',
            href: '/',
        },
        {
            name : 'Contact',
            href: '/',
        }
    ]

    const d = new Date();
    let year = d.getFullYear();


    return (
        <>
            <footer className="flex justify-center bg-[#06091A] mt-56">
                <div className="inline-flex w-1 xl:px-0 p-5 py-10 justify-center flex-col items-center">
                    {/* NewsLetter */}
                    <NewsLetter />
                    <div className="w-full flex justify-center py-10">
                        <a href="/">
                            <img width={140} src={Logo} alt="" />
                        </a>
                    </div>
                    <div className="w-full flex flex-wrap justify-between gap-5 pt-7">
                        <div className="space-y-5 w-full sm:w-[38%] md:w-[32%]">
                            <h3 className="text-white font-semibold text-xl">About Us</h3>
                            <p className="text-[#fff9] font-light">
                                We are a passionate team dedicated to providing the best services to our customers.
                            </p>
                        </div>

                        <div className="space-y-5 w-full sm:w-[48%] md:w-[32%] xl:translate-x-20">
                            <h3 className="text-white font-semibold text-xl">Quick Links</h3>
                            <ol className="space-y-3">
                                {quickLinks && quickLinks.map((item, index) => (
                                    <li key={index} className="text-[#fff9] font-light">
                                        <a href={item.href}>{item.name}</a>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <div className="space-y-5 w-full lg:w-[32%]">
                            <h3 className="text-white font-semibold text-xl">Newsletter</h3>
                            <p className="text-[#fff9] font-light">
                                Subscribe to our newsletter for the latest updates.
                            </p>
                            <Input className="md:!gap-0" inputClass="!w-full md:rounded-r-none" buttonClass=" md:rounded-l-none" />
                        </div>
                    </div>
                    <div className="w-full md:text-center pt-7 mt-10 border-t border-[#ffffff62]">
                        <p className="text-[#fff9] text-start sm:text-center">Copyright &copy; {year} <a href="/" className="font-bold">BPL Dream 11 </a>All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
