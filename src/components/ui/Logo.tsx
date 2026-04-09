export function Logo() {
  return (
    <div className="flex items-center gap-1.5">
      <div className="grid grid-cols-2 gap-1 w-10 h-10">
        <div className="bg-[#f58220] rounded-bl-full"></div>
        <div className="bg-[#1a1499] relative">
          <div className="absolute top-0 right-0 w-0 h-0 border-t-[14px] border-t-white border-l-[14px] border-l-transparent"></div>
        </div>
        <div className="bg-[#1a1499] rounded-tl-full"></div>
        <div className="bg-[#f58220] rounded-xl flex items-center justify-center">
          <div className="w-3 h-1.5 bg-white rounded-l-full ml-1.5"></div>
        </div>
      </div>
      <span className="text-3xl font-black text-[#1a1499] tracking-widest uppercase ml-1">
        Eureka
      </span>
    </div>
  );
}

export function LogoFooter() {
  return (
    <div className="flex items-center gap-1.5 mb-6">
      <div className="grid grid-cols-2 gap-1 w-8 h-8">
        <div className="bg-[#f58220] rounded-bl-full"></div>
        <div className="bg-[#1a1499] relative">
          <div className="absolute top-0 right-0 w-0 h-0 border-t-[10px] border-t-slate-900 border-l-[10px] border-l-transparent"></div>
        </div>
        <div className="bg-[#1a1499] rounded-tl-full"></div>
        <div className="bg-[#f58220] rounded-lg flex items-center justify-center">
          <div className="w-2 h-1 bg-slate-900 rounded-l-full ml-1"></div>
        </div>
      </div>
      <span className="text-2xl font-black text-white tracking-widest uppercase ml-1">
        Eureka
      </span>
    </div>
  );
}
