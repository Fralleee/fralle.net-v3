"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import type * as React from "react";

import { cn } from "@/lib/utils";

function TooltipProvider({
	delayDuration = 0,
	...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
	return (
		<TooltipPrimitive.Provider
			data-slot="tooltip-provider"
			delayDuration={delayDuration}
			{...props}
		/>
	);
}

function Tooltip({
	...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
	return (
		<TooltipProvider>
			<TooltipPrimitive.Root data-slot="tooltip" {...props} />
		</TooltipProvider>
	);
}

function TooltipTrigger({
	...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
	return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipContent({
	className,
	sideOffset = 0,
	children,
	...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
	return (
		<TooltipPrimitive.Content
			className={cn(
				"TooltipContent z-50 w-fit origin-(--radix-tooltip-content-transform-origin) text-balance rounded-lg bg-slate-950 px-3 py-2 text-primary-foreground text-sm",
				className,
			)}
			data-slot="tooltip-content"
			sideOffset={sideOffset}
			{...props}
		>
			{children}
		</TooltipPrimitive.Content>
	);
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
