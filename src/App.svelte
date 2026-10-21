<script lang="ts">
  import icon from '../src-tauri/app-icon.svg';
  import { screens, type ScreenId } from './lib/screens';
  import Home from './screens/Home.svelte';
  import Study from './screens/Study.svelte';
  import Exams from './screens/Exams.svelte';
  import Review from './screens/Review.svelte';
  import QuestionBrowser from './screens/QuestionBrowser.svelte';
  import Settings from './screens/Settings.svelte';
  import About from './screens/About.svelte';

  let current = $state<ScreenId>('home');
  let main: HTMLElement;

  function go(id: ScreenId) {
    current = id;
    // Move focus to the new screen so keyboard and screen-reader users land on it.
    main.focus();
  }
</script>

<div class="layout">
  <aside class="sidebar">
    <div class="brand">
      <img src={icon} alt="" width="32" height="32" />
      <span>FCC Radio Study</span>
    </div>
    <nav aria-label="Main">
      {#each screens as s (s.id)}
        <button class="nav-item" aria-current={current === s.id ? 'page' : undefined} onclick={() => go(s.id)}>
          {s.label}
        </button>
      {/each}
    </nav>
  </aside>

  <main bind:this={main} tabindex="-1">
    {#if current === 'home'}
      <Home {go} />
    {:else if current === 'study'}
      <Study />
    {:else if current === 'exams'}
      <Exams />
    {:else if current === 'review'}
      <Review />
    {:else if current === 'browser'}
      <QuestionBrowser />
    {:else if current === 'settings'}
      <Settings />
    {:else}
      <About />
    {/if}
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
</style>
