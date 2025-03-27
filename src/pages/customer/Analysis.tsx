import React, { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import { CloseOutlined, MenuOutlined, MenuUnfoldOutlined, RightOutlined } from "@ant-design/icons";

const Analysis: React.FC = () => {
    const [isTocOpen, setIsTocOpen] = useState(true); // State cho mục lục (Table of Contents)
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
                                    PHÂN TÍCH ẢNH HƯỞNG LỊCH SỬ CỦA TƯ TƯỞNG MÁC-LÊNIN ĐẾN PHÁT TRIỂN KINH TẾ
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
                                            className={`overflow-hidden transition-all duration-300 ${isTocOpen ? "max-h-96" : "max-h-0"
                                                }`}
                                        >
                                            <ul className="space-y-3">
                                                <li>
                                                    <a
                                                        href="#gioi-thieu"
                                                        className="text-blue-600 hover:text-blue-800"
                                                    >
                                                        Giới thiệu về tư tưởng Mác-Lênin và phát triển kinh tế
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#lien-xo"
                                                        className="text-blue-600 hover:text-blue-800"
                                                    >
                                                        Áp dụng tư tưởng Mác-Lênin tại Liên Xô
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#trung-quoc"
                                                        className="text-blue-600 hover:text-blue-800"
                                                    >
                                                        Áp dụng tư tưởng Mác-Lênin tại Trung Quốc
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#viet-nam"
                                                        className="text-blue-600 hover:text-blue-800"
                                                    >
                                                        Áp dụng tư tưởng Mác-Lênin tại Việt Nam
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#danh-gia"
                                                        className="text-blue-600 hover:text-blue-800"
                                                    >
                                                        Đánh giá tổng quan: Thành tựu và hạn chế
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Giới thiệu */}
                                    <div id="gioi-thieu">
                                        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
                                            Giới thiệu về tư tưởng Mác-Lênin và phát triển kinh tế
                                        </h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            Tư tưởng Mác-Lênin, được xây dựng bởi Karl Marx và Friedrich Engels, sau đó được Vladimir Lenin phát triển, là nền tảng lý luận cho việc xây dựng chủ nghĩa xã hội và chủ nghĩa cộng sản. Trong lĩnh vực kinh tế, tư tưởng này tập trung vào việc phân tích các quan hệ sản xuất, mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất, cũng như học thuyết giá trị thặng dư, nhằm mục tiêu xóa bỏ chế độ tư bản chủ nghĩa và xây dựng một nền kinh tế không có bóc lột. Tư tưởng Mác-Lênin đã được áp dụng tại nhiều quốc gia, trong đó có Liên Xô, Trung Quốc và Việt Nam, với những kết quả khác nhau, vừa đạt được thành tựu to lớn, vừa đối mặt với nhiều hạn chế.
                                        </p>
                                    </div>

                                    {/* Áp dụng tại Liên Xô */}
                                    <div id="lien-xo">
                                        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
                                            Áp dụng tư tưởng Mác-Lênin tại Liên Xô
                                        </h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            Liên Xô là quốc gia đầu tiên áp dụng tư tưởng Mác-Lênin vào thực tiễn sau Cách mạng Tháng Mười Nga (1917). Dưới sự lãnh đạo của Lenin và sau đó là Stalin, Liên Xô đã thực hiện mô hình kinh tế kế hoạch hóa tập trung, quốc hữu hóa các phương tiện sản xuất và xóa bỏ tư hữu.
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-2">
                                            <li>
                                                <span className="font-bold">Thành tựu:</span> Từ một nước nông nghiệp lạc hậu, Liên Xô đã nhanh chóng công nghiệp hóa, trở thành cường quốc công nghiệp vào những năm 1930. Sản lượng thép tăng từ 4,3 triệu tấn (1928) lên 18,3 triệu tấn (1940). Liên Xô cũng đạt được những thành tựu lớn trong giáo dục và khoa học, như chương trình không gian với việc phóng vệ tinh Sputnik (1957).
                                            </li>
                                            <li>
                                                <span className="font-bold">Hạn chế:</span> Mô hình kinh tế kế hoạch hóa tập trung dẫn đến thiếu động lực sản xuất, quan liêu và kém hiệu quả. Nông nghiệp bị đình trệ do chính sách tập thể hóa cưỡng chế, gây ra nạn đói lớn (1932-1933) khiến hàng triệu người chết. Đến những năm 1980, nền kinh tế Liên Xô rơi vào khủng hoảng, góp phần dẫn đến sự sụp đổ của Liên Xô vào năm 1991.
                                            </li>
                                        </ul>
                                        <img
                                            src="https://lh6.googleusercontent.com/proxy/4bT0RrLlrkNLlmX_fnRNTwr40jMwzaFCcTQprVrQnsbeYXssSN8_-D-fvbAosSmMfHu6vIS9YHMzRkXV51NE3Y8ZeG2YVzOd6pycQHmXoJCM_QvAD1DlINA9mL6TQ4SqoxHdUM4_jKUp2Tj752UJueZooS2cftFP2vTvJdgtSvMr0d1W2C4xsEz78A"
                                            alt="Công nghiệp hóa Liên Xô"
                                            className="h-64 max-w-full rounded-lg mt-6 mx-auto block"
                                        />
                                    </div>

                                    {/* Áp dụng tại Trung Quốc */}
                                    <div id="trung-quoc">
                                        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
                                            Áp dụng tư tưởng Mác-Lênin tại Trung Quốc
                                        </h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            Trung Quốc áp dụng tư tưởng Mác-Lênin sau Cách mạng Trung Quốc (1949) dưới sự lãnh đạo của Mao Trạch Đông. Ban đầu, Trung Quốc học theo mô hình Liên Xô với kinh tế kế hoạch hóa tập trung, nhưng sau đó chuyển sang mô hình "Đặc sắc Trung Quốc" dưới thời Đặng Tiểu Bình từ năm 1978.
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-2">
                                            <li>
                                                <span className="font-bold">Thành tựu:</span> Chính sách cải cách và mở cửa từ 1978 đã giúp Trung Quốc đạt tốc độ tăng trưởng kinh tế ấn tượng, trung bình 9,5% mỗi năm từ 1978 đến 2018. GDP của Trung Quốc tăng từ 367,9 tỷ USD (1978) lên 13,6 nghìn tỷ USD (2018), trở thành nền kinh tế lớn thứ hai thế giới. Tỷ lệ nghèo đói giảm từ 88% (1981) xuống dưới 1% (2018).
                                            </li>
                                            <li>
                                                <span className="font-bold">Hạn chế:</span> Mô hình kinh tế ban đầu dưới thời Mao Trạch Đông (như Đại Nhảy Vọt 1958-1962) gây ra thất bại nặng nề, dẫn đến nạn đói khiến hàng chục triệu người chết. Sự phát triển kinh tế nhanh chóng sau cải cách cũng gây ra bất bình đẳng thu nhập, ô nhiễm môi trường nghiêm trọng, và phụ thuộc vào xuất khẩu.
                                            </li>
                                        </ul>
                                        <img
                                            src="https://vioit.org.vn/Resources/tula/2023/11/02/TQ1.png"
                                            alt="Cải cách kinh tế Trung Quốc"
                                            className="h-64 max-w-full rounded-lg mt-6 mx-auto block"
                                        />
                                    </div>

                                    {/* Áp dụng tại Việt Nam */}
                                    <div id="viet-nam">
                                        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
                                            Áp dụng tư tưởng Mác-Lênin tại Việt Nam
                                        </h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            Việt Nam áp dụng tư tưởng Mác-Lênin từ khi Đảng Cộng sản Việt Nam ra đời (1930) và đặc biệt sau năm 1975, khi đất nước thống nhất. Từ năm 1986, Việt Nam thực hiện công cuộc Đổi Mới, chuyển từ kinh tế kế hoạch hóa tập trung sang kinh tế thị trường định hướng xã hội chủ nghĩa.
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-2">
                                            <li>
                                                <span className="font-bold">Thành tựu:</span> Sau Đổi Mới, Việt Nam đạt tốc độ tăng trưởng kinh tế trung bình 6-7% mỗi năm. GDP bình quân đầu người tăng từ 100 USD (1986) lên khoảng 2.800 USD (2019). Tỷ lệ nghèo đói giảm từ 58% (1993) xuống dưới 6% (2020). Việt Nam cũng hội nhập kinh tế quốc tế thành công, với các hiệp định như CPTPP và EVFTA.
                                            </li>
                                            <li>
                                                <span className="font-bold">Hạn chế:</span> Mô hình kinh tế trước Đổi Mới gây ra khủng hoảng kinh tế nghiêm trọng vào những năm 1980, với lạm phát lên tới 774% (1986). Sau Đổi Mới, Việt Nam vẫn đối mặt với bất bình đẳng vùng miền, tham nhũng, và phụ thuộc vào đầu tư nước ngoài.
                                            </li>
                                        </ul>
                                        <img
                                            src="https://cdn.tuyengiao.vn/uploads/2021/7/16/31/1045_anh-co-to-quoc.jpg?w=440&q=75&f=6&s=5cedlphmlj0"
                                            alt="Công cuộc Đổi Mới Việt Nam"
                                            className="h-64 max-w-full rounded-lg mt-6 mx-auto block"
                                        />
                                    </div>

                                    {/* Đánh giá tổng quan */}
                                    <div id="danh-gia">
                                        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
                                            Đánh giá tổng quan: Thành tựu và hạn chế
                                        </h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            Tư tưởng Mác-Lênin đã có ảnh hưởng sâu rộng đến phát triển kinh tế ở các quốc gia xã hội chủ nghĩa, nhưng kết quả không đồng đều:
                                        </p>
                                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-2">
                                            <li>
                                                <span className="font-bold">Thành tựu chung:</span> Các quốc gia như Liên Xô, Trung Quốc, và Việt Nam đều đạt được những bước tiến lớn trong công nghiệp hóa, giảm nghèo, và cải thiện đời sống nhân dân. Tư tưởng Mác-Lênin cung cấp cơ sở lý luận để xây dựng nền kinh tế không bóc lột, hướng tới công bằng xã hội.
                                            </li>
                                            <li>
                                                <span className="font-bold">Hạn chế chung:</span> Mô hình kinh tế kế hoạch hóa tập trung ban đầu cho thấy nhiều bất cập, như thiếu động lực sản xuất, quan liêu, và không đáp ứng được nhu cầu thị trường. Việc áp dụng cứng nhắc tư tưởng Mác-Lênin mà không điều chỉnh theo điều kiện cụ thể dẫn đến khủng hoảng kinh tế ở nhiều giai đoạn.
                                            </li>
                                            <li>
                                                <span className="font-bold">Bài học:</span> Việc vận dụng tư tưởng Mác-Lênin cần linh hoạt, sáng tạo, và phù hợp với điều kiện lịch sử cụ thể của từng quốc gia. Trung Quốc và Việt Nam đã thành công hơn khi kết hợp kinh tế thị trường với định hướng xã hội chủ nghĩa, trong khi Liên Xô thất bại do không kịp thời điều chỉnh mô hình kinh tế.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Thanh điều hướng cố định (Sticky Sidebar) - Chỉ hiển thị trên desktop */}
                            <div className="hidden lg:block fixed right-0 w-64 bg-indigo-50 p-6 rounded-l-xl shadow-lg z-10">
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
                                            href="/core-principles"
                                            className="flex items-center text-base font-medium text-indigo-600 hover:text-indigo-800 hover:bg-indigo-100 px-2 py-1 rounded-md transition-all"
                                        >
                                            <RightOutlined className="mr-2 text-indigo-600" />
                                            Các nguyên tắc cốt lõi của kinh tế chính trị Mác Lê-Nin
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
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
};

export default Analysis;