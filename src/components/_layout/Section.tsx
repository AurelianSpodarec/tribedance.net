import { ReactNode, useId } from "react";

interface ISectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  size?: "clean" | "xs" | "sm" | "md" | "lg";
  colors?: "default" | "brand";
}

function Section({ id, className, style, children, color = "default", size = "md" }: ISectionProps) {
  let useID = useId()

  const colors:any = {
    default: "#0c1014",
    brand: "bg-[#8f4764]",
  }

  const sizes:any = {
    clean: "",
    xs: "py-8",
    sm: "py-16",
    md: "py-20",
    lg: "py-24",
    xl: "py-40"
  };

  return (
    <section aria-labelledby={useID} id={id} className={`${sizes[size]} ${colors[color]} relative z-10 ${className ? className : ""}`} style={style}>
      {children}
    </section>
  )
}

export default Section;
