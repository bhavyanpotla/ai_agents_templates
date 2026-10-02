const statsData = [
    { title: "Total Deployed Agents", value: "24" },
    { title: "Active Tasks", value: "156" },
    { title: "Success Rate", value: "98.2%" },
    { title: "Compute Usage", value: "42%" }
];

const activityData = [
    { action: "DataScraper-01 finished batch extraction", time: "2 mins ago" },
    { action: "NLP-Engine spawned a sub-agent for translation", time: "15 mins ago" },
    { action: "DevBot deployed PR #42 to staging", time: "1 hour ago" },
    { action: "SupportBot resolved 45 customer tickets", time: "3 hours ago" }
];

function renderStats() {
    const container = document.getElementById('stats-container');
    statsData.forEach(stat => {
        const card = document.createElement('div');
        card.className = 'glass-panel stat-card';
        card.innerHTML = `
            <span class="stat-title">${stat.title}</span>
            <span class="stat-value">${stat.value}</span>
        `;
        container.appendChild(card);
    });
}

function renderActivity() {
    const list = document.getElementById('activity-list');
    activityData.forEach(item => {
        const li = document.createElement('li');
        li.className = 'activity-item';
        li.innerHTML = `
            <span>${item.action}</span>
            <span class="time-stamp">${item.time}</span>
        `;
        list.appendChild(li);
    });
}

// Initialize Dashboard
document.addEventListener('DOMContentLoaded', () => {
    renderStats();
    renderActivity();
});
