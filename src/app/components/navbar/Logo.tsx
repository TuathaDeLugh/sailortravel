'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
const Logo = () => {
    const router = useRouter();
    return (
        <div>

        {/* <Image
        alt="logo"
        className="hidden
        md:block
          cursor-pointer"
        height="70"
        width="70"
        src="/images/sitelogo.png"/> */}
        <label className="hidden
        md:block
        text-3xl
        font-sans
        font-bold
          cursor-pointer"
          onClick={()=>router.push('/')}>Sailor Travel</label>
        </div> 
     );
}
 
export default Logo;