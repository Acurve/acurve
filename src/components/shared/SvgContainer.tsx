import { cn } from "@/lib/utils";
import { forwardRef, useImperativeHandle, useRef } from "react";

export interface SvgContainerProps {
  className?: string;
  children: React.ReactNode;
  gridArea?: string;
  text?: string
}

export interface SvgContainerHandle {
  setActive: (active: boolean) => void;
  getDomNode: () => HTMLDivElement | null;
}


const SvgContainer = forwardRef<SvgContainerHandle, SvgContainerProps>(({ className = "", children, gridArea = "", text = "" }, ref) => {

  const svgContainerOuterRef = useRef<HTMLDivElement>(null)
  const svgContainerInnerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)


  const outerActiveClassNameList = ["border-transparent", "bg-foreground-lighter", "scale-110", "text-blue-500"]
  const outerInActiveClassNameList = ["border-muted", "bg-background", "text-muted"]


  const setActive = (active: boolean) => {
    const outer = svgContainerOuterRef.current
    const inner = svgContainerInnerRef.current
    const text = textRef.current

    if (active) {
      outer?.classList.add(...outerActiveClassNameList)
      outer?.classList.remove(...outerInActiveClassNameList)
      inner?.classList.add("-translate-y-2")
      text?.classList.add("translate-y-0")
      text?.classList.remove("translate-y-6")
    }
    else {
      outer?.classList.remove(...outerActiveClassNameList)
      outer?.classList.add(...outerInActiveClassNameList)
      inner?.classList.remove("-translate-y-2")
      text?.classList.remove("translate-y-0")
      text?.classList.add("translate-y-6")
    }
  }

  useImperativeHandle(ref, () => ({
    setActive,
    getDomNode: () => svgContainerOuterRef.current
  }))


  return (
    <div

      ref={svgContainerOuterRef}
      style={{ gridArea }}
      className={cn(`flex relative items-center justify-center rounded-lg shadow-lg text-muted border border-muted z-10  text-center hover:bg-foreground-lighter hover:text-blue-500 hover:scale-110 transition-all duration-700 group/svg-container overflow-hidden bg-background
        hover:shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),0_6.7px_5.3px_rgba(0,0,0,0.048),0_12.5px_10px_rgba(0,0,0,0.06),0_22.3px_17.9px_rgba(0,0,0,0.072),0_41.8px_33.4px_rgba(0,0,0,0.086),0_100px_80px_rgba(0,0,0,0.12)] 
        `,
        className,
      )}
    >
      <div
        ref={svgContainerInnerRef}
        className={cn(
          "group-hover/svg-container:-translate-y-2 transition-all duration-700",
        )}>


        {children}
      </div>
      <span
        ref={textRef}
        className={cn(
          "absolute bottom-0 translate-y-6 group-hover/svg-container:translate-y-0 transition-all duration-700 xl:text-sm text-xs text-secondary!",
        )}>
        {text}
      </span>
    </div>
  );
});

export default SvgContainer