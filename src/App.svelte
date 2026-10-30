<script lang="ts">
  import icon from '../src-tauri/app-icon.svg';
  import { ignoreShortcut } from './lib/keys';
  import { go, nav } from './lib/nav.svelte';
  import { loadProgress, progress, status } from './lib/progress.svelte';
  import { screens } from './lib/screens';
  import Home from './screens/Home.svelte';
  import Study from './screens/Study.svelte';
  import Exams from './screens/Exams.svelte';
  import Review from './screens/Review.svelte';
  import QuestionBrowser from './screens/QuestionBrowser.svelte';
  import Settings from './screens/Settings.svelte';
  import About from './screens/About.svelte';

  let main: HTMLElement;
  let shortcuts: HTMLDialogElement;
  const loading = loadProgress();

  // Each new screen starts at the top, with focus on it so keyboard and screen-reader users land there.
  $effect(() => {
    void nav.visit;
    if (!main) return;
    main.scrollTop = 0;
    main.focus();
  });

  // Theme and text size from Settings ("system" follows Windows through prefers-color-scheme).
  $effect(() => {
    const root = document.documentElement;
    if (progress.prefs.theme === 'system') delete root.dataset.theme;
    else root.dataset.theme = progress.prefs.theme;
    root.style.setProperty('--text-scale', String(progress.prefs.textSize / 100));
  });

  function onkeydown(e: KeyboardEvent) {
    if (e.key === '?' && !ignoreShortcut(e)) {
      e.preventDefault();
      shortcuts.showModal();
    }
  }

  const KEYS: [string, [string, string][]][] = [
    [
      'Questions',
      [
        ['1–4 or A–D', 'Choose an answer'],
        ['Enter', 'Next question, or continue after a checkpoint'],
        ['F', 'Flag the question for review (practice exams)'],
        ['← →', 'Previous or next question (practice exams)'],
      ],
    ],
    [
      'Lessons',
      [
        ['Space', 'Play or pause the narration'],
        ['← →', 'Back or forward 5 seconds'],
        ['Shift+← →', 'Previous or next scene'],
      ],
    ],
    [
      'Anywhere',
      [
        ['?', 'Show this list'],
        ['Esc', 'Close a dialog'],
        ['Tab, Shift+Tab', 'Move between buttons and fields'],
      ],
    ],
  ];
</script>

<svelte:window {onkeydown} />

<div class="layout">
  <aside class="sidebar">
    <div class="brand">
      <img src={icon} alt="" width="32" height="32" />
      <span>FCC Radio Study</span>
    </div>
    <nav aria-label="Main">
      {#each screens as s (s.id)}
        <button class="nav-item" aria-current={nav.screen === s.id ? 'page' : undefined} onclick={() => go(s.id)}>
          {s.label}
        </button>
      {/each}
    </nav>
    <button class="nav-item keys-button" onclick={() => shortcuts.showModal()} aria-keyshortcuts="Shift+?">Keyboard shortcuts <kbd>?</kbd></button>
  </aside>

  <main bind:this={main} tabindex="-1">
    {#if status.notice}
      <div class="banner" role="alert">
        <p>{status.notice}</p>
        <button class="secondary small" onclick={() => (status.notice = null)}>Dismiss</button>
      </div>
    {/if}
    {#if status.saveError}
      <div class="banner error" role="alert"><p>Your progress couldn't be saved: {status.saveError}</p></div>
    {/if}

    {#await loading}
      <p class="muted">Loading your progress…</p>
    {:then}
      {#key nav.visit}
        {#if nav.screen === 'home'}
          <Home />
        {:else if nav.screen === 'study'}
          <Study />
        {:else if nav.screen === 'exams'}
          <Exams />
        {:else if nav.screen === 'review'}
          <Review />
        {:else if nav.screen === 'browser'}
          <QuestionBrowser />
        {:else if nav.screen === 'settings'}
          <Settings />
        {:else}
          <About />
        {/if}
      {/key}
    {:catch error}
      <div class="banner error" role="alert"><p>Your progress couldn't be loaded: {error}</p></div>
    {/await}
  </main>
</div>

<dialog bind:this={shortcuts} class="shortcuts" aria-labelledby="shortcuts-title">
  <h2 id="shortcuts-title">Keyboard shortcuts</h2>
  {#each KEYS as [group, rows] (group)}
    <table>
      <caption>{group}</caption>
      <tbody>
        {#each rows as [key, what] (key + what)}
          <tr><th scope="row"><kbd>{key}</kbd></th><td>{what}</td></tr>
        {/each}
      </tbody>
    </table>
  {/each}
  <div class="dialog-actions">
    <button class="primary" onclick={() => shortcuts.close()}>Close</button>
  </div>
</dialog>

<style>
  .layout {
    display: grid;
    grid-template-columns: 15rem 1fr;
    height: 100%;
  }

  .sidebar {
    background: var(--sidebar);
    color: var(--sidebar-text);
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding: 1rem 0.75rem;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.25rem 0.5rem;
    font-weight: 600;
    font-size: 1.05rem;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }

  .nav-item {
    background: transparent;
    color: inherit;
    border: 0;
    border-radius: 8px;
    padding: 0.55rem 0.75rem;
    text-align: left;
    opacity: 0.85;
  }

  .nav-item:hover {
    background: rgb(255 255 255 / 0.08);
    opacity: 1;
  }

  .nav-item[aria-current='page'] {
    background: rgb(255 255 255 / 0.14);
    box-shadow: inset 3px 0 0 #f4b942;
    font-weight: 600;
    opacity: 1;
  }

  .sidebar :global(:focus-visible) {
    outline-color: #f4b942;
  }

  .keys-button {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
  }

  .keys-button kbd {
    color: inherit;
    background: rgb(255 255 255 / 0.12);
    border-color: rgb(255 255 255 / 0.25);
  }

  .shortcuts {
    width: min(34rem, 92vw);
  }

  .shortcuts table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 0.75rem;
  }

  .shortcuts caption {
    text-align: left;
    font-weight: 600;
    color: var(--muted);
    padding-bottom: 0.25rem;
  }

  .shortcuts th {
    width: 9rem;
    text-align: left;
    font-weight: 400;
    padding: 0.25rem 0;
    vertical-align: top;
  }

  .shortcuts td {
    padding: 0.25rem 0;
  }

  .dialog-actions {
    display: flex;
    justify-content: flex-end;
  }

  main {
    overflow-y: auto;
    padding: 1.5rem 2.5rem;
  }

  main:focus {
    outline: none;
  }

  .banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    padding: 0.75rem 1rem;
    border-radius: var(--radius);
    border-left: 4px solid var(--warn);
    background: var(--surface-2);
  }

  .banner.error {
    border-left-color: var(--bad);
  }

  .banner p {
    margin: 0;
  }
</style>
