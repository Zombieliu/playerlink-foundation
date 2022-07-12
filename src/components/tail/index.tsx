
import Link from "next/link"
import React from "react"


const Tail=()=>{

    return(
        <div className="bg-black">
            <div className="text-center md:flex  md:justify-start   md:mx-40  md:py-16 text-white ">
                <div className="pt-10 text-xs text-gray-400 md:text-left">
                    © 2022 PlayerLink Foundation
                    <div className="mt-2">
                        All Rights Reserved
                    </div>
                </div>
                <div className="pt-10 md:mr-32 md:ml-32 md:text-left">
                    <div className="text-xl">
                        Contact Us
                    </div>
                    <div className="mt-2  text-gray-400 ">
                        <a href="mailto: hello@playerlink.org">
                            Send an Email
                            <i className="pl-2 fa fa-arrow-right text-gray-200" aria-hidden="true"></i>
                        </a>

                    </div>
                </div>
                <div className="pt-10 mb-10 md:text-left">
                    <div className="text-xl">
                        Careers
                    </div>
                    <div className="mt-2   text-gray-400">
                        <a href="https://playerlink.org">
                            View Openings
                            <i className="pl-2 fa fa-arrow-right text-gray-200" aria-hidden="true"></i>
                        </a>

                    </div>
                </div>
            </div>
        </div>

    )
}
export  default Tail
