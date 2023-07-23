import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: (name: string, state: boolean) => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible fade show">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={() => {
          onClose("dismiss", false);
        }}
      ></button>
    </div>
  );
};

export default Alert;
