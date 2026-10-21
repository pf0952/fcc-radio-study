<script lang="ts">
  import type { Scene } from '../lib/types.ts';
  import BandStrip from './templates/BandStrip.svelte';
  import BlockDiagram from './templates/BlockDiagram.svelte';
  import ComparisonTable from './templates/ComparisonTable.svelte';
  import EquipmentCard from './templates/EquipmentCard.svelte';
  import Formula from './templates/Formula.svelte';
  import KeyFacts from './templates/KeyFacts.svelte';
  import RadarPPI from './templates/RadarPPI.svelte';
  import Timeline from './templates/Timeline.svelte';
  import TitleCard from './templates/TitleCard.svelte';
  import Waveform from './templates/Waveform.svelte';

  /** Renders one scene. `fraction` is how far the narration has got (0-1); templates reveal their parts with it. */
  let { scene, fraction }: { scene: Scene; fraction: number } = $props();

  const templates = {
    'title-card': TitleCard,
    formula: Formula,
    'block-diagram': BlockDiagram,
    waveform: Waveform,
    'radar-ppi': RadarPPI,
    'equipment-card': EquipmentCard,
    'comparison-table': ComparisonTable,
    timeline: Timeline,
    'band-strip': BandStrip,
    'key-facts': KeyFacts,
  };
  // Each template declares its own params shape; lesson files are checked by scripts/check-lessons.ts.
  const Template = $derived(templates[scene.template] as unknown as typeof KeyFacts);
</script>

<div class="stage" role="img" aria-label={scene.onScreen.join('. ')}>
  {#key scene.id}
    <Template params={scene.params as never} {fraction} />
  {/key}
</div>

<style>
  .stage {
    --st-bg: #0b1a2a;
    --st-panel: #142b44;
    --st-line: #2a4560;
    --st-text: #eaf1f8;
    --st-muted: #9db2c8;
    --st-amber: #f4b942;
    --st-teal: #4fd1c5;
    --st-coral: #ff7a6b;
    container-type: inline-size;
    position: relative;
    aspect-ratio: 16 / 9;
    width: 100%;
    overflow: hidden;
    border-radius: var(--radius);
    background: radial-gradient(120% 90% at 20% 0%, #13304d 0%, var(--st-bg) 60%);
    color: var(--st-text);
    font-family: 'Segoe UI Variable Display', 'Segoe UI', system-ui, sans-serif;
  }

  .stage > :global(*) {
    position: absolute;
    inset: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    .stage :global(*) {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
</style>
