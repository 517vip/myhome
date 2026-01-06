// 剧集数据
const EPISODES = [
    {
        id: 1,
        title: "第一集：《豪豪奇遇记：数据魔法书》",
        duration: "24:30",
        date: "2026-01-01",
        description: "为爱发电，速通体验",
        thumbnail: "🎬",
        locked: false
    },
    {
        id: 2,
        title: "第二集：《豪豪奇遇记：数据魔法书》",
        duration: "23:15",
        date: "2026-01-08",
        description: "为爱发电，速通体验",
        thumbnail: "🎬",
        locked: false
    },
    {
        id: 3,
        title: "第三集：《豪豪奇遇记：数据魔法书》",
        duration: "25:10",
        date: "2026-01-15",
        description: "为爱发电，速通体验",
        thumbnail: "🎬",
        locked: false
    },
    {
        id: 4,
        title: "第四集：《豪豪奇遇记：数据魔法书》",
        duration: "26:45",
        date: "2026-01-22",
        description: "为爱发电，速通体验",
        thumbnail: "🎬",
        locked: false
    },
    {
        id: 5,
        title: "第五集：《豪豪奇遇记：数据魔法书》",
        duration: "27:20",
        date: "2026-01-29",
        description: "为爱发电，速通体验",
        thumbnail: "🎬",
        locked: false
    },
    {
        id: 6,
        title: "第六集：《豪豪奇遇记：数据魔法书》",
        duration: "即将上线",
        date: "2026-02-05",
        description: "敬请期待",
        thumbnail: "🎬",
        locked: true
    },
	    {
        id: 7,
        title: "第七集：《豪豪奇遇记：数据魔法书》",
        duration: "26:45",
        date: "2026-01-22",
        description: "敬请期待",
        thumbnail: "🎬",
        locked: true
    },
    {
        id: 8,
        title: "第八集：《豪豪奇遇记：数据魔法书》",
        duration: "27:20",
        date: "2026-01-29",
        description: "敬请期待",
        thumbnail: "🎬",
        locked: true
    },
    {
        id: 9,
        title: "第九集：《豪豪奇遇记：数据魔法书》",
        duration: "即将上线",
        date: "2024-02-05",
        description: "敬请期待",
        thumbnail: "🎬",
        locked: true
    },
];

// 生成剧集列表
function renderEpisodes() {
    const container = document.getElementById('episodeList');
    if (!container) return;
    
    container.innerHTML = '';
    
    EPISODES.forEach(episode => {
        const episodeCard = document.createElement('div');
        episodeCard.className = 'episode-card';
        
        const isLocked = episode.locked;
        
        episodeCard.innerHTML = `
            <div class="episode-thumbnail">
                <span style="font-size: 4rem;">${episode.thumbnail}</span>
            </div>
            <div class="episode-content">
                <div class="episode-title">
                    <span>${episode.title}</span><br>
                    ${isLocked ? '<span class="badge"><i class="fas fa-clock"></i> 待更新</span>' : ''}
                </div>
                <div class="episode-meta">
                    <span><i class="far fa-clock"></i> ${episode.duration}</span>
                    <span style="margin-left: 15px;"><i class="far fa-calendar"></i> ${episode.date}</span>
                </div>
                <p style="font-size: 0.9rem; opacity: 0.8; margin: 10px 0;">${episode.description}</p>
                <a href="episode${episode.id}.html${window.location.search ? window.location.search : ''}" 
                   class="watch-btn ${isLocked ? 'locked' : ''}">
                   ${isLocked ? '<i class="fas fa-lock"></i> 敬请期待' : '<i class="fas fa-play"></i> 立即观看'}
                </a>
            </div>
        `;
        
        container.appendChild(episodeCard);
    });
}

// 页面加载时渲染剧集

document.addEventListener('DOMContentLoaded', renderEpisodes);

