import React from 'react';

const Button = ({className, classId, name}) => {
    return (
        <>
            <button className={`border border-primary-1 rounded-2xl p-2 ${className || ''}`}>
                <div  className={`bg-primary-1 py-3 px-7 hover:ring-4 duration-500 ring-primary-1 rounded-xl ${classId || ''} font-semibold`}>
                    {name}
                </div>
            </button>
        </>
    );
}

export default Button;
;

export const Button2 = () => {
    return (
        <>
            <button className="px-5 py-3 bg-gradient-to-tr from-[#b561b8] to-[#E4BE5C] rounded-xl font-semibold w-full md:w-fit ">Subscribe</button>
        </>
    );
}

