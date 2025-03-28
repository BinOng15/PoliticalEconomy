import React, { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import { CloseOutlined, MenuOutlined, MenuUnfoldOutlined, RightOutlined, UpOutlined } from "@ant-design/icons";

const PoliticalEconomy: React.FC = () => {
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
                            KINH TẾ CHÍNH TRỊ MÁC-LÊNIN LÀ GÌ?
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            Khám phá nền tảng lý luận quan trọng định hình tư duy kinh tế - xã hội!
                        </p>
                    </header>

                    {/* Bố cục 2 cột */}
                    <div className="flex flex-col lg:flex-row gap-10">
                        {/* Nội dung chính */}
                        <div className="lg:w-3/4 space-y-12">
                            {/* Mục lục - Card nổi bật */}
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
                                            { href: "#kinh-te-chinh-tri-mac-lenin-la-gi", text: "Kinh tế chính trị Mác-Lênin là gì?" },
                                            { href: "#cac-noi-dung-chu-yeu", text: "Các nội dung chủ yếu" },
                                            { href: "#phuong-phap-nghien-cuu", text: "Phương pháp nghiên cứu" },
                                            { href: "#video-tham-khao", text: "Video tham khảo" },
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
                            <section id="muc-dich-bai-viet" className="animate-slide-up">
                                <h2 className="text-3xl font-bold text-indigo-800 mb-4">Mục Đích Bài Viết</h2>
                                <p className="text-gray-700 text-lg leading-relaxed bg-indigo-50 p-6 rounded-lg">
                                    Kinh tế chính trị Mác-Lênin là chìa khóa để hiểu mối quan hệ kinh tế - xã hội. Bài viết này sẽ giúp bạn có cái nhìn tổng quan, dễ tiếp cận và định hướng rõ ràng khi khám phá môn học này.
                                </p>
                            </section>

                            <section id="kinh-te-chinh-tri-mac-lenin-la-gi" className="animate-slide-up">
                                <h2 className="text-3xl font-bold text-indigo-800 mb-4">Kinh Tế Chính Trị Mác-Lênin Là Gì?</h2>
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        Đây là khoa học nghiên cứu <span className="font-semibold text-indigo-600">quan hệ sản xuất</span>,
                                        mối liên hệ với <span className="font-semibold text-indigo-600">lực lượng sản xuất</span> và
                                        <span className="font-semibold text-indigo-600">kiến trúc thượng tầng</span>.
                                        Nó phân tích cách con người tương tác trong sản xuất, phân phối và tiêu dùng.
                                    </p>
                                    <p className="text-gray-700 text-lg leading-relaxed mt-4">
                                        Dù ra đời muộn, môn học này mang lại tư duy phản biện và khả năng áp dụng thực tiễn, đặc biệt trong các lĩnh vực kinh tế và chính trị.
                                    </p>
                                    <img
                                        src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-9/175145427_2878537275808367_2590184667171984144_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=2285d6&_nc_ohc=ENFJZgk2TikQ7kNvgEL60f8&_nc_oc=AdnSzrUvr0XGsiAsLQDB8ZlXJov0jhIyA62sdkpStQc3xP62QAaEdZc_s5i318oefk4&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=yUtknuluT3OOX2Q9J7Zheg&oh=00_AYExXpzVylcjyC8XpW-dIofpfMK2eEvVX8zlgtRRyXFmBw&oe=680BAF7D"
                                        alt="Kinh tế chính trị"
                                        className="w-full object-cover rounded-lg mt-6 shadow-md hover:scale-105 transition-transform"
                                    />
                                </div>
                            </section>

                            <section id="cau-hoi-can-dat-ra" className="animate-slide-up">
                                <h2 className="text-3xl font-bold text-indigo-800 mb-4">Câu Hỏi Quan Trọng Khi Học</h2>
                                <div className="bg-indigo-50 p-6 rounded-lg">
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        <span className="font-bold text-indigo-600">Hỏi:</span> Làm sao hiểu rõ mối quan hệ kinh tế - chính trị?
                                        Quy luật kinh tế vận hành thế nào qua các thời kỳ? Cách áp dụng lý thuyết vào thực tiễn ra sao?
                                    </p>
                                    <p className="text-gray-700 text-lg leading-relaxed mt-4">
                                        Tư duy phản biện là chìa khóa để phân tích hiện tượng kinh tế một cách sắc bén!
                                    </p>
                                </div>
                            </section>

                            <section id="cac-noi-dung-chu-yeu" className="animate-slide-up">
                                <h2 className="text-3xl font-bold text-indigo-800 mb-4">Nội Dung Chủ Yếu</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {[
                                        { title: "Quy luật kinh tế", desc: "Phân tích vận hành qua các giai đoạn lịch sử." },
                                        { title: "Kinh tế & Chính trị", desc: "Mối quan hệ qua lại giữa hai lĩnh vực." },
                                        { title: "Giá trị thặng dư", desc: "Cơ chế khai thác trong kinh tế tư bản." },
                                        { title: "Quy luật giá trị", desc: "Vai trò trong nền kinh tế thị trường." },
                                    ].map((item, index) => (
                                        <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
                                            <h3 className="text-lg font-semibold text-indigo-700">{item.title}</h3>
                                            <p className="text-gray-600 mt-2">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section id="phuong-phap-nghien-cuu" className="animate-slide-up">
                                <h2 className="text-3xl font-bold text-indigo-800 mb-4">Phương Pháp Nghiên Cứu</h2>
                                <ul className="space-y-4 bg-white p-6 rounded-lg shadow-md">
                                    {[
                                        "Phương pháp biện chứng duy vật lịch sử: Phân tích vận động không ngừng.",
                                        "Phương pháp trừu tượng hóa: Tập trung vào quy luật cơ bản.",
                                        "Phân tích và tổng hợp: Rút ra kết luận từ các yếu tố.",
                                        "Lịch sử và logic: Kết hợp quá khứ và phân tích hiện tại.",
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-indigo-600 mr-2">•</span>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section id="video-tham-khao" className="animate-slide-up">
                                <h2 className="text-3xl font-bold text-indigo-800 mb-4">Video Tham Khảo</h2>
                                <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                                        src="https://www.youtube.com/embed/8ch1avcjfgE?list=PLQmO64428EoMYmJ8VID0ARVN1z56VlIPu"
                                        title="Kinh tế chính trị Mác-Lênin"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:w-1/4 hidden lg:block">
                            <div className="sticky top-4 bg-indigo-50 p-6 rounded-2xl shadow-lg">
                                <h3 className="text-xl font-bold text-indigo-800 mb-4">Khám Phá Thêm</h3>
                                <ul className="space-y-3">
                                    {[
                                        { text: "Các nguyên tắc cốt lõi của kinh tế chính trị Mác Lê-Nin", href: "/core-principles" },
                                        { text: "Phân tích ảnh hưởng lịch sử của tư tưởng Mác Lê-Nin", href: "/analysis" },
                                        { text: "Đánh giá sự phù hợp trong bối cảnh kinh tế hiện đại", href: "/evaluate" },
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
                                        { text: "Các nguyên tắc cốt lõi của kinh tế chính trị Mác Lê-Nin", href: "/core-principles" },
                                        { text: "Phân tích ảnh hưởng lịch sử của tư tưởng Mác Lê-Nin", href: "/analysis" },
                                        { text: "Đánh giá sự phù hợp trong bối cảnh kinh tế hiện đại", href: "/evaluate" },
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

                    {/* Nút quay lại đầu trang */}
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

export default PoliticalEconomy;