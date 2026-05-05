import { motion } from 'motion/react';
import { ArrowRight, Users } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-blue-700 to-indigo-900 relative flex items-center justify-center overflow-hidden">
      {/* Decors */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Sẵn Sàng Bắt Đầu Hành Trình Phát Triển?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Đừng chần chừ. Hôm nay là ngày tốt nhất để bắt đầu. Tham gia Eureka ngay để con em phát triển tư duy, kỹ năng và sống có mục tiêu trong kỷ nguyên số.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a 
              href="#register" 
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_50px_rgba(249,115,22,0.5)] hover:-translate-y-1 active:scale-95"
            >
              Đăng Ký Khóa Học
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#community" 
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg backdrop-blur-sm transition-all hover:-translate-y-1 active:scale-95"
            >
              <Users className="w-5 h-5" />
              Tham Gia Cộng Đồng
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
