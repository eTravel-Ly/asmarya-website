import React from "react";
import LoginPic2 from "../assets/images/LoginPic2.png";
import logo from "../assets/images/logo.png";
const LoginRegister = () => {
  return (
    <div className="flex  h-full ">
      {/* Left side image */}
      <div className="w-1/2  h-full">
        <img
          src={LoginPic2}
          alt="Login"
          className="w-[80%] h-[90%]  ml-14 rounded-l  m-3"
        />
      </div>

      {/* Right side form */}
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="w-2/3 flex flex-col justify-center items-center mr-14">
          <div className="w-full flex justify-end">
            <img src={logo} alt="Logo" className="mb-2 w-[20%]" />
          </div>

          <div className="w-full text-right mb-5">
            <h2 className="text-2xl font-bold font-tajwal mb-2">
              <span role="img" aria-label="wave" className="ml-2">
                👋
              </span>
              مرحبًا بك في المنصة التعليمية
            </h2>
            <p className="text-gray-500 font-tajwal">
              .استمر في مشاهدة الدورات التدريبية التي بدأت مشاهدتها بالفعل
            </p>
          </div>

          <form className="w-full max-w-2xl">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 px-4 mb-4">
                <label
                  className="block text-gray-700 font-tajwal text-lg font-bold mb-2 text-right"
                  htmlFor="surname"
                >
                  اللقب
                </label>
                <input
                  id="surname"
                  type="text"
                  className="shadow appearance-none font-tajwal text-right border text-lg rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="اللقب"
                />
              </div>
              <div className="w-full md:w-1/2 px-4 mb-4">
                <label
                  className="block text-gray-700 font-tajwal text-lg font-bold mb-2 text-right"
                  htmlFor="name"
                >
                  الاسم
                </label>
                <input
                  id="name"
                  type="text"
                  className="shadow appearance-none font-tajwal text-right border text-lg rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="الاسم"
                />
              </div>
              <div className="w-full md:w-1/2 px-4 mb-4">
                <label
                  className="block text-gray-700 font-tajwal text-lg font-bold mb-2 text-right"
                  htmlFor="accountType"
                >
                  نوع الحساب
                </label>
                <select
                  id="accountType"
                  className="shadow appearance-none font-tajwal text-right border text-lg rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value=""></option>
                  <option value="student">طالب</option>
                  <option value="teacher">خارجي</option>
                </select>
              </div>
              <div className="w-full md:w-1/2 px-4 mb-4">
                <label
                  className="block text-gray-700 font-tajwal text-lg font-bold mb-2 text-right"
                  htmlFor="birthdate"
                >
                  تاريخ الميلاد
                </label>
                <input
                  id="birthdate"
                  type="date"
                  className="shadow appearance-none font-tajwal text-right border text-lg rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="w-full md:w-1/2 px-4 mb-4">
                <label
                  className="block text-gray-700 font-tajwal text-lg font-bold mb-2 text-right"
                  htmlFor="phone"
                >
                  رقم الهاتف
                </label>
                <input
                  id="phone"
                  type="text"
                  className="shadow appearance-none font-tajwal text-right border text-lg rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="رقم الهاتف"
                />
              </div>
              <div className="w-full md:w-1/2 px-4 mb-4">
                <label
                  className="block text-gray-700 font-tajwal text-lg font-bold mb-2 text-right"
                  htmlFor="registrationNumber"
                >
                  رقم القيد
                </label>
                <input
                  id="registrationNumber"
                  type="text"
                  className="shadow appearance-none font-tajwal text-right border text-lg rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="رقم القيد"
                />
              </div>
              <div className="w-full md:w-1/2 px-4 mb-4">
                <label
                  className="block text-gray-700 font-tajwal text-lg font-bold mb-2 text-right"
                  htmlFor="password"
                >
                  كلمة المرور
                </label>
                <input
                  id="password"
                  type="password"
                  className="shadow appearance-none font-tajwal text-right border text-lg rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="********"
                />
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label
                  className="block text-gray-700 font-tajwal text-lg font-bold mb-2 text-right"
                  htmlFor="email"
                >
                  عنوان البريد الإلكتروني
                </label>
                <input
                  id="email"
                  type="email"
                  className="shadow appearance-none font-tajwal text-right border text-lg rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="email@example.com"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-custom-orange w-full text-lg font-tajwal  text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
            >
              تسجيل
            </button>
          </form>

          <p className="mt-4">
            لديك حساب؟{" "}
            <a href="#" className="text-custom-orange font-tajwal">
              قم بتسجيل الدخول الآن
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default LoginRegister;
