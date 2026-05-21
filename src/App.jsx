import { useEffect, useRef, useState } from 'react';
import SectionHeading from './components/SectionHeading.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import ContactCard from './components/ContactCard.jsx';

const contactInfo = {
  github: 'https://github.com/your-github',
  email: 'your.email@example.com',
  portfolio: 'https://your-portfolio.example.com',
};

const gilVideoUrl = `${import.meta.env.BASE_URL}videos/gil.mp4`;

const contactLinks = [
  {
    label: 'GitHub',
    href: contactInfo.github,
    value: 'github.com/your-github',
  },
  {
    label: '이메일',
    href: `mailto:${contactInfo.email}`,
    value: contactInfo.email,
  },
  {
    label: '포트폴리오',
    href: contactInfo.portfolio,
    value: 'your-portfolio.example.com',
  },
];

const techStacks = [
  {
    title: 'Frontend',
    items: ['React', 'Vite', 'JavaScript', 'CSS'],
  },
  {
    title: 'AI / Video',
    items: ['Runway', 'Midjourney', 'ChatGPT', 'Premiere Pro', 'After Effects'],
  },
  {
    title: 'Backend / DB',
    items: ['Supabase', 'Firebase', 'Node.js'],
  },
];

const processSteps = [
  {
    step: '01',
    title: '기획',
    text: '콘텐츠 목표 정의, 스토리보드 설계, 인터랙티브 흐름 구성',
  },
  {
    step: '02',
    title: 'AI 영상 생성',
    text: 'Runway와 Midjourney를 활용한 영상 자산 생성 및 프로토타입 제작',
  },
  {
    step: '03',
    title: '영상 편집',
    text: 'Premiere Pro와 After Effects로 컷 편집, 그래픽 템플릿 적용',
  },
  {
    step: '04',
    title: '프론트엔드 구현',
    text: 'React와 Vite 기반 인터랙티브 웹 페이지를 반응형으로 개발',
  },
  {
    step: '05',
    title: '배포',
    text: '실서비스 환경에 맞춘 최적화와 배포까지 완성',
  },
];

const featuredVideos = [
  {
    id: 1,
    title: '브랜딩 영상',
    category: '광고 영상',
    poster: 'https://picsum.photos/seed/video1/560/360',
    source: gilVideoUrl,
    fallbackSource: gilVideoUrl,
  },
  {
    id: 2,
    title: 'AI 쇼츠',
    category: '쇼츠 콘텐츠',
    poster: 'https://picsum.photos/seed/video2/560/360',
    source: 'https://www.w3schools.com/html/movie.mp4',
    fallbackSource: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  },
  {
    id: 3,
    title: '브랜딩 패키지',
    category: '브랜딩 영상',
    poster: 'https://picsum.photos/seed/video3/560/360',
    source: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
    fallbackSource: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  },
];

