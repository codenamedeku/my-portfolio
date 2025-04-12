const Dashboard = () => {
  return (
    <main className="h-full flex-1 text-gray-50">
      {/* Introduction Section */}
      <section className="mb-6">
        <h1 className="text-2xl font-bold flex items-center">
          Dashboard
        </h1>
        <p className="mt-4 text-gray-400">
          My personal dashboard that summarized working activities.
        </p>
      </section>
      {/* Divider */}
      <hr className="mb-6 border-gray-800" />
    </main>
  );
};

export default Dashboard;