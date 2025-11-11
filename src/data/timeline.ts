// Timeline data configuration file
// Used to manage data for the timeline page

export interface TimelineItem {
	id: string;
	title: string;
	description: string;
	type: "education" | "work" | "project" | "achievement";
	startDate: string;
	endDate?: string; // If empty, it means current
	location?: string;
	organization?: string;
	position?: string;
	skills?: string[];
	achievements?: string[];
	links?: {
		name: string;
		url: string;
		type: "website" | "certificate" | "project" | "other";
	}[];
	icon?: string; // Iconify icon name
	color?: string;
	featured?: boolean;
}

export const timelineData: TimelineItem[] = [
	{
		id: "current-study",
		title: "学习计算机科学与技术",
		description:
			"目前正在学习计算机科学与技术，专注于 Web 开发和软件工程。",
		type: "education",
		startDate: "2022-09-01",
		location: "Beijing",
		organization: "Beijing Institute of Technology",
		skills: ["Java", "Python", "JavaScript", "HTML/CSS", "MySQL"],
		achievements: [
			"当前 GPA: 3.6/4.0",
			"完成了数据结构和算法课程项目",
			"参与了多个课程项目开发",
		],
		icon: "material-symbols:school",
		color: "#059669",
		featured: true,
	},
	{
		id: "mizuki-blog-project",
		title: "Mizuki 个人博客项目",
		description:
			"使用 Astro 框架开发的个人博客网站，作为学习前端技术的实践项目。",
		type: "project",
		startDate: "2024-06-01",
		endDate: "2024-08-01",
		skills: ["Astro", "TypeScript", "Tailwind CSS", "Git"],
		achievements: [
			"掌握了现代前端开发技术栈",
			"学习了响应式设计和用户体验优化",
			"完成了从设计到部署的完整流程",
		],
		links: [
			{
				name: "GitHub 仓库",
				url: "https://github.com/captain-ht/Mizuki",
				type: "project",
			},
			{
				name: "在线演示",
				url: "https://mizuki-demo.example.com",
				type: "website",
			},
		],
		icon: "material-symbols:code",
		color: "#7C3AED",
		featured: true,
	},
	{
		id: "summer-internship-2024",
		title: "前端开发实习生",
		description:
			"在互联网公司进行暑期实习，参与 Web 应用的前端开发工作。",
		type: "work",
		startDate: "2024-07-01",
		endDate: "2024-08-31",
		location: "Beijing",
		organization: "TechStart Internet Company",
		position: "Frontend Development Intern",
		skills: ["React", "JavaScript", "CSS3", "Git", "Figma"],
		achievements: [
			"完成了用户界面组件开发",
			"学习了团队协作和代码规范",
			"获得了优秀实习生表现证书",
		],
		icon: "material-symbols:work",
		color: "#DC2626",
		featured: true,
	},
	{
		id: "web-development-course",
		title: "完成 Web 开发在线课程",
		description:
			"完成了全栈 Web 开发在线课程，系统学习了前端和后端开发技术。",
		type: "achievement",
		startDate: "2024-01-15",
		endDate: "2024-05-30",
		organization: "Mooc Website",
		skills: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
		achievements: [
			"获得了课程结业证书",
			"完成了 5 个实践项目",
			"掌握了全栈开发基础知识",
		],
		links: [
			{
				name: "课程证书",
				url: "https://certificates.example.com/web-dev",
				type: "certificate",
			},
		],
		icon: "material-symbols:verified",
		color: "#059669",
	},
	{
		id: "student-management-system",
		title: "学生管理系统课程项目",
		description:
			"数据库课程的期末项目，开发了一个完整的学生信息管理系统。",
		type: "project",
		startDate: "2023-11-01",
		endDate: "2023-12-15",
		skills: ["Java", "MySQL", "Swing", "JDBC"],
		achievements: [
			"获得了优秀的课程项目成绩",
			"实现了完整的 CRUD 功能",
			"学习了数据库设计和优化",
		],
		icon: "material-symbols:database",
		color: "#EA580C",
	},
	{
		id: "programming-contest",
		title: "大学编程竞赛",
		description:
			"参加了学校举办的编程竞赛，提升了算法和编程技能。",
		type: "achievement",
		startDate: "2023-10-20",
		location: "Beijing Institute of Technology",
		organization: "School of Computer Science",
		skills: ["C++", "Algorithms", "Data Structures"],
		achievements: [
			"获得了校级竞赛三等奖",
			"提升了算法思维能力",
			"加强了编程基础",
		],
		icon: "material-symbols:emoji-events",
		color: "#7C3AED",
	},
	{
		id: "part-time-tutor",
		title: "兼职编程导师",
		description:
			"为高中生提供编程辅导，帮助他们学习 Python 基础知识。",
		type: "work",
		startDate: "2023-09-01",
		endDate: "2024-01-31",
		position: "Programming Tutor",
		skills: ["Python", "Teaching", "Communication"],
		achievements: [
			"帮助 3 名学生掌握了 Python 基础知识",
			"提升了表达和沟通能力",
			"获得了教学经验",
		],
		icon: "material-symbols:school",
		color: "#059669",
	},
	{
		id: "high-school-graduation",
		title: "高中毕业",
		description:
			"以优异的成绩从高中毕业，被北京理工大学计算机科学与技术专业录取。",
		type: "education",
		startDate: "2019-09-01",
		endDate: "2022-06-30",
		location: "Jinan, Shandong",
		organization: "No.1 High School of Jinan",
		achievements: [
			"高考成绩：620 分",
			"获得了市级三好学生称号",
			"获得了省级数学竞赛二等奖",
		],
		icon: "material-symbols:school",
		color: "#2563EB",
	},
	{
		id: "first-programming-experience",
		title: "第一次编程经历",
		description:
			"在高中信息技术课上第一次接触编程，开始学习 Python 基础语法。",
		type: "education",
		startDate: "2021-03-01",
		skills: ["Python", "Basic Programming Concepts"],
		achievements: [
			'完成了第一个 "Hello World" 程序',
			"学习了基本的循环和条件语句",
			"培养了对编程的兴趣",
		],
		icon: "material-symbols:code",
		color: "#7C3AED",
	},

];

// Get timeline statistics
export const getTimelineStats = () => {
	const total = timelineData.length;
	const byType = {
		education: timelineData.filter((item) => item.type === "education").length,
		work: timelineData.filter((item) => item.type === "work").length,
		project: timelineData.filter((item) => item.type === "project").length,
		achievement: timelineData.filter((item) => item.type === "achievement")
			.length,
	};

	return { total, byType };
};

// Get timeline items by type
export const getTimelineByType = (type?: string) => {
	if (!type || type === "all") {
		return timelineData.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
	}
	return timelineData
		.filter((item) => item.type === type)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
};

// Get featured timeline items
export const getFeaturedTimeline = () => {
	return timelineData
		.filter((item) => item.featured)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
};

// Get current ongoing items
export const getCurrentItems = () => {
	return timelineData.filter((item) => !item.endDate);
};

// Calculate total work experience
export const getTotalWorkExperience = () => {
	const workItems = timelineData.filter((item) => item.type === "work");
	let totalMonths = 0;

	workItems.forEach((item) => {
		const startDate = new Date(item.startDate);
		const endDate = item.endDate ? new Date(item.endDate) : new Date();
		const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
		const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
		totalMonths += diffMonths;
	});

	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
