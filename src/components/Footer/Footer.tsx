import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="font-sans-sm grid grid-cols-8 mb-2 items-end">
      <div className="col-span-2">
        <FooterLogo />
      </div>
      <div className="col-start-4 col-span-2">
        <div>Daybreak Studio</div>
        <div className="opacity-50">555 Richmond St, Suite 909</div>
        <div className="opacity-50">Toronto, Ontario, M6K 1X9</div>
      </div>
      <div className="col-start-6 col-span-2">
        <div>Contact</div>
        <a className="block opacity-50">hello@daybreak.studio</a>
        <a className="block opacity-50">careers@daybreak.studio</a>
      </div>
      <div className="col-start-8 col-span-1">
        <a className="block">Socials</a>
        <a className="block opacity-50">Instagram</a>
        <a className="block opacity-50">Twitter</a>
      </div>
    </footer>
  );
};

const FooterLogo = () => (
  <svg
    className="w-full h-fit mb-2"
    width="419"
    height="227"
    viewBox="0 0 419 227"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M264.027 227L209.5 171.94L154.973 227H0V196.089H152.103L21.0458 118.813L36.3516 91.766L167.409 169.043L91.8357 35.7404L118.621 20.2851L194.194 153.587V0H224.806V153.587L301.336 20.2851L327.164 35.7404L251.591 169.043L382.648 91.766L397.954 118.813L266.897 196.089H419V227H264.027Z"
      fill="black"
    />
  </svg>
);

export default Footer;
