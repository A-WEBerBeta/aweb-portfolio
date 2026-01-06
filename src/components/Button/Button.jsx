import styles from "./Button.module.css";

export default function Button({
  href,
  children,
  variant = "primary",
  ...props
}) {
  return (
    <a href={href} className={`${styles.button} ${styles[variant]}`} {...props}>
      {children}
    </a>
  );
}
