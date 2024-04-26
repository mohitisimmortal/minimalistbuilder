import React from 'react';

const PreviewButton = ({ elements }:any) => {
  const handlePreview = () => {
    const previewWindow = window.open('', '_blank');
    const content = elements.map((el: { color: any; fontSize: any; type: any; })=> `<div style="color:${el.color}; font-size:${el.fontSize}px;">${el.type}</div>`).join('');
    previewWindow!.document.write(content);
    previewWindow!.document.close();
  };

  return (
    <button onClick={handlePreview}>Preview</button>
  );
};

export default PreviewButton;
