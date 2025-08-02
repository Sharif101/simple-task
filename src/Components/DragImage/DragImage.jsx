import React, { useState } from "react";

export default function DragImage() {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleFiles = (files) => {
    const newImages = Array.from(files).map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...newImages]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleChange = (e) => {
    const files = e.target.files;
    handleFiles(files);
  };

  const removeImage = (url) => {
    setImages((prev) => prev.filter((img) => img.url !== url));
  };

  const preventDefault = (e) => e.preventDefault();

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div
        onDrop={handleDrop}
        onDragOver={preventDefault}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onClick={() => document.getElementById("fileInput").click()}
        className={`border-2 border-dashed rounded-lg p-6 text-center transition cursor-pointer
          ${
            isDragging
              ? "bg-blue-100 border-blue-400"
              : "bg-gray-50 border-gray-400 hover:bg-gray-100"
          }
        `}
      >
        <p className="text-gray-600">
          {isDragging
            ? "Drop the image here..."
            : "Drag & drop images here or click to select"}
        </p>
        <input
          type="file"
          id="fileInput"
          multiple
          accept="image/*"
          onChange={handleChange}
          className="hidden"
        />
      </div>

      {images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
          {images.map((img, index) => (
            <div key={index} className="relative group">
              <img
                src={img.url}
                alt={`upload-${index}`}
                className="w-full h-32 object-cover rounded shadow"
              />
              <button
                onClick={() => removeImage(img.url)}
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
