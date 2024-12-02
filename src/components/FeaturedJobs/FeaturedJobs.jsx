import { useEffect, useState } from "react";
import { data } from "react-router-dom";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    // this is not the best way to load show all data
    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <div className="text-center my-10 ">
                <h2 className="text-4xl font-bold my-3">Featured Jobs</h2>
                <p className="text-[#111111af] " >Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job} ></Job> )
                }
            </div>
            <div className={ dataLength === jobs.length ? 'hidden' : 'flex justify-center my-10' } >
            {/* <div className="flex justify-center my-10"> */}
            <button onClick={() => setDataLength(jobs.length) }
            className="btn font-bold text-white 
            bg-gradient-to-r from-sky-500 to-[#9245f7b9]
            hover:shadow-xl hover:shadow-[#48335cfd]
            hover:bg-[#3f1010]"
            >See All Jobs</button>
            </div>
            {/* </div> */}
        </div>
    );
};

export default FeaturedJobs;