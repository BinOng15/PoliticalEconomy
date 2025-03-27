import React, { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import { CloseOutlined, MenuOutlined, MenuUnfoldOutlined, RightOutlined, UpOutlined } from "@ant-design/icons";

const PoliticalEconomy: React.FC = () => {
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
                <div className="bg-[#E7E4DB] min-h-screen">
                    {/* Nội dung chính */}
                    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                        {/* Bố cục 2 cột: Nội dung chính (trái) và Menu điều hướng (phải) */}
                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* Cột trái: Nội dung chính (bao gồm mục lục) */}
                            <div className="lg:w-3/4">
                                {/* Tiêu đề chính */}
                                <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 text-center mb-6">
                                    KINH TẾ CHÍNH TRỊ MAC-LÊNIN LÀ GÌ?
                                </h1>
                                <div className="space-y-8">
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
                                            className={`overflow-hidden transition-all duration-300 ${isTocOpen ? "max-h-64" : "max-h-0"
                                                }`}
                                        >
                                            <ul className="space-y-3">
                                                <li>
                                                    <a
                                                        href="#kinh-te-chinh-tri-mac-lenin-la-gi"
                                                        className="text-blue-600 hover:text-blue-800"
                                                    >
                                                        Kinh tế chính trị Mác-Lênin là gì?
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#cac-noi-dung-chu-yeu"
                                                        className="text-blue-600 hover:text-blue-800"
                                                    >
                                                        Các nội dung chủ yếu của Kinh tế chính trị Mác-Lênin
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#phuong-phap-nghien-cuu"
                                                        className="text-blue-600 hover:text-blue-800"
                                                    >
                                                        Phương pháp nghiên cứu của kinh tế chính trị Mác-Lênin
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#video-tham-khao"
                                                        className="text-blue-600 hover:text-blue-800"
                                                    >
                                                        Video tham khảo
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Mục đích bài viết */}
                                    <div id="muc-dich-bai-viet">
                                        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
                                            Mục đích bài viết
                                        </h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            Kinh tế chính trị Mác-Lênin là một môn học quan trọng trong hệ thống giáo dục đại học Việt Nam. Bài viết này nhằm giới thiệu khái quát về môn học, ý nghĩa và phương pháp tiếp cận để người học có cái nhìn tổng quan và định hướng rõ ràng khi nghiên cứu.
                                        </p>
                                    </div>

                                    <div id="kinh-te-chinh-tri-mac-lenin-la-gi">
                                        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
                                            Kinh tế chính trị Mác Lê-Nin là gì?
                                        </h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            Kinh tế chính trị là một trong ba bộ phận cấu thành của lý luận Mác - Lênin, là khoa học nghiên cứu về quan hệ sản xuất trong mối liên hệ và sự tác động lẫn nhau với lực lượng sản xuất và kiến trúc thượng tầng; nghiên cứu quan hệ giữa người với người trong quá trình sản xuất, phân phối, trao đổi và tiêu dùng của cải vật chất trong xã hội.
                                            Mặc dù ra đời tương đối muộn hơn so với các môn khoa học khác như triết học, sử học..., nhưng kinh tế chính trị có vai trò rất quan trọng trong đời sống xã hội.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed mt-4">
                                            Ý nghĩa của môn học nằm ở chỗ nó cung cấp nền tảng lý luận để phân tích các vấn đề kinh tế - xã hội, giúp người học có tư duy phản biện và khả năng áp dụng vào thực tiễn. Đây là một môn học quan trọng trong chương trình đào tạo của nhiều ngành học, đặc biệt là các ngành liên quan đến kinh tế, chính trị và quản lý.
                                        </p>
                                        {/* Hình ảnh minh họa 1 */}
                                        <img
                                            src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-9/175145427_2878537275808367_2590184667171984144_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=2285d6&_nc_ohc=ENFJZgk2TikQ7kNvgEL60f8&_nc_oc=AdnSzrUvr0XGsiAsLQDB8ZlXJov0jhIyA62sdkpStQc3xP62QAaEdZc_s5i318oefk4&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=yUtknuluT3OOX2Q9J7Zheg&oh=00_AYExXpzVylcjyC8XpW-dIofpfMK2eEvVX8zlgtRRyXFmBw&oe=680BAF7D"
                                            alt="Kinh tế chính trị Mác-Lênin"
                                            className="h-64 max-w-full rounded-lg mt-6 mx-auto block"
                                        />
                                    </div>

                                    {/* Câu hỏi gì cần đặt ra khi học môn này? */}
                                    <div id="cau-hoi-can-dat-ra">
                                        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
                                            Câu hỏi gì cần đặt ra khi học môn này?
                                        </h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            Khi học Kinh tế chính trị Mác-Lênin, bạn nên đặt ra các câu hỏi như: <span className="font-bold">Làm thế nào để hiểu rõ mối quan hệ giữa kinh tế và chính trị?</span> Các quy luật kinh tế vận hành như thế nào trong các hình thái kinh tế - xã hội khác nhau? Làm thế nào để áp dụng các nguyên lý của môn học vào việc giải quyết các vấn đề thực tiễn?
                                        </p>
                                        <p className="text-gray-700 leading-relaxed mt-4">
                                            Ngoài ra, bạn cũng nên tự hỏi: <span className="font-bold">Làm thế nào để tư duy phản biện khi phân tích các hiện tượng kinh tế?</span> Điều này sẽ giúp bạn không chỉ học lý thuyết mà còn phát triển kỹ năng phân tích và giải quyết vấn đề.
                                        </p>
                                    </div>

                                    {/* Các nội dung chủ yếu của Kinh tế chính trị Mác-Lênin */}
                                    <div id="cac-noi-dung-chu-yeu">
                                        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
                                            Các nội dung chủ yếu của Kinh tế chính trị Mác-Lênin
                                        </h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            Kinh tế chính trị Mác-Lênin nghiên cứu các nội dung chính sau:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-2">
                                            <li>
                                                <span className="font-bold">Quy luật kinh tế trong các hình thái kinh tế - xã hội:</span> Phân tích các quy luật kinh tế vận hành trong các giai đoạn lịch sử khác nhau.
                                            </li>
                                            <li>
                                                <span className="font-bold">Mối quan hệ giữa kinh tế và chính trị:</span> Nghiên cứu cách các yếu tố chính trị ảnh hưởng đến kinh tế và ngược lại.
                                            </li>
                                            <li>
                                                <span className="font-bold">Giá trị thặng dư và tích lũy tư bản:</span> Phân tích cơ chế khai thác giá trị thặng dư trong nền kinh tế tư bản.
                                            </li>
                                            <li>
                                                <span className="font-bold">Quy luật giá trị:</span> Nghiên cứu vai trò của quy luật giá trị trong nền kinh tế thị trường.
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Phương pháp nghiên cứu của Kinh tế chính trị Mác-Lênin */}
                                    <div id="phuong-phap-nghien-cuu">
                                        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
                                            Phương pháp nghiên cứu của Kinh tế chính trị Mác-Lênin bao gồm
                                        </h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            Phương pháp nghiên cứu của Kinh tế chính trị Mác-Lênin bao gồm:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-2">
                                            <li>
                                                <span className="font-bold">Phương pháp biện chứng duy vật lịch sử:</span> Phân tích các hiện tượng kinh tế trong mối quan hệ qua lại và vận động không ngừng.
                                            </li>
                                            <li>
                                                <span className="font-bold">Phương pháp trừu tượng hóa khoa học:</span> Loại bỏ các yếu tố ngẫu nhiên để tập trung vào các quy luật kinh tế cơ bản.
                                            </li>
                                            <li>
                                                <span className="font-bold">Phương pháp phân tích và tổng hợp:</span> Phân tích các hiện tượng kinh tế thành các yếu tố cơ bản, sau đó tổng hợp để rút ra kết luận.
                                            </li>
                                            <li>
                                                <span className="font-bold">Phương pháp lịch sử và logic:</span> Kết hợp nghiên cứu lịch sử phát triển kinh tế với các phân tích logic để hiểu rõ bản chất.
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Phương pháp tiếp cận môn học Kinh tế chính trị Mác-Lênin */}
                                    <div id="phuong-phap-tiep-can">
                                        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
                                            Phương pháp tiếp cận môn học Kinh tế chính trị Mác-Lênin
                                        </h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            Để học tốt môn Kinh tế chính trị Mác-Lênin, bạn cần áp dụng các phương pháp tiếp cận sau:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-2">
                                            <li>
                                                <span className="font-bold">Học lý thuyết gắn với thực tiễn:</span> Liên hệ các khái niệm lý thuyết với các vấn đề kinh tế - xã hội hiện nay.
                                            </li>
                                            <li>
                                                <span className="font-bold">Tư duy biện chứng:</span> Phân tích các hiện tượng kinh tế trong mối quan hệ qua lại và vận động không ngừng.
                                            </li>
                                            <li>
                                                <span className="font-bold">Đọc thêm tài liệu tham khảo:</span> Ngoài giáo trình chính, bạn nên tham khảo các tài liệu của các nhà kinh tế học nổi tiếng để mở rộng hiểu biết.
                                            </li>
                                            <li>
                                                <span className="font-bold">Thảo luận nhóm:</span> Tham gia thảo luận với bạn bè hoặc giảng viên để hiểu sâu hơn về các vấn đề phức tạp.
                                            </li>
                                        </ul>
                                        <p className="text-gray-700 leading-relaxed mt-4">
                                            Việc áp dụng các phương pháp trên sẽ giúp bạn không chỉ nắm vững kiến thức mà còn phát triển kỹ năng tư duy và phân tích, từ đó áp dụng hiệu quả vào công việc và cuộc sống.
                                        </p>
                                    </div>
                                    {/* Video YouTube */}
                                    <div id="video-tham-khao" className="mt-8">
                                        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
                                            Video tham khảo: Kinh tế chính trị Mác-Lênin
                                        </h2>
                                        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                                            <iframe
                                                className="absolute top-0 left-0 w-full h-full rounded-lg"
                                                src="https://www.youtube.com/embed/8ch1avcjfgE?list=PLQmO64428EoMYmJ8VID0ARVN1z56VlIPu"
                                                title="Kinh tế chính trị Mác-Lênin"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Thanh điều hướng cố định (Sticky Sidebar) - Chỉ hiển thị trên desktop */}
                            <div className="lg:w-1/4 hidden lg:block">
                                <div className="w-full bg-indigo-50 p-5 rounded-xl shadow-lg">
                                    <h3 className="text-lg font-semibold text-indigo-800 mb-4">
                                        Các bài viết khác
                                    </h3>
                                    <ul className="space-y-3">
                                        <li>
                                            <a
                                                href="/core-principles"
                                                className="flex items-center text-base font-medium text-indigo-600 hover:text-indigo-800 hover:bg-indigo-100 px-2 py-1 rounded-md transition-all"
                                            >
                                                <RightOutlined className="mr-2 text-indigo-600" />
                                                Các nguyên tắc cốt lõi của kinh tế chính trị Mác Lê-Nin
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/analysis"
                                                className="flex items-center text-base font-medium text-indigo-600 hover:text-indigo-800 hover:bg-indigo-100 px-2 py-1 rounded-md transition-all"
                                            >
                                                <RightOutlined className="mr-2 text-indigo-600" />
                                                Phân tích ảnh hưởng lịch sử của tư tưởng Mác Lê-Nin đến phát triển kinh tế
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/evaluate"
                                                className="flex items-center text-base font-medium text-indigo-600 hover:text-indigo-800 hover:bg-indigo-100 px-2 py-1 rounded-md transition-all"
                                            >
                                                <RightOutlined className="mr-2 text-indigo-600" />
                                                Đánh giá sự phù hợp của Kinh tế Chính trị Mác-Lênin trong bối cảnh kinh tế hiện đại
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="discover"
                                                className="flex items-center text-base font-medium text-indigo-600 hover:text-indigo-800 hover:bg-indigo-100 px-2 py-1 rounded-md transition-all"
                                            >
                                                <RightOutlined className="mr-2 text-indigo-600" />
                                                Khám phá cách vận dụng tư tưởng Mác-Lênin vào giải quyết các vấn đề kinh tế hiện đại
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="document"
                                                className="flex items-center text-base font-medium text-indigo-600 hover:text-indigo-800 hover:bg-indigo-100 px-2 py-1 rounded-md transition-all"
                                            >
                                                <RightOutlined className="mr-2 text-indigo-600" />
                                                Tài liệu tham khảo
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Menu điều hướng trên mobile */}
                            <div className="lg:hidden fixed top-4 right-4 z-20">
                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="text-indigo-800 text-2xl focus:outline-none"
                                >
                                    {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
                                </button>
                            </div>
                            {isMenuOpen && (
                                <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-indigo-50 p-6 z-10">
                                    <div className="flex justify-end">
                                        <button
                                            onClick={() => setIsMenuOpen(false)}
                                            className="text-indigo-800 text-2xl focus:outline-none"
                                        >
                                            <CloseOutlined />
                                        </button>
                                    </div>
                                    <h3 className="text-lg font-semibold text-indigo-800 mb-4 mt-4">
                                        Các bài viết khác
                                    </h3>
                                    <ul className="space-y-3">
                                        <li>
                                            <a
                                                href="/core-principles"
                                                className="flex items-center text-base font-medium text-indigo-600 hover:text-indigo-800 hover:bg-indigo-100 px-2 py-1 rounded-md transition-all"
                                            >
                                                <RightOutlined className="mr-2 text-indigo-600" />
                                                Các nguyên tắc cốt lõi của kinh tế chính trị Mác Lê-Nin
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="flex items-center text-base font-medium text-indigo-600 hover:text-indigo-800 hover:bg-indigo-100 px-2 py-1 rounded-md transition-all"
                                            >
                                                <RightOutlined className="mr-2 text-indigo-600" />
                                                Phân tích ảnh hưởng lịch sử của tư tưởng Mác Lê-Nin đến phát triển kinh tế
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="flex items-center text-base font-medium text-indigo-600 hover:text-indigo-800 hover:bg-indigo-100 px-2 py-1 rounded-md transition-all"
                                            >
                                                <RightOutlined className="mr-2 text-indigo-600" />
                                                Đánh giá sự phù hợp của Kinh tế Chính trị Mác-Lênin trong bối cảnh kinh tế hiện đại
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="flex items-center text-base font-medium text-indigo-600 hover:text-indigo-800 hover:bg-indigo-100 px-2 py-1 rounded-md transition-all"
                                            >
                                                <RightOutlined className="mr-2 text-indigo-600" />
                                                Khám phá cách vận dụng tư tưởng Mác-Lênin vào giải quyết các vấn đề kinh tế hiện đại
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="flex items-center text-base font-medium text-indigo-600 hover:text-indigo-800 hover:bg-indigo-100 px-2 py-1 rounded-md transition-all"
                                            >
                                                <RightOutlined className="mr-2 text-indigo-600" />
                                                Tài liệu tham khảo
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            )}

                        </div>
                        {/* Nút quay lại đầu trang */}
                        <button
                            onClick={scrollToTop}
                            className="fixed bottom-64 right-12 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all z-20"
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

export default PoliticalEconomy;