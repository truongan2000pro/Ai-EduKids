import { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'motion/react';
import { Star, Shield, CheckCircle2 } from 'lucide-react';

export function RegistrationForm() {
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
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwyksLsoo2J-t3YfCwwQ4BBEqxGH8Ir_n4mgf8mFvHMVKD5rTaMRh8YlRGMWhV3z7Q4vw/exec';
      
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      setSubmitStatus('success');
      setFormData({ parentName: '', phone: '', email: '', childAge: '', note: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
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
