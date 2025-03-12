import React, { useState } from 'react'
import { useProductsStore } from '../store/productsStore'
function CreatePage() {
  const { createProduct } = useProductsStore()
  const [ text, setText ] = useState({
    name: '',
    price: '',
    imageUrl: '',
    category: ''
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    createProduct(text)
    setText({
      name: '',
      price: '',
      imageUrl: '',
      category: ''
    })
  }
  return (
    <div className="flex justify-center items-center min-h-screen ">
  <div className="w-full max-w-md p-8  rounded-2xl shadow-lg">
    <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Submit Details</h2>
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Type name here"
        className="w-full px-4 py-2 border  rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        name="name"
        value={text.name}
        onChange={(e) => setText({ ...text, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Type price here"
        className="w-full px-4 py-2 border  rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        name="price"
        value={text.price}
        onChange={(e) => setText({ ...text, price: e.target.value })}
      />
      <input
        type="text"
        placeholder="Type url here"
        className="w-full px-4 py-2 border  rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        name="imageUrl"
        value={text.imageUrl}
        onChange={(e) => setText({ ...text, imageUrl: e.target.value })}
      />
      <input
        type="text"
        placeholder="Type category here"
        className="w-full px-4 py-2 border  rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        name="category"
        value={text.category}
        onChange={(e) => setText({ ...text, category: e.target.value })}
      />
      <button
        type="button"
        className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  </div>
</div>

  )
}

export default CreatePage