


const PropertyEditor = ({ selected, properties, onChange }: any) => {
    if (!selected) return null;

    return (
        <div className="property-editor flex flex-col">
            <label className="flex flex-col text-white mb-3 gap-1">
                Background Color:
                <input type="color" value={properties.backgroundColor} onChange={(e) => onChange('backgroundColor', e.target.value)} />
            </label>
            <label className="flex flex-col text-white mb-3 gap-1">
                Text Color:
                <input type="color" value={properties.textColor} onChange={(e) => onChange('textColor', e.target.value)} />
            </label>
            <label className="flex flex-col text-white mb-3 gap-1">
                Font Size:
                <input type="number" value={properties.fontSize} onChange={(e) => onChange('fontSize', e.target.value)} />
            </label>
        </div>
    );
};

export default PropertyEditor;
