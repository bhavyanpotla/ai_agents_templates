const tasks = [
    { id: "TSK-001", title: "Data Scraping Workflow", agent: "CrawlerBot Alpha", status: "running", progress: 65 },
    { id: "TSK-002", title: "Sentiment Analysis", agent: "NLP Processor v2", status: "pending", progress: 0 },
    { id: "TSK-003", title: "Generate Monthly Report", agent: "DocGen Agent", status: "running", progress: 82 },
    { id: "TSK-004", title: "Database Backup", agent: "SysAdmin Bot", status: "failed", progress: 45 },
    { id: "TSK-005", title: "Email Campaign Dispatch", agent: "MailMaster", status: "pending", progress: 0 }
];

const taskContainer = document.getElementById('task-container');

function renderTasks() {
    taskContainer.innerHTML = '';
    
    tasks.forEach(task => {
        const card = document.createElement('div');
        card.className = 'glass-panel task-card';
        
        card.innerHTML = `
            <div class="task-header">
                <div>
                    <div class="task-title">${task.title}</div>
                    <div class="agent-name">Assigned to: ${task.agent}</div>
                </div>
                <span class="status-badge status-${task.status}">${task.status}</span>
            </div>
            
            <div class="task-details">
                <p style="font-size: 0.8rem; margin-bottom: 8px; color: #a0a0b0;">Progress: ${task.progress}%</p>
                <div class="progress-container">
                    <div class="progress-bar progress-${task.status}" style="width: ${task.progress}%"></div>
                </div>
            </div>
        `;
        
        taskContainer.appendChild(card);
    });
}

document.getElementById('pause-btn').addEventListener('click', (e) => {
    const btn = e.target;
    if (btn.innerText === "Pause All Agents") {
        btn.innerText = "Resume All Agents";
        btn.style.color = "#ffa502";
        btn.style.borderColor = "rgba(255, 165, 2, 0.5)";
    } else {
        btn.innerText = "Pause All Agents";
        btn.style.color = "#4da8da";
        btn.style.borderColor = "rgba(77, 168, 218, 0.5)";
    }
});

// Initial render
renderTasks();
