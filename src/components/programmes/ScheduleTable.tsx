import type { DaySchedule } from '../../assets/infomation/schedules/schedule.2025'

interface ScheduleTableProps {
  schedule: DaySchedule[]
  title: string
  hasFridaySpecialSlot?: boolean
}

const ScheduleTable = ({ schedule, title, hasFridaySpecialSlot = false }: ScheduleTableProps) => {
  return (
    <div className='flex flex-col items-center'>
      <div className="mb-4 sm:mb-6 text-center">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{title}</h2>
      </div>

      {/* Table View */}
      <div className="overflow-x-auto w-full max-w-6xl">
        <table className="mx-auto bg-white border border-gray-300 shadow-lg text-sm">
          <thead>
            <tr className="bg-[#00637E] text-white">
              <th className="py-2 px-3 border-r border-[#004d61] font-semibold text-left text-xs">Thời gian</th>
              {schedule.map((day, index) => (
                <th key={index} className="py-2 px-3 border-r border-[#004d61] font-semibold text-center min-w-[120px] text-xs">
                  <div>{day.day}</div>
                  <div className="text-sm font-normal">{day.date}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: Math.max(...schedule.map(day => day.events.length)) }).map((_, timeIndex) => {
              // Add break row after 11:00-12:00 slot (before index 4 which is 1:00-2:00)
              const breakRow = timeIndex === 4 ? (
                <tr key="break" className="bg-gray-400 h-8">
                  <td colSpan={schedule.length + 1} className="text-center font-semibold text-white text-sm">
                    Nghỉ trưa
                  </td>
                </tr>
              ) : null

              // Check if this is the 1:00-2:00 slot (index 4) with Friday special handling
              if (timeIndex === 4 && hasFridaySpecialSlot) {
                return (
                  <>
                    {breakRow}
                    <tr key={timeIndex} className="border-b border-gray-200 hover:bg-gray-50 h-20">
                      <td className="px-3 border-r border-gray-300 font-semibold text-xs whitespace-nowrap bg-gray-50 h-20">
                        {schedule[0].events[timeIndex]?.time}
                      </td>
                      {schedule.map((day, dayIndex) => {
                        const event = day.events[timeIndex]
                        // For Friday (dayIndex 4), span 2 rows to cover 1:00-2:30
                        if (dayIndex === 4) {
                          return (
                            <td
                              key={dayIndex}
                              rowSpan={2}
                              className={`px-3 border-r border-gray-300 text-xs ${event.color} h-28`}
                            >
                              {event.title ? (
                                <div className="text-gray-800">{event.title}</div>
                              ) : (
                                <div className="text-gray-400 italic text-center">-</div>
                              )}
                            </td>
                          )
                        }
                        if (!event) {
                          return (
                            <td
                              key={dayIndex}
                              className="px-3 border-r border-gray-300 text-xs h-20"
                            >
                              <div className="text-gray-400 italic text-center">-</div>
                            </td>
                          )
                        }
                        return (
                          <td
                            key={dayIndex}
                            className={`px-3 border-r border-gray-300 text-xs ${event.color} h-20`}
                          >
                            {event.title ? (
                              <div className="text-gray-800">{event.title}</div>
                            ) : (
                              <div className="text-gray-400 italic text-center">-</div>
                            )}
                          </td>
                        )
                      })}
                    </tr>
                  </>
                )
              }
              // Check if this is the 2:00-3:00 slot (index 5) that needs to be split
              else if (timeIndex === 5 && hasFridaySpecialSlot) {
                return (
                  <>
                    {/* Top half of 2:00-3:00 - continuation of Python programming */}
                    <tr key={`${timeIndex}-a`} className="border-b-0 hover:bg-gray-50 h-10">
                      <td rowSpan={2} className="px-3 border-r border-gray-300 font-semibold text-xs whitespace-nowrap bg-gray-50 h-20">
                        {schedule[0].events[timeIndex]?.time}
                      </td>
                      {schedule.map((day, dayIndex) => {
                        // Skip Friday since it's already rendered with rowSpan in previous row
                        if (dayIndex === 4) return null

                        const event = day.events[timeIndex - 1] // Use previous event (Python programming)
                        if (!event) return <td key={dayIndex} className="px-3 border-r border-gray-300 h-10"></td>
                        return (
                          <td
                            key={dayIndex}
                            className={`px-3 border-r border-gray-300 text-xs ${event.color} border-b border-gray-400 h-10`}
                          >
                            <div className="text-gray-800 text-xs opacity-60">
                              {dayIndex < 4 ? '' : event.title ? '' : ''}
                            </div>
                          </td>
                        )
                      })}
                    </tr>
                    {/* Bottom half of 2:00-3:00 - empty transition */}
                    <tr key={`${timeIndex}-b`} className="border-b border-gray-200 hover:bg-gray-50 h-10">
                      {schedule.map((day, dayIndex) => {
                        const event = day.events[timeIndex] // Current empty slot
                        if (!event) return <td key={dayIndex} className="px-3 border-r border-gray-300 h-10"></td>
                        return (
                          <td
                            key={dayIndex}
                            className={`px-3 border-r border-gray-300 text-xs ${event.color} h-10`}
                          >
                            <div className="text-gray-400 italic text-center text-xs">-</div>
                          </td>
                        )
                      })}
                    </tr>
                  </>
                )
              } else {
                return (
                  <>
                    {breakRow}
                    <tr key={timeIndex} className="border-b border-gray-200 hover:bg-gray-50 h-20">
                      <td className="px-3 border-r border-gray-300 font-semibold text-xs whitespace-nowrap bg-gray-50 h-20">
                        {schedule[0].events[timeIndex]?.time}
                      </td>
                      {schedule.map((day, dayIndex) => {
                        const event = day.events[timeIndex]
                        if (!event) {
                          return (
                            <td
                              key={dayIndex}
                              className="px-3 border-r border-gray-300 text-xs h-20"
                            >
                              <div className="text-gray-400 italic text-center">-</div>
                            </td>
                          )
                        }
                        return (
                          <td
                            key={dayIndex}
                            className={`px-3 border-r border-gray-300 text-xs ${event.color} h-20`}
                          >
                            {event.title ? (
                              <div className="text-gray-800">{event.title}</div>
                            ) : (
                              <div className="text-gray-400 italic text-center">-</div>
                            )}
                          </td>
                        )
                      })}
                    </tr>
                  </>
                )
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ScheduleTable
