
const Footer = () => {
    return (
        <footer className=" bg-black text-white pt-20  mt-14">
            <div className=" pb-10">
            <div className="footer max-w-6xl mx-auto">
            <aside>
                <p className="text-2xl font-bold" >CareerHub</p>
                <p className="text-[#ffffff91] ">
                <small>There are many variations of passages of <br /> Lorem Ipsum , but the majority have suffered <br /> alteration in some form.</small>
                </p>
                <img className="mt-3" width={'100px'} src="https://i.ibb.co.com/4R5HtCv/social.png" alt="" />
            </aside>
            <nav>
                <h6 className="font-bold text-[17px]">Company</h6>
                <a className="link link-hover text-[#ffffff91]">About Us</a>
                <a className="link link-hover text-[#ffffff91]">Work</a>
                <a className="link link-hover text-[#ffffff91]">Latest News</a>
                <a className="link link-hover text-[#ffffff91]">Careers</a>
            </nav>
            <nav>
                <h6 className="font-bold text-[17px]">Product</h6>
                <a className="link link-hover text-[#ffffff91]">Prototype</a>
                <a className="link link-hover text-[#ffffff91]">Plans & Pricing</a>
                <a className="link link-hover text-[#ffffff91]">Customers</a>
                <a className="link link-hover text-[#ffffff91]">Integrations</a>
            </nav>
            <nav>
                <h6 className="font-bold text-[17px]">Support</h6>
                <a className="link link-hover text-[#ffffff91]">Help Desk</a>
                <a className="link link-hover text-[#ffffff91]">Sales</a>
                <a className="link link-hover text-[#ffffff91]">Become a Partner</a>
                <a className="link link-hover text-[#ffffff91]">Developers</a>
            </nav>
            <nav>
                <h6 className="font-bold text-[17px]">Contact</h6>
                <a className="link link-hover text-[#ffffff91]">524 Broadway , NYC</a>
                <a className="link link-hover text-[#ffffff91]">+1 777 - 978 - 5570</a>
            </nav>
            </div>
            </div>
            <div className="footer max-w-6xl mx-auto flex justify-between  border-t border-t-[#f5f0f069] pt-10 pb-20">
               <p className="text-[#ffffff91]"><small>@2023 CareerHub. All Rights Reserved</small></p>
               <p className="text-[#ffffff91]"><small>Powered by CareerHub</small></p>
            </div>
        </footer>
    );
};

export default Footer;