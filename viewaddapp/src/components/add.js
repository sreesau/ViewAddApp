import React, { useState } from "react";
import './add.css';

function AddItem() {
  const [name, setName] = useState("");
  const [type, setType] = useState("Shirt");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [additionalImages, setAdditionalImages] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const items = JSON.parse(localStorage.getItem("items")) || [];

    const newItem = {
      id: Date.now(),
      name,
      type,
      description,
      coverImageUrl: coverImage,
      additionalImageUrls: additionalImages.map((url) => url.trim())
    };

    items.push(newItem);
    localStorage.setItem("items", JSON.stringify(items));

    setSuccess(true);
    setName("");
    setType("Shirt");
    setDescription("");
    setCoverImage("");
    setAdditionalImages([]);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="add-item-container">
      <h2>Add Item</h2>
      {success && <p className="success-message">Item successfully added</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Item Name:</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Item Type:</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option>Shirt</option>
            <option>Pant</option>
            <option>Shoes</option>
            <option>Sports Gear</option>
          </select>
        </div>

        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows={4}
          />
        </div>

        <div>
          <label>Cover Image URL:</label>
          <input
            type="text"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
            placeholder="https://example.com/image.jpg"
            required
          />
        </div>

        <div>
          <label>Additional Image URLs (comma-separated):</label>
          <input
            type="text"
            value={additionalImages.join(",")}
            onChange={(e) => setAdditionalImages(e.target.value.split(","))}
            placeholder="https://img1.jpg, https://img2.jpg"
          />
        </div>

        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddItem;
