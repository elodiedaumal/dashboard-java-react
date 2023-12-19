const SearchBar = ({ value, onChange }) => {
   return (
      <div className='max-w-5xl mx-auto   p-10 pb-0'>
         <label className='block text-gray-700 text-sm font-bold mb-2'>
            Search:
         </label>
         <input
            type='text'
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className='w-full p-2 border rounded-md'
            placeholder='Search by name...'
         />
      </div>
   );
};

export default SearchBar;
