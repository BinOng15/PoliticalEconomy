import React, { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import { CloseOutlined, MenuOutlined, MenuUnfoldOutlined, RightOutlined, UpOutlined } from "@ant-design/icons";

const CorePrinciples: React.FC = () => {
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
                            CÁC NGUYÊN TẮC CỐT LÕI CỦA KINH TẾ CHÍNH TRỊ MÁC-LÊNIN
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            Nền tảng lý luận định hình tư duy kinh tế - xã hội!
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
                                            { href: "#quan-he-san-xuat", text: "Quan hệ sản xuất" },
                                            { href: "#gia-tri-thang-du", text: "Giá trị thặng dư" },
                                            { href: "#dau-tranh-giai-cap", text: "Đấu tranh giai cấp" },
                                            { href: "#ket-luan", text: "Kết luận" },
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
                                        Kinh tế Chính trị Mác-Lênin nghiên cứu các quy luật kinh tế - xã hội, do
                                        <span className="font-semibold text-indigo-600"> Karl Marx</span>,
                                        <span className="font-semibold text-indigo-600"> Friedrich Engels</span>, và
                                        <span className="font-semibold text-indigo-600"> Vladimir Lenin</span> phát triển.
                                        Nó hướng tới một xã hội không bóc lột thông qua phân tích mâu thuẫn kinh tế.
                                    </p>
                                </div>
                            </section>

                            <section id="quan-he-san-xuat" className="animate-slide-up">
                                <h2 className="text-3xl font-bold text-indigo-800 mb-4">Quan Hệ Sản Xuất</h2>
                                <div className="flex flex-col lg:flex-row gap-6 items-center bg-indigo-50 p-6 rounded-lg shadow-md">
                                    <div className="lg:w-1/2">
                                        <p className="text-gray-700 text-lg leading-relaxed">
                                            Đây là mối quan hệ giữa con người trong sản xuất, quyết định cách xã hội vận hành.
                                            Ai sở hữu công cụ sản xuất, ai lao động, và cách phân phối sản phẩm là trọng tâm.
                                        </p>
                                        <p className="text-gray-700 text-lg leading-relaxed mt-4">
                                            <span className="font-bold text-indigo-600">Ví dụ:</span> Trong xã hội phong kiến,
                                            địa chủ sở hữu đất, nông dân lao động và nộp tô. Trong xã hội tư bản, nhà tư bản sở hữu
                                            nhà máy, công nhân nhận lương thấp hơn giá trị họ tạo ra.
                                        </p>
                                    </div>
                                    <div className="lg:w-1/2">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv9-ttSC6QoswmkfBKwBY39lMFyuzxOJc_lg&s"
                                            alt="Quan hệ sản xuất phong kiến"
                                            className="w-full h-72 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
                                        />
                                    </div>
                                </div>
                            </section>

                            <section id="gia-tri-thang-du" className="animate-slide-up">
                                <h2 className="text-3xl font-bold text-indigo-800 mb-4">Giá Trị Thặng Dư</h2>
                                <div className="flex flex-col lg:flex-row gap-6 items-center bg-indigo-50 p-6 rounded-lg shadow-md">
                                    <div className="lg:w-1/2">
                                        <p className="text-gray-700 text-lg leading-relaxed">
                                            Là phần giá trị công nhân tạo ra vượt quá tiền lương, bị nhà tư bản chiếm đoạt làm lợi nhuận.
                                        </p>
                                        <p className="text-gray-700 text-lg leading-relaxed mt-4">
                                            <span className="font-bold text-indigo-600">Ví dụ:</span> Công nhân may 10 chiếc áo
                                            (1 triệu đồng giá trị), nhận lương 200.000 đồng, nhà tư bản giữ 800.000 đồng làm giá trị thặng dư.
                                        </p>
                                    </div>
                                    <div className="lg:w-1/2">
                                        <img
                                            src="https://lh6.googleusercontent.com/proxy/WpiYzSdZRihiMNAAzX8Dqpm5VTKlZXTRBemQTK57cQPzt_Kf7IHWByGoB0jeREQuOGS9qtW8w-E3ZN5h8HWhaARvKwlVM1kjQkTFg3U4BVEsVlX1-uQ2JlboEVbuWIdYec0FL9-YVGALU6bSRyTVkNa3V7ExKtTo6-vS_d2546jwrvqJvnTF"
                                            alt="Giá trị thặng dư tư bản"
                                            className="w-full h-72 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
                                        />
                                    </div>
                                </div>
                            </section>

                            <section id="dau-tranh-giai-cap" className="animate-slide-up">
                                <h2 className="text-3xl font-bold text-indigo-800 mb-4">Đấu Tranh Giai Cấp</h2>
                                <div className="flex flex-col lg:flex-row gap-6 items-center bg-indigo-50 p-6 rounded-lg shadow-md">
                                    <div className="lg:w-1/2">
                                        <p className="text-gray-700 text-lg leading-relaxed">
                                            Là mâu thuẫn giữa các giai cấp (nông dân vs địa chủ, công nhân vs tư bản), thúc đẩy cách mạng xã hội.
                                        </p>
                                        <p className="text-gray-700 text-lg leading-relaxed mt-4">
                                            <span className="font-bold text-indigo-600">Ví dụ:</span> Công nhân Anh thế kỷ 19 đình công,
                                            đấu tranh giảm giờ làm từ 14 xuống 8 giờ/ngày.
                                        </p>
                                    </div>
                                    <div className="lg:w-1/2">
                                        <img
                                            src="https://quantri.hocmon.gov.vn/UploadImages/ttvanhoa/thuvienanh/2020_4/Anh%20trien%20lam/giai%20cap%20CN%2030-4/04_284202010.JPG"
                                            alt="Đấu tranh giai cấp"
                                            className="w-full h-72 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
                                        />
                                    </div>
                                </div>
                            </section>

                            <section id="ket-luan" className="animate-slide-up">
                                <h2 className="text-3xl font-bold text-indigo-800 mb-4">Kết Luận</h2>
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        Các nguyên tắc này giúp hiểu bản chất mâu thuẫn kinh tế - xã hội:
                                        <span className="font-semibold text-indigo-600"> quan hệ sản xuất</span> là nền tảng,
                                        <span className="font-semibold text-indigo-600"> giá trị thặng dư</span> giải thích bóc lột,
                                        và <span className="font-semibold text-indigo-600"> đấu tranh giai cấp</span> thúc đẩy tiến bộ.
                                        Chúng vẫn có giá trị phân tích bất bình đẳng và phong trào xã hội hiện nay.
                                    </p>
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
                                        { text: "Phân tích ảnh hưởng lịch sử của tư tưởng Mác Lê-Nin", href: "/analysis" },
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
                                        { text: "Phân tích ảnh hưởng lịch sử của tư tưởng Mác Lê-Nin", href: "/analysis" },
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

export default CorePrinciples;