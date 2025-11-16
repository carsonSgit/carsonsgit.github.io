import type React from "react";
import { useCallback, useEffect, useRef } from "react";
import type { FoodTile, SnakeSegment } from "../../types/types";
import { findPath } from "../../utils/astar";

interface SnakeGameProps {
	isActive: boolean;
	onSnakeUpdate: (snake: SnakeSegment[], food: FoodTile[]) => void;
}

const GRID_SIZE = 100;
const MOVE_INTERVAL = 250;
const INITIAL_LENGTH = 5;
const MAX_LENGTH = 8;
const FOOD_COUNT = 1;
const FOOD_SPAWN_RADIUS = 5;
const BOUNCE_COOLDOWN = 300;
const MAX_SPAWN_ATTEMPTS = 200;

const COLOR_PALETTE = [
	"rgba(50, 206, 162, 0.35)",
	"rgba(95, 204, 45, 0.35)",
	"rgba(24, 167, 95, 0.35)",
	"rgba(35, 114, 84, 0.35)",
	"rgba(68, 172, 108, 0.35)",
];

const DIRECTIONS = [
	{ x: GRID_SIZE, y: 0 },
	{ x: -GRID_SIZE, y: 0 },
	{ x: 0, y: -GRID_SIZE },
	{ x: 0, y: GRID_SIZE },
];

const getViewportDimensions = () => ({
	width: Math.floor(window.innerWidth / GRID_SIZE) * GRID_SIZE,
	height: Math.floor(window.innerHeight / GRID_SIZE) * GRID_SIZE,
});

const getRandomColor = () => {
	const base = COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)];
	const alpha = 0.32 + Math.random() * 0.3;
	return base.replace("0.35", alpha.toFixed(2));
};

const manhattanDistance = (x1: number, y1: number, x2: number, y2: number) =>
	Math.abs(x1 - x2) + Math.abs(y1 - y2);

const makeKey = (x: number, y: number) => `${x},${y}`;

