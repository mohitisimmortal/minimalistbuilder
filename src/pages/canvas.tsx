import React, { useState } from 'react';
import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core';
import ToolTipReal from '@/components/ui/ToolTipReal';
import { Button } from '@/components/ui/button';

// Represents a draggable item
const DraggableItem = ({ id, children }: any) => {
  const { attributes, listeners, setNodeRef } = useDraggable({ id });

  return (
    <div ref={setNodeRef} {...listeners} {...attributes} className="p-2 bg-black mb-2 cursor-pointer">
      {children}
    </div>
  );
};

// Represents the canvas area where items are dropped
const CanvasArea = ({ children }: any) => {
  const { setNodeRef } = useDroppable({ id: 'canvas' });

  return (
    <main ref={setNodeRef} className="bg-gray-300 p-4 mx-auto w-[320px]">
      {children}
    </main>
  );
};

// Main Canvas component with DnD context
const Canvas = () => {
  interface Item {
    id: string;
    type: string;
  }

  const [items, setItems] = useState<Item[]>([]);

  const [draggableItems] = useState<Item[]>([
    { id: 'text-1', type: 'Text' },
    { id: 'button-1', type: 'Button' },
    { id: 'image-1', type: 'Image' },
  ]);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (over?.id === 'canvas') {
      const draggedItem = draggableItems.find((item) => item.id === active.id);
      if (draggedItem) {
        setItems((currentItems) => [...currentItems, draggedItem]);
      }
    }
  };


  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className='flex w-full min-h-[450px] mt-20  px-4 md:px-8  xl:px-10'>
        <aside className=' w-40 text-white overflow-auto'> {/* Sidebar with draggable items */}
          {draggableItems.map((item) => (
            <DraggableItem key={item.id} id={item.id}>{item.type}</DraggableItem>
          ))}
          <Button className='bg-white text-black hover:bg-slate-200'>Preview</Button>
        </aside>
        <CanvasArea> {/* Canvas area to drop items */}
          {items.map((item, index) => (
            <div key={index} className="p-2 my-2 bg-white">
              Dropped {item.type}
            </div>
          ))}
        </CanvasArea>
        <aside>
          <ToolTipReal >
          </ToolTipReal>
        </aside>
      </div>
    </DndContext>
  );
};

export default Canvas;