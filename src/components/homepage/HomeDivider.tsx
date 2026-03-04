const HomeDivider = () => {
  return (
    <div className="relative overflow-hidden bg-[#F8f8f8] py-1 shadow-sm">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="flex items-center justify-center h-full animate-pulse">
        </div>
      </div>
      
      {/* Main repeating text */}
      <div className="relative flex items-center justify-center overflow-hidden">
        <div className="flex gap-16 ">
          {[...Array(40)].map((_, i) => (
            <span 
              key={i} 
              className="text-gray-300 text-xl font-black tracking-wider whitespace-nowrap select-none"
            >
              SEAS
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeDivider;
