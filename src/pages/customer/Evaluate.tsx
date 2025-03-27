import React, { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import { MenuOutlined, RightOutlined, CloseOutlined, MenuUnfoldOutlined, UpOutlined } from "@ant-design/icons";

const Evaluate: React.FC = () => {
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
                                    href="/discover"
                                    className="flex items-center text-base font-medium text-blue-700 hover:text-blue-900 hover:bg-blue-50 px-2 py-1 rounded-md transition-all"
                                >
                                    <RightOutlined className="mr-2 text-blue-700" />
                                    Khám phá cách vận dụng tư tưởng Mác-Lênin vào giải quyết các vấn đề kinh tế hiện đại
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
                                        href="/discover"
                                        className="flex items-center text-base font-medium text-blue-700 hover:text-blue-900 hover:bg-blue-50 px-2 py-1 rounded-md transition-all"
                                    >
                                        <RightOutlined className="mr-2 text-blue-700" />
                                        Khám phá cách vận dụng tư tưởng Mác-Lênin vào giải quyết các vấn đề kinh tế hiện đại
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
                    )}

                    {/* Nội dung chính */}
                    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                        {/* Tiêu đề chính */}
                        <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 text-center mb-8">
                            ĐÁNH GIÁ SỰ PHÙ HỢP CỦA KINH TẾ CHÍNH TRỊ MÁC-LÊNIN TRONG BỐI CẢNH KINH TẾ HIỆN ĐẠI
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
                                                Giới thiệu về Kinh tế Chính trị Mác-Lênin và bối cảnh kinh tế hiện đại
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#so-sanh-kinh-te-thi-truong"
                                                className="text-blue-600 hover:text-blue-800"
                                            >
                                                So sánh với kinh tế thị trường
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#so-sanh-kinh-te-so"
                                                className="text-blue-600 hover:text-blue-800"
                                            >
                                                So sánh với kinh tế số
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#ung-dung-hien-nay"
                                                className="text-blue-600 hover:text-blue-800"
                                            >
                                                Tính ứng dụng của Kinh tế Chính trị Mác-Lênin ngày nay
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#tu-duy-phan-bien"
                                                className="text-blue-600 hover:text-blue-800"
                                            >
                                                Khuyến khích tư duy phản biện và đánh giá thực tế
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Giới thiệu */}
                            <div id="gioi-thieu">
                                <h2 className="text-2xl font-semibold text-blue-900 mb-4 border-l-4 border-blue-600 pl-4">
                                    Giới thiệu về Kinh tế Chính trị Mác-Lênin và bối cảnh kinh tế hiện đại
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Kinh tế Chính trị Mác-Lênin là một hệ thống lý luận nghiên cứu các quy luật kinh tế trong xã hội, tập trung vào quan hệ sản xuất, giá trị thặng dư, và đấu tranh giai cấp. Được xây dựng từ thế kỷ 19, lý luận này đã đóng vai trò quan trọng trong việc định hướng phát triển kinh tế ở các quốc gia xã hội chủ nghĩa như Liên Xô, Trung Quốc, và Việt Nam. Tuy nhiên, trong bối cảnh kinh tế hiện đại với sự phát triển của kinh tế thị trường và kinh tế số, nhiều câu hỏi được đặt ra về tính phù hợp và khả năng ứng dụng của Kinh tế Chính trị Mác-Lênin. Bài viết này sẽ so sánh lý luận Mác-Lênin với các mô hình kinh tế hiện đại, đồng thời đánh giá tính ứng dụng của nó trong thế kỷ 21.
                                </p>
                            </div>

                            {/* So sánh với kinh tế thị trường */}
                            <div id="so-sanh-kinh-te-thi-truong">
                                <h2 className="text-2xl font-semibold text-blue-900 mb-4 border-l-4 border-blue-600 pl-4">
                                    So sánh với kinh tế thị trường
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Kinh tế thị trường là mô hình kinh tế chủ đạo trong thế giới hiện nay, dựa trên quy luật cung cầu, cạnh tranh, và tư hữu. Dưới đây là bảng so sánh giữa Kinh tế Chính trị Mác-Lênin và kinh tế thị trường:
                                </p>
                                <div className="flex flex-col lg:flex-row gap-6 items-center mt-6">
                                    <div className="lg:w-1/2">
                                        <table className="w-full border-collapse border border-gray-300">
                                            <thead>
                                                <tr className="bg-blue-50">
                                                    <th className="border border-gray-300 p-3 text-left text-blue-900">Tiêu chí</th>
                                                    <th className="border border-gray-300 p-3 text-left text-blue-900">Kinh tế Chính trị Mác-Lênin</th>
                                                    <th className="border border-gray-300 p-3 text-left text-blue-900">Kinh tế thị trường</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="border border-gray-300 p-3">Cơ chế vận hành</td>
                                                    <td className="border border-gray-300 p-3">Kế hoạch hóa tập trung, quốc hữu hóa phương tiện sản xuất.</td>
                                                    <td className="border border-gray-300 p-3">Cung cầu, cạnh tranh tự do, tư hữu hóa.</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-gray-300 p-3">Mục tiêu</td>
                                                    <td className="border border-gray-300 p-3">Xóa bỏ bóc lột, hướng tới công bằng xã hội.</td>
                                                    <td className="border border-gray-300 p-3">Tối đa hóa lợi nhuận, tăng trưởng kinh tế.</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-gray-300 p-3">Hiệu quả kinh tế</td>
                                                    <td className="border border-gray-300 p-3">Thấp do thiếu động lực cạnh tranh (ví dụ: Liên Xô trước khi sụp đổ, GDP tăng trưởng chỉ 2% vào những năm 1980).</td>
                                                    <td className="border border-gray-300 p-3">Cao nhờ cạnh tranh và đổi mới (ví dụ: Mỹ, GDP tăng trưởng trung bình 3-4% từ 1990-2020).</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-gray-300 p-3">Bất bình đẳng</td>
                                                    <td className="border border-gray-300 p-3">Thấp hơn (hệ số Gini của Liên Xô khoảng 0,25 vào năm 1980).</td>
                                                    <td className="border border-gray-300 p-3">Cao hơn (hệ số Gini của Mỹ là 0,41 vào năm 2020).</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="lg:w-1/2">
                                        <img
                                            src="https://cdn.thuvienphapluat.vn/phap-luat/2022-2/LVPD/kinh-te.jpg"
                                            alt="Kinh tế thị trường"
                                            className="h-64 w-full rounded-lg object-cover hover:scale-105 transition-transform"
                                        />
                                    </div>
                                </div>
                                <p className="text-gray-700 leading-relaxed mt-4">
                                    <span className="font-bold">Nhận xét:</span> Kinh tế thị trường vượt trội về hiệu quả và đổi mới, nhưng tạo ra bất bình đẳng lớn. Trong khi đó, Kinh tế Chính trị Mác-Lênin tập trung vào công bằng xã hội, nhưng thiếu động lực cạnh tranh, dẫn đến hiệu quả kinh tế thấp.
                                </p>
                            </div>

                            {/* So sánh với kinh tế số */}
                            <div id="so-sanh-kinh-te-so">
                                <h2 className="text-2xl font-semibold text-blue-900 mb-4 border-l-4 border-blue-600 pl-4">
                                    So sánh với kinh tế số
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Kinh tế số là mô hình kinh tế dựa trên công nghệ số, dữ liệu lớn, và nền tảng trực tuyến. Dưới đây là so sánh giữa Kinh tế Chính trị Mác-Lênin và kinh tế số:
                                </p>
                                <div className="flex flex-col lg:flex-row gap-6 items-center mt-6">
                                    <div className="lg:w-1/2">
                                        <table className="w-full border-collapse border border-gray-300">
                                            <thead>
                                                <tr className="bg-blue-50">
                                                    <th className="border border-gray-300 p-3 text-left text-blue-900">Tiêu chí</th>
                                                    <th className="border border-gray-300 p-3 text-left text-blue-900">Kinh tế Chính trị Mác-Lênin</th>
                                                    <th className="border border-gray-300 p-3 text-left text-blue-900">Kinh tế số</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="border border-gray-300 p-3">Cơ chế vận hành</td>
                                                    <td className="border border-gray-300 p-3">Kế hoạch hóa tập trung, sản xuất vật chất là trọng tâm.</td>
                                                    <td className="border border-gray-300 p-3">Nền tảng số, dữ liệu lớn, trí tuệ nhân tạo (AI).</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-gray-300 p-3">Tốc độ đổi mới</td>
                                                    <td className="border border-gray-300 p-3">Chậm do thiếu cạnh tranh (ví dụ: Liên Xô chậm ứng dụng công nghệ số).</td>
                                                    <td className="border border-gray-300 p-3">Nhanh (ví dụ: Amazon tăng trưởng doanh thu 20-30% mỗi năm nhờ công nghệ).</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-gray-300 p-3">Quy mô toàn cầu</td>
                                                    <td className="border border-gray-300 p-3">Hạn chế do tập trung vào quốc gia (Liên Xô chủ yếu tự cung tự cấp).</td>
                                                    <td className="border border-gray-300 p-3">Toàn cầu (Google, Amazon phục vụ hàng tỷ người dùng trên toàn thế giới).</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-gray-300 p-3">Bóc lột lao động</td>
                                                    <td className="border border-gray-300 p-3">Xóa bỏ bóc lột là mục tiêu lý tưởng.</td>
                                                    <td className="border border-gray-300 p-3">Tồn tại dưới dạng mới (ví dụ: lao động gig economy, tài xế Grab làm việc 12-14 giờ/ngày với thu nhập thấp).</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="lg:w-1/2">
                                        <img
                                            src="https://storage-vnportal.vnpt.vn/nbh-ubnd/sitefolders/huyennhoquan/2312/new/2021/11-2021/11.4.jpg"
                                            alt="Kinh tế số"
                                            className="h-64 w-full rounded-lg object-cover hover:scale-105 transition-transform"
                                        />
                                    </div>
                                </div>
                                <p className="text-gray-700 leading-relaxed mt-4">
                                    <span className="font-bold">Nhận xét:</span> Kinh tế số mang lại tốc độ đổi mới và quy mô toàn cầu, nhưng tạo ra các hình thức bóc lột mới (như lao động gig economy). Kinh tế Chính trị Mác-Lênin có thể cung cấp lý luận để phân tích các vấn đề này, nhưng không có giải pháp cụ thể cho nền kinh tế số.
                                </p>
                            </div>

                            {/* Tính ứng dụng của Kinh tế Chính trị Mác-Lênin ngày nay */}
                            <div id="ung-dung-hien-nay">
                                <h2 className="text-2xl font-semibold text-blue-900 mb-4 border-l-4 border-blue-600 pl-4">
                                    Tính ứng dụng của Kinh tế Chính trị Mác-Lênin ngày nay
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Dù ra đời từ thế kỷ 19, Kinh tế Chính trị Mác-Lênin vẫn có một số ứng dụng trong bối cảnh hiện đại:
                                </p>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-2">
                                    <li>
                                        <span className="font-bold">Phân tích bất bình đẳng:</span> Lý luận về giá trị thặng dư của Mác vẫn phù hợp để phân tích bất bình đẳng trong kinh tế thị trường. Ví dụ, tại Mỹ, 1% dân số giàu nhất sở hữu 40% tài sản quốc gia (2023), trong khi công nhân tại các công ty lớn như Amazon thường làm việc với mức lương tối thiểu.
                                    </li>
                                    <li>
                                        <span className="font-bold">Định hướng công bằng xã hội:</span> Tư tưởng Mác-Lênin được áp dụng tại Việt Nam để xây dựng kinh tế thị trường định hướng xã hội chủ nghĩa, với các chính sách như bảo hiểm y tế toàn dân (đạt 92% dân số tham gia vào năm 2023) và giảm nghèo (tỷ lệ nghèo giảm từ 58% năm 1993 xuống dưới 6% năm 2020).
                                    </li>
                                    <li>
                                        <span className="font-bold">Hạn chế:</span> Kinh tế Chính trị Mác-Lênin không có giải pháp cụ thể cho các vấn đề của kinh tế số, như quản lý dữ liệu lớn, bảo mật thông tin, hay lao động gig economy. Ngoài ra, mô hình kế hoạch hóa tập trung không còn phù hợp với nền kinh tế toàn cầu hóa.
                                    </li>
                                </ul>
                            </div>

                            {/* Khuyến khích tư duy phản biện và đánh giá thực tế */}
                            <div id="tu-duy-phan-bien">
                                <h2 className="text-2xl font-semibold text-blue-900 mb-4 border-l-4 border-blue-600 pl-4">
                                    Khuyến khích tư duy phản biện và đánh giá thực tế
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Để đánh giá sự phù hợp của Kinh tế Chính trị Mác-Lênin, người học cần phát triển tư duy phản biện và nhìn nhận thực tế:
                                </p>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-2">
                                    <li>
                                        <span className="font-bold">Câu hỏi phản biện:</span> Liệu lý luận về giá trị thặng dư có thể áp dụng để giải quyết bất bình đẳng trong kinh tế số không? Tại sao các quốc gia xã hội chủ nghĩa như Việt Nam lại chọn kết hợp kinh tế thị trường thay vì áp dụng hoàn toàn mô hình Mác-Lênin?
                                    </li>
                                    <li>
                                        <span className="font-bold">Đánh giá thực tế:</span> So sánh các chỉ số kinh tế giữa các quốc gia áp dụng tư tưởng Mác-Lênin (như Việt Nam) và các quốc gia kinh tế thị trường (như Mỹ). Ví dụ, Việt Nam có hệ số Gini thấp hơn (0,36 vào năm 2020) so với Mỹ (0,41), nhưng tốc độ tăng trưởng GDP lại chậm hơn (6-7% so với 3-4% của Mỹ).
                                    </li>
                                    <li>
                                        <span className="font-bold">Kết luận:</span> Kinh tế Chính trị Mác-Lênin vẫn có giá trị lý luận để phân tích các vấn đề kinh tế - xã hội, nhưng cần được điều chỉnh và kết hợp với các mô hình kinh tế hiện đại để phù hợp với bối cảnh toàn cầu hóa và công nghệ số.
                                    </li>
                                </ul>
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

export default Evaluate;