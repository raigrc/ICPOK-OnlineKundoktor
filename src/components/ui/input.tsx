import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, ...props }, ref) => {
    return (
      <div className="flex flex-col relative">
        <input
          type={type}
          className={cn(
            "flex h-10  border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          style={{ width: "100%" }}
          {...props}
        />
        {label && (
          <label className="absolute text-white top-4 left-3 -mt-2 px-1">
            {label}
          </label>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
