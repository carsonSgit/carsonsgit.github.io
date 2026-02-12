import type * as React from "react";

const BASE_CLASSES =
	"inline-flex items-center justify-center rounded-lg border px-2 py-0.5 text-xs w-fit whitespace-nowrap shrink-0 gap-1 transition-[color,box-shadow] overflow-hidden duration-300 hover:cursor-default";

function Badge({ className, ...props }: React.ComponentProps<"span">) {
	return (
		<span
			data-slot="badge"
			className={className ? `${BASE_CLASSES} ${className}` : BASE_CLASSES}
			{...props}
		/>
	);
}

export { Badge };
