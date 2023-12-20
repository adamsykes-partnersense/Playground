import { ReactNode } from "react";
import { Slot, SlotProps } from "@radix-ui/react-slot";
import { cn } from "@/src/lib/utils";

export const Container = ({ asChild, className, ...props }: { asChild?: boolean } & SlotProps) => {
	const Component = asChild ? Slot : "div";

	return <Component {...props} className={cn("mx-auto box-content max-w-7xl px-4", className)} />;
};
