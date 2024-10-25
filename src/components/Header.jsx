import { useState, useEffect } from 'react';
import Logo from '../assets/logo.svg'
import Hamburger from 'hamburger-react';
import CoinIcon from '../assets/icons/coin.svg'

const Header = ({coinValue}) => {
    const [menuToggle, setMenuToggle] = useState(false)
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('/database/menu.json') 
            .then(res => res.json())
            .then(data => {
                setMenu(data);
            })
    }, []);
    
    return (
        <>
            <header className="flex justify-center w-full fixed border-b bg-white">
                <div className="inline-flex w-1 p-5 xl:px-0 justify-center justify-between items-center">
                    <a href="/">
                        <img width={50} src={Logo} alt="Logo"/>
                    </a> 
                    <div className="flex items-center gap-5 justify-between">
                        <menu className={`${menuToggle ? 'block' : 'hidden'} bg-white w-full lg:w-fit left-0 fixed p-5 border top-[89px] lg:static lg:p-0 lg:border-none lg:block`}>
                            <nav className="flex flex-col gap-4 md:gap-5 lg:flex-row">
                                {menu.map((item, index) => (
                                    <li key={index} className="text-[10px] md:text-sm text-text-1 hover:text-yellow-500 transition-colors">
                                        <a className="w-full flex" href={`${item.href}`}>
                                            {item.name}
                                        </a>
                                    </li>
                                ) ) }
                            </nav>
                        </menu>
                        <div className="flex items-center gap-3 border px-5 py-2 rounded-xl font-semibold w-fit">
                            {coinValue} Coin
                            <img src={CoinIcon} alt="Coin" />
                        </div>
                        <div className="lg:hidden">
                            <Hamburger 
                                onToggle={toggled => {
                                    toggled 
                                        ? (setMenuToggle(true))
                                        : setMenuToggle(false)
                                }}
                            />
                        </div>
                    </div>
                </div>
            </header> 
        </>
    );
}

export default Header;
