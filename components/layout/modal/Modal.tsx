import { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
}: ModalProps) {
  useEffect(() => {
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) {
      document.addEventListener("keydown", onEsc);
    }
    return () => document.removeEventListener("keydown", onEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-background mx-4 max-w-md w-full rounded-lg shadow-xl overflow-hidden">
        {/* Header */}
        <div className="px-4 py-3 bg-primary border-b border-border flex justify-between items-center">
          <h2 className="text-lg font-semibold text-primary-foreground truncate">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-primary-foreground hover:text-muted-foreground transition-all duration-300 ease-in-out"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-4 overflow-y-auto max-h-[60vh]">{children}</div>

        {/* Footer */}
        {footer && (
          <div className="px-4 py-3 bg-primary-foreground  border-t border-border">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}
