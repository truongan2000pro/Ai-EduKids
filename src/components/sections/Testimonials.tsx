import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Con em tự tin hơn rất nhiều sau khóa học. Không chỉ học kỹ năng số, mà còn phát triển tư duy, tự tin biểu đạt. Cảm ơn Eureka!",
    author: "Phụ Huynh Hà Nội",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-500"
  },
  {
    quote: "Khóa học rất thực tế, giáo viên tuyệt vời, cộng đồng hỗ trợ tốt. Tôi đã học được rất nhiều và sẵn sàng ứng dụng vào cuộc sống.",
    author: "Học Sinh Lớp 7, TP.HCM",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-500"
  },
  {
    quote: "Eureka giúp tôi hiểu hơn về kỷ nguyên số và cách đồng hành cùng con em. Cộng đồng rất ấm áp và hỗ trợ.",
    author: "Phụ Huynh Đà Nẵng",
    bgColor: "bg-green-50",
    borderColor: "border-green-500"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Những Gì Học Sinh & Phụ Huynh Nói Về Eureka
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`p-8 rounded-3xl bg-white shadow-lg border-l-4 ${item.borderColor} relative hover:-translate-y-2 transition-transform duration-300`}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 text-lg leading-relaxed mb-8 italic">"{item.quote}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${item.bgColor} text-slate-700 border-2 border-white shadow-sm`}>
                  {item.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{item.author}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
