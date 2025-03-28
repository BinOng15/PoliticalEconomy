import React from "react";
import MainLayout from "../../layout/MainLayout";
import { Link, useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/political-economy");
  }
  return (
    <>
      <MainLayout>
        <div className="bg-[#E7E4DB] min-h-screen">
          {/* Nội dung chính - Bao trọn chiều ngang */}
          <div className="py-10">
            {/* Phần tiêu đề lớn: Chia 2 cột (trái: thông tin, phải: hình ảnh) */}
            <div className="bg-gradient-to-r from-[#3a5a78] to-[#2c3e50] text-[#f8f9fa] py-12 px-4 sm:px-8 lg:px-12 rounded-xl shadow-2xl flex flex-col lg:flex-row items-center transform transition-all duration-500 hover:scale-[1.01] hover:shadow-lg">
              {/* Cột trái: Thông tin */}
              <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 space-y-6 animate-fadeInLeft">
                <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#f8f9fa] to-[#a5b8d1]">
                  ẢNH HƯỞNG CỦA KINH TẾ CHÍNH TRỊ MÁC-LÊNIN ĐẾN PHÁT TRIỂN KINH TẾ HIỆN ĐẠI
                </h1>
                <p className="text-lg leading-relaxed text-gray-200">
                  Kinh tế chính trị Mác - Lênin ảnh hưởng đến mọi ngành, giúp ta hiểu rõ tư tưởng và vận dụng các tư tưởng kinh tế vào thực tiễn, từ đó thúc đẩy sự phát triển kinh tế hiện đại, hướng tới một xã hội công bằng hơn, nhân văn hơn, và phát triển bền vững.
                </p>
                <button onClick={handleOnClick} className="mt-4 px-6 py-3 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Tìm hiểu thêm
                </button>
              </div>

              {/* Cột phải: Hình ảnh */}
              <div className="lg:w-1/2 flex justify-center relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#feb47b] to-[#ff7e5f] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <img
                  className="h-96 w-full lg:w-4/5 rounded-lg object-cover transform transition duration-500 group-hover:-translate-y-2 group-hover:shadow-xl z-10 border-4 border-white/20"
                  src="https://tuyenquang.dcs.vn/images/cq-240-1713694356.jpg"
                  alt="KTCT"
                />
              </div>
            </div>

            {/* Trích dẫn nổi bật */}
            <div className="text-black text-center py-6 px-4 rounded-lg mt-10 mb-10">
              {/* <p className="text-3xl italic max-w-3xl mx-auto">
                "Political power, properly so called, is merely the organized power of one class for oppressing another."
              </p> */}
              <p className="text-3xl italic max-w-4xl mx-auto">
                "Quyền lực chính trị, theo đúng nghĩa đen, chỉ đơn thuần là quyền lực có tổ chức của một giai cấp để áp bức một giai cấp khác."
              </p>
              <p className="text-xl mt-2 font-semibold text-right max-w-3xl mx-auto">
                — Karl Marx —
              </p>
            </div>

            {/* Phần "Kinh tế chính trị là gì?" với thiết kế nâng cấp */}
            <div className="relative bg-gradient-to-br from-blue-900 to-indigo-800 text-white py-12 px-6 rounded-2xl mb-12 mx-4 lg:mx-10 flex flex-col lg:flex-row items-center overflow-hidden shadow-2xl hover:shadow-blue-500/30 transition-all duration-500">
              {/* Hiệu ứng nền */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-stripes.png')] opacity-10"></div>

              {/* Cột trái: Thông tin */}
              <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 relative z-10 transform transition-all duration-500 hover:-translate-y-1">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400 italic">
                    Kinh tế chính trị là gì?
                  </h2>
                  <p className="text-lg md:text-xl leading-relaxed text-blue-100">
                    Kinh tế chính trị [Political Economy] là một lĩnh vực nghiên cứu tập trung vào việc phân tích các quy luật kinh tế trong mối quan hệ với các yếu tố chính trị, tư tưởng và xã hội. Đây là một ngành khoa học nghiên cứu cách thức các nguồn lực kinh tế được phân bổ, sử dụng và quản lý trong các xã hội khác nhau.
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed text-blue-100 mt-4">
                    Kinh tế chính trị Mác-Lênin tập trung vào việc phân tích các quy luật kinh tế trong các hình thái kinh tế - xã hội, từ đó làm rõ bản chất của các hiện tượng kinh tế, chính trị và xã hội.
                  </p>
                </div>
              </div>

              {/* Cột phải: Hình ảnh */}
              <div className="lg:w-1/2 flex justify-center relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>
                <img
                  className="h-auto w-full lg:w-4/5 rounded-xl object-cover transform transition duration-500 group-hover:scale-105 group-hover:-rotate-1 shadow-xl border-4 border-white/10 z-10"
                  src="https://cdn.thuvienphapluat.vn/phap-luat/2022-2/NTTX/110924/kinh-te-chinh-tri-1.jpg"
                  alt="Kinh tế chính trị"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-900/90 to-transparent rounded-b-xl z-20"></div>
              </div>

              {/* Decoration elements */}
              <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-amber-400/20 blur-xl"></div>
              <div className="absolute bottom-8 left-8 w-24 h-24 rounded-full bg-blue-400/10 blur-lg"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 px-10 md:px-24">
              {/* Card 1 */}
              <Link to={"/political-economy"}>
                <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm h-[450px] 
                    hover:shadow-xl hover:-translate-y-2 transition-all duration-300 
                    border border-gray-100 flex flex-col">
                  <img
                    className="h-56 w-full object-cover rounded-lg mb-4"
                    src="https://tailieuhust.com/wp-content/uploads/2021/09/KINH-TE-CHINH-TRI-THUBM-1024x683.jpg"
                    alt="kinhtechinhtri"
                  />
                  <h3 className="text-xl font-bold text-indigo-900 mb-3 line-clamp-2">
                    Định nghĩa kinh tế chính trị Mác Lê-Nin
                  </h3>
                  <p className="text-gray-600 text-sm flex-grow line-clamp-3">
                    Hiểu rõ hơn về định nghĩa của kinh tế chính trị Mác Lê-Nin. Đồng thời nắm rõ các ý nghĩa cũng như các phương pháp nghiên cứu và tiếp cận tới môn học này.
                  </p>
                </div>
              </Link>

              {/* Card 2 */}
              <Link to={"/analysis"}>
                <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm h-[450px] 
                    hover:shadow-xl hover:-translate-y-2 transition-all duration-300 
                    border border-gray-100 flex flex-col">
                  <img
                    className="h-56 w-full object-cover rounded-lg mb-4"
                    src="https://lh6.googleusercontent.com/proxy/4bT0RrLlrkNLlmX_fnRNTwr40jMwzaFCcTQprVrQnsbeYXssSN8_-D-fvbAosSmMfHu6vIS9YHMzRkXV51NE3Y8ZeG2YVzOd6pycQHmXoJCM_QvAD1DlINA9mL6TQ4SqoxHdUM4_jKUp2Tj752UJueZooS2cftFP2vTvJdgtSvMr0d1W2C4xsEz78A"
                    alt="kinhtechinhtri"
                  />
                  <h3 className="text-xl font-bold text-indigo-900 mb-3 line-clamp-2">
                    Phân tích ảnh hưởng lịch sử của tư tưởng Mác Lê-Nin đến phát triển kinh tế
                  </h3>
                  <p className="text-gray-600 text-sm flex-grow line-clamp-3">
                    Phân tích ảnh hưởng lịch sử của tư tưởng Mác Lê-Nin đến phát triển kinh tế từ đó nắm rõ hơn về vai trò quan trọng của việc phát triển kinh tế.
                  </p>
                </div>
              </Link>

              {/* Card 3 */}
              <Link to={"/evaluate"}>
                <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm h-[450px] 
                    hover:shadow-xl hover:-translate-y-2 transition-all duration-300 
                    border border-gray-100 flex flex-col">
                  <img
                    className="h-56 w-full object-cover rounded-lg mb-4"
                    src="https://cdn.thuvienphapluat.vn/phap-luat/2022-2/LVPD/kinh-te.jpg"
                    alt="kinhtechinhtri"
                  />
                  <h3 className="text-xl font-bold text-indigo-900 mb-3 line-clamp-2">
                    Đánh giá sự phù hợp của kinh tế chính trị Mác-Lênin trong bối cảnh kinh tế hiện đại
                  </h3>
                  <p className="text-gray-600 text-sm flex-grow line-clamp-3">
                    Đánh giá sự phù hợp và vai trò quan trọng của kinh tế chính trị Mác-Lênin trong bối cảnh kinh tế hiện đại.
                  </p>
                </div>
              </Link>
            </div>


          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Home;