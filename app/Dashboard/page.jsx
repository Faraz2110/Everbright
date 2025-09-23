"use client";
import { useState } from "react";
import {
  LogIn,
  LogOut,
  PlusCircle,
  Wrench,
  Snowflake,
  Tag,
  Edit,
  Trash,
  Menu,
  X,
} from "lucide-react";

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    category: "electrical",
    title: "",
    description: "",
    price: "",
    image: null,
  });
  const [editIndex, setEditIndex] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleAddService = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updated = [...services];
      updated[editIndex] = formData;
      setServices(updated);
      setEditIndex(null);
    } else {
      setServices([...services, formData]);
    }

    setFormData({
      category: "electrical",
      title: "",
      description: "",
      price: "",
      image: null,
    });
  };

  const handleEdit = (index) => {
    setFormData(services[index]);
    setEditIndex(index);
    if (window.innerWidth < 768) setSidebarOpen(false); // close sidebar on mobile
  };

  const handleDelete = (index) => {
    const updated = services.filter((_, i) => i !== index);
    setServices(updated);
  };

  const getImagePreview = (file) => {
    if (!file) return null;
    return URL.createObjectURL(file);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <button
          onClick={handleLogin}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <LogIn size={18} /> Login
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Mobile Sidebar Toggle */}
      <div className="md:hidden flex justify-between items-center bg-black text-gray-200 p-4">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full md:h-auto bg-black text-gray-200 w-64 p-6 flex flex-col justify-between transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 z-50`}
      >
        <div>
          <h2 className="text-xl font-bold mb-6 hidden md:block">Dashboard</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 cursor-pointer hover:text-blue-400">
              <Wrench size={18} /> Electrical
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-blue-400">
              <Snowflake size={18} /> Aircon
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-blue-400">
              <Tag size={18} /> Promos
            </li>
          </ul>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 mt-6"
        >
          <LogOut size={18} /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 md:ml-64">
        <h1 className="text-2xl font-bold mb-6">
          {editIndex !== null ? "Edit Service" : "Add New Service"}
        </h1>

        <form
          onSubmit={handleAddService}
          className="bg-white p-6 rounded-lg shadow-md space-y-4 max-w-lg mx-auto"
        >
          {/* Category */}
          <div>
            <label className="block font-medium mb-1">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            >
              <option value="electrical">Electrical</option>
              <option value="aircon">Aircon</option>
              <option value="promo">Promo</option>
            </select>
          </div>

          {/* Title */}
          <div>
            <label className="block font-medium mb-1">Service Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              rows="3"
            ></textarea>
          </div>

          {/* Price */}
          <div>
            <label className="block font-medium mb-1">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              required
            />
          </div>

          {/* Image */}
          <div>
            <label className="block font-medium mb-1">Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
            {formData.image && (
              <img
                src={getImagePreview(formData.image)}
                alt="preview"
                className="mt-2 h-40 w-full object-cover rounded-lg"
              />
            )}
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            <PlusCircle size={18} />
            {editIndex !== null ? "Update Service" : "Add Service"}
          </button>
        </form>

        {/* Services List */}
        <div className="mt-10 space-y-8">
          {["electrical", "aircon", "promo"].map((cat) => (
            <div key={cat}>
              <h2 className="text-xl font-bold mb-4 capitalize">{cat} Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services
                  .filter((s) => s.category === cat)
                  .map((s, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white shadow rounded-lg border flex flex-col"
                    >
                      {s.image && (
                        <img
                          src={getImagePreview(s.image)}
                          alt={s.title}
                          className="h-40 w-full object-cover rounded-md mb-3"
                        />
                      )}
                      <h3 className="font-semibold text-lg">{s.title}</h3>
                      <p className="text-gray-600">{s.description}</p>
                      <p className="text-green-600 font-bold">₱ {s.price}</p>
                      <div className="flex gap-3 mt-4">
                        <button
                          onClick={() => handleEdit(index)}
                          className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                          <Edit size={16} /> Edit
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                        >
                          <Trash size={16} /> Delete
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
