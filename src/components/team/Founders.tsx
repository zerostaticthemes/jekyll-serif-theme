import { Link } from "react-router-dom";
import persons from "../../assets/infomation/team/founders";

const Founders = () => {
  return (
    <>
        <section className="bg-[#F8F8F8] pt-12 sm:pt-16 md:pt-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Title */}
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-6 sm:mb-8 roboto-slab">
                    Người Sáng Lập SEAS
                </h1>
                {/* Persons List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {Object.entries(persons).map(([key, person]) => (
                        <Link 
                            key={key} 
                            to={`/team/${key}`}
                            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6 text-center cursor-pointer group"
                        >
                            <img
                                src={person.image}
                                alt={person.name}
                                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-3 sm:mb-4 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                {person.name}
                            </h2>
                            <p className="text-xs sm:text-sm text-gray-600 italic">
                                {person.title}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    </>
  );
};

export default Founders;