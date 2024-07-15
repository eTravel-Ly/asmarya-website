import React from "react";
import ContinueReadingSection1 from "../assets/images/ContinueReadingSection1.png";
import ContinueReadingSection2 from "../assets/images/ContinueReadingSection2.png";
import ContinueReadingSection3 from "../assets/images/ContinueReadingSection3.png";

const ContinueReadingSection = () => {
  const books = [
    {
      title: "شرح رياض الصالحين",
      description: "كتاب شرح رياض الصالحين للإمام النووي",
      image: ContinueReadingSection1,
      progress: 80,
    },
    {
      title: "شرح لفتة الكبد",
      description: "كتاب شرح لفتة الكبد",
      image: ContinueReadingSection2,
      progress: 60,
    },
    {
      title: "التطبيق على الكافر في قبلي",
      description: "شرح تطبيقات عملية",
      image: ContinueReadingSection3,
      progress: 50,
    },
  ];

  return (
    <div className="p-4">
      <h2
        className="text-xl font-bold mb-4"
        style={{
          fontFamily: "Tajwal, sans-serif",
          direction: "rtl",
          textAlign: "right",
        }}
      >
        الاستمرار في القراءة
      </h2>
      <div className="flex overflow-x-auto space-x-4">
        {books.map((book, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 w-64 flex-shrink-0 text-right"
            style={{ direction: "rtl" }}
          >
            <img
              src={book.image}
              alt={book.title}
              className="h-32  object-cover rounded mb-2"
              style={{ fontFamily: "Tajwal, sans-serif" }}
            />
            <h3
              className="text-lg font-bold mt-2"
              style={{ fontFamily: "Tajwal, sans-serif" }}
            >
              {book.title}
            </h3>
            <p
              className="text-gray-600 text-sm"
              style={{ fontFamily: "Tajwal, sans-serif" }}
            >
              {book.description}
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div
                className="bg-custom-orange h-2.5 rounded-full"
                style={{ width: `${book.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinueReadingSection;
