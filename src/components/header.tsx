import React from "react"; 
import list from '../image/list.png'
import board from '../image/board.png'
import calendar from '../image/calendar.png'
import search from '../image/search.png'
import chat from '../image/Chat.svg'
import notification from '../image/notification.png'


function Header() {
    return(
        <div className="h-[88px] w-[1190px] flex items-center font-sfprodisplay">
            <div className="flex justify-start items-center ml-[48px] h-[40px] w-[72px]">
                <img className="h-[18px] ml-[-2px]" src={list} />
                <h1 className="ml-[12.5px] mt-[1] text-[#94A3B8] tracking-[0.4px] leading-[20px] font-normal">List</h1>
            </div>
            <div className="flex justify-center items-center ml-[16px] h-[40px] w-[107px]">
                <img className=" ml-[1px] h-[18px]" src={board} />
                <h1 className="ml-[11px] mr-[5px] mt-[0.9px] text-[#306BFF] tracking-[0.2px] leading-[20px] font-bold">Board</h1>
            </div>
            <div className="flex justify-center items-center ml-[16px] h-[40px] w-[129px]">
                <img className="h-[20px] mr-[15px]" src={calendar} />
                <h1 className="relative left-[-4px] text-[#94A3B8] tracking-[0.2px] leading-[20px] font-medium">Calendar</h1>
            </div>
            <div className="ml-[411px] mr-[px] h-[40px] w-[173px] bg-white rounded-[50px] border-[1px] border-[#E2E8F0] flex items-center">
                <img className="ml-[11px] h-[20px]" src={search} />
                <input className="ml-[8px] h-[17px] w-[54px] text-[14px] tracking-[0.2px]" placeholder="Search..."></input>
            </div>
            <div className="flex justify-center items-center ml-[24px] pl-[2px] h-[32px] w-[32px] ">
                <img src={chat} />
            </div>
            <div className="flex justify-center items-center ml-[16px] h-[32px] w-[32px] ">
                <img src={notification} />
            </div>
            <div className="ml-[24px] h-[40px] w-[40px] rounded-full bg-[#FFE1CC]">
                
            </div>

        </div>
    )
}

export default Header;