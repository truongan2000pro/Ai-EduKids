import { motion } from 'motion/react';
import { Brain, Rocket, Shield } from 'lucide-react';

export function Benefits() {
  return (
    <section id="benefits" className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">Tại sao trẻ em cần học AI ngay hôm nay?</h2>
          <p className="text-base sm:text-lg text-slate-600">Trong kỷ nguyên số, AI không chỉ là công cụ mà là ngôn ngữ mới. Hiểu về AI giúp trẻ tự tin bước vào tương lai.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Brain className="w-8 h-8 text-blue-600" />,
              title: "Phát triển tư duy logic",
              desc: "Học cách AI hoạt động giúp trẻ rèn luyện tư duy phản biện, giải quyết vấn đề một cách có hệ thống.",
              color: "bg-blue-50"
            },
            {
              icon: <Rocket className="w-8 h-8 text-orange-600" />,
              title: "Kích thích sáng tạo",
              desc: "Sử dụng AI như một người trợ lý để hiện thực hóa các ý tưởng sáng tạo, vẽ tranh, làm phim, viết truyện.",
              color: "bg-orange-50"
            },
            {
              icon: <Shield className="w-8 h-8 text-green-600" />,
              title: "Sử dụng công nghệ an toàn",
              desc: "Hiểu rõ bản chất của AI giúp trẻ biết cách bảo vệ thông tin cá nhân và sử dụng công nghệ có đạo đức.",
              color: "bg-green-50"
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="p-6 sm:p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-shadow bg-white"
            >
              <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-6`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
