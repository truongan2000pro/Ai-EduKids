import { motion } from 'motion/react';
import { Star, CheckCircle2, ChevronRight } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-[30%] h-[50%] rounded-full bg-blue-50/50 blur-3xl"></div>
        <div className="absolute top-[40%] -left-[10%] w-[30%] h-[50%] rounded-full bg-orange-50/50 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-600 font-medium mb-6 border border-orange-100">
              <Star className="w-4 h-4" />
              <span>Câu chuyện của chúng tôi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Khơi dậy đam mê <br className="hidden sm:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a1499] to-[#f58220]">công nghệ</span> từ sớm
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed">
              Eureka được thành lập với sứ mệnh mang giáo dục Trí tuệ nhân tạo (AI) đến gần hơn với trẻ em Việt Nam. Chúng tôi tin rằng AI không chỉ là công nghệ của tương lai, mà là công cụ của hiện tại để các em thỏa sức sáng tạo và phát triển tư duy.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-slate-700"><span className="font-semibold text-slate-900">Phương pháp thực hành:</span> Học qua dự án thực tế, tạo ra sản phẩm ngay trong lớp.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-slate-700"><span className="font-semibold text-slate-900">Giáo trình quốc tế:</span> Được tinh chỉnh phù hợp với văn hóa và cách tiếp thu của trẻ em Việt Nam.</p>
              </div>
            </div>

            <a href="#courses" className="inline-flex items-center gap-2 text-[#1a1499] font-bold hover:gap-3 transition-all">
              Khám phá lộ trình học <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10 pointer-events-none"></div>
              <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" alt="Lớp học AI" className="w-full h-full object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 bg-white p-4 sm:p-6 rounded-3xl shadow-xl border border-slate-100 flex items-center gap-4 z-20">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#1a1499] rounded-2xl flex items-center justify-center text-white font-bold text-xl sm:text-2xl">
                5+
              </div>
              <div>
                <p className="text-sm sm:text-base text-slate-500 font-medium">Năm</p>
                <p className="font-bold text-slate-900 text-sm sm:text-base">Kinh nghiệm</p>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 bg-white p-4 sm:p-6 rounded-3xl shadow-xl border border-slate-100 flex items-center gap-4 z-20">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#f58220] rounded-2xl flex items-center justify-center text-white">
                <Star className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm sm:text-base">1000+</p>
                <p className="text-sm sm:text-base text-slate-500 font-medium">Học viên</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
