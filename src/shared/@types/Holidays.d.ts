export type HolidayType = {
	date: string;
	localName: string;
	name: string;
	countryCode: string;
	fixed: boolean;
	global: boolean;
	counties?: string;
	launchYear: number | string;
	types: string[];
};

export type HolidaysType = HolidayType[];
