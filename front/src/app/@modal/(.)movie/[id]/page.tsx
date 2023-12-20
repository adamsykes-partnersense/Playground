"use client";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle
} from "@/src/components/ui/dialog";
import { useRouter } from "next/navigation";

export default function MovieDetailsModal() {
	const router = useRouter();
	// await new Promise((resolve) => setTimeout(resolve, 1000));

	return (
		<Dialog
			defaultOpen
			onOpenChange={(open) => {
				if (!open) router.back();
			}}
		>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Are you sure absolutely sure?</DialogTitle>
					<DialogDescription>A movie</DialogDescription>
				</DialogHeader>
				<button type="button" onClick={() => window.location.reload()}>
					Read more
				</button>
			</DialogContent>
		</Dialog>
	);
}
