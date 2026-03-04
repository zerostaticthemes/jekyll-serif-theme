import { useState } from 'react'
import { weekSchedule2025, weekSchedule2025Week2 } from '../../assets/infomation/schedules/schedule.2025'
import ScheduleTable from './ScheduleTable'
import ComingSoon from '../layout/ComingSoon';

const ProgrammeTabs = () => {
  const [activeTab, setActiveTab] = useState<'2025' | '2026'>('2026')

  return (
    <>
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex gap-4 mb-12 border-b border-gray-300">
            <button
              onClick={() => setActiveTab('2025')}
              className={`px-6 py-3 font-semibold transition-colors ${
                activeTab === '2025'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              SEAS 2025
            </button>
            <button
              onClick={() => setActiveTab('2026')}
              className={`px-6 py-3 font-semibold transition-colors ${
                activeTab === '2026'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              SEAS 2026
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === '2025' ? (
            <div>
              <ScheduleTable 
                schedule={weekSchedule2025} 
                title="Lịch trình Tuần 1" 
                hasFridaySpecialSlot={true}
              />

              {/* Week 2 */}
              <div className="mt-16">
                <ScheduleTable 
                  schedule={weekSchedule2025Week2} 
                  title="Lịch trình Tuần 2" 
                  hasFridaySpecialSlot={false}
                />
              </div>
              <a target='blank' href='https://docs.google.com/spreadsheets/d/10Gu7gnMYNpCZytfNseEYpgpg9r20BPSzPDEoonEzDDQ/edit?usp=sharing' className='block text-center mt-8 text-blue-600 hover:text-blue-800 font-medium'>
                Xem chi tiết lịch trình SEAS 2025
              </a>
            </div>
          ) : (
            <ComingSoon text="Lịch trình chi tiết cho SEAS 2026 sẽ sớm được cập nhật. Hãy theo dõi để không bỏ lỡ thông tin quan trọng!" />
          )}
        </div>
      </div>
    </>
  );
};

export default ProgrammeTabs;