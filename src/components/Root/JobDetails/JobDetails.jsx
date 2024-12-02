import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../../Utility/localStorage";
import { TbCoinBitcoin } from "react-icons/tb";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";

const JobDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    console.log(job);

    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast('You have Applied successfully');
    }

    return (
        <div>
            <div className="flex mt-10 mb-20">
                <img src="https://i.ibb.co.com/7CJwbbw/bg1.png" alt="" />
                <h2 className="flex justify-center items-center text-center text-2xl font-bold ml-40" >Job Details</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-4">
                <div className="md:col-span-3">
                    <p className="mb-3" ><span className="font-bold">Job Discription:</span> {job.job_description} </p>
                    <p className="mb-3" ><span className="font-bold" >Job Responsibility: </span>{job.job_responsibility}</p>
                    <p className="mb-3" > <span className="font-bold" >Educational Requirements:</span></p>
                    <p className="mb-3"> {job.educational_requirements} </p>
                    <p className="mb-3" ><span className="font-bold mb-3" >Experiences:</span></p>
                    <p>{job.experiences}</p>
                </div>
                <div className="">
                    <div className="bg-[#1111] p-3 rounded-lg mb-3 shadow-lg">
                        <h2 className="text-[20px] font-bold border-b pb-3 mb-3 border-[#7c37eb4f]" >Job Details</h2>
                        <p className="flex items-center"><span className="font-bold flex items-center mr-1">
                            <TbCoinBitcoin className="text-[#6f2de9ea] text-[20px] mr-2" ></TbCoinBitcoin> Salary : </span> {job.salary} </p>
                        <p className="flex items-center mt-2" ><span className="font-bold flex items-center mr-1">
                            <HiOutlineCalendarDays className="text-[#6f2de9ea] text-[20px] mr-2 " ></HiOutlineCalendarDays>
                            Job Title :</span> <small>{job.job_title}</small> </p>
                        <h2 className="text-[20px] font-bold border-b py-4 border-[#7c37eb4f]">Contact Information</h2>
                        <p className="flex items-center mt-3"><span className="font-bold flex items-center mr-1">
                            <FiPhone className="text-[#6f2de9ea] mr-2" ></FiPhone> Phone :</span> {job.contact_information.phone} </p>
                        <p className="flex items-center mt-2"><span className="font-bold flex items-center mr-1">
                            <HiOutlineMail className="text-[#6f2de9ea] mr-2" ></HiOutlineMail> Email :</span> {job.contact_information.email} </p>
                        <p className="mt-2 mb-4"><span className="font-bold flex items-center mr-1">
                            <GrLocation className="text-[#6f2de9ea] mr-2" ></GrLocation> Address : </span> {job.contact_information.address} </p>
                    </div>
                    <div onClick={handleApplyJob} className="hover:shadow-2xl shadow-[#eb73e5]">
                        <button className="btn w-full text-white
                    bg-gradient-to-r from-sky-500 to-[#9245f7b9]"
                        >Apply Now</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;