import { motion } from 'motion/react';
import { Target, ChevronRight, CheckCircle2, TrendingUp, Users, ThumbsUp } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-white to-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid border-b border-transparent lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 text-blue-700 font-medium mb-6 border border-blue-200">
              <Target className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-wider">Chuẩn Bị Tương Lai Số Cho Con Em</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-slate-900 tracking-tight">
              Trang Bị Tư Duy & Kỹ Năng Số Cho <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Thế Hệ Trẻ Việt Nam</span>
            </h1>
            
            <div className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed space-y-4">
              <p>
                Eureka không chỉ dạy công nghệ, mà xây dựng tư duy, kỹ năng và nhân cách cho con em trong kỷ nguyên số.
              </p>
              <p className="font-medium">Chương trình học chuẩn quốc tế (Digcomp 2.2 & Thông tư 02/2025) dành riêng cho học sinh Việt Nam, giúp con em:</p>
              <ul className="space-y-2 mt-2">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Phát triển tư duy tích cực & phản biện</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Học tập hiệu quả & tự tin</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Sống có mục tiêu & lan tỏa giá trị</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#courses" 
                className="inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-1 active:scale-95"
              >
                Khám Phá Khóa Học
              </a>
              <a 
                href="#community" 
                className="inline-flex justify-center items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 px-8 py-4 rounded-full font-bold text-lg transition-all hover:border-slate-300 hover:shadow-md active:scale-95"
              >
                Tham Gia Cộng Đồng
              </a>
            </div>
          </motion.div>

          {/* Cột Phải: Hình ảnh & Thống kê */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:ml-10"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-indigo-100 rounded-[3rem] transform rotate-3 scale-105 -z-10 shadow-inner"></div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
              alt="Học sinh đang học tập nhóm" 
              className="rounded-[2.5rem] shadow-2xl object-cover h-[450px] lg:h-[550px] w-full border-4 border-white"
              referrerPolicy="no-referrer"
            />
            
            {/* The stats bar anchored at the bottom of the image */}
            <div className="absolute -bottom-8 left-0 right-0 max-w-sm mx-auto sm:max-w-md">
              <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 border border-slate-100">
                <div className="grid grid-cols-3 gap-2 sm:gap-4 divide-x divide-slate-100 text-center">
                  <div className="px-2">
                    <div className="flex justify-center mb-1"><TrendingUp className="w-5 h-5 text-orange-500" /></div>
                    <p className="text-lg sm:text-2xl font-black text-slate-900">5+</p>
                    <p className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Năm K.nghiệm</p>
                  </div>
                  <div className="px-2">
                    <div className="flex justify-center mb-1"><Users className="w-5 h-5 text-blue-500" /></div>
                    <p className="text-lg sm:text-2xl font-black text-slate-900">1000+</p>
                    <p className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Học Viên</p>
                  </div>
                  <div className="px-2">
                    <div className="flex justify-center mb-1"><ThumbsUp className="w-5 h-5 text-green-500" /></div>
                    <p className="text-lg sm:text-2xl font-black text-slate-900">95%</p>
                    <p className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Hài Lòng</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
