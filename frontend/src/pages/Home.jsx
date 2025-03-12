import React, { useEffect, useState } from 'react'
import { useProductsStore } from '../store/productsStore'
import toast from 'react-hot-toast'
function Home() {
  const [ newForm, setNewForm ] = useState(
    {
      name: '',
      price: '',
      imageUrl: '',
      category: '',
    })
  const { allProducts, getAllProducts, removeProduct, editProduct } = useProductsStore()
  
  const handleUpdate = (id) => {
    if(newForm.name === '' || newForm.price === '' || newForm.imageUrl === '' || newForm.category === '')
    {return { toast: toast.error('Please fill the form')}}
    editProduct(id, newForm)
  }
  
  useEffect(() =>{
    getAllProducts()
  },[])
  
  const handleDelete = (id) => {
    removeProduct(id)
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
  {allProducts.map((product) => {
    return (
      <div key={product._id} className="flex justify-center">
        <div className="card w-80 shadow-lg">
          <figure className="h-48 overflow-hidden">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="object-cover w-full h-full"
              />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">
              A card component has a figure, a body part, and inside body there are title and actions parts.
            </p>
            <div className="card-actions justify-end">
              {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_5').showModal()}>Edit</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg text-center">Edit Product</h3>

    <div className="form-control space-y-4">
  <div className="flex flex-col">
    <label className="label m-1">
      <span className="label-text">Name</span>
    </label>
    <input type="text" value={newForm.name} placeholder="Product Name" onChange={(e) => setNewForm({ ...newForm, name : e.target.value})} className="input input-bordered w-full" />
  </div>

  <div className="flex flex-col">
    <label className="label m-1">
      <span className="label-text">Price</span>
    </label>
    <input type="number" placeholder="Product Price" className="input input-bordered w-full" value={newForm.price} onChange={(e) => setNewForm({...newForm, price: e.target.value})} />
  </div>

  <div className="flex flex-col">
    <label className="label m-1">
      <span className="label-text">Product URL</span>
    </label>
    <input type="text" placeholder="Product URL" className="input input-bordered w-full" value={newForm.imageUrl} onChange={(e) => setNewForm({...newForm, imageUrl: e.target.value})}/>
  </div>

  <div className="flex flex-col">
    <label className="label m-1">
      <span className="label-text">Product Category</span>
    </label>
    <input type="text" placeholder="Product Category" className="input input-bordered w-full" value={newForm.category} onChange={(e) => setNewForm({...newForm, category: e.target.value})}/>
  </div>
</div>


    <div className="modal-action flex justify-evenly">
        <button className="btn btn-primary w-1/2" onClick={()=>handleUpdate(product._id)}>start</button>
      <form method="dialog">
        <button className="btn btn-primary">Close</button>
      </form>
    </div>
  </div>
</dialog>
              <button onClick={() => handleDelete(product._id)} className="btn btn-primary">Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  })}
</div>
  )
}

export default Home