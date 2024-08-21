document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('ul li a');
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = 'blue';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '';
        });