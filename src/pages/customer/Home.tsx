import React from "react";
import MainLayout from "../../layout/MainLayout";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <MainLayout>
        <div className="bg-[#E7E4DB] min-h-screen">
          {/* Nội dung chính - Bao trọn chiều ngang */}
          <div className="py-10">
            {/* Phần tiêu đề lớn: Chia 2 cột (trái: thông tin, phải: hình ảnh) */}
            <div className="bg-[#496798] text-[#E7E4DB] py-10 px-4 sm:px-6 lg:px-8 rounded-none flex flex-col lg:flex-row items-center">
              {/* Cột trái: Thông tin */}
              <div className="lg:w-1/2 mb-6 lg:mb-0 lg:pr-6">
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                  ẢNH HƯỞNG CỦA KINH TẾ CHÍNH TRỊ MÁC-LÊNIN ĐẾN PHÁT TRIỂN KINH TẾ
                  HIỆN ĐẠI
                </h1>
                <p className="text-lg">
                  Kinh tế chính trị Mác - Lênin ảnh hưởng đến mọi ngành, giúp ta hiểu rõ tư tưởng và vận dụng các tư tưởng kinh tế vào thực tiễn, từ đó thúc đẩy sự phát triển kinh tế hiện đại, hướng tới một xã hội công bằng hơn, nhân văn hơn, và phát triển bền vững.
                </p>
              </div>

              {/* Cột phải: Hình ảnh */}
              <div className="lg:w-1/2 flex justify-center">
                <img
                  className="h-86 w-full lg:w-3/4 rounded-lg"
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

            {/* Phần "Kinh tế chính trị là gì?": Chia 2 cột (trái: thông tin, phải: hình ảnh) */}
            <div className="text-[#E7E4DB] py-10 px-6 rounded-lg mb-10 ml-10 flex flex-col lg:flex-row items-center">
              {/* Cột trái: Thông tin */}
              <div className="lg:w-1/2 mb-6 lg:mb-0 lg:pr-6">
                <h2 className="text-3xl font-semibold text-blue-900 mb-4 italic">
                  Kinh tế chính trị là gì?
                </h2>
                <p className="text-gray-700 text-xl leading-relaxed">
                  Kinh tế chính trị [Political Economy] là một lĩnh vực nghiên cứu tập trung vào việc phân tích các quy luật kinh tế trong mối quan hệ với các yếu tố chính trị, tư tưởng và xã hội. Đây là một ngành khoa học nghiên cứu cách thức các nguồn lực kinh tế được phân bổ, sử dụng và quản lý trong các xã hội khác nhau. Kinh tế chính trị Mác-Lênin tập trung vào việc phân tích các quy luật kinh tế trong các hình thái kinh tế - xã hội, từ đó làm rõ bản chất của các hiện tượng kinh tế, chính trị và xã hội.
                </p>
              </div>

              {/* Cột phải: Hình ảnh */}
              <div className="lg:w-1/2 flex justify-center">
                <img className="h-86 w-full lg:w-3/4 rounded-lg" src="https://cdn.thuvienphapluat.vn/phap-luat/2022-2/NTTX/110924/kinh-te-chinh-tri-1.jpg" alt="KTCT" />
              </div>
            </div>

            {/* Phần 3 thẻ (cards) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 ml-24 mr-10">
              {/* Card 1 */}
              <Link to={"/political-economy"}>
                <div className="bg-white p-4 rounded-lg shadow-md w-96">
                  <img
                    className="h-60 rounded-lg mb-4 mx-auto block"
                    src="https://tailieuhust.com/wp-content/uploads/2021/09/KINH-TE-CHINH-TRI-THUBM-1024x683.jpg"
                    alt="kinhtechinhtri"
                  />
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    Định nghĩa kinh tế chính trị Mác Lê-Nin
                  </h3>
                  <p className="text-gray-700">
                    Hiểu rõ hơn về định nghĩa của kinh tế chính trị Mác Lê-Nin. Đồng thời nắm rõ các ý nghĩa cũng như các phương pháp nghiên cứu và tiếp cận tới môn học này.
                  </p>
                </div>
              </Link>

              {/* Card 2 */}
              <Link to={"/analysis"}>
                <div className="bg-white p-4 rounded-lg shadow-md w-96">
                  <img
                    className="h-60 rounded-lg mb-4 mx-auto block"
                    src="https://lh6.googleusercontent.com/proxy/4bT0RrLlrkNLlmX_fnRNTwr40jMwzaFCcTQprVrQnsbeYXssSN8_-D-fvbAosSmMfHu6vIS9YHMzRkXV51NE3Y8ZeG2YVzOd6pycQHmXoJCM_QvAD1DlINA9mL6TQ4SqoxHdUM4_jKUp2Tj752UJueZooS2cftFP2vTvJdgtSvMr0d1W2C4xsEz78A"
                    alt="kinhtechinhtri"
                  />
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    Phân tích ảnh hưởng lịch sử của tư tưởng Mác Lê-Nin đến phát triển kinh tế
                  </h3>
                  <p className="text-gray-700">
                    Phân tích ảnh hưởng lịch sử của tư tưởng Mác Lê-Nin đến phát triển kinh tế từ đó nắm rõ hơn về việc phát triển kinh tế đóng vai trò quan trọng như thế nào.
                  </p>
                </div>
              </Link>

              {/* Card 3 */}
              <Link to={"/evaluate"}>
                <div className="bg-white p-4 rounded-lg shadow-md w-96">
                  <img
                    className="h-60 rounded-lg mb-4 mx-auto block"
                    src="https://cdn.thuvienphapluat.vn/phap-luat/2022-2/LVPD/kinh-te.jpg"
                    alt="kinhtechinhtri"
                  />
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    Đánh giá sự phù hợp của kinh tế chính trị Mác-Lênin trong bối cảnh kinh tế hiện đại
                  </h3>
                  <p className="text-gray-700">
                    Đánh giá sự phù hợp và liệu răng kinh tế chính trị Mác-Lênin có vai trò quan trọng trong bối cảnh kinh tế hiện đại?
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