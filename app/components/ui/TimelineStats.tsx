import type React from "react";
import { getStatBorders } from "../../data/statistics";
import type { StatBadge, Statistics } from "../../types/types";
import { Badge } from "./badge";

interface TimelineStatsProps {
	statsKey: string;
	statistics: Statistics;
}

const TimelineStats: React.FC<TimelineStatsProps> = ({
	statsKey,
	statistics,
}) => {
	const statGroup = statistics[statsKey] as { stats: StatBadge[] } | undefined;
	if (!statGroup) return null;

	return (
		<div className="flex flex-row flex-wrap gap-2 justify-start items-center mt-2">
			{statGroup.stats.map((stat: StatBadge, index: number) => {
				const borderStyle = getStatBorders(stat.backgroundColour);
				return (
					<Badge
						key={`${stat.label}-${index}`}
						variant="default"
						className="text-xs text-gray-800 hover:cursor-default border"
						style={{
							backgroundColor: stat.backgroundColour,
							borderColor: borderStyle.borderColor,
							color: borderStyle.color,
						}}
					>
						<strong>{stat.value}</strong> {stat.label}
					</Badge>
				);
			})}
		</div>
	);
};

export default TimelineStats;
