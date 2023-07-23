interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: (name: string, state: boolean) => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button
      type="button"
      className={"btn btn-" + color}
      onClick={() => {
        onClick(children, true);
      }}
    >
      {children}
    </button>
  );
};

export default Button;