const SnakeGame: React.FC<SnakeGameProps> = ({ isActive, onSnakeUpdate }) => {
	const snakeRef = useRef<SnakeSegment[]>([]);
	const foodRef = useRef<FoodTile[]>([]);
	const directionRef = useRef({ x: GRID_SIZE, y: 0 });
	const pathRef = useRef<SnakeSegment[]>([]);
	const gameLoopRef = useRef<NodeJS.Timeout | null>(null);
	const lastBounceRef = useRef(0);
	const mouseRef = useRef({
		x: typeof window !== "undefined" ? window.innerWidth / 2 : 800,
		y: typeof window !== "undefined" ? window.innerHeight / 2 : 600,
	});

	const spawnFood = useCallback(
		(count: number, snake: SnakeSegment[]) => {
			const { width, height } = getViewportDimensions();
			const occupied = new Set(snake.map((s) => makeKey(s.x, s.y)));
			const cursorX = Math.floor(mouseRef.current.x / GRID_SIZE) * GRID_SIZE;
			const cursorY = Math.floor(mouseRef.current.y / GRID_SIZE) * GRID_SIZE;

			const newFood: FoodTile[] = [];
			let attempts = 0;

			while (newFood.length < count && attempts < MAX_SPAWN_ATTEMPTS) {
				attempts++;
				const offsetX =
					(Math.floor(Math.random() * (FOOD_SPAWN_RADIUS * 2 + 1)) -
						FOOD_SPAWN_RADIUS) *
					GRID_SIZE;
				const offsetY =
					(Math.floor(Math.random() * (FOOD_SPAWN_RADIUS * 2 + 1)) -
						FOOD_SPAWN_RADIUS) *
					GRID_SIZE;

				let x = cursorX + offsetX;
				let y = cursorY + offsetY;

				x = Math.max(0, Math.min(x, width - GRID_SIZE));
				y = Math.max(0, Math.min(y, height - GRID_SIZE));

				x = Math.round(x / GRID_SIZE) * GRID_SIZE;
				y = Math.round(y / GRID_SIZE) * GRID_SIZE;

				const key = makeKey(x, y);

				if (!occupied.has(key)) {
					newFood.push({ x, y });
					occupied.add(key);
				}
			}

			foodRef.current = newFood;
			onSnakeUpdate(snakeRef.current, newFood);
		},
		[onSnakeUpdate],
	);

	const initializeGame = useCallback(() => {
		const { width, height } = getViewportDimensions();
		const centerX = Math.floor(width / 2 / GRID_SIZE) * GRID_SIZE;
		const centerY = Math.floor(height / 2 / GRID_SIZE) * GRID_SIZE;

		const initialSnake = Array.from({ length: INITIAL_LENGTH }, (_, i) => ({
			x: centerX - i * GRID_SIZE,
			y: centerY,
			color: getRandomColor(),
		}));

		snakeRef.current = initialSnake;
		directionRef.current = { x: GRID_SIZE, y: 0 };
		pathRef.current = [];
		spawnFood(FOOD_COUNT, initialSnake);
	}, [spawnFood]);

	const findNearestFood = useCallback((head: SnakeSegment): FoodTile | null => {
		const food = foodRef.current;
		if (food.length === 0) return null;

		return food.reduce((nearest, current) => {
			const nearestDist = manhattanDistance(
				head.x,
				head.y,
				nearest.x,
				nearest.y,
			);
			const currentDist = manhattanDistance(
				head.x,
				head.y,
				current.x,
				current.y,
			);
			return currentDist < nearestDist ? current : nearest;
		});
	}, []);

	const checkFoodCollision = useCallback(
		(x: number, y: number): boolean => {
			const foodKey = makeKey(x, y);
			const foodIndex = foodRef.current.findIndex(
				(f) => makeKey(f.x, f.y) === foodKey,
			);

			if (foodIndex === -1) return false;

			foodRef.current = foodRef.current.filter((_, i) => i !== foodIndex);
			spawnFood(1, snakeRef.current);
			return true;
		},
		[spawnFood],
	);

	const findSafeMove = useCallback(
		(
			head: SnakeSegment,
			snakeSet: Set<string>,
			targetFood: FoodTile | null,
		) => {
			const { width, height } = getViewportDimensions();

			const safeMoves = DIRECTIONS.map((dir) => ({
				x: head.x + dir.x,
				y: head.y + dir.y,
			}))
				.filter(
					(pos) =>
						pos.x >= 0 &&
						pos.x < width &&
						pos.y >= 0 &&
						pos.y < height &&
						!snakeSet.has(makeKey(pos.x, pos.y)),
				)
				.map((pos) => ({
					...pos,
					score: targetFood
						? -manhattanDistance(pos.x, pos.y, targetFood.x, targetFood.y)
						: 0,
				}));

			return safeMoves.length > 0
				? safeMoves.sort((a, b) => b.score - a.score)[0]
				: null;
		},
		[],
	);

	const handleBoundaryBounce = useCallback((x: number, y: number) => {
		const { width, height } = getViewportDimensions();
		const now = Date.now();

		if (now - lastBounceRef.current < BOUNCE_COOLDOWN) {
			return { x, y };
		}

		const adjusted = { x, y };
		let bounced = false;

		if (x < 0 || x >= width) {
			directionRef.current.x *= -1;
			adjusted.x = x < 0 ? 0 : width - GRID_SIZE;
			bounced = true;
		}

		if (y < 0 || y >= height) {
			directionRef.current.y *= -1;
			adjusted.y = y < 0 ? 0 : height - GRID_SIZE;
			bounced = true;
		}

		if (bounced) {
			pathRef.current = [];
			lastBounceRef.current = now;
		}

		return adjusted;
	}, []);

	const gameLoop = useCallback(() => {
		const snake = snakeRef.current;
		if (snake.length === 0) return;

		const head = snake[0];
		const { width, height } = getViewportDimensions();
		const targetFood = findNearestFood(head);

		if (pathRef.current.length === 0 && targetFood) {
			const obstacles = snake.slice(1).map((s) => ({ x: s.x, y: s.y }));
			pathRef.current = findPath(
				head,
				targetFood,
				GRID_SIZE,
				width,
				height,
				obstacles,
			);
		}

		let newX = head.x;
		let newY = head.y;

		if (pathRef.current.length > 0) {
			const next = pathRef.current.shift() as SnakeSegment | undefined;
			if (!next) return;
			newX = next.x;
			newY = next.y;
		} else {
			newX += directionRef.current.x;
			newY += directionRef.current.y;
		}

		newX = Math.round(newX / GRID_SIZE) * GRID_SIZE;
		newY = Math.round(newY / GRID_SIZE) * GRID_SIZE;

		const bounced = handleBoundaryBounce(newX, newY);
		newX = bounced.x;
		newY = bounced.y;

		const snakeSet = new Set(snake.map((s) => makeKey(s.x, s.y)));

		if (snakeSet.has(makeKey(newX, newY))) {
			pathRef.current = [];
			const safeMove = findSafeMove(head, snakeSet, targetFood);
			if (!safeMove) return;
			newX = safeMove.x;
			newY = safeMove.y;
		}

		const ateFood = checkFoodCollision(newX, newY);
		const newSnake = [{ x: newX, y: newY, color: getRandomColor() }, ...snake];

		if (!ateFood) newSnake.pop();
		while (newSnake.length > MAX_LENGTH) newSnake.pop();

		snakeRef.current = newSnake;
		onSnakeUpdate(newSnake, foodRef.current);
	}, [
		findNearestFood,
		findSafeMove,
		checkFoodCollision,
		handleBoundaryBounce,
		onSnakeUpdate,
	]);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			mouseRef.current = { x: e.pageX, y: e.pageY };
		};

		window.addEventListener("mousemove", handleMouseMove, { passive: true });
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	useEffect(() => {
		if (isActive) {
			initializeGame();
			gameLoopRef.current = setInterval(gameLoop, MOVE_INTERVAL);
		} else {
			if (gameLoopRef.current) {
				clearInterval(gameLoopRef.current);
				gameLoopRef.current = null;
			}
			snakeRef.current = [];
			foodRef.current = [];
			pathRef.current = [];
			onSnakeUpdate([], []);
		}

		return () => {
			if (gameLoopRef.current) clearInterval(gameLoopRef.current);
		};
	}, [isActive, initializeGame, gameLoop, onSnakeUpdate]);

	return null;
};

export default SnakeGame;
