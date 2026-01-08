import styles from "./Button.module.css";

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const variantClass = styles[variant] ?? styles.primary;

  return (
    <a
      href={href}
      className={`${styles.button} ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
