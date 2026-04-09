import { motion } from 'motion/react';
import { Sparkles, ChevronRight, CheckCircle2, Bot, Code } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium mb-6 border border-blue-100">
              <Sparkles className="w-4 h-4" />
              <span>Khai phóng tiềm năng công nghệ</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 text-slate-900">
              Trang bị tư duy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Trí tuệ nhân tạo</span> cho thế hệ tương lai
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed">
              Giúp con bạn không chỉ là người sử dụng công nghệ, mà trở thành người làm chủ và sáng tạo với AI. Chương trình học chuẩn quốc tế dành riêng cho trẻ em Việt Nam.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a 
                href="#register" 
                className="inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all hover:shadow-xl hover:shadow-blue-600/30"
              >
                Nhận tư vấn miễn phí
                <ChevronRight className="w-5 h-5" />
              </a>
              <a 
                href="#courses" 
                className="inline-flex justify-center items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all"
              >
                Tìm hiểu chương trình
              </a>
            </div>
            
            <div className="mt-10 flex items-center gap-6 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Giáo trình chuẩn Mỹ</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Giáo viên chuyên gia</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-orange-50 rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" 
              alt="Trẻ em học công nghệ" 
              className="rounded-[2rem] sm:rounded-[3rem] shadow-2xl object-cover h-[300px] sm:h-[400px] md:h-[500px] w-full"
              referrerPolicy="no-referrer"
            />
            
            {/* Floating Badge 1 */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4"
            >
              <div className="bg-orange-100 p-3 rounded-xl">
                <Bot className="w-8 h-8 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Thực hành</p>
                <p className="font-bold text-slate-900">Tạo Chatbot AI</p>
              </div>
            </motion.div>

            {/* Floating Badge 2 */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4"
            >
              <div className="bg-blue-100 p-3 rounded-xl">
                <Code className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Tư duy</p>
                <p className="font-bold text-slate-900">Lập trình Logic</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
