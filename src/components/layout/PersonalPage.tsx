import { useParams, Link } from "react-router-dom";
import persons from "../../assets/infomation/team/founders";
import PageTemplate from "./PageTemplate";

const PersonalPage = () => {
    const { founderId } = useParams<{ founderId: string }>();
    
    if (!founderId || !persons[founderId as keyof typeof persons]) {
        return (
            <PageTemplate title="Person Not Found">
                <div className="max-w-4xl mx-auto px-6 py-16 text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Person Not Found</h1>
                    <p className="text-gray-600 mb-8">The person you're looking for doesn't exist.</p>
                    <Link 
                        to="/team" 
                        className="text-blue-400 hover:text-blue-800 underline"
                    >
                        Back to Team
                    </Link>
                </div>
            </PageTemplate>
        );
    }

    const person = persons[founderId as keyof typeof persons];

    return (
        <PageTemplate title={person.name}>
            <section className="bg-white py-16 px-6 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    {/* Back Button */}
                    <Link 
                        to="/team" 
                        className="inline-flex items-center text-blue-400 hover:text-blue-800 mb-8"
                    >
                        <svg 
                            className="w-5 h-5 mr-2" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M15 19l-7-7 7-7" 
                            />
                        </svg>
                        Back to Team
                    </Link>

                    {/* Person Info */}
                    <div className="bg-[#F8F8F8] rounded-lg shadow-lg overflow-hidden p-8">
                        {/* Top Section: Image and Name/Title */}
                        <div className="flex flex-col sm:flex-row gap-6 mb-8">
                            {/* Image Section */}
                            <div className="flex-shrink-0">
                                <img
                                    src={person.image}
                                    alt={person.name}
                                    className="w-48 h-48 sm:w-64 sm:h-64 object-cover rounded-lg shadow-md"
                                />
                            </div>

                            {/* Name and Title Section */}
                            <div className="flex flex-col justify-center">
                                <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-3 playfair-display">
                                    {person.name}
                                </h1>
                                <p className="text-xl text-gray-600 italic">
                                    {person.title}
                                </p>
                            </div>
                        </div>

                        {/* Bio Section */}
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                                {person.bio}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </PageTemplate>
    );
};

export default PersonalPage;
