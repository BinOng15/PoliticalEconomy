import React, { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import { SearchOutlined } from "@ant-design/icons";

const Document: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState(""); // State cho từ khóa tìm kiếm

    // Danh sách các trang trong dự án để tìm kiếm
    const pages = [
        {
            title: "Kinh tế Chính trị Mác-Lênin",
            description: "Tìm hiểu về khái niệm, vai trò, và ý nghĩa của Kinh tế Chính trị Mác-Lênin.",
            link: "/political-economy",
        },
        {
            title: "Phân tích ảnh hưởng lịch sử của tư tưởng Mác-Lênin đến phát triển kinh tế",
            description: "Phân tích cách tư tưởng Mác-Lênin đã ảnh hưởng đến sự phát triển kinh tế ở các quốc gia như Liên Xô, Trung Quốc, và Việt Nam.",
            link: "/analysis",
        },
        {
            title: "Đánh giá sự phù hợp của Kinh tế Chính trị Mác-Lênin trong bối cảnh kinh tế hiện đại",
            description: "So sánh Kinh tế Chính trị Mác-Lênin với các mô hình kinh tế hiện đại như kinh tế thị trường và kinh tế số.",
            link: "/evaluate",
        },
        {
            title: "Khám phá cách vận dụng tư tưởng Mác-Lênin vào giải quyết các vấn đề kinh tế hiện đại",
            description: "Đề xuất các giải pháp dựa trên tư tưởng Mác-Lênin để giải quyết các vấn đề như bất bình đẳng và phát triển bền vững.",
            link: "/discover",
        },
    ];

    // Lọc các trang dựa trên từ khóa tìm kiếm
    const filteredPages = pages.filter((page) =>
        page.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Danh sách tài liệu và hình ảnh tham khảo
    const references = [
        {
            document: "Bộ Giáo dục và Đào tạo Việt Nam. (2020). <i>Giáo trình Kinh tế Chính trị Mác-Lênin</i>. Nhà xuất bản Chính trị Quốc gia Sự thật. (Nguồn tham khảo chính cho trang 'Kinh tế Chính trị Mác-Lênin'). Truy cập tại: <a href='https://www.nxbctqg.org.vn/sach/giao-trinh-kinh-te-chinh-tri-mac-lenin-2020' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800'>https://www.nxbctqg.org.vn</a>.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvIwddVkh0sV80-LPtDOmcNW_59ukOu6tV-A&s",
        },
        {
            document: "Oxfam. (2023). <i>Inequality Inc.: How Corporate Power Divides Our World</i>. Báo cáo thường niên về bất bình đẳng toàn cầu. (Dùng trong các trang 'Evaluate' và 'Discover' để phân tích bất bình đẳng kinh tế). Truy cập tại: <a href='https://www.oxfam.org/en/research/inequality-inc' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800'>https://www.oxfam.org</a>.",
            image: "https://nghiencuuquocte.org/wp-content/uploads/2016/08/inequality.jpg",
        },
        {
            document: "World Bank. (2020). <i>Poverty and Shared Prosperity 2020: Reversals of Fortune</i>. (Dùng trong trang 'Analysis' và 'Discover' để cung cấp số liệu về giảm nghèo ở Việt Nam và Trung Quốc). Truy cập tại: <a href='https://www.worldbank.org/en/publication/poverty-and-shared-prosperity-2020' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800'>https://www.worldbank.org</a>.",
            image: "https://ordi.vn/wp-content/uploads/2021/10/anh-thay-p90.jpeg",
        },
        {
            document: "Chen, X. (2023). 'The Interwining of Knowledge, Affect, Life, and Mentality: Chinese Youths’ Turn to Marxist-Leninist-Maoist in Contemporary China.' <i>Field Journal</i>. (Dùng trong trang 'Discover'). Truy cập tại: <a href='https://field-journal.com/issue-27/the-interwining-of-knowledge-affect-life-and-mentality-chinese-youths-turn-to-marxist-leninist-maoist-in-contemporary-china' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800'>https://field-journal.com</a>.",
            image: "https://field-journal.com/wp-content/uploads/2024/02/Picture2.jpg",
            imageDescription: "Không có hình ảnh liên quan trực tiếp đến tài liệu này.",
        },
        {
            document: "Lenin, V.I. (1899). <i>The Development of Capitalism in Russia</i>. (Dùng trong trang 'Analysis' để phân tích sự phát triển kinh tế ở Nga). Truy cập tại: <a href='https://www.marxists.org/archive/lenin/works/1899/devel/' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800'>https://www.marxists.org</a>.",
            image: "https://redsvn.net/wp-content/uploads/2019/01/Magnitogorsk-1931.jpg",
            imageDescription: "Hình ảnh: 'Công nghiệp hóa Liên Xô' (Soviet_Union_1930s_industrialization.jpg). Sử dụng trong trang 'Analysis' để minh họa sự phát triển công nghiệp ở Liên Xô, liên quan đến phân tích của Lenin. Nguồn: Wikimedia Commons. Truy cập tại: <a href='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Soviet_Union_1930s_industrialization.jpg/800px-Soviet_Union_1930s_industrialization.jpg' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800'>https://upload.wikimedia.org</a>.",
        },
        {
            document: "Tran, T. (2023). 'Vietnam’s Renewable Energy Development: Achievements and Challenges.' <i>Energy Policy Journal</i>. (Dùng trong trang 'Discover' để cung cấp số liệu về năng lượng tái tạo ở Việt Nam). Truy cập tại: <a href='https://www.sciencedirect.com/science/article/pii/S0301421523001234' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800'>https://www.sciencedirect.com</a>.",
            image: "https://media.tapchitaichinh.vn/w1480/images/upload/dohai/07262022/0-1640016233_750x0.jpg",
            imageDescription: "Hình ảnh: 'Phát triển bền vững' (Sustainable_development.jpg). Sử dụng trong trang 'Discover' để minh họa mục tiêu phát triển bền vững, liên quan đến năng lượng tái tạo. Nguồn: Wikimedia Commons. Truy cập tại: <a href='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Sustainable_development.jpg/800px-Sustainable_development.jpg' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800'>https://upload.wikimedia.org</a>.",
        },
        {
            document: "United Nations. (2021). <i>Sustainable Development Goals Report 2021</i>. (Dùng trong trang 'Discover' để thảo luận về phát triển bền vững). Truy cập tại: <a href='https://unstats.un.org/sdgs/report/2021/' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800'>https://unstats.un.org</a>.",
            image: "https://www.pace.edu.vn/uploads/news/2024/03/4-tieu-chi-phat-trien-ben-vung.jpg",
            imageDescription: "Hình ảnh: 'Phát triển bền vững' (Sustainable_development.jpg). Sử dụng trong trang 'Discover' để minh họa mục tiêu phát triển bền vững được đề cập trong báo cáo. Nguồn: Wikimedia Commons. Truy cập tại: <a href='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Sustainable_development.jpg/800px-Sustainable_development.jpg' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800'>https://upload.wikimedia.org</a>.",
        },
        {
            document: "Piketty, T. (2014). <i>Capital in the Twenty-First Century</i>. Harvard University Press. (Dùng trong trang 'Evaluate' để phân tích bất bình đẳng kinh tế trong kinh tế thị trường). Truy cập tại: <a href='https://www.hup.harvard.edu/catalog.php?isbn=9780674430006' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800'>https://www.hup.harvard.edu</a>.",
            image: "https://cdn.thuvienphapluat.vn/uploads/Hoidapphapluat/2023/PVQ/thang8/230912/kinh-te-thi-truong.jpg",
            imageDescription: "Hình ảnh: 'Kinh tế thị trường' (Free_market_economy.jpg). Sử dụng trong trang 'Evaluate' để minh họa mô hình kinh tế thị trường, liên quan đến phân tích của Piketty. Nguồn: Wikimedia Commons. Truy cập tại: <a href='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Free_market_economy.jpg/800px-Free_market_economy.jpg' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800'>https://upload.wikimedia.org</a>.",
        },
    ];

    return (
        <>
            <MainLayout>
                <div className="bg-[#E7E4DB] min-h-screen relative">
                    {/* Nội dung chính */}
                    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                        {/* Tiêu đề chính */}
                        <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 text-center mb-8">
                            TÀI LIỆU THAM KHẢO
                        </h1>
                        <div className="space-y-12">
                            {/* Tài liệu và hình ảnh tham khảo */}
                            <div id="tai-lieu-va-hinh-anh">
                                <h2 className="text-2xl font-semibold text-blue-900 mb-4 border-l-4 border-blue-600 pl-4">
                                    Tài liệu và hình ảnh tham khảo
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Dưới đây là danh sách các tài liệu tham khảo và hình ảnh liên quan được sử dụng trong các bài viết của dự án.
                                </p>
                                <div className="space-y-6">
                                    {references.map((ref, index) => (
                                        <div
                                            key={index}
                                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col md:flex-row gap-6"
                                        >
                                            {/* Phần tài liệu */}
                                            <div className="md:w-2/3">
                                                <p className="text-gray-700 leading-relaxed">
                                                    <span className="font-bold">Tài liệu:</span>{" "}
                                                    <span dangerouslySetInnerHTML={{ __html: ref.document }} />
                                                </p>
                                            </div>
                                            {/* Phần hình ảnh */}
                                            <div className="md:w-1/3 flex flex-col items-center">
                                                {ref.image ? (
                                                    <>
                                                        <img
                                                            src={ref.image}
                                                            alt="Hình ảnh tham khảo"
                                                            className="h-32 w-full rounded-lg object-cover mb-2"
                                                        />

                                                    </>
                                                ) : (
                                                    <p className="text-gray-700 leading-relaxed text-center text-sm">
                                                        {ref.imageDescription}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tìm kiếm các trang trong dự án */}
                            <div id="tim-kiem-trang">
                                <h2 className="text-2xl font-semibold text-blue-900 mb-4 border-l-4 border-blue-600 pl-4">
                                    Tìm kiếm các trang trong dự án
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Sử dụng thanh tìm kiếm dưới đây để tìm các trang trong dự án liên quan đến tư tưởng Mác-Lênin và kinh tế.
                                </p>
                                <div className="relative mb-6">
                                    <input
                                        type="text"
                                        placeholder="Nhập từ khóa để tìm kiếm (ví dụ: Kinh tế Chính trị, Bất bình đẳng...)"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                    <SearchOutlined className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                                </div>
                                {searchQuery && (
                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <h3 className="text-lg font-semibold text-blue-900 mb-4">
                                            Kết quả tìm kiếm
                                        </h3>
                                        {filteredPages.length > 0 ? (
                                            <ul className="space-y-4">
                                                {filteredPages.map((page, index) => (
                                                    <li key={index}>
                                                        <a
                                                            href={page.link}
                                                            className="text-blue-600 hover:text-blue-800 font-medium"
                                                        >
                                                            {page.title}
                                                        </a>
                                                        <p className="text-gray-700 leading-relaxed">
                                                            {page.description}
                                                        </p>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-gray-700">
                                                Không tìm thấy trang nào khớp với từ khóa "{searchQuery}".
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
};

export default Document;