import { motion } from 'motion/react';
import { Brain, Palette, Shield } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: <Brain className="w-10 h-10 text-indigo-500" />,
      title: "Phát Triển Tư Duy Tích Cực",
      desc: "Học sinh sẽ phát triển tư duy phản biện, sáng tạo, giải quyết vấn đề hiệu quả. Không chỉ học công nghệ, mà học cách suy nghĩ.",
      color: "from-indigo-50 to-white",
      borderColor: "border-indigo-100"
    },
    {
      icon: <Palette className="w-10 h-10 text-orange-500" />,
      title: "Kỹ Năng Sáng Tạo & Biểu Đạt",
      desc: "Sử dụng công cụ số để tạo nội dung, biểu đạt ý tưởng, xây dựng dự án. Từ lập trình, thiết kế, đến tạo video, học sinh có cơ hội thể hiện sáng tạo.",
      color: "from-orange-50 to-white",
      borderColor: "border-orange-100"
    },
    {
      icon: <Shield className="w-10 h-10 text-green-500" />,
      title: "An Toàn & Trách Nhiệm Trực Tuyến",
      desc: "Học sinh hiểu cách bảo vệ bản thân, quyền riêng tư, và trách nhiệm khi sử dụng công nghệ. Trở thành công dân số có trách nhiệm.",
      color: "from-green-50 to-white",
      borderColor: "border-green-100"
    }
  ];

  return (
    <section id="benefits" className="py-20 md:py-28 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Tại Sao Con Em Cần Học Năng Lực Số?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Trong kỷ nguyên số, năng lực số không phải là lựa chọn, mà là nhu cầu cần thiết. Con em không chỉ cần học công nghệ, mà cần phát triển tư duy, kỹ năng và nhân cách để thích ứng với thế giới đang thay đổi nhanh chóng.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className={`p-8 sm:p-10 rounded-[2rem] bg-gradient-to-b ${item.color} border ${item.borderColor} shadow-sm hover:shadow-2xl transition-all duration-300 group`}
            >
              <div className="mb-8 transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center border border-slate-50">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-snug">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
