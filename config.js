const DB = {
    hero: {
        name: "Seyed Mohammad Fakhri",
        role: "DevOps Engineer & Technical Support Specialist",
        intro: "I specialize in DevOps, infrastructure management, and product development with experience in workflow design, software tool development, and cloud service support. Passionate about lifelong learning and solving problems of all sizes.",
        location: "Qom, Iran",
        email: "mf0682073@gmail.com",
        phone: "09035095990",
        birthDate: "2006-01-19"
    },

    companies: [
        { name: "Amline", logo: "amline.png" },
        { name: "Jamshidbar", logo: "jamshidbar.png" },
        { name: "Afagh Kahkeshani", logo: "afagh.png" },
        { name: "Didafzar", logo: "didafzar.png" }
    ],

    experience: [
        {
            title: "DevOps Specialist & Technical Support",
            company: "Amline",
            period: "Apr 2025 - Present",
            current: true,
            icon: "⚙️",
            description: "Leading DevOps operations, workflow optimization, and infrastructure management for a digital real estate platform.",
            responsibilities: [
                "Design and improve user workflows",
                "Develop software tools and address technical needs",
                "Programming and debugging using AI tools (Cursor, Codex)",
                "Technical support for servers, VPN, and other services",
                "Infrastructure support and CI/CD for Amline product"
            ],
            tags: ["DevOps", "Python", "CI/CD", "Docker", "AI Tools", "Infrastructure"]
        },
        {
            title: "Social Media & Website Support",
            company: "Jamshidbar International Logistics Group",
            period: "Dec 2024 - Present",
            current: true,
            icon: "🌐",
            description: "Managing social media presence and providing IT support for an international logistics company.",
            responsibilities: [
                "Resolve IT issues for employees",
                "Social media management and engagement",
                "Website maintenance and updates"
            ],
            tags: ["IT Support", "Social Media", "Web Management"]
        },
        {
            title: "IT Supervisor",
            company: "Afagh Kahkeshani Javanan Fanavar",
            period: "Sep 2023 - Sep 2024",
            current: false,
            icon: "💼",
            description: "Led IT operations and team training for a technology innovation company.",
            responsibilities: [
                "IT management and support",
                "Team management and training"
            ],
            tags: ["IT Management", "Team Leadership", "Training"]
        },
        {
            title: "XR Researcher & Developer",
            company: "Afagh Kahkeshani Javanan Fanavar",
            period: "Dec 2022 - Sep 2024",
            current: false,
            icon: "🥽",
            description: "Developed virtual and augmented reality content using cutting-edge technologies.",
            responsibilities: [
                "VR/AR content production with Blender and Unity",
                "Research and development of innovative products",
                "Project management and team training"
            ],
            tags: ["Unity", "Blender", "VR", "AR", "XR", "3D Modeling"]
        },
        {
            title: "Network Intern",
            company: "Didafzar Tamim",
            period: "Jun 2021 - Sep 2021",
            current: false,
            icon: "🔧",
            description: "Gained hands-on experience in network operations and CCTV systems.",
            responsibilities: [
                "Assisted with various company projects",
                "Network troubleshooting and CCTV maintenance"
            ],
            tags: ["Networking", "CCTV", "Troubleshooting"]
        }
    ],

    projects: [
        {
            title: "Niavaran Palace Virtual Museum",
            period: "Jan 2023 - Oct 2023",
            icon: "🏛️",
            desc: "Virtual museum showcasing historical artifacts from Niavaran Palace, commissioned for display at a tourism exhibition in February 2023.",
            tags: ["Unity", "VR", "3D Modeling", "Cultural Heritage", "Exhibition"],
            link: "#"
        },
        {
            title: "AI Documentary Production",
            period: "Dec 2024 - Dec 2025",
            icon: "🎬",
            desc: "Multi-minute documentary created using Unreal Engine and AI services with photorealistic quality. Involved in production research, development, and problem-solving.",
            tags: ["Unreal Engine", "AI", "Documentary", "Research", "CGI"],
            link: "#"
        },
        {
            title: "Amline Channel Content Production",
            period: "Jan 2026 - May 2026",
            icon: "📱",
            desc: "Educational and promotional content creation for Amline's communication channel.",
            tags: ["Content Creation", "Marketing", "Design", "Social Media"],
            link: "https://eitaa.com/Amlinebime/508"
        }
    ],

    skills: {
        technical: [
            { name: "Python", level: 3, icon: "🐍" },
            { name: "Linux", level: 3, icon: "🐧" },
            { name: "Docker", level: 3, icon: "🐳" },
            { name: "Git", level: 4, icon: "📦" },
            { name: "Project Management", level: 4, icon: "📊" },
            { name: "Troubleshooting", level: 4, icon: "🔍" },
            { name: "CompTIA Network+", level: 3, icon: "🌐" },
            { name: "Agile", level: 4, icon: "⚡" }
        ],
        tools: [
            "Cursor", "Codex", "Unity", "Blender", "Unreal Engine", 
            "Docker", "Ansible", "CI/CD Tools", "Git", "Linux Tools"
        ],
        soft: [
            "AI-Assisted Programming",
            "Team Management & Training",
            "UX/UI Design",
            "Problem Solving",
            "Communication",
            "Research & Development"
        ]
    },

    education: [
        {
            title: "Comprehensive UX/UI & Product Design Course",
            institution: "Daneshjooyar - Hussein Aslani",
            period: "Jun 2025 - Oct 2025",
            desc: "90-hour specialized course covering UX-UI and product design fundamentals"
        },
        {
            title: "CompTIA Network+ Certification",
            institution: "Maktab Khaneh",
            period: ""
        },
        {
            title: "Python for Beginners",
            institution: "Jadi",
            period: ""
        },
        {
            title: "Git & GitHub Fundamentals",
            institution: "Jadi",
            period: ""
        },
        {
            title: "Networking for Programmers",
            institution: "Jadi",
            period: ""
        }
    ],

    achievements: [
        {
            title: "1st Place Provincial - Basij Digital Content Festival 2023",
            date: "Dec 2023",
            desc: "Team management and AI animation production process"
        }
    ],

    languages: [
        { name: "Persian", level: "Native" },
        { name: "English", level: "Intermediate" }
    ],

    blog: {
        posts: [
            {
                slug: "devops-journey",
                title: "My Journey into DevOps: From XR to Infrastructure",
                excerpt: "How I transitioned from virtual reality development to DevOps engineering and what I learned along the way.",
                date: "Aug 10, 2026",
                readTime: "5 min read",
                tags: ["DevOps", "Career", "Learning"],
                author: "Seyed Mohammad Fakhri",
                content: `
# My Journey into DevOps: From XR to Infrastructure

The transition from XR development to DevOps wasn't something I planned—it evolved naturally as I worked on increasingly complex projects.

## The Turning Point

While working on the Niavaran Palace VR museum project, I realized that understanding infrastructure was just as important as creating beautiful 3D environments. **The best content means nothing if it can't be deployed reliably.**

## What I Learned

### 1. Infrastructure as Code
Moving from Unity scripts to Docker configurations taught me the importance of reproducible environments. Every deployment should be identical, whether on my local machine or in production.

### 2. Automation is Key
The principles I learned in 3D animation—automation, scripting, and optimization—transferred beautifully to DevOps. Why manually deploy when you can automate?

### 3. Continuous Learning
The DevOps landscape changes rapidly. Tools like Docker, Kubernetes, and CI/CD pipelines require constant learning. But that's what makes it exciting.

## Tools I Use Daily

- **Python** for automation scripts
- **Docker** for containerization
- **Git** for version control
- **Linux** as my primary OS
- **AI tools** (Cursor, Codex) for faster development

## Advice for Others

If you're considering a similar transition:

1. Start with the basics—Linux, networking, Git
2. Build projects that combine your interests
3. Don't abandon your creative background—it's your superpower
4. Automate everything you can

> "The best DevOps engineers aren't just technical—they understand the full lifecycle of a product."

## Looking Forward

I'm excited to deepen my knowledge in:
- Kubernetes orchestration
- Infrastructure security
- Monitoring and observability
- Cloud-native architectures

The journey continues, and I'm here for it.
                `
            },
            {
                slug: "ai-tools-development",
                title: "How AI Tools Changed My Development Workflow",
                excerpt: "Exploring the impact of AI-assisted coding tools like Cursor and Codex on productivity and code quality.",
                date: "Aug 5, 2026",
                readTime: "7 min read",
                tags: ["AI", "Productivity", "Tools"],
                author: "Seyed Mohammad Fakhri",
                content: `
# How AI Tools Changed My Development Workflow

AI-assisted development tools have transformed how I write code. Here's my honest experience with Cursor and Codex.

## The Initial Skepticism

Like many developers, I was skeptical. "Can AI really understand my codebase?" "Won't it make me lazy?"

The answer surprised me.

## What AI Tools Excel At

### Code Completion
Not just autocomplete—intelligent suggestions based on context. It understands my patterns and project structure.

### Documentation
AI tools can generate comprehensive documentation faster than I can type. More importantly, they make documentation **enjoyable**.

### Refactoring
Suggesting cleaner patterns and identifying code smells has become collaborative instead of tedious.

## Real-World Impact

In my work at Amline, AI tools have:
- Reduced debugging time by ~40%
- Improved code documentation quality
- Accelerated learning of new libraries
- Made pair programming solo possible

## The Learning Curve

\`\`\`python
# Before AI assistance
def process_data(data):
    # Manual implementation
    result = []
    for item in data:
        if item.status == "active":
            result.append(item)
    return result

# With AI suggestions
def process_data(data: List[DataItem]) -> List[DataItem]:
    """Filter active items from dataset."""
    return [item for item in data if item.status == "active"]
\`\`\`

The AI doesn't just write code—it teaches better patterns.

## Limitations to Remember

1. **Context is everything** - AI needs good prompts
2. **Not a replacement** - Still need to understand fundamentals
3. **Review carefully** - AI can hallucinate
4. **Privacy concerns** - Be mindful of sensitive code

## My Workflow Now

1. Write clear comments describing intent
2. Let AI suggest implementation
3. Review and refine suggestions
4. Test thoroughly
5. Learn from the patterns

## Conclusion

AI tools are collaborators, not replacements. They amplify your skills but require understanding to use effectively.

The future of development is human + AI, not human vs AI.
                `
            },
            {
                slug: "docker-basics",
                title: "Docker for Beginners: A Practical Introduction",
                excerpt: "A hands-on guide to understanding and using Docker containers in your development workflow.",
                date: "Jul 28, 2026",
                readTime: "10 min read",
                tags: ["Docker", "DevOps", "Tutorial"],
                author: "Seyed Mohammad Fakhri",
                content: `
# Docker for Beginners: A Practical Introduction

Docker revolutionized how we deploy applications. Here's everything you need to know to get started.

## Why Docker?

Before Docker, "it works on my machine" was every developer's nightmare. Docker solves this by packaging applications with their dependencies.

## Core Concepts

### 1. Images
Think of images as blueprints. They contain everything needed to run an application.

### 2. Containers
Containers are running instances of images. They're isolated, lightweight, and portable.

### 3. Dockerfile
A recipe for building images. Here's a simple example:

\`\`\`dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "app.py"]
\`\`\`

## Getting Started

### Installation
Visit [docker.com](https://docker.com) and download Docker Desktop.

### Your First Container

\`\`\`bash
# Pull an image
docker pull nginx

# Run a container
docker run -p 8080:80 nginx
\`\`\`

Visit localhost:8080 and see Nginx running!

## Real-World Use Cases

At Amline, we use Docker for:
- **Development environments** - Everyone has identical setups
- **Testing** - Spin up clean environments instantly
- **Deployment** - Same container from dev to production

## Best Practices

1. **Use official base images**
2. **Minimize layers** - Combine RUN commands
3. **Don't run as root** - Security first
4. **Use .dockerignore** - Keep images small
5. **Tag your images** - Version everything

## Common Commands

\`\`\`bash
# List running containers
docker ps

# Stop a container
docker stop <container-id>

# Remove containers
docker rm <container-id>

# View logs
docker logs <container-id>

# Execute commands in container
docker exec -it <container-id> bash
\`\`\`

## Docker Compose

For multi-container apps, use Docker Compose:

\`\`\`yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "5000:5000"
  redis:
    image: "redis:alpine"
\`\`\`

Run with: \`docker-compose up\`

## Next Steps

Once comfortable with basics, explore:
- Kubernetes for orchestration
- Docker networking
- Multi-stage builds
- Container security

## Conclusion

Docker is a fundamental DevOps skill. Start small, build projects, and gradually increase complexity.

Your future self will thank you for learning Docker today.
                `
            }
        ]
    }
};
