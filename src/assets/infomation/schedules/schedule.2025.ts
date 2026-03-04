export interface ScheduleEvent {
  time: string
  title: string
  color: string
}

export interface DaySchedule {
  day: string
  date: string
  events: ScheduleEvent[]
}

// Schedule Color Constants - Organized by Subject/Event Type
const COLORS = {
  LINEAR_ALGEBRA: 'bg-[#FFB33F]',
  PROBABILITY_STATS: 'bg-[#5FC9C3]',
  MACHINE_LEARNING: 'bg-[#519A66]',
  PYTHON_PROGRAMMING: 'bg-[#D9EAD3]',
  
  GUEST_LECTURE: 'bg-[#F6E7BC]',
  PROJECT_INTRO_PRACTICAL: 'bg-[#FFB2B2]',
  PROJECT_INTRO_SCIENTIFIC: 'bg-[#8494FF]',
  PROJECT_WORK: 'bg-[#FFF2D0]',
  FIELD_TRIP: 'bg-[#B8E6E6]',               
  PRESENTATION: 'bg-[#D4F1F4]',
  OPENING_CEREMONY: 'bg-[#F57799]',
  CLOSING_CEREMONY: 'bg-[#F57799]',
  
  PRACTICE_HOMEWORK: 'bg-[#E8F4F3]',
  EMPTY: 'bg-white'                         
} as const

