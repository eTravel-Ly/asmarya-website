import React from 'react';
import logo from "../assets/images/logo.png";
import { IoHomeOutline } from "react-icons/io5";
import { IoLibraryOutline } from "react-icons/io5";
import { CiLaptop } from "react-icons/ci";
import { SiGoogleclassroom } from "react-icons/si";
import { CiShop } from "react-icons/ci";
import { PiGraduationCapThin } from "react-icons/pi";
import { FiAlertCircle } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="flex h-screen">
      <div className="w-64 bg-white shadow-lg fixed right-0 top-0 h-full overflow-y-auto">
        <div className="flex flex-col items-center p-2 border-b w-full">
          <img src={logo} alt="Logo" className="h-16 " />
        </div>
        <nav className="flex flex-col w-full">
  <a href="#" className="flex items-center p-3 text-sm text-gray-700 hover:bg-orange-100 hover:rounded-lg" style={{ fontFamily: 'Tajwal, sans-serif', direction: 'rtl' }}>
    <IoHomeOutline className="mr-2 ml-2 text-sm" />
    الصفحة الرئيسية
  </a>
  <a href="#" className="flex items-center p-3 text-sm text-gray-700 hover:bg-orange-100 hover:rounded-lg" style={{ fontFamily: 'Tajwal, sans-serif', direction: 'rtl' }}>
    <IoLibraryOutline className="mr-2 ml-2 text-sm" />
    المكتبة
  </a>
  <a href="#" className="flex items-center p-3 text-sm text-gray-700 hover:bg-orange-100 hover:rounded-lg" style={{ fontFamily: 'Tajwal, sans-serif', direction: 'rtl' }}>
    <CiLaptop className="mr-2 ml-2 text-sm" />
    الدورات
  </a>
  <a href="#" className="flex items-center p-3 text-sm text-gray-700 hover:bg-orange-100 hover:rounded-lg" style={{ fontFamily: 'Tajwal, sans-serif', direction: 'rtl' }}>
    <SiGoogleclassroom className="mr-2 ml-2 text-sm" />
    الفصول الدراسية
  </a>
  <a href="#" className="flex items-center p-3 text-sm text-gray-700 hover:bg-orange-100 hover:rounded-lg" style={{ fontFamily: 'Tajwal, sans-serif', direction: 'rtl' }}>
    <PiGraduationCapThin className="mr-2 ml-2 text-sm" />
    الموجهون
  </a>
  <a href="#" className="flex items-center p-3 text-sm text-gray-700 hover:bg-orange-100 hover:rounded-lg" style={{ fontFamily: 'Tajwal, sans-serif', direction: 'rtl' }}>
    <CiShop className="mr-2 ml-2 text-sm" />
    المتجر
  </a>
  <div className="flex flex-col items-center mt-auto p-1 bg-white w-full justify-center border-t"></div>
  <a href="#" className="flex items-center p-3 text-sm text-gray-700 top-0 hover:bg-orange-100 hover:rounded-lg" style={{ fontFamily: 'Tajwal, sans-serif', direction: 'rtl' }}>
    <FiAlertCircle className="mr-2 ml-2 text-sm" />
    مركز المساعدة
  </a>
  <a href="#" className="flex items-center p-3 text-sm text-gray-700 hover:bg-orange-100 hover:rounded-lg" style={{ fontFamily: 'Tajwal, sans-serif', direction: 'rtl' }}>
    <IoSettingsOutline className="mr-2 ml-2 text-sm" />
    الإعدادات
  </a>
</nav>

        <div className="flex flex-col items-center mt-auto p-2 mb-16">
        <div className="p-2 bg-orange-100 rounded-lg w-full text-center">
            <h2 className="text-sm font-bold mb-1 font-tajwal">ندوة عبر الإنترنت</h2>
            <p className="text-xs mb-2 font-tajwal">تعلم كيف تصبح معلماً جيداً. انضم إلى ندوتنا التعليمية لتحسين مهاراتك.</p>
            <button className="bg-custom-orange text-white py-1 px-2 rounded font-tajwal text-xs">التسجيل</button>
        </div>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;
