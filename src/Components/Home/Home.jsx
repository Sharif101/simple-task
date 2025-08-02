const Home = () => {
  return (
    <div className="flex items-center gap-4 p-4">
      <a href="/drag&drop">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Drag & Drop
        </button>
      </a>
      <a href="/drag&drop&image">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Drag & Drop Image
        </button>
      </a>
    </div>
  );
};

export default Home;
