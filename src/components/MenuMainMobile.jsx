import { createPortal } from 'react-dom';

function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-md w-3/4 max-w-xs text-center"
        onClick={(e) => e.stopPropagation()} // Prevent closing on inner click
      >
        <h2 className="text-lg font-semibold mb-4">Menu</h2>
        <ul className="space-y-2">
          <li><a href="#home" onClick={onClose}>Home</a></li>
          <li><a href="#about" onClick={onClose}>About</a></li>
          <li><a href="#contact" onClick={onClose}>Contact</a></li>
        </ul>
      </div>
    </div>,
    document.body
  );
}

export default MobileMenu;
