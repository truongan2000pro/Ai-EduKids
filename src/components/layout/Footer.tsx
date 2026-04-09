import { LogoFooter } from '../ui/Logo';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <LogoFooter />
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
  );
}
