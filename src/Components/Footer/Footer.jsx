const Footer = () => {
    return (
        <div className="w-10/12 mx-auto">
            <footer className="footer flex flex-col items-center text-base-content p-10">
                <h1 className="text-3xl font-bold">Gadget Heaven</h1>
                <p className="text-[#09080F99] font-bold">Leading the way in cutting-edge technology and innovation.</p>
            </footer>
            <footer className="footer text-[#09080F99] font-semibold border-base-300 border-t px-10 py-4">
            <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;