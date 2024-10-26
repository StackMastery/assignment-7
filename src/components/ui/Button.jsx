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

export const Button2 = ({className}) => {
    return (
        <>
            <button className={`px-5 py-3 bg-gradient-to-tr from-[#e17fe4] to-[#ffc505] rounded-xl font-semibold  ${className}`}>Subscribe</button>
        </>
    );
}

