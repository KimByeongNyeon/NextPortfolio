import ProjectsClient from './ProjectsClient';

export default function ProjectsPage() {
  const projects = [
    {
      title: "개발자 포트폴리오",
      description: "Next.js와 Tailwind CSS를 활용한 개인 포트폴리오 웹사이트입니다.",
      image: "/projects/portfolio.jpg",
      tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/username/portfolio",
      demo: "https://portfolio.example.com",
      codeSnippet: `const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto"
    >
      <h1>Welcome to my portfolio</h1>
    </motion.div>
  );
};`
    },
    {
      title: "쇼핑몰 플랫폼",
      description: "React와 Node.js로 구축한 풀스택 이커머스 플랫폼입니다.",
      image: "/projects/ecommerce.jpg",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/username/ecommerce",
      demo: "https://shop.example.com",
      codeSnippet: `// Product API
router.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});`
    },
    {
      title: "날씨 앱",
      description: "React Native로 개발한 모바일 날씨 애플리케이션입니다.",
      image: "/projects/weather.jpg",
      tags: ["React Native", "JavaScript", "API Integration"],
      github: "https://github.com/username/weather-app",
      demo: null,
      codeSnippet: `const fetchWeather = async (city) => {
  const API_KEY = process.env.WEATHER_API_KEY;
  const url = \`https://api.weather.com/data/\${city}?key=\${API_KEY}\`;
  
  const response = await fetch(url);
  const data = await response.json();
  return data;
};`
    }
  ];

  return <ProjectsClient projects={projects} />;
} 