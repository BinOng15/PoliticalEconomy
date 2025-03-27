import React, { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import { MenuOutlined, RightOutlined, CloseOutlined, MenuUnfoldOutlined, UpOutlined } from "@ant-design/icons";

const Discover: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State cho menu điều hướng trên mobile
    const [isTocOpen, setIsTocOpen] = useState(true); // State cho mục lục (Table of Contents)
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Cuộn mượt mà
        });
    };
    return (
        <>
            <MainLayout>
                <div className="bg-[#E7E4DB] min-h-screen relative">
                    {/* Thanh điều hướng cố định (Sticky Sidebar) - Chỉ hiển thị trên desktop */}
                    <div className="hidden lg:block fixed right-0 top-1/4 w-64 bg-white p-6 rounded-l-xl shadow-lg z-10">
                        <h3 className="text-lg font-semibold text-blue-900 mb-4">
                            Các bài viết khác
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="/core-principles"
                                    className="flex items-center text-base font-medium text-blue-700 hover:text-blue-900 hover:bg-blue-50 px-2 py-1 rounded-md transition-all"
                                >
                                    <RightOutlined className="mr-2 text-blue-700" />
                                    Nguyên tắc cốt lõi của Kinh tế Chính trị Mác-Lênin
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/analysis"
                                    className="flex items-center text-base font-medium text-blue-700 hover:text-blue-900 hover:bg-blue-50 px-2 py-1 rounded-md transition-all"
                                >
                                    <RightOutlined className="mr-2 text-blue-700" />
                                    Phân tích ảnh hưởng lịch sử của tư tưởng Mác-Lênin đến phát triển kinh tế
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/evaluate"
                                    className="flex items-center text-base font-medium text-blue-700 hover:text-blue-900 hover:bg-blue-50 px-2 py-1 rounded-md transition-all"
                                >
                                    <RightOutlined className="mr-2 text-blue-700" />
                                    Đánh giá sự phù hợp của Kinh tế Chính trị Mác-Lênin trong bối cảnh kinh tế hiện đại
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/document"
                                    className="flex items-center text-base font-medium text-blue-700 hover:text-blue-900 hover:bg-blue-50 px-2 py-1 rounded-md transition-all"
                                >
                                    <RightOutlined className="mr-2 text-blue-700" />
                                    Tài liệu tham khảo
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Menu điều hướng trên mobile */}
                    <div className="lg:hidden fixed top-4 right-4 z-20">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-blue-900 text-2xl focus:outline-none"
                        >
                            {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
                        </button>
                    </div>
                    {isMenuOpen && (
                        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-white p-6 z-10">
                            <div className="flex justify-end">
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-blue-900 text-2xl focus:outline-none"
                                >
                                    <CloseOutlined />
                                </button>
                            </div>
                            <h3 className="text-lg font-semibold text-blue-900 mb-4 mt-4">
                                Các bài viết khác
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center text-base font-medium text-blue-700 hover:text-blue-900 hover:bg-blue-50 px-2 py-1 rounded-md transition-all"
                                    >
                                        <RightOutlined className="mr-2 text-blue-700" />
                                        Nguyên tắc cốt lõi của Kinh tế Chính trị Mác-Lênin
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center text-base font-medium text-blue-700 hover:text-blue-900 hover:bg-blue-50 px-2 py-1 rounded-md transition-all"
                                    >
                                        <RightOutlined className="mr-2 text-blue-700" />
                                        Phân tích ảnh hưởng lịch sử của tư tưởng Mác-Lênin đến phát triển kinh tế
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center text-base font-medium text-blue-700 hover:text-blue-900 hover:bg-blue-50 px-2 py-1 rounded-md transition-all"
                                    >
                                        <RightOutlined className="mr-2 text-blue-700" />
                                        Đánh giá sự phù hợp của Kinh tế Chính trị Mác-Lênin trong bối cảnh kinh tế hiện đại
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center text-base font-medium text-blue-700 hover:text-blue-900 hover:bg-blue-50 px-2 py-1 rounded-md transition-all"
                                    >
                                        <RightOutlined className="mr-2 text-blue-700" />
                                        Tài liệu tham khảo
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}

                    {/* Nội dung chính */}
                    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                        {/* Tiêu đề chính */}
                        <h1 className="text-4xl sm:text-4xl font-bold text-blue-900 text-center mb-8">
                            KHÁM PHÁ CÁCH VẬN DỤNG TƯ TƯỞNG MÁC-LÊNIN VÀO GIẢI QUYẾT CÁC VẤN ĐỀ KINH TẾ HIỆN ĐẠI
                        </h1>
                        <div className="space-y-12">
                            {/* Mục lục bài viết - Floating Card với tính năng thu gọn */}
                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow sticky top-1 z-10">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-lg font-semibold text-blue-900">
                                        <MenuOutlined className="mr-2" /> Mục lục bài viết
                                    </h2>
                                    <button
                                        onClick={() => setIsTocOpen(!isTocOpen)}
                                        className="text-blue-900 text-xl focus:outline-none"
                                    >
                                        {isTocOpen ? <CloseOutlined /> : <MenuUnfoldOutlined />}
                                    </button>
                                </div>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${isTocOpen ? "max-h-96" : "max-h-0"
                                        }`}
                                >
                                    <ul className="space-y-3">
                                        <li>
                                            <a
                                                href="#gioi-thieu"
                                                className="text-blue-600 hover:text-blue-800"
                                            >
                                                Giới thiệu về tư tưởng Mác-Lênin và các vấn đề kinh tế hiện đại
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#giai-quyet-bat-binh-dang"
                                                className="text-blue-600 hover:text-blue-800"
                                            >
                                                Giải quyết bất bình đẳng kinh tế
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#phat-trien-ben-vung"
                                                className="text-blue-600 hover:text-blue-800"
                                            >
                                                Hướng tới phát triển bền vững
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#ket-noi-thuc-tien"
                                                className="text-blue-600 hover:text-blue-800"
                                            >
                                                Kết nối nghiên cứu với thực tiễn đương đại
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#bai-viet-lien-quan"
                                                className="text-blue-600 hover:text-blue-800"
                                            >
                                                Các bài viết liên quan
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Giới thiệu */}
                            <div id="gioi-thieu">
                                <h2 className="text-2xl font-semibold text-blue-900 mb-4 border-l-4 border-blue-600 pl-4">
                                    Giới thiệu về tư tưởng Mác-Lênin và các vấn đề kinh tế hiện đại
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Tư tưởng Mác-Lênin, với các khái niệm cốt lõi như quan hệ sản xuất, giá trị thặng dư, và đấu tranh giai cấp, đã từng là kim chỉ nam cho nhiều quốc gia xã hội chủ nghĩa trong thế kỷ 20. Trong bối cảnh kinh tế hiện đại, các vấn đề như bất bình đẳng kinh tế, ô nhiễm môi trường, và phát triển không bền vững đang trở thành thách thức lớn. Bài viết này sẽ khám phá cách vận dụng tư tưởng Mác-Lênin để đề xuất các giải pháp cho các vấn đề kinh tế đương đại, đồng thời kết nối lý luận với thực tiễn.
                                </p>
                            </div>

                            {/* Giải quyết bất bình đẳng kinh tế */}
                            <div id="giai-quyet-bat-binh-dang">
                                <h2 className="text-2xl font-semibold text-blue-900 mb-4 border-l-4 border-blue-600 pl-4">
                                    Giải quyết bất bình đẳng kinh tế
                                </h2>
                                <div className="flex flex-col lg:flex-row gap-6 items-center">
                                    <div className="lg:w-1/2">
                                        <p className="text-gray-700 leading-relaxed">
                                            Bất bình đẳng kinh tế là một trong những vấn đề lớn của thế giới hiện nay. Theo báo cáo của Oxfam (2023), 1% dân số giàu nhất thế giới sở hữu gần 50% tài sản toàn cầu, trong khi 50% dân số nghèo nhất chỉ sở hữu 0,5%. Tư tưởng Mác-Lênin, với lý luận về giá trị thặng dư, có thể được vận dụng để phân tích và giải quyết vấn đề này.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed mt-4">
                                            <span className="font-bold">Đề xuất giải pháp:</span>
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-2">
                                            <li>
                                                <span className="font-bold">Tăng thuế lũy tiến:</span> Dựa trên tư tưởng công bằng xã hội của Mác-Lênin, các quốc gia có thể áp dụng thuế lũy tiến cao hơn đối với người giàu. Ví dụ, Thụy Điển áp dụng mức thuế thu nhập cao nhất 57% (2023), giúp giảm hệ số Gini từ 0,31 xuống 0,28 sau thuế.
                                            </li>
                                            <li>
                                                <span className="font-bold">Phân phối lại tài sản:</span> Quốc hữu hóa một phần tài sản của các tập đoàn lớn để tái phân phối cho người nghèo, như chính sách bảo hiểm y tế toàn dân ở Việt Nam (đạt 92% dân số tham gia vào năm 2023).
                                            </li>
                                            <li>
                                                <span className="font-bold">Bảo vệ quyền lợi lao động:</span> Đảm bảo mức lương tối thiểu và điều kiện làm việc tốt hơn cho người lao động, đặc biệt trong các ngành gig economy (như tài xế Grab, công nhân Amazon).
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="lg:w-1/2">
                                        <img
                                            src="https://media.tapchitaichinh.vn/w1480/images/upload/tranhuyentrang/11292019/chi-muc.jpg"
                                            alt="Bất bình đẳng kinh tế"
                                            className="h-64 w-full rounded-lg object-cover hover:scale-105 transition-transform"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Hướng tới phát triển bền vững */}
                            <div id="phat-trien-ben-vung">
                                <h2 className="text-2xl font-semibold text-blue-900 mb-4 border-l-4 border-blue-600 pl-4">
                                    Hướng tới phát triển bền vững
                                </h2>
                                <div className="flex flex-col lg:flex-row gap-6 items-center">
                                    <div className="lg:w-1/2">
                                        <p className="text-gray-700 leading-relaxed">
                                            Phát triển bền vững là mục tiêu quan trọng trong bối cảnh biến đổi khí hậu và ô nhiễm môi trường. Tư tưởng Mác-Lênin, với quan điểm về mối quan hệ giữa con người và tự nhiên, có thể được vận dụng để đề xuất các giải pháp phát triển kinh tế bền vững.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed mt-4">
                                            <span className="font-bold">Đề xuất giải pháp:</span>
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-2">
                                            <li>
                                                <span className="font-bold">Kiểm soát sản xuất:</span> Dựa trên tư tưởng kế hoạch hóa của Mác-Lênin, các quốc gia có thể kiểm soát sản xuất để giảm thiểu ô nhiễm. Ví dụ, Trung Quốc đã giảm 40% lượng khí thải CO2 từ các nhà máy thép trong giai đoạn 2015-2020 nhờ kế hoạch hóa sản xuất.
                                            </li>
                                            <li>
                                                <span className="font-bold">Phát triển kinh tế tuần hoàn:</span> Áp dụng mô hình kinh tế tuần hoàn (tái chế, tái sử dụng) để giảm lãng phí tài nguyên, phù hợp với quan điểm của Mác về sự hài hòa giữa con người và tự nhiên.
                                            </li>
                                            <li>
                                                <span className="font-bold">Ưu tiên năng lượng tái tạo:</span> Đầu tư vào năng lượng tái tạo (như điện mặt trời, điện gió) thay vì nhiên liệu hóa thạch. Ví dụ, Việt Nam đã tăng tỷ lệ năng lượng tái tạo từ 4% (2015) lên 25% (2023).
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="lg:w-1/2">
                                        <img
                                            src="https://maisonoffice.vn/wp-content/uploads/2024/05/1-phat-trien-ben-vung-la-muc-tieu-chung-cua-toan-cau.jpg"
                                            alt="Phát triển bền vững"
                                            className="h-64 w-full rounded-lg object-cover hover:scale-105 transition-transform"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Kết nối nghiên cứu với thực tiễn đương đại */}
                            <div id="ket-noi-thuc-tien">
                                <h2 className="text-2xl font-semibold text-blue-900 mb-4 border-l-4 border-blue-600 pl-4">
                                    Kết nối nghiên cứu với thực tiễn đương đại
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Việc vận dụng tư tưởng Mác-Lênin vào thực tiễn cần linh hoạt và sáng tạo, kết hợp với các mô hình kinh tế hiện đại:
                                </p>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-2">
                                    <li>
                                        <span className="font-bold">Kết hợp với kinh tế thị trường:</span> Việt Nam đã thành công khi kết hợp tư tưởng Mác-Lênin với kinh tế thị trường định hướng xã hội chủ nghĩa, đạt tốc độ tăng trưởng GDP trung bình 6-7% mỗi năm từ 1986 đến 2023.
                                    </li>
                                    <li>
                                        <span className="font-bold">Ứng dụng công nghệ số:</span> Sử dụng công nghệ số để quản lý và phân phối tài nguyên công bằng hơn, như hệ thống thuế trực tuyến hoặc các nền tảng chia sẻ tài nguyên.
                                    </li>
                                    <li>
                                        <span className="font-bold">Học hỏi từ các quốc gia khác:</span> Trung Quốc đã vận dụng tư tưởng Mác-Lênin để xây dựng mô hình "Đặc sắc Trung Quốc", kết hợp kinh tế thị trường với sự kiểm soát của nhà nước, giúp giảm tỷ lệ nghèo từ 88% (1981) xuống dưới 1% (2018).
                                    </li>
                                </ul>
                            </div>

                            {/* Các bài viết liên quan */}
                            <div id="bai-viet-lien-quan">
                                <h2 className="text-2xl font-semibold text-blue-900 mb-4 border-l-4 border-blue-600 pl-4">
                                    Các bài viết liên quan
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Khám phá thêm các bài viết liên quan từ các nguồn trên mạng để hiểu sâu hơn về cách vận dụng tư tưởng Mác-Lênin vào các vấn đề kinh tế hiện đại:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                        <h3 className="text-lg font-semibold text-blue-900 mb-2">
                                            The Interwining of Knowledge, Affect, Life, and Mentality: Chinese Youths’ Turn to Marxist-Leninist-Maoist in Contemporary China
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            Bài viết khám phá lý do tại sao giới trẻ Trung Quốc quay lại với tư tưởng Mác-Lênin-Mao, tập trung vào các vấn đề kinh tế - chính trị hiện đại như bất bình đẳng và sự phát triển của Trung Quốc trong hệ thống tư bản toàn cầu.
                                        </p>
                                        <a
                                            href="https://field-journal.com/issue-27/the-interwining-of-knowledge-affect-life-and-mentality-chinese-youths-turn-to-marxist-leninist-maoist-in-contemporary-china"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
                                        >
                                            Đọc thêm
                                        </a>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                        <h3 className="text-lg font-semibold text-blue-900 mb-2">
                                            Lenin as a Development Economist: A Study in Application of Marx’s Theory in Russia
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            Bài viết phân tích cách Lenin áp dụng lý thuyết của Marx vào các vấn đề phát triển kinh tế ở Nga trong những năm 1890, đặc biệt là trong bối cảnh tranh luận với các nhà kinh tế Narodnik.
                                        </p>
                                        <a
                                            href="https://rujec.org/article/67255/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
                                        >
                                            Đọc thêm
                                        </a>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                        <h3 className="text-lg font-semibold text-blue-900 mb-2">
                                            Leninism: The Marxism of the Current Era
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            Bài viết thảo luận về sự phát triển của chủ nghĩa Mác-Lênin trong thời đại đế quốc và cách Lenin áp dụng lý thuyết này để giải quyết các vấn đề kinh tế và cách mạng ở Nga.
                                        </p>
                                        <a
                                            href="https://fightbacknews.org/articles/leninism-the-marxism-of-the-current-era"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
                                        >
                                            Đọc thêm
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Nút quay lại đầu trang */}
                        <button
                            onClick={scrollToTop}
                            className="fixed bottom-24 right-72 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all z-20"
                            title="Quay lại đầu trang"
                        >
                            <UpOutlined className="text-lg" />
                        </button>
                    </div>
                </div>
            </MainLayout>
        </>
    );
};

export default Discover;