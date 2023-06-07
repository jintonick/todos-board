import React, {useState} from "react";
import group3 from '../image/group3.png'
import done from '../image/done.png'
import Chat2 from '../image/Chat2.png'

function Card () {

    const [hovered, setHovered] = useState(false);

    const cardStyle = {
        transform: hovered ? 'rotate(2.95deg)' : 'none',
        transition: 'transform 0.2s ease',
    };

    return (
        <div className="realative">
            <div className="relative w-[249px] min-h-[153px] bg-[#F8FAFC] rounded-[8xp]">
                <div className="relative items-center justify-start flex mr-[40px] font-sfprodisplay" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={cardStyle}>
                    <div className="relative right-[14px] w-[241px] min-h-[153px] max-h-[251px]  border-[1px] border-[#E2E8F0] rounded-[8px] ml-[48px] mt-[72px]  "></div>
                    <div className="absolute bottom-[10px] bg-white left-[30px] bottom-[-4px] w-[249px] min-h-[155px] border-[1px] border-[#E2E8F0] rounded-[8px] mb-[8px] mr-[8px] ">
                        <div className="min-h-[99px] flex justify-center items-center">
                            <div className="w-[217px] min-h-[63px]">
                                <div className="flex items-between">
                                    <h1 className="text-[16px] text-[#1E293B] tracking-[0.2px] leading-[19.9px] font-bold">Brainstorming</h1>
                                </div>
                                <div className="min-h-[14px]">

                                </div>
                                <div className="flex justify-between items-end">
                                    <button className="w-[68px] mb-[2px] h-[24px] bg-[#F7F0FF] rounded-[4px] text-[12px] text-[#BB80FF] tracking-[0.2px] leading-[14.32px] font-bold ">Research</button>
                                    <img className="mt-[2px]" src={group3} />
                                </div>
                            </div>
                        </div>
                        <div className="w-[249px] h-[0px] mt-[-2px] border-t-[1px] border-[#E2E8F0] "></div>
                        <div className="flex justify-center items-center w-[249px] h-[55px]">
                            <div className="flex w-[217px] h-[20px] justify-between items-center mb-[4px]">
                                <div className="flex items-center ml-[-1px]">
                                    <img className="h-[16px]" src={Chat2} />
                                    <p className="text-[12px] ml-[4px] text-[#94A3B8] tracking-[0.2px] leading-[14.32px] font-semibold">21</p>
                                </div>
                                <div className="mr-[1px]">
                                    <img src={done} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;