export { };

declare global {
	interface HTMLElementTagNameMap {
		"table-of-contents": HTMLElement & {
			init?: () => void;
		};
	}

	interface Window {
		// Define swup type directly since @swup/astro doesn't export AstroIntegration
		swup?: {
			hooks?: {
				on: (event: string, callback: () => void) => void;
			};
		};
		pagefind: {
			search: (query: string) => Promise<{
				results: Array<{
					data: () => Promise<SearchResult>;
				}>;
			}>;
		};

		mobileTOCInit?: () => void;
		closeAnnouncement?: () => void;
		resetAnnouncement?: () => void;
		diagnoseAnnouncement?: () => {
			isClosed: boolean;
			widgetLayoutRegistered: boolean;
			widgetLayoutFound: boolean;
			sidebarFound: boolean;
			topComponentsCount: number;
		};
	}
}

interface SearchResult {
	url: string;
	meta: {
		title: string;
	};
	excerpt: string;
	content?: string;
	word_count?: number;
	filters?: Record<string, unknown>;
	anchors?: Array<{
		element: string;
		id: string;
		text: string;
		location: number;
	}>;
	weighted_locations?: Array<{
		weight: number;
		balanced_score: number;
		location: number;
	}>;
	locations?: number[];
	raw_content?: string;
	raw_url?: string;
	sub_results?: SearchResult[];
}
