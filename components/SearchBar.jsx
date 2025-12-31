export default function SearchBar({ value, onChange, onSearch }) {
  return (
    <div className="search-bar">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search movies..."
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}
