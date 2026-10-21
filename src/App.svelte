<script lang="ts">
  import icon from '../src-tauri/app-icon.svg';
  import { go, nav } from './lib/nav.svelte';
  import { loadProgress, status } from './lib/progress.svelte';
  import { screens } from './lib/screens';
  import Home from './screens/Home.svelte';
  import Study from './screens/Study.svelte';
  import Exams from './screens/Exams.svelte';
  import Review from './screens/Review.svelte';
  import QuestionBrowser from './screens/QuestionBrowser.svelte';
  import Settings from './screens/Settings.svelte';
  import About from './screens/About.svelte';

  let main: HTMLElement;
  const loading = loadProgress();

  // Move focus to each new screen so keyboard and screen-reader users land on it.
  $effect(() => {
    void nav.screen;
    main?.focus();
  });
</script>

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
      {#key nav.screen + JSON.stringify(nav.params)}
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

  main {
    overflow-y: auto;
    padding: 2rem 2.5rem 3rem;
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
