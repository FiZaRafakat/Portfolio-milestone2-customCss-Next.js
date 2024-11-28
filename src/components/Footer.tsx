import Link from 'next/link';
import { HiArrowUpRight } from "react-icons/hi2";
import { Button } from './ui/moving-border';
// import { Button } from './ui/moving-border';

const Footer = () => {
  return (
    <div className=''>
      <div className='overflow-x-clip'>
      {/* Connect Section */}
     <div className="connect-section">
        <div className='connect-container'>
        <div className='grain-layout'> 
        </div>
        <div className='connect-content'>
          <div>
        <div className='inline-flex justify-center'>
        <h2 className='connect-heading gradient-text '>Let&apos;s make your Website Shine</h2>
        </div>
         <p className='connect-description'>Ready to bring your next project to life? Let&apos;s connect and discuss how I can help you achive your goals.</p>
         </div>
         <div className='inline-flex'>   
       <Link href={"/contact"}>
       <Button className='button hire-me-button inline-flex'  >
       <span className=''>Hire Me</span>
       <HiArrowUpRight className='size-4 '/>
       </Button>
       </Link>
         
         </div>
        </div>
       </div>
      </div>
      {/* Footer  */}
      <footer className='footer-section'>
        <div className='footer-gradient [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] '></div>
        <div className="footer">
          <div className='border-t border-white/15 py-6 text-xs flex justify-center md:px-10 items-center gap-4 tracking-wider'>
            <div className='text-white/80'>&copy; 2024 Fiza Rafakat. All rights reserved.</div>            
          </div>
        </div>
      </footer>
    </div>
    </div>
  )
}

export default Footer