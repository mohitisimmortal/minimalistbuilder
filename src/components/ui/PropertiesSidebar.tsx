import React from 'react';

const PropertiesSidebar = ({ selectedElement, updateElement }:any) => {
  if (!selectedElement) return <div className="properties-sidebar">No element selected</div>;

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    updateElement({ ...selectedElement, [name]: value });
  };

  return (
    <div className="properties-sidebar">
      <label>
        Color:
        <input type="color" name="color" value={selectedElement.color || '#000000'} onChange={handleChange} />
      </label>
      <label>
        Font Size:
        <input type="number" name="fontSize" value={selectedElement.fontSize || 14} onChange={handleChange} />
      </label>
    </div>
  );
};

export default PropertiesSidebar;
