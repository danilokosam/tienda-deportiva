export const SearchBar = ({ className }) => {
  return (
    <div className={className}>
      <form action="/search" method="get" className="flex">
        <input
          type="search"
          name="q"
          placeholder="Buscar productos"
          className="p-2 rounded-l text-black w-full"
        />
        <button
          type="submit"
          className="bg-gray-600 p-2 rounded-r hover:bg-gray-500"
        >
          🔍
        </button>
      </form>
    </div>
  );
};
