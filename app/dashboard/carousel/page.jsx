"use client";
import { useState } from "react";
import { PlusCircle, Edit, Trash } from "lucide-react";

export default function CarouselImages() {
  const [images, setImages] = useState([]);
  const [image, setImage] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  // handle image change
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  // submit (add/update)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!image) return;

    if (editIndex !== null) {
      const updated = [...images];
      updated[editIndex] = image;
      setImages(updated);
      setEditIndex(null);
    } else {
      setImages([...images, image]);
    }

    setImage(null);
  };

  // edit image
  const handleEdit = (index) => {
    setImage(images[index]);
    setEditIndex(index);
  };

  // delete image
  const handleDelete = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  // preview helper
  const getImagePreview = (file) => {
    if (!file) return null;
    return URL.createObjectURL(file);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">🖼 Carousel Images</h1>

      {/* Upload Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg max-w-xl space-y-6 border border-gray-200"
      >
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          {editIndex !== null ? "Update Carousel Image" : "Add New Carousel Image"}
        </h2>

        <div>
          <label className="block mb-2 font-medium text-gray-700">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
            required
          />
          {image && (
            <div className="mt-3 w-full h-56 rounded-xl overflow-hidden border border-gray-200 shadow">
              <img
                src={getImagePreview(image)}
                alt="Carousel Preview"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-medium text-lg"
        >
          <PlusCircle size={20} />
          {editIndex !== null ? "Update Image" : "Add Image"}
        </button>
      </form>

      {/* Images List */}
      <div className="mt-14">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          📋 Carousel Images List
        </h2>
        {images.length === 0 ? (
          <p className="text-gray-500 italic">No carousel images added yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition overflow-hidden"
              >
                <div className="h-56 w-full overflow-hidden">
                  <img
                    src={getImagePreview(img)}
                    alt={`Carousel ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5 flex gap-3">
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
