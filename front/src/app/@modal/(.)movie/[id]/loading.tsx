import {
	Dialog,
	DialogOverlay,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle
} from "@/src/components/ui/dialog";

export default function Loading() {
	return (
		<Dialog defaultOpen>
			<DialogOverlay />
		</Dialog>
	);
}
