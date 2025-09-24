"use client";
import { useState } from "react";
import { PlusCircle, Edit, Trash } from "lucide-react";

export default function ElectricalPage() {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: null,
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updated = [...services];
      updated[editIndex] = formData;
      setServices(updated);
      setEditIndex(null);
    } else {
      setServices([...services, formData]);
    }

    setFormData({ name: "", description: "", price: "", image: null });
  };

  const handleEdit = (index) => {
    setFormData(services[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setServices(services.filter((_, i) => i !== index));
  };

  const getImagePreview = (file) => {
    if (!file) return null;
    return URL.createObjectURL(file);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">⚡ Electrical Services</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl space-y-6 border border-gray-200"
      >
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          {editIndex !== null ? "Update Service" : "Add New Service"}
        </h2>

        <div>
          <label className="block mb-2 font-medium text-gray-700">Service Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
            placeholder="Enter service name"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
            rows="3"
            placeholder="Enter service details"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">Price (₱)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
            placeholder="Enter price"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">Upload Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
          />
          {formData.image && (
            <img
              src={getImagePreview(formData.image)}
              alt="preview"
              className="mt-3 h-40 w-full object-cover rounded-xl border border-gray-200 shadow"
            />
          )}
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-medium text-lg"
        >
          <PlusCircle size={20} />
          {editIndex !== null ? "Update Service" : "Add Service"}
        </button>
      </form>

      {/* Services List */}
      <div className="mt-14">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">📋 All Services</h2>
        {services.length === 0 ? (
          <p className="text-gray-500 italic">No services added yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, index) => (
              <div
                key={index}
                className="p-5 bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition"
              >
                {s.image && (
                  <div className="h-44 w-full border rounded-lg overflow-hidden flex items-center justify-center bg-gray-50 mb-4">
                    <img
                      src={getImagePreview(s.image)}
                      alt={s.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <h3 className="font-semibold text-lg text-gray-800">{s.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{s.description}</p>
                <p className="text-green-600 font-bold text-lg mt-2">₱ {s.price}</p>
                <div className="flex gap-3 mt-5">
                  <button
                    onClick={() => handleEdit(index)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    <Edit size={16} /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                  >
                    <Trash size={16} /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
