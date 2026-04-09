import { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'motion/react';
import { 
  Brain, 
  Rocket, 
  Shield, 
  Star, 
  CheckCircle2, 
  ChevronRight, 
  Menu, 
  X,
  Bot,
  Code,
  Sparkles
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-1.5">
              <div className="grid grid-cols-2 gap-1 w-10 h-10">
                <div className="bg-[#f58220] rounded-bl-full"></div>
                <div className="bg-[#1a1499] relative">
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[14px] border-t-white border-l-[14px] border-l-transparent"></div>
                </div>
                <div className="bg-[#1a1499] rounded-tl-full"></div>
                <div className="bg-[#f58220] rounded-xl flex items-center justify-center">
                  <div className="w-3 h-1.5 bg-white rounded-l-full ml-1.5"></div>
                </div>
              </div>
              <span className="text-3xl font-black text-[#1a1499] tracking-widest uppercase ml-1">
                Eureka
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Về chúng tôi</a>
              <a href="#benefits" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Lợi ích</a>
              <a href="#courses" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Khóa học</a>
              <a 
                href="#register" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-orange-500/30"
              >
                Đăng ký ngay
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-4 shadow-xl">
            <a href="#about" className="block text-slate-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Về chúng tôi</a>
            <a href="#benefits" className="block text-slate-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Lợi ích</a>
            <a href="#courses" className="block text-slate-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Khóa học</a>
            <a 
              href="#register" 
              className="block text-center bg-orange-500 text-white px-6 py-3 rounded-full font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Đăng ký ngay
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium mb-6 border border-blue-100">
                <Sparkles className="w-4 h-4" />
                <span>Khai phóng tiềm năng công nghệ</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 text-slate-900">
                Trang bị tư duy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Trí tuệ nhân tạo</span> cho thế hệ tương lai
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                Giúp con bạn không chỉ là người sử dụng công nghệ, mà trở thành người làm chủ và sáng tạo với AI. Chương trình học chuẩn quốc tế dành riêng cho trẻ em Việt Nam.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a 
                  href="#register" 
                  className="inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all hover:shadow-xl hover:shadow-blue-600/30"
                >
                  Nhận tư vấn miễn phí
                  <ChevronRight className="w-5 h-5" />
                </a>
                <a 
                  href="#courses" 
                  className="inline-flex justify-center items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all"
                >
                  Tìm hiểu chương trình
                </a>
              </div>
              
              <div className="mt-10 flex items-center gap-6 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Giáo trình chuẩn Mỹ</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Giáo viên chuyên gia</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-orange-50 rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" 
                alt="Trẻ em học công nghệ" 
                className="rounded-[2rem] sm:rounded-[3rem] shadow-2xl object-cover h-[300px] sm:h-[400px] md:h-[500px] w-full"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Badge 1 */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4"
              >
                <div className="bg-orange-100 p-3 rounded-xl">
                  <Bot className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Thực hành</p>
                  <p className="font-bold text-slate-900">Tạo Chatbot AI</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4"
              >
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Code className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Tư duy</p>
                  <p className="font-bold text-slate-900">Lập trình Logic</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
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

      {/* Benefits Section */}
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

      {/* Courses Section */}
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

      {/* Registration Form Section */}
      <RegistrationSection />

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center gap-1.5 mb-6">
                <div className="grid grid-cols-2 gap-1 w-8 h-8">
                  <div className="bg-[#f58220] rounded-bl-full"></div>
                  <div className="bg-[#1a1499] relative">
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[10px] border-t-slate-900 border-l-[10px] border-l-transparent"></div>
                  </div>
                  <div className="bg-[#1a1499] rounded-tl-full"></div>
                  <div className="bg-[#f58220] rounded-lg flex items-center justify-center">
                    <div className="w-2 h-1 bg-slate-900 rounded-l-full ml-1"></div>
                  </div>
                </div>
                <span className="text-2xl font-black text-white tracking-widest uppercase ml-1">
                  Eureka
                </span>
              </div>
              <p className="text-slate-400 max-w-sm mb-6">
                Tiên phong trong việc mang giáo dục Trí tuệ nhân tạo chuẩn quốc tế đến với trẻ em Việt Nam.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Liên kết</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-white transition-colors">Về chúng tôi</a></li>
                <li><a href="#courses" className="hover:text-white transition-colors">Khóa học</a></li>
                <li><a href="#benefits" className="hover:text-white transition-colors">Lợi ích</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Liên hệ</h4>
              <ul className="space-y-2">
                <li>Hotline: 1900 xxxx</li>
                <li>Email: hello@aiedukids.vn</li>
                <li>Địa chỉ: Quận 1, TP. Hồ Chí Minh</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
            © 2026 Eureka. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function RegistrationSection() {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    childAge: '',
    note: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // BƯỚC 4: THAY ĐƯỜNG LINK WEB APP CỦA BẠN VÀO BIẾN BÊN DƯỚI
      // Ví dụ: const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycb.../exec';
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwyksLsoo2J-t3YfCwwQ4BBEqxGH8Ir_n4mgf8mFvHMVKD5rTaMRh8YlRGMWhV3z7Q4vw/exec';
      
      if (GOOGLE_SCRIPT_URL === 'YOUR_WEB_APP_URL_HERE') {
        // Nếu chưa thay link, chạy giả lập (chờ 1.5s rồi báo thành công)
        await new Promise(resolve => setTimeout(resolve, 1500));
      } else {
        // Nếu đã có link, gửi dữ liệu thật lên Google Sheets
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors', // Bắt buộc phải có no-cors khi gọi Google Apps Script từ browser
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });
      }

      setSubmitStatus('success');
      setFormData({ parentName: '', phone: '', email: '', childAge: '', note: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="register" className="py-20 bg-blue-600 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/50 blur-3xl"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-500/50 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          {/* Left side - Info */}
          <div className="lg:w-5/12 bg-slate-900 p-8 sm:p-10 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Đăng ký tư vấn lộ trình học AI</h3>
              <p className="text-slate-300 mb-8 text-base sm:text-lg">
                Hãy để lại thông tin, chuyên viên giáo dục của chúng tôi sẽ liên hệ tư vấn lộ trình phù hợp nhất cho con bạn trong vòng 24h.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Star className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Học thử miễn phí</p>
                    <p className="text-slate-400 text-sm">Trải nghiệm 1 buổi học AI thực tế</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Cam kết chất lượng</p>
                    <p className="text-slate-400 text-sm">Hoàn học phí nếu không hài lòng</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="lg:w-7/12 p-8 sm:p-10 lg:p-12 bg-white">
            {submitStatus === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Đăng ký thành công!</h4>
                <p className="text-slate-600 max-w-md">
                  Cảm ơn ba/mẹ đã quan tâm. Đội ngũ tư vấn sẽ liên hệ qua số điện thoại trong thời gian sớm nhất.
                </p>
                <button 
                  onClick={() => setSubmitStatus('idle')}
                  className="mt-8 text-blue-600 font-medium hover:underline"
                >
                  Đăng ký thêm bé khác
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Họ tên Phụ huynh *</label>
                    <input 
                      type="text" 
                      name="parentName"
                      required
                      value={formData.parentName}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white text-sm sm:text-base"
                      placeholder="Nhập họ tên"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Số điện thoại *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white text-sm sm:text-base"
                      placeholder="09xx xxx xxx"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white text-sm sm:text-base"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Độ tuổi của bé *</label>
                    <select 
                      name="childAge"
                      required
                      value={formData.childAge}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white appearance-none text-sm sm:text-base"
                    >
                      <option value="">Chọn độ tuổi</option>
                      <option value="7-10">7 - 10 tuổi (Tiểu học)</option>
                      <option value="11-15">11 - 15 tuổi (THCS)</option>
                      <option value="16+">Trên 15 tuổi</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Ghi chú thêm (nếu có)</label>
                  <textarea 
                    name="note"
                    value={formData.note}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white resize-none text-sm sm:text-base"
                    placeholder="Bé đã từng học lập trình chưa? Mong muốn của ba mẹ là gì?"
                  ></textarea>
                </div>

                {submitStatus === 'error' && (
                  <p className="text-red-500 text-sm">Có lỗi xảy ra, vui lòng thử lại sau.</p>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 sm:py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-orange-500/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-base sm:text-lg"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    'Nhận tư vấn & Ưu đãi'
                  )}
                </button>
                <p className="text-center text-xs text-slate-500 mt-4">
                  Thông tin của bạn được bảo mật tuyệt đối và chỉ dùng cho mục đích tư vấn giáo dục.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
