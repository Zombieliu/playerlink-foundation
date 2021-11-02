
export default function Home() {
    return (
        <div>
        <div className=" bg-white bg-cover  md:bg-center  overflow-hidden "
             style={{backgroundImage:"url('https://near.foundation/wp-content/themes/nf19/assets/img/map.svg') "}}>
            <div className=" flex flex-wrap justify-center md:flex-nowrap md:justify-start p-5 md:px-40 ">
            <div className=" text-center md:text-left md:mt-20 md:w-8/12">
                <div className="flex justify-center md:justify-start p-16 md:p-0 md:-pt-10 lg:flex-1">
                    <a href="#">
                        <span className="sr-only">Workflow</span>
                        <img
                            className="w-auto h-16"
                            src="https://near.foundation/wp-content/themes/nf19/assets/img/logo.svg?t=1573683619"
                            alt=""
                        />
                    </a>
                </div>
                <div className="text-3xl md:text-3xl font-black mt-6 mb-10 md:w-9/12">
                    We exist to enable community-driven innovation to benefit people around the world.
                </div>
                <div className=" text-base md:w-7/12 align-bottom">
                    We are a non-profit foundation headquartered in Switzerland that is responsible for contracting protocol maintainers,
                    funding ecosystem development,
                    and shepherding core governance of the <a className="underline hover:text-blue-600" href="">NEAR Protocol.</a>
                </div>
            </div>
            <div className="flex-col flex-wrap justify-between py-20 md:py-40  ">
                <div className="text-center md:text-left  text-xl md:mt-36 ">
                To learn more about the protocol
                </div>
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid p-10 sm:gap-5">
                 <a
                   href="#"
                    className="flex items-center justify-center px-4 py-3 border border-green-400 text-base font-medium rounded-full shadow-sm  text-green-400 hover:text-white hover:bg-green-400 sm:px-16"
                   >VISIT NEAR.ORG

                 </a>
                </div>
            </div>
            </div>
        </div>
            <div className="text-center md:flex  md:justify-start   md:mx-40  md:py-16 border-t-2">
                <div className="pt-10 text-xs text-gray-400 md:text-left">
                    © 2021 NEAR Foundation
                    <div className="mt-2">
                    All Rights Reserved
                    </div>
                </div>
                <div className="pt-10 md:mr-32 md:ml-32 md:text-left">
                    <div className="text-xl">
                    Contact Us
                    </div>
                    <div className="mt-2  text-blue-600 ">
                        <a href="">
                    Send an Email
                            <i className="pl-2 fa fa-arrow-right text-gray-200" aria-hidden="true"></i>
                        </a>

                    </div>
                </div>
                <div className="pt-10 mb-10 md:text-left">
                    <div className="text-xl">
                    Careers
                    </div>
                    <div className="mt-2   text-blue-600">
                        <a href="">
                    View Openings
                            <i className="pl-2 fa fa-arrow-right text-gray-200" aria-hidden="true"></i>
                        </a>

                </div>
                </div>
            </div>
        </div>
    )
}
