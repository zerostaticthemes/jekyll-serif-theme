import { useState } from 'react'


const AboutInfo = () => {
  const [activeTab, setActiveTab] = useState<'2025' | '2026'>('2026')

  return (
    <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-6 sm:mb-8 roboto-slab">
          Thông tin chương trình
        </h2>

        {/* Tab Navigation */}
        <div className="flex gap-2 sm:gap-4 mb-6 sm:mb-8 border-b border-gray-300">
          <button
            onClick={() => setActiveTab('2025')}
            className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold transition-colors ${activeTab === '2025'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            SEAS 2025
          </button>
          <button
            onClick={() => setActiveTab('2026')}
            className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold transition-colors ${activeTab === '2026'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            SEAS 2026
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === '2025' ? (
          <div className="space-y-4 sm:space-y-6">
            {/* Time Period */}
            <div className="flex items-start">
              <div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold">Thời gian:</span> 21/7 - 01/8/2025
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start">
              <div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold">Địa điểm:</span> THPT Chuyên Võ Nguyên Giáp, Quảng Bình (luân phiên các tỉnh miền Trung).
                </p>
              </div>
            </div>

            {/* Theme */}
            <div className="flex items-start">
              <div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold">Chủ đề 2025:</span> Trí tuệ nhân tạo & Ứng dụng.
                </p>
              </div>
            </div>

            {/* Scale */}
            <div className="flex items-start">
              <div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold">Quy mô:</span> Tối đa khoảng 40 học sinh xuất sắc (uu tiên đến từ miền Trung).
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8 sm:p-12 shadow-md text-center">
            <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">🚀</div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Coming Soon</h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Chương trình SEAS 2026 đang được lên kế hoạch và sẽ được công bố sớm!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutInfo;
