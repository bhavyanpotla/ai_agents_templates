const agents = [
    { id: 'trigger', icon: '⚡', name: 'Webhook Trigger' },
    { id: 'research', icon: '🔍', name: 'Research Agent' },
    { id: 'writer', icon: '✍️', name: 'Copywriter Agent' },
    { id: 'reviewer', icon: '👀', name: 'Review Agent' },
    { id: 'publish', icon: '🚀', name: 'Publish Action' }
];

const trackEl = document.getElementById('node-track');
const logsContainer = document.getElementById('logs-container');
const runBtn = document.getElementById('run-workflow-btn');

function renderNodes() {
    trackEl.innerHTML = '';
    agents.forEach((agent, index) => {
        const node = document.createElement('div');
        node.className = 'node';
        node.id = `node-${index}`;
        node.innerHTML = `
            <span style="font-size: 1.5rem;">${agent.icon}</span>
            <div class="node-label">${agent.name}</div>
        `;
        trackEl.appendChild(node);
    });
}

function addLog(message) {
    const p = document.createElement('p');
    p.className = 'log-entry';
    
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour12: false });
    
    p.innerText = `[${timeString}] ${message}`;
    logsContainer.appendChild(p);
    logsContainer.scrollTop = logsContainer.scrollHeight;
}

async function runWorkflow() {
    runBtn.disabled = true;
    runBtn.style.opacity = '0.5';
    logsContainer.innerHTML = '';
    addLog('Starting multi-agent workflow execution...');

    // Reset all nodes
    document.querySelectorAll('.node').forEach(n => {
        n.classList.remove('active', 'completed');
    });

    for (let i = 0; i < agents.length; i++) {
        const node = document.getElementById(`node-${i}`);
        
        // Set Active
        node.classList.add('active');
        addLog(`${agents[i].name} is processing...`);
        
        // Simulate processing time (1.5 seconds per node)
        await new Promise(r => setTimeout(r, 1500));
        
        // Set Completed
        node.classList.remove('active');
        node.classList.add('completed');
        addLog(`${agents[i].name} finished task successfully.`);
    }

    addLog('Workflow completed successfully. Pipeline closed.');
    runBtn.disabled = false;
    runBtn.style.opacity = '1';
}

runBtn.addEventListener('click', runWorkflow);

// Initialize
renderNodes();
