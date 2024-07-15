import Image from 'next/image';
import Link from 'next/link';
import LinkdIcon from '../assets/icons/linkedin.svg';
import TwitterIcon from '../assets/icons/x-social.svg';
import GithubIcon from '../assets/images/githgre.png';
import WhatsAppIcon from '../assets/images/whatsapp-xxl.png';

export const Footer = () => {
  return (
    <footer className='py-5 bg-black text-white/60 border-t border-white/20'>
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="text-center">
            @ 2024 Made by Amit. Reach out and connect with me!
          </div>
          <ul className="flex justify-center gap-2.5">
            <li>
              <a href="https://www.linkedin.com/in/amit-masram/" target="_blank" rel="noopener noreferrer">
                <LinkdIcon />
              </a>
            </li>
            <li>
              <a href="https://x.com/AmitMasram10" target="_blank" rel="noopener noreferrer">
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a href="https://github.com/Amitmasram" target="_blank" rel="noopener noreferrer">
                <Image src={GithubIcon} alt="GitHub" width={24} height={24} />
              </a>
            </li>
            <li>
              <a href="https://api.whatsapp.com/send/?phone=918080961469&amp;text=I%27m+interested+in+your+App+Development+service&amp;type=phone_number&amp;app_absent=0" target="_blank" rel="noopener noreferrer">
                <Image src={WhatsAppIcon} alt="WhatsApp" width={24} height={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
