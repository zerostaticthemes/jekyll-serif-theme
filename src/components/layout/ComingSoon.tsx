
const ComingSoon = ({ text }: { text: string }) => {
    return (
        <>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-12 shadow-md text-center">
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h3>
                <p className="text-xl text-gray-600">
                    {text}
                </p>
            </div>
        </>
    );
};

export default ComingSoon;