import { motion } from 'motion/react';
import { BookOpen, CheckCircle2 } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" 
                alt="Đội ngũ Eureka" 
                className="w-full h-full object-cover aspect-[4/5] object-center" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent pointer-events-none"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg">
                  <p className="text-slate-900 font-bold text-lg">Phá vỡ giới hạn giáo dục truyền thống.</p>
                  <p className="text-slate-600 text-sm mt-1">Đồng hành cùng học sinh trên từng chặng đường.</p>
                </div>
              </div>
            </div>
            
            {/* Decors */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-600 font-medium mb-6 border border-orange-100">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-wider">Câu Chuyện Của Chúng Tôi</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
              Tại Sao Chọn <span className="text-[#1a1499]">Eureka</span>?
            </h2>
            
            <div className="prose prose-lg text-slate-600 mb-10 leading-relaxed">
              <p>
                Eureka được thành lập với sứ mệnh đồng hành cùng học sinh Việt Nam trong việc phát triển tư duy, kỹ năng và nhân cách để sống có mục tiêu trong kỷ nguyên số.
              </p>
              <p className="font-semibold text-slate-800 mt-6 mb-4">Chúng tôi tin rằng:</p>
            </div>

            <div className="space-y-5 mb-10">
              {[
                "Giáo dục không chỉ là truyền kiến thức, mà là phát triển con người",
                "Kỹ năng số là nền tảng cần thiết cho tương lai",
                "Phụ huynh cần được hỗ trợ để đồng hành cùng con em",
                "Cộng đồng là sức mạnh để cùng nhau phát triển"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-slate-700 font-medium">{text}</p>
                </div>
              ))}
            </div>

            <a 
              href="#courses" 
              className="inline-flex items-center gap-3 text-white bg-slate-900 hover:bg-slate-800 px-8 py-4 rounded-full font-bold transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              Tìm Hiểu Thêm Về Khóa Học
            </a>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
