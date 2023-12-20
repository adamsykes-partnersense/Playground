import { ReactNode } from "react";
import { Slot, SlotProps } from "@radix-ui/react-slot";
import { cn } from "@/src/lib/utils";

export const Grid = ({ asChild, className, ...props }: { asChild?: boolean } & SlotProps) => {
	const Component = asChild ? Slot : "div";

	return (
		<Component
			{...props}
			className={cn(
				"grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
				className
			)}
		/>
	);
};
