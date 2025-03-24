export default function Modal({ id, header, body, footer, isVisible }) {
    return (
      <div
        className={`w-1/4 h-36 bg-amber-50 rounded-md shadow-md flex flex-col justify-between p-4 transition-all duration-700 hover:scale-110 absolute ${
          isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-lg font-semibold text-center text-gray-800">
          {header ? header : <p>This is our header</p>}
        </h3>
        <div className="h-1/2 py-3 flex items-center justify-center text-center text-gray-700 border-t border-b border-gray-200">
          {body ? body : <p>This is our body</p>}
        </div>
        <h3 className="text-sm text-center text-gray-600">
          {footer ? footer : <p>This is our footer</p>}
        </h3>
      </div>
    );
  }