import React from "react";
import Card from "./card";
import flash from '../image/flash.png'
import star from '../image/star.png'
import user2 from '../image/user2.png'
import user3 from '../image/user3.png'
import more2 from '../image/more2.png'
import cardimg1 from '../image/cardimg1.png'
import cardimg2 from '../image/cardimg2.png'
import plus2 from '../image/plus2.png'
import button2 from '../image/button2.jpg'
import { useAuth } from './authprovider';
import { useEffect } from "react";

function MyTasks () {

    const auth = useAuth();

    // TypeScript проверка на существование значения в контексте
    if (!auth) throw new Error("Auth context must be used within an AuthProvider");

    const { isLoggedIn } = auth;

    useEffect(() => {
        if (!isLoggedIn) {
            alert('You need to sign in to access this page.');
        }
    }, [isLoggedIn]);

    if (!isLoggedIn) {
        return null; // Or you could redirect them back to the main page
    }


    return (
        <div className="absolute h-[843px] w-[61.979vw] mt-[1px] ml-[-1px] font-sfprodisplay">
            <div className="w-[1190] relative bottom-[2px] h-[0px] border-t-[1px] border-[#eef2f6]"></div>
            <div className="w-[107px] relative bottom-[4px] left-[136px] h-[2px] bg-[#306BFF] rounded-[50px]"></div>
            <div className="ml-[48px] mt-[43.5px] flex">
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
                    <button className="w-[97px] h-[40px] pl-[0px] mt-[0.6px] border-[1px] rounded-[8px] border-[#E2E8F0] flex items-center justify-center font-semibold text-[14px] tracking-[0.2px] leading-[18.71px]"><img src={user2} className="mr-[8px]"/>Share</button>
                </div>
            </div>
            <div className="flex ml-[48px] mt-[24px] h-[40px]">
                <img src={user3} />
                <button className="w-[86px] h-[40px] ml-[16px] border-[1px] rounded-[8px] border-[#E2E8F0] flex items-center justify-center mr-[8px] text-[14px] font-semibold tracking-[0.4px]">Only My</button>
            </div>
            <div className="flex h-[48px] flex-wrap">
                <div className="h-[572px] w-[249px] mr-[32px]">
                    <div className="flex items-center justify-between ml-[48px] mt-[48px]">
                        <div className="flex items-center">
                            <h1 className="text-[14px] text-[#1E293B] tracking-[1px] leading-[14px] font-bold mr-[12px]">TODO</h1>
                            <h1 className="h-[24px] ml-[-1px] w-[32px] pr-[0px] text-[12px] text-[#94A3B8] font-bold border-[1px] border-[#E2E8F0] rounded-[1000px] flex items-center justify-center">2</h1>
                        </div>
                        <div className="flex mr-[-48px]">
                            <img src={more2} />
                        </div>
                    </div>
                    <div className="ml-[48px] mt-[16px] w-[249px] h-[2px] bg-[#1E293B] rounded-[50px]"></div>
                    <div className="mt-[32px] ml-[132px]">
                        <Card headname='UX Adjustments' mainimg={undefined} parag="It just needs to adapt the UI from what you did before." />
                        <Card headname='Moodboards' mainimg={cardimg2} parag={undefined} />
                    </div>
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
                    <div className="ml-[48px] mt-[16px] w-[250px] h-[2px] bg-[#306BFF] rounded-[50px] "></div>
                    <div className="mt-[32px] ml-[132px]">
                        <Card headname='Slack Integration' mainimg={undefined} parag="Add a field in the portal to let the user connect their Slack account." />
                        <Card headname='Copywriting of the app' mainimg={undefined} parag={"Composing words to provide people with decision-making clarity when interacting with a product."} />
                
                    </div>
                </div>
                <div className="h-[42px] w-[249px] mr-[32px]">
                    <div className="flex items-center justify-between ml-[48px] mt-[48px]">
                        <div className="flex items-center ml-[1px] mt-[1px]">
                            <h1 className="text-[14px] text-[#1E293B] tracking-[1px] leading-[14px] font-bold mr-[12px]">QA</h1>
                            <h1 className="h-[24px] ml-[-1px] w-[32px] pr-[0px] text-[12px] text-[#94A3B8] font-bold border-[1px] border-[#E2E8F0] rounded-[1000px] flex items-center justify-center">8</h1>
                        </div>
                        <div className="flex mr-[-50px]">
                            <img src={more2} />
                        </div>
                    </div>
                    <div className="ml-[49.5px] mt-[15px] w-[250px] h-[2px] bg-[#FFB580] rounded-[50px]"></div>
                    <div className="mt-[32px] ml-[132px] flex flex-col space-y-[60px]">
                        <Card headname='Dashboard Design' mainimg={cardimg1} parag={undefined} />
                        <Card headname='Design System' mainimg={undefined} parag="Create a consistent look and feel both on web and mobile."  />
                    </div>
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
                    <div className="mt-[32px] ml-[132px] flex flex-col space-y-5">
                        <Card headname='Presentation' mainimg={undefined} parag={"Help businesses to clearly define their annual e-commerce digital strategy by creating a high-level plan."} />
                        <Card headname='Brainstorming' mainimg={undefined} parag="" />
                    </div>
                </div>
                <div className="absolute bottom-[39px] right-[48px]">
                    <div className="flex justify-center items-center h-[48px] w-[189px]">
                        <button className="flex justify-center items-center h-[48px] w-[131px] bg-[#306BFF] rounded-[1000px] ">
                            <img className="mr-[8px]" src={plus2}/>
                            <h1 className="text-white tracking-[0.2px] leading-[16.71px] text-[14px] font-bold">New Task</h1>
                        </button>
                        <button className="bg-black ml-[10px]"><img className="" src={button2}/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyTasks;