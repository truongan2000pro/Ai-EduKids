import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "Khóa học này phù hợp với độ tuổi nào?",
    a: "Hiện tại, Eureka tập trung vào học sinh THCS (Lớp 6-9). Trong tương lai, chúng tôi sẽ mở rộng cho Tiểu Học và THPT."
  },
  {
    q: "Giáo viên của Eureka có kinh nghiệm gì?",
    a: "Giáo viên của Eureka có 5+ năm kinh nghiệm trong lĩnh vực giáo dục công nghệ, được đào tạo bài bản theo chuẩn quốc tế (Digcomp 2.2)."
  },
  {
    q: "Khóa học có chứng chỉ không?",
    a: "Có. Học sinh hoàn thành khóa học sẽ nhận chứng chỉ từ Eureka, xác nhận kỹ năng đã học."
  },
  {
    q: "Nếu con em không theo kịp thì sao?",
    a: "Sĩ số lớp chỉ 8-10 học sinh, giáo viên sẽ hỗ trợ cá nhân. Ngoài ra, tất cả buổi học đều được ghi hình để học sinh xem lại."
  },
  {
    q: "Phí học bao gồm những gì?",
    a: "Phí học bao gồm: Khóa học online, tài liệu, video ghi hình, hỗ trợ từ giáo viên, truy cập cộng đồng."
  },
  {
    q: "Làm sao để đăng ký?",
    a: "Bạn có thể đăng ký trực tiếp trên form phía dưới, qua website này, hoặc liên hệ với chúng tôi qua Facebook, Zalo, Email."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Câu Hỏi Thường Gặp
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`border border-slate-200 rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-slate-50 border-blue-200' : 'bg-white'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                >
                  <span className={`font-bold text-lg pr-4 ${isOpen ? 'text-blue-700' : 'text-slate-800'}`}>
                    {faq.q}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
