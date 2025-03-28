import React, { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import { CloseOutlined, MenuOutlined, MenuUnfoldOutlined, RightOutlined, UpOutlined } from "@ant-design/icons";

const Analysis: React.FC = () => {
    const [isTocOpen, setIsTocOpen] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <MainLayout>
            <div className="bg-gradient-to-b from-[#E7E4DB] to-white min-h-screen">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    {/* Header nổi bật */}
                    <header className="text-center mb-12 animate-fade-in">
                        <h1 className="text-4xl sm:text-6xl font-extrabold text-indigo-900 
                                      bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 
                                      drop-shadow-md">
                            PHÂN TÍCH ẢNH HƯỞNG LỊCH SỬ CỦA TƯ TƯỞNG MÁC-LÊNIN
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            Đến sự phát triển kinh tế qua các quốc gia xã hội chủ nghĩa!
                        </p>
                    </header>

                    {/* Bố cục 2 cột */}
                    <div className="flex flex-col lg:flex-row gap-10">
                        {/* Nội dung chính */}
                        <div className="lg:w-3/4 space-y-12">
                            {/* Mục lục */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl 
                                          transition-all duration-300 top-4 z-10 
                                          border border-indigo-100">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-xl font-bold text-indigo-900">
                                        <MenuOutlined className="mr-2" /> Mục Lục
                                    </h2>
                                    <button
                                        onClick={() => setIsTocOpen(!isTocOpen)}
                                        className="text-indigo-900 text-2xl hover:text-indigo-700"
                                    >
                                        {isTocOpen ? <CloseOutlined /> : <MenuUnfoldOutlined />}
                                    </button>
                                </div>
                                <div className={`overflow-hidden transition-all duration-500 
                                               ${isTocOpen ? "max-h-96" : "max-h-0"}`}>
                                    <ul className="space-y-4 text-indigo-700">
                                        {[
                                            { href: "#gioi-thieu", text: "Giới thiệu tư tưởng Mác-Lênin" },
                                            { href: "#lien-xo", text: "Áp dụng tại Liên Xô" },
                                            { href: "#trung-quoc", text: "Áp dụng tại Trung Quốc" },
                                            { href: "#viet-nam", text: "Áp dụng tại Việt Nam" },
                                            { href: "#danh-gia", text: "Đánh giá tổng quan" },
                                        ].map((item, index) => (
                                            <li key={index}>
                                                <a href={item.href} className="hover:text-indigo-900 
                                                    flex items-center transition-colors">
                                                    <RightOutlined className="mr-2 text-sm" />
                                                    {item.text}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Nội dung các phần */}
                            <section id="gioi-thieu" className="animate-slide-up">
                                <h2 className="text-3xl font-bold text-indigo-800 mb-4">Giới Thiệu Tư Tưởng Mác-Lênin</h2>
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        Tư tưởng Mác-Lênin, do <span className="font-semibold text-indigo-600">Karl Marx</span>,
                                        <span className="font-semibold text-indigo-600">Friedrich Engels</span>, và
                                        <span className="font-semibold text-indigo-600">Vladimir Lenin</span> phát triển,
                                        là kim chỉ nam cho chủ nghĩa xã hội. Nó phân tích quan hệ sản xuất, mâu thuẫn kinh tế,
                                        và hướng tới một nền kinh tế không bóc lột.
                                    </p>
                                </div>
                            </section>

                            <section id="lien-xo" className="animate-slide-up">
                                <h2 className="text-3xl font-bold text-indigo-800 mb-4">Áp Dụng Tại Liên Xô</h2>
                                <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        Sau Cách mạng Tháng Mười (1917), Liên Xô áp dụng mô hình kinh tế kế hoạch hóa tập trung.
                                    </p>
                                    <ul className="space-y-4 mt-4">
                                        <li><span className="font-bold text-indigo-600">Thành tựu:</span> Công nghiệp hóa nhanh chóng, sản lượng thép tăng từ 4,3 triệu tấn (1928) lên 18,3 triệu tấn (1940), phóng vệ tinh Sputnik (1957).</li>
                                        <li><span className="font-bold text-indigo-600">Hạn chế:</span> Nông nghiệp đình trệ, nạn đói 1932-1933, khủng hoảng kinh tế dẫn đến sụp đổ 1991.</li>
                                    </ul>
                                    <img
                                        src="https://lh6.googleusercontent.com/proxy/4bT0RrLlrkNLlmX_fnRNTwr40jMwzaFCcTQprVrQnsbeYXssSN8_-D-fvbAosSmMfHu6vIS9YHMzRkXV51NE3Y8ZeG2YVzOd6pycQHmXoJCM_QvAD1DlINA9mL6TQ4SqoxHdUM4_jKUp2Tj752UJueZooS2cftFP2vTvJdgtSvMr0d1W2C4xsEz78A"
                                        alt="Công nghiệp hóa Liên Xô"
                                        className="w-full object-cover rounded-lg mt-6 shadow-md hover:scale-105 transition-transform"
                                    />
                                </div>
                            </section>

                            <section id="trung-quoc" className="animate-slide-up">
                                <h2 className="text-3xl font-bold text-indigo-800 mb-4">Áp Dụng Tại Trung Quốc</h2>
                                <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        Từ 1949, Trung Quốc theo mô hình Liên Xô, sau đó chuyển sang cải cách "Đặc sắc Trung Quốc" (1978).
                                    </p>
                                    <ul className="space-y-4 mt-4">
                                        <li><span className="font-bold text-indigo-600">Thành tựu:</span> Tăng trưởng 9,5%/năm (1978-2018), GDP từ 367,9 tỷ USD lên 13,6 nghìn tỷ USD, nghèo đói giảm dưới 1%.</li>
                                        <li><span className="font-bold text-indigo-600">Hạn chế:</span> Đại Nhảy Vọt thất bại, bất bình đẳng và ô nhiễm tăng sau cải cách.</li>
                                    </ul>
                                    <img
                                        src="https://vioit.org.vn/Resources/tula/2023/11/02/TQ1.png"
                                        alt="Cải cách kinh tế Trung Quốc"
                                        className="w-full object-cover rounded-lg mt-6 shadow-md hover:scale-105 transition-transform"
                                    />
                                </div>
                            </section>

                            <section id="viet-nam" className="animate-slide-up">
                                <h2 className="text-3xl font-bold text-indigo-800 mb-4">Áp Dụng Tại Việt Nam</h2>
                                <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        Từ 1975, Việt Nam áp dụng Mác-Lênin, chuyển sang kinh tế thị trường định hướng XHCN từ Đổi Mới (1986).
                                    </p>
                                    <ul className="space-y-4 mt-4">
                                        <li><span className="font-bold text-indigo-600">Thành tựu:</span> Tăng trưởng 6-7%/năm, GDP bình quân từ 100 USD lên 2.800 USD, hội nhập quốc tế (CPTPP, EVFTA).</li>
                                        <li><span className="font-bold text-indigo-600">Hạn chế:</span> Khủng hoảng trước Đổi Mới (lạm phát 774%), bất bình đẳng và tham nhũng hiện nay.</li>
                                    </ul>
                                    <img
                                        src="https://cdn.tuyengiao.vn/uploads/2021/7/16/31/1045_anh-co-to-quoc.jpg?w=440&q=75&f=6&s=5cedlphmlj0"
                                        alt="Công cuộc Đổi Mới Việt Nam"
                                        className="w-full object-cover rounded-lg mt-6 shadow-md hover:scale-105 transition-transform"
                                    />
                                </div>
                            </section>

                            <section id="danh-gia" className="animate-slide-up">
                                <h2 className="text-3xl font-bold text-indigo-800 mb-4">Đánh Giá Tổng Quan</h2>
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <ul className="space-y-4 text-gray-700 text-lg">
                                        <li><span className="font-bold text-indigo-600">Thành tựu:</span> Công nghiệp hóa, giảm nghèo, hướng tới công bằng xã hội.</li>
                                        <li><span className="font-bold text-indigo-600">Hạn chế:</span> Quan liêu, thiếu động lực, khủng hoảng khi áp dụng cứng nhắc.</li>
                                        <li><span className="font-bold text-indigo-600">Bài học:</span> Linh hoạt, sáng tạo, kết hợp kinh tế thị trường với định hướng XHCN.</li>
                                    </ul>
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:w-1/4 hidden lg:block">
                            <div className="sticky top-4 bg-indigo-50 p-6 rounded-2xl shadow-lg">
                                <h3 className="text-xl font-bold text-indigo-800 mb-4">Khám Phá Thêm</h3>
                                <ul className="space-y-3">
                                    {[
                                        { text: "Định nghĩa kinh tế chính trị Mác Lê-Nin", href: "/political-economy" },
                                        { text: "Các nguyên tắc cốt lõi của kinh tế chính trị", href: "/core-principles" },
                                        { text: "Đánh giá sự phù hợp trong bối cảnh hiện đại", href: "/evaluate" },
                                        { text: "Vận dụng tư tưởng Mác-Lênin vào thực tiễn", href: "/discover" },
                                        { text: "Tài liệu tham khảo", href: "/document" },
                                    ].map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href={item.href}
                                                className="flex items-center text-indigo-600 hover:text-indigo-800 hover:bg-indigo-100 p-2 rounded-md transition-all"
                                            >
                                                <RightOutlined className="mr-2" />
                                                {item.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Mobile Menu */}
                        <div className="lg:hidden fixed top-4 right-4 z-20">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-indigo-800 text-3xl"
                            >
                                {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
                            </button>
                        </div>
                        {isMenuOpen && (
                            <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-indigo-50 p-6 z-10 animate-slide-in">
                                <button onClick={() => setIsMenuOpen(false)} className="text-indigo-800 text-3xl float-right">
                                    <CloseOutlined />
                                </button>
                                <h3 className="text-xl font-bold text-indigo-800 mt-12 mb-4">Khám Phá Thêm</h3>
                                <ul className="space-y-4">
                                    {[
                                        { text: "Định nghĩa kinh tế chính trị Mác Lê-Nin", href: "/political-economy" },
                                        { text: "Các nguyên tắc cốt lõi của kinh tế chính trị", href: "/core-principles" },
                                        { text: "Đánh giá sự phù hợp trong bối cảnh hiện đại", href: "/evaluate" },
                                        { text: "Vận dụng tư tưởng Mác-Lênin vào thực tiễn", href: "/discover" },
                                        { text: "Tài liệu tham khảo", href: "/document" },
                                    ].map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href={item.href}
                                                className="flex items-center text-indigo-600 hover:text-indigo-800 hover:bg-indigo-100 p-2 rounded-md transition-all"
                                            >
                                                <RightOutlined className="mr-2" />
                                                {item.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Nút Scroll Top */}
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-12 right-12 bg-gradient-to-r from-indigo-600 to-purple-600 
                                  text-white p-4 rounded-full shadow-xl hover:scale-110 
                                  transition-all duration-300 ring-2 ring-indigo-300/50 
                                  hover:ring-indigo-400/70 animate-pulse-subtle z-20"
                        title="Quay lại đầu trang"
                    >
                        <UpOutlined className="text-xl animate-bounce-subtle" />
                    </button>
                </div>
            </div>
        </MainLayout>
    );
};

export default Analysis;