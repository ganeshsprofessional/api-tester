import React, { useEffect, useState } from 'react';

export default function KeyValueEditor({
  keyPair,
  setKeyPair,
  onKeyPairRemove,
}) {
  const [keyValue, setKeyValue] = useState(keyPair);
  const [debouncedKeyValue, setDebouncedKeyValue] = useState(keyValue);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedKeyValue(keyValue);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [keyValue]);

  useEffect(() => {
    setKeyPair(debouncedKeyValue);
    // eslint-disable-next-line
  }, [debouncedKeyValue]);

  const handleOnChange = (e) => {
    setKeyValue((prevState) => ({
      ...prevState,
      id: keyValue.id,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <div className='flex mb-3'>
        <input
          className="px-4 py-1.5 w-full border border-stone-600 rounded-md hover:border-cyan-500 focus:outline-cyan-500 bg-gray-900 text-white" // Added bg-gray-900 and text-white classes
          placeholder='Key'
          name='keyItem'
          onChange={(e) => handleOnChange(e)}
        />
        <input
          className="ml-3 px-4 py-1.5 w-full border border-stone-600 rounded-md hover:border-cyan-500 focus:outline-cyan-500 bg-gray-900 text-white" // Added bg-gray-900 and text-white classes
          placeholder='Value'
          name='valueItem'
          onChange={(e) => handleOnChange(e)}
        />
        <button 
          className="ml-4 px-4 rounded-md text-red-600 border border-red-800 hover:bg-red-700 hover:text-white"
          onClick={() => onKeyPairRemove(keyPair)}>Remove</button>
      </div>
    </>
  );
}
