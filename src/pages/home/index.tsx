import React from "react";
import Header from "../../components/header";
import Tail from "../../components/tail";

export default function Home() {
    return (
        <div>
            <Header/>
        <div className=" bg-white bg-cover  md:bg-center  overflow-hidden "
             style={{backgroundImage:"url('PL官网Foundation页面背景光.png') "}}>

            <div className=" pt-10 p-5 md:px-40  pt-56 py-56 text-white">
            <div className=" text-center md:text-left md:mt-20 md:w-8/12">
                <div className="text-3xl md:text-3xl font-black mt-6 mb-10 md:w-9/12">
                    We exist to enable community-driven innovation to benefit people around the world.
                </div>
                <div className=" text-base md:w-7/12 align-bottom">
                    We are a non-profit foundation headquartered in Switzerland that is responsible for contracting protocol maintainers,
                    funding ecosystem development,
                    and shepherding core governance of the <a className="underline hover:text-blue-600"
                                                              href="https://playerlink.org">
                    PlayerLink Protocol.</a>
                </div>
            </div>
            <div className="">
                <div className="text-center md:text-left   text-xl mt-20 ">
                To learn more about the protocol
                </div>
                <div className="flex mt-10">
                 <a
                   href="https://playerlink.org"
                    className="flex items-center justify-center px-4 py-3   text-base font-medium rounded-full shadow-sm   text-white  sm:px-16
                    bg-gradient-to-r from-purple-500 via-purple-500 to-blue-500 "
                   >VISIT PlayerLink.ORG
                 </a>
                </div>
            </div>
            </div>
        </div>
            <Tail/>
        </div>
    )
}
