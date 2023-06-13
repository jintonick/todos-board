import React, {ReactNode, useState} from "react";
import group3 from '../image/group3.png'
import done from '../image/done.png'
import Chat2 from '../image/Chat2.png'

function Card (props: {
    parag: ReactNode; 
    headname: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; 
    mainimg: string | undefined;
}) {

    const [hovered, setHovered] = useState(false);

    const cardStyle = {
        transform: hovered ? 'rotate(2.95deg)' : 'none',
        transformOrigin: 'right bottom', // вращение относительно правого нижнего угла
        transition: 'transform 0.2s ease',
    };

    return (
        <div className="realative flex justify-center mr-[42px] ">
            <div className="relative w-[241px] min-h-[153px] rounded-[8xp] ">
                <div className="h-[221px] w-[260px] relative items-center justify-start flex mr-[40px] font-sfprodisplay " onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={cardStyle}>
                    <div className="absolute right-[15px] w-[241px] min-h-[153px] top-[0px]  max-h-[251px]  border-[1px] border-[#E2E8F0] rounded-[8px] ml-[48px]"></div>
                    <div className="absolute  bg-white  top-[0px] w-[250px] min-h-[155px] border-[1px] border-[#E2E8F0] rounded-[8px] mb-[8px] mr-[8px] ">
                        <div className="min-h-[99px] flex justify-center items-center">
                            <div className="w-[217px] min-h-[63px] mt-[20px]">
                                <div className="flex mt-[0px] mb-[8px] ml-[1px] ">
                                    <h1 className="text-[16px] text-[#1E293B] tracking-[0.2px] leading-[19.9px] font-bold">{props.headname}</h1>
                                </div>
                                <div className="mt-[8px] min-h-[0px]">
                                    <p className="text-[12px] text-[#94A3B8] tracking-[0.2px] leading-[16.8px] font-normal">{props.parag}</p>
                                    <img src={props.mainimg} />
                                </div>
                                <div className="flex h-[32px] justify-between items-end mt-[12px] mb-[16px] ">
                                    <button className="w-[68px] mb-[2px] h-[24px] bg-[#F7F0FF] rounded-[4px] text-[12px] text-[#BB80FF] tracking-[0.2px] leading-[14.32px] font-semibold ">Research</button>
                                    <img className="mt-[2px]" src={group3} />
                                </div>
                            </div>
                        </div>
                        <div className="w-[249px] h-[0px] mt-[-2px] border-t-[1px] border-[#E2E8F0] "></div>
                        <div className="flex justify-center items-center w-[249px] h-[55px]">
                            <div className="flex w-[217px] h-[20px] justify-between items-center mb-[2px]">
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