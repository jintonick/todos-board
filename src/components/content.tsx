import React from "react";
import flash from '../image/flash.png'
import star from '../image/star.png'
import user2 from '../image/user2.png'
import user3 from '../image/user3.png'
import more2 from '../image/more2.png'

function Content () {
    return (
        <div className="absolute h-[843px] w-[1190px] mt-[88px] ml-[250px] font-sfprodisplay">
            <div className="w-[1190] relative bottom-[1px] h-[0px] border-[1px] border-[#eef2f6]"></div>
            <div className="w-[107px] relative bottom-[4px] left-[136px] h-[2px] bg-[#306BFF] rounded-[50px]"></div>
            <div className="ml-[48.5px] mt-[43.5px] flex">
                <p className="text-[12px] text-[#94A3B8] tracking-[0.2px] leading-[14px] font-medium mr-[10.5px]">Workspace</p>
                <p className="text-[12px] text-[#94A3B8] tracking-[0.2px] leading-[14px] font-medium mr-[10.5px]">/</p>
                <p className="text-[12px] text-[#94A3B8] tracking-[0.2px] leading-[14px] font-medium mr-[10.5px]">Hikoko Design</p>
                <p className="text-[12px] text-[#94A3B8] tracking-[0.2px] leading-[14px] font-medium mr-[10.5px]">/</p>
                <p className="text-[12px] text-[#94A3B8] tracking-[0.2px] leading-[14px] font-medium">Board</p>
            </div>
            <div className="flex items-center justify-between mt-[16px] ml-[48px]">
                <div className="ml-[0.5px] mt-[1px]">
                    <h1 className="text-[40px] text-[#1E293B] tracking-[0.2px] leading-[47px] font-bold">Hikoko Design</h1>
                </div>
                <div className="flex mr-[48px] mt-[8px] w-[193px] h-[40px] ">
                    <button className="w-[40px] h-[40px] border-[1px] rounded-[8px] border-[#E2E8F0] flex items-center justify-center mr-[8px] "><img src={flash} /></button>
                    <button className="w-[40px] h-[40px] border-[1px] rounded-[8px] border-[#E2E8F0] flex items-center justify-center mr-[8px]"><img src={star} /></button>
                    <button className="w-[97px] h-[40px] pl-[2px] pt-[0px] border-[1px] rounded-[8px] border-[#E2E8F0] flex items-center justify-center font-semibold text-[14px] tracking-[0.2px]"><img src={user2} className="mr-[8px]"/>Share</button>
                </div>
            </div>
            <div className="flex ml-[48px] mt-[24px]">
                <img src={user3} />
                <button className="w-[86px] h-[40px] ml-[16px] border-[1px] rounded-[8px] border-[#E2E8F0] flex items-center justify-center mr-[8px] text-[14px] font-semibold tracking-[0.4px]">Only My</button>
            </div>
            <div className="flex">
                <div className="h-[42px] w-[249px] mr-[32px]">
                    <div className="flex items-center justify-between ml-[48px] mt-[48px]">
                        <div className="flex items-center">
                            <h1 className="text-[14px] text-[#1E293B] tracking-[1px] leading-[14px] font-bold mr-[12px]">TODO</h1>
                            <h1 className="h-[24px] w-[32px] pr-[1px] text-[12px] text-[#94A3B8] font-bold border-[1px] border-[#E2E8F0] rounded-[1000px] flex items-center justify-center">2</h1>
                        </div>
                        <div className="flex mr-[-48px]">
                            <img src={more2} />
                        </div>
                    </div>
                    <div className="ml-[48px] mt-[16px] w-[249px] h-[2px] bg-[#1E293B] rounded-[50px]"></div>
                </div>
                <div className="h-[42px] w-[249px] mr-[32px]">
                    <div className="flex items-center justify-between ml-[48px] mt-[48px]">
                        <div className="flex items-center">
                            <h1 className="text-[14px] text-[#1E293B] tracking-[1px] leading-[14px] font-bold mr-[12px]">IN WORK</h1>
                            <h1 className="h-[24px] w-[32px] pr-[1px] text-[12px] text-[#94A3B8] font-bold border-[1px] border-[#E2E8F0] rounded-[1000px] flex items-center justify-center">4</h1>
                        </div>
                        <div className="flex mr-[-49px]">
                            <img src={more2} />
                        </div>
                    </div>
                    <div className="ml-[48px] mt-[16px] w-[250px] h-[2px] bg-[#306BFF] rounded-[50px]"></div>
                </div>
                <div className="h-[42px] w-[249px] mr-[32px]">
                    <div className="flex items-center justify-between ml-[48px] mt-[48px]">
                        <div className="flex items-center ml-[1px] mt-[1px]">
                            <h1 className="text-[14px] text-[#1E293B] tracking-[1px] leading-[14px] font-bold mr-[12px]">QA</h1>
                            <h1 className="h-[24px] w-[32px] pr-[1px] text-[12px] text-[#94A3B8] font-bold border-[1px] border-[#E2E8F0] rounded-[1000px] flex items-center justify-center">8</h1>
                        </div>
                        <div className="flex mr-[-50px]">
                            <img src={more2} />
                        </div>
                    </div>
                    <div className="ml-[49.5px] mt-[15px] w-[250px] h-[2px] bg-[#FFB580] rounded-[50px]"></div>
                </div>
                <div className="h-[42px] w-[249px]">
                    <div className="flex items-center justify-between ml-[50px] mt-[48px]">
                        <div className="flex items-center">
                            <h1 className="text-[14px] text-[#1E293B] tracking-[1px] leading-[14px] font-bold mr-[12px]">COMPLETED</h1>
                            <h1 className="h-[24px] w-[32px] pr-[1px] text-[12px] text-[#94A3B8] font-bold border-[1px] border-[#E2E8F0] rounded-[1000px] flex items-center justify-center">3</h1>
                        </div>
                        <div className="flex mr-[-50px]">
                            <img src={more2} />
                        </div>
                    </div>
                    <div className="ml-[49px] mt-[16px] w-[250px] h-[2px] bg-[#78C552] rounded-[50px]"></div>
                </div>
            </div>
        </div>
    )
}

export default Content;