import React from "react";
import { Layout, Input, Button, Space } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;

const CustomFooter: React.FC = () => {
  return (
    <Footer className="bg-[#355486] text-[#E7E4DB] py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-6">
        {/* Cột 1: Thông tin thương hiệu */}
        <div className="md:w-1/3 mb-6 md:mb-0">
          <div className="flex items-center mb-3">
            {/* <img
              src="/public/Asset.png"
              alt="PolEcon Logo"
              className="w-12 h-12 mr-2 rounded-full"
            /> */}
            <h2 className="text-xl font-bold text-[#E7E4DB]">PolEcon</h2>
          </div>
          <p className="text-[#E7E4DB]">
            PolEcon - Nơi khám phá ảnh hưởng của Kinh tế Chính trị Mác-Lênin đến sự phát triển kinh tế hiện đại. Chúng tôi cung cấp các bài viết, phân tích và diễn đàn để bạn hiểu sâu hơn về lý luận và thực tiễn.
          </p>
          <div className="mt-4 space-y-2">
            <p className="text-[#E7E4DB]">
              <PhoneOutlined /> <strong>Hotline:</strong> +84 123 456 789
            </p>
            <p className="text-[#E7E4DB]">
              <MailOutlined /> <strong>Email:</strong> contact@polecon.com
            </p>
            <p className="text-[#E7E4DB]">
              <EnvironmentOutlined /> <strong>Địa chỉ:</strong> 456 Lý Thường Kiệt, Quận 3, TP. HCM
            </p>
          </div>
        </div>

        {/* Cột 2: Menu điều hướng */}
        <div className="md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold text-[#E7E4DB] mb-3">
            Về PolEcon
          </h3>
          <ul className="text-[#E7E4DB] space-y-2">
            <li>
              <a href="/about" className="hover:text-white">
                Giới thiệu PolEcon
              </a>
            </li>
            <li>
              <a href="/articles" className="hover:text-white">
                Bài viết & Phân tích
              </a>
            </li>
            <li>
              <a href="/philosophers" className="hover:text-white">
                Các nhà tư tưởng
              </a>
            </li>
            <li>
              <a href="/forum" className="hover:text-white">
                Diễn đàn thảo luận
              </a>
            </li>
          </ul>
        </div>

        {/* Cột 3: Đăng ký nhận tin */}
        <div className="md:w-1/3">
          <h3 className="text-lg font-semibold text-[#E7E4DB] mb-3">
            Đăng ký nhận tin mới
          </h3>
          <p className="text-[#E7E4DB] mb-3">
            Nhận thông tin về các bài viết mới nhất và các sự kiện thảo luận về Kinh tế Chính trị Mác-Lênin.
          </p>
          <Space.Compact style={{ width: "100%" }}>
            <Input
              placeholder="Nhập email của bạn"
              prefix={<MailOutlined />}
              className="bg-[#E7E4DB] text-[#355486] placeholder-[#355486]"
            />
            <Button type="primary" style={{ backgroundColor: "#E7E4DB", color: "#355486" }}>
              Đăng ký
            </Button>
          </Space.Compact>
          <div className="flex space-x-4 mt-4">
            {/* Facebook Logo */}
            <a href="https://facebook.com">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png"
                alt="Facebook"
                className="w-8 h-8"
              />
            </a>
            {/* Instagram Logo */}
            <a href="https://instagram.com">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
                alt="Instagram"
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-[#E7E4DB] text-sm mt-6">
        © 2025 <span className="text-white">PolEcon</span>. All Rights Reserved · Design by{" "}
        <a href="#" className="text-white">
          MLN122 Team
        </a>
      </div>
    </Footer>
  );
};

export default CustomFooter;