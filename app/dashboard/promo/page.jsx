"use client";
import { useState } from "react";
import { PlusCircle, Edit, Trash } from "lucide-react";

export default function Promo() {
  const [posters, setPosters] = useState([]);
  const [poster, setPoster] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  // handle image change
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setPoster(e.target.files[0]);
    }
  };

  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!poster) return;

    if (editIndex !== null) {
      const updated = [...posters];
      updated[editIndex] = poster;
      setPosters(updated);
      setEditIndex(null);
    } else {
      setPosters([...posters, poster]);
    }

    setPoster(null);
  };

  // edit poster
  const handleEdit = (index) => {
    setPoster(posters[index]);
    setEditIndex(index);
  };

  // delete poster
  const handleDelete = (index) => {
    setPosters(posters.filter((_, i) => i !== index));
  };

  // preview poster
  const getImagePreview = (file) => {
    if (!file) return null;
    return URL.createObjectURL(file);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">🎬 Poster Manager</h1>

      {/* Upload Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg max-w-xl space-y-6 border border-gray-200"
      >
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          {editIndex !== null ? "Update Poster" : "Add New Poster"}
        </h2>

        <div>
          <label className="block mb-2 font-medium text-gray-700">Upload Poster</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
            required
          />
          {poster && (
            <div className="mt-3 w-full h-64 rounded-xl overflow-hidden border border-gray-200 shadow">
              <img
                src={getImagePreview(poster)}
                alt="Poster Preview"
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
          {editIndex !== null ? "Update Poster" : "Add Poster"}
        </button>
      </form>

      {/* Posters List */}
      <div className="mt-14">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">📋 All Posters</h2>
        {posters.length === 0 ? (
          <p className="text-gray-500 italic">No posters added yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posters.map((p, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition overflow-hidden"
              >
                <div className="h-64 w-full overflow-hidden">
                  <img
                    src={getImagePreview(p)}
                    alt={`Poster ${index + 1}`}
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
