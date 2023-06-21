import React from "react";
import { useTranslation } from "react-i18next";

import list from '../image/list.png';
import board from '../image/board.png';
import calendar from '../image/calendar.png';
import search from '../image/search.png';
import chat from '../image/Chat.svg';
import notification from '../image/notification.png';

function Header() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="h-[88px] w-[61.979vwpx] flex items-center font-sfprodisplay">
            <div className="flex justify-start items-center ml-[49px] h-[40px] w-[72px]">
                <img className="h-[18px] ml-[-2px]" src={list} alt="list" />
                <h1 className="ml-[12.5px] mt-[1] text-[#94A3B8] tracking-[0.4px] leading-[20px] font-normal">{t('header1')}</h1>
            </div>
            <div className="flex justify-center items-center ml-[16px] h-[40px] w-[107px]">
                <img className="ml-[1px] h-[18px]" src={board} alt="board" />
                <h1 className="ml-[11px] mr-[6px] mt-[0.9px] text-[#306BFF] tracking-[0.2px] leading-[20px] font-bold">{t('header2')}</h1>
            </div>
            <div className="flex justify-center items-center ml-[16px] h-[40px] w-[129px]">
                <img className="h-[20px] mr-[16px]" src={calendar} alt="calendar" />
                <h1 className="relative left-[-4px] text-[#94A3B8] tracking-[0.2px] leading-[20px] font-medium">{t('header3')}</h1>
            </div>
            <div className="ml-[21.406vw] mr-[px] h-[40px] w-[173px] bg-white rounded-[50px] border-[1px] border-[#E2E8F0] flex items-center">
                <img className="ml-[11px] h-[20px]" src={search} alt="search" />
                <input className="ml-[8px] h-[17px] w-[54px] text-[14px] tracking-[0.2px]" placeholder={t('header4')} />
            </div>
            <div className="flex justify-center items-center ml-[23px] pl-[2px] h-[32px] w-[32px] ">
                <img src={chat} alt="chat" />
            </div>
            <div className="flex justify-center items-center ml-[17px] h-[32px] w-[32px] ">
                <img src={notification} alt="notification" />
            </div>
            <div className="ml-[24px] h-[40px] w-[40px] rounded-full bg-[#FFE1CC]">
            </div>
            <div className="flex ml-[20px]">
                <button onClick={() => changeLanguage("ru")}>RUS</button>
                <p>/</p>
                <button onClick={() => changeLanguage("en")}>ENG</button>
            </div>
        </div>
    );
}

export default Header;
