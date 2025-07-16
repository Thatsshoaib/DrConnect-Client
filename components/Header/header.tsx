"use client"
import Link from "next/link";
import { navLinks } from "../../utils/data";
import { useRouter } from "next/navigation";


export default function Header() {
  const router = useRouter();
  return (  
    <header className="w-full bg-[var(--card-bg)]  sticky top-0 z-50 rounded-b-4xl ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[var(--primary)]">
          DrConnect
        </Link>
    
<div className="flex items-center gap-6">
  {
  navLinks.map((item,idx)=>{
    return <button key={idx} onClick={()=>{
      router.push(item.href);
    }}>{item.label}</button>
  })
}
</div>
      

        {/* Right Controls */}
        <div className="flex items-center gap-4">
        
          <button 
          className="bg-[var(--button-bg)] px-8 py-1 rounded-full"
          onClick={() => router.push("/register")}>
            login
          </button>
        </div>
      </div>
    </header>
  );
}