const projects = [
  {
    id: 1,
    title: 'AI 영상 브랜딩 캠페인',
    category: '광고 / 브랜딩',
    description: 'AI 영상 합성과 인터랙티브 웹 UI를 결합해 브랜드 메시지를 강화했습니다.',
    details: '브랜드 스토리를 시각적으로 전달하기 위해 AI 기반 영상 요소와 모션 그래픽을 결합했습니다. 반응형 웹 페이지로 콘텐츠 중심의 사용자 경험을 구성했습니다.',
    role: '프로젝트 리드, 영상 기획, 프론트엔드 구현, 콘텐츠 최적화',
    skills: ['React', 'Vite', 'Runway', 'Premiere Pro', 'After Effects'],
    features: ['AI 영상 썸네일', '모션 트랜지션', '인터랙티브 콘텐츠 블록'],
    challenges: '영상 콘텐츠와 웹 인터랙션을 자연스럽게 연결하며 로딩 성능을 유지하는 데 집중했습니다.',
    results: '클라이언트 브랜딩 메시지 전달력이 강화되었고, 페이지 체류 시간이 상승했습니다.',
    imageUrl: 'https://picsum.photos/seed/project1/560/360',
    videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4',
    videoFallbackUrl: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
    tags: ['브랜딩', 'AI 영상', 'React'],
  },
  {
    id: 2,
    title: 'AI 쇼츠 캠페인',
    category: 'AI 쇼츠 / 콘텐츠',
    description: 'AI 생성 콘텐츠와 자동 편집 파이프라인으로 쇼츠형 영상을 제작했습니다.',
    details: 'AI 도구로 콘텐츠 스크립트를 생성하고, 자동 자막 및 컷 편집을 통해 빠르게 완성도를 높였습니다. 프론트엔드 인터페이스로 영상 콘텐츠를 손쉽게 탐색할 수 있게 구성했습니다.',
    role: '콘텐츠 디렉터, 편집자, 웹 인터랙션 설계',
    skills: ['ChatGPT', 'Midjourney', 'React', 'CSS'],
    features: ['자동 자막', '미리보기 카드', '반응형 레이아웃'],
    challenges: '쇼츠 콘텐츠의 짧은 전달력을 유지하면서도 브랜드 아이덴티티를 보여주는 구성으로 제작했습니다.',
    results: 'SNS 캠페인 노출이 증가하고, 기존 사용자 전환율이 개선되었습니다.',
    imageUrl: 'https://picsum.photos/seed/project2/560/360',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    videoFallbackUrl: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
    tags: ['쇼츠', 'AI 콘텐츠', 'UX'],
  },
  {
    id: 3,
    title: '교육용 인터랙티브 프로모션',
    category: '교육 / 모션 그래픽',
    description: '데이터 시각화와 모션 그래픽을 결합해 교육 콘텐츠를 매력적으로 제공했습니다.',
    details: '교육 데이터를 시각적으로 설명하는 영상과 반응형 프로모션 페이지를 함께 개발했습니다. 사용자 피드백을 반영해 인터랙티브 경험을 개선했습니다.',
    role: '기획, 영상 편집, 프론트엔드 개발',
    skills: ['Supabase', 'Node.js', 'After Effects', 'Vite'],
    features: ['데이터 모션 그래픽', 'CTA 섹션', '접근성 고려 레이아웃'],
    challenges: '정보 전달력을 높이면서도 영상과 웹 인터페이스가 균형을 이루도록 설계했습니다.',
    results: '교육 콘텐츠 참여율이 증가하고 사용자 만족도가 향상되었습니다.',
    imageUrl: 'https://picsum.photos/seed/project3/560/360',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    videoFallbackUrl: 'https://samplelib.com/lib/preview/mp4/sample-15s.mp4',
    tags: ['교육', '데이터 시각화', '반응형'],
  },
];

