import { LogoFooter } from '../ui/Logo';

export function Footer() {
  return (
    <footer id="footer" className="bg-slate-950 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Cột 1 */}
          <div>
            <LogoFooter />
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Tiên phong trong việc mang giáo dục chuẩn kỷ nguyên số, phát triển tư duy và kỹ năng toàn diện cho trẻ em Việt Nam.
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <p><strong className="text-slate-300 text-base">Công ty Cổ phần Eureka</strong></p>
              <p>📍 Quận 1, TP. Hồ Chí Minh</p>
              <p>📞 1900 xxxx</p>
              <p>📧 hello@eureka.edu.vn</p>
            </div>
          </div>

          {/* Cột 2 */}
          <div className="lg:pl-8">
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Liên Kết Nhanh</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Trang Chủ</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Về Chúng Tôi</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">Khóa Học</a></li>
              <li><a href="#community" className="hover:text-white transition-colors">Cộng Đồng</a></li>
              <li><a href="#footer" className="hover:text-white transition-colors">Liên Hệ</a></li>
            </ul>
          </div>

          {/* Cột 3 */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Theo Dõi</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-500 transition-colors flex items-center gap-2">Facebook</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors flex items-center gap-2">TikTok</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors flex items-center gap-2">YouTube</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors flex items-center gap-2">Zalo</a></li>
            </ul>
          </div>

          {/* Cột 4 */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Pháp Lý</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Điều Khoản Sử Dụng</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chính Sách Riêng Tư</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chính Sách Hoàn Tiền</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-sm text-slate-500">
          <p>© 2026 Eureka. Tất Cả Quyền Được Bảo Vệ.</p>
        </div>
      </div>
    </footer>
  );
}
