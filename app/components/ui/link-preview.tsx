"use client";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import {
	AnimatePresence,
	motion,
	useMotionValue,
	useSpring,
} from "motion/react";
import Image from "next/image";
import { encode } from "qss";
import React from "react";
import { cn } from "@/lib/utils";

type LinkPreviewProps = {
	children: React.ReactNode;
	url: string;
	className?: string;
	width?: number;
	height?: number;
	quality?: number;
	layout?: string;
} & (
	| { isStatic: true; imageSrc: string }
	| { isStatic?: false; imageSrc?: never }
);

export const LinkPreview = ({
	children,
	url,
	className,
	width = 200,
	height = 125,
	isStatic = false,
	imageSrc = "",
}: LinkPreviewProps) => {
	let src: string;
	if (!isStatic) {
		const params = encode({
			url,
			screenshot: true,
			meta: false,
			embed: "screenshot.url",
			colorScheme: "dark",
			"viewport.isMobile": true,
			"viewport.deviceScaleFactor": 1,
			"viewport.width": width * 3,
			"viewport.height": height * 3,
		});
		src = `https://api.microlink.io/?${params}`;
	} else {
		src = imageSrc;
	}

	const [isOpen, setOpen] = React.useState(false);

	const [_isMounted, setIsMounted] = React.useState(false);

	const previewRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		setIsMounted(true);
	}, []);

	const springConfig = { stiffness: 100, damping: 15 };
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const translateX = useSpring(x, springConfig);
	const translateY = useSpring(y, springConfig);

	const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
		const targetRect = (event.target as HTMLElement).getBoundingClientRect();
		const eventOffsetX = event.clientX - targetRect.left - targetRect.width / 2;
		const eventOffsetY =
			event.clientY - targetRect.top - targetRect.height / 2.5;
		let offsetFromCenterX = (eventOffsetX - targetRect.width) / 3;
		let offsetFromCenterY = eventOffsetY - targetRect.height / 2;

		const rightColumn = (event.target as HTMLElement).closest(".right-column");

		if (rightColumn && previewRef.current) {
			const containerRect = rightColumn.getBoundingClientRect();
			const previewRect = previewRef.current.getBoundingClientRect();

			const previewCenterX = previewRect.left + previewRect.width / 2;
			const previewCenterY = previewRect.top + previewRect.height / 2;

			const maxOffsetRight =
				containerRect.right - previewCenterX - previewRect.width / 2;

			const maxOffsetDown =
				targetRect.top - previewCenterY - previewRect.height / 2;

			offsetFromCenterX = Math.min(maxOffsetRight, offsetFromCenterX);

			offsetFromCenterY = Math.min(maxOffsetDown, offsetFromCenterY);
		}

		x.set(offsetFromCenterX);
		y.set(offsetFromCenterY);
	};

	return (
		<HoverCardPrimitive.Root
			openDelay={50}
			closeDelay={100}
			onOpenChange={(open) => {
				setOpen(open);
			}}
		>
			<HoverCardPrimitive.Trigger
				onMouseMove={handleMouseMove}
				className={cn("text-black dark:text-white", className)}
				href={url}
				target="_blank"
				rel="noopener noreferrer"
			>
				{children}
			</HoverCardPrimitive.Trigger>

			<HoverCardPrimitive.Portal>
				<HoverCardPrimitive.Content
					className="[transform-origin:var(--radix-hover-card-content-transform-origin)]"
					side="top"
					align="center"
					sideOffset={10}
				>
					<AnimatePresence>
						{isOpen && (
							<motion.div
								ref={previewRef}
								initial={{ opacity: 0, scale: 0.6 }}
								animate={{
									opacity: 1,
									scale: 1,
									transition: {
										type: "spring",
										stiffness: 260,
										damping: 20,
									},
								}}
								exit={{ opacity: 0, scale: 0.6 }}
								className="shadow-xl rounded-xl"
								style={{
									x: translateX,
									y: translateY,
								}}
							>
								<a
									href={url}
									target="_blank"
									rel="noopener noreferrer"
									className="block p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800"
									style={{ fontSize: 0 }}
								>
									<Image
										src={isStatic ? imageSrc : src}
										width={width as number}
										height={height as number}
										className="rounded-lg"
										alt="Website Preview"
									/>
								</a>
							</motion.div>
						)}
					</AnimatePresence>
				</HoverCardPrimitive.Content>
			</HoverCardPrimitive.Portal>
		</HoverCardPrimitive.Root>
	);
};
