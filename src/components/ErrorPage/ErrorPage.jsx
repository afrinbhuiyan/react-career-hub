import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="border w-1/4 ml-[35%] mt-80 bg-[#218fd85b] p-4 rounded-lg shadow-2xl">
            <div className="flex justify-between pb-3">
                <h1>error</h1>
                <p className="bg-[#e42525] px-6 font-bold text-[#ffff]" ><Link to={'/'} >X</Link></p>
            </div>
            <div className="border border-[#080808] bg-white">
                <div className="flex ml-3">
                <div className=" pt-4">
                    <img width={'30px'} src="https://i.ibb.co.com/1MXKY61/access-denied.png" alt="" />
                </div>
            <div className="p-3">
            <h2 className="text-[20px] text-[#1220e4] mb-3" >Can't log on because the server is <br /> temporarily unavilavle</h2>
            <p className="mb-3"><small>if the problem pirsists contact your <br /> system addministrator</small></p>
            </div>
                </div>
            <div className="border-t-2 py-3 bg-[#1111] flex justify-end">
                <Link to={"/"} ><button className="btn-sm rounded-md border-2 border-[#3553d679] bg-[#593bdf1f]
            font-semibold text-[#4f2de6] hover:shadow-[#282741] hover:shadow-2xl mr-3 ">Go back to home</button></Link>
            </div>
            </div>
        </div>
    );
};

export default ErrorPage;