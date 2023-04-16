
const accordian = document.querySelector('.accordian');

accordian.addEventListener('click', (e) => {
    const activePanel = e.target.closest('.accordian--panel');
    if (!activePanel) return;
    toggelAccordian(activePanel);
});

function toggelAccordian(panelToActivate) {
    const panels = panelToActivate.
        parentElement.querySelectorAll('.accordian--panel');
    const contents = panelToActivate.
        parentElement.querySelectorAll('.accordian--content');

    panels.forEach(panel => {
        panel.setAttribute("aria-expanded", false);
    });
    panelToActivate.setAttribute("aria-expanded", true);

    contents.forEach(content => {
        content.setAttribute("aria-hidden", true)
    })
    panelToActivate.querySelector('.accordian--content').setAttribute("aria-hidden", false);
};