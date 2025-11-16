import type { SnakeSegment } from "../types/types";

interface Node {
	x: number;
	y: number;
	g: number;
	h: number;
	f: number;
	parent: Node | null;
}

interface Position {
	x: number;
	y: number;
}

const manhattanDistance = (
	x1: number,
	y1: number,
	x2: number,
	y2: number,
): number => Math.abs(x1 - x2) + Math.abs(y1 - y2);

const makeKey = (x: number, y: number): string => `${x},${y}`;

export const findPath = (
	start: Position,
	goal: Position,
	gridSize: number,
	viewportWidth: number,
	viewportHeight: number,
	obstacles: Position[] = [],
): SnakeSegment[] => {
	if (start.x === goal.x && start.y === goal.y) return [];

	const obstacleSet = new Set(obstacles.map((o) => makeKey(o.x, o.y)));
	const openList: Node[] = [];
	const closedSet = new Set<string>();
	const openSet = new Map<string, Node>();

	const startNode: Node = {
		x: start.x,
		y: start.y,
		g: 0,
		h: manhattanDistance(start.x, start.y, goal.x, goal.y),
		f: 0,
		parent: null,
	};
	startNode.f = startNode.g + startNode.h;

	openList.push(startNode);
	openSet.set(makeKey(startNode.x, startNode.y), startNode);

	const directions = [
		{ x: 0, y: -gridSize },
		{ x: 0, y: gridSize },
		{ x: -gridSize, y: 0 },
		{ x: gridSize, y: 0 },
	];

	const maxIterations = 1000;
	let iterations = 0;

	while (openList.length > 0 && iterations < maxIterations) {
		iterations++;
		openList.sort((a, b) => a.f - b.f);
		const current = openList.shift() as Node | undefined;
		if (!current) continue;
		const currentKey = makeKey(current.x, current.y);

		openSet.delete(currentKey);
		closedSet.add(currentKey);

		if (current.x === goal.x && current.y === goal.y) {
			const path: SnakeSegment[] = [];
			let node: Node | null = current;
			while (node !== null) {
				path.unshift({ x: node.x, y: node.y, color: "" });
				node = node.parent;
			}
			path.shift();
			return path;
		}

		for (const dir of directions) {
			const neighborX = current.x + dir.x;
			const neighborY = current.y + dir.y;

			if (
				neighborX < 0 ||
				neighborX >= viewportWidth ||
				neighborY < 0 ||
				neighborY >= viewportHeight
			)
				continue;

			const neighborKey = makeKey(neighborX, neighborY);

			if (closedSet.has(neighborKey) || obstacleSet.has(neighborKey)) continue;

			const g = current.g + gridSize;
			const h = manhattanDistance(neighborX, neighborY, goal.x, goal.y);
			const f = g + h;

			const existingNode = openSet.get(neighborKey);
			if (!existingNode || g < existingNode.g) {
				const neighbor: Node = {
					x: neighborX,
					y: neighborY,
					g,
					h,
					f,
					parent: current,
				};

				if (!existingNode) {
					openList.push(neighbor);
					openSet.set(neighborKey, neighbor);
				} else {
					existingNode.g = g;
					existingNode.f = f;
					existingNode.parent = current;
				}
			}
		}
	}

	const dx = goal.x - start.x;
	const dy = goal.y - start.y;

	if (Math.abs(dx) > Math.abs(dy)) {
		return [
			{ x: start.x + (dx > 0 ? gridSize : -gridSize), y: start.y, color: "" },
		];
	}
	return [
		{ x: start.x, y: start.y + (dy > 0 ? gridSize : -gridSize), color: "" },
	];
};
