/**
 * Position notes correctly.
 * @param {Object} _ - Event object. Ignored.
 */
function organizeNotes(_) {
  const notes = document.querySelectorAll('#sidebar > .footnotes > ol > li');
  if (window.innerWidth < 768) {
    // Why 768px? https://getbootstrap.com/docs/4.1/layout/overview/#responsive-breakpoints
    notes.forEach((note) => {
      note.style.position = 'inherit';
      note.style.top = '';
    });
    return;
  }
  // Else, we need to align the notes to the superscripts.
  const superscripts = document.querySelectorAll('#content sup');
  notes.forEach((note, index) => {
    const superscript = superscripts[index];
    note.style.position = 'absolute';
    note.style.top = `${superscript.offsetTop}px`;
  });
}

window.addEventListener('load', (event) => {
  // Move the footnotes from the bottom to the sidebar.
  const footnotes = document.querySelector('.footnotes');
  footnotes.parentNode.removeChild(footnotes);
  document.getElementById('sidebar').appendChild(footnotes);
  // Immediately trigger the first positioning process.
  organizeNotes(event);
});

window.addEventListener('resize', organizeNotes);
