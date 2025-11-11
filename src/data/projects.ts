// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	visitUrl?: string; // 添加前往项目链接字段
}

export const projectsData: Project[] = [
	{
		id: "mizuki-blog",
		title: "Mizuki Blog Theme",
		description:
			"基于 Astro 框架开发的现代博客主题，支持多语言、深色模式和响应式设计功能。",
		image: "",
		category: "web",
		techStack: ["Astro", "TypeScript", "Tailwind CSS", "Svelte"],
		status: "completed",
		liveDemo: "https://blog.example.com",
		sourceCode: "https://github.com/captain-ht/Mizuki", // 更改为GitHub链接
		visitUrl: "https://blog.example.com", // 添加前往项目链接
		startDate: "2024-01-01",
		endDate: "2024-06-01",
		featured: true,
		tags: ["博客", "主题", "开源"],
	},
	{
		id: "portfolio-website",
		title: "个人作品集",
		description:
			"展示项目经验和技术技能的个人作品集网站。",
		image: "",
		category: "web",
		techStack: ["React", "Next.js", "TypeScript", "Framer Motion"],
		status: "completed",
		liveDemo: "https://portfolio.example.com",
		sourceCode: "https://github.com/example/portfolio",
		visitUrl: "https://portfolio.example.com", // 添加前往项目链接
		startDate: "2023-09-01",
		endDate: "2023-12-01",
		featured: true,
		tags: ["作品集", "React", "动画"],
	},
	{
		id: "task-manager-app",
		title: "任务管理应用",
		description:
			"支持团队协作和项目管理的跨平台任务管理应用。",
		image: "",
		category: "mobile",
		techStack: ["React Native", "TypeScript", "Redux", "Firebase"],
		status: "in-progress",
		startDate: "2024-03-01",
		tags: ["移动应用", "生产力", "团队协作"],
	},
	{
		id: "data-visualization-tool",
		title: "数据可视化工具",
		description:
			"支持多种图表类型和交互式分析的数据可视化工具。",
		image: "",
		category: "web",
		techStack: ["Vue.js", "D3.js", "TypeScript", "Node.js"],
		status: "completed",
		liveDemo: "https://dataviz.example.com",
		visitUrl: "https://dataviz.example.com", // 添加前往项目链接
		startDate: "2023-06-01",
		endDate: "2023-11-01",
		tags: ["数据可视化", "分析", "图表"],
	},
	{
		id: "e-commerce-platform",
		title: "电商平台",
		description:
			"包含用户管理、产品管理和订单处理功能的全栈电商平台。",
		image: "",
		category: "web",
		techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
		status: "planned",
		startDate: "2024-07-01",
		tags: ["E-commerce", "Full Stack", "Payment Integration"],
	},
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter((p) => p.status === "completed").length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => {
			techSet.add(tech);
		});
	});
	return Array.from(techSet).sort();
};
