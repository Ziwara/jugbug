export function changeTo_projectTab() {
    window.location.href = 'main_page.html?tab=projects';
}

window.changeTo_projectTab = changeTo_projectTab;

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const activeTab = urlParams.get('tab');

    if (activeTab === 'projects') {
        const projectRadio = document.getElementById('tab_projects');
        if (projectRadio) {
            projectRadio.checked = true;
        }
    }
});
