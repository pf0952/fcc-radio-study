<script lang="ts">
  import { dataInfo } from '../lib/backend';
</script>

<h1>Settings</h1>
<p class="lead">Where your progress is stored.</p>

<section class="card" aria-labelledby="settings-data">
  <h2 id="settings-data">Data folder</h2>
  {#await dataInfo()}
    <p class="muted">Checking…</p>
  {:then info}
    <p><code>{info.path}</code></p>
    {#if info.portable}
      <p class="muted">Portable: the folder sits next to the program, so your progress travels with it on a USB stick.</p>
    {:else}
      <p class="muted">The folder next to the program isn't writable, so your progress is stored in your Windows profile (%APPDATA%) instead.</p>
    {/if}
  {:catch err}
    <p class="error">Could not read the data folder: {err}</p>
  {/await}
</section>

<style>
  .error {
    color: var(--bad);
  }
</style>