export const weekSchedule2025: DaySchedule[] = [
  {
    day: 'Thứ 2',
    date: '21/7',
    events: [
      { time: '8:00 - 9:00', title: 'Lễ chào mừng', color: COLORS.OPENING_CEREMONY },
      { time: '9:00 - 10:00', title: 'Bài giảng khách mời 1', color: COLORS.GUEST_LECTURE },
      { time: '10:00 - 11:00', title: 'Đại số tuyến tính 1: Cơ bản', color: COLORS.LINEAR_ALGEBRA },
      { time: '11:00 - 12:00', title: 'Đại số tuyến tính 2: Biến đổi tuyến tính (Linear transformations)', color: COLORS.LINEAR_ALGEBRA },
      { time: '1:00 - 2:00', title: 'Lập trình Python 1', color: COLORS.PYTHON_PROGRAMMING },
      { time: '2:00 - 3:00', title: '', color: COLORS.PRACTICE_HOMEWORK },
      { time: '3:00 - 4:00', title: 'Bài tập toán trên Python 1', color: COLORS.PRACTICE_HOMEWORK },
      { time: '4:00 - 5:00', title: '', color: COLORS.EMPTY }
    ]
  },
  {
    day: 'Thứ 3',
    date: '22/7',
    events: [
      { time: '8:00 - 9:00', title: 'Đại số tuyến tính 3: Ma trận nghịch đảo (Matrix inversion)', color: COLORS.LINEAR_ALGEBRA },
      { time: '9:00 - 10:00', title: 'Đại số tuyến tính 4: Phép phân tích riêng (Eigendecomposition)', color: COLORS.LINEAR_ALGEBRA },
      { time: '10:00 - 11:00', title: 'Xác suất thống kê 1: Cơ bản', color: COLORS.PROBABILITY_STATS },
      { time: '11:00 - 12:00', title: 'Học máy 1: Giới thiệu', color: COLORS.MACHINE_LEARNING },
      { time: '1:00 - 2:00', title: 'Lập trình Python 2', color: COLORS.PYTHON_PROGRAMMING },
      { time: '2:00 - 3:00', title: '', color: COLORS.PRACTICE_HOMEWORK },
      { time: '3:00 - 4:00', title: 'Bài tập toán trên Python 2', color: COLORS.PRACTICE_HOMEWORK },
      { time: '4:00 - 5:00', title: '', color: COLORS.EMPTY }
    ]
  },
  {
    day: 'Thứ 4',
    date: '23/7',
    events: [
      { time: '8:00 - 9:00', title: 'Đại số tuyến tính 5: Giải tích ma trận (Matrix calculus)', color: COLORS.LINEAR_ALGEBRA },
      { time: '9:00 - 10:00', title: 'Xác suất thống kê 2: Mô hình Thống kê', color: COLORS.PROBABILITY_STATS },
      { time: '10:00 - 11:00', title: 'Xác suất thống kê 3: Hồi quy tuyến tính (Linear regression)', color: COLORS.PROBABILITY_STATS },
      { time: '11:00 - 12:00', title: 'Học máy 2: Học giám sát (Supervised learning)', color: COLORS.MACHINE_LEARNING },
      { time: '1:00 - 2:00', title: 'Lập trình Python 3', color: COLORS.PYTHON_PROGRAMMING },
      { time: '2:00 - 3:00', title: '', color: COLORS.PRACTICE_HOMEWORK },
      { time: '3:00 - 4:00', title: 'Bài tập toán trên Python 3', color: COLORS.PRACTICE_HOMEWORK },
      { time: '4:00 - 5:00', title: '', color: COLORS.EMPTY }
    ]
  },
  {
    day: 'Thứ 5',
    date: '24/7',
    events: [
      { time: '8:00 - 9:00', title: 'Đại số tuyến tính 6: Tổng kết & Vi dụ ứng dụng', color: COLORS.LINEAR_ALGEBRA },
      { time: '9:00 - 10:00', title: 'Học máy 3: Thuật toán giảm độ dốc (Gradient descent)', color: COLORS.MACHINE_LEARNING },
      { time: '10:00 - 11:00', title: 'Học máy 4: Học không giám sát (Unsupervised learning)', color: COLORS.MACHINE_LEARNING },
      { time: '11:00 - 12:00', title: 'Bài giảng khách mời 2', color: COLORS.GUEST_LECTURE },
      { time: '1:00 - 2:00', title: 'Lập trình Python 4', color: COLORS.PYTHON_PROGRAMMING },
      { time: '2:00 - 3:00', title: '', color: COLORS.PRACTICE_HOMEWORK },
      { time: '3:00 - 4:00', title: 'Bài tập toán trên Python 4', color: COLORS.PRACTICE_HOMEWORK },
      { time: '4:00 - 5:00', title: '', color: COLORS.EMPTY }
    ]
  },
  {
    day: 'Thứ 6',
    date: '25/7',
    events: [
      { time: '8:00 - 9:00', title: 'Học máy 5: Mạng thần kinh nhân tạo (Neural networks)', color: COLORS.MACHINE_LEARNING },
      { time: '9:00 - 10:00', title: 'Học máy 6: Tổng kết & Giới thiệu các chủ đề khác', color: COLORS.MACHINE_LEARNING },
      { time: '10:00 - 11:00', title: '', color: COLORS.EMPTY },
      { time: '11:00 - 12:00', title: '', color: COLORS.EMPTY },
      { time: '1:00 - 2:00', title: 'Giới thiệu dự án nhóm tuần 2 (dự án ứng dụng thực tiễn)', color: COLORS.PROJECT_INTRO_PRACTICAL },
      { time: '2:00 - 3:00', title: 'Giới thiệu dự án nhóm tuần 2 (dự án ứng dụng thực tiễn)', color: COLORS.PROJECT_INTRO_PRACTICAL },
      { time: '3:00 - 4:00', title: 'Giới thiệu dự án nhóm tuần 2 (dự án ứng dụng khoa học)', color: COLORS.PROJECT_INTRO_SCIENTIFIC },
      { time: '4:00 - 5:00', title: 'Học viên lập nhóm', color: COLORS.PROJECT_WORK }
    ]
  },
  {
    day: 'Thứ 7',
    date: '26/7',
    events: [
      { time: '8:00 - 9:00', title: '', color: COLORS.FIELD_TRIP },
      { time: '9:00 - 10:00', title: '', color: COLORS.FIELD_TRIP },
      { time: '10:00 - 11:00', title: '', color: COLORS.FIELD_TRIP },
      { time: '11:00 - 12:00', title: 'Chuyến di động Phong Nha', color: COLORS.FIELD_TRIP },
      { time: '1:00 - 2:00', title: '', color: COLORS.FIELD_TRIP },
      { time: '2:00 - 3:00', title: '', color: COLORS.FIELD_TRIP },
      { time: '3:00 - 4:00', title: '', color: COLORS.FIELD_TRIP },
      { time: '4:00 - 5:00', title: '', color: COLORS.FIELD_TRIP }
    ]
  }
]

