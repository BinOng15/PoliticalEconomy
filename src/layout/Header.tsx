import { useState } from "react";
import { AppstoreOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const CustomHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#E7E4DB] py-6 px-20">
      <div className="flex justify-between items-center">
        {/* Logo bên trái */}
        <Link to="/" className="flex items-center">
          <img
            src="/Asset.png"
            alt="PolEcon Logo"
            className="h-10 mr-3"
          />
          <div>
            <h1 className="text-xl font-bold text-blue-900">PolEcon</h1>
            <p className="text-xs text-blue-900">Chill cùng MLN</p>
          </div>
        </Link>

        {/* Menu bên phải */}
        <nav className="flex items-center">
          <div className="hidden md:flex items-center space-x-8">
            <a href="/political-economy" className="text-blue-900 text-base hover:text-blue-900">
              Định Nghĩa KTCN Mác Lê-Nin
            </a>
            <a href="/core-principles" className="text-blue-900 text-base hover:text-blue-900">
              Nguyên Tắc Cốt Lõi
            </a>
            <a href="/analysis" className="text-blue-900 text-base hover:text-blue-900">
              Phân Tích Ảnh Hưởng Lịch Sử
            </a>
            <a href="/evaluate" className="text-blue-900 text-base hover:text-blue-900">
              Đánh Giá Sự Phù Hợp
            </a>
            <a href="/discover" className="text-blue-900 text-base hover:text-blue-900">
              Khám phá
            </a>
            <a href="/document" className="text-blue-900 text-base hover:text-blue-900">
              Tài Liệu Tham Khảo
            </a>
          </div>
          <AppstoreOutlined
            className="md:hidden text-blue-900 text-xl cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </nav>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col items-center space-y-4">
            <a href="#" className="text-blue-900 text-base hover:text-blue-700">
              Home
            </a>
            <a href="#" className="text-blue-900 text-base hover:text-blue-700">
              Articles
            </a>
            <a href="#" className="text-blue-900 text-base hover:text-blue-700">
              Philosophers
            </a>
            <a href="#" className="text-blue-900 text-base hover:text-blue-700">
              Forum/Community
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default CustomHeader;