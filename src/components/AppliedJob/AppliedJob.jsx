import { CiLocationOn } from "react-icons/ci";
import { TbCoinRupee } from "react-icons/tb";

const AppliedJob = ({job}) => {
    const {logo, job_title, company_name, job_type, remote_or_onsite, location, salary } = job;
    return (
        <div className="border pt-5 pl-5 rounded-lg mt-5 "> 
            <div className="flex gap-10">
            <div className="mb-5 bg-[#1111] p-16 rounded-lg">
            <img width={'100px'} src={logo} alt="" />
            </div>
            <div className="flex justify-between w-2/3">
                <div>
                <h4 className="text-[19px] font-bold" > {job_title} </h4>
                <p className="font-semibold text-[#11111196] text-[20px] " > {company_name} </p>
                <div className="my-4">
                    <button className="border text-[#7539d4] border-[#7539d4] py-2 px-4 rounded-md mr-4 " > {remote_or_onsite} </button>
                    <button className="border text-[#7539d4] border-[#7539d4] py-2 px-4 rounded-md " > {job_type} </button>
                </div>
                <div className="flex gap-5">
                    <p className="flex items-center " > <CiLocationOn className="mr-2 "  ></CiLocationOn> {location} </p>
                    <p className="flex items-center " > <TbCoinRupee className="mr-2 " ></TbCoinRupee> {salary} </p>
                </div>
                </div>
                <div className="flex items-center" >
                    <button className="btn text-white 
                    bg-gradient-to-r from-sky-500 to-[#9245f7b9]
                    " >View Details</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default AppliedJob;