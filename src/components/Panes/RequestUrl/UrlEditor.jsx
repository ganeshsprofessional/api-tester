import React from 'react';

const requestMethods = [
  {
    slug: 'get',
    method: 'GET',
  },
  {
    slug: 'post',
    method: 'POST',
  },
  {
    slug: 'put',
    method: 'PUT',
  },
  {
    slug: 'patch',
    method: 'PATCH',
  },
  {
    slug: 'delete',
    method: 'DELETE',
  },
];

export default function UrlEditor({
  url,
  setUrl,
  reqMethod,
  setReqMethod,
  onInputSend,
}) {
  return (
    <>
      <form className='flex'>
        <select
          className='px-4 py-2 border rounded-md border-stone-600 hover:border-cyan-500 focus:outline-none bg-gray-900 text-white' // Added text-white class
          value={reqMethod}
          onChange={(e) => setReqMethod(e.target.value)}
        >
          {requestMethods.map((option) => (
            <option key={option.slug} value={option.method}>
              {option.method}
            </option>
          ))}
        </select>
        <input
          className='ml-3 w-full px-4 py-2 border rounded-md border-stone-600 hover:border-cyan-500 focus:outline-cyan-500 bg-gray-900 text-white' // Added bg-gray-900 and text-white classes
          type="text" // Changed input type to "text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          className='ml-3 px-6 py-2 rounded-md font-semibold text-white bg-sky-500 hover:bg-cyan-600'
          type='button'
          onClick={(e) => onInputSend(e)}
        >
          SEND
        </button>
      </form>
    </>
  );
}
