type ButtonProps = {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
};

const Button = ({
  text,
  onClick,
  variant = 'primary'
}: ButtonProps) => {
  return (
    <button
      className={`btn ${variant}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
