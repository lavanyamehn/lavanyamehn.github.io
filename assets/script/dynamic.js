/*!
 * 
 *   dynamic.js - DOM manipulation
 *   Author: Lavanya Mehndiratta
 * 
 */

const recProj = document.getElementById("recent-projects");

// PROJECTS

function Project(name, description, image, list, link, github) {
    this.title = name;
    this.desc = description;
    this.image = image;
    this.points = list;
    this.website = link;
    this.github = github;
}

const project1 = new Project(
    "Interactive Mapper",
    "An interactive GIS software. Won 8th place in Algorithm Performance Competition.",
    "/assets/img/project-quizup-logo-1.png",
    ["Tools: C++, Linux", "Save favourite locations.", "View public transport routes."],
    "", "");

const project2 = new Project(
    "Budget Shop",
    "Financial Literacy web application to prevent new immigrants from overspending.",
    "/assets/img/project-blog-logo.jpg",
    [
        "Tools: HTML, CSS, Javascript",
        "Users can compare average price of items in grocery stores with ideal price it should be.",
        "Helps locate best store within radius that helps save money."
    ],
    "", "");

const project3 = new Project(
    "Magic Color",
    "Dynamic color picking tool to assist in designing.",
    "/assets/img/project-library-logo.png",
    [
        "Tools: Python",
        "Users can use a color dropper to get the exact hex code or rgb value.",
        "Helps with UI/UX design where an exact color is needed from another website."
    ],
    "", "");

// Note: list is in ascending order from latest to oldest projects.
const allProjects = [project1, project2, project3];

// FUNCTIONS

function displayProject(id, project) {
    const mainDiv = document.createElement('div');
    mainDiv.id = "project" + String(id);
    mainDiv.classList.add('col', 's12', 'm6', 'l4', 'recent-projects');

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'medium');

    const cardImageDiv = document.createElement('div');
    cardImageDiv.classList.add('card-image', 'waves-effect', 'waves-block', 'waves-light');

    const imgElement = document.createElement('img');
    imgElement.classList.add('activator');
    imgElement.setAttribute('alt', project.title);
    imgElement.setAttribute('src', project.image);
    imgElement.style.height = '100%';
    imgElement.style.width = '100%';

    cardImageDiv.appendChild(imgElement);

    const cardContentDiv = document.createElement('div');
    cardContentDiv.classList.add('card-content');

    const cardTitleSpan = document.createElement('span');
    cardTitleSpan.classList.add('card-title', 'activator', 'teal-text', 'hoverline');
    cardTitleSpan.innerHTML = project.title + '<i class="mdi-navigation-more-vert right"></i>';

    const descriptionPara = document.createElement('p');
    descriptionPara.textContent = project.desc;

    cardContentDiv.appendChild(cardTitleSpan);
    cardContentDiv.appendChild(descriptionPara);

    const cardRevealDiv = document.createElement('div');
    cardRevealDiv.classList.add('card-reveal');

    const revealTitleSpan = document.createElement('span');
    revealTitleSpan.classList.add('card-title', 'grey-text');
    revealTitleSpan.innerHTML = '<small>Accomplishments</small><i class="mdi-navigation-close right"></i>';

    const accomplishmentsList = document.createElement('ul');

    const accomplishment1 = document.createElement('li');
    accomplishment1.innerHTML = project.points[0];

    const accomplishment2 = document.createElement('li');
    accomplishment2.textContent = project.points[1];

    const accomplishment3 = document.createElement('li');
    accomplishment3.textContent = project.points[2];

    accomplishmentsList.appendChild(accomplishment1);
    accomplishmentsList.appendChild(accomplishment2);
    accomplishmentsList.appendChild(accomplishment3);

    const cardActionDiv = document.createElement('div');
    cardActionDiv.classList.add('card-action');

    const anchor1 = document.createElement('a');
    anchor1.classList.add('btn-floating', 'btn-large', 'waves-effect', 'waves-light', 'blue-grey', 'tooltipped');
    anchor1.setAttribute('aria-label', 'Visit');
    anchor1.setAttribute('href', project.website);
    anchor1.setAttribute('target', '_blank');
    anchor1.setAttribute('data-position', 'top');
    anchor1.setAttribute('data-tooltip', 'View Online');
    anchor1.innerHTML = '<i class="fa fa-external-link"></i>';

    const anchor2 = document.createElement('a');
    anchor2.classList.add('btn-floating', 'btn-large', 'waves-effect', 'waves-light', 'blue-grey', 'tooltipped');
    anchor2.setAttribute('aria-label', 'Visit the GitHub repo for project');
    anchor2.setAttribute('href', project.github);
    anchor2.setAttribute('target', '_blank');
    anchor2.setAttribute('data-position', 'top');
    anchor2.setAttribute('data-tooltip', 'View Source');
    anchor2.innerHTML = '<i class="fa fa-github"></i>';

    cardActionDiv.appendChild(anchor1);
    cardActionDiv.appendChild(anchor2);

    cardRevealDiv.appendChild(revealTitleSpan);
    cardRevealDiv.appendChild(accomplishmentsList);
    cardRevealDiv.appendChild(cardActionDiv);

    cardDiv.appendChild(cardImageDiv);
    cardDiv.appendChild(cardContentDiv);
    cardDiv.appendChild(cardRevealDiv);

    mainDiv.appendChild(cardDiv);

    document.getElementById("recent-projects").appendChild(mainDiv);
}

function loadMoreProjects() {
    const btn = document.getElementById("load-more");
    btn.style.display = 'none';
    for (let i = 1; i < allProjects.length; i++) {
        displayProject(i, allProjects[i]);
    }
}

// DISPLAY ONLY LATEST PROJECT
displayProject(0, allProjects[0]);

// Make button
const loadMoreButton = document.createElement('button');
loadMoreButton.id = 'load-more';
loadMoreButton.textContent = 'Load More';
loadMoreButton.classList.add('btn', 'waves-effect', 'waves-light', 'loadmore');
loadMoreButton.addEventListener('click', function() {
    loadMoreProjects();
});
const buttonDiv = document.getElementById("project0");
buttonDiv.appendChild(loadMoreButton);
