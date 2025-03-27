import React, { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import { MenuOutlined, RightOutlined, CloseOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const CorePrinciples: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State cho menu điều hướng trên mobile
    const [isTocOpen, setIsTocOpen] = useState(true); // State cho mục lục (Table of Contents)

    return (
        <>
            <MainLayout>
                <div className="bg-[#E7E4DB] min-h-screen relative">
                    {/* Thanh điều hướng cố định (Sticky Sidebar) - Chỉ hiển thị trên desktop */}
                    <div className="hidden lg:block fixed right-0 w-64 bg-indigo-50 p-5 rounded-l-xl shadow-lg z-10">
                        <h3 className="text-lg font-semibold text-indigo-800 mb-4">
                            Các bài viết khác
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="/political-economy"
                                    className="flex items-center text-base font-medium text-indigo-600 hover:text-indigo-800 hover:bg-indigo-100 px-2 py-1 rounded-md transition-all"
                                >
                                    <RightOutlined className="mr-2 text-indigo-600" />
                                    Định nghĩa kinh tế chính trị Mác Lê-Nin
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/analysis"
                                    className="flex items-center text-base font-medium text-indigo-600 hover:text-indigo-800 hover:bg-indigo-100 px-2 py-1 rounded-md transition-all"
                                >
                                    <RightOutlined className="mr-2 text-indigo-600" />
                                    Phân tích ảnh hưởng lịch sử của tư tưởng Mác Lê-Nin đến ảnh hưởng kinh tế
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
                                    href="/discover"
                                    className="flex items-center text-base font-medium text-indigo-600 hover:text-indigo-800 hover:bg-indigo-100 px-2 py-1 rounded-md transition-all"
                                >
                                    <RightOutlined className="mr-2 text-indigo-600" />
                                    Khám phá cách vận dụng tư tưởng Mác-Lênin vào giải quyết các vấn đề kinh tế hiện đại
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/document"
                                    className="flex items-center text-base font-medium text-indigo-600 hover:text-indigo-800 hover:bg-indigo-100 px-2 py-1 rounded-md transition-all"
                                >
                                    <RightOutlined className="mr-2 text-indigo-600" />
                                    Tài liệu tham khảo
                                </a>
                            </li>
                        </ul>
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
                                        href="#"
                                        className="flex items-center text-base font-medium text-indigo-600 hover:text-indigo-800 hover:bg-indigo-100 px-2 py-1 rounded-md transition-all"
                                    >
                                        <RightOutlined className="mr-2 text-indigo-600" />
                                        Phân tích ảnh hưởng lịch sử của tư tưởng Mác-Lênin đến phát triển kinh tế
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

                    {/* Nội dung chính */}
                    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                        {/* Tiêu đề chính */}
                        <h1 className="text-4xl sm:text-5xl font-bold text-indigo-800 text-center mb-8">
                            CÁC NGUYÊN TẮC CỐT LÕI CỦA KINH TẾ CHÍNH TRỊ MÁC-LÊNIN
                        </h1>
                        <div className="space-y-12">
                            {/* Mục lục bài viết - Floating Card với tính năng thu gọn */}
                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow sticky top-1 z-10">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-lg font-semibold text-indigo-800">
                                        Mục lục bài viết
                                    </h2>
                                    <button
                                        onClick={() => setIsTocOpen(!isTocOpen)}
                                        className="text-indigo-800 text-xl focus:outline-none"
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
                                                className="text-indigo-600 hover:text-indigo-800"
                                            >
                                                Giới thiệu về Kinh tế Chính trị Mác-Lênin
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#quan-he-san-xuat"
                                                className="text-indigo-600 hover:text-indigo-800"
                                            >
                                                Quan hệ sản xuất
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#gia-tri-thang-du"
                                                className="text-indigo-600 hover:text-indigo-800"
                                            >
                                                Giá trị thặng dư
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#dau-tranh-giai-cap"
                                                className="text-indigo-600 hover:text-indigo-800"
                                            >
                                                Đấu tranh giai cấp
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#ket-luan"
                                                className="text-indigo-600 hover:text-indigo-800"
                                            >
                                                Kết luận: Ý nghĩa của các nguyên tắc cốt lõi
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Giới thiệu */}
                            <div id="gioi-thieu">
                                <h2 className="text-2xl font-semibold text-indigo-800 mb-4 border-l-4 border-indigo-600 pl-4">
                                    Giới thiệu về Kinh tế Chính trị Mác-Lênin
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Kinh tế Chính trị Mác-Lênin là một môn khoa học nghiên cứu các quy luật kinh tế trong xã hội, đặc biệt là mối quan hệ giữa con người trong quá trình sản xuất, phân phối, trao đổi và tiêu dùng. Được xây dựng bởi Karl Marx và Friedrich Engels, sau đó phát triển bởi Vladimir Lenin, môn học này tập trung vào việc phân tích các mâu thuẫn kinh tế và xã hội để hướng tới một xã hội không có bóc lột. Trong bài viết này, chúng ta sẽ tìm hiểu các nguyên tắc cốt lõi của Kinh tế Chính trị Mác-Lênin, bao gồm quan hệ sản xuất, giá trị thặng dư, và đấu tranh giai cấp, với cách giải thích dễ hiểu và ví dụ minh họa.
                                </p>
                            </div>

                            {/* Quan hệ sản xuất */}
                            <div id="quan-he-san-xuat">
                                <h2 className="text-2xl font-semibold text-indigo-800 mb-4 border-l-4 border-indigo-600 pl-4">
                                    Quan hệ sản xuất
                                </h2>
                                <div className="flex flex-col lg:flex-row gap-6 items-center">
                                    <div className="lg:w-1/2">
                                        <p className="text-gray-700 leading-relaxed">
                                            Quan hệ sản xuất là mối quan hệ giữa con người trong quá trình sản xuất của cải vật chất, bao gồm việc ai sở hữu công cụ sản xuất (như máy móc, đất đai) và ai làm việc để tạo ra sản phẩm. Theo Mác-Lênin, quan hệ sản xuất quyết định cách xã hội vận hành và là nền tảng của mọi hình thái kinh tế - xã hội.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed mt-4">
                                            <span className="font-bold">Ví dụ minh họa:</span> Trong xã hội phong kiến, địa chủ sở hữu đất đai (công cụ sản xuất), còn nông dân làm việc trên đất và nộp tô cho địa chủ. Quan hệ sản xuất ở đây là quan hệ bóc lột: địa chủ hưởng phần lớn sản phẩm, còn nông dân chỉ được giữ lại một phần nhỏ để sống. Trong xã hội tư bản, quan hệ sản xuất thay đổi: nhà tư bản sở hữu nhà máy, còn công nhân làm việc và nhận lương, nhưng giá trị họ tạo ra lớn hơn nhiều so với lương họ nhận.
                                        </p>
                                    </div>
                                    <div className="lg:w-1/2">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv9-ttSC6QoswmkfBKwBY39lMFyuzxOJc_lg&s"
                                            alt="Quan hệ sản xuất trong xã hội phong kiến"
                                            className="h-64 w-full rounded-lg object-cover hover:scale-105 transition-transform"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Giá trị thặng dư */}
                            <div id="gia-tri-thang-du">
                                <h2 className="text-2xl font-semibold text-indigo-800 mb-4 border-l-4 border-indigo-600 pl-4">
                                    Giá trị thặng dư
                                </h2>
                                <div className="flex flex-col lg:flex-row gap-6 items-center">
                                    <div className="lg:w-1/2">
                                        <p className="text-gray-700 leading-relaxed">
                                            Giá trị thặng dư là phần giá trị mà công nhân tạo ra vượt quá giá trị sức lao động của họ (tức là vượt quá tiền lương họ nhận). Theo Mác, đây là nguồn gốc của lợi nhuận trong nền kinh tế tư bản. Nhà tư bản trả lương cho công nhân chỉ đủ để tái sản xuất sức lao động (như ăn uống, nghỉ ngơi), nhưng giá trị mà công nhân tạo ra lớn hơn nhiều, và phần chênh lệch này bị nhà tư bản chiếm đoạt.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed mt-4">
                                            <span className="font-bold">Ví dụ minh họa:</span> Một công nhân may mặc làm việc 8 giờ mỗi ngày và được trả lương 200.000 đồng, đủ để mua thực phẩm và sinh hoạt cơ bản. Trong 8 giờ đó, công nhân may được 10 chiếc áo, mỗi chiếc bán được 100.000 đồng, tổng cộng tạo ra 1.000.000 đồng giá trị. Nhà tư bản trả công nhân 200.000 đồng, còn lại 800.000 đồng là giá trị thặng dư mà nhà tư bản giữ làm lợi nhuận.
                                        </p>
                                    </div>
                                    <div className="lg:w-1/2">
                                        <img
                                            src="https://lh6.googleusercontent.com/proxy/WpiYzSdZRihiMNAAzX8Dqpm5VTKlZXTRBemQTK57cQPzt_Kf7IHWByGoB0jeREQuOGS9qtW8w-E3ZN5h8HWhaARvKwlVM1kjQkTFg3U4BVEsVlX1-uQ2JlboEVbuWIdYec0FL9-YVGALU6bSRyTVkNa3V7ExKtTo6-vS_d2546jwrvqJvnTF"
                                            alt="Nhà máy tư bản và giá trị thặng dư"
                                            className="h-64 w-full rounded-lg object-cover hover:scale-105 transition-transform"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Đấu tranh giai cấp */}
                            <div id="dau-tranh-giai-cap">
                                <h2 className="text-2xl font-semibold text-indigo-800 mb-4 border-l-4 border-indigo-600 pl-4">
                                    Đấu tranh giai cấp
                                </h2>
                                <div className="flex flex-col lg:flex-row gap-6 items-center">
                                    <div className="lg:w-1/2">
                                        <p className="text-gray-700 leading-relaxed">
                                            Đấu tranh giai cấp là mâu thuẫn giữa các giai cấp trong xã hội, xuất phát từ lợi ích kinh tế đối lập. Theo Mác-Lênin, lịch sử phát triển của xã hội là lịch sử của đấu tranh giai cấp: giữa nông dân và địa chủ trong xã hội phong kiến, giữa công nhân và tư bản trong xã hội tư bản. Đấu tranh giai cấp là động lực thúc đẩy sự thay đổi xã hội, dẫn đến các cuộc cách mạng để xóa bỏ bóc lột.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed mt-4">
                                            <span className="font-bold">Ví dụ minh họa:</span> Trong xã hội tư bản, công nhân làm việc trong các nhà máy nhưng chỉ nhận lương thấp, trong khi nhà tư bản hưởng lợi nhuận lớn từ giá trị thặng dư. Điều này dẫn đến mâu thuẫn: công nhân tổ chức đình công, biểu tình để đòi tăng lương và cải thiện điều kiện làm việc. Một ví dụ lịch sử là phong trào công nhân ở Anh thế kỷ 19, khi công nhân đấu tranh để có ngày làm việc 8 giờ thay vì 12-14 giờ như trước.
                                        </p>
                                    </div>
                                    <div className="lg:w-1/2">
                                        <img
                                            src="https://quantri.hocmon.gov.vn/UploadImages/ttvanhoa/thuvienanh/2020_4/Anh%20trien%20lam/giai%20cap%20CN%2030-4/04_284202010.JPG"
                                            alt="Phong trào đình công của công nhân"
                                            className="h-64 w-full rounded-lg object-cover hover:scale-105 transition-transform"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Kết luận */}
                            <div id="ket-luan">
                                <h2 className="text-2xl font-semibold text-indigo-800 mb-4 border-l-4 border-indigo-600 pl-4">
                                    Kết luận: Ý nghĩa của các nguyên tắc cốt lõi
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Các nguyên tắc cốt lõi của Kinh tế Chính trị Mác-Lênin – quan hệ sản xuất, giá trị thặng dư, và đấu tranh giai cấp – giúp chúng ta hiểu rõ bản chất của các mâu thuẫn kinh tế và xã hội. Quan hệ sản xuất là nền tảng để phân tích cách xã hội vận hành; giá trị thặng dư giải thích nguồn gốc của bóc lột trong nền kinh tế tư bản; và đấu tranh giai cấp là động lực để thay đổi xã hội, hướng tới một xã hội công bằng hơn. Những nguyên tắc này không chỉ có giá trị lý luận mà còn có thể áp dụng để phân tích các vấn đề kinh tế - xã hội hiện nay, như bất bình đẳng thu nhập hay phong trào công nhân toàn cầu.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
};

export default CorePrinciples;