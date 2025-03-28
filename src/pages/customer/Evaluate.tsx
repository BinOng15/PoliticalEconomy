import React, { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import { CloseOutlined, MenuOutlined, MenuUnfoldOutlined, RightOutlined, UpOutlined } from "@ant-design/icons";

const Evaluate: React.FC = () => {
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
                            ĐÁNH GIÁ SỰ PHÙ HỢP CỦA KINH TẾ CHÍNH TRỊ MÁC-LÊNIN
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            Trong bối cảnh kinh tế hiện đại toàn cầu hóa và công nghệ số!
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
                                            { href: "#so-sanh-kinh-te-thi-truong", text: "So sánh với kinh tế thị trường" },
                                            { href: "#so-sanh-kinh-te-so", text: "So sánh với kinh tế số" },
                                            { href: "#ung-dung-hien-nay", text: "Tính ứng dụng ngày nay" },
                                            { href: "#tu-duy-phan-bien", text: "Tư duy phản biện" },
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
                                        Kinh tế Chính trị Mác-Lênin nghiên cứu quy luật kinh tế - xã hội, tập trung vào
                                        <span className="font-semibold text-indigo-600"> quan hệ sản xuất</span>,
                                        <span className="font-semibold text-indigo-600"> giá trị thặng dư</span>, và
                                        <span className="font-semibold text-indigo-600"> đấu tranh giai cấp</span>.
                                        Trong bối cảnh kinh tế hiện đại, bài viết đánh giá tính phù hợp của nó với kinh tế thị trường và kinh tế số.
                                    </p>
                                </div>
                            </section>

                            <section id="so-sanh-kinh-te-thi-truong" className="animate-slide-up">
                                <h2 className="text-3xl font-bold text-indigo-800 mb-4">So Sánh Với Kinh Tế Thị Trường</h2>
                                <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
                                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                        Kinh tế thị trường dựa trên cung cầu, cạnh tranh, và tư hữu, khác biệt rõ rệt với mô hình Mác-Lênin.
                                    </p>
                                    <div className="overflow-x-auto">
                                        <table className="w-full border-collapse border border-indigo-200">
                                            <thead>
                                                <tr className="bg-indigo-100">
                                                    <th className="border border-indigo-200 p-3 text-left text-indigo-900">Tiêu chí</th>
                                                    <th className="border border-indigo-200 p-3 text-left text-indigo-900">Mác-Lênin</th>
                                                    <th className="border border-indigo-200 p-3 text-left text-indigo-900">Thị trường</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr><td className="border border-indigo-200 p-3">Cơ chế</td><td className="border border-indigo-200 p-3">Kế hoạch hóa</td><td className="border border-indigo-200 p-3">Cung cầu</td></tr>
                                                <tr><td className="border border-indigo-200 p-3">Mục tiêu</td><td className="border border-indigo-200 p-3">Công bằng</td><td className="border border-indigo-200 p-3">Lợi nhuận</td></tr>
                                                <tr><td className="border border-indigo-200 p-3">Hiệu quả</td><td className="border border-indigo-200 p-3">Thấp (Liên Xô: 2% GDP 1980s)</td><td className="border border-indigo-200 p-3">Cao (Mỹ: 3-4% GDP 1990-2020)</td></tr>
                                                <tr><td className="border border-indigo-200 p-3">Bất bình đẳng</td><td className="border border-indigo-200 p-3">Thấp (Gini 0,25)</td><td className="border border-indigo-200 p-3">Cao (Gini 0,41)</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="text-gray-700 text-lg leading-relaxed mt-4">
                                        <span className="font-bold text-indigo-600">Nhận xét:</span> Kinh tế thị trường hiệu quả hơn nhưng bất bình đẳng cao, Mác-Lênin ưu tiên công bằng nhưng thiếu cạnh tranh.
                                    </p>
                                </div>
                            </section>

                            <section id="so-sanh-kinh-te-so" className="animate-slide-up">
                                <h2 className="text-3xl font-bold text-indigo-800 mb-4">So Sánh Với Kinh Tế Số</h2>
                                <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
                                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                        Kinh tế số dựa trên công nghệ số, dữ liệu lớn, và AI, tạo thách thức mới cho lý luận Mác-Lênin.
                                    </p>
                                    <div className="overflow-x-auto">
                                        <table className="w-full border-collapse border border-indigo-200">
                                            <thead>
                                                <tr className="bg-indigo-100">
                                                    <th className="border border-indigo-200 p-3 text-left text-indigo-900">Tiêu chí</th>
                                                    <th className="border border-indigo-200 p-3 text-left text-indigo-900">Mác-Lênin</th>
                                                    <th className="border border-indigo-200 p-3 text-left text-indigo-900">Kinh tế số</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr><td className="border border-indigo-200 p-3">Cơ chế</td><td className="border border-indigo-200 p-3">Kế hoạch hóa</td><td className="border border-indigo-200 p-3">Nền tảng số</td></tr>
                                                <tr><td className="border border-indigo-200 p-3">Đổi mới</td><td className="border border-indigo-200 p-3">Chậm</td><td className="border border-indigo-200 p-3">Nhanh (Amazon: 20-30%/năm)</td></tr>
                                                <tr><td className="border border-indigo-200 p-3">Quy mô</td><td className="border border-indigo-200 p-3">Hạn chế</td><td className="border border-indigo-200 p-3">Toàn cầu</td></tr>
                                                <tr><td className="border border-indigo-200 p-3">Bóc lột</td><td className="border border-indigo-200 p-3">Xóa bỏ</td><td className="border border-indigo-200 p-3">Dạng mới (gig economy)</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="text-gray-700 text-lg leading-relaxed mt-4">
                                        <span className="font-bold text-indigo-600">Nhận xét:</span> Kinh tế số đổi mới nhanh nhưng bóc lột dưới dạng mới, Mác-Lênin hữu ích phân tích nhưng thiếu giải pháp cụ thể.
                                    </p>
                                </div>
                            </section>

                            <section id="ung-dung-hien-nay" className="animate-slide-up">
                                <h2 className="text-3xl font-bold text-indigo-800 mb-4">Tính Ứng Dụng Ngày Nay</h2>
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <ul className="space-y-4 text-gray-700 text-lg">
                                        <li><span className="font-bold text-indigo-600">Phân tích bất bình đẳng:</span> Giá trị thặng dư giải thích tại sao 1% dân số Mỹ sở hữu 40% tài sản (2023).</li>
                                        <li><span className="font-bold text-indigo-600">Công bằng xã hội:</span> Việt Nam áp dụng bảo hiểm y tế toàn dân (92%, 2023), giảm nghèo từ 58% (1993) xuống 6% (2020).</li>
                                        <li><span className="font-bold text-indigo-600">Hạn chế:</span> Không giải quyết được kinh tế số và toàn cầu hóa.</li>
                                    </ul>
                                </div>
                            </section>

                            <section id="tu-duy-phan-bien" className="animate-slide-up">
                                <h2 className="text-3xl font-bold text-indigo-800 mb-4">Tư Duy Phản Biện</h2>
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <ul className="space-y-4 text-gray-700 text-lg">
                                        <li><span className="font-bold text-indigo-600">Câu hỏi:</span> Giá trị thặng dư có áp dụng cho kinh tế số không? Tại sao Việt Nam kết hợp kinh tế thị trường?</li>
                                        <li><span className="font-bold text-indigo-600">Thực tế:</span> Việt Nam (Gini 0,36) công bằng hơn Mỹ (0,41), nhưng tăng trưởng chậm hơn.</li>
                                        <li><span className="font-bold text-indigo-600">Kết luận:</span> Mác-Lênin có giá trị lý luận, cần kết hợp với mô hình hiện đại.</li>
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
                                        { text: "Nguyên tắc cốt lõi của Kinh tế Chính trị Mác-Lênin", href: "/core-principles" },
                                        { text: "Phân tích ảnh hưởng lịch sử của tư tưởng Mác-Lênin", href: "/analysis" },
                                        { text: "Khám phá vận dụng tư tưởng Mác-Lênin vào kinh tế hiện đại", href: "/discover" },
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
                                        { text: "Khám phá vận dụng tư tưởng Mác-Lênin vào kinh tế hiện đại", href: "/discover" },
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

export default Evaluate;