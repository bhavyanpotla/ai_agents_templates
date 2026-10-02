const availableTools = [
    { id: 't1', name: 'Web Search', desc: 'Browse the internet for real-time data.' },
    { id: 't2', name: 'Python Interpreter', desc: 'Execute python code securely.' },
    { id: 't3', name: 'SQL Query', desc: 'Read and write to the database.' },
    { id: 't4', name: 'File Reader', desc: 'Parse PDFs, CSVs, and text files.' },
    { id: 't5', name: 'Email Dispatch', desc: 'Send emails automatically.' }
];

const equippedTools = [];

const toolListEl = document.getElementById('tool-list');
const equippedToolsEl = document.getElementById('equipped-tools');
const emptyStateEl = document.getElementById('empty-state');

function renderAvailableTools() {
    toolListEl.innerHTML = '';
    availableTools.forEach(tool => {
        const div = document.createElement('div');
        div.className = 'tool-card';
        div.innerHTML = `
            <div class="tool-name">${tool.name}</div>
            <div class="tool-desc">${tool.desc}</div>
        `;
        div.onclick = () => equipTool(tool);
        toolListEl.appendChild(div);
    });
}

function renderEquippedTools() {
    equippedToolsEl.innerHTML = '';
    if (equippedTools.length === 0) {
        equippedToolsEl.appendChild(emptyStateEl);
        emptyStateEl.style.display = 'block';
        return;
    }
    
    emptyStateEl.style.display = 'none';
    equippedTools.forEach(tool => {
        const div = document.createElement('div');
        div.className = 'equipped-item';
        div.innerHTML = `
            <span>${tool.name}</span>
            <button class="remove-btn" onclick="removeTool('${tool.id}')">✕</button>
        `;
        equippedToolsEl.appendChild(div);
    });
}

function equipTool(tool) {
    if (!equippedTools.some(t => t.id === tool.id)) {
        equippedTools.push(tool);
        renderEquippedTools();
    }
}

window.removeTool = function(id) {
    const index = equippedTools.findIndex(t => t.id === id);
    if (index > -1) {
        equippedTools.splice(index, 1);
        renderEquippedTools();
    }
}

document.getElementById('deploy-btn').addEventListener('click', () => {
    const name = document.getElementById('agent-name').value;
    if(!name) {
        alert("Please give your agent a name first!");
        return;
    }
    alert(`Deploying Agent: ${name} with ${equippedTools.length} tools!`);
});

// Initialize
renderAvailableTools();
