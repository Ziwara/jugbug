var projectButton_pressed = false;
export {projectButton_pressed};

export function changeTo_projectTab() {
    projectButton_pressed = true;
    console.log(projectButton_pressed);
    window.open('main_page.html', '_self');
}
