import React, { useEffect, useState } from "react";
import './view.css';

function ViewItems() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("items")) || [];
    setItems(data);
  }, []);

  const closeModal = () => {
    setSelectedItem(null);
    setCurrentIndex(0);
  };

  // Combine cover and additional images for carousel
  const allImages = selectedItem
    ? [selectedItem.coverImageUrl, ...selectedItem.additionalImageUrls]
    : [];

  const handleNext = () => {
    if (allImages.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % allImages.length);
  };

  const handlePrev = () => {
    if (allImages.length === 0) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? allImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="view-items-container">
      <h2>View Items</h2>

      {items.length === 0 && <p>No items found.</p>}

      <div className="item-grid">
        {items.map((item) => (
          <div
            key={item.id}
            className="item-card"
            onClick={() => {
              setSelectedItem(item);
              setCurrentIndex(0);
            }}
          >
            <img src={item.coverImageUrl} alt={item.name} className="item-image" />
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>✕</button>
            <h3>{selectedItem.name}</h3>
            <p><strong>Type:</strong> {selectedItem.type}</p>
            <p>{selectedItem.description}</p>

            {allImages.length > 0 && (
              <div className="carousel">
                <button className="carousel-btn" onClick={handlePrev}>◀</button>
                <img
                  src={allImages[currentIndex]}
                  alt="Item"
                  className="carousel-img"
                />
                <button className="carousel-btn" onClick={handleNext}>▶</button>
              </div>
            )}

            <button className="enquire-button">Enquire</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewItems;
