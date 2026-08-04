interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary";
}

export default function Button({
  text,
  variant = "primary",
}: ButtonProps) {
  const baseStyle =
    "rounded-lg px-6 py-3 font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-blue-700 text-white hover:bg-blue-800",
    secondary:
      "border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white",
  };

  return (
    <button className={`${baseStyle} ${styles[variant]}`}>
      {text}
    </button>
  );
}