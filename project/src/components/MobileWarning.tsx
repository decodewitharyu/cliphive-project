const MobileWarning = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md md:hidden flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-2xl font-bold text-white mb-4">⚠️ Mobile Version Under Development</h2>
      <p className="text-gray-200 mb-4">
        This website is currently optimized for desktop viewing only.
      </p>
      <p className="text-gray-200">
        Please switch to desktop view for the best experience.
      </p>
    </div>
  );
};

export default MobileWarning;
