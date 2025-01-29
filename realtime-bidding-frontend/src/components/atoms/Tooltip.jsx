/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

interface CommonTooltipProps {
    position?: 'top' | 'bottom' | 'left' | 'right' | 'topResponsive';
    name?: any;
    children?: any;
    className?: any;
    parentClassName?: any;
    source?: any;
    link?: any;
    des?: any;
    img?: any
}

const CommonTooltip: React.FC<CommonTooltipProps> = ({ name, position = 'top', children, className, parentClassName, source, link, des, img }) => {
    return (
        <div className={`relative z-[100] group ${parentClassName}`}>
            {children}
            <div
                className={`${className} absolute z-[100] w-auto bg-whiteSmoke dark:bg-blackRussian3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200 
          ${position === 'top' ? 'bottom-full left-1/2 -translate-x-1/2 mb-5' : ''}
          ${position === 'bottom' ? 'top-full left-1/2 -translate-x-1/2 mt-2' : ''}
          ${position === 'left' ? 'right-full top-1/2 -translate-y-1/2 mr-2' : ''}
          ${position === 'right' ? 'left-full top-1/2 -translate-y-1/2 ml-2' : ''}
          ${position === 'topResponsive' ? 'bottom-full md:left-1/2 left-20 -translate-x-1/2 mb-5' : ''}
          text-sm py-3 px-4 rounded-xl shadow-lg z-10
        `}
            >
                {source ?
                    <div className='flex flex-col gap-1'>
                        <div className='flex gap-2 items-center'>
                            <img alt="chat model" src={img} width={20} height={20} className="rounded-sm !shrink-0" />
                            <p className='!mb-0 dark:text-white'>{link}</p>
                        </div>
                        <p className='dark:text-white font-semibold !mb-0'>{name}</p>
                        <p className='dark:text-white'>{des}</p>
                    </div>
                    :
                    <span className='text-center text-black dark:text-white text-wrap'>{name}</span>
                }
                <span
                    className={`absolute z-10 h-0 w-0 border-transparent border-[8px] rotate-180
            ${position === 'top' ? 'border-b-whiteSmoke dark:border-b-blackRussian3 top-full left-1/2 -translate-x-1/2' : ''}
            ${position === 'bottom' ? 'border-t-whiteSmoke dark:border-t-blackRussian3 -top-[15px] left-1/2 -translate-x-1/2' : ''}
            ${position === 'left' ? 'border-r-whiteSmoke dark:border-r-blackRussian3 left-full top-1/2 -translate-y-1/2' : ''}
            ${position === 'right' ? 'border-l-whiteSmoke dark:border-l-blackRussian3 right-full top-1/2 -translate-y-1/2' : ''}
            ${position === 'topResponsive' ? 'border-b-whiteSmoke dark:border-b-blackRussian3 top-full md:left-1/2 left-7 -translate-x-1/2' : ''}
          `}
                ></span>
            </div>
        </div>
    );
};

export default CommonTooltip;
