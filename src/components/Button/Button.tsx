import styles from './Button.module.css';

interface Props {
  children: string;
  color?: "primary" | "secondary" | "success";
  onClick: (name: string, state: boolean) => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button
      type="button"
      className={[styles.btn, styles['btn-' + color]].join(' ')}
      onClick={() => {
        onClick(children, true);
      }}
    >
      {children}
    </button>
  );
};

export default Button;
