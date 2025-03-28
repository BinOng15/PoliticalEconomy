import React, { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import { CloseOutlined, MenuOutlined, MenuUnfoldOutlined, RightOutlined, UpOutlined } from "@ant-design/icons";

const Discover: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isTocOpen, setIsTocOpen] = useState(true);

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
                            VẬN DỤNG TƯ TƯỞNG MÁC-LÊNIN VÀO KINH TẾ HIỆN ĐẠI
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            Giải pháp cho bất bình đẳng và phát triển bền vững!
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
                                            { href: "#gioi-thieu", text: "Giới thiệu" },
                                            { href: "#giai-quyet-bat-binh-dang", text: "Giải quyết bất bình đẳng" },
                                            { href: "#phat-trien-ben-vung", text: "Phát triển bền vững" },
                                            { href: "#ket-noi-thuc-tien", text: "Kết nối thực tiễn" },
                                            { href: "#bai-viet-lien-quan", text: "Bài viết liên quan" },
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
                                <h2 className="text-3xl font-bold text-indigo-800 mb-4">Giới Thiệu</h2>
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        Tư tưởng Mác-Lênin với các khái niệm như
                                        <span className="font-semibold text-indigo-600"> quan hệ sản xuất</span> và
                                        <span className="font-semibold text-indigo-600"> giá trị thặng dư</span> có thể giải quyết
                                        bất bình đẳng và phát triển bền vững trong kinh tế hiện đại.
                                    </p>
                                </div>
                            </section>

                            <section id="giai-quyet-bat-binh-dang" className="animate-slide-up">
                                <h2 className="text-3xl font-bold text-indigo-800 mb-4">Giải Quyết Bất Bình Đẳng</h2>
                                <div className="flex flex-col lg:flex-row gap-6 items-center bg-indigo-50 p-6 rounded-lg shadow-md">
                                    <div className="lg:w-1/2">
                                        <p className="text-gray-700 text-lg leading-relaxed">
                                            Bất bình đẳng gia tăng: 1% dân số giàu sở hữu 50% tài sản (Oxfam, 2023).
                                        </p>
                                        <ul className="space-y-4 mt-4">
                                            <li><span className="font-bold text-indigo-600">Thuế lũy tiến:</span> Thụy Điển giảm Gini từ 0,31 xuống 0,28.</li>
                                            <li><span className="font-bold text-indigo-600">Phân phối lại:</span> Việt Nam đạt bảo hiểm y tế 92% (2023).</li>
                                            <li><span className="font-bold text-indigo-600">Quyền lao động:</span> Bảo vệ công nhân gig economy.</li>
                                        </ul>
                                    </div>
                                    <div className="lg:w-1/2">
                                        <img
                                            src="https://media.tapchitaichinh.vn/w1480/images/upload/tranhuyentrang/11292019/chi-muc.jpg"
                                            alt="Bất bình đẳng kinh tế"
                                            className="w-full h-72 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
                                        />
                                    </div>
                                </div>
                            </section>

                            <section id="phat-trien-ben-vung" className="animate-slide-up">
                                <h2 className="text-3xl font-bold text-indigo-800 mb-4">Phát Triển Bền Vững</h2>
                                <div className="flex flex-col lg:flex-row gap-6 items-center bg-indigo-50 p-6 rounded-lg shadow-md">
                                    <div className="lg:w-1/2">
                                        <p className="text-gray-700 text-lg leading-relaxed">
                                            Mác-Lênin nhấn mạnh sự hài hòa giữa con người và tự nhiên.
                                        </p>
                                        <ul className="space-y-4 mt-4">
                                            <li><span className="font-bold text-indigo-600">Kiểm soát sản xuất:</span> Trung Quốc giảm 40% CO2 (2015-2020).</li>
                                            <li><span className="font-bold text-indigo-600">Kinh tế tuần hoàn:</span> Tái chế, giảm lãng phí.</li>
                                            <li><span className="font-bold text-indigo-600">Năng lượng tái tạo:</span> Việt Nam tăng từ 4% lên 25% (2015-2023).</li>
                                        </ul>
                                    </div>
                                    <div className="lg:w-1/2">
                                        <img
                                            src="https://maisonoffice.vn/wp-content/uploads/2024/05/1-phat-trien-ben-vung-la-muc-tieu-chung-cua-toan-cau.jpg"
                                            alt="Phát triển bền vững"
                                            className="w-full h-72 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
                                        />
                                    </div>
                                </div>
                            </section>

                            <section id="ket-noi-thuc-tien" className="animate-slide-up">
                                <h2 className="text-3xl font-bold text-indigo-800 mb-4">Kết Nối Thực Tiễn</h2>
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <ul className="space-y-4 text-gray-700 text-lg">
                                        <li><span className="font-bold text-indigo-600">Kinh tế thị trường:</span> Việt Nam tăng trưởng 6-7%/năm (1986-2023).</li>
                                        <li><span className="font-bold text-indigo-600">Công nghệ số:</span> Quản lý tài nguyên công bằng hơn.</li>
                                        <li><span className="font-bold text-indigo-600">Học hỏi:</span> Trung Quốc giảm nghèo từ 88% xuống 1% (1981-2018).</li>
                                    </ul>
                                </div>
                            </section>

                            <section id="bai-viet-lien-quan" className="animate-slide-up">
                                <h2 className="text-3xl font-bold text-indigo-800 mb-4">Bài Viết Liên Quan</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            title: "Chinese Youths' Turn to Marxist-Leninist-Maoist",
                                            desc: "Giới trẻ Trung Quốc và tư tưởng Mác-Lênin trong bối cảnh bất bình đẳng.",
                                            link: "https://field-journal.com/issue-27/the-interwining-of-knowledge-affect-life-and-mentality-chinese-youths-turn-to-marxist-leninist-maoist-in-contemporary-china",
                                        },
                                        {
                                            title: "Lenin as a Development Economist",
                                            desc: "Lenin áp dụng lý thuyết Marx vào phát triển kinh tế Nga.",
                                            link: "https://rujec.org/article/67255/",
                                        },
                                        {
                                            title: "Leninism: The Marxism of the Current Era",
                                            desc: "Chủ nghĩa Lenin trong thời đại đế quốc và cách mạng kinh tế.",
                                            link: "https://fightbacknews.org/articles/leninism-the-marxism-of-the-current-era",
                                        },
                                    ].map((item, index) => (
                                        <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
                                            <h3 className="text-lg font-semibold text-indigo-700">{item.title}</h3>
                                            <p className="text-gray-600 mt-2">{item.desc}</p>
                                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 mt-2 inline-block">Đọc thêm</a>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:w-1/4 hidden lg:block">
                            <div className="sticky top-4 bg-indigo-50 p-6 rounded-2xl shadow-lg">
                                <h3 className="text-xl font-bold text-indigo-800 mb-4">Khám Phá Thêm</h3>
                                <ul className="space-y-3">
                                    {[
                                        { text: "Nguyên tắc cốt lõi của Kinh tế Chính trị Mác-Lênin", href: "/core-principles" },
                                        { text: "Phân tích ảnh hưởng lịch sử của tư tưởng Mác-Lênin", href: "/analysis" },
                                        { text: "Đánh giá sự phù hợp trong bối cảnh hiện đại", href: "/evaluate" },
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
                                        { text: "Nguyên tắc cốt lõi của Kinh tế Chính trị Mác-Lênin", href: "/core-principles" },
                                        { text: "Phân tích ảnh hưởng lịch sử của tư tưởng Mác-Lênin", href: "/analysis" },
                                        { text: "Đánh giá sự phù hợp trong bối cảnh hiện đại", href: "/evaluate" },
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

export default Discover;