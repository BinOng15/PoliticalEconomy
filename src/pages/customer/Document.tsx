import React, { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import { SearchOutlined } from "@ant-design/icons";

const Document: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const pages = [
        {
            title: "Kinh tế Chính trị Mác-Lênin",
            description: "Tìm hiểu khái niệm, vai trò, và ý nghĩa của Kinh tế Chính trị Mác-Lênin.",
            link: "/political-economy",
        },
        {
            title: "Phân tích ảnh hưởng lịch sử của tư tưởng Mác-Lênin",
            description: "Khám phá tác động của tư tưởng Mác-Lênin đến kinh tế các quốc gia như Liên Xô, Trung Quốc, Việt Nam.",
            link: "/analysis",
        },
        {
            title: "Đánh giá sự phù hợp trong bối cảnh kinh tế hiện đại",
            description: "So sánh Kinh tế Chính trị Mác-Lênin với kinh tế thị trường và kinh tế số.",
            link: "/evaluate",
        },
        {
            title: "Vận dụng tư tưởng Mác-Lênin vào kinh tế hiện đại",
            description: "Giải pháp từ tư tưởng Mác-Lênin cho bất bình đẳng và phát triển bền vững.",
            link: "/discover",
        },
    ];

    const filteredPages = pages.filter((page) =>
        page.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const references = [
        {
            document: "Bộ Giáo dục và Đào tạo Việt Nam. (2020). <i>Giáo trình Kinh tế Chính trị Mác-Lênin</i>. Nhà xuất bản Chính trị Quốc gia Sự thật.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvIwddVkh0sV80-LPtDOmcNW_59ukOu6tV-A&s",
            link: "https://www.nxbctqg.org.vn/sach/giao-trinh-kinh-te-chinh-tri-mac-lenin-2020",
        },
        {
            document: "Oxfam. (2023). <i>Inequality Inc.</i>. Báo cáo về bất bình đẳng toàn cầu.",
            image: "https://nghiencuuquocte.org/wp-content/uploads/2016/08/inequality.jpg",
            link: "https://www.oxfam.org/en/research/inequality-inc",
        },
        {
            document: "World Bank. (2020). <i>Poverty and Shared Prosperity 2020</i>.",
            image: "https://ordi.vn/wp-content/uploads/2021/10/anh-thay-p90.jpeg",
            link: "https://www.worldbank.org/en/publication/poverty-and-shared-prosperity-2020",
        },
        {
            document: "Chen, X. (2023). 'Chinese Youths’ Turn to Marxist-Leninist-Maoist.' <i>Field Journal</i>.",
            image: "https://field-journal.com/wp-content/uploads/2024/02/Picture2.jpg",
            link: "https://field-journal.com/issue-27/the-interwining-of-knowledge-affect-life-and-mentality-chinese-youths-turn-to-marxist-leninist-maoist-in-contemporary-china",
        },
        {
            document: "Lenin, V.I. (1899). <i>The Development of Capitalism in Russia</i>.",
            image: "https://redsvn.net/wp-content/uploads/2019/01/Magnitogorsk-1931.jpg",
            link: "https://www.marxists.org/archive/lenin/works/1899/devel/",
        },
        {
            document: "Tran, T. (2023). 'Vietnam’s Renewable Energy Development.' <i>Energy Policy Journal</i>.",
            image: "https://media.tapchitaichinh.vn/w1480/images/upload/dohai/07262022/0-1640016233_750x0.jpg",
            link: "https://www.sciencedirect.com/science/article/pii/S0301421523001234",
        },
        {
            document: "United Nations. (2021). <i>Sustainable Development Goals Report 2021</i>.",
            image: "https://www.pace.edu.vn/uploads/news/2024/03/4-tieu-chi-phat-trien-ben-vung.jpg",
            link: "https://unstats.un.org/sdgs/report/2021/",
        },
        {
            document: "Piketty, T. (2014). <i>Capital in the Twenty-First Century</i>. Harvard University Press.",
            image: "https://cdn.thuvienphapluat.vn/uploads/Hoidapphapluat/2023/PVQ/thang8/230912/kinh-te-thi-truong.jpg",
            link: "https://www.hup.harvard.edu/catalog.php?isbn=9780674430006",
        },
    ];

    return (
        <MainLayout>
            <div className="bg-gradient-to-b from-[#E7E4DB] to-white min-h-screen">
                <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    {/* Header nổi bật */}
                    <header className="text-center mb-12 animate-fade-in">
                        <h1 className="text-5xl sm:text-6xl font-extrabold text-indigo-900 
                                      bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 
                                      drop-shadow-md">
                            TÀI LIỆU THAM KHẢO
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            Tổng hợp nguồn tài liệu và hình ảnh giá trị cho nghiên cứu Mác-Lênin!
                        </p>
                    </header>

                    <div className="space-y-16">
                        {/* Tài liệu tham khảo */}
                        <section id="tai-lieu-va-hinh-anh" className="animate-slide-up">
                            <h2 className="text-3xl font-bold text-indigo-800 mb-6 
                                          flex items-center border-b-2 border-indigo-200 pb-2">
                                <span className="mr-2">📚</span> Tài Liệu & Hình Ảnh
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {references.map((ref, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl 
                                                  transform hover:-translate-y-2 transition-all duration-300 
                                                  border border-indigo-100"
                                    >
                                        <div className="flex flex-col gap-4">
                                            <p className="text-gray-700 text-lg leading-relaxed">
                                                <span className="font-semibold text-indigo-600">Tài liệu:</span>{" "}
                                                <span dangerouslySetInnerHTML={{ __html: ref.document }} />
                                                <a
                                                    href={ref.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-indigo-600 hover:text-indigo-800 ml-2 underline"
                                                >
                                                    [Xem chi tiết]
                                                </a>
                                            </p>
                                            <div className="flex justify-center">
                                                <img
                                                    src={ref.image}
                                                    alt="Hình ảnh tham khảo"
                                                    className="h-40 w-full object-cover rounded-lg 
                                                              hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Tìm kiếm trang */}
                        <section id="tim-kiem-trang" className="animate-slide-up">
                            <h2 className="text-3xl font-bold text-indigo-800 mb-6 
                                          flex items-center border-b-2 border-indigo-200 pb-2">
                                <span className="mr-2">🔍</span> Tìm Kiếm Trong Dự Án
                            </h2>
                            <div className="relative mb-8">
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm (VD: Kinh tế, Mác Lê-Nin...)"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full p-4 pl-12 text-lg border border-indigo-200 
                                              rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 
                                              shadow-md hover:shadow-lg transition-all duration-300"
                                />
                                <SearchOutlined className="absolute left-4 top-1/2 transform -translate-y-1/2 
                                                          text-indigo-600 text-xl" />
                            </div>
                            {searchQuery && (
                                <div className="bg-white p-6 rounded-xl shadow-lg border border-indigo-100 
                                               animate-fade-in">
                                    <h3 className="text-xl font-semibold text-indigo-700 mb-4">
                                        Kết Quả Tìm Kiếm
                                    </h3>
                                    {filteredPages.length > 0 ? (
                                        <ul className="space-y-4">
                                            {filteredPages.map((page, index) => (
                                                <li
                                                    key={index}
                                                    className="p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 
                                                              transition-all duration-300"
                                                >
                                                    <a
                                                        href={page.link}
                                                        className="text-indigo-600 font-semibold text-lg 
                                                                  hover:text-indigo-800"
                                                    >
                                                        {page.title}
                                                    </a>
                                                    <p className="text-gray-600 mt-1">{page.description}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-gray-600 text-lg">
                                            Không tìm thấy kết quả nào cho "{searchQuery}".
                                        </p>
                                    )}
                                </div>
                            )}
                        </section>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Document;