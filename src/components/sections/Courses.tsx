import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export function Courses() {
  return (
    <section id="courses" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">Lộ trình học tập cá nhân hóa</h2>
          <p className="text-base sm:text-lg text-slate-600">Chương trình được thiết kế phù hợp với từng độ tuổi và khả năng tiếp thu của trẻ.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Course 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-xl border-2 border-blue-200 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-2xl font-medium text-sm z-10">
              7 - 10 Tuổi
            </div>
            <div className="mb-6 relative z-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">AI Explorer</h3>
              <p className="text-slate-500">Khám phá thế giới Trí tuệ nhân tạo</p>
            </div>
            <ul className="space-y-4 mb-8 relative z-10">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                <span className="text-slate-700">Làm quen với khái niệm AI qua trò chơi</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                <span className="text-slate-700">Sáng tạo nghệ thuật với Generative AI</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                <span className="text-slate-700">Lập trình khối lệnh cơ bản với AI</span>
              </li>
            </ul>
            <a href="#register" className="block w-full text-center bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-700 font-bold py-3 rounded-xl transition-all relative z-10">
              Đăng ký tư vấn
            </a>
          </motion.div>

          {/* Course 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-xl border-2 border-orange-200 hover:border-orange-500 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 rounded-bl-2xl font-medium text-sm z-10">
              11 - 15 Tuổi
            </div>
            <div className="mb-6 relative z-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">AI Creator</h3>
              <p className="text-slate-500">Kiến tạo sản phẩm với Trí tuệ nhân tạo</p>
            </div>
            <ul className="space-y-4 mb-8 relative z-10">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0" />
                <span className="text-slate-700">Hiểu sâu về Machine Learning & Deep Learning</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0" />
                <span className="text-slate-700">Tự xây dựng Chatbot và trợ lý ảo cá nhân</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0" />
                <span className="text-slate-700">Lập trình Python ứng dụng AI thực tế</span>
              </li>
            </ul>
            <a href="#register" className="block w-full text-center bg-orange-50 hover:bg-orange-500 hover:text-white text-orange-700 font-bold py-3 rounded-xl transition-all relative z-10">
              Đăng ký tư vấn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
