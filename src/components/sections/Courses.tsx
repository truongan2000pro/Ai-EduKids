import { motion } from 'motion/react';
import { Clock, Users, ArrowRight } from 'lucide-react';

const courses = [
  {
    title: "Giao Tiếp Lành Mạnh & Xử Lý Bắt Nạt",
    age: "Lớp 6-9 (THCS)",
    time: "4 buổi × 60-70 phút",
    price: "1.000.000đ",
    desc: "Học sinh sẽ học cách giao tiếp lành mạnh, nhận biết bắt nạt, xử lý hiệu quả, xây dựng mối quan hệ tích cực."
  },
  {
    title: "Nhận Biết Tin Giả & Tư Duy Phản Biện",
    age: "Lớp 6-9 (THCS)",
    time: "5 buổi × 60-70 phút",
    price: "1.300.000đ",
    desc: "Học cách tìm kiếm thông tin, đánh giá độ tin cậy, nhận biết tin giả và phát triển tư duy phản biện."
  },
  {
    title: "Quản Lý Thời Gian & Sức Khỏe Số",
    age: "Lớp 6-9 (THCS)",
    time: "4 buổi × 60-70 phút",
    price: "1.000.000đ",
    desc: "Quản lý thời gian sử dụng internet, bảo vệ sức khỏe (mắt, lưng), cân bằng học tập & giải trí."
  },
  {
    title: "An Toàn Thông Tin & Phòng Lừa Đảo",
    age: "Lớp 6-9 (THCS)",
    time: "4 buổi × 60-70 phút",
    price: "1.000.000đ",
    desc: "Bảo vệ thông tin cá nhân, nhận biết các chiêu trò lừa đảo qua mạng và cách xử lý khi bị lộ thông tin."
  },
  {
    title: "Công Dân Số - Quyền & Trách Nhiệm",
    age: "Lớp 6-9 (THCS)",
    time: "5 buổi × 60-70 phút",
    price: "1.300.000đ",
    desc: "Hiểu quyền lợi trực tuyến, trách nhiệm pháp lý, hành xử đúng đắn, các luật lệ liên quan đến không gian mạng."
  },
  {
    title: "Sáng Tạo & Tự Tin Biểu Đạt",
    age: "Lớp 6-9 (THCS)",
    time: "5 buổi × 60-70 phút",
    price: "1.300.000đ",
    desc: "Học cách tạo nội dung (video, hình ảnh, bài viết), chia sẻ an toàn và xây dựng sự tự tin."
  },
  {
    title: "Định Hướng Nghề Nghiệp Số",
    age: "Lớp 6-9 (THCS)",
    time: "6 buổi × 60-70 phút",
    price: "1.500.000đ",
    desc: "Hiểu các nghề nghiệp tương lai trong kỷ nguyên số, kỹ năng cần chuẩn bị và định hướng chặng đường tiếp theo."
  }
];

export function Courses() {
  return (
    <section id="courses" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Các Khóa Học Của Eureka</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Chương trình học được thiết kế phù hợp với từng độ tuổi và năng lực của học sinh. 
            Mỗi khóa tập trung vào kỹ năng cần thiết, giá trị thực tế và sự phát triển toàn diện.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {courses.map((course, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 flex flex-col h-full group"
            >
              <div className="mb-6 flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors line-clamp-2">
                  {course.title}
                </h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                    <Users className="w-4 h-4 text-slate-400" />
                    Độ tuổi: {course.age}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                    <Clock className="w-4 h-4 text-slate-400" />
                    Thời gian: {course.time}
                  </div>
                </div>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {course.desc}
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Học phí</p>
                  <p className="font-bold text-lg text-orange-600">{course.price}</p>
                </div>
                <a href="#register" className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
