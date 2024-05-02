import React, { useState } from 'react';
import { DndContext, useDroppable } from '@dnd-kit/core';
import { Button } from '@/components/ui/button';
import { PlusIcon } from '@radix-ui/react-icons';
import DemoHeader from '@/components/ui/DemoHeader';
import DemoHeroPage from '@/components/ui/DemoHeroPage';
import DemoFooter from '@/components/ui/DemoFooter';
import PropertyEditor from '@/components/ui/PropertyEditor';
import ToolTipReal from '@/components/ui/ToolTipReal';

interface Item {
  id: string;
  type: string;
}

interface HeaderProps {
  backgroundColor: string;
  textColor: string;
  fontSize: string;
}

interface Visibility {
  header: boolean;
  homepage: boolean;
  footer: boolean;
}

const CanvasArea = ({ children, visibility, headerProps }: { children: React.ReactNode, visibility: Visibility, headerProps: HeaderProps }) => {
  const { setNodeRef } = useDroppable({ id: 'canvas' });
  return (
    <main ref={setNodeRef} className="bg-gray-300 mx-auto w-[320px] p-4">
      {visibility.header && <DemoHeader style={{ backgroundColor: headerProps.backgroundColor, color: headerProps.textColor, fontSize: headerProps.fontSize }} />}
      {visibility.homepage && <DemoHeroPage />}
      {visibility.footer && <DemoFooter />}
      {children}
    </main>
  );
};

const Canvas = () => {
  const [headerProps, setHeaderProps] = useState<HeaderProps>({
    backgroundColor: '#101010',
    textColor: '#FFFFFF',
    fontSize: '16px'
  });

  const [items, setItems] = useState<Item[]>([]);
  const [visibility, setVisibility] = useState<Visibility>({ header: false, homepage: false, footer: false });

  const handlePropertyChange = (propName: keyof HeaderProps, value: string) => {
    setHeaderProps(prev => ({ ...prev, [propName]: value }));
  };

  const toggleVisibility = (component: keyof Visibility) => {
    setVisibility(prev => ({ ...prev, [component]: !prev[component] }));
  };

  return (
    <DndContext>
      <div className='flex w-full min-h-[450px] mt-20 px-4 md:px-8 xl:px-10'>
        <aside className='w-40 text-white overflow-auto'>
          <div onClick={() => toggleVisibility('header')} className='mb-2 flex bg-black p-1 px-3 cursor-pointer items-center gap-2 hover:bg-white hover:text-black transition-all'>
            Header <PlusIcon />
          </div>
          <div onClick={() => toggleVisibility('homepage')} className='mb-2 flex bg-black p-1 px-3 cursor-pointer items-center gap-2 hover:bg-white hover:text-black transition-all'>
            Homepage <PlusIcon />
          </div>
          <div onClick={() => toggleVisibility('footer')} className='mb-2 flex bg-black p-1 px-3 cursor-pointer items-center gap-2 hover:bg-white hover:text-black transition-all'>
            Footer <PlusIcon />
          </div>
          <Button className='bg-white text-black hover:bg-slate-200'>Preview</Button>
        </aside>
        <CanvasArea visibility={visibility} headerProps={headerProps}>
          {items.map((item, index) => (
            <div key={index} className="p-2 my-2 bg-white">
              Dropped {item.type}
            </div>
          ))}
        </CanvasArea>
        <PropertyEditor selected={true} properties={headerProps} onChange={handlePropertyChange} />
        <aside>
          <ToolTipReal />
        </aside>
      </div>
    </DndContext>
  );
};

export default Canvas;