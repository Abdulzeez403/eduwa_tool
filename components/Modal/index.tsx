import React from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description: string;
  children: React.ReactNode;
  width?: string; // e.g., "max-w-lg", "max-w-xl"
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  width = "max-w-lg",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 bg-opacity-40 backdrop-blur-sm overflow-y-auto">
      <div
        className={`bg-white w-full ${width} max-h-[90vh] overflow-hidden rounded-xl shadow-lg relative p-6`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        {title && (
          <h2 className="text-lg font-semibold mb-1 text-center">{title}</h2>
        )}

        {description && (
          <h2 className="text-sm mb-4 text-center">{description}</h2>
        )}

        {/* Body: Scrollable Content */}
        <div className="overflow-y-auto max-h-[60vh] pr-2">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