function App() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [expandedProject, setExpandedProject] = useState(null);
  const [theme, setTheme] = useState(() => {
    const stored = window.localStorage.getItem('portfolio-theme');
    return stored === 'dark' ? 'dark' : 'light';
  });
  const [activeFeaturedVideo, setActiveFeaturedVideo] = useState(featuredVideos[0]);
  const featuredPlayerRef = useRef(null);
  const previewVideoRef = useRef(null);
  const [autoplayFailed, setAutoplayFailed] = useState(false);
  const [shouldPlayFeaturedVideo, setShouldPlayFeaturedVideo] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const playCurrentVideo = ({ muted = true } = {}) => {
    const player = previewVideoRef.current;
    if (!player) {
      return;
    }

    setAutoplayFailed(false);
    player.muted = muted;
    player.playsInline = true;

    const playPromise = player.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {
        setAutoplayFailed(true);
      });
    }
  };

  useEffect(() => {
    if (shouldPlayFeaturedVideo) {
      playCurrentVideo();
    }
  }, [activeFeaturedVideo.id, shouldPlayFeaturedVideo]);

  const handlePlayVideo = (id) => {
    const video = featuredVideos.find((item) => item.id === id);
    if (!video) {
      return;
    }
    // 즉시 상단 플레이어의 src를 교체하고 재생 시도
    setActiveFeaturedVideo(video);
    setShouldPlayFeaturedVideo(true);
    featuredPlayerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleOverlayPlay = () => {
    setShouldPlayFeaturedVideo(true);
    playCurrentVideo({ muted: false });
  };

  const handleUserEnableAll = () => {
    setShouldPlayFeaturedVideo(true);
    playCurrentVideo({ muted: false });
  };

  const handleToggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="page-shell">
      <section className="intro-video-section fade-up" aria-label="Intro video">
        <video
          className="intro-video"
          src={`${import.meta.env.BASE_URL}videos/intro.mp4`}
          autoPlay
          muted
          loop
          playsInline
          controls
          preload="auto"
        >
          Your browser does not support the video tag.
        </video>
      </section>

      <header className="hero-section fade-up">
        <div className="hero-copy">
          <div className="hero-top">
            <p className="eyebrow">AI 영상과 인터랙티브 웹 경험</p>
            <button type="button" className="theme-toggle" onClick={handleToggleTheme}>
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
            {autoplayFailed && (
              <button type="button" className="enable-videos-button" onClick={() => handleUserEnableAll()}>
                동영상 재생 허용
              </button>
            )}
          </div>
          <p className="hero-name">길은진</p>
          <h1>AI 영상과 인터랙티브 웹 경험을 만드는 프론트엔드 개발자</h1>
          <p>
            브랜딩 영상, AI 쇼츠, 인터랙티브 콘텐츠를 결합해 실무 수준의 디지털 경험을 설계하고 구현합니다.
          </p>
          <div className="hero-actions">
            <a href={contactInfo.github} target="_blank" rel="noreferrer" className="button primary">
              GitHub 보기
            </a>
            <a href="#project-detail" className="button secondary">
              프로젝트 데모 보기
            </a>
            <a href={`mailto:${contactInfo.email}`} className="button ghost">
              이메일 문의
            </a>
          </div>
        </div>
        <div className="hero-panel">
          <div className="hero-panel-card">
            <div className="hero-panel-tag">프론트엔드 · AI · 영상</div>
            <h2>실무 중심 AI 영상 포트폴리오</h2>
            <p>모던한 뉴모피즘 화이트톤 디자인에 전문성과 깊이를 더해 콘텐츠 제작 역량을 보여줍니다.</p>
          </div>
        </div>
      </header>

      <main>
        <section className="intro-section fade-up" id="about">
          <SectionHeading label="자기소개" title="AI 영상과 프론트엔드 개발을 모두 담은 디지털 포트폴리오" />
          <div className="intro-grid">
            <div className="intro-card">
              <h3>나에 대해</h3>
              <p>
                AI 영상 제작과 프론트엔드를 결합해 인터랙티브한 사용자 경험을 구현합니다. 영상 기획부터 편집, 웹 배포까지 전 과정에 참여하며
                완성도 높은 결과를 제공합니다.
              </p>
            </div>
            <div className="intro-card">
              <h3>주요 역량</h3>
              <ul>
                <li>AI 영상 합성 및 컷 편집</li>
                <li>React 기반 인터랙티브 UI 개발</li>
                <li>반응형 웹 및 퍼포먼스 최적화</li>
                <li>브랜딩 콘텐츠 제작과 디자인 시스템</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="stack-section fade-up" id="skills">
          <SectionHeading label="기술 스택" title="카테고리별 기술 역량" />
          <div className="stack-grid">
            {techStacks.map((group) => (
              <div key={group.title} className="stack-card">
                <h3>{group.title}</h3>
                <div className="stack-list">
                  {group.items.map((item) => (
                    <span key={item} className="stack-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="project-section fade-up" id="projects">
          <SectionHeading label="프로젝트" title="AI 영상 프로젝트" />
          <div className="project-cards">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isActive={selectedProject.id === project.id}
                onSelect={setSelectedProject}
                onOpenVideo={setExpandedProject}
              />
            ))}
          </div>
          {expandedProject && (
            <div className="project-video-viewer">
              <div className="project-video-viewer-top">
                <h3>{expandedProject.title}</h3>
                <button type="button" className="theme-toggle" onClick={() => setExpandedProject(null)}>
                  닫기
                </button>
              </div>
              <video
                key={expandedProject.id}
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster={expandedProject.imageUrl}
              >
                <source src={expandedProject.videoUrl} type="video/mp4" />
                <source src={expandedProject.videoFallbackUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </section>

        <section className="detail-section fade-up" id="project-detail">
          <SectionHeading label="프로젝트 상세" title={selectedProject.title} />
          <div className="detail-card">
            <div className="detail-copy">
              <p className="detail-label">카테고리</p>
              <h3>{selectedProject.category}</h3>
              <p>{selectedProject.details}</p>
              <div className="detail-meta-grid">
                <div>
                  <h4>사용 기술</h4>
                  <div className="detail-tags">
                    {selectedProject.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4>담당 역할</h4>
                  <p>{selectedProject.role}</p>
                </div>
              </div>
            </div>
            <div className="detail-highlight">
              <div className="detail-block">
                <h4>주요 기능</h4>
                <ul>
                  {selectedProject.features.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="detail-block">
                <h4>문제 해결</h4>
                <p>{selectedProject.challenges}</p>
              </div>
              <div className="detail-block">
                <h4>성과</h4>
                <p>{selectedProject.results}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="process-section fade-up" id="process">
          <SectionHeading label="작업 프로세스" title="AI 영상과 프론트엔드 제작 단계" />
          <div className="process-grid">
            {processSteps.map((step) => (
              <div key={step.step} className="process-card">
                <span>{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="featured-section fade-up" id="featured-videos">
          <SectionHeading label="대표 영상 작업" title="영상 포트폴리오 하이라이트" />
          <div className="featured-player-card" ref={featuredPlayerRef}>
            <video
              ref={previewVideoRef}
              controls
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster={activeFeaturedVideo.poster}
              className="video-player"
              key={activeFeaturedVideo.id}
              onLoadedData={() => {
                if (shouldPlayFeaturedVideo) {
                  playCurrentVideo();
                }
              }}
              onError={() => {
                setAutoplayFailed(true);
              }}
            >
              <source src={activeFeaturedVideo.source} type="video/mp4" />
              <source src={activeFeaturedVideo.fallbackSource} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {autoplayFailed && (
              <div className="video-overlay">
                <button className="overlay-button" onClick={handleOverlayPlay}>
                  재생 (소리 켬)
                </button>
              </div>
            )}
            <div className="video-info featured-active-info">
              <span>{activeFeaturedVideo.category}</span>
              <h3>{activeFeaturedVideo.title}</h3>
            </div>
          </div>
          <div className="video-grid">
            {featuredVideos.map((video) => (
              <article key={video.id} className="video-card">
                <div className="video-thumb">
                  <video
                    className="video-preview"
                    poster={video.poster}
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="metadata"
                  >
                    <source src={video.source} type="video/mp4" />
                    <source src={video.fallbackSource} type="video/mp4" />
                  </video>
                </div>
                <div className="video-info">
                  <span>{video.category}</span>
                  <h3>{video.title}</h3>
                </div>
                <button type="button" className="button secondary small" onClick={() => handlePlayVideo(video.id)}>
                  영상 보기
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section fade-up" id="contact">
          <SectionHeading label="연락처" title="협업 또는 문의는 아래 채널로" />
          <div className="contact-grid">
            {contactLinks.map((item) => (
              <ContactCard key={item.label} label={item.label} href={item.href}>
                {item.value}
              </ContactCard>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
