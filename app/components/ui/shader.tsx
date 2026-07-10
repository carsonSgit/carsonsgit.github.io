/** @paper-design/shaders-react@0.0.71 */
"use client";

import {
	Dithering,
	PaperTexture,
	SmokeRing,
} from "@paper-design/shaders-react";
import { useEffect, useState } from "react";

/**
 * from Paper
 * https://app.paper.design/file/01KH5DKX071KRK2BHJDB7FSEKQ?page=01KH5DKX07GSEX3MFQKGWT4X27&node=01KH5DM2G6WE24XCK04RJRYE6V
 * on Feb 11, 2026
 */
type ShaderProps = {
	className?: string;
};

export default function Shader({ className }: ShaderProps) {
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		let isMounted = true;
		let secondFrame = 0;
		const firstFrame = globalThis.requestAnimationFrame(() => {
			secondFrame = globalThis.requestAnimationFrame(() => {
				if (isMounted) {
					setIsReady(true);
				}
			});
		});

		return () => {
			isMounted = false;
			globalThis.cancelAnimationFrame(firstFrame);
			if (secondFrame) {
				globalThis.cancelAnimationFrame(secondFrame);
			}
		};
	}, []);

	return (
		<div
			className={`shader-stack ${className ?? ""}`}
			data-ready={isReady ? "true" : "false"}
		>
			<div className="shader-stack__fallback" aria-hidden="true" />
			<div className="shader-stack__live" aria-hidden="true">
				<Dithering
					speed={0.08}
					shape="warp"
					type="2x2"
					size={1.3}
					scale={0.28}
					frame={82692.5619999984}
					colorBack="#00000000"
					colorFront="#305C3FCC"
					className="shader-stack__layer shader-stack__layer--dark"
				/>
				<SmokeRing
					speed={0.32}
					scale={0.88}
					thickness={0.17}
					radius={1}
					innerShape={0.31}
					noiseScale={2.27}
					noiseIterations={3}
					offsetX={0.35}
					offsetY={-0.12}
					frame={4659.999999999622}
					colors={["#FFFFFF80"]}
					colorBack="#00000000"
					className="shader-stack__layer"
				/>
				<Dithering
					speed={0.08}
					shape="warp"
					type="4x4"
					size={1.3}
					scale={0.57}
					frame={82692.5619999984}
					colorBack="#00000000"
					colorFront="#3A5B37CC"
					className="shader-stack__layer shader-stack__layer--light"
				/>
				<PaperTexture
					contrast={0.3}
					roughness={0.4}
					fiber={0.72}
					fiberSize={0.3}
					crumples={0.28}
					crumpleSize={0.58}
					folds={0}
					foldCount={5}
					fade={0}
					drops={0.2}
					seed={5.8}
					scale={1}
					fit="cover"
					colorBack="#00000000"
					colorFront="#21914B"
					className="shader-stack__layer shader-stack__layer--paper"
				/>
			</div>
		</div>
	);
}