export const weekSchedule2025Week2: DaySchedule[] = [
  {
    day: 'Thứ 2',
    date: '28/7',
    events: [
      { time: '8:00 - 9:00', title: 'Bài giảng liên quan dự án nhóm ứng dụng thực tiễn', color: COLORS.PROJECT_INTRO_PRACTICAL },
      { time: '9:00 - 10:00', title: 'Bài giảng liên quan dự án nhóm ứng dụng thực tiễn', color: COLORS.PROJECT_INTRO_PRACTICAL },
      { time: '10:00 - 11:00', title: 'Bài giảng liên quan dự án nhóm ứng khoa học', color: COLORS.PROJECT_INTRO_SCIENTIFIC },
      { time: '11:00 - 12:00', title: 'Học viên làm dự án nhóm', color: COLORS.PROJECT_WORK },
      { time: '1:00 - 2:00', title: 'Học viên làm dự án nhóm', color: COLORS.PROJECT_WORK },
      { time: '2:00 - 3:00', title: '', color: COLORS.PROJECT_WORK },
      { time: '3:00 - 4:00', title: '', color: COLORS.PROJECT_WORK },
      { time: '4:00 - 5:00', title: '', color: COLORS.PROJECT_WORK }
    ]
  },
  {
    day: 'Thứ 3',
    date: '29/7',
    events: [
      { time: '8:00 - 9:00', title: 'Bài giảng liên quan dự án nhóm ứng dụng thực tiễn', color: COLORS.PROJECT_INTRO_PRACTICAL },
      { time: '9:00 - 10:00', title: 'Bài giảng liên quan dự án nhóm ứng dụng thực tiễn', color: COLORS.PROJECT_INTRO_PRACTICAL },
      { time: '10:00 - 11:00', title: 'Bài giảng liên quan dự án nhóm ứng khoa học', color: COLORS.PROJECT_INTRO_SCIENTIFIC },
      { time: '11:00 - 12:00', title: 'Học viên làm dự án nhóm', color: COLORS.PROJECT_WORK },
      { time: '1:00 - 2:00', title: 'Học viên làm dự án nhóm', color: COLORS.PROJECT_WORK },
      { time: '2:00 - 3:00', title: '', color: COLORS.PROJECT_WORK },
      { time: '3:00 - 4:00', title: '', color: COLORS.PROJECT_WORK },
      { time: '4:00 - 5:00', title: '', color: COLORS.PROJECT_WORK }
    ]
  },
  {
    day: 'Thứ 4',
    date: '30/7',
    events: [
      { time: '8:00 - 9:00', title: 'Học viên làm dự án nhóm', color: COLORS.PROJECT_WORK },
      { time: '9:00 - 10:00', title: '', color: COLORS.PROJECT_WORK },
      { time: '10:00 - 11:00', title: '', color: COLORS.PROJECT_WORK },
      { time: '11:00 - 12:00', title: '', color: COLORS.PROJECT_WORK },
      { time: '1:00 - 2:00', title: 'Hoạt động: Công viên Động Mỹ Biển Nhật Lệ', color: COLORS.FIELD_TRIP },
      { time: '2:00 - 3:00', title: '', color: COLORS.FIELD_TRIP },
      { time: '3:00 - 4:00', title: '', color: COLORS.FIELD_TRIP },
      { time: '4:00 - 5:00', title: '', color: COLORS.FIELD_TRIP }
    ]
  },
  {
    day: 'Thứ 5',
    date: '31/7',
    events: [
      { time: '8:00 - 9:00', title: 'Học viên làm dự án nhóm', color: COLORS.PROJECT_WORK },
      { time: '9:00 - 10:00', title: 'Học viên làm dự án nhóm', color: COLORS.PROJECT_WORK },
      { time: '10:00 - 11:00', title: 'Bài giảng khách mời 3', color: COLORS.GUEST_LECTURE },
      { time: '11:00 - 12:00', title: 'Bài giảng khách mời 4 / Giao lưu hỏi & đáp', color: COLORS.GUEST_LECTURE },
      { time: '1:00 - 2:00', title: 'Học viên làm dự án nhóm', color: COLORS.PROJECT_WORK },
      { time: '2:00 - 3:00', title: '', color: COLORS.PROJECT_WORK },
      { time: '3:00 - 4:00', title: '', color: COLORS.PROJECT_WORK },
      { time: '4:00 - 5:00', title: '', color: COLORS.PROJECT_WORK }
    ]
  },
  {
    day: 'Thứ 6',
    date: '1/8',
    events: [
      { time: '8:00 - 9:00', title: 'Thuyết trình dự án nhóm', color: COLORS.PRESENTATION },
      { time: '9:00 - 10:00', title: '', color: COLORS.PRESENTATION },
      { time: '10:00 - 11:00', title: '', color: COLORS.PRESENTATION },
      { time: '11:00 - 12:00', title: '', color: COLORS.PRESENTATION },
      { time: '1:00 - 2:00', title: 'Thảo luận', color: COLORS.FIELD_TRIP },
      { time: '2:00 - 3:00', title: '', color: COLORS.FIELD_TRIP },
      { time: '3:00 - 4:00', title: 'Lễ tổng kết', color: COLORS.CLOSING_CEREMONY },
      { time: '4:00 - 5:00', title: '', color: COLORS.EMPTY }
    ]
  }
]
