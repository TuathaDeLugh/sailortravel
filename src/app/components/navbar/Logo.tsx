'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return ( 
    // <Image
    //   onClick={() => router.push('/')}
    //   className="hidden md:block cursor-pointer" 
    //   src="/images/logo.png" 
    //   height="100" 
    //   width="100" 
    //   alt="Logo" 
    // />
    <label className="hidden
        md:block
        text-3xl
        font-sans
        font-bold
          cursor-pointer"
          onClick={()=>router.push('/')}>Sailor Travel</label>
   );
}
 
export default Logo;
