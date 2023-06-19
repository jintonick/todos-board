import React from "react";
import logo1 from '../image/logo1.png'
import arows from '../image/arows.png'
import home from '../image/home.png'
import checkbox from '../image/checkbox.png'
import cup from '../image/cup.png'
import user from '../image/user.png'
import plus from '../image/plus.png'
import more from '../image/more.png'
import run1 from '../image/run1.png'
import run2 from '../image/run2.png'
import run3 from '../image/run3.png'
import run4 from '../image/run4.png'
import moon from '../image/moon.png'
import sun from '../image/sun.png'
import { Link } from 'react-router-dom';



const Nav: React.FC = () => {
    return (
        <div className="w-[250px] h-[931px] bg-white font-sfprodisplay">
            <div>
                <div className="h-[87px] w-[250px] bg-white flex justify-center items-center">
                    <div className="h-[40px] w-[202px] flex justify-between items-center">
                        <a><img src={logo1}/></a>
                        <button><img src={arows} /></button>
                    </div>
                </div>
                <div className="w-[250px] h-[0px] border-t-[1px] border-[#eef2f6]"></div>
                <div className="h-[232px] w-[250px] flex justify-center items-center">
                    <div className=" w-[202px] h-[185px] font-normal leading-[19.59px] text-[16px] ">
                        <Link to="/main" className="w-[202px] h-[40px] text-[#94a3b8] font-[16px] tracking-[0.5px] flex justify-start items-center  "><img src={home} className="mr-[16px]" />Home</Link>
                        <Link to="/main/tasks" className="w-[202px] h-[40px] text-[#94a3b8] font-[16px] tracking-[0.5px] flex justify-start items-center mt-[8px]"><img src={checkbox} className="mr-[16px]" />My Tasks</Link>
                        <Link to="/main/goals" className="w-[202px] h-[40px] text-[#94a3b8] font-[16px] tracking-[0.5px] flex justify-start items-center mt-[8px]"><img src={cup} className="mr-[16px]" />Goals</Link>
                        <Link to="/main/members" className="w-[202px] h-[40px] text-[#94a3b8] font-[16px] tracking-[0.5px] flex justify-start items-center mt-[8px]"><img src={user} className="mr-[16px]" />Members</Link>
                    </div>
                </div>
                <div className="relative bottom-[1px] ml-[12px] w-[226px] h-[0px] border-t-[1px] border-[#eef2f6]"></div>
                <div className="h-[511px] w-[249px]  flex justify-center items-start">
                    <div className="h-[224px] w-[226px]  mt-[26px] flex items-center flex-col">
                        <div className="flex h-[24px] w-[202px] justify-between items-start">
                            <h1 className="text-[12px] mt-[2px] tracking-[1px] font-bold leading-[15px] text-[#94a3b8]">WORKSPACE</h1>
                            <button className="mt-[1px]"><img src={plus} /></button>
                        </div>
                        <div className="h-[40px] mb-[2px] w-[226px] mt-[13px]">
                            <button className="flex items-center h-[40px] w-[226px] bg-[#F8FAFC] rounded-[4px]">
                                <img src={run1} className="ml-[12px] mb-[1px] mr-[16px]"/>
                                <h1 className="ml-[0.7px] mb-[2px] font-bold tracking-[0.2px] leading-[19px]">Hikoko Design</h1>
                                <button className="ml-[56px] mb-[1px]"><img src={more} /></button>
                            </button>
                        </div>
                        <div className="h-[40px] w-[202px]  mt-[8px]">
                            <button className="flex h-[40px] w-[202px] items-center">
                                <img src={run2} className="mr-[16px] mb-[5px]" />
                                <h1 className="font-medium tracking-[0.2px] leading-[19px] mb-[6px]">Website Design</h1>
                            </button>
                        </div>
                        <div className="h-[40px] w-[202px]  mt-[8px]">
                            <button className="flex h-[40px] w-[202px] items-center">
                                <img src={run3} className="mr-[16px] mb-[5px]"/>
                                <h1 className="font-medium tracking-[0.2px] leading-[19px] mb-[6px]">Mobile Design</h1>
                            </button>
                        </div>
                        <div className="h-[40px] w-[202px]  mt-[8px]">
                            <button className="flex h-[40px] w-[202px] items-center">
                                <img src={run4} className="mr-[16px] mb-[5px]"/>
                                <h1 className="font-medium tracking-[0.5px] leading-[19px] mb-[6px]">Blank</h1>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="h-[100px] w-[250px] flex justify-center items-center">
                    <div className="h-[36px] w-[202px] mb-[2px] ml-[-1px] bg-[#F8FAFC] rounded-[1000px] flex justify-center items-center">
                        <div className="h-[28px] w-[97px] flex justify-center items-center">
                            <img src={moon} className="h-[14px] w-[15px] mr-[7.5px]" />
                            <h1 className="text-[12px] text-[#94A3B8] font-medium tracking-[0.4px] leading-[14.32px]">Dark</h1>
                        </div>
                        <div className="h-[28px] w-[97px] flex justify-center items-center bg-white rounded-[1000px] shadow-theme">
                            <img src={sun} className="h-[16px] w-[16px] mr-[8px]" />
                            <h1 className="text-[12px] text-[#1E293B] font-extrabold tracking-[0.2px] leading-[14.32px]">Light</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav