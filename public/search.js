const form = document.querySelector('#site-search');
const input = document.querySelector('#search-query');
const status = document.querySelector('#search-status');
const resultsList = document.querySelector('#search-results');
const query = new URLSearchParams(window.location.search).get('q')?.trim() ?? '';

if (form instanceof HTMLFormElement && input instanceof HTMLInputElement && status && resultsList) {
  input.value = query;

  if (query) {
    status.textContent = 'Searching...';

    try {
      const pagefind = await import('/pagefind/pagefind.js');
      const search = await pagefind.search(query);
      const results = await Promise.all(search.results.slice(0, 10).map((result) => result.data()));

      if (results.length === 0) {
        status.textContent = `No results found for "${query}".`;
      } else {
        status.textContent = `${search.results.length} result${search.results.length === 1 ? '' : 's'} found. Showing the first ${results.length}.`;

        for (const result of results) {
          const item = document.createElement('li');
          item.className = 'py-6';

          const link = document.createElement('a');
          link.href = result.url;
          link.className = 'font-display text-2xl text-ink underline decoration-rust underline-offset-4';
          link.textContent = result.meta.title || result.url;

          const excerpt = document.createElement('p');
          excerpt.className = 'mt-3 max-w-3xl text-sm leading-6 text-muted';
          excerpt.textContent = result.plain_excerpt;

          item.append(link, excerpt);
          resultsList.append(item);
        }
      }
    } catch {
      status.textContent = 'Search is currently unavailable. Please try again later.';
    }
  }
}