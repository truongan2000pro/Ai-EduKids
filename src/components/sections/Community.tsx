import { motion } from 'motion/react';
import { Share2, MessageCircle, BookOpen, HelpCircle, ArrowRight } from 'lucide-react';

export function Community() {
  const features = [
    {
      icon: <Share2 className="w-8 h-8 text-blue-500" />,
      title: "Chia Sẻ & Học Hỏi",
      desc: "Tiếp cận kiến thức, kỹ năng, kinh nghiệm từ các chuyên gia và phụ huynh khác. Cùng nhau phát triển."
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-pink-500" />,
      title: "Giao Lưu & Kết Nối",
      desc: "Kết nối với các phụ huynh, học sinh, giáo viên có cùng quan tâm. Xây dựng mạng lưới hỗ trợ vững chắc."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-amber-500" />,
      title: "Tài Liệu Miễn Phí",
      desc: "Truy cập 43+ tài liệu miễn phí về giáo dục, định hướng, giao tiếp, tips & framework thực tế."
    },
    {
      icon: <HelpCircle className="w-8 h-8 text-emerald-500" />,
      title: "Hỗ Trợ & Tư Vấn",
      desc: "Nhận hỗ trợ từ đội ngũ Eureka, tư vấn về học tập, định hướng, và các phương pháp giáo dục con em."
    }
  ];

  return (
    <section id="community" className="py-20 md:py-32 bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] mix-blend-screen transform -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-blue-200 font-semibold mb-6 border border-white/20 backdrop-blur-md">
            Dành Cho Phụ Huynh & Học Sinh
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Tham Gia Cộng Đồng <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Eureka</span>
          </h2>
          <p className="text-lg sm:text-xl text-blue-100/80 leading-relaxed">
            Cộng đồng <strong className="text-white font-semibold">"Cha Mẹ Đồng Hành Cùng Con Trong Kỷ Nguyên Số"</strong> là nơi phụ huynh và học sinh cùng nhau học hỏi, chia sẻ kinh nghiệm, hỗ trợ nhau phát triển trong thế giới số.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {features.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-blue-100/70 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://facebook.com/groups/eurekacommunity" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-5 rounded-full font-bold text-xl transition-all shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:shadow-[0_0_60px_rgba(249,115,22,0.6)] hover:-translate-y-1 w-full sm:w-auto"
          >
            Tham Gia Cộng Đồng Ngay
            <ArrowRight className="w-6 h-6" />
          </a>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-blue-200 font-medium">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              1000+ Thành Viên
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-blue-500/50"></div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-400"></span>
              95% Phản hồi hài lòng
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
