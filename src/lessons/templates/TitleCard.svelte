<script lang="ts">
  let { params, fraction }: { params: { kicker?: string; title: string; subtitle?: string; length?: string }; fraction: number } = $props();
</script>

<div class="title-card">
  {#if params.kicker}<p class="kicker">{params.kicker}</p>{/if}
  <h2>{params.title}</h2>
  <span class="rule"></span>
  {#if params.subtitle}<p class="sub" class:shown={fraction > 0.2}>{params.subtitle}</p>{/if}
  {#if params.length}<p class="length">{params.length}</p>{/if}
</div>

<style>
  .title-card {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 8cqi;
  }

  .kicker {
    margin: 0;
    color: var(--st-amber);
    font-size: 1.9cqi;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    animation: rise 0.7s ease-out both;
  }

  h2 {
    margin: 1.2cqi 0 0;
    font-size: 5.6cqi;
    line-height: 1.1;
    animation: rise 0.8s 0.15s ease-out both;
  }

  .rule {
    display: block;
    height: 0.35cqi;
    width: 18cqi;
    margin: 2.2cqi 0;
    background: var(--st-amber);
    transform-origin: left;
    animation: grow 0.9s 0.4s ease-out both;
  }

  .sub {
    margin: 0;
    max-width: 70cqi;
    color: var(--st-muted);
    font-size: 2.4cqi;
    opacity: 0;
    transition: opacity 0.8s;
  }

  .sub.shown {
    opacity: 1;
  }

  .length {
    margin: 2cqi 0 0;
    color: var(--st-amber);
    font-size: 1.9cqi;
    font-weight: 600;
    animation: rise 0.8s 0.3s ease-out both;
  }

  @keyframes rise {
    from {
      opacity: 0;
      transform: translateY(1.5cqi);
    }
  }

  @keyframes grow {
    from {
      transform: scaleX(0);
    }
  }
</style>
