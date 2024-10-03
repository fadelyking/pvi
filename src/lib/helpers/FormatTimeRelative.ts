export function FormatTimeRelative(date: Date): string {
	const now = new Date();

	const diff = now.valueOf() - date.valueOf();

	const units = ["year", "month", "week", "day", "hour", "minute"];
	const thresholds = [31536000000, 2592000000, 604800000, 86400000, 3600000, 60000];

	for (let i = 0; i < units.length; i++) {
		if (diff >= thresholds[i]) {
			const interval = Math.floor(diff / thresholds[i]);

			const suffix = interval === 1 ? "" : "s";

			return `${interval} ${units[i]}${suffix} ago`;
		}
	}

	// If the difference is less than a minute, return 'just now'
	return "just now";
}