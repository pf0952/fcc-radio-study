# Lesson briefs

Thirty lessons, one per subelement: Element 3 (A–Q), Element 8 (A–F) and Element 9 (A–G). Each brief lists every key topic with the facts to teach, a visual style and a narration style.

The facts come from the pools' keyed answers and explanations, and each one cites the questions it comes from, so every pool question is covered by at least one fact. Nothing here should contradict the pool: where a keyed answer is flagged as questionable, the fact teaches the exam answer and says so. Element 3 uses 12.346 µs for the radar mile; Element 8 uses 12.34 µs.

Scene templates: title card, formula reveal, block diagram, waveform, radar PPI, equipment card, comparison table, timeline / interval badges, frequency band strip, key-fact list.

## Contents

- [3-A Principles](#lesson-3-a-principles)
- [3-B Electrical Math](#lesson-3-b-electrical-math)
- [3-C Components](#lesson-3-c-components)
- [3-D Circuits](#lesson-3-d-circuits)
- [3-E Digital Logic](#lesson-3-e-digital-logic)
- [3-F Receivers](#lesson-3-f-receivers)
- [3-G Transmitters](#lesson-3-g-transmitters)
- [3-H Modulation](#lesson-3-h-modulation)
- [3-I Power Sources](#lesson-3-i-power-sources)
- [3-J Antennas](#lesson-3-j-antennas)
- [3-K Aircraft](#lesson-3-k-aircraft)
- [3-L Installation, Maintenance & Repair](#lesson-3-l-installation-maintenance--repair)
- [3-M Communications Technology](#lesson-3-m-communications-technology)
- [3-N Marine](#lesson-3-n-marine)
- [3-O RADAR](#lesson-3-o-radar)
- [3-P Satellite](#lesson-3-p-satellite)
- [3-Q SAFETY](#lesson-3-q-safety)
- [8-A RADAR Principles](#lesson-8-a-radar-principles)
- [8-B Transmitting Systems](#lesson-8-b-transmitting-systems)
- [8-C Receiving Systems](#lesson-8-c-receiving-systems)
- [8-D Display & Control Systems](#lesson-8-d-display--control-systems)
- [8-E Antenna Systems](#lesson-8-e-antenna-systems)
- [8-F Installation, Maintenance & Repair](#lesson-8-f-installation-maintenance--repair)
- [9-A VHF-DSC Equipment & Operation](#lesson-9-a-vhf-dsc-equipment--operation)
- [9-B MF-HF-DSC-SITOR (NBDP) Equip. & Ops](#lesson-9-b-mf-hf-dsc-sitor-nbdp-equip--ops)
- [9-C Satellite Systems](#lesson-9-c-satellite-systems)
- [9-D Other GMDSS Equipment](#lesson-9-d-other-gmdss-equipment)
- [9-E Power Sources](#lesson-9-e-power-sources)
- [9-F Other Equipment and Networks](#lesson-9-f-other-equipment-and-networks)
- [9-G Inspections, Installations and Instruments](#lesson-9-g-inspections-installations-and-instruments)

## Lesson 3-A: Principles

Element 3 · Subelement A · Key topics 1–8

**Goal:** Name the basic electrical units, laws, materials, components and AC values the Element 3 exam asks about, and pick the right one for each situation.

**Visual style:** Use key-fact lists and comparison tables for definitions and materials, equipment cards for components such as capacitors, coils, diodes and FETs, and formula reveals for the few formulas. A recurring motif is one sine wave with its RMS, peak and peak-to-peak levels marked, which returns whenever AC values come up.

**Narration style:** A friendly, plain-spoken instructor with short sentences and a steady pace. Spell out each acronym the first time (RMS, root mean square; EMF, electromotive force; PIV, peak inverse voltage; FET, field-effect transistor; VAR, volt-amperes reactive), say symbols in words ("X sub L", "two pi f L", ohms, volt-amperes), and stress the tested numbers: 1.414, 0.9, 117 volts, 165.5 volts and 360 degrees.

### Key topic 1: Electrical Elements

Facts to teach:

- The product of the readings of an AC voltmeter and an AC ammeter is apparent power, in volt-amperes; true power also needs the power factor, because voltage and current may be out of phase. [3-1A1]
- The watt is the basic unit of electrical power: one joule per second, or one volt times one ampere. [3-1A2]
- The amount of electrical energy stored in an electrostatic field is expressed in joules, the unit of energy; coulombs measure charge and watts measure the rate of energy flow. [3-1A3]
- A capacitor stores electrical energy in the electrostatic field between its plates; an inductor stores energy in a magnetic field instead. [3-1A4]
- The inductive reactance of a coil, from frequency and inductance, is X<sub>L</sub> = 2π f L, in ohms with f in hertz and L in henrys; the 1 / 2π f C form is capacitive reactance, not inductive. [3-1A5]
- Reactive power is the out-of-phase power associated with inductors and capacitors, measured in volt-amperes reactive (VAR); it is stored and returned each cycle and does no net work. [3-1A6]

Scene ideas: formula reveal: X<sub>L</sub> = 2π f L with each symbol labeled; comparison table: apparent power in volt-amperes, true power in watts, reactive power in VAR; equipment card: a capacitor with callouts for the plates and the electrostatic field holding energy measured in joules.

### Key topic 2: Magnetism

Facts to teach:

- The strength of the magnetic field around a conductor is determined by the amount of current: double the current and the field doubles. [3-2A1]
- A current flowing through a conductor produces a magnetic field; a voltage with no current, such as an unconnected DC source or a charged capacitor, does not. [3-2A2]
- When induced currents produce expanding magnetic fields that oppose the original magnetic field, this is Lenz’s law. [3-2A3]
- Reluctance is the opposition to the creation of magnetic lines of force in a magnetic circuit, the magnetic counterpart of resistance. [3-2A4]
- Back EMF (electromotive force) is a voltage that opposes the applied EMF, induced by a coil's own changing magnetic field; it is a voltage, not a current. [3-2A5]
- Permeability is the ratio of magnetic flux density in a substance to the magnetizing force that produces it; iron and ferrite have high permeability. [3-2A6]

Scene ideas: equipment card: a wire carrying current with circular magnetic lines of force that grow stronger as the current rises; comparison table: reluctance opposes the creation of flux, permeability is flux density divided by magnetizing force; key-fact list: Lenz’s law and back EMF, both opposing the change that caused them.

### Key topic 3: Materials

Facts to teach:

- A zinc bar is usually employed as a sacrificial anode: zinc is more active than a vessel's bronze, steel and copper fittings, so it corrodes instead of them. [3-3A1]
- The relative dielectric constant for air is 1, the same value defined for a vacuum. [3-3A2]
- Of common underwater fittings, a stainless steel propeller shaft may be least affected by galvanic corrosion in seawater, while an aluminum outdrive corrodes readily. [3-3A3]
- Skin effect is the phenomenon where RF current flows in a thin layer of the conductor, closer to the surface, as frequency increases, which raises its AC resistance. [3-3A4]
- Corrosion resulting from electric current flow between dissimilar metals is called galvanic corrosion; stray current corrosion is driven by an outside source instead. [3-3A5]
- Mica is the most useful insulator at UHF (ultra high frequency) because of its very low dielectric loss; rubber and wax impregnated paper become lossy, and lead is a conductor, not an insulator. [3-3A6]

Scene ideas: equipment card: a boat hull with a zinc anode, a bronze through-hull, an aluminum outdrive and a stainless steel propeller shaft, with callouts showing which metals corrode; equipment card: a conductor cross section where RF current shrinks to a thin surface layer as frequency rises; comparison table: insulators at UHF with mica best, rubber and wax impregnated paper lossy, lead a conductor.

### Key topic 4: Resistance, Capacitance & Inductance

Facts to teach:

- The total inductance of inductors in series is L<sub>T</sub> = L<sub>1</sub> + L<sub>2</sub>, adding just like series resistors; the reciprocal formula is for inductors in parallel. [3-4A1]
- Good conductors with minimum resistance have many free electrons, loosely bound to their atoms. [3-4A2]
- Gold, silver and copper are the best low-resistance conductors; stainless steel, bronze, lead, iron, nickel, zinc and manganese all have higher resistance. [3-4A3]
- A bypass capacitor removes alternating current by providing a low impedance path to ground, while it blocks DC. [3-4A4]
- The total capacitance of three capacitors in parallel is C<sub>T</sub> = C<sub>1</sub> + C<sub>2</sub> + C<sub>3</sub>; the sum-of-reciprocals formula is for capacitors in series. [3-4A5]
- To reduce the inductance of an antenna coil, reduce the number of turns; adding turns, adding core permeability or compressing the turns all raise inductance. [3-4A6]

Scene ideas: formula reveal: L<sub>T</sub> = L<sub>1</sub> + L<sub>2</sub> for series inductors and C<sub>T</sub> = C<sub>1</sub> + C<sub>2</sub> + C<sub>3</sub> for parallel capacitors; block diagram: a bypass capacitor shunting AC to ground while DC continues along the supply line; equipment card: an antenna coil with turns removed one by one as its inductance falls.

### Key topic 5: Semi-conductors

Facts to teach:

- The two most commonly used specifications for a junction diode are maximum forward current and PIV (peak inverse voltage). [3-5A1]
- The junction temperature limits the maximum forward current in a junction diode; exceeding it destroys the diode. [3-5A2]
- MOSFETs (metal oxide semiconductor field-effect transistors) are built with a Zener diode in their gate to protect the thin gate oxide from static charges and excessive voltages. [3-5A3]
- The two basic types of junction field-effect transistors (JFETs) are N-channel and P-channel; MOSFETs and GaAsFETs are separate FET families. [3-5A4]
- A common emitter amplifier has more voltage gain than a common collector, whose voltage gain is slightly below 1. [3-5A5]
- An FET (field-effect transistor) has high input impedance; a bipolar transistor has low input impedance, because its base draws current. [3-5A6]

Scene ideas: equipment card: a junction diode with callouts for maximum forward current, PIV and junction temperature; equipment card: a MOSFET with the gate-protection Zener diode highlighted; comparison table: FET high input impedance versus bipolar low input impedance, and common emitter versus common collector voltage gain.

### Key topic 6: Electrical Measurements

Facts to teach:

- An AC ammeter indicates effective (RMS) values of current; RMS stands for root mean square, and there is no such measure as TRM. [3-6A1]
- Multiply the voltage shown on an AC voltmeter by 1.414 to obtain the peak voltage; multiplying by 0.707 does the opposite, peak to RMS. [3-6A2]
- Multiply the voltage shown on an AC voltmeter by 0.9 to obtain the average voltage. [3-6A5]
- The RMS voltage at a common household electrical power outlet is 117-V AC. [3-6A3]
- The peak voltage at a common household electrical outlet is 165.5 volts (117 × √2); 331 volts is the peak-to-peak value. [3-6A6]
- Peak-to-peak is the easiest voltage amplitude to measure on an oscilloscope showing a pure sine wave, read straight off the graticule. [3-6A4]

Scene ideas: waveform: a sine wave marked with RMS 117 volts, peak 165.5 volts and peak-to-peak 331 volts; formula reveal: RMS × 1.414 = peak and RMS × 0.9 = average; equipment card: an oscilloscope screen with the peak-to-peak height read off the graticule.

### Key topic 7: Waveforms

Facts to teach:

- A sine wave is a wave whose amplitude at any given instant can be represented by the projection of a point on a wheel rotating at a uniform speed. [3-7A1]
- There are 360 degrees in one complete sine wave cycle; each half cycle spans 180 degrees. [3-7A2]
- A square wave is made up of sine waves of the fundamental frequency and all the odd harmonics. [3-7A3]
- A square wave abruptly changes back and forth between two voltage levels and stays at these levels for equal amounts of time. [3-7A4]
- A sawtooth wave is made up of sine waves at the fundamental frequency and all the harmonics, even and odd. [3-7A5]
- A sawtooth wave is characterized by a rise time significantly faster than the fall time (or vice versa); a square wave rises and falls equally fast. [3-7A6]

Scene ideas: waveform: a point on a wheel rotating at uniform speed tracing a sine wave through 360 degrees; waveform: a square wave built up from the fundamental plus the odd harmonics; comparison table: square wave with odd harmonics and equal time at two levels versus sawtooth wave with all harmonics and unequal rise and fall times.

### Key topic 8: Conduction

Facts to teach:

- Root mean square (RMS) is the AC voltage that causes the same heating in a resistor as a corresponding value of DC voltage, which is why it is also called the effective value. [3-8A1]
- In a circuit with both inductors and capacitors, reactive power alternates between magnetic and electric fields and is not dissipated. [3-8A2]
- Halving the cross-sectional area of a conductor doubles its resistance, because resistance is inversely proportional to area. [3-8A3]
- Common materials in order of descending conductivity are silver, copper, aluminum, iron, and lead. [3-8A4]
- True power (power dissipated) where AC voltage and current are out of phase is apparent power times the power factor; RMS voltage times RMS current alone gives only apparent power. [3-8A5]
- With a fixed internal resistance, maximum power is transferred to the load when the load impedance equals the internal impedance of the source. [3-8A6]

Scene ideas: formula reveal: true power = apparent power × power factor; key-fact list: silver, copper, aluminum, iron, lead in order of descending conductivity; block diagram: a source with its internal impedance feeding a load of equal impedance for maximum power transfer.

## Lesson 3-B: Electrical Math

Element 3 · Subelement B · Key topics 9–18

**Goal:** Work the Ohm’s law, power, frequency-error, sine-wave, time-constant, impedance and power-supply calculations on the Element 3 exam and reach the keyed result each time.

**Visual style:** Formula reveal carries most of this lesson: write each formula, then work the pool example line by line with the answer boxed. Equipment cards show Figures 3B1, 3B2 and 3B3, waveforms show sine-wave angles, and a recurring comparison table lines up each network's resistance, reactance and answer.

**Narration style:** A friendly, plain-spoken instructor who works each calculation slowly, one step per short sentence. Say units and prefixes in words (microamps, megohms, microfarads, kilohertz, "X sub L", "plus j", "minus j"), spell out each acronym the first time (RMS, root mean square; ppm, parts per million; RC, resistor-capacitor; RL, resistor-inductor), and stress the boxed results and the constants 1.414, 0.707, 63.2 percent, 86.5 percent and 13.5 percent.

### Key topic 9: Ohm’s Law-1

Facts to teach:

- Ohm's law is I = E / R, rearranged as E = I × R and R = E / I; the form I = R / E is incorrect, because it is upside down. [3-9B2]
- With 2 amperes through a 50-ohm resistor, E = I × R = 2 × 50 = 100 volts. [3-9B3]
- A 100-ohm resistor across 200 volts carries I = E / R = 200 / 100 = 2 amperes. [3-9B4]
- A resistor carrying 3 amperes from 90 volts has R = E / I = 90 / 3 = 30 ohms; multiplying instead gives 270, which is the power in watts. [3-9B5]
- For full-scale deflection on a 50 microamp DC meter at 200 volts DC, the series resistor is R = E / I = 200 V / 50 µA = 4 megohms. [3-9B1]
- A 500-ohm relay coil that operates on 125 mA needs a total of 110 V / 125 mA = 880 Ω from 110 V DC, so the series resistor is 880 − 500 = 380 ohms. [3-9B6]

Scene ideas: formula reveal: I = E / R, E = I × R and R = E / I, with I = R / E crossed out; formula reveal: 200 V / 50 µA = 4 megohms, then 110 V / 125 mA = 880 Ω minus the 500 Ω coil = 380 ohms.

### Key topic 10: Ohm’s Law-2

Facts to teach:

- For a 100 watt transmitter into 50 ohms, E<sub>RMS</sub> = √(P × R) = √(100 × 50) ≈ 70.7 V, peak = 70.7 × 1.414 ≈ 100 V, and peak-to-peak is twice the peak, 200 volts. [3-10B1]
- The maximum DC or RMS voltage across a 20 watt, 2000 ohm resistor is E = √(P × R) = √(20 × 2000) = √40,000 = 200 volts. [3-10B2]
- For a 500-ohm, 2-watt resistor in parallel with a 1500-ohm, 1-watt resistor, the limits are √(2 × 500) ≈ 31.6 V and √(1 × 1500) ≈ 38.7 V; parallel resistors share one voltage, so the lower limit, 31.6 volts, governs. [3-10B3]
- In Figure 3B1, D1 is reverse biased and conducts no current, so R1, R2 and R3 form a 300 + 200 + 100 = 600 Ω series string and the drop across R1 is 10 V × 300 / 600 = 5 volts. [3-10B4]
- In Figure 3B2, R2 and R3 alone would sit at 12 × 15k / 25k = 7.2 V, so the 3 V Zener conducts and clamps that node at 3 V, leaving 12 − 3 = 9 volts across R1. [3-10B5]
- The maximum current for a resistor marked “2000 ohms, 200 watts” is I = √(P / R) = √(200 / 2000) = √0.1 ≈ 0.316 amps. [3-10B6]

Scene ideas: formula reveal: √(100 × 50) ≈ 70.7 V RMS, × 1.414 ≈ 100 V peak, × 2 = 200 volts peak-to-peak; equipment card: Figure 3B1 with D1 marked reverse biased and 5 volts across R1; equipment card: Figure 3B2 with the Zener clamping at 3 V and 9 volts across R1.

### Key topic 11: Frequency

Facts to teach:

- The most a transmit frequency can differ from a counter reading is reading × ppm / 1,000,000, where ppm means parts per million; at 1 ppm, a frequency in MHz gives the same number in hertz. [3-11B1, 3-11B4, 3-11B5, 3-11B6]
- A reading of 462,100,000 Hz with a ± 0.1 ppm time base can be off by 462,100,000 × 0.1 / 1,000,000 = 46.21 Hz. [3-11B1]
- A reading of 462,100,000 hertz with a ± 1.0 ppm time base can be off by 462,100,000 × 1.0 / 1,000,000 = 462.1 Hz. [3-11B6]
- A reading of 156,520,000 hertz with a ± 1.0 ppm time base can be off by 156,520,000 × 1.0 / 1,000,000 = 156.52 Hz. [3-11B4]
- A reading of 156,520,000 Hertz with a +/- 10 ppm time base can be off by 156,520,000 × 10 / 1,000,000 = 1565.20 Hz. [3-11B5]
- The second harmonic is twice the fundamental: 2 × 380 kHz = 760 kHz, and for SSB (single sideband) frequency 4146 kHz, 2 × 4146 kHz = 8292 kHz. [3-11B2, 3-11B3]

Scene ideas: formula reveal: reading × ppm / 1,000,000 worked for 462,100,000 Hz at 0.1 ppm and 1.0 ppm, then 156,520,000 Hz at 1.0 ppm and 10 ppm; frequency band strip: 380 kHz with its second harmonic at 760 kHz, and 4146 kHz with its second harmonic at 8292 kHz.

### Key topic 12: Waveforms

Facts to teach:

- The instantaneous amplitude of a sine wave is v = V<sub>peak</sub> × sin θ; angles from 0° to 180° give positive values and angles from 180° to 360° give negative values. [3-12B1, 3-12B2, 3-12B3]
- At pi/3 radians, which is 60°, a sine wave with a 5 volt peak is at 5 × sin 60° = 5 × 0.866 ≈ +4.3 volts. [3-12B1]
- At 150 degrees, a sine wave with a 5 volt peak is at 5 × sin 150° = 5 × 0.5 = +2.5 volts. [3-12B2]
- At 240 degrees, a sine wave with a 5 volt peak is at 5 × sin 240° = 5 × (-0.866) ≈ -4.3 volts. [3-12B3]
- The root-mean-square value of an AC voltage is equivalent to the DC voltage causing the same heating in a given resistor as the RMS AC voltage of the same value. [3-12B4]
- A 340-volt peak-to-peak pure sine wave has a peak of 340 / 2 = 170 V and an RMS value of 0.707 × 170 ≈ 120 volts AC; 170 V is the peak, not the RMS value. [3-12B5]
- In Figure 3B3, waveform A reaches its positive peak at the instant waveform B starts its cycle, as the dashed line shows, so waveform B is lagging waveform A by 90 degrees, a quarter cycle. [3-12B6]

Scene ideas: waveform: a 5 volt peak sine wave with markers at 60°, 150° and 240° showing +4.3, +2.5 and -4.3 volts; formula reveal: 340 / 2 = 170 V peak, then 0.707 × 170 ≈ 120 volts RMS; equipment card: Figure 3B3 with the dashed line showing waveform B lagging waveform A by 90 degrees.

### Key topic 13: Power Relationships

Facts to teach:

- Power factor is the cosine of the phase angle between voltage and current, so an R-L circuit with a 60 degree phase angle has PF = cos 60° = 0.5. [3-13B1]
- An R-L circuit with a 45 degree phase angle has PF = cos 45° ≈ 0.707. [3-13B5]
- An R-L circuit with a 30 degree phase angle has PF = cos 30° ≈ 0.866; 0.577 is tan 30°, not cos 30°. [3-13B6]
- If the resistance across a constant voltage is halved, the power dissipation doubles, because P = E² / R. [3-13B2]
- 746 watts, the lifting of 550 pounds at the rate of one foot per second, is one horsepower. [3-13B3]
- Where AC voltage and current are out of phase, true power is found by multiplying the apparent power times the power factor; RMS voltage times RMS current alone gives only apparent power. [3-13B4]

Scene ideas: formula reveal: PF = cos θ worked for 60°, 45° and 30°, giving 0.5, 0.707 and 0.866; formula reveal: true power = apparent power × power factor, then P = E² / R with R halved and P doubled; key-fact list: 746 watts equals 550 pounds lifted one foot per second equals one horsepower.

### Key topic 14: RC Time Constants-1

Facts to teach:

- One time constant, τ = RC seconds, is the time required for the capacitor in an RC circuit to be charged to 63.2% of the supply voltage. [3-14B1, 3-14B2]
- 36.8% is not the charge reached in one time constant; it is the voltage left on a discharging capacitor after one time constant. [3-14B2]
- In an RL circuit, one time constant, τ = L / R, is the time required for the current to build up to 63.2% of the maximum value. [3-14B3, 3-14B4]
- In an RL circuit it is the current, not the voltage, that builds up to 63.2%, because the inductor opposes changes in current. [3-14B4]
- After two time constants, the capacitor in an RC circuit is charged to 1 − e<sup>−2</sup> = 86.5% of the supply voltage. [3-14B5]
- After two time constants, a discharging capacitor in an RC circuit is down to e<sup>−2</sup> = 13.5% of the starting voltage. [3-14B6]

Scene ideas: formula reveal: τ = RC and τ = L / R, each defined by the 63.2% point; timeline / interval badges: one time constant charged 63.2% and discharged to 36.8%, two time constants charged 86.5% and discharged to 13.5%.

### Key topic 15: RC Time Constants-2

Facts to teach:

- The time constant is τ = RC, giving seconds when R is in ohms and C in farads, or when R is in megohms and C in microfarads. [3-15B3, 3-15B4]
- A 100-microfarad capacitor and a 470-kilohm resistor in series give τ = 470,000 Ω × 0.0001 F = 47 seconds. [3-15B3]
- A 220-microfarad capacitor and a 1-megohm resistor in parallel give τ = 1,000,000 Ω × 0.00022 F = 220 seconds. [3-15B4]
- Two 100-microfarad capacitors and two 470-kilohm resistors all in series give 940 kΩ × 50 µF = 47 seconds, and all in parallel give 235 kΩ × 200 µF = 47 seconds. [3-15B2, 3-15B5]
- Two 220-microfarad capacitors and two 1-megohm resistors all in parallel give 0.5 MΩ × 440 µF = 220 seconds, and all in series give 2 MΩ × 110 µF = 220 seconds. [3-15B1, 3-15B6]
- When a matched pair of resistors and a matched pair of capacitors are both in series or both in parallel, the doubling and halving cancel, so the time constant equals that of one resistor with one capacitor. [3-15B1, 3-15B2, 3-15B5, 3-15B6]

Scene ideas: formula reveal: τ = RC = 470,000 Ω × 0.0001 F = 47 seconds, then 1,000,000 Ω × 0.00022 F = 220 seconds; comparison table: pairs in series versus pairs in parallel, with R and C doubling or halving and τ staying at 47 seconds and 220 seconds.

### Key topic 16: Impedance Networks-1

Facts to teach:

- In rectangular coordinates a series network is written R + jX: the resistance is the real part, inductive reactance takes a plus j, and capacitive reactance takes a minus j. [3-16B1, 3-16B2, 3-16B3, 3-16B4, 3-16B6]
- A 0.1-microhenry inductor in series with 20 ohms at 30 MHz has X<sub>L</sub> = 2πfL = 2π × 30×10⁶ × 0.1×10⁻⁶ ≈ 18.8 Ω, so Z = 20 +j19. [3-16B1]
- A 0.1-microhenry inductor in series with 30 ohms at 5 MHz has X<sub>L</sub> = 2π × 5×10⁶ × 0.1×10⁻⁶ ≈ 3.14 Ω, so Z = 30 +j3. [3-16B2]
- A 10-microhenry inductor in series with 40 ohms at 500 MHz has X<sub>L</sub> = 2π × 500×10⁶ × 10×10⁻⁶ ≈ 31,400 Ω, so Z = 40 +j31400. [3-16B3]
- A 1.0-millihenry inductor in series with 200 ohms at 30 kHz has X<sub>L</sub> = 2π × 30×10³ × 1.0×10⁻³ ≈ 188 Ω, so Z = 200 + j188. [3-16B4]
- A 0.001-microfarad capacitor in series with 400 ohms at 500 kHz has X<sub>C</sub> = 1 / (2πfC) = 1 / (2π × 500×10³ × 0.001×10⁻⁶) ≈ 318 Ω, so Z = 400 - j318. [3-16B6]
- A 0.01-microfarad capacitor in parallel with 300 ohms at 50 kHz has X<sub>C</sub> ≈ 318 Ω, and product over sum, (300 × −j318) / (300 − j318), gives Z = 159 - j150; the minus j marks a capacitive network. [3-16B5]

Scene ideas: formula reveal: X<sub>L</sub> = 2πfL for 0.1 µH at 30 MHz, giving 18.8 Ω and Z = 20 +j19; formula reveal: X<sub>C</sub> = 1 / (2πfC) for 0.001 µF at 500 kHz, giving 318 Ω and Z = 400 - j318; comparison table: the six networks with their resistance, reactance and rectangular impedance.

### Key topic 17: Impedance Networks-2

Facts to teach:

- A polar plot of a sine-wave voltage shows its magnitude and phase angle, as a phasor whose length is the magnitude and whose angle from the reference axis is the phase. [3-17B6]
- In polar form, impedance is written as a magnitude in ohms and a phase angle, such as 141 ohms, /45 degrees, where the slash stands for the angle sign; inductive angles are positive and capacitive angles negative. [3-17B2, 3-17B3]
- For R and X in series, |Z| = √(R² + X²) and θ = arctan(X / R): a 100-ohm-reactance inductor with a 100-ohm resistor gives √(100² + 100²) ≈ 141 ohms at arctan(1) = 45 degrees, so Z = 141 ohms, /45 degrees. [3-17B2]
- A 400-ohm-reactance capacitor in series with a 300-ohm resistor gives √(300² + 400²) = 500 ohms at −arctan(1.333) ≈ −53.1°, so Z = 500 ohms, /-53.1 degrees. [3-17B3]
- With a 300-ohm-reactance capacitor, a 600-ohm-reactance inductor and a 400-ohm resistor in series, the reactances cancel to 600 − 300 = 300 Ω inductive, so |Z| = √(400² + 300²) = 500 ohms at arctan(300 / 400) ≈ 37°, giving 500 ohms, /37 degrees. [3-17B4]
- For R and X in parallel, |Z| = R × X / √(R² + X²) and the angle is arctan(R / X): a 400-ohm-reactance inductor in parallel with a 300-ohm resistor gives 300 × 400 / 500 = 240 ohms at arctan(0.75) ≈ 36.9°, so Z = 240 ohms, /36.9 degrees. [3-17B5]
- A 100-picofarad capacitor in parallel with a 4000-ohm resistor at 500 kHz has X<sub>C</sub> ≈ 3183 Ω, so |Z| = 4000 × 3183 / 5112 ≈ 2490 ohms and θ = −arctan(1.257) ≈ −51.5°, giving 2490 ohms, /-51.5 degrees. [3-17B1]

Scene ideas: formula reveal: |Z| = √(300² + 400²) = 500 ohms and θ = −arctan(1.333) ≈ −53.1°, giving 500 ohms, /-53.1 degrees; equipment card: a polar phasor plot with callouts for magnitude and phase angle, drawn for 141 ohms, /45 degrees; comparison table: series and parallel formulas beside the five polar answers.

### Key topic 18: Calculations

Facts to teach:

- The magnitude of a series impedance with 6 ohms of resistance, 17 ohms of inductive reactance and no capacitive reactance is |Z| = √(R² + X<sub>L</sub>²) = √(6² + 17²) = √325 ≈ 18 ohms; adding 6 and 17 ignores the 90° phase difference. [3-18B1]
- To bias a 10-volt Zener (I<sub>min.</sub> = 5 mA, I<sub>max.</sub> = 95 mA) at its midpoint from a 20-V supply, the resistor drops 20 − 10 = 10 V at (5 + 95) / 2 = 50 mA, so R = 10 V / 50 mA = 200 ohms. [3-18B2]
- Percentage voltage regulation = (E<sub>no load</sub> − E<sub>full load</sub>) / E<sub>full load</sub> × 100%, so 12 volts no load and 10 volts full load give (12 − 10) / 10 × 100% = 20%. [3-18B3]
- Because regulation is based on the full-load voltage, a 200 volt full load voltage with 25% regulation gives E<sub>NL</sub> = E<sub>FL</sub> × (1 + 0.25) = 200 × 1.25 = 250 volts no load. [3-18B5]
- Impedance ratio is the square of the turns ratio, so matching 500 ohms to 10 ohms needs N<sub>p</sub> / N<sub>s</sub> = √(Z<sub>p</sub> / Z<sub>s</sub>) = √(500 / 10) = √50 ≈ 7.1, a 7.1 to 1 turns ratio; 50 to 1 is the impedance ratio. [3-18B4]
- Conductance (G) is the reciprocal of resistance: 6 amperes at 12 volts DC means R = 2 Ω, so G = 1 / R = 0.50 Siemens (mhos), the same as I / E = 6 / 12. [3-18B6]

Scene ideas: formula reveal: √(6² + 17²) = √325 ≈ 18 ohms, then regulation (12 − 10) / 10 × 100% = 20% and 200 × 1.25 = 250 volts; block diagram: a 20 V supply feeding a 200 ohm current-limiting resistor and a 10 V Zener at 50 mA; formula reveal: √(500 / 10) = √50 ≈ 7.1 to 1, then G = 1 / R = 0.50 Siemens.

## Lesson 3-C: Components

Element 3 · Subelement C · Key topics 19–28

**Goal:** Identify the components the Element 3 exam asks about, from photoconductive devices, capacitors and transformers to regulators, SCRs, TRIACs, special diodes, transistors and LEDs, say what each one does, and work the transformer turns-ratio problems.

**Visual style:** Equipment cards carry most of the lesson, one labeled device at a time, with pool Figures 3C4 and 3C5 shown as equipment cards for the capacitor questions. Formula reveals handle the transformer turns ratio, and comparison tables sort look-alike devices such as SCR versus TRIAC, alpha versus beta, and saturation versus cutoff. A recurring motif is each new device introduced by its schematic symbol with its terminal names appearing one by one.

**Narration style:** A friendly, plain-spoken instructor with short sentences and a steady pace. Spell out each acronym the first time (LED, light-emitting diode; SCR, silicon-controlled rectifier; RF, radio frequency; EMF, electromotive force; VHF and UHF, very high and ultra high frequency; FET, field-effect transistor; CMOS, complementary metal-oxide semiconductor), say symbols and units in words ("E sub S", "N sub P", "I sub C", microfarad, ohms, milliamps), and stress the tested numbers: 26.7 volts, 50 volts, 2 to 1, 2.4 volts to 200 volts and above, 0.707, 0.7 volts and 20 milliamps.

### Key topic 19: Photoconductive Devices

Facts to teach:

- When light shines on photoconductive material, its conductivity increases, because the light frees electrons to act as extra charge carriers. [3-19C1]
- The photoconductive effect is the increased conductivity of an illuminated semiconductor junction; turning light directly into an EMF is the photovoltaic effect, a different process. [3-19C2]
- In crystalline solids, the photoconductive effect produces a noticeable change in the resistance of the solid: bright light gives low resistance and darkness gives high resistance, as in a photoresistor. [3-19C3]
- When a photosensitive semiconductor junction is illuminated, the junction resistance decreases, because light creates extra electron-hole pairs that carry current. [3-19C5]
- An optoisolator, also called an optocoupler, is an LED and a photosensitive device in one package; the signal crosses the gap as light, so the input and output circuits have no electrical connection. [3-19C4, 3-19C6]

Scene ideas: equipment card: a photoresistor under a lamp, its resistance reading falling as the light brightens; block diagram: an optoisolator with an LED shining across a gap onto a photosensitive device, the input and output circuits kept electrically separate.

### Key topic 20: Capacitors

Facts to teach:

- The capacitance of a capacitor is determined by the distance between the plates and the dielectric constant of the material between the plates, as in C = εA/d (A is plate area); the voltage on the plates and the charge stored do not change it. [3-20C1]
- In Figure 3C4, a small variable capacitor installed in place of the dashed line would decrease parasitic oscillations: it acts as a neutralizing capacitor, feeding back an opposite-phase signal that cancels unwanted feedback through the transistor. [3-20C2]
- In Figure 3C4, component 2 provides a signal ground: it is a capacitor to ground whose low reactance at RF shunts the signal away while it blocks DC, so the bias is undisturbed. [3-20C3]
- In Figure 3C5, capacitor 3 is the bypass capacitor: it connects a transistor's emitter to ground across the 100 Ω emitter resistor, so the AC signal bypasses that resistor and the stage keeps its gain. [3-20C4]
- In Figure 3C5, the potentiometer connected to the 1 µF capacitor is used to adjust tone, because the capacitor's reactance changes with frequency and the pot sets how much of part of the audio range passes. [3-20C5]
- A coupling capacitor blocks direct current and passes alternating current, since X<sub>C</sub> = 1/(2πfC) is infinite at DC and small at signal frequencies; it carries the signal between stages while keeping their DC bias separate. [3-20C6]

Scene ideas: formula reveal: C = εA/d with the plate spacing and the dielectric constant highlighted; equipment card: Figure 3C4 with callouts for the dashed line (neutralizing capacitor, fewer parasitic oscillations) and component 2 (signal ground); equipment card: Figure 3C5 with callouts for bypass capacitor 3 across the 100 Ω emitter resistor and the 1 µF capacitor with its tone potentiometer.

### Key topic 21: Transformers

Facts to teach:

- A capacitor is sometimes placed in series with the primary of a power transformer to improve the power factor: its reactance offsets part of the primary's inductive reactance, bringing the current closer to in phase with the voltage. [3-21C1]
- Voltage ratio equals turns ratio, E<sub>S</sub>/E<sub>P</sub> = N<sub>S</sub>/N<sub>P</sub>, so a transformer used to step up its input voltage must have more turns of wire on its secondary than on its primary. [3-21C2]
- Secondary voltage is E<sub>S</sub> = E<sub>P</sub> × N<sub>S</sub>/N<sub>P</sub>: a primary of 2250 turns on 120 VAC develops 120 × 500/2250 = 26.7 volts across a 500-turn secondary, a step-down. [3-21C3]
- With 20 volts applied to a primary of 200 turns, a secondary of 500 turns of the same size wire gives 20 × 500/200 = 50 volts; the wire size (#24) affects how much current the windings carry, not the voltage ratio. [3-21C6]
- When one primary feeds secondaries of 5.0 volts, 12.6 volts and 150 volts with similar wire sizes, the 150 volt winding has the highest measured DC resistance, because it needs the most turns and so the most wire. [3-21C5]
- The ratio of output frequency to input frequency of a single-phase full-wave rectifier is 2:1: it produces two output pulses for each input cycle, so a 60 Hz input gives 120 Hz ripple. [3-21C4]

Scene ideas: formula reveal: E<sub>S</sub> = E<sub>P</sub> × N<sub>S</sub>/N<sub>P</sub>, worked as 120 × 500/2250 = 26.7 volts and then 20 × 500/200 = 50 volts; waveform: a sine wave input beside its full-wave rectified output, two pulses per input cycle for a 2:1 frequency ratio; equipment card: a power transformer with 5.0, 12.6 and 150 volt secondaries, the 150 volt winding drawn with the most turns and the highest DC resistance.

### Key topic 22: Voltage Regulators, Zener Diodes

Facts to teach:

- In a linear electronic voltage regulator, the conduction of a control element is varied in direct proportion to the line voltage or load current; the pass element acts as a smoothly variable resistance and drops the excess voltage as heat. [3-22C1]
- A switching electronic voltage regulator switches the control device on or off, with the duty cycle proportional to the line or load conditions; an inductor and capacitor smooth the pulses. [3-22C2]
- A Zener diode is the stable reference voltage in a linear voltage regulator and in a regulated power supply: reverse biased into breakdown through a current-limiting resistor, it holds a nearly constant voltage, while the pass transistor only carries the load current. [3-22C3, 3-22C4]
- A three-terminal regulator contains a voltage reference, error amplifier, sensing resistors and transistors, and a pass element in one package; its three terminals are input, output and ground (or adjust), not three output voltages. [3-22C5]
- Zener diodes are available with voltage ratings from 2.4 volts to 200 volts and above. [3-22C6]

Scene ideas: comparison table: linear regulator (control element conduction varied smoothly, excess dropped as heat) versus switching regulator (control device switched on or off, duty cycle varied); block diagram: a three-terminal regulator with the voltage reference, error amplifier, sensing resistors and transistors, and pass element drawn in sequence; equipment card: a Zener diode as the reference, with a badge for its rating range of 2.4 volts to 200 volts and above.

### Key topic 23: SCRs, Triacs

Facts to teach:

- The three terminals of an SCR (silicon-controlled rectifier) are anode, cathode and gate; the gate triggers it into conduction, and it stays on until the anode current falls below its holding current. [3-23C2]
- Two similar SCRs safely distribute a circuit's power load when connected in parallel, reverse polarity (inverse parallel), so each one handles alternate half-cycles of the AC. [3-23C1]
- A TRIAC is fabricated as two complementary SCRs in parallel with a common gate terminal, acting as two SCRs back to back facing in opposite directions, so it can conduct either way on AC; a DIAC also conducts both ways but has no gate. [3-23C3, 3-23C4]
- The three terminals of a TRIAC are gate, anode 1 and anode 2 (also called MT1 and MT2); base 1 and base 2 belong to the unijunction transistor. [3-23C5]
- A light-dimming circuit might contain an SCR: delaying its gate trigger within each half-cycle (phase control) reduces the average power to the lamp. [3-23C6]

Scene ideas: equipment card: an SCR symbol with callouts for anode, cathode and gate; comparison table: SCR (anode, cathode and gate, conducts one way) versus TRIAC (gate, anode 1 and anode 2, conducts both ways with one shared gate); waveform: a phase-controlled sine wave in a light dimmer, conduction starting partway through each half-cycle.

### Key topic 24: Diodes

Facts to teach:

- One common use for PIN diodes is as an RF switch: forward biased they present a low RF resistance, and at zero or reverse bias they are nearly an open circuit. [3-24C1]
- A common use of a hot-carrier (Schottky) diode is in VHF and UHF mixers and detectors, because it switches extremely fast with a low forward voltage and low noise. [3-24C2]
- Structurally, the two main categories of semiconductor diodes are junction and point contact; electrolytic and vacuum describe capacitors and tubes, not semiconductor diodes. [3-24C3]
- The principal characteristic of a tunnel diode is a negative resistance region, where its current decreases as its voltage increases. [3-24C6]
- That negative resistance makes the tunnel diode the special type of diode capable of both amplification and oscillation, even at microwave frequencies. [3-24C4]
- A varactor diode varies its internal capacitance as the voltage applied to its terminals varies: more reverse voltage widens the depletion layer and lowers the capacitance, so a control voltage can tune a circuit. [3-24C5]

Scene ideas: comparison table: PIN diode (RF switch), hot-carrier diode (VHF and UHF mixers and detectors), tunnel diode (negative resistance, amplifies and oscillates), varactor diode (capacitance varies with voltage); equipment card: a tunnel diode's current-versus-voltage curve with the negative resistance region highlighted; equipment card: junction and point-contact diode construction side by side.

### Key topic 25: Transistors-1

Facts to teach:

- The three terminals of a bipolar transistor are base, collector and emitter; gate, source and drain belong to a FET, and cathode, plate and grid to a vacuum tube. [3-25C2]
- Alpha is the change of collector current with respect to emitter current, α = ΔI<sub>C</sub>/ΔI<sub>E</sub>, which is just under 1; the ratio to base current is beta, not alpha. [3-25C1]
- Beta is the change of collector current with respect to base current, β = ΔI<sub>C</sub>/ΔI<sub>B</sub>, typically from about 20 to several hundred. [3-25C3]
- The elements of a unijunction transistor are base 1, base 2 and emitter; it is used in relaxation oscillators and SCR trigger circuits. [3-25C4]
- The beta cutoff frequency of a bipolar transistor is the frequency at which the emitter current gain (the common-emitter gain, beta) has decreased to 0.707 of maximum, the −3 dB point. [3-25C5]
- A fully saturated transistor has its collector current at its maximum value: more base current no longer raises it, and only the supply voltage and load resistance limit it. [3-25C6]

Scene ideas: formula reveal: α = ΔI<sub>C</sub>/ΔI<sub>E</sub> and β = ΔI<sub>C</sub>/ΔI<sub>B</sub>, each symbol labeled; comparison table: terminals of the bipolar transistor (base, collector, emitter), unijunction transistor (base 1, base 2, emitter), SCR (anode, cathode, gate) and TRIAC (gate, anode 1, anode 2); equipment card: a gain-versus-frequency curve with the 0.707 point marked as the beta cutoff frequency.

### Key topic 26: Transistors-2

Facts to teach:

- A common base amplifier has more voltage gain than common emitter or common collector: its current gain is just under 1, but it takes the signal at a very low input impedance and delivers it into a high output impedance. [3-26C1]
- An emitter-follower (common collector) amplifier has more current gain than common emitter or common base, β + 1, while its voltage gain is just under 1. [3-26C3]
- A transistor is cut off when there is no current between emitter and collector, so it acts like an open switch. [3-26C2]
- When a transistor is operating in saturation, the base-emitter junction and the collector-base junction are both forward biased, and collector current can rise no further. [3-26C4]
- When an NPN transistor is operating as a Class A amplifier, the base-emitter junction is forward biased and the collector-base junction is reverse biased, keeping it in its linear region for the whole cycle; both reverse biased means cutoff. [3-26C6]
- For current to flow in an NPN silicon transistor's emitter-collector junction, the base must be at least 0.7 volts positive with respect to the emitter, the forward voltage a silicon junction needs to conduct. [3-26C5]

Scene ideas: comparison table: common base (most voltage gain), common emitter, and common collector or emitter follower (most current gain); comparison table: junction bias in cutoff, Class A and saturation; equipment card: an NPN silicon transistor with the base marked at least 0.7 volts positive with respect to the emitter.

### Key topic 27: Light Emitting Diodes

Facts to teach:

- An LED needs forward bias to produce luminescence: electrons crossing the junction recombine with holes and release energy as light, while reverse bias stops the current. [3-27C1]
- The visible color radiated by an LED junction is determined by the materials used to construct the device; voltage and current change brightness, not color. [3-27C2]
- The approximate operating current of a light-emitting diode is 20 mA, and 20 mA is also the maximum current to safely illuminate it; hundreds of milliamps would destroy it. [3-27C3, 3-27C4]
- A series resistor must be connected to protect an LED, because the LED's resistance is very low once it conducts: R = (V<sub>supply</sub> − V<sub>LED</sub>)/I, typically sized for about 20 mA. [3-27C6]
- An LED facing a photodiode in a light-tight enclosure is commonly known as an optoisolator; an optointerrupter instead has an open slot so an object can break the beam. [3-27C5]

Scene ideas: equipment card: an LED with its series resistor, a 20 mA current badge and the formula R = (V<sub>supply</sub> − V<sub>LED</sub>)/I as a callout; key-fact list: forward bias for light, color set by the materials, about 20 mA; block diagram: an LED facing a photodiode inside a light-tight optoisolator.

### Key topic 28: Devices

Facts to teach:

- A forward-biased diode junction is a low impedance: it conducts heavily with only a small voltage drop, while reverse bias makes it a high impedance. [3-28C1]
- FET and CMOS devices need special handling precautions because they are susceptible to damage from static charges, which can puncture their very thin gate oxide; grounded wrist straps, antistatic mats and conductive packaging prevent this. [3-28C2]
- CMOS stands for complementary metal-oxide semiconductor: it pairs P-channel and N-channel MOSFETs, so CMOS logic draws very little static power. [3-28C3]
- The piezoelectric effect is mechanical vibration of a crystal by the application of a voltage; squeezing the crystal produces a voltage in return. [3-28C4]
- A quartz crystal is found in the Pierce oscillator, where it sits in the feedback path and sets the frequency; Hartley and Colpitts oscillators set their frequency with an LC tank instead. [3-28C6]
- An electrical relay is a remotely controlled switching device: a small current through its electromagnet coil opens or closes a separate set of contacts. [3-28C5]

Scene ideas: equipment card: a quartz crystal flexing as a voltage is applied, then wired into the feedback path of a Pierce oscillator; equipment card: a relay with callouts for the coil and the separate switched contacts; key-fact list: forward-biased junction is a low impedance, FET and CMOS are damaged by static charges, CMOS spelled out.

## Lesson 3-D: Circuits

Element 3 · Subelement D · Key topics 29–32

**Goal:** Predict how resonant R-L-C circuits, op-amp circuits, phase-locked loops, synthesizers and mixers behave, and read the Element 3 schematic figures to find an output voltage, the lit lamps, a fault or an output waveform.

**Visual style:** Comparison tables set series and parallel resonance side by side, block diagrams trace the op-amp, PLL and synthesizer signal paths, and pool Figures 3D6 through 3D11 appear as equipment cards with callouts appearing one by one. A recurring motif is a bright dot that travels the signal path from input to output in each circuit, so the learner always sees where the signal goes.

**Narration style:** A friendly, plain-spoken instructor with short sentences and a steady pace. Spell out each acronym the first time (R-L-C, resistor-inductor-capacitor; op-amp, operational amplifier; PLL, phase-locked loop; VCO, voltage-controlled oscillator; DDS, direct digital synthesizer; DAC, digital-to-analog converter; IF, intermediate frequency; RF, radio frequency), say symbols and units in words ("X sub L", "R sub f over R sub in", millivolts, kilohms, megahertz), and stress the tested numbers: 180 degrees, 0.7 volts, 50, 150, 200 and 350 megahertz, and minus 5.5 volts.

### Key topic 29: R-L-C Circuits

Facts to teach:

- At resonance, the impedance of a parallel R-L-C circuit is approximately equal to the circuit resistance, its maximum value, because the equal and opposite inductor and capacitor branch currents cancel in the line. [3-29D1]
- At resonance, the impedance of a series R-L-C circuit is approximately equal to the circuit resistance, its minimum value, because X<sub>L</sub> equals X<sub>C</sub> and the two are 180° out of phase, so they cancel. [3-29D2]
- The current flow in a series R-L-C circuit at resonance is maximum, I = E/R, because only resistance is left to oppose it. [3-29D4]
- Resonance is how the voltage across reactances in series can be greater than the applied voltage: the large resonant current develops about Q times the applied voltage across the inductor and across the capacitor. [3-29D3]
- The current flow within the parallel elements of a parallel R-L-C circuit at resonance is maximum: the inductor and capacitor trade energy back and forth as a large circulating current, about Q times the line current, while the line current itself is at a minimum. [3-29D5]
- In a resonant circuit, the voltage and current are in phase, because the reactances cancel and the circuit looks purely resistive, with a power factor of 1. [3-29D6]

Scene ideas: comparison table: series resonance (impedance about equal to R and at its minimum, current maximum) versus parallel resonance (impedance about equal to R and at its maximum, circulating current within the parallel elements maximum); waveform: voltage and current sine waves lying exactly in phase at resonance; equipment card: a series R-L-C circuit with voltage callouts across the inductor and the capacitor, each larger than the applied voltage.

### Key topic 30: Op Amps

Facts to teach:

- The main advantage of an op-amp audio filter over a passive LC audio filter is that op-amps exhibit gain rather than insertion loss. [3-30D1]
- An inverting op-amp circuit has input and output signals 180 degrees out of phase; its gain is −R<sub>f</sub>/R<sub>in</sub>, where the minus sign marks the inversion. [3-30D2]
- The gain of a closed-loop op-amp circuit is determined by the op-amp's external feedback network, not an internal one, because negative feedback tames the huge open-loop gain. [3-30D3]
- The external feedback network that controls the gain of a closed-loop op-amp circuit is connected from the output to the inverting input; output to the non-inverting input would be positive feedback. [3-30D4]
- A comparator is the op-amp circuit operated open-loop: with no feedback, a tiny difference between its inputs drives the output to one supply rail or the other. [3-30D5]
- In the op-amp oscillator of Figure 3D6, if the capacitance of C were suddenly doubled, the frequency would be lower: C charges and discharges through R, so doubling C doubles the period and halves the frequency, and the circuit works as drawn. [3-30D6]

Scene ideas: block diagram: an inverting amplifier with R<sub>in</sub> into the inverting input and R<sub>f</sub> from the output back to it, the input and output waves 180 degrees apart; equipment card: Figure 3D6 with callouts for C, R and the resistor divider on the non-inverting input, and the output square wave stretching as C doubles; comparison table: closed-loop circuits (inverting and non-inverting amplifiers, active filters) with gain set by external feedback versus the open-loop comparator.

### Key topic 31: Phase Locked Loops (PLLs); Voltage Controlled Oscillators (VCOs); Mixers

Facts to teach:

- The frequency synthesizer that uses a phase comparator, look-up table, digital-to-analog converter and low-pass antialias filter is a direct digital synthesizer: it steps through a sine-wave look-up table, converts the values to analog with the DAC and smooths them with the filter. [3-31D1]
- A circuit that compares the output of a VCO to a frequency standard and uses the error voltage to adjust the capacitance of a varactor diode controlling that same VCO is a phase-locked loop. [3-31D2]
- A phase-locked loop (PLL) is a servo loop consisting of a phase detector, a low-pass filter and a voltage-controlled oscillator: the filter smooths the error into a DC control voltage that steers the VCO until it locks to the reference. [3-31D6]
- With an RF input of 200 MHz and a local oscillator of 150 MHz, the IF output of a mixer before any filtering contains 50, 150, 200 and 350 MHz: the difference 200 − 150 = 50 MHz, the sum 200 + 150 = 350 MHz, and the original 200 MHz and 150 MHz signals leaking through. [3-31D3]
- For the exam, the spectral impurity a phase-locked-loop synthesizer might generate is keyed as broadband noise, the phase noise of the VCO's random jitter (real PLL synthesizers also produce spurs at discrete frequencies; see the flag note). [3-31D4]
- The unwanted components on the output of a direct digital synthesizer are spurs at discrete frequencies, from regularly repeating errors such as phase truncation and DAC quantization, rather than broadband noise. [3-31D5]

Scene ideas: block diagram: a PLL with the phase detector, low-pass filter and VCO in a loop, the varactor-tuned VCO locking to a frequency standard; comparison table: PLL synthesizer (phase detector, low-pass filter and VCO, with broadband noise as its impurity) versus direct digital synthesizer (phase comparator, look-up table, DAC and low-pass antialias filter, with spurs at discrete frequencies as its unwanted output); frequency band strip: mixer output at 50, 150, 200 and 350 MHz, with the sum and difference highlighted.

### Key topic 32: Schematics

Facts to teach:

- Figure 3D7 is an inverting summing amplifier: V<sub>out</sub> = −(R<sub>f</sub>/R<sub>in</sub>)(V<sub>1</sub> + V<sub>2</sub> + V<sub>3</sub>), negative because the inputs feed the inverting input. [3-32D1]
- In Figure 3D7, the combined DC inputs give V<sub>out</sub> = −(100 kΩ/10 kΩ)(100 + 200 + 250 mV) = −10 × 550 mV = −5.5 V. [3-32D1]
- In Figure 3D8, lamps 2, 3, 4, 7 and 8 are lit, because each has a path from the battery's positive (top) terminal to its negative terminal through forward-biased diodes only. [3-32D2]
- In Figure 3D8, lamps 1, 5, 6 and 9 stay dark, because a reverse-biased diode blocks every path through each of them. [3-32D2]
- If an amplifier input signal coupling capacitor fails open, no amplification will occur, with DC within the circuit measuring normal, because the stage's DC bias never depended on that capacitor. [3-32D3]
- In Figure 3D9, there is no problem with the regulated power supply: D1 and D2 form a full-wave rectifier with their cathodes toward the positive line, C1 filters, and R1 feeds the 9.1 V Zener (D3) that holds the base of the NPN pass transistor TR1 steady. [3-32D4]
- In Figure 3D9, TR1's emitter follows about 0.7 V below its base, giving a regulated output of about 8.4 V, the nominal 9 V; nothing needs changing, since the diodes are not reversed and TR1 does not need to be a PNP. [3-32D4]
- In Figure 3D10, a square wave input to the integrator (a series resistor feeding a shunt capacitor) gives output 3, the rounded shark-fin wave, because the capacitor charges and discharges along curved slopes. [3-32D5]
- In Figure 3D11, a pure AC input gives output waveform 2: the shunt diode's anode faces the output line, so each positive half-cycle is clipped at about +0.7 V while the full negative swing passes. [3-32D6]

Scene ideas: formula reveal: V<sub>out</sub> = −(R<sub>f</sub>/R<sub>in</sub>)(V<sub>1</sub> + V<sub>2</sub> + V<sub>3</sub>) worked line by line for Figure 3D7 to −5.5 V; equipment card: Figure 3D8 with current paths lighting lamps 2, 3, 4, 7 and 8 one by one, then Figure 3D9 with callouts for D1, D2, C1, R1, the 9.1 V Zener and TR1; waveform: a square wave becoming the shark-fin output 3 of Figure 3D10, then a sine wave clipped at about +0.7 V on its positive half-cycles as in output 2 of Figure 3D11.

## Lesson 3-E: Digital Logic

Element 3 · Subelement E · Key topics 33–40

**Goal:** The learner can name TTL logic levels, predict logic gate and figure outputs, and identify flip-flops, multivibrators, memory types, microprocessor parts, counters and converters as the Element 3 pool tests them.

**Visual style:** Mostly comparison table and key-fact list scenes for definitions, with equipment card scenes that show pool Figures 3E12, 3E13 and 3E14 and light up each gate output and test point in turn. Recurring motif: every wire is drawn bright for high (1) and dim for low (0); waveform scenes show square waves and frequency division, and a block diagram shows the microprocessor, memory and I/O on the data bus.

**Narration style:** A friendly, plain-spoken instructor using short sentences, slowing down for the gate-by-gate figure walk-throughs. Spell out each acronym the first time (TTL, VOM, DMM, RAM, ROM, DRAM, I/O, MCU, ALU, DAC, ADC, BCD) and say units and symbols in words ("volts", "two to the fourth"). Stress the exam numbers: zero to 0.8 volts for low, 2.0 to 5.5 volts for high, a 5 volt supply, 2 stable states, 1 bit per flip-flop, 2 flip-flops to divide by 4, 8 flip-flops for 8 bits, and 64 memory cells.

### Key topic 33: Types of Logic

Facts to teach:

- TTL stands for transistor-transistor logic, because bipolar transistors do both the gating and the output amplification. [3-33E6]
- The common power supply voltage for TTL series integrated circuits is 5 volts; 12 volts or 13.6 volts would destroy them. [3-33E3]
- In a TTL device operating at 5 volts, a valid logic low input is zero to 0.8 volts. [3-33E1]
- In a TTL device operating at 5.0 volts, a valid logic high input is 2.0 to 5.5 volts, and the zone between 0.8 and 2.0 volts is undefined. [3-33E2]
- TTL inputs left open develop a high-logic state, because no current flows out of the unconnected input; open inputs are not ignored and do not go random. [3-33E4]
- A logic probe is the best instrument for checking a TTL logic circuit, because it directly shows high, low or pulsing activity, while a VOM (volt-ohm-milliammeter) or DMM (digital multimeter) shows only an average voltage and a continuity tester shows nothing about logic states. [3-33E5]

Scene ideas: comparison table: TTL input zones on a 5 volt supply: low zero to 0.8 volts, undefined 0.8 to 2.0 volts, high 2.0 to 5.5 volts, with an open input landing in high; equipment card: a logic probe touching a TTL test point, with callouts for its high, low and pulse indicators.

### Key topic 34: Logic Gates

Facts to teach:

- An AND gate produces a logic “1” at its output only if all inputs are logic “1”; a 0 at any input forces the output to 0. [3-34E1]
- The AND gate is the one that gives an active high out when both inputs are active high; with both inputs high, NAND, NOR and XOR outputs all go low. [3-34E6]
- A NAND gate, an AND gate followed by an inverter, produces a logic “0” at its output only when all inputs are logic “1”. [3-34E2]
- An OR gate produces a logic “1” at its output if any input is logic “1”, and a 0 only when every input is 0. [3-34E3]
- A NOR gate, an OR gate followed by an inverter, produces a logic “0” at its output if any or all inputs are logic “1”, so its output is 1 only when every input is 0. [3-34E4]
- A NOT gate, or inverter, produces a logic “0” at its output when the input is logic “1” and vice versa. [3-34E5]

Scene ideas: equipment card: the AND, NAND, OR, NOR, NOT and XOR symbols, with a callout showing that the small bubble means the output is inverted; comparison table: two-input truth tables for AND, NAND, OR, NOR and XOR side by side, with the both-inputs-high row highlighted so only AND shows a 1.

### Key topic 35: Logic Levels

Facts to teach:

- In a positive-logic circuit, the high level represents logic 1 and the low level represents logic 0. [3-35E4]
- In a negative-logic circuit the convention is reversed: the high level represents logic 0 and the low level represents logic 1. [3-35E1]
- A truth table is a list of input combinations and their corresponding outputs that characterizes a digital device’s function; it has nothing to do with op-amps. [3-35E6]
- In Figure 3E12 (positive logic), the AND gate feeding test point A gets the inverted H, which is low, so point A is low; the AND gate feeding test point B gets the inverted L (now high) together with H, so point B is high; and the OR gate makes test point C high because one of its inputs is high. [3-35E2]
- In Figure 3E13 (positive logic), the NAND gate making test point A sees L and H, so point A is high; the top NAND sees L and point A, so test point B is high; the lower NAND sees point A and H (both high) and outputs low, so the output NAND makes test point C high, and all three test points are high. [3-35E3]
- In Figure 3E14 (positive logic devices), the open XOR input floats high in TTL, so both XOR inputs are high and test point A is low; the inverter turns H into a low, so the lower NAND sees two lows and test point B is high; and the output NAND, with point A low, makes test point C high. [3-35E5]

Scene ideas: comparison table: positive logic (high = 1, low = 0) beside negative logic (high = 0, low = 1); equipment card: Figure 3E12, then Figure 3E13, then Figure 3E14, with the H, L and open inputs marked and each gate output and test point A, B and C lighting up high or low in signal order; key-fact list: a truth table lists every input combination with its output.

### Key topic 36: Flip-Flops

Facts to teach:

- A flip-flop is a binary sequential logic element with 2 stable states (set and reset, 1 and 0), and it holds its state until an input pulse switches it. [3-36E1, 3-36E2]
- A single flip-flop circuit stores 1 bit of information. [3-36E4]
- An 8 bit storage register needs 8 R-S flip-flops, one for each bit position. [3-36E5]
- Each toggling flip-flop divides its input frequency by 2, so n flip-flops in cascade divide by 2<sup>n</sup>. [3-36E3]
- To divide a signal frequency by 4, 2 flip-flops are required: 2<sup>2</sup> = 2 × 2 = 4. [3-36E3]
- An R-S flip-flop cannot operate in toggle mode with its R-S inputs held constant and CLK (clock) initiated; with R and S fixed, clock pulses just keep setting or resetting it, and toggling is a J-K or T flip-flop function. [3-36E6]
- An R-S flip-flop can accept data into its R-S inputs with CLK initiated, accept data into its PRE (preset) and CLR (clear) inputs without CLK, and refuse synchronous data while asynchronous data is being input at the same time. [3-36E6]

Scene ideas: waveform: a pulse train feeding two cascaded flip-flops, the first output a square wave at half the input frequency and the second at one quarter; formula reveal: division = 2<sup>n</sup>, worked example 2<sup>2</sup> = 2 × 2 = 4, so 2 flip-flops divide by 4, answer boxed; key-fact list: 2 stable states, 1 bit per flip-flop, 8 flip-flops for an 8 bit register, R-S has no toggle mode.

### Key topic 37: Multivibrators

Facts to teach:

- A bistable multivibrator circuit is a flip-flop, and that is its common name: it has two stable states and holds a 1 or 0 until triggered. [3-37E4, 3-37E5]
- A clock is an astable circuit and AND or OR gates have no memory, so none of them is a bistable multivibrator. [3-37E4, 3-37E5]
- The frequency of an AC signal can be divided electronically by a bistable multivibrator, which changes state once per input cycle and so divides by 2; an astable (free-running) multivibrator generates its own signal instead. [3-37E1]
- An astable multivibrator is a circuit that alternates between two unstable states, switching back and forth with no trigger input. [3-37E2]
- A monostable (one-shot) multivibrator can be switched momentarily to the opposite binary state and then returns after a set time, fixed by an RC network, to its original state. [3-37E3]
- The voltage outputs at the collectors of an astable multivibrator's common-emitter stage are square waves, because each transistor snaps between fully on and fully off. [3-37E6]

Scene ideas: comparison table: astable (no stable state, free-running clock), monostable (one stable state, one-shot), bistable (two stable states, flip-flop, divides by 2); waveform: square wave at the astable collectors, and a single one-shot pulse that returns to its original level after a set time.

### Key topic 38: Memory

Facts to teach:

- RAM (random-access memory) is the semiconductor memory IC whose digital data can be written or read and whose memory word address can be accessed randomly, in any order. [3-38E1]
- ROM (read-only memory) is the semiconductor IC that has a fixed pattern of digital data stored in its memory matrix, so it can be read but not changed. [3-38E2]
- DRAM (dynamic random-access memory) must be refreshed periodically to keep reliable data, because each bit is stored as charge on a tiny capacitor that leaks away. [3-38E6]
- Within a microprocessor system, IO (usually written I/O) means input-output: the ports and circuits that move data between the microprocessor and external devices. [3-38E3]
- A program is the name for a microprocessor’s sequence of commands and instructions. [3-38E4]
- The number of memory cells equals 2 raised to the number of address pins, times the number of data pins: cells = 2<sup>address pins</sup> × data pins. [3-38E5]
- A memory IC with 4 address pins and 4 data bus input/output pins has 2<sup>4</sup> = 16 locations of 4 bits each, so cells = 16 × 4 = 64. [3-38E5]

Scene ideas: comparison table: RAM (read and write, random access), ROM (fixed data), DRAM (must be refreshed); formula reveal: cells = 2<sup>address pins</sup> × data pins, worked example 2<sup>4</sup> = 16, 16 × 4 = 64, answer boxed; key-fact list: I/O means input-output, a program is the sequence of instructions.

### Key topic 39: Microprocessors

Facts to teach:

- In a microprocessor-controlled two-way radio, a “watchdog” timer verifies that the microprocessor is executing the program; if the program stops resetting it, it times out and resets the processor. [3-39E1]
- In a microprocessor circuit, DAC means digital to analog converter, which turns binary values into a proportional voltage or current. [3-39E2]
- An MCU (microcontroller unit) contains RAM, ROM and I/O, but the voltage regulator is not part of the MCU processor; it is a separate external component. [3-39E3]
- The clock is the pulse generator of a microprocessor circuit, stepping the processor through each instruction; RAM and ROM are memory, and a PLL is a frequency-control loop. [3-39E4]
- In a microprocessor, ALU means arithmetical logic unit, the part that performs arithmetic and logic operations. [3-39E5]
- The data bus line is the circuit that interconnects the microprocessor with the memory and input/output system. [3-39E6]

Scene ideas: block diagram: clock pulses driving the microprocessor (with its ALU), linked by the data bus line to RAM, ROM and I/O, with a watchdog timer box beside the processor; key-fact list: DAC means digital to analog converter, ALU means arithmetical logic unit, the voltage regulator sits outside the MCU.

### Key topic 40: Counters, Dividers, Converters

Facts to teach:

- A prescaler divides an HF signal so that a low-frequency counter can display the operating frequency; it divides, it does not multiply. [3-40E1]
- A decade counter digital IC produces one output pulse for every ten input pulses, a divide-by-10 function; decoding for a seven-segment display is a separate decoder's job. [3-40E3]
- BCD means binary coded decimal: each decimal digit 0 through 9 gets its own 4-bit binary group, so 25 becomes 0010 0101. [3-40E2]
- An ADC (analog-to-digital converter) is the integrated circuit device that converts an analog signal to a digital signal. [3-40E4]
- A DAC (digital-to-analog converter) is the integrated circuit device that converts digital signals to analog signals, the reverse of an ADC. [3-40E5]
- In binary, the quantity two is written 0010, using place values 8, 4, 2, 1: 0×8 + 0×4 + 1×2 + 0×1 = 2, and the digit 2 never appears in a binary number. [3-40E6]

Scene ideas: block diagram: an HF signal entering a prescaler (divide) and then a low-frequency counter, and a decade counter giving one output pulse per ten input pulses; comparison table: ADC (analog in, digital out) beside DAC (digital in, analog out); formula reveal: binary place values 8, 4, 2, 1, worked example 0×8 + 0×4 + 1×2 + 0×1 = 2, answer 0010 boxed.

## Lesson 3-F: Receivers

Element 3 · Subelement F · Key topics 41–50

**Goal:** The learner can follow a signal through a superheterodyne receiver, from the RF amplifier, mixer and local oscillator through the IF amplifiers, filters, detector, AGC, squelch and audio, and answer the Element 3 questions on sensitivity, image frequency, bandwidth, filters and interference.

**Visual style:** One recurring block diagram built from pool Figure 3F15 (RF amplifier, mixer 1, local oscillator 2, IF amplifiers, detector 3, AGC 4, audio and speaker), with the stage each key topic covers highlighted. Frequency band strip scenes place image frequencies and IF bandwidths, formula reveal scenes work the two image calculations, and an equipment card shows pool Figure 3F16 for the filter curves.

**Narration style:** A friendly, plain-spoken instructor using short sentences, pausing on each step of the image-frequency calculations. Spell out each acronym the first time (RF, IF, LO, AGC, AVC, VFO, VCO, PLL, GaAsFET, SAW, SSB, CW, CTCSS, DCS, DSP) and say units in words (megahertz, kilohertz, hertz). Stress the exam numbers: images at 129.000 megahertz and 13.345 megahertz, IF selectivity of 15 kilohertz for wideband FM, 10 kilohertz for double-sideband AM and 2.4 kilohertz for SSB voice, and a 2.1 kilohertz SSB crystal filter.

### Key topic 41: Receiver Theory

Facts to teach:

- The noise floor of the receiver is the limiting condition for sensitivity, because a receiver cannot detect signals weaker than its own internal noise. [3-41F1]
- Receiver desensitizing is a reduction in receiver sensitivity because of a strong signal on a nearby frequency, which overloads the front end or drives the AGC (automatic gain control). [3-41F2]
- Desensitizing is the term for a reduction in receiver sensitivity caused by unwanted high-level adjacent channel signals; intermodulation, by contrast, creates new spurious signals from two or more strong ones. [3-41F3]
- The noise figure of a communications receiver is the level of noise generated in the front end and succeeding stages of the receiver; noise arriving from the antenna is not part of it. [3-41F4]
- The RF stage primarily establishes a receiver's noise figure, because first-stage noise is amplified by every stage after it. [3-41F5]
- Dynamic range is the ratio between the largest tolerable receiver input signal and the minimum discernible signal. [3-41F6]

Scene ideas: comparison table: noise floor (limits sensitivity), noise figure (noise made in the front end and later stages, set mainly by the RF stage), dynamic range (largest tolerable signal to minimum discernible signal), desensitizing (strong nearby signal cuts sensitivity); block diagram: Figure 3F15 with the RF stage highlighted as the stage that sets the noise figure.

### Key topic 42: RF Amplifiers

Facts to teach:

- Selectivity in the front-end circuitry of a receiver is achieved by a preselector, a tuned circuit ahead of the RF amplifier and mixer; extra amplifier stages add gain, not selectivity. [3-42F1]
- The primary purpose of an RF amplifier in a receiver is to improve the receiver’s noise figure; most of the receiver's gain comes from the IF (intermediate frequency) stages. [3-42F2]
- The RF amplifier stage should have sufficient gain to allow weak signals to overcome noise generated in the first mixer stage, not as much gain as possible. [3-42F3]
- Too much gain in a VHF receiver front end causes susceptibility to intermodulation interference from nearby transmitters. [3-42F4]
- A GaAsFET (gallium arsenide field-effect transistor) preamplifier gives a modern VHF receiver high gain and a low noise floor. [3-42F5]
- A low noise amplifier is most advantageous in the front end RF stage of a VHF receiver, because the first stage sets the noise figure of the whole receiver. [3-42F6]

Scene ideas: block diagram: preselector, then a low noise RF amplifier, then the mixer, with weak signals lifted just above the mixer noise; key-fact list: RF amplifier improves noise figure, just enough gain to beat first mixer noise, too much gain invites intermodulation, GaAsFET gives high gain and low noise floor.

### Key topic 43: Oscillators

Facts to teach:

- The three major oscillator circuits found in radio equipment are the Colpitts (capacitive-divider feedback), Hartley (tapped-coil feedback) and Pierce (crystal-controlled). [3-43F3]
- The Colpitts is the oscillator circuit commonly used in a VFO (variable frequency oscillator), because it is stable; the Pierce is a crystal oscillator and essentially fixed-frequency. [3-43F1, 3-43F4]
- To oscillate, a circuit must have sufficient positive feedback; negative feedback and neutralization suppress oscillation. [3-43F5]
- The oscillator stage in a frequency synthesizer is the VCO (voltage-controlled oscillator), which a phase detector and reference pull onto the selected frequency. [3-43F2]
- In Figure 3F15, block 2, the circle feeding the mixer (block 1) from below, is the symbol for the local oscillator. [3-43F6]

Scene ideas: comparison table: Colpitts, Hartley and Pierce with their feedback methods, Colpitts marked as the stable VFO choice; block diagram: a frequency synthesizer loop with the VCO, divider, phase detector and reference standard; equipment card: Figure 3F15 with block 2 called out as the local oscillator feeding mixer block 1.

### Key topic 44: Mixers

Facts to teach:

- The mixing process in a radio receiver is the combination of two signals to produce sum and difference frequencies. [3-44F2]
- The principal frequencies at the output of a mixer circuit are the original frequencies and the sum and difference frequencies; the IF filter then selects the wanted product. [3-44F4]
- When the LO (local oscillator) is below the signal, the image lies the same IF distance below the LO: f<sub>image</sub> = f<sub>LO</sub> − IF. [3-44F1]
- With a normal channel of 151.000 MHz, an IF of 11.000 MHz and the LO at 140.000 MHz, f<sub>image</sub> = 140 − 11 = 129 MHz (also 151 − 2 × 11), so the image frequency is 129.000 MHz. [3-44F1]
- When a receiver mixes a 13.8 MHz VFO with a 14.255 MHz receive signal to produce a 455 kHz IF, a 13.345 MHz signal produces an image response, because 13.8 − 0.455 = 13.345 MHz also mixes down to 455 kHz. [3-44F5]
- The image frequency is normally rejected in the RF stage, because once an image reaches the mixer it converts to the same IF as the desired signal and cannot be separated. [3-44F3]
- Excessive signal energy overdriving the mixer circuit generates spurious mixer products. [3-44F6]

Scene ideas: formula reveal: f<sub>image</sub> = f<sub>LO</sub> − IF, worked example 140 − 11 = 129 MHz, then 13.8 − 0.455 = 13.345 MHz, each answer boxed; frequency band strip: image 129.000 MHz, LO 140.000 MHz and signal 151.000 MHz spaced 11 MHz apart, then 13.345 MHz, 13.8 MHz and 14.255 MHz spaced 455 kHz apart; block diagram: RF and LO entering the mixer, with the originals, sum and difference coming out.

### Key topic 45: IF Amplifiers

Facts to teach:

- The IF filter bandwidth should be slightly greater than the received-signal bandwidth, so all sidebands pass while extra noise and adjacent signals are kept out. [3-45F6]
- Too wide a filter bandwidth in the IF section lets undesired signals reach the audio stage. [3-45F5]
- IF selectivity of 15 kHz is desirable in a wideband FM phone receiver, because a voice FM signal with ±5 kHz deviation occupies roughly 15 kHz. [3-45F1]
- IF selectivity of 10 KHz is optimum for double-sideband AM, because both sidebands of voice audio up to about 5 kHz occupy 2 × 5 = 10 kHz. [3-45F4]
- IF selectivity of 2.4 kHz is optimum for SSB (single sideband) voice, which carries one sideband of speech from roughly 300 to 2700 Hz. [3-45F3]
- A receiver SAW (surface acoustic wave) IF filter can be used in micro-miniature electronic circuits, because it is a tiny piezoelectric chip. [3-45F2]

Scene ideas: comparison table: IF selectivity by signal type: wideband FM phone 15 kHz, double-sideband AM 10 KHz, SSB voice 2.4 kHz; frequency band strip: a received signal with the IF passband drawn slightly wider than it, then a too-wide passband letting adjacent signals through; equipment card: a SAW IF filter chip with callouts for its small size and patterned electrodes.

### Key topic 46: Filters and IF Amplifiers

Facts to teach:

- The primary purpose of the first IF amplifier stage is selectivity, set by its crystal, ceramic or mechanical filter. [3-46F3]
- The primary purpose of the final IF amplifier stage is gain, raising the signal to the level the detector and AGC need. [3-46F1]
- When selecting an intermediate frequency, consider image rejection and selectivity: a higher IF puts the image farther away for easier rejection, while a lower IF makes narrow selectivity easier. [3-46F2]
- When designing an audio filter using an op-amp, its bandpass characteristics (center frequency, bandwidth and cutoff points) must be selected. [3-46F4]
- A Chebyshev filter is distinguished by allowing ripple in the passband, in exchange for a steeper rolloff; the maximally flat passband belongs to the Butterworth. [3-46F5]
- An m-derived filter is more desirable than a constant-k filter when you need more attenuation at a certain frequency that is too close to the cut-off frequency for a constant-k filter. [3-46F6]

Scene ideas: block diagram: first IF amplifier labeled selectivity, final IF amplifier labeled gain, feeding the detector and AGC; comparison table: Chebyshev (passband ripple, steep rolloff) beside Butterworth (maximally flat passband); frequency band strip: the cut-off frequency with an unwanted frequency just beyond it, notched out by an m-derived trap where a constant-k filter rolls off too gradually.

### Key topic 47: Filters

Facts to teach:

- The three general groupings of filters are high-pass, low-pass and band-pass. [3-47F3]
- In Figure 3F16, curve A is a low pass curve and curve D is a band stop curve, while curve B is band-pass and curve C is high-pass. [3-47F2]
- A good crystal band-pass filter for a single-sideband phone is 2.1 KHz wide, enough for intelligible speech while rejecting the opposite sideband. [3-47F1]
- A Butterworth filter has a maximally flat response over its passband, and it uses both inductors and capacitors, not one kind alone. [3-47F6]
- An m-derived filter uses a trap to attenuate undesired frequencies too near cutoff for a constant-k filter; a constant product of series- and shunt-element impedances describes the constant-k filter, not the m-derived one. [3-47F4]
- An advantage of a constant-k filter is high attenuation of signals at frequencies far removed from the pass band. [3-47F5]

Scene ideas: equipment card: Figure 3F16 with curves A, B, C and D labeled low-pass, band-pass, high-pass and band-stop one by one; comparison table: constant-k (strong attenuation far from the pass band), m-derived (trap just beyond cutoff), Butterworth (maximally flat passband); key-fact list: three filter groups, 2.1 KHz crystal filter for SSB phone.

### Key topic 48: Detectors

Facts to teach:

- Detection in a radio receiver is the recovery of intelligence from the modulated RF signal; modulation is the opposite process, done at the transmitter. [3-48F6]
- A radio diode detector works by rectification and filtering of RF, leaving the audio envelope. [3-48F3]
- A product detector uses a mixing process with a locally generated carrier, replacing the carrier that SSB suppresses. [3-48F1]
- A frequency discriminator is a circuit for detecting FM signals, so it is the circuit used to detect FM-phone signals; balanced modulators and product detectors belong to SSB. [3-48F2, 3-48F4]
- In a CTCSS (Continuous Tone-Coded Squelch System) controlled FM receiver, the CTCSS tone is filtered out after the discriminator but before the audio section, because the tone exists only once the FM is demodulated. [3-48F5]

Scene ideas: comparison table: diode detector (AM, rectify and filter), product detector (SSB and CW, mix with a local carrier), frequency discriminator (FM); waveform: an AM signal rectified to one polarity, then filtered to its audio envelope; block diagram: IF, then discriminator, then a filter removing the CTCSS tone, then the audio section.

### Key topic 49: Audio & Squelch Circuits

Facts to teach:

- A conventional squelch circuit functions on the presence of noise: with no carrier, strong noise mutes the audio, and a carrier quiets the noise and opens the squelch. [3-49F4]
- A CTCSS squelch works on tones, opening only when a specific sub-audible tone, roughly 67 to 254 Hz, is present. [3-49F5]
- A Digital Coded Squelch works on digital codes, sent continuously beneath the voice. [3-49F3]
- Receiver de-emphasis, coupled with transmitter pre-emphasis, gives flat audio and noise reduction, not flat audio alone. [3-49F2]
- The digital signal processing (DSP) circuit samples analog signals, records and processes them as numbers, then converts them back to analog signals. [3-49F6]
- The DSP term for noise subtraction circuitry is adaptive filtering and autocorrelation; noise blanking and noise limiting only suppress impulse noise peaks. [3-49F1]

Scene ideas: comparison table: noise squelch (presence of noise), CTCSS (tones), Digital Coded Squelch (digital codes); block diagram: DSP chain of analog in, ADC, number processing, DAC, analog out; block diagram: transmitter pre-emphasis boosting high audio frequencies, then receiver de-emphasis cutting them by the same amount, leaving flat audio with less hiss.

### Key topic 50: Receiver Performance

Facts to teach:

- A low-pass filter is normally found in a receiver's AVC (automatic volume control) circuit and in its power supply, but not in the oscillator stage. [3-50F1]
- Cross-modulation interference is the term for signals from a very strong station superimposed on other signals being received; intermodulation, by contrast, creates new signals on new frequencies. [3-50F3]
- Cross-modulation interference is modulation from an unwanted signal heard in addition to the desired signal. [3-50F4]
- In Figure 3F15, block 4 is the AGC circuit, whose DC voltage rises with signal strength, so a DC voltmeter at point 4 can monitor signal strength. [3-50F5]
- To suppress ignition noise, install ferrite beads in the primary and secondary ignition leads. [3-50F2]
- Pulse type interference to automobile radio receivers that follows engine speed can often be reduced by installing resistances in series with spark plug wires. [3-50F6]

Scene ideas: equipment card: Figure 3F15 with block 4 called out as the AGC and a DC voltmeter clipped on as a signal-strength meter; equipment card: an engine with callouts for ferrite beads on the primary and secondary ignition leads and resistances in series with the spark plug wires; key-fact list: low-pass filters in the AVC and power supply, not the oscillator, cross-modulation puts a strong station's modulation on top of the wanted signal.

## Lesson 3-G: Transmitters

Element 3 · Subelement G · Key topics 51–56

**Goal:** After this lesson, the learner can identify amplifier classes by conduction angle, linearity and efficiency, calculate FM modulation index, FM bandwidth, PEP and dummy-load voltage, and describe the matching networks, SSB generation steps and interference fixes used in transmitters.

**Visual style:** Waveform scenes carry the amplifier classes, using one recurring sine wave whose conducting portion lights up in color, and a comparison table sums the classes up. Block diagram scenes show SSB generation and the interference fixes, equipment card scenes show the L, pi and pi-L networks, and every calculation gets a formula reveal with the answer boxed.

**Narration style:** A friendly, plain-spoken instructor in short sentences, with degrees said in words ("one hundred eighty degrees") and conduction angle defined as the part of the cycle the device conducts. Spell out FM (frequency modulation), SSB (single sideband), DSB (double sideband), PEP (peak envelope power), RF (radio frequency), DC (direct current), RMS (root mean square), CW (continuous wave) and SWR (standing wave ratio) the first time, and say symbols in words ("X sub L", "E sub r-m-s squared over R"). Stress 360, 180 and less than 180 degrees, 50 percent, 1,000 watts, an index of 3, 16 kilohertz, 2.5 to 1, 100 watts and 245 volts.

### Key topic 51: Amplifiers-1

Facts to teach:

- Class A is biased near the middle of the linear region, so the input never goes into cutoff and output flows for the entire 360° of the signal cycle. [3-51G1, 3-51G2]
- Class A has the highest linearity and least distortion because it stays on the straight part of its curve, but its efficiency is no more than 50 percent even in theory. [3-51G3]
- Class C provides the highest efficiency, around 70 to 80 percent, because the device is cut off for most of each cycle; it is too nonlinear for SSB but works well for CW and FM. [3-51G4]
- Class C is the class whose bias is set well beyond cutoff, so only the peaks of the drive signal make it conduct, for less than 180° of the cycle; Class B is biased right at cutoff instead. [3-51G5]
- Class AB has an operating angle of more than 180° but less than 360° when driven by a sine wave, because its bias sits between Class A and Class B. [3-51G6]

Scene ideas: waveform: the same sine wave three times with the conducting portion lit, Class A for the full 360°, Class AB for more than 180° but less than 360°, Class C for only the peaks; comparison table: Class A highest linearity and least distortion versus Class C highest efficiency (70 to 80 percent).

### Key topic 52: Amplifiers-2

Facts to teach:

- Class B is biased exactly at cutoff, so it conducts for 180° of the input wave; two Class B devices in push-pull reproduce the complete waveform. [3-52G1, 3-52G6]
- Class C output is present for less than 180° of the input cycle, and the tuned output tank circuit restores a complete sine wave. [3-52G3]
- Class AB output is present for more than 180° but less than 360° of the input cycle, because it conducts a little even with no signal. [3-52G5]
- Peak voltage is the most valuable input-amplitude parameter for judging a Class A amplifier's signal-handling capability, because peaks that reach cutoff or saturation cause clipping; average or RMS values can hide those peaks. [3-52G2]
- DC input power = output power / efficiency, and a Class AB RF linear amplifier is roughly 50 percent efficient. [3-52G4]
- Worked example: with 500 watts PEP output from a Class AB RF power amplifier, DC input = 500 W / 0.5 = 1,000 W, so the approximate DC input is 1000 watts. [3-52G4]

Scene ideas: comparison table: conduction angle by class, Class A 360°, Class AB more than 180° but less than 360°, Class B 180°, Class C less than 180°; waveform: Class B conducting for exactly one half of the input wave beside Class C conducting only on the peaks; formula reveal: DC input = 500 W / 0.5 = 1,000 W.

### Key topic 53: Oscillators & Modulators

Facts to teach:

- FM modulation index is the frequency deviation divided by the modulating frequency; it is a ratio, so the units cancel and the result is a plain number. [3-53G1, 3-53G2]
- Worked example: a maximum deviation of 3,000 Hz on either side of the carrier with a 1,000 Hz modulating frequency gives m = 3,000 Hz / 1,000 Hz = 3. [3-53G1]
- Worked example: a maximum carrier deviation of 6 kHz with a 2 kHz modulating frequency gives m = 6 kHz / 2 kHz = 3. [3-53G2]
- Carson's rule estimates FM bandwidth as twice the sum of the deviation and the highest modulating frequency: with 5 kHz deviation and a 3 kHz modulating frequency, BW = 2 × (5 kHz + 3 kHz) = 16 kHz. [3-53G3]
- The modulation index of a phase-modulated emission does not depend on the RF carrier frequency; it is the peak phase shift, set by the amplitude of the modulating signal. [3-53G4]
- A balanced modulator produces a double sideband, suppressed carrier signal: the carrier cancels while the sum and difference sidebands pass through. [3-53G6]
- A single-sideband phone signal is generated by a balanced modulator followed by a filter that removes the unwanted sideband. [3-53G5]

Scene ideas: formula reveal: m = 3,000 Hz / 1,000 Hz = 3 and m = 6 kHz / 2 kHz = 3, then BW = 2 × (5 kHz + 3 kHz) = 16 kHz; block diagram: audio and carrier oscillator into a balanced modulator (double sideband, suppressed carrier), then a sideband filter (single sideband); waveform: SSB spectrum showing the carrier canceled, then one sideband filtered away.

### Key topic 54: Resonance - Tuning Networks

Facts to teach:

- An L-network consists of an inductor and a capacitor, one in series and the other shunted to ground, so the schematic looks like the letter L. [3-54G1]
- A pi-network consists of one inductor and two capacitors or two inductors and one capacitor, with one series element between two shunt elements like the Greek letter π. [3-54G2]
- A pi-L network consists of two inductors and two capacitors: a pi network followed by a second series inductor that shares the pi's output capacitor. [3-54G5]
- The resonant frequency is the frequency at which capacitive reactance equals inductive reactance (X<sub>L</sub> = X<sub>C</sub>), so they cancel and leave a purely resistive circuit, at f = 1 / (2π√(LC)). [3-54G3]
- The three network types commonly used to match an amplifying device to a transmission line are the L network, pi network and pi-L network; each also acts as a low-pass filter. [3-54G4]
- The pi-L network provides the greatest harmonic suppression, because its extra low-pass L section adds more filtering than a simple L or pi network. [3-54G6]

Scene ideas: equipment card: L, pi and pi-L network schematics with each inductor and capacitor called out in turn; formula reveal: X<sub>L</sub> = X<sub>C</sub> at resonance, then f = 1 / (2π√(LC)); comparison table: L (one inductor, one capacitor), pi (three parts), pi-L (two inductors, two capacitors, greatest harmonic suppression).

### Key topic 55: SSB Transmitters

Facts to teach:

- Using a non-linear amplifier with a single-sideband phone transmitter causes distortion, because the SSB signal's amplitude follows the speech and must be amplified linearly; the distorted envelope creates intermodulation products and splatter. [3-55G1]
- To produce single-sideband suppressed carrier, you cancel the carrier (in a balanced modulator) and filter the unwanted sideband (with a crystal or mechanical filter). [3-55G2]
- In a single-sideband phone signal, the speech characteristics of the talker determine the PEP-to-average power ratio, because there is no carrier and the output follows the voice. [3-55G3]
- During normal voice modulation peaks, the ratio of peak envelope power to average power in an SSB phone signal is approximately 2.5 to 1. [3-55G4]
- To find PEP from an oscilloscope, halve the peak-to-peak voltage and multiply by 0.707 to get E<sub>rms</sub>, then use PEP = E<sub>rms</sub>² / R. [3-55G5]
- Worked example: 200 volts peak-to-peak across a 50-ohm load gives E<sub>rms</sub> = (200 / 2) × 0.707 = 70.7 V, so PEP = 70.7² / 50 ≈ 5,000 / 50 = 100 W. [3-55G5]
- Rearranging P = E² / R gives E = √(P × R); a 50-ohm dummy load dissipating 1,200 watts has E = √(1,200 × 50) = √60,000 ≈ 245 V across it. [3-55G6]

Scene ideas: block diagram: balanced modulator cancels the carrier, a filter removes the unwanted sideband, then a linear amplifier; formula reveal: E<sub>rms</sub> = (200 / 2) × 0.707 = 70.7 V, PEP = 70.7² / 50 ≈ 100 W, then E = √(1,200 × 50) ≈ 245 V; key-fact list: non-linear amplifier causes distortion, PEP-to-average ratio set by speech characteristics, about 2.5 to 1.

### Key topic 56: Technology

Facts to teach:

- Intermodulation interference is the condition where the signals of two nearby transmitters mix in one or both final amplifiers and generate unwanted signals at the sum and difference frequencies. [3-56G3]
- Intermodulation between two transmitters in close proximity can often be reduced or eliminated by installing a terminated circulator or ferrite isolator in the feed line to the transmitter and duplexer, which routes power arriving from the antenna side into a load. [3-56G1]
- Parasitic oscillations in a power amplifier are eliminated by neutralization, which feeds back an equal signal of opposite phase to cancel coupling through the device's internal capacitance; tuning for maximum output or SWR does not remove that feedback path. [3-56G2]
- Spread-spectrum communication is a wide-bandwidth system in which the RF carrier varies according to a pre-determined sequence; AMTOR and SITOR are narrow-band teleprinting modes instead. [3-56G4]
- Spread spectrum is the modulation type that can be a frequency hopping of one carrier or of multiple simultaneous carriers, while SSB and FM each stay on one fixed carrier frequency. [3-56G6]
- Even-order harmonics are reduced or prevented by a push-pull amplifier, whose two devices are driven 180° out of phase so even-harmonic currents cancel in the output transformer; a push-push stage reinforces even harmonics and is used as a frequency doubler. [3-56G5]

Scene ideas: block diagram: two nearby transmitters whose signals mix in a final amplifier to make sum and difference products, then a terminated circulator or ferrite isolator added in the feed line; frequency band strip: a spread-spectrum carrier hopping across a wide band in a pre-determined sequence; equipment card: push-pull stage with callouts for the two devices driven 180° out of phase and even harmonics canceling in the center-tapped output transformer.

## Lesson 3-H: Modulation

Element 3 · Subelement H · Key topics 57–59

**Goal:** After this lesson, the learner can calculate FM deviation ratio and tell it apart from modulation index, explain how FM, double-sideband and single-sideband signals are produced and tested, read the SSB transmitter in Figure 3H17, and name what each pulse modulation method varies.

**Visual style:** Formula reveal scenes handle the deviation ratio arithmetic, and a comparison table keeps deviation ratio and modulation index apart. An equipment card of Figure 3H17 with numbered callouts, followed by a block diagram of the same signal path, anchors the SSB topic, and waveform scenes show the two-tone test envelope and pulse trains that change width or position.

**Narration style:** A friendly, plain-spoken instructor in short sentences. Spell out FM (frequency modulation), SSB (single sideband), DSB (double sideband), I.F. (intermediate frequency), PCM (pulse-code modulation), PWM (pulse-width modulation) and PPM (pulse-position modulation) the first time, and say kilohertz and hertz in words. Stress that deviation ratio divides the deviation by the audio frequency, not the other way round, and stress the results 1.66 and 2.14 and the block numbers 2 and 4.

### Key topic 57: Frequency Modulation

Facts to teach:

- The deviation ratio is the maximum carrier frequency deviation divided by the highest audio modulating frequency, a fixed figure for a given FM system. [3-57H1, 3-57H6]
- Worked example: a maximum deviation of ±5 kHz and a maximum modulation rate of 3 kHz give deviation ratio = 5 kHz / 3 kHz = 1.666…, listed as 1.66 (dividing the other way gives the wrong 0.6). [3-57H2]
- Worked example: a maximum frequency swing of ±7.5 kHz and a maximum modulation rate of 3.5 kHz give deviation ratio = 7.5 kHz / 3.5 kHz ≈ 2.14 (dividing the other way gives the wrong 0.47). [3-57H3]
- Modulation index is the ratio between the deviation of a frequency modulated signal and the modulating frequency at a given time, so it changes as the audio level and frequency change. [3-57H5]
- Maximum deviation divided by the maximum audio modulating frequency is called the deviation ratio, not the modulation index. [3-57H5, 3-57H6]
- An FM-phone signal is produced by feeding the audio directly to the oscillator, for example through a varactor or reactance modulator, so the oscillator frequency swings with the audio; varying an amplifier's supply voltage produces AM (amplitude modulation) instead. [3-57H4]

Scene ideas: formula reveal: deviation ratio = 5 kHz / 3 kHz = 1.66, then 7.5 kHz / 3.5 kHz ≈ 2.14, with the upside-down divisions (0.6 and 0.47) crossed out; comparison table: modulation index (actual deviation over actual modulating frequency, varies with the audio) versus deviation ratio (maximum deviation over highest audio frequency, fixed for the system); block diagram: audio fed directly into the oscillator, frequency swinging out to the FM signal.

### Key topic 58: SSB Modulation

Facts to teach:

- In Figure 3H17, block 1 is the 455 kHz crystal oscillator that supplies the carrier, block 2 is the microphone, block 3 is the balanced modulator, and block 4 is the mixer. [3-58H1, 3-58H2]
- In Figure 3H17, audio intelligence is inserted at block 2, the microphone, whose audio passes through an amplifier into the balanced modulator at block 3. [3-58H2]
- In Figure 3H17, block 4 is a mixer that heterodynes the 455 kHz sideband signal from the I.F. stage up to the operating frequency before linear amplifiers feed the antenna, which shows the schematic is most likely an SSB radio transmitter. [3-58H1]
- The amplitude linearity of a single-sideband phone transmitter is tested with a two-tone audio-frequency sine wave while viewing the output on an oscilloscope; a single tone gives a constant envelope that shows nothing about linearity. [3-58H3]
- A two-tone test on an oscilloscope illustrates the linearity of an SSB transmitter: clean, evenly shaped envelope loops mean linear, while flat-topping or distortion where the envelope crosses zero means non-linear. [3-58H4]
- The two tones for an SSB two-tone test are non-harmonically related audio signals within the modulation passband of the transmitter, for example about 700 Hz and 1,900 Hz. [3-58H6]
- A double-sideband phone signal is produced by modulating the supply voltage to a class C amplifier, which gives ordinary AM, a carrier with two sidebands; reactance modulators and varactor-tuned oscillators produce FM instead. [3-58H5]

Scene ideas: equipment card: Figure 3H17 with callouts appearing on block 1 (455 kHz crystal oscillator), block 2 (microphone, audio in), block 3 (balanced modulator) and block 4 (mixer); block diagram: the Figure 3H17 path drawn in sequence, oscillator to balanced modulator to I.F. amplifier to mixer to amplifiers to antenna, with audio joining at the balanced modulator; waveform: two-tone test envelope on an oscilloscope, smooth symmetrical loops beside flat-topped loops.

### Key topic 59: Pulse Modulation

Facts to teach:

- In pulse-code modulation using time-division multiplex, the transmit and receive clock pulse rates must be synchronized, or samples land in the wrong time slots and the channels are scrambled. [3-59H1]
- In a pulse-width modulation system, the modulating signal varies the pulse duration, while pulse amplitude and repetition rate stay fixed. [3-59H2]
- Modulation in which the modulating signal varies the duration of the transmitted pulse is called pulse-width (or pulse-duration) modulation. [3-59H3]
- Voice is sent in pulse-width modulation by varying a standard pulse in duration by an amount depending on the voice waveform at that instant; varying the amplitude would be pulse-amplitude modulation, and varying the position would be pulse-position modulation. [3-59H6]
- In a pulse-position modulation system, the modulating signal varies the time at which each pulse occurs, while pulse width and amplitude stay constant. [3-59H5]
- In a pulse modulation system the peak transmitter power is normally much greater than the average power, because short pulses are separated by long off periods and average power equals peak power times duty cycle, as in radar. [3-59H4]

Scene ideas: waveform: a pulse train under a voice wave, first with pulses changing duration (pulse-width), then with fixed pulses shifting earlier or later (pulse-position); waveform: short tall pulses with long gaps and a low dashed average-power line far below the peaks; block diagram: several channels feeding time slots, with matching transmit and receive clocks kept in step.

## Lesson 3-I: Power Sources

Element 3 · Subelement I · Key topics 60–62

**Goal:** After this lesson, the learner can state lead-acid and nickel-cadmium cell voltages and the charging hazard, work battery charging, capacity, run-time and internal-resistance problems, and predict how DC motors and generators respond to load and field changes, including motor current calculations.

**Visual style:** This lesson is mostly arithmetic, so formula reveal scenes carry it, each writing the formula, then the worked example line by line with the keyed answer boxed. An equipment card shows the battery-charging hazard, a comparison table sets cell voltages side by side, and another comparison table covers how motors and generators react to load and field changes.

**Narration style:** A friendly, plain-spoken instructor in short sentences, walking through each calculation step by step without rushing. Spell out DC (direct current), AC (alternating current) and EMF (electromotive force), and say units in words: volts, amperes, ampere-hours, ohms, watts and horsepower. Stress the cell voltages 2.06 and 1.25 volts and every keyed result: 195 ohms, 177 ampere-hours, 15 volts, 1.8 hours, 1 hour 43 minutes, 1 and a half hours, 17 minutes, 0.4995 and 0.83 amps, 57.2 and 26.3 amps.

### Key topic 60: Batteries-1

Facts to teach:

- Charging a lead-acid storage battery releases hydrogen gas, which is harmful because it is explosive in air, so charge in a well-ventilated space away from sparks and flames. [3-60I1]
- A trickle-charging series resistor must drop the difference between line and battery voltage at the charging current: R = (110 V − 12.5 V) / 0.5 A = 97.5 / 0.5 = 195 Ω. [3-60I2]
- Battery capacity in ampere-hours = load current × time. [3-60I3]
- Worked example: a transmitter load of 70% of a 40 A key-locked demand plus a 1.5 A emergency light gives 0.7 × 40 A + 1.5 A = 29.5 A, and 29.5 A × 6 h = 177 ampere-hours. [3-60I3]
- The average fully-charged voltage of a lead-acid storage cell is 2.06 volts, which is why a six-cell battery is called a 12-volt battery. [3-60I5]
- A nickel-cadmium cell has an operating voltage of about 1.25 volts, a little below the 1.5 volts of a fresh alkaline or carbon-zinc cell. [3-60I6]
- Voltages in series add, so 12 nickel-cadmium batteries in series give 12 × 1.25 V = 15 V. [3-60I4]

Scene ideas: equipment card: lead-acid battery on charge with callouts for hydrogen gas, ventilation and no sparks or flames; comparison table: lead-acid cell 2.06 volts versus nickel-cadmium cell 1.25 volts, with 12 nickel-cadmium cells in series making 15 volts; formula reveal: R = (110 V − 12.5 V) / 0.5 A = 195 Ω, then 0.7 × 40 A + 1.5 A = 29.5 A and 29.5 A × 6 h = 177 ampere-hours.

### Key topic 61: Batteries-2

Facts to teach:

- To find battery run time, add the power of all the loads, find the current with I = P / E, then divide the ampere-hour rating by that current. [3-61I1, 3-61I3, 3-61I4, 3-61I6]
- Worked example: a 325 W transmitter and a 50 W receiver draw 375 W, so I = 375 / 12.6 ≈ 29.8 A, and a 55 ampere-hour battery lasts 55 Ah / 29.8 A ≈ 1.85 h, about 1.8 hours. [3-61I1]
- Worked example: a 315 W radar and a 50 W radio draw 365 W, so I = 365 / 12.6 ≈ 28.97 A, and a 50 ampere-hour battery lasts 50 Ah / 28.97 A ≈ 1.73 h, about 1 hour 43 minutes. [3-61I3]
- Worked example: a 75 W receiver and a 325 W transmitter draw 400 W, so I = 400 / 12 ≈ 33.3 A, and a 50 ampere-hour 12 volt battery lasts 50 Ah / 33.3 A = 1.5 hours (1 1/2 hours). [3-61I4]
- Worked example: a 50 W receiver and a 300 W radar draw 350 W, so I = 350 / 12.6 ≈ 27.8 A, and an 8 ampere-hour battery lasts 8 Ah / 27.8 A ≈ 0.29 h, about 17 minutes or 0.3 hours. [3-61I6]
- A battery's internal resistance adds in series with the load, so current = battery voltage / (load resistance + internal resistance). [3-61I2, 3-61I5]
- Worked example: a 3-watt, 6-volt lamp has R = E² / P = 6² / 3 = 12 Ω; adding the 0.01 Ω internal resistance gives I = 6 V / 12.01 Ω ≈ 0.4996 A, listed as 0.4995 amps. [3-61I2]
- Worked example: two 12 Ω bulbs in parallel equal 6 Ω; adding the 1.2 Ω internal resistance gives 7.2 Ω, so I = E / R = 6 / 7.2 ≈ 0.83 A. [3-61I5]

Scene ideas: formula reveal: the run-time method on the 375 W, 12.6 volt, 55 ampere-hour example, ending at about 1.8 hours; comparison table: the four run-time problems with total watts, current and keyed time (1.8 hours, 1 hour 43 minutes, 1 1/2 hours, 17 minutes or 0.3 hours); formula reveal: lamp R = 6² / 3 = 12 Ω, I = 6 V / 12.01 Ω ≈ 0.4996 A, listed as 0.4995 amps, then 6 Ω + 1.2 Ω = 7.2 Ω, I = 6 / 7.2 ≈ 0.83 A.

### Key topic 62: Motors & Generators

Facts to teach:

- If the load is removed from an operating series DC motor, it will accelerate until it falls apart, because little current flows in its field, the field weakens, and it must spin ever faster to generate counter-EMF; series motors are kept coupled to their loads. [3-62I1]
- If a loaded shunt motor has its shunt field opened, it will speed up, possibly to a dangerous runaway, because only weak residual magnetism is left to make counter-EMF. [3-62I2]
- "Voltage regulation" of a shunt-wound DC generator refers to the voltage fluctuations from load to no-load, usually given as the no-load voltage minus the full-load voltage, as a percentage of the full-load voltage. [3-62I3]
- The output of a separately-excited AC generator running at a constant speed is controlled by the amount of field current, because output voltage is proportional to the magnetic flux the field current sets. [3-62I6]
- Motor current: output watts = horsepower × 746 (745.7 W per horsepower), input watts = output / efficiency, then I = P / E for a DC motor or I = P / (E × PF) for an AC motor with power factor PF. [3-62I4, 3-62I5]
- Worked example: a 7 horsepower motor on 120 volts, 95% efficient, power factor 0.8: output = 7 × 745.7 W ≈ 5,220 W, input = 5,220 / 0.95 ≈ 5,495 W, line current I = 5,495 / (120 × 0.8) ≈ 57.2 A. [3-62I4]
- Worked example: a 3 horsepower, 100 V DC motor, 85% efficient: output = 3 × 746 W = 2,238 W, input = 2,238 / 0.85 ≈ 2,633 W, current I = 2,633 / 100 ≈ 26.3 A (listed as 26.300 amps). [3-62I5]

Scene ideas: comparison table: series motor with load removed (accelerates until it falls apart), shunt motor with field opened (speeds up), shunt-wound generator voltage regulation (load to no-load change), separately-excited AC generator (output set by field current); formula reveal: 7 × 745.7 W ≈ 5,220 W, 5,220 / 0.95 ≈ 5,495 W, I = 5,495 / (120 × 0.8) ≈ 57.2 A, then 3 × 746 W = 2,238 W, 2,238 / 0.85 ≈ 2,633 W, I = 2,633 / 100 ≈ 26.3 A.

## Lesson 3-J: Antennas

Element 3 · Subelement J · Key topics 63–67

**Goal:** After this lesson, the learner can explain radiation resistance, SWR, antenna bandwidth and loading, and transmission-line properties, and calculate antenna current, decibel attenuation, line loss and repeater effective radiated power.

**Visual style:** Equipment card scenes show antennas, traps, isolators and transmission lines with callouts, and a waveform scene shows voltage and current along a half-wave antenna. Formula reveal scenes carry every decibel and power calculation, with a recurring "net dB" tally line (losses in red, gain in green) used for line loss and all six repeater problems, and a comparison table shows how coils and capacitors shift resonance.

**Narration style:** A friendly, plain-spoken instructor in short sentences. Spell out SWR (standing wave ratio), RF (radio frequency), ERP (effective radiated power), dB (decibels) and VF (velocity factor) the first time, and say symbols in words ("I squared R", "ten to the minus zero point seven"). Stress the rules of thumb that plus 3 dB doubles power and minus 3 dB halves it, and the keyed results 6 amps, 30 dB, 25 watts, 1 watt, 6 watts, 39.7, 150, 37.6, 100, 126 and 31.5 watts.

### Key topic 63: Antenna Theory

Facts to teach:

- A detuned antenna coupler can cause a high standing wave ratio on a transmission line, because it no longer matches the antenna's impedance to the line and part of the power is reflected; modulation level and transmitter power do not change SWR. [3-63J1]
- The radiation resistance of an antenna is an equivalent resistance that would dissipate the same amount of power as that radiated from the antenna (P = I²R); it is not a physical loss. [3-63J5]
- Knowing the radiation resistance is important because it makes it possible to match impedances for maximum power transfer. [3-63J2]
- An isolator is the RF device that passes energy in one direction with very little loss but absorbs power traveling the opposite direction; a circulator routes power from port to port and acts as an isolator only when one port is terminated. [3-63J3]
- The advantage of a trap antenna is that it may be used for multiband operation: its traps are parallel LC (inductor-capacitor) circuits that present a high impedance at their resonant frequency and electrically disconnect the outer part of the antenna. [3-63J4]
- Antenna bandwidth is the frequency range over which an antenna can be expected to perform well, often judged by SWR staying below a limit such as 2:1; the angle between half-power points is beamwidth, not bandwidth. [3-63J6]

Scene ideas: equipment card: trap dipole with callouts for each parallel LC trap and the band each section serves; equipment card: isolator with a forward arrow passing through and a reverse arrow absorbed in its internal load; key-fact list: detuned antenna coupler causes high SWR, radiation resistance lets you match for maximum power transfer, bandwidth is a frequency range.

### Key topic 64: Voltage, Current and Power Relationships

Facts to teach:

- From P = I²R, I = √(P / R); a 52 ohm line with an input of 1,872 watts carries I = √(1,872 / 52) = √36 = 6 A. [3-64J1]
- The voltage produced in a receiving antenna is always proportional to the received field strength, because the antenna acts like a generator driven by the passing wave; the station's SWR does not determine it. [3-64J2]
- The best standing wave ratio is 1:1, meaning the load matches the line perfectly and no power is reflected. [3-64J3]
- At the ends of a half-wave antenna there is maximum voltage and minimum current, because the ends are open; at the center there is maximum current and minimum voltage. [3-64J4]
- Attenuation in decibels = 10 log(P1 / P2); a 500 watt primary signal with a 0.5 watt 2nd harmonic gives 10 log(500 / 0.5) = 10 log 1,000 = 30 dB. [3-64J5]
- Radiated power is the forward power minus the reflected power, so a 30 watt transmitter with 5 watts reflected radiates 30 W − 5 W = 25 W. [3-64J6]

Scene ideas: formula reveal: I = √(1,872 / 52) = √36 = 6 A, then 10 log(500 / 0.5) = 30 dB, then 30 W − 5 W = 25 W; waveform: voltage and current curves along a half-wave antenna, voltage peaking at both ends and current peaking at the center.

### Key topic 65: Frequency and Bandwidth

Facts to teach:

- A vertical 1/4 wave antenna receives signals equally from all horizontal directions, because its pattern is omnidirectional in the horizontal plane. [3-65J1]
- An excited 1/2 wavelength antenna produces both electro-magnetic and electro-static fields: current along it sets up the magnetic field and the voltage between its ends sets up the electric field. [3-65J3]
- The resonant frequency of a Hertz antenna can be lowered by placing an inductance in series with the antenna, which makes it act electrically longer. [3-65J2]
- To lengthen an antenna electrically, add a coil (loading inductor) in series, which is how short mobile antennas are made resonant on lower bands. [3-65J6]
- To increase the resonant frequency of a 1/4 wavelength antenna, add a capacitor in series, which cancels some inductive reactance and makes it act electrically shorter. [3-65J4]
- When an antenna is shortened through the use of loading coils, its bandwidth is decreased, because its Q rises (its reactance is large compared with its low radiation resistance); more loading means narrower bandwidth. [3-65J5]

Scene ideas: comparison table: series coil (electrically longer, lower resonant frequency, narrower bandwidth when used for loading) versus series capacitor (electrically shorter, higher resonant frequency); equipment card: vertical quarter-wave antenna with an even horizontal reception pattern and callouts for the magnetic and electrostatic fields.

### Key topic 66: Transmission Lines

Facts to teach:

- The velocity factor of a transmission line is the velocity of the wave on the line divided by the velocity of light in a vacuum, VF = v / c, which is always less than 1. [3-66J1]
- Dielectrics in the line determine the velocity factor, VF = 1 / √(dielectric constant): air-dielectric lines approach 1, while solid polyethylene gives about 0.66. [3-66J2]
- Nitrogen is placed in transmission lines to prevent moisture from entering the line, since moisture raises losses, changes impedance and causes corrosion. [3-66J3]
- A shorted stub that absorbs even harmonics could be 1/4 wavelength long at the fundamental: it looks like an open circuit at the fundamental, but at the second harmonic it is a half wavelength long and shunts that harmonic, and other even harmonics, to ground. [3-66J5]
- Line loss adds in decibels: 6 dB per 100 feet over 200 feet is 12 dB, so P = 100 W × 10<sup>−1.2</sup> ≈ 100 × 0.063 = 6.3 W, about 6 watts at the antenna feed point (each 3 dB halves: 100 → 50 → 25 → 12.5 → 6.25 W). [3-66J6]
- For the exam, a perfect (no loss) coaxial cable with 7 dB of reflected power and a 5 watt input is keyed as giving 1 watt output, treating the whole 7 dB as a reduction on the way to the output: P = 5 W × 10<sup>−0.7</sup> ≈ 5 × 0.2 = 1 W (the wording is ambiguous; see the flag note). [3-66J4]

Scene ideas: formula reveal: VF = v / c and VF = 1 / √(dielectric constant), then 12 dB of loss stepping 100 → 50 → 25 → 12.5 → 6.25 W, about 6 watts; formula reveal: P = 5 W × 10<sup>−0.7</sup> ≈ 1 W; equipment card: hardline with a dry nitrogen fitting, and a shorted 1/4 wavelength stub attached to the line.

### Key topic 67: Effective Radiated Power

Facts to teach:

- Effective radiated power: add the antenna gain and subtract the feedline loss and the duplexer and circulator loss to get the net dB, then ERP = transmitter power × 10<sup>(net dB / 10)</sup>; +3 dB doubles the power, −3 dB halves it and 0 dB leaves it unchanged. [3-67J1, 3-67J2, 3-67J3, 3-67J4, 3-67J5, 3-67J6]
- Worked example: 50 watts with 4 dB feedline loss, 3 dB duplexer and circulator loss and 6 dB antenna gain: net = −4 dB − 3 dB + 6 dB = −1 dB, ERP = 50 W × 10<sup>−0.1</sup> ≈ 50 × 0.794 ≈ 39.7 W. [3-67J1]
- Worked example: 75 watts with 4 dB feedline loss, 3 dB duplexer and circulator loss and 10 dB antenna gain: net = −4 dB − 3 dB + 10 dB = +3 dB, ERP = 75 W × 10<sup>0.3</sup> ≈ 75 × 2 = 150 W. [3-67J2]
- Worked example: 75 watts with 5 dB feedline loss, 4 dB duplexer and circulator loss and 6 dB antenna gain: net = −5 dB − 4 dB + 6 dB = −3 dB, ERP = 75 W × 10<sup>−0.3</sup> ≈ 75 × 0.501 ≈ 37.6 W. [3-67J3]
- Worked example: 100 watts with 4 dB feedline loss, 3 dB duplexer and circulator loss and 7 dB antenna gain: net = −4 dB − 3 dB + 7 dB = 0 dB, so the losses exactly cancel the gain and ERP = 100 W. [3-67J4]
- Worked example: 100 watts with 5 dB feedline loss, 4 dB duplexer and circulator loss and 10 dB antenna gain: net = −5 dB − 4 dB + 10 dB = +1 dB, ERP = 100 W × 10<sup>0.1</sup> ≈ 100 × 1.259 ≈ 126 W. [3-67J5]
- Worked example: 50 watts with 5 dB feedline loss, 4 dB duplexer and circulator loss and 7 dB antenna gain: net = −5 dB − 4 dB + 7 dB = −2 dB, ERP = 50 W × 10<sup>−0.2</sup> ≈ 50 × 0.631 ≈ 31.5 W. [3-67J6]

Scene ideas: block diagram: transmitter to feedline to duplexer and circulator to antenna, with the dB tally updating at each box; formula reveal: net dB then ERP, worked line by line for each repeater example; comparison table: all six repeater cases with transmitter power, net dB and keyed ERP (39.7, 150, 37.6, 100, 126, 31.5 watts).

## Lesson 3-K: Aircraft

Element 3 · Subelement K · Key topics 68–73

**Goal:** Identify the frequencies, operating principles, antennas and functions of aircraft navigation, surveillance and communication equipment, from DME, VOR and ILS to ADF, transponders, ELTs and SELCAL.

**Visual style:** A frequency band strip that grows through the lesson as each avionics system claims its band, from ADF in kilohertz up to the radio altimeter at 4250 MHz to 4350 MHz. Block diagrams show signals passing between aircraft and ground stations, and equipment cards place antennas on a simple aircraft outline.

**Narration style:** A friendly, plain-spoken instructor using short sentences, spelling out each acronym the first time (DME, VOR, ILS, ADF, NDB, ATCRBS, TCAS, ELT, SELCAL). Read frequencies slowly in words, such as "nine hundred sixty-two to twelve hundred thirteen megahertz", and stress megahertz versus kilohertz, because wrong choices often swap the units. Stress that the transponder receives at 1030 MHz and transmits at 1090 MHz, since the two are easy to reverse.

### Key topic 68: Distance Measuring Equipment

Facts to teach:

- Distance Measuring Equipment (DME), which indicates an aircraft's slant range distance to a selected ground-based navigation station, operates from 962 MHz to 1213 MHz. [3-68K1]
- The distance DME measures from the aircraft to the DME ground station is called the slant range, because it runs along the direct, slanted line from the aircraft at altitude down to the station. [3-68K2]
- The main operating principle of DME is that a measurable amount of time is required to send and receive a radio signal through the Earth's atmosphere, so the round-trip time converts to distance. [3-68K4]
- Distance Measuring Equipment (DME) is the navigation aid that finds the distance to a selected VORTAC station by measuring how long the radio signal takes to travel to and from the station; it is not RADAR or Loran C. [3-68K5]
- The DME ground station has a built-in delay, typically 50 µs, between receiving an interrogation and transmitting the reply, to allow operation at close range; the airborne unit subtracts this known delay. [3-68K3]
- Most airborne DME systems automatically tune their transmitter and receiver frequencies to the paired VOR/LOC channel, so selecting the VOR or localizer frequency sets the DME. [3-68K6]

Scene ideas: block diagram: aircraft sends an interrogation, the ground station waits its fixed reply delay, then replies, and the round-trip time becomes distance; equipment card: aircraft at altitude with a slanted line down to the ground station labeled slant range; frequency band strip: DME at 962 MHz to 1213 MHz.

### Key topic 69: VHF Omnidirectional Range (VOR)

Facts to teach:

- Ground-based Very-high-frequency Omnidirectional Range (VOR) stations transmit from 108.00 MHz to 117.95 MHz (megahertz, not kilohertz). [3-69K3]
- All directions associated with a VOR station are related to magnetic north. [3-69K1]
- Lines drawn from the VOR station in a particular magnetic direction are called radials; for example, the 090 radial points magnetic east from the station. [3-69K4]
- The VOR's amplitude modulated variable phase signal and frequency modulated reference phase signal are synchronized to be in phase at 360 degrees North, magnetic bearing position. [3-69K5]
- The main VOR principle is that a phase difference between two AC voltages (the 30 Hz variable and reference signals) gives the aircraft's azimuth position in relation to the selected VOR station; VOR does not give distance. [3-69K6]
- The VOR variable signal rotates at 30 revolutions per second: the antenna pattern turns at 1800 rpm, and 1800 / 60 = 30. [3-69K2]

Scene ideas: equipment card: compass rose around a VOR station with radials drawn outward and 360 degrees at magnetic north; waveform: two 30 Hz sine waves, in phase at magnetic north and shifting apart as the bearing increases; formula reveal: 1800 / 60 = 30 revolutions per second.

### Key topic 70: Instrument Landing System (ILS)

Facts to teach:

- The ILS localizer beam system, used to find the runway centerline, operates from 108.10 MHz to 111.95 MHz. [3-70K1]
- The localizer is a required component of an Instrument Landing System (ILS): it shows the aircraft's horizontal deviation from the center of the runway. [3-70K3]
- On a runway approach, the ILS localizer shows deviation left or right of the runway center line; it does not show ground speed or wind. [3-70K6]
- The localizer produces two amplitude modulated antenna patterns, one with a 90 Hz audio tone and one with a 150 Hz audio tone, one left and one right of the runway centerline; patterns above and below the glide path belong to the glideslope, not the localizer. [3-70K5]
- The outer, middle and inner marker beacons all use a carrier frequency of 75 MHz, 95% tone-modulated at 400 Hz (outer), 1300 Hz (middle) and 3000 Hz (inner). [3-70K2]
- An aircraft's ILS glideslope installation uses a folded dipole reception antenna. [3-70K4]

Scene ideas: equipment card: runway seen from above with the 90 Hz and 150 Hz localizer lobes on either side of the centerline; comparison table: outer, middle and inner marker beacons, all on 75 MHz, with tones of 400 Hz, 1300 Hz and 3000 Hz; frequency band strip: localizer at 108.10 MHz to 111.95 MHz.

### Key topic 71: Automatic Direction Finding Equipment (ADF) & Transponders

Facts to teach:

- An aircraft's Automatic Direction Finding (ADF) equipment covers 190 kHz to 1750 kHz (kilohertz, not megahertz). [3-71K1]
- ADF antennas can receive transmissions from over the Earth's horizon, sometimes several hundred miles away, because these low and medium frequency signals follow the curvature of the Earth; they are not limited to line of sight. [3-71K6]
- Night effect means Non Directional Beacon (NDB) transmissions can bounce off the Earth's ionosphere at night and be received from almost any direction, so the ADF needle wanders. [3-71K2]
- A mode C transponder in the Air Traffic Control RADAR Beacon System (ATCRBS) transmits at 1090 MHz and receives at 1030 MHz. [3-71K3]
- A mode C transponder encodes its transmission to the ATCRBS ground station using pulse position modulation. [3-71K5]
- In addition to duplicating mode C functions, a mode S transponder can provide mid-air collision avoidance capabilities. [3-71K4]

Scene ideas: block diagram: ground interrogator sends 1030 MHz, the aircraft transponder replies on 1090 MHz; waveform: pulse train with code pulses in fixed time positions between two framing pulses; equipment card: NDB signal following the Earth's curve by day and bouncing off the ionosphere at night.

### Key topic 72: Aircraft Antenna Systems and Frequencies

Facts to teach:

- Aircraft Very High Frequency (VHF) communications use 118.000 MHz to 136.975 MHz (worldwide up to 151.975 MHz). [3-72K3]
- Aircraft Emergency Locator Transmitters (ELT) operate on 121.5, 243 and 406 MHz. [3-72K4]
- An aircraft's radio altimeter operates from 4250 MHz to 4350 MHz. [3-72K5]
- When a ground station phased-array directional antenna transmits the pulse position modulation (PPM) pulses of a Mode S interrogation for a Traffic alert and Collision Avoidance System (TCAS), it radiates a 1030 MHz directional pattern: interrogations go out on 1030 MHz, and a phased array forms a steerable beam. [3-72K1]
- A Mode C transponder receives its 1030 MHz ATCRBS interrogation signals through an L-band monopole blade-type omnidirectional antenna. [3-72K6]
- An aircraft's ILS marker beacon installation uses a balanced loop reception antenna. [3-72K2]

Scene ideas: frequency band strip: VHF communications 118.000 MHz to 136.975 MHz, ELT 121.5, 243 and 406 MHz, transponder 1030 MHz, radio altimeter 4250 MHz to 4350 MHz; equipment card: aircraft outline with callouts for the L-band blade monopole and the balanced loop marker beacon antenna; block diagram: ground phased array steering a directional 1030 MHz interrogation beam toward an aircraft.

### Key topic 73: Equipment Functions

Facts to teach:

- The principal advantage of 400 Hz aircraft line power is that magnetic devices such as transformers, chokes and filters are smaller and lighter than those used in 60 Hz power supplies. [3-73K1]
- Aviation services use predominantly dynamic microphones, which are rugged and tolerate vibration, humidity and temperature extremes. [3-73K2]
- Typical airborne HF transmitters provide a nominal RF output of 100 watts to the antenna, compared with 20 watts from a typical VHF transmitter. [3-73K3]
- Before ground testing an aircraft RADAR, the operator should ensure the area in front of the antenna is clear of other maintenance personnel to avoid radiation hazards. [3-73K4]
- Aircraft VOR and Localizer (LOC) installations use a horizontally polarized omnidirectional reception antenna. [3-73K5]
- SELCAL (selective calling) is a system where a ground-based transmitter can call a selected aircraft or group of aircraft without the flight crew monitoring the ground-station frequency. [3-73K6]

Scene ideas: comparison table: 400 Hz versus 60 Hz power supply, with smaller and lighter transformers, chokes and filters at 400 Hz; key-fact list: dynamic microphones, HF 100 watts versus VHF 20 watts, clear the area in front of the RADAR antenna before ground tests; block diagram: ground station sends a SELCAL code and the selected aircraft's decoder sounds a chime.

## Lesson 3-L: Installation, Maintenance & Repair

Element 3 · Subelement L · Key topics 74–81

**Goal:** Choose the right meter or test instrument for a job and apply the correct measurement, repair, installation and troubleshooting practices for radio equipment.

**Visual style:** Equipment cards for each instrument, with callouts for what it measures, and comparison tables to separate look-alike instruments such as the oscilloscope and spectrum analyzer. Formula reveals handle the meter calculation, and a recurring technician's workbench motif ties the scenes together.

**Narration style:** A friendly, plain-spoken instructor using short sentences, spelling out each acronym the first time (DMM, SWR, EMI, SINAD, SSB, TDR, CDMA, CMOS, GPS, DSC, MMSI). Say units in words: microamperes, ohms, volts, decibels, kilohertz, microfarads. Stress the tested numbers: 0.05 volts, 12 dB of SINAD, 5.0 kHz deviation, less than 100,000 ohms and the 9-digit MMSI.

### Key topic 74: Indicating Meters

Facts to teach:

- A 1/2 digit on a DMM (digital multimeter) gives partial extended accuracy on the lower part of the range: the leading half digit shows only 0 or 1, so a 3½-digit meter counts to 1999 instead of 999. [3-74L1]
- The voltage across a meter movement follows Ohm's law: V = I × R. [3-74L2]
- Worked example: a 50 microampere meter movement with 2,000 ohms internal resistance needs half the full-scale current, 25 µA, for half-scale deflection, so V = 25 µA × 2,000 Ω = 0.05 volts. [3-74L2]
- A series multiplier resistor is used to increase the voltage-indicating range of a voltmeter, by dropping most of the applied voltage. [3-74L3]
- A shunt resistor is used to increase the ampere indicating range of an ammeter, by carrying most of the current in parallel with the meter movement. [3-74L4]
- A logic probe is the instrument used to indicate high and low digital voltage states. [3-74L5]
- An SWR (standing wave ratio) meter may be used to verify proper radio antenna functioning; a low SWR shows a good match. [3-74L6]

Scene ideas: formula reveal: V = I × R, then 25 µA × 2,000 Ω = 0.05 volts boxed; block diagram: meter movement with a series multiplier resistor for a voltmeter and a parallel shunt resistor for an ammeter; equipment card: 3½-digit DMM display reading 1999.

### Key topic 75: Test Equipment

Facts to teach:

- A frequency counter is used to measure the time between events, or the frequency, which is the reciprocal of the time. [3-75L1]
- A frequency standard is a device used to produce a highly accurate reference frequency, used to calibrate other equipment. [3-75L2]
- Field technicians use a rubidium standard as a time base standard, because it is compact, warms up quickly and is far more stable than quartz. [3-75L5]
- A portable AM receiver is useful to track down EMI (electromagnetic interference) aboard a ship or aircraft, since the noise grows louder as you approach the source. [3-75L3]
- On an analog wattmeter the accuracy is only at full scale, and that absolute number is carried through to the rest of the range, so the upper 1/3 of the meter is the only truly calibrated part; for example, ±5% of a 100 W scale is ±5 W, which is 25% of a 20 W reading. [3-75L4]
- A SINAD meter contains a multirange AF voltmeter calibrated in dB and a sharp, internal 1000 Hz bandstop filter, used together to perform quieting tests. [3-75L6]

Scene ideas: comparison table: frequency counter (measures), frequency standard (produces a reference) and rubidium standard (field time base); equipment card: analog wattmeter with the upper 1/3 of the scale highlighted and ±5 W shown on a 100 W scale; block diagram: receiver audio into a SINAD meter, with the 1000 Hz bandstop filter switched in.

### Key topic 76: Oscilloscopes

Facts to teach:

- A 10:1 divider probe decreases circuit loading when using an oscilloscope: the circuit sees about 10 MΩ instead of the scope's 1 MΩ, while the signal is divided by ten. [3-76L1]
- An oscilloscope displays electrical signals in the time domain, while a spectrum analyzer displays them in the frequency domain. [3-76L2]
- The vertical amplifier determines the maximum frequency response of an oscilloscope; the time base only sets how fast the trace sweeps. [3-76L3]
- Sweep oscillator quality and deflection amplifier bandwidth limit an oscilloscope's accuracy, frequency response and stability. [3-76L4]
- An oscilloscope can measure voltage, electron flow with the aid of a resistor, and the phase difference between two signals, but measuring the velocity of light with a light emitting diode is not an oscilloscope task. [3-76L5]
- An oscilloscope is the instrument used to check the signal quality of a single-sideband (SSB) transmission, by showing the shape of its waveform. [3-76L6]

Scene ideas: comparison table: oscilloscope in the time domain versus spectrum analyzer in the frequency domain; block diagram: circuit, 10:1 probe, vertical amplifier and display, with the sweep oscillator driving the horizontal trace; waveform: SSB two-tone envelope on the oscilloscope.

### Key topic 77: Specialized Instruments

Facts to teach:

- An oscilloscope and a pulse generator can be combined into a time-domain reflectometer (TDR) to measure transmission line characteristics; the delay of each reflection gives the distance to a fault. [3-77L1]
- A spectrum analyzer's horizontal axis displays frequency, and its vertical axis displays amplitude. [3-77L2, 3-77L3]
- A spectrum analyzer can display spurious signals in the output of a radio transmitter, while a wattmeter reads only total power. [3-77L5]
- A frequency domain reflectometer is the most accurate instrument for checking antennas and transmission lines at the antenna's operating frequency. [3-77L4]
- A service monitor is commonly used by radio service technicians to monitor frequency and modulation, check receiver sensitivity and distortion, and generate audio tones. [3-77L6]

Scene ideas: equipment card: spectrum analyzer screen with frequency on the horizontal axis, amplitude on the vertical axis and spurious signals beside the carrier; block diagram: pulse generator sends a pulse down a transmission line and the reflection appears on an oscilloscope; comparison table: time domain reflectometer versus frequency domain reflectometer.

### Key topic 78: Measurement Procedures

Facts to teach:

- A P25 (Project 25) radio system can be monitored with a scanner only if the scanner has P25 decoding. [3-78L1]
- The RF power reading of a CDMA (code division multiple access) radio is not accurate on an analog power meter, because CDMA signals are noise-like with constantly changing power. [3-78L2]
- Infra-red communication is a common method to program radios without a wired connection. [3-78L3]
- The exact sensitivity specification of a receiver is determined by measuring the recovered audio for 12 dB of SINAD. [3-78L4]
- A modulation-acceptance bandwidth test determines the effective bandwidth of a communications receiver: with the RF level 6 dB above the 12 dB SINAD point, the deviation is raised until SINAD falls back to 12 dB. [3-78L5]
- The maximum FM deviation for voice on a normal wideband VHF or UHF channel is 5.0 kHz; 2.5 kHz is the narrowband figure. [3-78L6]

Scene ideas: key-fact list: 12 dB of SINAD for sensitivity, 5.0 kHz maximum wideband deviation, infra-red programming; block diagram: signal generator into the receiver, recovered audio into a SINAD meter; equipment card: scanner with a P25 decoding callout.

### Key topic 79: Repair Procedures

Facts to teach:

- For the exam, a wrist strap used when soldering or working with CMOS electronics must have less than 100,000 ohms of resistance to prevent static electricity (real straps include about 1 megohm in series; see the flag note). [3-79L1]
- The preferred method of cleaning solder from plated-through circuit-board holes is a vacuum device, which pulls out the molten solder without damaging the hole or pads. [3-79L2]
- Cut plastic wire ties with flush-cut diagonal pliers and cut flush, so no sharp stub is left. [3-79L3]
- The ideal method of removing insulation from wire is the thermal stripper, which melts the insulation without nicking the conductor. [3-79L4]
- A hot gas bonder is used for non-contact melting of solder, with a stream of heated air or gas. [3-79L5]
- When repairing circuit board assemblies, it is most important to wear safety glasses. [3-79L6]

Scene ideas: equipment card: repair bench with callouts for the wrist strap, vacuum desoldering tool, flush-cut diagonal pliers, thermal stripper, hot gas bonder and safety glasses; key-fact list: wrist strap less than 100,000 ohms (exam answer), vacuum device for plated-through holes, safety glasses first.

### Key topic 80: Installation Codes & Procedures

Facts to teach:

- In a 100-pair cable, the binder for pairs 51-75 is green, following blue for 1–25, orange for 26–50 and brown for 76–100. [3-80L1]
- In a 25 pair switchboard cable, the 6th pair color code is Red/Blue, Blue/Red, because pair 6 starts the red group. [3-80L4]
- When routing cables in a mobile unit, the most important thing is assuring radio or electronics cables do not interfere with the normal operation of the vehicle. [3-80L2]
- Do not use white or translucent plastic tie wraps on a radio tower, because UV radiation from the Sun deteriorates the plastic very quickly. [3-80L3]
- A single base station radio rack should be installed plumb to just inside the bubble on a level. [3-80L5]
- GTO-15 high-voltage cable connects an SSB automatic tuner to an insulated backstay, because that lead carries very high RF voltage. [3-80L6]

Scene ideas: comparison table: 100-pair cable binders, blue 1–25, orange 26–50, green 51-75, brown 76–100; equipment card: 25 pair cable with pair 6 marked Red/Blue, Blue/Red; key-fact list: black ties on towers, rack just inside the bubble, GTO-15 to the backstay.

### Key topic 81: Troubleshooting

Facts to teach:

- On a 150 watt marine SSB HF transceiver, a steady output of 75 watts when keying the transmitter indicates a probable defect causing the carrier to be transmitted, since SSB voice suppresses the carrier. [3-81L1]
- A common fix for radio interference to a building elevator's tachometer is to add a .01 µF capacitor across the motor/tachometer leads, which bypasses RF without loading the circuit. [3-81L2]
- A common method of programming portable or mobile radios is to use a laptop computer. [3-81L3]
- The best quick overall evaluation of a software-defined transceiver's operational condition is its built-in self-test feature. [3-81L4]
- An installer verifies the correct GPS sentence to a marine DSC (Digital Selective Calling) VHF radio by looking for latitude and longitude on the display. [3-81L5]
- The DSC emergency signaling function on a marine VHF is activated by input of a registered 9-digit MMSI (Maritime Mobile Service Identity). [3-81L6]

Scene ideas: waveform: SSB output with no speech near zero, compared with a faulty steady 75 watt carrier; equipment card: DSC VHF radio display showing latitude and longitude, with an MMSI entry callout; block diagram: laptop computer connected to a portable radio for programming.

## Lesson 3-M: Communications Technology

Element 3 · Subelement M · Key topics 82–84

**Goal:** Recognize the main transmission and multiple-access types, voice codecs, data codes, OSI layers and digital radio functions tested in Element 3.

**Visual style:** Frequency band strips and waveforms show how spread spectrum, TDMA and SSB signals use the channel, and block diagrams trace voice through a codec and a software-defined radio. Comparison tables separate look-alike terms, with binary codes drawn as rows of 0 and 1 cells.

**Narration style:** A friendly, plain-spoken instructor using short sentences, spelling out each acronym the first time (TDMA, CDMA, GSM, PCS, SSB, CODEC, ASCII, OSI, SDR, DSP, SWR, GMDSS, DSC, SITOR, FEC). Read binary codes digit by digit and stress the bit counts the exam tests: 10 bits with 3 check bits for DSC, and 7 bits with 4 zeros and 3 ones for SITOR.

### Key topic 82: Types of Transmissions

Facts to teach:

- Spread spectrum communication is a wide-bandwidth system in which the RF carrier frequency varies according to some predetermined sequence. [3-82M1]
- The two types of spread spectrum used in most RF communications are Direct Sequence and Frequency Hopping; AM, FM, QPSK, QAM and APSK are modulation types, not spreading methods. [3-82M2]
- Frequency hopping is spread spectrum in which the center frequency of a conventional carrier is altered many times per second according to a pseudo-random list of channels; direct sequence keeps the center frequency fixed. [3-82M3]
- A TDMA (time division multiple access) radio carries multiple conversations sequentially in separate time slots. [3-82M4]
- SSB voice transmissions normally use J3E emission, which consists of one sideband and a suppressed carrier; A3E is full-carrier AM, F3E is FM and A1A is Morse telegraphy. [3-82M5]
- The two most-used PCS (Personal Communications Systems) coding techniques for separating calls are CDMA and GSM. [3-82M6]

Scene ideas: frequency band strip: a carrier hopping from channel to channel in a pseudo-random order; comparison table: direct sequence versus frequency hopping; waveform: SSB spectrum with one sideband and the carrier suppressed.

### Key topic 83: Coding and Multiplexing

Facts to teach:

- A CODEC (coder/decoder) is an IC or circuitry that converts a voice signal into a predetermined digital format for encrypted transmission, and converts received data back to audio. [3-83M1]
- GSM (Global System for Mobile Communications) uses a Regular-Pulse Excited (RPE) CODEC for digital mobile radio communications. [3-83M2]
- Phase 2 P25 radios use the AMBE CODEC, which fits voice into one TDMA time slot so two talk paths share a 12.5 kHz channel. [3-83M5]
- ASCII (American Standard Code for Information Interchange) has gained the widest acceptance for exchange of data from one computer to another. [3-83M3]
- In the International Organization for Standardization's seven-level reference model for packet radio, the physical layer is responsible for the actual transmission of data and handshaking signals. [3-83M4]
- In the same seven-level model, the link layer arranges the bits into frames and controls data flow. [3-83M6]

Scene ideas: block diagram: voice into a CODEC, out as a digital stream for encrypted transmission; comparison table: GSM uses RPE, Phase 2 P25 uses AMBE; key-fact list: seven-layer stack with the physical layer at the bottom and the link layer just above it.

### Key topic 84: Signal Processing, Software and Codes

Facts to teach:

- SDR stands for Software Defined Radio, where filtering, modulation and demodulation are done in software rather than fixed hardware. [3-84M1]
- In a modern DSP (digital signal processing) radio, the DSP controls frequency, modulation and detection, but it does not control SWR, which depends on the antenna match. [3-84M2]
- The code used for GMDSS-DSC transmissions is a 10 bit error correcting code that starts with bits of data (7 bits) followed by a 3 bit error correcting code. [3-84M3]
- In the code used for SITOR-A and -B transmissions, each character consists of 7 bits with 4 zeros and 3 ones, so a character that breaks this ratio is detected as an error. [3-84M4]
- In SITOR-B (FEC, forward error correction), the Idle Signal alpha (0000111) is used for FEC Phasing Signal 1. [3-84M5]
- GSM lets multiple conversations share one radio channel by Time Division Multiplex, dividing each 200 kHz carrier into eight time slots. [3-84M6]

Scene ideas: block diagram: software-defined radio with software blocks for filtering, modulation and demodulation; comparison table: DSC character of 10 bits (7 data bits then 3 check bits) versus SITOR character of 7 bits (4 zeros and 3 ones), with Idle Signal alpha 0000111; waveform: pulse train of one GSM carrier split into eight repeating time slots.

## Lesson 3-N: Marine

Element 3 · Subelement N · Key topics 85–89

**Goal:** The learner can recall the channels, frequencies, operating modes and wiring rules tested for marine VHF, MF-HF SSB and SITOR, survival craft beacons, weather fax and NAVTEX, and NMEA data networks.

**Visual style:** Frequency band strip scenes place VHF channels and NAVTEX frequencies, equipment card scenes show radios, beacons and wiring, comparison table scenes contrast SITOR modes, and a radar PPI shows the SART 12-dot line. A recurring motif is a small vessel whose radio installation gains one new piece of equipment in each key topic.

**Narration style:** A friendly, plain-spoken instructor using short sentences, spelling out each acronym the first time (very high frequency, single sideband, digital selective calling, simplex teletype over radio, search and rescue radar transponder, emergency position-indicating radio beacon, National Marine Electronics Association). Say units in words (kilohertz, megahertz, gigahertz, milliamps, volts) and stress the exam numbers: 25 kilohertz spacing, channels 16 and 70, plus or minus 5 kilohertz, 12 dots, 9 gigahertz, 406 megahertz, 518 kilohertz, 120 lines per minute, 50 milliamps and 1.5 volts.

### Key topic 85: VHF

Facts to teach:

- Marine VHF (very high frequency) radio uses a channel spacing of 25 kHz. [3-85N1]
- The maximum allowable frequency deviation for VHF marine radios is ±5 kHz, so with 3 kHz audio Carson's rule gives BW = 2(Δf + f<sub>m</sub>) = 2(5 + 3) = 16 kHz, which fits inside a 25 kHz channel. [3-85N4]
- VHF channel 16 (156.800 MHz) is assigned for distress and calling, not channel 70. [3-85N2]
- VHF channel 70 (156.525 MHz) is used for Digital Selective Calling (DSC) and acknowledgement only, and voice is never allowed on it. [3-85N3]
- The USA-INT control changes some channels that are normally duplex channels into simplex channels for U.S. waters, INT restores international duplex operation, and neither setting increases range. [3-85N5]
- An installer verifies the correct GPS sentence to a marine DSC VHF radio by looking for latitude and longitude, plus speed, on the VHF display, never by pressing the red distress button, which would send a false distress alert. [3-85N6]

Scene ideas: frequency band strip: channel 16 at 156.800 MHz for distress and calling and channel 70 at 156.525 MHz for DSC only, in 25 kHz channel slots; formula reveal: ±5 kHz deviation with 3 kHz audio gives 2(5 + 3) = 16 kHz inside a 25 kHz channel; equipment card: DSC VHF radio display showing latitude, longitude and speed, with a callout on the USA-INT control.

### Key topic 86: MF-HF, SSB-SITOR

Facts to teach:

- When voice-testing an SSB (single sideband) radio aboard a boat, voltage panel indicator lamps may glow with each syllable, because SSB has no carrier and draws current surges only as you speak, so the ammeter swings up, not down. [3-86N1]
- A blown black negative fuse can cause apparent low voltage on marine SSB transmitting, because the return current must find another path such as the coax shield and RF ground, while a blown red positive fuse would simply shut the radio off. [3-86N2]
- GTO-15 high-voltage cable connects an SSB automatic tuner to an insulated backstay, because that run carries very high RF voltage, while coax such as RG-8U or RG-213 belongs between the transceiver and the tuner. [3-86N3]
- SITOR (simplex teletype over radio) ARQ (automatic repeat request) message transmissions are made in data groups of three-character blocks, and the receiving station acknowledges each block right away, not only at the end of the message. [3-86N4]
- FEC (forward error correction) sends each character twice with time diversity and receivers decode without replying, so FEC is one-way, not interactive, and ARQ does not rely on time diversity. [3-86N4, 3-86N6]
- The sequence ARQ, FEC, SFEC corresponds to two-way communications, one-way communications to all stations, and one-way communications to a single station. [3-86N5]
- Two-way communication with the coast radio station using FEC is not necessary to receive the broadcasts, which is why weather and safety broadcasts use FEC. [3-86N6]

Scene ideas: waveform: SSB output bursts that follow each spoken syllable with nothing between words; equipment card: SSB installation with red and black fuses, coax from transceiver to automatic tuner, and GTO-15 cable to the insulated backstay; comparison table: ARQ two-way, FEC one-way to all stations, SFEC one-way to a single station.

### Key topic 87: Survival Craft Equipment: VHF, SARTs & EPIRBs

Facts to teach:

- After being activated, a SART (search and rescue radar transponder) stays silent in standby and begins transmitting only when it responds to radar interrogation. [3-87N1]
- A search and rescue transponder operates in the 9 GHz band, answering X-band radars, not in the 3 GHz S-band and not at 406 MHz. [3-87N3]
- On a radar display, the SART signal appears as a series of 12 equally spaced dots extending outward along the SART's bearing, becoming arcs and then circles as the ship closes within about a mile. [3-87N2]
- The primary GMDSS (Global Maritime Distress and Safety System) source of transmitting locating signals is an EPIRB (emergency position-indicating radio beacon) transmitting on 406 MHz, not a SART. [3-87N4]
- Once activated, a satellite EPIRB transmits a signal used for identifying the vessel and for determining the position of the beacon, but the code does not describe the nature of the distress. [3-87N5]
- A 406 MHz EPIRB transmits a unique hexadecimal identification number as a digital data burst, not a voice channel to the rescue center. [3-87N6]

Scene ideas: radar PPI: rotating sweep with a SART 12-dot line along its bearing that turns into arcs and circles as range closes; frequency band strip: 406 MHz EPIRB far below the 9 GHz SART; equipment card: 406 MHz EPIRB with callouts for the unique hexadecimal ID, vessel identity and position.

### Key topic 88: FAX, NAVTEX

Facts to teach:

- Facsimile is the transmission of printed pictures for permanent display on paper, such as weather charts. [3-88N1]
- The standard scan rate for high-frequency 3 MHz - 23 MHz weather facsimile reception from shore stations is 120 lines per minute. [3-88N2]
- A good crystal lattice band-pass filter for HF weather facsimile reception has a bandwidth of 1 kHz at -6 dB, wide enough to pass the frequency-shift keying signal with its 800 Hz shift while rejecting noise. [3-88N3]
- NAVTEX receives MSI (maritime safety information) broadcasts using SITOR-B or FEC mode, ships only receive and never transmit, and ARQ is not used because it needs two-way handshaking. [3-88N4]
- 518 kHz is the primary frequency used exclusively for NAVTEX broadcasts internationally, while 2187.5 kHz is a DSC distress frequency and NAVTEX is not received on 2182 kHz SSB. [3-88N4, 3-88N5]
- A NAVTEX receiver does not print a message when its subject indicator matches one the operator programmed for rejection, although navigational warnings, meteorological warnings and search and rescue messages cannot be rejected. [3-88N6]

Scene ideas: equipment card: weather fax recorder printing a chart line by line at 120 lines per minute, with a 1 kHz filter callout; frequency band strip: NAVTEX at 518 kHz beside 2182 kHz and 2187.5 kHz; key-fact list: NAVTEX uses SITOR-B or FEC, ships only receive, and the subject indicator decides what is rejected.

### Key topic 89: NMEA Data

Facts to teach:

- NMEA 2000 is the bi-directional, multi-transmitter, multi-receiver network data language, while NMEA 0183 is a one-talker, multiple-listener serial link. [3-89N1]
- On an NMEA 0183 data line, the shielding is terminated to ground at the talker and unterminated at the listener, which avoids a noisy ground loop. [3-89N2]
- In an NMEA 2000 network, if one device fails there will be no interruption to all other devices, because each device connects to a continuous backbone through a tee and drop cable. [3-89N3]
- In an NMEA 2000 device, a load equivalence number (LEN) of 1 equals 50 mA of current consumption. [3-89N4]
- Worked example: a device drawing 300 mA has LEN = 300 mA ÷ 50 mA = 6. [3-89N4]
- An NMEA 2000 system with devices in a single location may be powered as an end-powered network, keeping the cable run between supply and loads short. [3-89N5]
- A voltage drop of 1.5 volts at the end of the last segment satisfies NMEA 2000 network cabling plans. [3-89N6]

Scene ideas: block diagram: NMEA 2000 backbone with tees and drop cables, one device failing while the others keep talking; equipment card: NMEA 0183 cable with its shield grounded at the talker end only; formula reveal: LEN = 300 mA ÷ 50 mA = 6, followed by a 1.5 volt maximum drop at the end of the last segment.

## Lesson 3-O: RADAR

Element 3 · Subelement O · Key topics 90–94

**Goal:** The learner can calculate radar range from echo time, name what each radar component does, choose the pulse width and repetition rate for each range setting, and explain the antennas, waveguides and safety precautions tested on the exam.

**Visual style:** A radar PPI with rotating sweep and range rings is the recurring motif that opens each key topic. Block diagram scenes trace the pulse from magnetron through duplexer to antenna and back to the receiver, formula reveal scenes work the range and gain calculations, and comparison table scenes line up pulse settings by range.

**Narration style:** A friendly, plain-spoken instructor using short sentences, spelling out each acronym the first time (pulse repetition rate, pulse width, anti-transmit-receive, transmit-receive, digital signal processing, traveling-wave tube, Automatic RADAR Plotting Aid). Say units and symbols in words (microseconds, pulses per second, gigahertz, decibels, milliwatts per square centimeter) and stress the exam numbers: 12.346 microseconds per nautical mile, 500 to 2,000 pulses per second, 0.05 to 1.0 microseconds, 6 decibels and 5.0 milliwatts per square centimeter.

### Key topic 90: RADAR Theory

Facts to teach:

- The normal range of pulse repetition rates is 500 to 2,000 pps (pulses per second), with lower rates on long ranges and higher rates on short ranges. [3-90O1]
- The pulse repetition rate (PRR) of a radar is the pulse rate of the magnetron, not of the local oscillator or klystron, and duty cycle equals pulse width × PRR, not its reciprocal. [3-90O5]
- The normal range of pulse widths is 0.05 µs to 1.0 µs, with short pulses for fine range resolution and longer pulses for more energy on distant targets. [3-90O3]
- Shipboard radar is most commonly operated in the SHF (super high frequency) band of 3 to 30 GHz, mostly in the X-band near 9.4 GHz. [3-90O4]
- Radar range in nautical miles = elapsed time ÷ 12.346 µs, because radio waves cover one nautical mile out and back in 12.346 µs. [3-90O2, 3-90O6]
- Example: an elapsed time of 123.46 µs gives 123.46 µs ÷ 12.346 µs = 10 nautical miles. [3-90O2]
- Worked example: an echo elapsed time of 62 µs gives 62 ÷ 12.346 ≈ 5.02, so the object is 5 nautical miles away. [3-90O6]

Scene ideas: formula reveal: range = elapsed time ÷ 12.346 µs, worked for 62 µs with 5 nautical miles boxed; waveform: pulse train labeled with pulse width 0.05 µs to 1.0 µs and repetition rate 500 to 2,000 pps; frequency band strip: SHF band from 3 to 30 GHz with X-band near 9.4 GHz.

### Key topic 91: Components

Facts to teach:

- The magnetron is the component that provides the transmitter output power for a radar system, while thyratrons and SCRs only switch the modulator pulse and klystrons served as low-power receiver local oscillators in older radars. [3-91O6]
- The radar duplexer/circulator is an electronic switch that allows the use of one antenna for both transmission and reception. [3-91O2]
- The ATR (anti-transmit-receive) box prevents the received signal from entering the transmitter, while protecting the receiver from the transmitted pulse is the TR (transmit-receive) tube's job. [3-91O1]
- An echo box, a high-Q resonant cavity that rings part of the transmitted pulse back to the receiver, is used to determine the performance of a radar system at sea. [3-91O3]
- A synchro transmitter and receiver transmit the angular position of the antenna to the indicator unit, keeping the display sweep in step with the antenna. [3-91O4]
- Digital signal processing (DSP) of radar signals, compared with analog, gives improved weak signal or target enhancement by averaging echoes over many sweeps to suppress noise. [3-91O5]

Scene ideas: block diagram: magnetron to duplexer/circulator to antenna, with echoes steered past the ATR toward the receiver; equipment card: echo box and the synchro transmitter and receiver linking the antenna to the indicator unit; radar PPI: a weak target growing brighter as DSP averages sweeps.

### Key topic 92: Range, Pulse Width & Repetition Rate

Facts to teach:

- At long ranges, use a wide pulse width and a slow repetition rate, because wide pulses carry more energy to distant targets and slow rates let echoes return before the next pulse. [3-92O4]
- At short ranges, use a narrow pulse width and fast repetition rates, for fine range resolution, a short minimum range and more hits on each target per sweep. [3-92O5]
- On the 48 mile range setting, the most appropriate settings are 1.0 µs PW (pulse width) and 500 pps. [3-92O1]
- At 500 pps, R<sub>max</sub> = (1 ÷ 500) ÷ 12.346 µs = 2,000 µs ÷ 12.346 µs ≈ 162 nmi, while 2,000 pps would allow only about 40 nmi. [3-92O1]
- On the 25 mile range setting, the most appropriate settings are also 1.0 µs PW and 500 pps, because detecting weak distant echoes matters more than fine resolution. [3-92O3]
- On the 6 mile range setting, the most appropriate settings are 0.25 µs PW and 1,000 pps, and the 1,000 µs interval still covers 1,000 ÷ 12.346 ≈ 81 nmi. [3-92O2]
- On the 1.5 mile range setting, the most appropriate settings are 0.05 µs PW and 2,000 pps. [3-92O6]
- With a 0.05 µs pulse, the minimum range is c·τ ÷ 2 = (3×10⁸ × 0.05×10⁻⁶) ÷ 2 = 7.5 m. [3-92O6]

Scene ideas: comparison table: 1.5 mile at 0.05 µs and 2,000 pps, 6 mile at 0.25 µs and 1,000 pps, 25 and 48 mile at 1.0 µs and 500 pps; waveform: narrow, fast pulse train for short range beside a wide, slow pulse train for long range; formula reveal: R<sub>max</sub> at 500 pps ≈ 162 nmi.

### Key topic 93: Antennas & Waveguides

Facts to teach:

- A common shipboard radar antenna is the slotted array, a rotating length of waveguide whose slots form a narrow horizontal beam. [3-93O4]
- Parabolic dish gain is G = η(πd/λ)², so doubling the operating frequency halves λ, multiplies gain by 4 and increases gain 6 dB (10 log 4 ≈ 6 dB). [3-93O1]
- The beamwidth of an antenna decreases as the gain is increased, because gain comes from concentrating power into a narrower beam (for a dish, beamwidth ≈ 70λ/d degrees). [3-93O3]
- Conductance takes place in a waveguide through electromagnetic and electrostatic fields in the walls of the waveguide, not in the same manner as a transmission line, because a waveguide has no center conductor. [3-93O5]
- To couple energy into and out of a waveguide, use a thin piece of wire as an antenna, placed at an electric-field maximum inside the guide. [3-93O6]
- A J-hook is the pickup device used to extract the radar signal from the wave guide, while a circulator only routes energy and a folded dipole is a wire antenna for much lower frequencies. [3-93O2]

Scene ideas: formula reveal: G = η(πd/λ)², frequency doubled, gain × 4, plus 6 dB boxed; equipment card: slotted array antenna, then a waveguide cutaway with a thin wire probe and a J-hook pickup; comparison table: low gain with wide beamwidth versus high gain with narrow beamwidth.

### Key topic 94: RADAR Equipment

Facts to teach:

- Prior to testing any radar system, the operator should first assure no personnel are in front of the antenna, because its high-power microwaves can heat body tissue, especially the eyes. [3-94O2]
- U.S. Health Department regulations limit exposure to microwave energy from radar or other electronic devices to 5.0 mW per square centimeter (5.0 mW/cm²). [3-94O5]
- The permanent magnetic field that surrounds a traveling-wave tube (TWT) is intended to prevent the electron beam from spreading. [3-94O1]
- To keep a magnetron from being weakened, keep metal tools away from the magnet and do not subject it to excessive heat or to shocks and blows, but keeping the TR properly tuned is not a magnetron precaution. [3-94O4]
- ARPA stands for Automatic RADAR Plotting Aid, a function that tracks selected targets and computes their course, speed and closest point of approach. [3-94O3]
- Radar collision avoidance systems use inputs from your ship's gyrocompass, navigation position receiver and speed indicator, but not the anemometer. [3-94O6]

Scene ideas: equipment card: radar antenna with a keep-clear zone in front and a 5.0 mW/cm² limit badge; key-fact list: magnetron precautions (metal tools, heat, shocks and blows) with "keep the TR tuned" marked as not one of them; block diagram: gyrocompass, navigation position receiver and speed indicator feeding the ARPA, with the anemometer left unconnected.

## Lesson 3-P: Satellite

Element 3 · Subelement P · Key topics 95–98

**Goal:** The learner can compare the Iridium, COSPAS-SARSAT, Inmarsat and GPS satellite systems by orbit altitude, frequencies, services and antennas.

**Visual style:** Equipment card scenes show the Earth with orbit rings, a recurring motif that adds one system per key topic at its altitude: Iridium at 485 miles, GPS at 12,554 miles and Inmarsat at 22,177 miles. Comparison table scenes line up services and data rates, and frequency band strip scenes place the satellite frequencies.

**Narration style:** A friendly, plain-spoken instructor using short sentences, spelling out each acronym the first time (emergency position-indicating radio beacon, ship earth station, Atlantic Ocean Region East and West, Pacific Ocean Region, Indian Ocean Region, Differential GPS) and saying GPS as the letters G P S. Say units in words (miles, megahertz, kilobits per second, degrees) and stress the exam numbers: 485, 12,554 and 22,177 miles, 1616 to 1626 megahertz, 406 megahertz, 1227.6 and 1575.4 megahertz, 24 satellites and 4 satellites for a full fix.

### Key topic 95: Low Earth Orbit Systems

Facts to teach:

- The Iridium satellite communications system orbits at an altitude of 485 miles, in low Earth orbit far below the geostationary Inmarsat satellites. [3-95P1]
- Iridium uses the 1616–1626 MHz band for telephone and messaging. [3-95P2]
- Iridium provides digital voice and data at 2.4 kbps, with no analog voice. [3-95P3]
- For the exam, Iridium is keyed as having 48 spot beams per satellite with a footprint of 30 miles in diameter (the 48 beams are real, but each is roughly 400 km, about 250 miles, across; see the flag note). [3-95P4]
- Iridium is not 48 satellites in 4 orbital planes: it uses 66 active satellites in six near-polar planes inclined 86.4°, with an orbital period of about 100 minutes. [3-95P4]
- The main function of the COSPAS-SARSAT satellite system is to monitor 406 MHz for distress calls from EPIRBs and relay them to ground stations called local user terminals. [3-95P5]
- COSPAS-SARSAT determines the position of a ship in distress by measuring the Doppler shift of the 406 MHz signal taken at several different points in its orbit, since only beacons with built-in GPS send their own coordinates. [3-95P6]

Scene ideas: equipment card: Earth with Iridium's low orbit at 485 miles and one satellite footprint tiled by 48 spot beams; frequency band strip: COSPAS-SARSAT at 406 MHz and Iridium at 1616–1626 MHz; waveform: a 406 MHz sine wave whose received frequency shifts by Doppler as the satellite passes.

### Key topic 96: INMARSAT Communications Systems-1

Facts to teach:

- INMARSAT satellites orbit at an altitude of 22,177 miles, in geostationary orbit above the equator. [3-96P1]
- The INMARSAT satellite system is AOR-E at 15.5° W, AOR-W at 54° W, POR at 178° E and IOR at 64.5° E. [3-96P2]
- INMARSAT geostationary satellites provide coverage to vessels in nearly all of the world's navigable waters, but they are not in polar orbit and miss the polar regions above about 70° latitude, so coverage is not truly global. [3-96P5]
- The INMARSAT-C SES (ship earth station) antenna is omnidirectional, so it needs no aiming or stabilization. [3-96P3]
- For voice communications via an INMARSAT-B terminal, CODECs are used to digitize the voice signal. [3-96P4]
- INMARSAT-B communications can be made impossible by all of these: an obstruction such as a mast blocking the signal on a certain course, a satellite on a low elevation below the horizon, or travel beyond the effective radius of the satellite. [3-96P6]

Scene ideas: equipment card: globe with four geostationary satellites labeled AOR-E 15.5° W, AOR-W 54° W, POR 178° E and IOR 64.5° E, with the polar regions shaded as uncovered; equipment card: ship with an omnidirectional INMARSAT-C antenna and an INMARSAT-B dish whose view is blocked by the mast; key-fact list: the three conditions that make INMARSAT-B impossible.

### Key topic 97: INMARSAT Communications Systems-2

Facts to teach:

- INMARSAT-C is a store-and-forward system that provides routine and distress communications, not real-time telex and not voice. [3-97P1]
- INMARSAT-B services are voice at 16 kbps, fax at 14.4 kbps and high-speed data at 64/54 kbps, delivered in real time rather than store-and-forward. [3-97P3]
- INMARSAT-B, M4 and Fleet offer high-speed data at 64/54 kbps, because their high-gain directional antennas support it. [3-97P4]
- INMARSAT-C antennas are small and omnidirectional, while INMARSAT-B antennas are larger and directional. [3-97P5]
- INMARSAT-M provides voice at 6.2 kbps, data at 2.4 kbps, fax at 2.4 kbps and e-mail. [3-97P6]
- The INMARSAT mini-M system is a satellite system utilizing spot beams to provide for small craft communications. [3-97P2]

Scene ideas: comparison table: INMARSAT-B, INMARSAT-C, INMARSAT-M and mini-M with their services, data rates and antenna types; equipment card: a small omnidirectional INMARSAT-C antenna beside a larger directional INMARSAT-B dish; block diagram: store-and-forward message path from ship to land earth station to recipient.

### Key topic 98: GPS

Facts to teach:

- GPS satellites orbit at an altitude of 12,554 miles, circling the Earth about once every 12 hours. [3-98P1]
- The GPS transmitted frequencies are 1227.6 MHz and 1575.4 MHz. [3-98P2]
- 24 GPS satellites are normally in operation, four in each orbital plane, with extra satellites kept as spares. [3-98P3]
- GPS satellites are in six orbital planes equally spaced and inclined about 55 degrees to the equator, neither polar nor geosynchronous. [3-98P4]
- 4 satellites must be received to provide complete position and time, because the receiver solves for latitude, longitude, altitude and its own clock error. [3-98P5]
- DGPS (Differential GPS) is a system to provide additional correction factors to improve position accuracy, using a reference station at a precisely surveyed location. [3-98P6]

Scene ideas: equipment card: Earth with six orbital planes inclined 55 degrees at 12,554 miles, four satellites in each plane; frequency band strip: GPS at 1227.6 MHz and 1575.4 MHz; block diagram: DGPS reference station measuring the GPS error and broadcasting correction factors to a ship's receiver.

## Lesson 3-Q: SAFETY

Element 3 · Subelement Q · Key topics 99–100

**Goal:** The learner can state the FCC RF exposure rules and the lightning, tool, fire and electrical safety steps tested on the exam.

**Visual style:** Timeline / interval badges and key-fact list scenes carry the rules and their numbers, a comparison table contrasts controlled and uncontrolled environments, and equipment card scenes show the eye, ground leads, the shorted stub and the GFI outlet. A recurring motif is a yellow hazard badge that appears beside each safety rule.

**Narration style:** A calm, friendly, plain-spoken instructor using short sentences, spelling out each acronym the first time (radio frequency, Maximum Permissible Exposure, Office of Engineering and Technology, effective radiated power, ground fault interrupter). Say units in words (minutes, percent, watts, milliamps) and stress the exam numbers: 6 and 30 minutes, more than 5 percent, 1000 watts E R P, yearly training, and the keyed response F E 30.

### Key topic 99: Radiation Exposure

Facts to teach:

- MPE (Maximum Permissible Exposure) compliance under FCC Part 1, OET Bulletin 65, is averaged over 6 minutes in "controlled" (occupational) environments and over 30 minutes in "uncontrolled" (general public) environments. [3-99Q1]
- Sites having multiple transmitting antennas must include every antenna with more than 5% of the maximum permissible power density exposure limit when evaluating RF site exposure. [3-99Q2]
- An MPE study is required at an aggregate power level of 1000 Watts ERP (effective radiated power). [3-99Q4]
- If MPE power is present, personnel accessing the affected area must be trained and certified yearly. [3-99Q6]
- RF exposure from portable radio transceivers may be harmful to the eyes because RF heating may cause cataracts, since the eye's lens has little blood flow to carry heat away. [3-99Q3]
- Never look directly into a fiber optic cable, because an active fiber signal may burn the retina and infrared light cannot be seen. [3-99Q5]

Scene ideas: timeline / interval badges: controlled environment 6 minutes, uncontrolled environment 30 minutes, training and certification yearly; key-fact list: include antennas above 5% of the limit at multi-antenna sites, and an MPE study at 1000 Watts ERP; equipment card: eye cross-section with callouts for the lens (cataracts from RF heating) and the retina (burned by invisible infrared from a live fiber).

### Key topic 100: Safety Steps

Facts to teach:

- There is no device to protect a station from a direct hit from lightning, because good grounding, bonding and surge protectors can only limit the damage. [3-100Q1]
- Ground leads within a building should not have sharp corners, because lightning will jump off the ground lead since it is not able to make sharp bends, so use gradual, sweeping bends. [3-100Q2]
- Shorted-stub lightning protectors do not work at all frequencies, only at the tuned frequency band, where the quarter-wave stub looks like an open circuit to the signal while shorting lightning to ground. [3-100Q5]
- You should never use a power drill without eye protection, because chips, shavings and broken bits fly at high speed and keeping your face away does not stop them. [3-100Q3]
- For the exam, the class of fire caused by an electrical short circuit and the preferred substance to extinguish it are keyed as FE30 (the pool's choices do not really answer the question, and electrical fires are Class C; see the flag note). [3-100Q4]
- A short-circuit fire involves energized equipment, so put it out with a non-conducting agent such as carbon dioxide, dry chemical or a clean-agent gas, never water or foam, and de-energize the circuit if you can. [3-100Q4]
- A GFI electrical socket is used to prevent electrical shock by sensing ground path current and shutting the circuit down, tripping at about 5 mA. [3-100Q6]

Scene ideas: equipment card: ground lead routed with gradual, sweeping bends, beside a sharp corner where lightning jumps off; equipment card: shorted quarter-wave stub on a feed line passing its tuned band while lightning goes to ground; key-fact list: eye protection for every drill job, FE30 keyed for the electrical fire question, and a GFI socket tripping on ground path current.

## Lesson 8-A: RADAR Principles

Element 8 · Subelement A · Key topics 1–10

**Goal:** The learner can explain how a pulse RADAR measures range and how pulse timing, power and frequency fit together, solve the radar mile, power, duty cycle, PRF and wavelength calculations, and identify the receiver, logic and digital circuits shown in the pool figures.

**Visual style:** Use block diagram scenes for the RADAR system's signal path, formula reveal for every timing, power, duty cycle, PRF and wavelength calculation, and equipment card scenes built on pool Figures 8A1 through 8A8. A recurring motif is a waveform pulse train with the pulse width and the time between pulses labeled, brought back whenever pulse width, PRF, duty cycle or the radar mile comes up.

**Narration style:** A friendly, plain-spoken instructor using short sentences, slowing down to walk through each calculation one line at a time. Spell out each acronym the first time (RADAR, PRF, PRI, PRR, SHF, TR, ATR, AFC, ALU, TTL, CMOS) and say units and symbols in words (microseconds, gigahertz, kilowatts, milliamps, ohms, "P sub average", "R sub S", "Q bar"). Stress the exam numbers: 12.34 microseconds per radar mile, 150 meters per microsecond, and every boxed answer.

### Key topic 1: Marine RADAR Systems

Facts to teach:

- The size of the target echo is controlled by transmitted power, antenna effective area, transmit and receive losses, the RADAR cross section of the target, and range to target, as the radar range equation shows; receiver gain only amplifies an echo after it arrives. [8-1A1]
- Recovery time has no effect on maximum range: it is how quickly the TR tube and receiver regain full sensitivity after each pulse, so it limits the minimum range, while carrier frequency, PRF and receiver sensitivity all affect maximum range. [8-1A2]
- Average power is the transmitter power measured over a period of time, the peak pulse power spread over the whole repetition period: P<sub>avg</sub> = P<sub>peak</sub> × pulse width × PRF, while peak power is the power during the brief pulse itself. [8-1A3]
- The synchronizer, also called the timer or trigger generator, controls timing throughout the RADAR system by producing the pulses that fire the modulator and, at the same instant, start the indicator sweep and range circuits. [8-1A4]
- The duplexer allows a single antenna to be used for both transmitting and receiving: during each pulse it routes energy to the antenna and blocks the receiver, then passes the weak returning echoes to the receiver between pulses. [8-1A5]
- The sweep frequency of a RADAR indicator is set by the pulse repetition frequency (PRF), because each transmitted pulse triggers one sweep; carrier frequency and pulse width do not decide how often the trace restarts. [8-1A6]

Scene ideas: block diagram: synchronizer firing the modulator and magnetron, the duplexer switching one antenna between transmitter and receiver, and the indicator sweep starting with each pulse; key-fact list: what sets echo size (transmitted power, antenna effective area, transmit and receive losses, RADAR cross section, range to target); waveform: pulse train comparing tall, brief peak power with the low, steady average power.

### Key topic 2: Distance and Time

Facts to teach:

- One RADAR mile is 12.34 µs: the time for a pulse to travel out to a target one nautical mile away and back. [8-2A2]
- One way, a radio wave covers one nautical mile in about 6.17 µs, half the 12.34 µs radar mile, so three nautical miles takes t = 3 × 6.17 µs = 18.51 µs. [8-2A1]
- RADAR range is measured by the constant 150 meters per microsecond (meters, not yards): radio waves travel about 300 meters per microsecond, and the out-and-back trip gives 300 ÷ 2 = 150 meters of range per microsecond of echo delay. [8-2A3]
- Echo time is range times the radar mile, t = range × 12.34 µs: a target 5 miles away echoes back after t = 5 × 12.34 µs = 61.7 µs. [8-2A4]
- A target 10 nautical miles away echoes back after t = 10 × 12.34 µs = 123.4 µs. [8-2A5]
- Range is echo time divided by the radar mile, with no halving because 12.34 µs is already a round trip: R = 308.5 ÷ 12.34 = 25 nautical miles. [8-2A6]

Scene ideas: radar PPI: a pulse running out to an echo on the 1 nautical mile range ring and back, with a 12.34 microsecond timer; formula reveal: t = 3 × 6.17 µs = 18.51 µs, then t = 5 × 12.34 µs = 61.7 µs and t = 10 × 12.34 µs = 123.4 µs, then R = 308.5 ÷ 12.34 = 25 nautical miles; formula reveal: 300 ÷ 2 = 150 meters per microsecond.

### Key topic 3: Frequency and Wavelength

Facts to teach:

- Marine RADAR frequencies are in the SHF (super high frequency) part of the radio spectrum, 3 to 30 GHz, mainly S-band near 3 GHz and X-band near 9.4 GHz. [8-3A1]
- Practical RADAR uses microwave frequencies so that stronger target echoes are produced: the short wavelength is small compared with ships, buoys and coastlines, so they reflect strongly, and a practical-size antenna forms a narrow, high-gain beam. [8-3A2]
- An S-band RADAR operates in the 2 to 4 GHz band, wavelengths of about 15 down to 7.5 cm, and marine S-band sets typically run near 3 GHz. [8-3A3]
- Wavelength is λ = c / f, so a 3 GHz RADAR has λ = 3 × 10<sup>8</sup> m/s ÷ 3 × 10<sup>9</sup> Hz = 0.1 m = 10 cm, which is why S-band is called 10-centimeter radar. [8-3A4]
- The major advantage of S-band over X-band is that it is less affected by weather conditions, because its longer wavelength, about 10 cm versus 3 cm, is scattered and absorbed far less by rain, snow and fog; X-band, not S-band, has the better bearing resolution. [8-3A5]
- An X-band RADAR operates in the 8 to 12 GHz band, and marine X-band sets usually transmit near 9.4 GHz, a wavelength of about 3.2 cm. [8-3A6]

Scene ideas: frequency band strip: SHF from 3 to 30 GHz with S-band (2 to 4 GHz, marker at 3 GHz) and X-band (8 to 12 GHz, marker at 9.4 GHz); formula reveal: λ = c / f = 3 × 10<sup>8</sup> m/s ÷ 3 × 10<sup>9</sup> Hz = 0.1 m = 10 cm; comparison table: S-band versus X-band (band, wavelength, weather performance, bearing resolution).

### Key topic 4: Power, Pulse Width, PRR

Facts to teach:

- Average power is peak power times duty cycle: P<sub>avg</sub> = P<sub>pk</sub> × PW × PRF, where PW is the pulse width and the duty cycle is PW × PRF. [8-4A1, 8-4A4, 8-4A5]
- With a PRF of 400 Hz, a 1 microsecond pulse and 100 kilowatts peak: P<sub>avg</sub> = 100,000 W × 1 × 10<sup>−6</sup> s × 400 Hz = 40 W. [8-4A1]
- Duty cycle is the fraction of time the transmitter is on, duty cycle = PW × PRF; with a PRF of 1,000 Hz and a 0.5 microsecond pulse it is 0.5 × 10<sup>−6</sup> s × 1,000 Hz = 0.0005, and the peak power and minimum range figures are not needed. [8-4A2]
- Average power can also be found as peak power × pulse width ÷ pulse period: a 0.5 microsecond, 100 kilowatt pulse every 1600 microseconds gives 100,000 W × 0.5 µs ÷ 1,600 µs = 31.25 W, with a PRF of only 625 Hz and a duty cycle of only 0.03125 percent. [8-4A3]
- With a PRF of 900 Hz, a 0.5 microsecond pulse and 15 kilowatts peak: P<sub>avg</sub> = 15,000 W × 0.5 × 10<sup>−6</sup> s × 900 Hz = 6.75 W. [8-4A4]
- With a PRF of 1000 Hz, a 1 microsecond pulse and 100 kilowatts peak: P<sub>avg</sub> = 100,000 W × 1 × 10<sup>−6</sup> s × 1,000 Hz = 100 W, a duty cycle of 0.001. [8-4A5]
- To find peak power, rearrange the formula: P<sub>pk</sub> = P<sub>avg</sub> ÷ (PW × PRF) = 18 W ÷ (1 × 10<sup>−6</sup> s × 900 Hz) = 18 ÷ 0.0009 = 20,000 W = 20 kW. [8-4A6]

Scene ideas: waveform: pulse train labeling pulse width, pulse period, peak power and the much lower average power; formula reveal: P<sub>avg</sub> = P<sub>pk</sub> × PW × PRF worked for 40 W, 6.75 W and 100 W, then 31.25 W from the pulse period; formula reveal: duty cycle = 0.0005, then the rearranged P<sub>pk</sub> = 20 kW.

### Key topic 5: Range, Pulse Width, PRF

Facts to teach:

- Each echo must return before the next pulse fires, so the pulse period must be at least the round-trip time, t = range × 12.34 µs, and the PRF must be no more than 1 ÷ t. [8-5A1, 8-5A2, 8-5A5, 8-5A6]
- For a range of 5 nautical miles: t = 5 × 12.34 µs = 61.7 µs, and PRF ≤ 1 ÷ 61.7 µs ≈ 16.2 kHz, so the PRF should be 16.2 kHz or less. [8-5A1]
- For a range of 10 nautical miles: t = 10 × 12.34 µs = 123.4 µs, so the PRF should be approximately 8.1 kHz or less. [8-5A6]
- For a range of 30 nautical miles: t = 30 × 12.34 µs = 370.2 µs, so the PRF should be 2.7 kHz or less. [8-5A5]
- For a range of 100 nautical miles: t = 100 × 12.34 µs = 1,234 µs, so the PRF should be 810 Hz or less. [8-5A2]
- The minimum range of a RADAR is determined by the transmitted pulse width: while the pulse is on, the receiver is protected and cannot hear echoes, giving about 150 m of minimum range per microsecond of pulse width. [8-5A3]
- Short range RADARs most likely transmit narrow pulses at a fast rate: narrow pulses give a small minimum range and fine range resolution, and close-in echoes return quickly, so pulses can be sent often. [8-5A4]

Scene ideas: formula reveal: PRF ≤ 1 ÷ (range × 12.34 µs) worked for 5, 10, 30 and 100 nautical miles; comparison table: range against maximum PRF (16.2 kHz, 8.1 kHz, 2.7 kHz, 810 Hz); radar PPI: a close target hidden inside the transmitted pulse to show minimum range.

### Key topic 6: Pulse Width - Pulse Repetition Rates

Facts to teach:

- The pulse repetition interval (PRI) is the reciprocal of the PRF, PRI = 1 ÷ PRF, so a PRF of 2500 Hz gives PRI = 1 ÷ 2,500 Hz = 0.0004 s = 400 µs. [8-6A1]
- A PRF of 2000 Hz gives PRI = 1 ÷ 2,000 Hz = 0.0005 s, or 500 µs, the time from the start of one pulse to the start of the next. [8-6A2]
- The pulse repetition rate (PRR) is the pulse rate of the magnetron, how many times per second it is fired; the receiver's local oscillator, klystron or solid-state, runs continuously and is not pulsed. [8-6A3]
- With a PRF of 2000 Hz and a pulse width of 0.05 microseconds: duty cycle = PW × PRF = 0.05 × 10<sup>−6</sup> s × 2,000 Hz = 0.0001, on only one ten-thousandth of the time. [8-6A4]
- Small targets are best detected using a long pulse width with high output power, because a long, powerful pulse puts more energy on the target and gives an echo strong enough to stand out above receiver noise. [8-6A5]
- PRR and pulse width go opposite ways, lower PRR with wider pulse width: long-range settings use wider pulses and lower the PRR to allow time for distant echoes and keep duty cycle and magnetron average power in limits, and short-range settings do the opposite. [8-6A6]

Scene ideas: formula reveal: PRI = 1 ÷ 2,500 Hz = 400 µs, PRI = 1 ÷ 2,000 Hz = 0.0005 s, and duty cycle = 0.0001; waveform: two pulse trains, short range with narrow pulses at a fast rate and long range with wide pulses at a lower PRR; key-fact list: PRR is the magnetron's firing rate, small targets need a long pulse at high power.

### Key topic 7: Components-1

Facts to teach:

- In Figure 8A1, block 46 is the TR box: it sits between the waveguide and the receiver's crystal detector, fires during the transmitted pulse to protect the crystal, and passes weak echoes the rest of the time. [8-7A1]
- In Figure 8A1, block 47 is the RF attenuator: fed straight from the magnetron, it cuts a small sample of the powerful transmitter output down to a safe level for the AFC (automatic frequency control) mixer. [8-7A6]
- A basic sample-and-hold circuit contains an analog switch, a capacitor, amplifiers, and input and output buffers: the switch connects the signal to the hold capacitor and opens to freeze the voltage, the input buffer charges it quickly, and the output buffer keeps the load from draining it. [8-7A2]
- TTL (transistor-transistor logic) and CMOS (complementary metal-oxide semiconductor) NAND gates both have active pull-up outputs, TTL through the upper transistor of its totem-pole output and CMOS through P-channel MOSFETs; neither is a three-state device. [8-7A3]
- Silicon mixer and detector crystals are fragile point-contact diodes, and every caution applies: they are very sensitive to static electric charges, should be wrapped in lead foil for storage, and tolerate only very low currents. [8-7A4]
- A typical current for a silicon crystal in a RADAR mixer or detector circuit is 3 mA; much higher currents would burn out the tiny junction. [8-7A5]

Scene ideas: equipment card: Figure 8A1 with callouts for block 46 (TR box, waveguide to crystal detector) and block 47 (RF attenuator, magnetron to AFC mixer); block diagram: sample-and-hold signal path through input buffer, analog switch, hold capacitor and output buffer; key-fact list: silicon crystal care (static sensitive, lead foil storage, about 3 mA).

### Key topic 8: Components-2

Facts to teach:

- The basic frequency-determining element in a Gunn oscillator is the resonant cavity; the Gunn diode supplies the negative resistance that sustains oscillation, and supply voltage and loading only pull the frequency slightly. [8-8A1]
- A Gunn diode oscillator takes advantage of both negative resistance and the bulk effect: it has no PN junction, and at high fields electrons in the bulk of the gallium arsenide transfer to a slower energy band, creating negative resistance. [8-8A5]
- The primary operating frequency of a reflex klystron is controlled by the dimensions of its resonant cavity, and coarse tuning mechanically changes those dimensions. [8-8A4]
- Fine adjustments of a reflex klystron are made by varying the repeller voltage, which changes how long the electron bunches take to return to the cavity; this is also what AFC circuits adjust. [8-8A6]
- Dynamic-range conversion is not a method of analog-to-digital conversion, because dynamic range is a specification for the span of signal levels a converter handles; delta-sigma, switched-capacitor and dual-slope integration are genuine conversion methods. [8-8A2]
- At higher operating frequencies, CMOS circuits consume almost as much power as TTL circuits: CMOS draws almost no current while static, but every switching transition charges and discharges load capacitance, so its power rises with switching frequency. [8-8A3]

Scene ideas: equipment card: Gunn oscillator with callouts for the resonant cavity (sets frequency) and the diode (negative resistance and bulk effect); equipment card: reflex klystron with callouts for cavity dimensions (primary frequency, coarse tuning) and repeller voltage (fine tuning, AFC); comparison table: real analog-to-digital methods (delta-sigma, switched-capacitor, dual-slope) versus dynamic range as a specification.

### Key topic 9: Circuits-1

Facts to teach:

- Blocking oscillators operate on the formula T = R × C: the circuit conducts for one brief pulse, then is held cut off while its timing capacitor discharges through a resistor, and that RC time constant sets the off time and the pulse repetition rate. [8-9A1]
- In Figure 8A2, the memory and I/O (input/output) interface is the only block connected to the external memory and I/O bus, so the memory and I/O communicate with peripherals; the internal bus is shared and carries one transfer at a time. [8-9A2]
- In Figure 8A2, the ALU (arithmetic logic unit) executes arithmetic manipulations on data from the general registers and the TEMP register and returns the result over the internal bus; address decoding and instruction control happen elsewhere. [8-9A4]
- The phantastron is a triggered, one-shot sweep generator that develops a very linear ramp voltage when triggered by an external source, with a precisely settable length for range-marker and delay timing. [8-9A3]
- In Figure 8A3, the box marked X is a 51-ohm resistor terminating the 50 Ω coax at the receiving end; 51 Ω is the nearest standard value to the cable's characteristic impedance and prevents reflections that would distort the fast digital pulses. [8-9A5]
- The filament of the magnetron carries dangerous voltages: it heats the cathode and is tied to it, and the cathode is pulsed to a high negative voltage while the anode is grounded, so the filament circuit rides at that same high voltage. [8-9A6]

Scene ideas: equipment card: Figure 8A2 with callouts for the memory and I/O interface on the external bus, the ALU, and the shared internal bus; equipment card: Figure 8A3 with box X revealed as a 51-ohm termination on the 50 Ω cable; waveform: a blocking oscillator's sharp pulses spaced by T = R × C, then a phantastron's linear sawtooth ramp.

### Key topic 10: Circuits-2

Facts to teach:

- In Figure 8A4, with pins 1 and 4 (clear and preset) held high and both flip-flops reset (Q low, Q̄ high), the left flip-flop's Q̄ output on pin 6 feeds back to its own data input on pin 2, so its first clock cycle loads a high and pin 5 goes high. [8-10A1]
- In Figure 8A4, pin 5 drives the right flip-flop's data input on pin 12, so the following clock cycle on the right flip-flop sets pin 9 high, leaving pin 5 high and pin 9 high. [8-10A1]
- In Figure 8A5, the 12 V battery reverse-biases the photodiode, the normal way to run one, so only a tiny dark current flows; light creates electron-hole pairs in the junction, so more light means more diode current. [8-10A2]
- Figure 8A6 is a TTL NAND gate: with either input low, Q<sub>1</sub> is saturated and Q<sub>2</sub> is off, because base current flows out the low emitter of the multi-emitter Q<sub>1</sub>, whose collector pulls the base of Q<sub>2</sub> low, sending the output high. [8-10A3]
- An LED series resistor must drop the supply voltage minus the LED voltage at the maximum forward current: in Figure 8A7, R<sub>S</sub> = (5 V − 1.9 V) ÷ 40 mA = 3.1 V ÷ 0.040 amperes = 77.5 Ω ≈ 77 Ω. [8-10A4]
- In Figure 8A2, address pointers are contained in the general registers, which hold both the data registers and the address registers; the ALU does arithmetic rather than address decoding, and the control unit decodes instructions rather than doing arithmetic. [8-10A5]
- In Figure 8A8, the truth table is a D-type flip-flop, 3-state, inverting: on each low-to-high clock edge Qn takes the opposite of Dn (a high in gives a low out), and a high on the active-low output enable forces the high-impedance Z state. [8-10A6]

Scene ideas: equipment card: Figure 8A4 stepping through the two clock cycles, pin 5 turning high and then pin 9 turning high; formula reveal: R<sub>S</sub> = (5 V − 1.9 V) ÷ 40 mA = 3.1 V ÷ 0.040 amperes = 77.5 Ω ≈ 77 Ω on Figure 8A7; equipment card: Figure 8A8 truth table with callouts for the inverted output and the high-impedance Z row.

## Lesson 8-B: Transmitting Systems

Element 8 · Subelement B · Key topics 11–18

**Goal:** The learner can explain how the synchronizer, modulator, pulse forming network and magnetron produce each RADAR pulse, how the TR and ATR tubes or a ferrite circulator let one antenna transmit and receive, and how the transmitter's power supplies work.

**Visual style:** Use block diagram scenes for the transmitter chain from synchronizer to modulator, pulse forming network and magnetron, and for the duplexer's transmit and receive paths, with equipment card scenes for the magnetron, the pulse forming network ladder and the ferrite circulator. A recurring motif is a waveform of the high-voltage modulator pulse with its sharp rising edge, shown each time a block shapes, switches or times that pulse.

**Narration style:** A friendly, plain-spoken instructor using short sentences at an even pace, naming which block does which job before giving the reason. Spell out each acronym the first time (RADAR, PFN, PRR, SCR, TR, ATR, CRT, FET, MOSFET, PWM, AFC) and say units and symbols in words (volts, hertz, decibels, milliwatts, "R sub D S on"). Stress the exam pairings: negative high voltage on the cathode with the anode grounded for safety, the PFN sets pulse width while the synchronizer sets the PRR, keep-alive voltage on the TR tube, and 60 to 500 hertz modulation frequency.

### Key topic 11: Transmitting Systems

Facts to teach:

- The magnetron is the RADAR's RF oscillator and generates the output signal at the proper operating frequency when the modulator pulses it with high voltage; pulse shape and width come from the modulator, and the repetition rate from the synchronizer. [8-11B1]
- The modulator provides high voltage pulses of the proper shape and width to the magnetron, which oscillates for exactly that time; it does not set the repetition rate or tune the magnetron. [8-11B2]
- The false statement about modern RADAR transmitter power supplies is that high voltage supplies produce voltages in excess of 5,000 volts AC, because RADAR high-voltage supplies deliver DC to charge the modulator. [8-11B3]
- It is normal for a RADAR transmitter to have separate low voltage and high voltage supplies, with low voltage supplies that use switching circuits to deliver multiple voltages and may supply both AC and DC voltages. [8-11B3]
- The pulse forming network (PFN) produces a pulse of the correct width: it is an artificial transmission line that charges between pulses and then discharges into the magnetron for a fixed time set by its inductors and capacitors. [8-11B4]
- The synchronizer generates a timing signal that establishes the pulse repetition rate (PRR): its trigger pulses fire the modulator and start the display sweep, keeping the system in step, while pulse width comes from the PFN. [8-11B5]
- The transmitting system is the modulator, its pulse forming network and the magnetron; a klystron is not part of it, because where a marine RADAR uses one it is the receiver's local oscillator. [8-11B6]

Scene ideas: block diagram: synchronizer trigger into the modulator and its PFN, high-voltage pulse into the magnetron, RF out to the antenna, with the power supplies feeding the modulator; comparison table: which block sets what (magnetron sets the operating frequency, modulator and PFN set pulse shape and width, synchronizer sets the PRR).

### Key topic 12: Magnetrons

Facts to teach:

- High voltage is applied to the cathode of the magnetron, as a strongly negative pulse, while the anode block stays at ground. [8-12B1]
- A negative voltage goes on the cathode rather than a positive voltage on the anode so that the anode can be operated at ground potential for safety; the anode-to-cathode voltage is the same either way. [8-12B5]
- The anode of a magnetron is normally kept at ground potential for safety purposes, because it forms the outer body and connects to the waveguide and chassis, yet it is still positive relative to the cathode. [8-12B6]
- The magnetron output pulse's rise time relates to accurate range measurement, because range is timed from the pulse's leading edge, so a fast, sharp rise gives a precise starting reference while a slow rise makes the timing point uncertain. [8-12B2]
- The magnetron is the device used as the transmitter in a marine RADAR, because it efficiently produces high-power microwave pulses from a compact, rugged tube; the klystron served as the receiver's local oscillator in older sets, and the thyratron is a modulator switch. [8-12B3]
- The magnetron is a type of diode that requires an external magnetic field: it has only two elements, a cathode and an anode block, and a permanent magnet outside the tube curves the electrons' paths so they excite the resonant cavities. [8-12B4]

Scene ideas: equipment card: magnetron with callouts for the cathode (negative high-voltage pulse), the grounded anode block bolted to the waveguide, the external permanent magnet, and the resonant cavities; waveform: a transmitted pulse with a fast rise time marked as the range timing start point, beside a slow-rising pulse with an uncertain start.

### Key topic 13: Modulation

Facts to teach:

- In a solid-state RADAR modulator, the duration of the transmitted pulse is determined by the pulse forming network: an SCR (silicon-controlled rectifier) or similar switch discharges the PFN into the pulse transformer, its inductors and capacitors set how long the discharge lasts, and the trigger only starts it. [8-13B1]
- The modulation frequency is simply the pulse repetition rate, because the modulator fires the magnetron once per pulse, and the exam keys the modulation frequency of most RADAR systems as between 60 and 500 Hz. [8-13B2]
- A PFN driving a magnetron cathode through a step-up transformer gives pulse modulation: brief high-voltage pulses switch the magnetron fully on and off, so RF is emitted only in short bursts. [8-13B3]
- In a pulse modulated magnetron, the pulse forming network determines the shape and width of the pulse; the thyratron only acts as the switch that discharges it. [8-13B4]
- A thyratron or a silicon-controlled rectifier (SCR) may act as the modulator, as the switching element that discharges the PFN, a hydrogen thyratron in older sets and an SCR in solid-state ones; the magnetron and klystron are microwave oscillators, and the video amplifier belongs to the receiver. [8-13B5]
- The purpose of the modulator is to provide the correct waveform to the transmitter, a high-voltage pulse of the correct amplitude, width and shape at each trigger; bearing resolution and sea return depend on the antenna and receiver. [8-13B6]

Scene ideas: block diagram: trigger into a thyratron or SCR switch, which discharges the PFN through a step-up pulse transformer onto the magnetron cathode; waveform: pulse train of RF bursts with silence between them to show pulse modulation, labeled as the PRR; key-fact list: PFN sets pulse shape and width, the switch only starts the pulse, modulation frequency 60 to 500 Hz.

### Key topic 14: Pulse Forming Networks Modulation

Facts to teach:

- The modulator pulse can have an amplitude greater than the supply voltage by employing a resonant charging choke: it resonates with the PFN capacitance, and its collapsing magnetic field keeps current flowing so the capacitors charge to nearly twice the supply voltage, held there by a diode until the switch fires. [8-14B1]
- The switching devices most often used in pulse-forming circuits are SCRs and thyratrons, latching switches that withstand high voltage, carry very high peak current, turn on fast and turn off once the PFN is discharged. [8-14B2]
- The purpose of the pulse-forming network is to determine the width of the modulating pulses: when discharged it delivers a flat-topped pulse lasting twice the line's one-way delay, and the synchronizer, not the PFN, sets the pulse repetition rate. [8-14B3]
- The shape and duration of the high-voltage pulse delivered to the magnetron are established by an artificial delay line, the PFN of inductors and capacitors, whose component values fix the pulse. [8-14B4]
- Pulse-forming networks are usually composed of series inductors and shunt capacitors, a ladder that imitates a real line's series inductance and shunt capacitance and delivers a nearly rectangular pulse. [8-14B5]
- An artificial transmission line, the pulse forming network, is used for determining the shape and duration of pulses: it stores energy in its LC sections and releases it as a pulse lasting twice its delay time. [8-14B6]

Scene ideas: equipment card: PFN ladder with callouts for the series inductors, the shunt capacitors, the resonant charging choke, the hold diode and the SCR or thyratron switch; waveform: PFN voltage charging to nearly twice the supply voltage, then a flat-topped output pulse lasting twice the line delay.

### Key topic 15: TR - ATR - Circulators - Directional Couplers-1

Facts to teach:

- The ferrite material in a circulator is used as a phase shifter: in a magnetic field it shifts a wave's phase by different amounts depending on direction of travel, steering energy one way around the ports, transmitter to antenna and antenna to receiver. [8-15B1]
- In a circular resonant cavity with flat ends, the E-lines are perpendicular to the end walls, running straight from one flat end wall to the other, parallel to the cavity's axis. [8-15B2]
- A ferrite circulator is most commonly used in the duplexer, where its one-way coupling sends the magnetron's pulse to the antenna and routes incoming echoes from the antenna to the receiver. [8-15B3]
- In the RF section, a circulator replaces the TR cell and functions as a duplexer, doing the job otherwise done by TR and ATR tubes; it has nothing to do with cooling, testing or antenna position. [8-15B4]
- The RADAR duplexer or circulator is an electronic switch that allows the use of one antenna for both transmission and reception: during each pulse it connects the transmitter to the antenna and isolates the receiver, then connects the antenna to the receiver for the echoes. [8-15B6]
- A directional coupler with an attenuation of −30 dB samples 1/1,000 of the line power, since 10<sup>30/10</sup> = 1,000, so a 100 milliwatt reading at the coupler means the line carries P = 100 mW × 1,000 = 100 W. [8-15B5]

Scene ideas: equipment card: three-port ferrite circulator with arrows circling transmitter to antenna to receiver; formula reveal: 10<sup>30/10</sup> = 1,000, then P = 100 mW × 1,000 = 100 W; equipment card: circular cavity with flat ends showing E-lines running straight between the end walls.

### Key topic 16: TR - ATR - Circulators - Directional Couplers-2

Facts to teach:

- The TR (transmit-receive) box protects the receiver from the strong RADAR pulses and mutes the receiver when the transmitter is on: its tube ionizes during each pulse, shorting the receiver input until the gas deionizes. [8-16B3]
- The ATR (anti-transmit-receive) box prevents the received signal from entering the transmitter: unfired between pulses, it blocks the transmitter branch so weak echoes go to the receiver; protecting and muting the receiver is the TR box's job. [8-16B1]
- The ATR tube is located between the magnetron and the mixer, in the transmitter branch, and prevents received signals from entering the magnetron, so echoes go to the mixer instead of being absorbed by the magnetron. [8-16B4]
- When a pulse RADAR is radiating, both the TR and ATR tubes are energized: the high-power pulse ionizes the gas in both, the TR tube firing to short and protect the receiver path and the ATR tube firing so the pulse passes freely to the antenna. [8-16B2]
- A DC keep-alive voltage is applied to the TR tube, partially ionizing its gas to make it more sensitive, so it fires almost instantly when the transmitter pulse arrives; full ionization all the time would short the receiver and block echoes. [8-16B5, 8-16B6]

Scene ideas: block diagram: duplexer in transmit state with both TR and ATR tubes fired and the pulse going to the antenna, then receive state with echoes passing the unfired ATR to the mixer; comparison table: TR tube versus ATR tube (location, when it fires, what it protects, keep-alive voltage).

### Key topic 17: Timer - Trigger - Synchronizer Circuits

Facts to teach:

- The timer (synchronizer circuit) determines the pulse repetition rate (PRR) by generating the trigger pulses that fire the modulator, and it also starts the indicator sweep with each pulse. [8-17B1]
- The triggering section is also known as the synchronizer, because its trigger pulses synchronize the modulator, the indicator sweep and the range-marker circuits so they all start together with each transmitted pulse. [8-17B2]
- Operation of any RADAR system begins in the triggering section: its trigger fires the modulator, which drives the magnetron, and at the same moment starts the display sweep. [8-17B3]
- The timer circuit is the RADAR's master clock and does all of these jobs: it determines the PRR, determines the range markers, and provides blanking and unblanking signals for the CRT (cathode ray tube). [8-17B4]
- A single-swing blocking oscillator best provides accurate RADAR timing pulses: this transformer-coupled circuit fires once and is cut off by its own RC timing, producing very short, sharp, stable pulses with fast rise times. [8-17B5]
- Unblanking pulses from the timer are sent to the CRT, turning its electron beam on only during the active sweep so echoes are visible and leaving it blanked during retrace. [8-17B6]

Scene ideas: block diagram: the timer's trigger fanning out to the modulator, the range-marker generator and the CRT unblanking input; waveform: sharp single-swing blocking oscillator trigger pulses lined up with the CRT unblanking gate and the sweep.

### Key topic 18: Power Supplies

Facts to teach:

- An advantage of resonant charging is that it reduces the high-voltage power supply requirements: the charging choke resonates with the PFN so it charges to nearly twice the DC supply voltage, and the supply needs to produce only about half the pulse voltage. [8-18B1]
- In a modern RADAR switching power supply, an FET (field-effect transistor) that is on compares to a pure resistor, a small R<sub>DS(on)</sub> with no junction voltage drop, and one that is off compares to a mechanical relay with open contacts. [8-18B2]
- A pulse-width modulator (PWM) in a switching power supply varies the duty cycle of the regulator switch to control the output voltage: the switching frequency stays fixed while the on-time in each cycle changes. [8-18B3]
- In a fixed-frequency switching power supply, the pulse width increases when the load impedance decreases, because the lower impedance draws more current and pulls the output down; less load current or a rising input or output voltage narrows the pulses instead. [8-18B4]
- A major reason to use a switching regulator over a linear regulator is much higher overall efficiency: its switch is either fully on or fully off and often reaches 80 to 90 percent or more, while a linear regulator burns the excess voltage as heat in its pass transistor. [8-18B5]
- A power MOSFET in a RADAR switching supply has high input impedance from its insulated gate, and its failure mode can be gate punch-through when excess gate voltage or static punctures the thin gate oxide; it resists thermal runaway because its on-resistance rises with temperature. [8-18B6]

Scene ideas: waveform: fixed-frequency PWM square wave whose pulses widen as the load impedance drops; comparison table: switching regulator versus linear regulator efficiency; equipment card: power MOSFET with callouts for high input impedance, gate punch-through, on state like a pure resistor and off state like a mechanical relay.

## Lesson 8-C: Receiving Systems

Element 8 · Subelement C · Key topics 19–28

**Goal:** Trace a radar echo through the receiver, from the crystal mixer and klystron local oscillator through the AFC loop, IF strip, detector and video amplifier, and explain sea clutter control, receiver power supplies and interference well enough to answer every Subelement C question.

**Visual style:** One block diagram built from Figure 8A1 is the recurring motif: it is drawn early and reused, with each block (mixer, klystron, discriminator, attenuator) lighting up as its topic comes up. Equipment cards show Figures 8C9, 8C10 and 8C11, formula reveals carry the decibel, duty cycle and trip point calculations, and a radar PPI shows sea clutter, STC and MTI at work.

**Narration style:** A friendly, plain-spoken instructor with short sentences, slowing down for each calculation. Spell out each acronym the first time, such as IF (intermediate frequency), AFC (automatic frequency control), STC (sensitivity time control), MTI (moving target indication) and TR (transmit-receive), and say units and symbols in words: megahertz, gigahertz, microvolts, decibels, microseconds, kilohms, "V sub out". Stress the tested numbers (30 or 60 megahertz, 120 decibels, 20 to 40 decibels, 89.1 volts, plus or minus 1.285 volts), and where a fact is marked "for the exam", say plainly that this is the answer the exam expects.

### Key topic 19: Receiving Systems

Facts to teach:

- The front end of a radar receiver does not provide any amplification to the radar signal: there is no RF (radio frequency) amplifier at all, let alone an RF power amplifier, and the weak echo passes from the duplexer straight to the crystal mixer. [8-19C1, 8-19C6]
- The crystal mixer has a conversion loss rather than a gain, so nearly all amplification happens after conversion in the IF (intermediate frequency) amplifier, whose bandwidth is switched wide or narrow with range rather than always being narrow. [8-19C1, 8-19C6]
- Logarithmic receivers can't be saturated: their output rises with the logarithm of the input, so even very strong echoes still give distinct, unclipped responses, which suits radar well. [8-19C2]
- Radar receivers are similar to microwave receivers, working at X-band near 9.4 GHz or S-band near 3 GHz with waveguide, a crystal mixer and a microwave local oscillator, quite unlike FM, HF or TV receivers. [8-19C3]
- The video amplifier is the section of the receiving system that sends signals to the display system; the IF amplifier feeds the detector, and a radar receiver has no audio stage. [8-19C4]
- The main difference between an analog and a digital receiver is the digital receiver's decision circuitry, which compares the signal against a threshold to distinguish between "on" and "off" signal levels (1 or 0). [8-19C5]

Scene ideas: block diagram: duplexer to crystal mixer (with local oscillator) to IF amplifier to second detector to video amplifier to display, with a crossed-out "RF amplifier" box at the front end; comparison table: linear receiver that clips on strong echoes versus logarithmic receiver that can't be saturated; comparison table: analog receiver passing a varying level versus digital receiver with decision circuitry giving on or off.

### Key topic 20: Mixers

Facts to teach:

- An RF mixer in a radar converts a low-level signal to a different frequency: it combines the weak echo with the local oscillator signal to make a lower IF, typically 30 or 60 MHz, that is easy to amplify. [8-20C3]
- In the receive mode, frequency conversion is generally done by a crystal diode, whose nonlinear conduction mixes the echo with the local oscillator; pentagrid converter tubes can't work at microwave frequencies, and waveguide sections and ferrite devices don't mix signals. [8-20C2]
- For the exam, the radar mixer uses a silicon crystal or PIN diode, a semiconductor diode device rather than a tube or transistor stage (in practice PIN diodes serve as receiver limiters and switches; see the flag note). [8-20C4]
- For the exam, the radar mixer uses PIN diodes and silicon crystals together, so an answer naming only one of the two types is incomplete (see the flag note). [8-20C6]
- In Figure 8C9, 4095 MHz RF echoes and the 4155 MHz local oscillator CW (continuous wave) signal meet at the crystal diode, and the tuned transformer passes their 60 MHz difference: 4155 − 4095 = 60 MHz. [8-20C1]
- When no echoes are being received, the circuit in Figure 8C9 develops no output: the diode only rectifies the steady local oscillator to DC, and nothing at 60 MHz exists for the tuned transformer to pass. [8-20C1]
- In Figure 8A1, block 49 is the crystal detector (the mixer) of the AFC (automatic frequency control) section: it mixes a magnetron sample arriving through block 47 with the klystron signal from block 48. [8-20C5]

Scene ideas: equipment card: Figure 8C9 with callouts for the 4095 MHz echoes, the 4155 MHz local oscillator CW, the crystal diode and the 60 MHz tuned transformer, then the echoes removed and the output going blank; formula reveal: 4155 − 4095 = 60 MHz; block diagram: Figure 8A1 with block 49 highlighted between block 47 and the AFC IF amplifier.

### Key topic 21: Local Oscillators

Facts to teach:

- In a radar unit, the local oscillator is a klystron, a reflex klystron that generates low-power microwave energy and can be tuned electronically for AFC; a hydrogen thyratron is a switch in the modulator, not an oscillator. [8-21C2]
- Both a klystron and a Gunn diode could be used as the local oscillator in a radar receiver: the reflex klystron in older sets and the Gunn diode oscillator in solid-state sets. [8-21C4]
- The klystron's frequency is varied in two ways: small changes by adjusting the repeller voltage, which changes the electrons' transit time, and large changes by adjusting the size of the resonant cavity. [8-21C6]
- The klystron local oscillator is constantly kept on frequency by the Automatic Frequency Control circuit, which follows magnetron or klystron drift automatically instead of needing constant manual adjustments. [8-21C5]
- The error voltage from the discriminator is applied to the repeller (reflector) of the klystron, because changing the repeller voltage shifts the klystron's frequency electronically. [8-21C1]
- In Figure 8A1, block 48 is the klystron (local oscillator): it feeds both the main crystal detector and the AFC mixer (block 49), and it receives the correction voltage from the AFC output circuit. [8-21C3]

Scene ideas: equipment card: reflex klystron with callouts for the repeller (small, electronic tuning) and the resonant cavity (large, mechanical tuning); block diagram: Figure 8A1 with block 48 highlighted, its outputs to the crystal detector and block 49, and the AFC feedback arrow returning to it; comparison table: klystron (older sets) versus Gunn diode (solid-state sets) as the local oscillator.

### Key topic 22: Amplifiers

Facts to teach:

- The usual intermediate frequency of a shipboard radar unit is 30 or 60 MHz, high enough to pass the several-megahertz bandwidth that short pulses need; 455 kHz and 10.7 MHz are AM and FM broadcast receiver IFs. [8-22C2]
- The IF amplifier bandwidth is wide for short ranges and narrow for long ranges: short pulses need a wide bandwidth to keep their sharp edges, while long pulses need less, and the narrower bandwidth cuts noise for weak distant echoes. [8-22C3]
- A logarithmic IF amplifier is preferable to a linear one because it has a greater dynamic range, handling very weak and very strong echoes without saturating; its gain and noise figure are not inherently better. [8-22C4]
- Voltage gain in decibels is 20 times the log of the voltage ratio: G = 20 log(V<sub>out</sub> / V<sub>in</sub>). [8-22C5]
- Worked example: IF amplifiers taking a 2 microvolt input to a 2 volt output have a gain of G = 20 log(2 V / 2 µV) = 20 log(10⁶) = 20 × 6 = 120 dB. [8-22C5]
- In a radar receiver, AGC (automatic gain control) and IAGC (instantaneous automatic gain control) can vary between 20 and 40 dB, enough to keep strong echoes and clutter from saturating the IF strip. [8-22C6]
- For the exam, overcoupling in a radar receiver causes oscillations, because excess coupling between the tuned stages of a high-gain IF strip feeds energy back from output to input (in practice overcoupling mainly broadens the response; see the flag note). [8-22C1]

Scene ideas: formula reveal: G = 20 log(V<sub>out</sub> / V<sub>in</sub>), worked with 2 µV in and 2 V out to a boxed 120 dB; frequency band strip: 455 kHz, 10.7 MHz, 30 MHz and 60 MHz, with the radar IFs of 30 or 60 MHz highlighted; comparison table: short range (short pulse, wide IF bandwidth) versus long range (long pulse, narrow IF bandwidth).

### Key topic 23: Detectors - Video Amplifiers

Facts to teach:

- The video amplifier is located between the IF amplifier and the display system: the path runs mixer, IF amplifier, second detector, video amplifier, display, and the video amplifier handles detected pulses, not 60 to 120 MHz signals. [8-23C1]
- The video (second) detector in a pulse radar most likely uses a diode detector, because echoes are amplitude-modulated bursts of IF energy; discriminators and ratio detectors are FM detectors. [8-23C6]
- Video amplifiers in pulse radar receivers must have a broad bandwidth because weak pulses must be amplified: the detected echo pulses are weak and very short, and a narrow amplifier would smear and shrink them. [8-23C2]
- To keep stage capacitances from distorting the video pulses, an inductor is connected in series with the input capacitance and an inductor in parallel with the output capacitance (series and shunt peaking). [8-23C3]
- Range markers and the brilliance and contrast settings are all usual inputs to the video amplifier. [8-23C5]
- The resolver is not usually an input to the video amplifier: it carries antenna bearing information to the sweep and deflection circuits. [8-23C4]

Scene ideas: block diagram: IF amplifier to diode (second) detector to video amplifier to display, with range, brilliance and contrast feeding into the video amplifier and the resolver routed to the sweep circuits instead; equipment card: video amplifier stage with callouts for the series peaking coil at the input capacitance and the shunt peaking coil at the output capacitance; waveform: pulse train amplified by a broad-bandwidth amplifier with sharp edges kept.

### Key topic 24: Automatic Frequency Control - AFC

Facts to teach:

- The AFC system is used to control the frequency of the klystron, not the magnetron: the magnetron drifts, and the klystron is retuned to track it. [8-24C1]
- An AFC system keeps the receiver tuned to the transmitted signal by varying the frequency of the local oscillator, holding it one IF away from the magnetron. [8-24C4]
- The circuit that develops the AFC voltage is the discriminator, whose DC output depends in polarity and size on how far the AFC IF is from its center frequency. [8-24C2]
- In the AFC system, the discriminator compares the frequencies of the magnetron and klystron, checking whether their difference equals the nominal IF. [8-24C3]
- In Figure 8A1, block 50 is the discriminator, sitting between the AFC IF amplifier and the AFC output circuit. [8-24C6]
- Worked example: a transmitter on 3.0 GHz with a reflex klystron local oscillator on 3.060 GHz gives IF = 3.060 GHz − 3.000 GHz = 60 MHz; if the magnetron drifts higher, the IF shrinks, so the klystron must move higher too. [8-24C5]
- To move the klystron higher, the AFC system makes the klystron repeller plate more negative, which returns the electrons sooner and raises its frequency. [8-24C5]

Scene ideas: block diagram: Figure 8A1 AFC loop, magnetron sample through block 47 to mixer block 49, AFC IF amplifier, discriminator block 50, output circuit, and back to klystron block 48; frequency band strip: magnetron at 3.0 GHz and klystron at 3.060 GHz, 60 MHz apart, with the magnetron drifting up and the klystron following; formula reveal: IF = 3.060 GHz − 3.000 GHz = 60 MHz, then "magnetron drifts higher, repeller more negative" boxed.

### Key topic 25: Sea Clutter - STC

Facts to teach:

- Sea return is the reflection of radar signals from nearby waves; it shows as clutter around the center of the display, strongest at short range and in rough seas. [8-25C3]
- The STC (sensitivity time control) circuit is used to decrease sea return on a radar receiver, reducing the sea clutter around the center of the PPI (plan position indicator) scope. [8-25C1, 8-25C2]
- STC decreases the sensitivity of the receiver for close objects: it cuts receiver gain right after each transmitted pulse and lets it rise with time, so weaker distant echoes still get full gain. [8-25C6, 8-25C1]
- STC acts on the receiver, never on the transmitter, and it does not change bearing resolution. [8-25C6, 8-25C2]
- The STC circuit controls the suppression of sea clutter, and the operator sets it with the front-panel sea clutter control. [8-25C5]
- If sea clutter cannot be effectively reduced with the front panel controls, suspect a faulty STC circuit; the FTC (fast time constant) circuit deals with rain clutter, not sea return. [8-25C4]

Scene ideas: radar PPI: heavy sea clutter around the center, then STC turned up so the clutter fades while a distant echo stays bright; comparison table: close objects (gain reduced) versus distant objects (full gain); comparison table: STC for sea clutter versus FTC for rain clutter.

### Key topic 26: Power Supplies

Facts to teach:

- Before making "power-on" measurements on a switching power supply, know its design: if it does not use a line isolation transformer, its circuit common can sit at line potential, and grounded test equipment may destroy the supply. [8-26C1]
- In a constant frequency switching regulator, the output voltage is the input voltage times the duty cycle, where duty cycle is the "ON" time divided by the period T = 1 / switching frequency. [8-26C2]
- Worked example: with 165 volts DC in, a 20 kHz switching frequency and a 27 microsecond "ON" time, T = 1 / 20 kHz = 50 µs; duty cycle = 27 µs / 50 µs = 0.54; V<sub>out</sub> = 0.54 × 165 V = 89.1 V DC, and the 1 ampere load current does not enter the calculation. [8-26C2]
- In Figure 8C10, measuring from the junction of CR6, CR7 and L1 to ground shows pulsating DC much higher than line frequency, because Q1 drives T1 at the high switching rate and this point comes before the L1 and C6 filter. [8-26C3]
- When the gate voltage of a power MOSFET in a modern radar's switching supply changes from "low" to "high", it changes by greater than 2 volts, since the gate threshold is roughly 2 to 4 V and about 10 V is needed to switch fully on. [8-26C5]
- Figure 8C11 is an inverting Schmitt trigger comparator: the input goes to the inverting input, and the 5 kΩ / 2 kΩ divider feeds part of the output back to the noninverting input. [8-26C6]
- With a nominal output high of 4.5 volts, the trip points of Figure 8C11 are +1.285 volts upper and −1.285 volts lower: V<sub>trip</sub> = ±4.5 × 2k / (5k + 2k) = ±1.2857 V ≈ ±1.285 V. [8-26C6]
- With a sinusoid at the input of Figure 8C11, the leading edge of the output waveform occurs 180 degrees after the positive zero crossing of the input, when the falling input passes the lower trip point; it does not trail a zero crossing or a peak by 45 degrees. [8-26C4]

Scene ideas: formula reveal: T = 1 / 20 kHz = 50 µs, duty cycle 0.54, V<sub>out</sub> = 0.54 × 165 V boxed at 89.1 V DC, then V<sub>trip</sub> = ±4.5 × 2k / (5k + 2k) boxed at ±1.285 V; equipment card: Figure 8C10 with callouts for Q1, T1, CR6 and CR7, L1 and C6, and the probe at the CR6, CR7 and L1 junction; waveform: sine input with the comparator's square output rising 180 degrees after the positive zero crossing.

### Key topic 27: Interference Issues

Facts to teach:

- The primary cause of noise in a radar receiver is thermal noise caused by the receiver's own components, especially the mixer and first IF stages. [8-27C2]
- One of the best methods of reducing noise in a radar receiver is isolation: shielding, physical separation and decoupling of power and signal leads keep noise from the modulator, transmitter and other equipment out of the receiver. [8-27C1]
- Noise can appear on the LCD (liquid crystal display) as erratic video and sharp changes in intensity, not as fixed black spots or changes in bearings. [8-27C3]
- Noise can mask small targets, whose weak echoes are lost in it; large targets return strong echoes that stand well above the noise. [8-27C6]
- Radar interference on a communications receiver appears as a steady tone, because the radar pulses at a fixed pulse repetition frequency (PRF), unlike random static or hiss. [8-27C4]
- In a radar receiver, the most common types of interference are weather and sea return, countered by the FTC rain control and the STC sea control. [8-27C5]

Scene ideas: radar PPI: noise speckle hiding a small target while a large target stays clear; waveform: pulse train at a fixed PRF, heard as a steady tone; key-fact list: thermal noise is the main cause, isolation reduces it, weather and sea return are the most common interference.

### Key topic 28: Miscellaneous

Facts to teach:

- The purpose of the discriminator circuit in a radar set is to generate a corrective voltage for controlling the frequency of the klystron local oscillator; it does not separate targets or demodulate an FM signal. [8-28C1]
- An RF attenuator is used between the magnetron and the AFC section of the receiver (block 47 in Figure 8A1), cutting the magnetron sample to a level the crystal can safely handle. [8-28C3]
- An ion discharge TR (transmit-receive) cell protects the receiver mixer during the transmit pulse: it ionizes and shorts the receiver path during the pulse, then deionizes to pass the weak echoes. [8-28C5]
- The MTI (moving target indication) circuit is a filter which blocks out stationary targets, allowing only moving targets to be detected: it cancels echoes that are unchanged from pulse to pulse. [8-28C2]
- When the receiver employs an MTI circuit, only moving targets will be displayed, because their echoes change from pulse to pulse through Doppler shift while fixed objects and ground clutter cancel. [8-28C6]
- The condition called "glint", a shifting of clutter with each radar pulse, can be caused by an improperly functioning MTI filter that no longer cancels the clutter identically from pulse to pulse. [8-28C4]

Scene ideas: block diagram: Figure 8A1 with block 47 highlighted as the RF attenuator between the magnetron and AFC mixer block 49; radar PPI: MTI switched on, fixed echoes vanishing while moving targets remain, then a faulty MTI filter making clutter shift each pulse (glint); equipment card: TR cell with callouts for "ionizes during transmit pulse" and "passes echoes after the pulse".

## Lesson 8-D: Display & Control Systems

Element 8 · Subelement D · Key topics 29–38

**Goal:** Explain how a radar display builds its picture, from CRT and LCD screens, video and sweep circuits and the synchronizer to range rings, the VRM, the EBL, display memory, ARPA and the display power supply, and work the range marker calculations, well enough to answer every Subelement D question.

**Visual style:** A radar PPI is the recurring motif, used for range rings, the VRM, the EBL, the heading flash, north-up presentation and ARPA vectors. Block diagrams carry the synchronizer, video, sweep and power supply chains, formula reveals carry the 12.34 microseconds per nautical mile range marker calculations, and comparison tables set side by side the presentations, the memory correlation and the power supply outputs.

**Narration style:** A friendly, plain-spoken instructor with short sentences and a steady pace that slows for each calculation. Spell out each acronym the first time, such as CRT (cathode ray tube), LCD (liquid crystal display), VRM (variable range marker), EBL (electronic bearing line), DRAM (dynamic random access memory), ARPA (automatic radar plotting aid) and CPA (closest point of approach), and say units and symbols in words: kilohertz, kilovolts, microseconds, nautical miles, degrees, "plus or minus 12 volts". Stress the tested numbers (12.34 microseconds per nautical mile, 3, 4 and 8, 322 kilohertz, 4,096 segments, 2 memory cells, 18 kilohertz, 17 kilovolts), and where a fact is marked "for the exam", say plainly that this is the answer the exam expects.

### Key topic 29: Displays

Facts to teach:

- Modern liquid crystal displays (LCDs) have a pixel count greater than 200 pixels per inch, with phones and tablets commonly at 300 pixels per inch or more. [8-29D1]
- LCD patterns are formed when current passes through the crystals, causing them to align and change how each cell passes polarized light, so selected cells darken or lighten. [8-29D4]
- Voltages used in CRT (cathode ray tube) anode circuits are in the 10-50 kV range, about 17 kV in many radar displays, to give the beam enough energy for a bright trace. [8-29D2]
- The aquadag coating, a conductive graphite coating inside the CRT bulb connected to the high-voltage anode, does all three jobs: it acts as a second anode, protects the electrons from strong electric fields, and attracts secondary emissions from the CRT screen. [8-29D3]
- In a raster-type display, the electron beam is scanned horizontally and vertically across the CRT face, line by line like a TV, not in a rotating pattern like a conventional PPI (plan position indicator). [8-29D5]
- Raster scanning in a radar is controlled by clock pulses and requires an address bus, which selects the video memory location read for each pixel; a radar raster display is not simply a TV receiver, and its frame rate is not fixed at 30 per second. [8-29D6]

Scene ideas: equipment card: CRT with callouts for the 10-50 kV anode and the aquadag coating (second anode, shield against strong fields, collector of secondary emissions); comparison table: raster scan (horizontal and vertical lines, clock pulses, address bus) versus conventional PPI (rotating radial sweep); key-fact list: LCD greater than 200 pixels per inch, crystals align when current passes.

### Key topic 30: Video Amplifiers and Sweep Circuits

Facts to teach:

- The usual input signals to the video amplifier are low-level video, fixed range rings and variable range rings, all combined into one composite signal. [8-30D1]
- The resolver signal would not normally be an input to the video amplifier; it supplies antenna bearing information to the sweep and deflection circuits. [8-30D2]
- The main purpose of the video amplifier is to provide composite video to the cathode of the CRT, where it varies beam intensity so targets show as bright spots. [8-30D6]
- The main purpose of the sweep generator is to provide the drive signal to the sweep amplifier, a sawtooth waveform started by the synchronizer. [8-30D5]
- The purpose of the sweep amplifier is to drive the CRT deflection coils, not the resolver coils or the video amplifier. [8-30D3]
- The sweep amplifier drives 2 deflection coils, one for X (horizontal) and one for Y (vertical) deflection; sweep currents weighted by the sine and cosine of antenna bearing make the trace rotate with the antenna. [8-30D4]

Scene ideas: block diagram: low-level video, fixed range rings and variable range rings into the video amplifier and on to the CRT cathode, with the resolver routed to the sweep circuits; block diagram: synchronizer to sweep generator to sweep amplifier to 2 deflection coils, X and Y; waveform: sawtooth sweep drive.

### Key topic 31: Timing Circuits

Facts to teach:

- Timing circuits develop synchronizing pulses for the transmitter system, firing the modulator at the pulse repetition frequency (PRF) and starting the display sweep at the same instant. [8-31D1]
- The circuit that develops timing signals is called the synchronizer (or timer); the pulse forming network only shapes the modulator's high-voltage pulse. [8-31D2]
- The synchronizer primarily affects the modulator, which it triggers to fire the magnetron at the PRF. [8-31D4]
- The output from the synchronizer usually consists of a pulse or square wave, because its job is to mark exact instants for the modulator and sweep to start. [8-31D5]
- The sweep drive is initiated by the synchronizer, whose trigger starts the sweep generator as the transmitter fires so the sweep begins at zero range; the sweep amplifier only amplifies it. [8-31D6]
- The resolver output is not affected by the timing circuit, because it follows the antenna's rotation; the timing circuit does set the PRF, the modulation and the sweep drive. [8-31D3]

Scene ideas: block diagram: synchronizer sending trigger pulses to the modulator and magnetron and to the sweep generator at the same instant; waveform: pulse train of trigger pulses at the PRF; comparison table: set by the timing circuit (PRF, modulation, sweep drive) versus not affected (resolver output).

### Key topic 32: Fixed Range Markers

Facts to teach:

- Range markers are determined by the timer, which produces marker pulses at fixed time intervals after each transmitted pulse, each interval matching the ring spacing; the CRT only displays them. [8-32D2]
- A blocking oscillator could be used to provide the very narrow, steep-sided, fast-rising pulses that accurate range markers on the CRT need. [8-32D1]
- Element 8 uses a radar range time of 12.34 µs per nautical mile: the oscillator period is T = 1 / f, and the distance between markers in nautical miles is T ÷ 12.34 µs. [8-32D3, 8-32D5]
- Worked example: a gated LC oscillator at 27 kHz, with each cycle made into a range mark, gives T = 1 / 27 kHz = 37.04 µs; range = 37.04 µs ÷ 12.34 µs per nautical mile ≈ 3.0, so 3 nautical miles between markers. [8-32D3]
- Worked example: a controlling oscillator at 20 kHz gives T = 1 / 20 kHz = 50 µs; range = 50 µs ÷ 12.34 µs per nautical mile ≈ 4.05, so 4 nautical miles between markers. [8-32D5]
- To find the marker oscillator frequency, multiply the ring spacing by 12.34 µs to get T, then f = 1 / T: for rings every 10 nautical miles, T = 10 × 12.34 µs = 123.4 µs and f = 1 / 123.4 µs ≈ 8.1 kHz, so 8 kHz. [8-32D4]
- For the exam, rings every 0.25 nautical miles need a 322 kHz marker oscillator: T = 0.25 × 12.34 µs = 3.085 µs, which rounds to 3.1 µs, and f = 1 / 3.1 µs ≈ 322 kHz. [8-32D6]

Scene ideas: formula reveal: T = 1 / f, then range = T ÷ 12.34 µs, worked for 27 kHz (boxed 3 nautical miles) and 20 kHz (boxed 4 nautical miles); formula reveal: T = spacing × 12.34 µs, then f = 1 / T, worked for 10 nautical miles (boxed 8 kHz) and 0.25 nautical miles (boxed 322 kHz); radar PPI: fixed range rings appearing at 3 nautical mile spacing.

### Key topic 33: Variable Range Markers

Facts to teach:

- The VRM (variable range marker) system develops a single adjustable range ring, generated separately from the fixed range marker oscillator. [8-33D6]
- The purpose of the VRM is to provide an accurate means of determining the range of a moving target: the operator moves the ring out until it touches the echo and reads the range, readjusting as the range changes. [8-33D2]
- The VRM signal is normally fed to the input of the video amplifier, where it is mixed with the echo video so it shows as a ring like the fixed range rings. [8-33D1]
- The panel control for the VRM is normally a variable resistor (potentiometer), which sets a DC voltage that controls the marker's delay after the transmit pulse. [8-33D4]
- An important component of the VRM system is the shift register, which steps clock pulses after each transmit trigger to produce the marker after a precisely set delay. [8-33D5]
- The VRM is usually adjusted for accuracy by aligning its minimum and maximum ranges with the matching fixed range rings, not with a frequency counter. [8-33D3, 8-33D6]

Scene ideas: radar PPI: VRM ring expanding until it touches a moving target, with its range readout; block diagram: VRM potentiometer to shift register to video amplifier; radar PPI: VRM set to minimum and then maximum range, lining up with the matching fixed rings.

### Key topic 34: EBL, Azimuth and True Bearing

Facts to teach:

- The EBL (Electronic Bearing Line) is a line from your own vessel to a specific target, and its purpose is to measure the bearing of that target. [8-34D1, 8-34D2]
- The EBL does not show own heading (that is the heading marker), true north, or a target's distance (that is measured with the VRM). [8-34D1, 8-34D2]
- Gyro signals are required to indicate azimuth, because they give the heading reference to true north; the resolver alone reports only the antenna angle relative to the bow. [8-34D3]
- Bearing information from the gyro is used to provide the vessel's own heading, which positions the heading flash and stabilizes the picture. [8-34D4]
- In a true bearing presentation, North is at the top of the display and the ship's heading flasher indicates the vessel's course, so target bearings read directly as true bearings. [8-34D5, 8-34D6]
- A display with the bow always pointing up, with the heading flasher at the top of the screen, is the head-up (relative) presentation, not true bearing. [8-34D5, 8-34D6]

Scene ideas: radar PPI: EBL rotated from own ship onto a target, with the bearing readout; comparison table: true bearing (north-up, heading flasher shows course) versus head-up (bow always up, relative bearings); radar PPI: north-up picture with the gyro feeding own heading to the heading flasher.

### Key topic 35: Memory Systems

Facts to teach:

- In a digitized radar, the 360 degree sweep is divided into 4,096 digitized segments (2¹², a 12-bit azimuth count), each 360° / 4096 ≈ 0.088° wide. [8-35D1]
- The term DRAM stands for dynamic random access memory; it is called dynamic because its bits are charges on tiny capacitors that leak away. [8-35D3]
- A memory with a "REFRESH" cycle is DRAM, which must be refreshed periodically; SRAM (static RAM) holds data in flip-flops without refresh, and ROM (read-only memory) and PROM (programmable ROM) are nonvolatile. [8-35D2]
- The primary purpose of display system memory is to eliminate fluctuating targets such as sea return, while steady targets remain. [8-35D6]
- Dual memory reduces sea clutter because successive sweeps are digitized and compared, and only signals appearing in both sweeps are displayed; random clutter changes from sweep to sweep. [8-35D4]
- A target return must appear in 2 sequential memory cells, from successive sweeps, before the target is displayed. [8-35D5]

Scene ideas: formula reveal: 360° / 4096 ≈ 0.088° per segment; comparison table: sweep 1 and sweep 2 memory cells, with a target present in both shown and clutter present in only one dropped; key-fact list: DRAM is dynamic random access memory and needs refresh.

### Key topic 36: ARPA - CAS

Facts to teach:

- ARPA/CAS (automatic radar plotting aid used as a collision avoidance system) refers to the device which acquires and tracks targets displayed on the radar indicator, computing their course, speed, closest point of approach (CPA) and time to CPA (TCPA); it does not steer the ship. [8-36D2]
- CPA, the closest point of approach, is the closest point a ship or target will approach your own ship if both keep their present courses and speeds; TCPA is the time remaining until that point. [8-36D6]
- A vector is a line on the display from a target's position, with its course shown by the line's direction and its speed by the line's length. [8-36D4]
- The ARPA "Trial Mode" allows the results of proposed maneuvers to be assessed, showing predicted CPA and TCPA before the ship actually maneuvers. [8-36D5]
- Inputs to a collision avoidance computer include own ship's position from a navigation satellite receiver, gyrocompass heading and Doppler log speed; wind velocity from an anemometer is not an input. [8-36D3]
- If the ARPA's own-speed indication can be set manually but does not change with the vessel's speed, a "LOG OUT" indication points to the related speed log failure; "GYRO OUT" concerns heading. [8-36D1]

Scene ideas: radar PPI: tracked targets with vectors whose direction shows course and length shows speed, plus CPA and TCPA readouts; comparison table: collision avoidance inputs (satellite position, gyro heading, Doppler log speed) versus not an input (anemometer wind velocity); radar PPI: trial maneuver showing new predicted CPA values for a proposed course change.

### Key topic 37: Display System Power Supplies

Facts to teach:

- The display power supply provides 5 volts DC for logic circuits and ±12 volts DC for analog and sweep circuits; pulse forming network voltage comes from the transmitter's modulator supply, not the display supply. [8-37D1]
- The display power supply also provides 17 kV DC for the CRT HV (high voltage) anode, so 5 volts DC, ±12 volts DC and 17 kV DC are all its outputs. [8-37D2]
- The chopper acts as an electronic switch between the raw DC output and the inverter, turning the raw DC on and off at high speed. [8-37D3]
- The inverter produces the pulsed DC input voltage to the power transformer, since a transformer cannot pass steady DC; the secondary outputs are then rectified, filtered and regulated. [8-37D4]
- A common switching frequency for a display system power supply is 18 kHz; 120 Hz is the ripple frequency of rectified 60 Hz line power, not a switching rate. [8-37D5]
- A tripler circuit is used in the HV supply for the CRT anode, multiplying the pulsed transformer output to the very high DC the anode needs. [8-37D6]

Scene ideas: block diagram: raw DC to chopper to inverter to power transformer, then rectifiers to 5 volts DC and ±12 volts DC and a tripler to 17 kV DC; comparison table: output and its use (5 V DC for logic, ±12 V DC for analog and sweep, 17 kV DC for the CRT anode); key-fact list: switching frequency 18 kHz.

### Key topic 38: Miscellaneous

Facts to teach:

- The heading flash, a momentary intensification of the sweep line on the PPI, informs the operator of the dead-ahead position on the PPI scope each time the antenna passes the bow. [8-38D1]
- The major advantage of digitally processing a radar signal is enhancement of weak target returns: successive sweeps are stored and integrated, so repeating weak echoes are reinforced while random noise averages out. [8-38D2]
- So that a practical filter can remove undesired components from an analog-to-digital converter's output, the sampling frequency should be greater than two times the highest component of the sampled frequency; exactly two times would need an ideal brick-wall filter. [8-38D3]
- Bearing resolution is the ability to distinguish two adjacent targets of equal distance, and it depends mainly on horizontal beamwidth; separating targets at different distances is range resolution. [8-38D4]
- The output of an RC integrator driven by a square wave with a period much less than one time constant is a triangle wave, because the capacitor charges only along the nearly straight start of its curve. [8-38D5]
- For the exam, stationary objects such as trees, buildings and bridges are eliminated from the PPI by using a discriminator as a second detector, which exposes the phase shift of moving targets so the steady returns of fixed objects can be canceled (in practice this takes full MTI, moving target indication, processing; see the flag note). [8-38D6]

Scene ideas: radar PPI: heading flash brightening at the dead-ahead position, then two targets at equal range on close bearings shown as separate echoes; waveform: square wave in, small triangle wave out of the RC integrator; key-fact list: sample at greater than two times the highest frequency, digital processing enhances weak returns, discriminator as second detector for the exam.

## Lesson 8-E: Antenna Systems

Element 8 · Subelement E · Key topics 39–43

**Goal:** Identify the shipboard radar antenna, transmission line, waveguide and antenna-position hardware, and explain how each one carries the signal or the bearing data with low loss.

**Visual style:** Equipment cards of the slotted waveguide array, the rotary joint and a waveguide cross-section carry most of the lesson, with block diagrams for the antenna-to-display bearing path and a formula reveal for the line impedance calculation. The recurring motif is a copper rectangular waveguide with the microwave pulse drawn as a glowing band moving through it.

**Narration style:** Use a friendly, plain-spoken instructor with short sentences and a steady pace. Spell out each acronym the first time, such as VSWR (voltage standing wave ratio), PPI (plan position indicator), ARPA (automatic radar plotting aid) and RF (radio frequency), and say symbols in words: "Z sub O", "T E sub one zero", microhenries, picofarads, ohms, degrees. Stress the tested numbers (500 ohms, 72 ohms, two inches, 90 degrees), and where a fact is marked "for the exam", say plainly that this is the answer the exam expects.

### Key topic 39: Antenna Systems

Facts to teach:

- The typical shipboard radar antenna, and the most common type aboard commercial maritime vessels, is the slotted waveguide array: a length of waveguide with precisely spaced slots cut in one wall, each radiating a small share of the energy to form a narrow horizontal beam. [8-39E2, 8-39E6]
- The slotted waveguide array is compact and rugged and needs no separate feed horn; truncated parabolic reflectors were common on older sets but have largely been replaced by it. [8-39E6]
- An end-fed slotted waveguide array exhibits frequency scan: each slot's phase is set by the guide wavelength, so changing the transmitter frequency swings the beam direction slightly (also called beam squint). [8-39E1]
- The center of the transmitted lobe from a slotted waveguide array is several degrees offset from a line perpendicular to the antenna, because the slots are spaced slightly off a half guide wavelength so their small reflections don't add up to a high VSWR. [8-39E4]
- Good bearing resolution, the ability to separate two targets at the same range on slightly different bearings, largely depends on a narrow antenna beam in the horizontal plane; the vertical beam is kept fairly wide so targets stay in view as the ship rolls. [8-39E3]
- The longer the antenna, the narrower the horizontal beamwidth: beamwidth is inversely proportional to the antenna's length in wavelengths, roughly θ ≈ 70λ/L degrees, so doubling the length roughly halves the beamwidth. [8-39E5]

Scene ideas: equipment card: slotted waveguide array with callouts for the end feed, the row of slots, the narrow horizontal beam and the main lobe offset several degrees from the perpendicular; radar PPI: two targets at the same range merging under a wide horizontal beam and separating under a narrow one; comparison table: short antenna with a wide horizontal beam versus long antenna with a narrow horizontal beam.

### Key topic 40: Transmission Lines

Facts to teach:

- The VSWR of a microwave transmission line device might be measured using a dual directional coupler, a power meter and a network analyzer: the coupler samples forward and reflected power for the power meter, and the network analyzer measures the reflection directly, while a spectrum analyzer alone shows only frequencies and levels. [8-40E1]
- The impedance total of a transmission line is Z<sub>O</sub> = √L/C, the square root of the ratio of inductance L to capacitance C, with both converted to base units (henries and farads) first. [8-40E2]
- Worked example: a section of line with 250 microhenries of L and 1000 picofarads of C has Z<sub>O</sub> = √(250 × 10⁻⁶ H / 1 × 10⁻⁹ F) = √250,000 = 500 Ω. [8-40E2]
- Characteristic impedance depends only on the line's construction (conductor size, spacing and dielectric, which set L and C per unit length), not on its length, so a 72 ohm line cut at its center gives two halves that each still have a Z<sub>O</sub> of 72 Ω. [8-40E4]
- Standing waves on a transmission line indicate that some of the energy is not absorbed by the load, because part of the forward wave reflects from a load that doesn't match Z<sub>O</sub>; a line terminated in an impedance equal to Z<sub>O</sub> shows no standing waves. [8-40E5]
- If long transmission lines are not properly shielded and terminated, communications receiver interference might result, because the line radiates and picks up stray RF, letting radar pulses leak into nearby receivers. [8-40E3]
- Horizontal waveguide runs should be sloped slightly downwards at the elbow, with a small drain hole drilled in the elbow, so moisture that condenses inside drains out instead of pooling and causing loss, reflections and corrosion. [8-40E6]

Scene ideas: formula reveal: Z<sub>O</sub> = √L/C worked with 250 µH and 1000 pF to a boxed 500 Ω; waveform: forward and reflected waves on a mismatched line combining into a standing wave; block diagram: transmitter to dual directional coupler to load, with forward and reflected samples going to a power meter and a network analyzer.

### Key topic 41: Antenna to Display Interface

Facts to teach:

- The PPI sweep position must indicate the antenna position, and the two are frequently kept in synchronization by synchro systems: a synchro transmitter geared to the antenna drives a synchro receiver at the display so the sweep rotates in step. [8-41E1]
- On a basic synchro system the angular information is carried on the stator lines, the three leads S1, S2 and S3 wired between the two units, while both rotors share the same AC reference. [8-41E2]
- For the exam, an antenna synchro transmitter is keyed as having two rotor and three stator windings: AC excitation enters the rotor through two leads, R1 and R2, and three stator windings, S1, S2 and S3, spaced 120° apart, pick up the angle voltages (a standard synchro's rotor is one winding with those two leads; see the flag note, and choose two rotor and three stator windings on the exam). [8-41E5]
- Resolvers are the most common type of antenna position indicating device in modern radars, because their sine and cosine outputs convert easily to digital bearing data. [8-41E3]
- The basic resolver contains a rotor winding and two stator windings that are 90 degrees apart; as the rotor turns, the stator voltages vary as the sine and cosine of the antenna angle. [8-41E4]
- Radar antenna direction must be sent to the display in all ARPAs and radar systems, and any of 3-phase synchros, 2-phase resolvers or optical encoders can do it. [8-41E6]

Scene ideas: block diagram: antenna and synchro transmitter sending the angle over stator lines S1, S2 and S3 to a synchro receiver that turns the PPI sweep; equipment card: resolver with its rotor winding and two stator windings 90 degrees apart, outputs labeled sine and cosine; comparison table: 3-phase synchros, 2-phase resolvers and optical encoders, each with how it sends the antenna angle.

### Key topic 42: Waveguides-1

Facts to teach:

- Waveguides can be constructed from brass, aluminum or copper, all good conductors that keep wall resistance low. [8-42E1]
- Waveguide theory is based upon the movement of an electromagnetic field: energy travels as a wave reflecting between the walls, which confine and guide the field, not as current flow through conductive wires. [8-42E3]
- Waveguide theory is also based on the principles of skin effect and the use of ¼ wave stubs: a waveguide can be pictured as a two-wire line supported by countless quarter-wave shorted stubs that merge into a closed box, with skin effect keeping the currents on the inner walls. [8-42E5]
- At radar microwave frequencies a waveguide is used because it has lower transmission losses than other feedline types, even though it costs more and is harder to install. [8-42E4]
- The microwave transmission line built from a center conductor suspended between parallel conductive ground planes is called stripline; microstrip, by contrast, has only one ground plane. [8-42E2]
- The signal is removed from a waveguide or magnetron with a thin wire called a J-hook, a small loop bent into a J shape that links the magnetic field (not a T-hook). [8-42E6]

Scene ideas: equipment card: two-wire line growing quarter-wave shorted stubs that merge into a rectangular waveguide, with skin-effect currents on the inner walls; comparison table: coax, stripline, microstrip and waveguide, showing stripline's two ground planes and the waveguide's lower loss; equipment card: J-hook loop inside a magnetron cavity coupling the signal out.

### Key topic 43: Waveguides-2

Facts to teach:

- The rotary joint connects the stationary waveguide to the rotating antenna array, letting one half turn against the other while passing microwave energy with little loss or leakage. [8-43E1]
- Resistive losses in a waveguide are very small because the inner surface of the waveguide is large, spreading the current so the I²R loss stays small. [8-43E2]
- At microwave frequencies waveguides are used instead of conventional coaxial transmission lines because they have considerably less loss; coax loses energy in its small center conductor and its dielectric. [8-43E6]
- Any right-angle bend in an X-band waveguide must have a radius greater than two inches, following the rule of thumb of at least two wavelengths, so the bend doesn't cause reflections. [8-43E3]
- RF energy is inserted into or extracted from a waveguide with a voltage probe, a current loop or an aperture window; coupling capacitance is not used. [8-43E4]
- In a waveguide the magnetic field is strongest at the edges, where the wall currents flow, while in the dominant TE<sub>10</sub> mode the electric field peaks at the center. [8-43E5]

Scene ideas: block diagram: transceiver, fixed waveguide run, rotary joint and rotating slotted array, with the pulse passing through the joint; equipment card: waveguide cross-section with the electric field strongest at the center and the magnetic field strongest at the edges; key-fact list: coupling by voltage probe, current loop or aperture window but never coupling capacitance, and an X-band bend radius greater than two inches.

## Lesson 8-F: Installation, Maintenance & Repair

Element 8 · Subelement F · Key topics 44–50

**Goal:** Diagnose common radar faults from their display symptoms and meter readings, and apply correct installation, maintenance and safety practice.

**Visual style:** Radar PPI scenes show each fault symptom (a blank center, oval rings, a bent pier, a fixed bright ring, flashing pie sections, spokes, rings near center), and comparison tables pair each symptom with its suspect circuit. Figure 8F12 appears as an equipment card followed by a formula reveal for the summing amplifier, and safety rules use key-fact lists. The recurring motif is a "symptom, then suspect" tag that pops up beside each faulty display.

**Narration style:** Use a friendly, plain-spoken troubleshooting instructor with short sentences, slowing down on each symptom-and-suspect pair. Spell out each acronym the first time, such as PPI (plan position indicator), STC (sensitivity time control), TR (transmit-receive), AFC (automatic frequency control), IF (intermediate frequency), VSWR (voltage standing wave ratio), RAM (random access memory), ESD (electrostatic discharge) and CRT (cathode ray tube), and say symbols in words: "R sub F", "V sub out", kilohms, volts, milliamps. Stress the tested numbers: minus 1.5 volts, minus 3.75 volts, minus 4.75 volts, and the 50 K resistor replaced by a 25 K resistor.

### Key topic 44: Equipment Faults-1

Facts to teach:

- When there is no target video in the center of the display and the blank spot gets smaller as the range scale is increased, the operator front panel control to check is the Sensitivity Time Control (STC): set too high, it blanks all close-in video over a fixed distance, which looks smaller on longer range scales. [8-44F1]
- For that same symptom, the most likely defective area is the TR (TRL) cell: a worn TR cell recovers slowly after the transmit pulse and keeps the receiver blocked for a fixed time, so nothing appears within a fixed distance of center. [8-44F3]
- Oval range rings on the PPI point to a faulty sweep generation circuit, because the rings are circular only when the horizontal and vertical deflection sweeps have equal amplitude. [8-44F2]
- When a docked vessel's pier appears distorted near the center of the PPI, bending in a concave fashion, the waveguide compensation delay line needs adjusting; it makes the display start timing when the pulse actually leaves the antenna. [8-44F4]
- In a radar using digital video processing, a bright, wide ring at a fixed distance from center on all digital ranges, with the transmitter operating normally, points to the video storage RAM or shift register, where a stuck bit or faulty location repeats the same ring. [8-44F5]
- On a raster scan display, missing video in a rectangular block points to a memory area failure, since each block of video memory maps to an area of the screen. [8-44F6]

Scene ideas: radar PPI: a blank center spot that shrinks as the range scale is stepped up, tagged with the STC control and the TR cell; radar PPI: oval range rings, then a pier bending near center, then a bright fixed ring, then a missing rectangular block; comparison table: each symptom paired with its suspect circuit or control.

### Key topic 45: Equipment Faults-2

Facts to teach:

- Figure 8F12 is an inverting summing amplifier: point A feeds a 200 kΩ resistor, point B a 100 kΩ, point C a 50 kΩ and point D a 25 kΩ into the op amp's inverting input, with feedback resistor R<sub>F</sub> = 10 kΩ and the output at point E. [8-45F1, 8-45F4]
- Its output is V<sub>out</sub> = −R<sub>F</sub> × Σ(V/R): the feedback resistor times the sum of each input voltage divided by its resistor, with the sign inverted. [8-45F1, 8-45F4]
- In Figure 8F12, with 5 volts at points B and C and zero volts at points A and D, V<sub>out</sub> = −R<sub>F</sub>(5 V/100 kΩ + 5 V/50 kΩ) = −10 kΩ × (0.05 + 0.1) mA = −1.5 V at point E. [8-45F4]
- In Figure 8F12 with all inputs at 5 volts, point E should normally read −10 kΩ × (5/200k + 5/100k + 5/50k + 5/25k) = −10 kΩ × 0.375 mA = −3.75 V. [8-45F1]
- So a reading of −4.75 V at point E after a card swap means the 50 K resistor has been mistakenly replaced with a 25 K resistor, since the current sum becomes 0.025 + 0.05 + 0.2 + 0.2 = 0.475 mA, giving −4.75 V. [8-45F1]
- When the crystal in the AFC section is defective, it causes bright flashing pie sections on the PPI, because the AFC loses lock and hunts, swinging the receiver tuning in and out as the antenna rotates. [8-45F2]
- When the display has sectors of solid video (spoking), the first thing to check is interference from nearby ships, whose radars on a similar frequency are a frequent cause. [8-45F3]
- If the TR tube malfunctions, the receiver might be damaged, because high-power pulse energy reaches the crystal mixer and can burn it out. [8-45F5]
- If the indicated distance from your vessel to a lighthouse is in error, suspect the range ring oscillator, whose frequency sets the range ring spacing. [8-45F6]

Scene ideas: equipment card: Figure 8F12 with callouts for the four input resistors at points A to D, R<sub>F</sub> and point E; formula reveal: V<sub>out</sub> = −R<sub>F</sub> × Σ(V/R) worked line by line to −1.5 V, −3.75 V and −4.75 V; radar PPI: bright flashing pie sections from a bad AFC crystal beside interference spokes from a nearby ship.

### Key topic 46: Equipment Faults-3

Facts to teach:

- Silicon crystals are used in radar mixer and detector stages, and a functional crystal checked with an ohmmeter shows low resistance in one direction and high resistance in the opposite direction, because it is a diode. [8-46F1]
- If the crystal mixer becomes defective, replace the crystal and the TR tube (not the ATR tube or the klystron), because a faulty TR tube usually caused the failure and would burn out a new crystal the same way. [8-46F2]
- An increase in magnetron current that coincides with a decrease in power output, or simply a high magnetron current, indicates a weakening or defective external magnetic field: more electrons go straight to the anode instead of spiraling past the cavities. [8-46F3, 8-46F5]
- When the radar is not receiving small targets, the most likely causes are the magnetron, the IF amplifier, or receiver tuning, since anything that cuts transmitted power or receiver sensitivity loses weak echoes first. [8-46F4]
- Low or no mixer current could be caused by any of these: local oscillator frequency misadjustment, TR cell failure, or mixer diode degradation, since mixer current is local oscillator drive rectified by the mixer diode. [8-46F6]

Scene ideas: equipment card: ohmmeter on a mixer crystal reading low one way and high with the leads reversed; block diagram: antenna, TR tube, crystal mixer with local oscillator, then IF amplifier, marking where each fault weakens the signal or mixer current; key-fact list: high magnetron current means a weak external magnet, and a failed crystal is replaced together with the TR tube.

### Key topic 47: Equipment Faults-4

Facts to teach:

- If the magnetron is allowed to operate without its magnetic field in place, it will quickly destroy itself from excessive current flow, as electrons rush straight from cathode to anode with no oscillation. [8-47F1]
- An increase in the deflection on the magnetron current meter is likely caused by a decrease of the magnetic field strength; a lower duty cycle or a weaker modulator pulse would reduce the current, not increase it. [8-47F6]
- When targets on the radar display are not on the same bearing as their visual bearing, first suspect incorrect antenna position information, such as the synchro, resolver or encoder signals and the heading alignment. [8-47F2]
- Loss of distant targets during and immediately after wet weather indicates a leak in the waveguide or rotary joint, which lets in water that attenuates the signal until it dries out. [8-47F3]
- When a high VSWR shows at the magnetron output but the waveguide and rotary joint appear to work properly, suspect the waveguide array termination, the matched load at the end of the slotted array that absorbs the energy the slots don't radiate. [8-47F4]
- When two radars on one vessel show different ranges to the same target, check the sweep and timing circuits of both indicators for correct readings to find which one is wrong; averaging the two readings would just spread the error. [8-47F5]

Scene ideas: equipment card: magnetron with its magnet, electrons spiraling past the cavities, then heading straight to the anode as the magnet weakens and the current meter rises; radar PPI: radar bearing line and visual bearing line to the same target that don't agree; block diagram: magnetron, waveguide, rotary joint, slotted array and array termination, with energy reflecting back when the termination fails.

### Key topic 48: Maintenance

Facts to teach:

- Thick rust and corrosion on the surface of a parabolic dish cause a decrease in performance, especially for weak targets, because it reduces antenna gain on transmit and receive. [8-48F1]
- The echo box is used for testing and tuning the radar unit by providing artificial targets: a high-Q resonant cavity stores energy from the transmitted pulse and rings it back to the receiver. [8-48F2]
- To minimize signal loss, keep the interior surface of a waveguide as clean as possible, since skin effect puts the microwave current on that surface; paint or oil would add loss. [8-48F3]
- Water in the waveguide shows on the display as large circular rings near the center, caused by pulse energy reflected back into the receiver. [8-48F6]
- The oscilloscope is the most useful instrument for radar servicing, because it shows the shape, amplitude and timing of the pulses, video and sweep waveforms. [8-48F4]
- Always use a non-magnetic screwdriver when replacing the magnetron, because its strong permanent magnet can yank a steel tool, damaging the tube or injuring the hand, and magnetic tools can weaken the magnet. [8-48F5]

Scene ideas: equipment card: echo box beside the radar, with its ringing artificial target on the PPI; radar PPI: large circular rings near the center from water in the waveguide; key-fact list: keep the waveguide interior clean, service with an oscilloscope, and use a non-magnetic screwdriver on the magnetron.

### Key topic 49: Installation

Facts to teach:

- Coaxial cable is often used for S-band installations instead of waveguide because losses can be kept reasonable at S-band frequencies and the installation cost is lower, while S-band waveguide is large, heavy and costly. [8-49F1]
- Radar interference to a communications receiver is eliminated by properly grounding, bonding and shielding all units, which keeps the pulse energy contained. [8-49F2]
- Long horizontal runs of waveguide should be avoided to prevent accumulation of condensation: moisture can accumulate in the waveguide with nowhere to drain, absorbing RF energy and corroding the walls. [8-49F3, 8-49F4]
- Waveguides should be installed as straight as possible to reduce distortion, since every bend or twist can cause reflections. [8-49F5]
- The most important factor in locating the antenna is a location that is not shadowed by other structures, such as masts and funnels that create blind sectors; height, run length and maintenance access come second. [8-49F6]

Scene ideas: comparison table: coax versus waveguide for S-band, on loss and installation cost; equipment card: ship profile with the antenna sited clear of the mast and funnel, and a shadow sector where a structure blocks the beam; block diagram: straight, mostly vertical waveguide run from the transceiver to the antenna.

### Key topic 50: Safety

Facts to teach:

- ESD damage may cause immediate circuit failures, but may also cause failures much later, at times when the radar set is critically needed, and discharges too small to feel can do it. [8-50F1]
- Before removing, servicing or making measurements on any solid state circuit boards, make sure the proper work surfaces and ESD grounding straps are in place to prevent damage from electrostatic discharge. [8-50F6]
- Before testing a radar transmitter, make sure there are no explosives or flammable cargo being loaded, since radiated energy can fire electrically initiated explosives or ignite flammable vapors. [8-50F2]
- While making repairs or adjustments to radar units, discharge all high-voltage capacitors to ground, because they can hold lethal charges after power is removed. [8-50F3]
- While removing a CRT from its operating casing, wear gloves and goggles, because a cracked envelope can implode and throw glass. [8-50F4]
- If a CRT is dropped, it might implode, causing damage to workers and equipment. [8-50F5]

Scene ideas: key-fact list: before work, ESD straps and proper work surfaces, no explosives or flammable cargo being loaded, and all high-voltage capacitors discharged to ground; equipment card: CRT handled with gloves and goggles, with a callout that a dropped CRT can implode; timeline / interval badges: ESD damage now versus a failure much later when the radar is critically needed.

## Lesson 9-A: VHF-DSC Equipment & Operation

Element 9 · Subelement A · Key topics 1–10

**Goal:** The learner can state the marine VHF-DSC channels, tolerances, controls, FM receiver and transmitter principles, DSC signal parameters and antenna practice, and can diagnose common VHF receiver and transmitter faults from their symptoms and test readings.

**Visual style:** A recurring equipment card of a VHF-DSC transceiver front panel anchors the lesson, with callouts lighting up as each control or fault is discussed. Use frequency band strip for channels and DSC tones, formula reveal for every tolerance, SWR, modulation index, timing and antenna-length calculation, and block diagram for the receiver and transmitter signal chains, highlighting the suspect stage during the fault topics.

**Narration style:** A friendly, plain-spoken instructor using short sentences, spelling out each acronym the first time (digital selective calling, phase-locked loop, standing wave ratio, Maritime Mobile Service Identity, signal plus noise and distortion for SINAD). Say units and symbols in words (megahertz, kilohertz, parts per million, microvolts, decibels, "f sub m", "P sub r over P sub f") and stress the numbers the exam tests: channels 16, 70 and 13, 4.6 megahertz, 25 kilohertz, 10 parts per million, 1 and 25 watts, 5 kilohertz deviation, 1200 baud and 33 and a third milliseconds. For the fault questions, model the reasoning: say what still works, then what that rules out.

### Key topic 1: Frequency and Bandwidth

Facts to teach:

- Channel 16 (156.800 MHz) is the voice calling and distress channel, Channel 70 (156.525 MHz) is reserved for digital selective calling (DSC), and Channel 13 (156.650 MHz) is the bridge-to-bridge channel. [9-1A1]
- On a duplex channel the transmit and receive frequencies are 4.6 MHz apart: on Channel 26 ships transmit on 157.300 MHz and the coast station on 161.900 MHz, and 161.900 − 157.300 = 4.6 MHz. [9-1A2]
- Marine VHF channels are spaced 25 kHz apart, so Channel 70 at 156.525 MHz sits halfway between Channel 10 (156.500 MHz) and Channel 11 (156.550 MHz). [9-1A3]
- The allowed frequency tolerance for the DSC carrier frequencies is 10 ppm (parts per million), which at 156.525 MHz is 156.525 MHz × 10×10⁻⁶ ≈ 1565 Hz either way. [9-1A4]
- When checking with a frequency counter, subtract the counter's own accuracy from the 10 ppm limit, and a reading is certainly legal only if its offset fits inside what remains. [9-1A5, 9-1A6]
- With a 2 ppm counter the window is 10 − 2 = 8 ppm (156.800 MHz × 8×10⁻⁶ ≈ 1254 Hz and 156.525 MHz × 8×10⁻⁶ ≈ 1252 Hz), so readings of 156,798.758 kHz (1242 Hz low) and 156,526.243 kHz (1243 Hz high, printed in the pool as 156.526.243 kHz) are within legal tolerance. [9-1A5]
- With a 5 ppm counter the window is 10 − 5 = 5 ppm (156.875 MHz × 5×10⁻⁶ ≈ 784 Hz and 157.200 MHz × 5×10⁻⁶ = 786 Hz), so readings of 156,875.774 kHz (774 Hz high) and 157,199.321 kHz (679 Hz low, printed in the pool as 157.199.321 kHz) are within legal tolerance. [9-1A6]

Scene ideas: frequency band strip: Channel 16 at 156.800 MHz, Channel 13 at 156.650 MHz and Channel 70 at 156.525 MHz between Channels 10 and 11 on a 25 kHz raster; comparison table: duplex Channel 26, ship 157.300 MHz versus coast 161.900 MHz, separation 4.6 MHz; formula reveal: 10 ppm − 2 ppm = 8 ppm, 156.800 MHz × 8×10⁻⁶ ≈ 1254 Hz, then the 1242 Hz and 1243 Hz offsets boxed as legal.

### Key topic 2: Controls and Functions

Facts to teach:

- The USA-INT switch changes designated channels from duplex to simplex operation in U.S. waters, because some channels that are duplex under the international plan are used simplex in the U.S. [9-2A1]
- If the USA-INT control is left on INT in U.S. waters, your signals will be heard but other stations' replies will not be heard on certain channels, since the radio listens 4.6 MHz above the simplex frequency they reply on. [9-2A2]
- Dual Watch rapidly switches the radio's single receiver between two channels, usually Channel 16 and one other, and does not receive both at the same time. [9-2A3]
- For maximum sensitivity, set the squelch just below the point where the noise breaks through, advancing it only until background noise is just silenced, because turning it further blocks weak stations. [9-2A4]
- FCC rules permit VHF marine transmitter power levels of 1 W on Low Power and 25 W on High Power, with low power used for short-range calls such as harbor and bridge-to-bridge traffic. [9-2A5]
- R.I.T. (receiver incremental tuning) is not found on a VHF-DSC transceiver because it fine-tunes MF/HF single-sideband receivers, while Distress, Cancel and Squelch controls are standard on VHF-DSC sets. [9-2A6]

Scene ideas: equipment card: VHF-DSC front panel with callouts for the USA-INT switch, Dual Watch, Squelch, the 1 W / 25 W power switch, the covered Distress button and Cancel; frequency band strip: in INT mode the radio transmits on the ship frequency but listens 4.6 MHz higher, so a simplex reply is missed.

### Key topic 3: Receiver Technology

Facts to teach:

- The capture effect means an FM receiver rejects all but the strongest signal on a channel, because the limiter and detector lock onto the stronger signal and suppress the weaker one. [9-3A1]
- In an FM ratio detector, the ratio arm balance control bridge is adjusted for improved signal-to-noise, since equalizing the two diode arms maximizes AM noise rejection. [9-3A2]
- A properly adjusted limiter maintains a constant output amplitude with a varying input amplitude, stripping amplitude noise and fading before the detector. [9-3A3]
- SINAD is the sum of the signal, noise and distortion divided by the sum of the noise and distortion: SINAD = (signal + noise + distortion) ÷ (noise + distortion), usually in dB, with 12 dB SINAD the common reference for FM receiver sensitivity. [9-3A4]
- A normal VHF marine receiver reaches 10 dB of quieting with about 1 microvolt at the antenna input, and needing 5 or 10 µV means poor sensitivity. [9-3A5]
- Full quieting means the received signal is strong enough to completely quiet the receiver background noise, which describes signal strength, not a squelch setting. [9-3A6]

Scene ideas: block diagram: IF amplifier into limiter into ratio detector, with two signals entering and only the stronger leaving (capture effect); waveform: a noisy FM signal of varying amplitude going in and a constant-amplitude FM signal coming out of the limiter; formula reveal: SINAD = (signal + noise + distortion) ÷ (noise + distortion), with 12 dB SINAD boxed.

### Key topic 4: Receiver Faults-1

Facts to teach:

- A VHF receiver that cannot stay tuned to the desired channel has a frequency synthesizer whose Phase Locked Loop (PLL) output has become unlocked, while the local oscillator beating with the incoming signal to make an IF is normal operation. [9-4A1]
- No audible speaker output with a squelch control that has no effect means the AF (audio frequency) amplifier may be defective or the transmitter Push-To-Talk circuit may be activated, since keying mutes the receiver, whereas RF, mixer or local oscillator faults would still leave noise audible. [9-4A2, 9-4A4]
- If a radio fails to receive, its DC line reads zero volts and its fuse reads zero ohms (intact), a "crowbar" circuit has prevented an over current condition that might damage the radio by shutting off the supply. [9-4A3]
- A weak signal can be lost because a stronger signal on the channel suppresses it at the limiter stage by capture effect, even though the receiver is working. [9-4A5]
- To isolate distortion in the audio output, use an oscilloscope to display the AC signal at the output of each AF amplifier stage, and the stage where clean audio first turns distorted is the fault. [9-4A6]

Scene ideas: block diagram: RF amplifier, mixer fed by the PLL synthesizer, IF, limiter, detector, squelch, AF amplifier and speaker, lighting the PLL, limiter and AF stages as each fault is discussed; equipment card: voltmeter reading zero on the DC line and ohmmeter reading zero ohms across the fuse, with a callout for the crowbar circuit; waveform: oscilloscope traces at successive AF stage outputs, clean until one stage turns distorted.

### Key topic 5: Receiver Faults-2

Facts to teach:

- A voltmeter reading of 9.6 between the positive side of the radio's DC line and ground, instead of the normal 12.8 to 13.8 V, starves the receiver stages and may cause a significant loss in sensitivity. [9-5A1]
- Replacing 75 ohm RG-59/U with 50 ohm RG-8/U or LMR-400 Ultraflex cable improves the match and cuts line loss, so it does not cause a loss of sensitivity. [9-5A1]
- To find a receiver's minimum discernible signal, set a signal generator to the receiver frequency, start near zero output and increase it until an audio voltmeter at the AF output shows a 3-dB increase, where signal plus noise is twice the noise. [9-5A2]
- A quick field test in many U.S. ports is to tune to 162.550 MHz, 162.400 MHz or 162.475 MHz and listen for National Oceanic and Atmospheric Administration (NOAA) broadcasts, since a radio cannot monitor its own transmission. [9-5A3]
- A transistor that shows low resistance between emitter and base even with the test leads reversed is faulty (a shorted junction), while a diode reading low one way and high reversed, zero ohms across a good fuse and infinite ohms across a ceramic bypass capacitor are normal. [9-5A4]
- The same voltage reading between each lead of a 100K-ohm resistor and ground in a bias circuit indicates a fault, because a working bias resistor carries current and shows a voltage drop. [9-5A5]
- A defective potentiometer in the audio frequency amplifier stage, such as a worn volume control, causes noisy, crackling operation, whereas an open coupling transformer winding would kill the audio instead. [9-5A6]

Scene ideas: equipment card: multimeter readings with callouts, 9.6 V on the DC line, a transistor emitter-base junction reading low both ways, and equal voltages at both ends of a 100K-ohm bias resistor; frequency band strip: NOAA weather broadcasts at 162.400, 162.475 and 162.550 MHz; key-fact list: minimum discernible signal steps ending at a 3-dB rise on the audio voltmeter.

### Key topic 6: Transmitter Technology

Facts to teach:

- The maximum allowable deviation of a marine VHF transmitter is 5 kHz (±5 kHz for 16K0G3E voice), because more deviation spreads the signal toward adjacent channels. [9-6A1]
- The modulation index is the maximum carrier deviation divided by the maximum modulation frequency, m = Δf / f<sub>m</sub>, so 5 kHz deviation with a 2.5 kHz tone gives m = 5 / 2.5 = 2. [9-6A2]
- Pre-emphasis boosts the higher modulation frequencies by 6 dB per octave before transmitting, and the receiver reduces them by the same amount, cutting high-frequency noise while keeping audio flat. [9-6A3]
- A modulation index set to less than 1 to 1 means the transmitter is undermodulated, resulting in unusually low level transmit audio. [9-6A4]
- G3E is the most common emission for shipboard VHF-DSC transceivers, where G is phase modulation, 3 is a single channel of analog information and E is telephony. [9-6A5]
- A VHF FM transmitter has many sidebands, pairs at multiples of the modulating frequency whose amplitudes follow Bessel functions of the modulation index, not just one or two. [9-6A6]

Scene ideas: formula reveal: m = Δf / f<sub>m</sub>, worked as 5 / 2.5 = 2; waveform: FM spectrum with many sideband pairs around the carrier, the significant ones within the 16 kHz necessary bandwidth; block diagram: pre-emphasis at +6 dB per octave in the transmitter and matching de-emphasis in the receiver.

### Key topic 7: Transmitter Faults-1

Facts to teach:

- Readings of 1 watt on LOW and 8.5 watts on HIGH with +12.8 vdc applied mean the transmitter output is low in the high power mode but still within FCC specifications (at least 8 W, no more than 25 W), so the contact problem lies elsewhere. [9-7A1]
- The best way to measure antenna system SWR (standing wave ratio) with an SWR meter is to insert it between the VHF radio and the coax connected to the antenna, set an unused channel, activate the Push-To-Talk (PTT) circuit and read the value, not to make a radio check on Channel 16. [9-7A2]
- The best way to determine SWR with a directional wattmeter is to insert it between the transmitter and the coax connected to the antenna, activate PTT and observe forward and reflected power, since an artificial antenna tests only the radio and a disconnected line reflects everything. [9-7A3]
- From forward and reflected power, SWR = (1 + √(P<sub>r</sub>/P<sub>f</sub>)) ÷ (1 − √(P<sub>r</sub>/P<sub>f</sub>)). [9-7A3]
- Nearly zero RF output in high power mode on all channels while the radio otherwise works means the SWR protection circuit has engaged to prevent damage to the Power Amplifier, whereas a 1.5 to 1.0 SWR or a 50-ohm load is normal. [9-7A4]
- Voltage controlled oscillator (VCO) failure in the synthesizer shows up as an out-of-lock condition in the Phase Locked Loop, and many radios then inhibit transmit. [9-7A5]
- A radio that works in receive mode but cannot transmit most likely has a failed component in the Push-To-Talk circuit, since the radio enters transmit only when the PTT line is activated. [9-7A6]

Scene ideas: block diagram: radio, then SWR meter or directional wattmeter, then coax to the antenna, with forward and reflected power arrows; formula reveal: SWR = (1 + √(P<sub>r</sub>/P<sub>f</sub>)) ÷ (1 − √(P<sub>r</sub>/P<sub>f</sub>)); comparison table: symptom versus cause, 8.5 W on HIGH is legal, near-zero output is SWR protection, PLL out of lock is VCO failure, receive-only is the PTT circuit.

### Key topic 8: Transmitter Faults-2

Facts to teach:

- A full 25 watts output with no modulation heard on an external receiver points to an open connection in the microphone cable or connector, because a PTT fault would prevent any output at all. [9-8A1]
- Less than 1 watt output in HIGH power mode with nominal 12.8 vdc applied means the bias voltage to the Power Amplifier (PA) stage may be insufficient, so the PA transistor barely conducts. [9-8A2]
- To evaluate transmitter stages with a spectrum analyzer (SPECAN), connect through an in-line attenuator set to maximum attenuation, switch the radio to LOW power and use an inductive probe at the input and output of the RF transmitter stages. [9-8A3]
- A reading of 25 watts forward and 1.5 watts reflected shows proper operation, since Γ (the reflection coefficient) = √(1.5/25) ≈ 0.245 and SWR = (1 + 0.245) ÷ (1 − 0.245) ≈ 1.65:1, while 27.5 W forward exceeds the legal limit and 25 W reflected means nothing reaches the antenna. [9-8A4]
- Transmitter modulation in excess of 150% causes distortion in the modulator stage, because 100% is the 5 kHz maximum deviation and 150% swings the carrier about 7.5 kHz. [9-8A5]
- A device that tests the RF power output without emitting a signal on the air is called a dummy load or artificial antenna, a non-inductive 50 Ω resistor that absorbs the power as heat. [9-8A6]

Scene ideas: formula reveal: Γ = √(1.5/25) ≈ 0.245, then SWR = (1 + 0.245) ÷ (1 − 0.245) ≈ 1.65:1 boxed; block diagram: radio on LOW power into an in-line attenuator at maximum into the spectrum analyzer, with an inductive probe on the RF stages; equipment card: dummy load (artificial antenna) with callouts for the 50 Ω resistor and the coax connector.

### Key topic 9: Digital Selective Calling

Facts to teach:

- VHF-DSC uses a frequency shift of 1300-2100 Hz on a 1700 Hz sub-carrier (1700 ± 400 Hz), modulating the transmitter on Channel 70. [9-9A1]
- VHF-DSC runs at a modulation rate of 1200 baud with an index of modulation of 2.0 ± 10%, while MF/HF DSC runs at only 100 baud. [9-9A2]
- A DSC radio check with a coast station is made by selecting the DSC menu item TEST, entering the coast station's MMSI (Maritime Mobile Service Identity) number and sending the test, because DSC addresses stations by MMSI, not call letters, and the button under the red cover sends a distress alert. [9-9A3]
- If a radio with an existing MMSI will not accept a new one, contact the manufacturer to clear the MMSI memory, because most DSC radios lock the MMSI after one entry and have no user reset. [9-9A4]
- The VHF-DSC time diversity reception interval is 33-1/3 milliseconds, because each character is repeated after four other characters and 4 × 10 bits ÷ 1200 bits/s = 33⅓ ms. [9-9A5]
- A voltmeter on a DSC circuit sending an outgoing message data stream shows a fluctuating reading from 0 to 2 volts DC, since the data switches faster than the meter can follow. [9-9A6]

Scene ideas: frequency band strip: 1300 Hz and 2100 Hz tones either side of the 1700 Hz sub-carrier; formula reveal: 4 × 10 bits ÷ 1200 bits/s = 33-1/3 milliseconds; timeline / interval badges: each character sent first (DX) and repeated (RX) with four characters between, 33-1/3 ms apart.

### Key topic 10: Antenna Systems

Facts to teach:

- A temporary VHF marine antenna should be about 18 inches long, a quarter wave: L = 234 / f(MHz) = 234 / 156.8 ≈ 1.49 ft ≈ 18 inches. [9-10A1]
- A VHF collinear array is an antenna with phased elements and an omni directional radiation pattern, offering up to 9 dB gain by stacking half-wave elements end to end. [9-10A2]
- A masthead antenna with a base loading coil that appears shorted to an ohmmeter may be normal for a well working shunt fed antenna system, since the coil connects the radiator to ground at DC. [9-10A3]
- The most common coax connector on VHF transceivers is the "UHF" type, an SO-239 socket on the radio mating with a PL-259 plug on the coax. [9-10A4]
- RG-8/U is the most appropriate coax for a long transmission line run, a large 50 Ω cable with much lower loss than RG-58/U or RG-174/U, while RG-59/U is a 75 Ω cable that mismatches the radio. [9-10A5]
- A disadvantage of high gain VHF antennas is signal dropout in severe weather on small craft, because their narrow, flattened beam tilts toward sky or water as the boat rolls. [9-10A6]

Scene ideas: formula reveal: L = 234 / 156.8 ≈ 1.49 ft ≈ 18 inches; equipment card: collinear array with phased elements and a shunt-fed base loading coil, with an ohmmeter reading a short; comparison table: RG-8/U (50 Ω, low loss, long runs), RG-58/U and RG-174/U (thin, lossy), RG-59/U (75 Ω, mismatch).

## Lesson 9-B: MF-HF-DSC-SITOR (NBDP) Equip. & Ops

Element 9 · Subelement B · Key topics 11–22

**Goal:** The learner can state the MF/HF GMDSS frequencies, bandwidths and controls, explain how SSB, DSC and SITOR (NBDP) signals are generated, received and exchanged, and diagnose MF/HF receiver and transmitter faults from their symptoms and meter readings.

**Visual style:** Use frequency band strip for the DSC, voice and NBDP follow-on frequencies and the FSK tones, and block diagram for the SSB receiver, J3E exciter and PLL synthesizer, highlighting the suspect stage during the fault topics. A recurring equipment card of the MF/HF console, with its RF power meter swinging from zero to full for ARQ and holding steady for FEC, ties the controls, fault and NBDP topics together.

**Narration style:** A friendly, plain-spoken instructor using short sentences, spelling out each acronym the first time (single sideband, beat frequency oscillator, automatic gain control, receiver incremental tuning, narrow-band direct printing, automatic repeat request, forward error correction, maritime safety information, Maritime Mobile Service Identity). Say units, symbols and emission codes in words and letters (kilohertz, hertz, watts P E P, milliseconds, "J three E", "F one B") and stress the numbers the exam tests: 2.8 and 3.0 kilohertz, 300 and 500 hertz, 10 hertz, 1615 and 1785 hertz, 150 watts P E P, 200 bits, 400 milliseconds, the six DSC frequencies and KKKK. Where a fact carries a flag note, say plainly which answer the exam keys and why.

### Key topic 11: Frequencies and Bandwidth

Facts to teach:

- J3E (single-sideband voice) transmissions have an assigned bandwidth of 2.8 kHz (the 2K80J3E emission) and a channel spacing of 3.0 kHz. [9-11B1]
- J2B SITOR (NBDP, narrow-band direct printing) transmissions have an assigned bandwidth of 300 Hz and a channel spacing of 500 Hz, because 170 Hz frequency-shift keying at 100 baud needs only about 300 Hz. [9-11B2]
- The allowable frequency tolerance for GMDSS MF-HF transmitters is 10 Hz, tight enough for narrow 170 Hz-shift DSC and NBDP signals to land in the receiver's narrow filters. [9-11B3]
- For the exam, the readings keyed as within legal tolerance with a 2 ppm counter are 2182.006 kHz and 4124.995 kHz, 6 Hz high and 5 Hz low, the smallest offsets, while every other pair includes an offset of 9 or 10 Hz at or near the limit (a 2 ppm counter can itself be off by about 4.4 Hz at 2182 kHz and 8.3 Hz at 4125 kHz, so this is the best pair rather than a provable one; see the flag note). [9-11B4]
- The six MF/HF Digital Selective Calling frequencies are 2187.5 kHz, 4207.5 kHz, 6312 kHz, 8414.5 kHz, 12577 kHz and 16804.5 kHz. [9-11B5]
- Voice follow-on communications use 2182, 4125, 6215, 8291, 12290 and 16420 kHz, which includes the exam's voice set of 4125 kHz, 8291 kHz and 16420 kHz. [9-11B6]
- SITOR (NBDP) follow-on communications use 2174.5, 4177.5, 6268, 8376.5, 12520 and 16695 kHz, which includes the exam's SITOR (NBDP) set of 2174.5 kHz, 6268 kHz and 12520 kHz. [9-11B6]
- DSC frequencies such as 6312 and 8414.5 kHz are not follow-on channels, and follow-on frequencies such as 2182, 4125, 4177.5, 8291, 8376.5 and 12520 kHz are not DSC frequencies. [9-11B5, 9-11B6]

Scene ideas: frequency band strip: for each band from 2 MHz to 16 MHz, the DSC frequency with its voice and NBDP follow-on frequencies beside it (2187.5 / 2182 / 2174.5 kHz up to 16804.5 / 16420 / 16695 kHz); comparison table: J3E at 2.8 kHz bandwidth and 3.0 kHz spacing versus J2B SITOR (NBDP) at 300 Hz and 500 Hz; formula reveal: 2182.006 − 2182.000 = 6 Hz high and 4125.000 − 4124.995 = 5 Hz low against the 10 Hz limit, with a flag-note badge.

### Key topic 12: Controls, Functions and Displays

Facts to teach:

- The "R.I.T." (receiver incremental tuning, or clarifier) control on a MF/HF transceiver makes slight adjustments in the receiver frequency, while the transmit frequency stays on the assigned channel. [9-12B1]
- The "TUNE" button tunes the antenna to the transmit frequency, making the automatic antenna coupler adjust its matching network to the transmitter's 50 Ω output, usually while sending a low-power carrier. [9-12B2]
- The "ENTER" function accepts the previous selection or data input, such as an MMSI or frequency, and distress alerts use a separate covered button. [9-12B3]
- "TLX" (telex) on the display means the MF/HF transceiver is operating in SITOR (NBDP). [9-12B4]
- Reducing the "RF Gain" control reduces the sensitivity of the RF amplifier stage, which helps when strong nearby signals or heavy noise would overload the receiver. [9-12B5]
- The "AGC" (automatic gain control) function maintains a relatively constant AF output when the input signal varies, by cutting gain on strong signals and raising it on weak ones. [9-12B6]

Scene ideas: equipment card: MF/HF console with callouts appearing for R.I.T., TUNE, ENTER, RF Gain, AGC and the TLX mode display; block diagram: transceiver, automatic antenna coupler and antenna, with TUNE matching the antenna to the transmit frequency.

### Key topic 13: Receiver Technology

Facts to teach:

- The BFO (beat frequency oscillator) re-injects the carrier frequency in the receiver's detector to demodulate the SSB signal, since J3E suppresses the carrier, and it does not recreate the missing sideband. [9-13B1]
- With the BFO turned off, A3E (double-sideband AM) and H3E (single sideband with full carrier) can still be received because they carry their own carrier, while J3E, J2B, A1A and F1B need the BFO. [9-13B2]
- If another vessel's HF transmission sounds garbled, use the "R.I.T." or "Clarifier" control to adjust the receiver frequency until the voice sounds natural, since squelch only mutes or unmutes the audio. [9-13B3]
- An AGC circuit for SSB voice reception should have fast attack and slow decay, so gain drops instantly on voice peaks and noise does not surge up between words. [9-13B4]
- The primary purpose of a high first I.F. is eliminating image signals, which lie twice the IF away and fall far outside the front-end passband, while a low second IF supplies sharp selectivity and gain. [9-13B5]
- A noise blanker uses the noise pulses to develop a blanking pulse that briefly gates off the I.F. amplifier for the length of each spike, rather than clipping peaks or reducing RF gain. [9-13B6]

Scene ideas: block diagram: RF amplifier, high first IF, low second IF and product detector, with the BFO feeding the detector and a noise blanker gating the IF amplifier; waveform: SSB spectrum with the suppressed carrier restored by the BFO; comparison table: emissions that need the BFO (J3E, J2B, A1A, F1B) versus those that do not (A3E, H3E).

### Key topic 14: Receiver Faults-1

Facts to teach:

- Garbled, unreadable voice on all MF/HF SSB channels most likely means the beat frequency oscillator circuit has failed, because SSB is intelligible only when the BFO reinserts the carrier at the correct frequency. [9-14B1]
- If all signals sound normal except one very high pitched, barely readable voice, the transmitter of that abnormal signal is off frequency, since the receiver's BFO, synthesizer and VCO are clearly working. [9-14B2]
- Hearing signals in voice/SSB mode but not in SITOR (NBDP) mode points to a defective 500 Hz I.F. filter, the narrow path only NBDP uses. [9-14B3]
- Hearing signals in SITOR (NBDP) mode but not in voice/SSB mode points to a defective 2.8 kHz filter, the wider path only voice uses. [9-14B5]
- A phase locked loop that appears faulty is most likely caused by an inoperative Voltage Controlled Oscillator, which is part of the loop itself. [9-14B4]
- An inoperative AGC function is most likely caused by failure of a variable gain amplifier in the RF stage, the amplifier the AGC control voltage acts on. [9-14B6]

Scene ideas: block diagram: receiver with parallel 2.8 kHz voice and 500 Hz NBDP IF filters, lighting whichever path has failed; comparison table: symptom versus cause, all SSB garbled is the BFO, one high-pitched station is that transmitter off frequency, voice only is the 500 Hz filter, NBDP only is the 2.8 kHz filter, PLL fault is the VCO, dead AGC is the variable gain amplifier.

### Key topic 15: Receiver Faults-2

Facts to teach:

- A receiver that fails to suppress the AF output in the absence of a sufficiently strong input signal has a failed squelch circuit. [9-15B1]
- With no AF output and an ohmmeter reading near zero between the speaker leads, the audio amplifier stage has failed, because a speaker voice coil normally measures only a few ohms. [9-15B2]
- Strong AF output with no signals heard on any frequency means no antenna signal reaches the receiver, either because the transceiver is connected to a "Dummy Load" or because there is an open circuit in the transmission line to the antenna. [9-15B3, 9-15B4]
- No AF output while the radio is powered on and "TX" is illuminated points to a shorted Push-To-Talk circuit in the microphone, which holds the set in transmit and mutes the receiver. [9-15B5]
- A signal that breaks up while the "Signal" meter alternates between mid scale and zero points to an intermittent connection between the antenna and coupler, since the meter reads RF strength ahead of the audio stages. [9-15B6]

Scene ideas: block diagram: antenna, coupler, transmission line, receiver, squelch, AF amplifier and speaker, with the dummy load, open line and intermittent antenna-coupler link highlighted in turn; equipment card: transceiver with a lit TX lamp, an ohmmeter near zero across the speaker leads and a Signal meter swinging between mid scale and zero.

### Key topic 16: Transmitter Tech

Facts to teach:

- A J3E signal is generated using a double balanced mixer, which cancels the carrier, and a sideband filter, which removes one sideband. [9-16B1]
- The most likely power level for initial MF-HF communications is 150 watts PEP, raised only if the other station has trouble copying. [9-16B2]
- The lower sideband is eliminated by a filter that passes the upper sideband and blocks the lower sideband, because marine MF/HF radiotelephony uses upper sideband. [9-16B3]
- Shipboard GMDSS equipment most commonly generates SITOR (NBDP) as two alternating sidebands of 1615 Hz and 1785 Hz offset from the carrier frequency by 1700 Hz, which is 1700 ± 85 Hz, a 170 Hz shift. [9-16B4]
- A phase locked loop frequency synthesizer is made up of a master oscillator, frequency dividers, a phase comparator, a loop filter and a voltage controlled oscillator. [9-16B5]
- The phase comparator compares the divided outputs of the master oscillator and the voltage controlled oscillator and produces an error voltage that pulls the VCO onto frequency. [9-16B6]

Scene ideas: block diagram: audio and carrier oscillator into a double balanced mixer, then a sideband filter that passes the upper sideband and blocks the lower to give J3E; block diagram: master oscillator and VCO each through a divider into the phase comparator, then the loop filter steering the VCO; frequency band strip: NBDP tones at 1615 Hz and 1785 Hz either side of 1700 Hz.

### Key topic 17: Transmitter Faults-1

Facts to teach:

- An MF-HF transceiver that works properly on voice but not on SITOR (NBDP) most likely has a failed 500 Hz I.F. filter, a part only NBDP depends on. [9-17B1]
- For the exam, the same symptom of correct voice/SSB operation but no SITOR (NBDP) is also keyed to "the 1615 kHz audio oscillator is not working", meaning the 1615 Hz tone oscillator (see the flag note), because without that tone the transmitter cannot form the NBDP signal. [9-17B4]
- Failure to contact another station 60 miles distant during daytime operation indicates a malfunction of a 2182 kHz radiotelephone system, since daytime ground-wave coverage normally reaches roughly 100 to 150 nautical miles. [9-17B2]
- No indication of power output when speaking into the microphone is a symptom of malfunction in a 2182 kHz SSB radiotelephone, whereas failing to reach a shore station 600 nautical miles distant in daytime is normal. [9-17B5]
- A 60 watt PEP SSB transmitter working properly in SITOR (NBDP) ARQ shows the power meter fluctuating regularly from zero to the 60 watt reading, because each 210 ms block of three characters is followed by a pause to listen for the acknowledgement. [9-17B3]
- A 60 Watt PEP SSB transmitter working properly in J3E shows no power output when keyed without speaking, and with speech the meter flickers widely with voice peaks up to, but not above, 60 W instead of holding steady. [9-17B3, 9-17B6]

Scene ideas: comparison table: power meter on a 60 W PEP set, J3E keyed but silent reads zero, J3E with speech flickers up to 60 W, SITOR (NBDP) ARQ swings regularly from zero to 60 W; timeline / interval badges: ARQ 210 ms three-character block, then a listening pause; block diagram: SSB exciter with the 1615 Hz / 1785 Hz tone oscillator and the 500 Hz filter in the NBDP path, with a flag-note badge on 1615 Hz.

### Key topic 18: Transmitter Faults-2

Facts to teach:

- A 150 Watt MF/HF transmitter working properly in F1B ARQ mode shows an output that fluctuates between 0 and 150 watts, because ARQ sends 210 ms three-character blocks and pauses for the acknowledgement, repeating every 450 ms. [9-18B1]
- A 250 Watt MF/HF transmitter working properly in F1B FEC mode shows constant output between 225 watts and 250 watts, because FEC sends continuously with a constant-envelope FSK signal. [9-18B2]
- In F1B FEC mode, output that fluctuates between 0 and 150 watts on a 150 Watt transmitter indicates improper operation, since that swing is normal only for ARQ, while constant output between 125 watts and 150 watts is proper. [9-18B6]
- A reading of 125 watts forward and 5 watts reflected is acceptable, since Γ = √(5/125) = 0.2 and SWR = 1.2 / 0.8 = 1.5:1. [9-18B6]
- A high Standing Wave Ratio (SWR) in the antenna system can cause very low RF output in F1B FEC mode, as the protection circuit cuts power to save the amplifier, whereas a dummy load is a matched 50 Ω termination that allows full output. [9-18B3]
- Activation of a "crowbar" circuit in the power supply to prevent an unregulated voltage increase causes zero RF output, because it shuts off the DC power to the transmitter. [9-18B5]
- Modulation testing with an RF spectrum analyzer to measure frequency deviation is not a valid way to find an F1B FEC transmitter fault, since F1B simply shifts between two fixed frequencies 170 Hz apart, while visual inspection, DVM power supply checks and input/output checks with a 10:1 oscilloscope probe are valid. [9-18B4]

Scene ideas: comparison table: ARQ power meter swinging from 0 to full power versus FEC holding steady near rated power (225 to 250 W on a 250 W set); formula reveal: Γ = √(5/125) = 0.2, then SWR = 1.2 / 0.8 = 1.5:1 boxed; timeline / interval badges: ARQ 210 ms block inside a 450 ms cycle versus continuous FEC.

### Key topic 19: DSC Operations

Facts to teach:

- An alternating dot pattern of 200 bits precedes the phasing signal in a DSC distress alert call, lasting 2 seconds at 100 baud so scanning watch receivers can stop and synchronize. [9-19B1]
- DSC uses a 10 bit code with 7 bits used for information and 3 bits used for error correction (a count of the 0 bits in the information part), while a constant 4/3 ratio of 1s to 0s is the 7-bit SITOR code, not DSC. [9-19B2]
- MF-HF-DSC uses a frequency shift of ±85 Hz on a 1700 Hz sub-carrier (tones of 1615 Hz and 1785 Hz) at 100 baud, whereas the 1300/2100 Hz tones belong to VHF DSC. [9-19B3]
- The MF-HF-DSC time diversity reception interval is 400 milliseconds, because each character is repeated after four other characters and 4 × 10 bits ÷ 100 bits/s = 400 ms. [9-19B4]
- A MF/HF Distress priority DSC call may include the ship's MMSI (Maritime Mobile Service Identity), vessel position, nature of distress and follow-on communications by J3E or F1B, and DSC identifies ships by MMSI, not by call sign or vessel name. [9-19B5]
- MMSI 003669999 is the group call for all U.S. Coast Guard coast stations, received by all DSC-equipped USCG coast stations within range, which may send an automated acknowledgement, and it may be used to test MF/HF DSC equipment aboard ships. [9-19B6]

Scene ideas: timeline / interval badges: 200-bit dot pattern lasting 2 seconds, then phasing, then the message, with each character's repeat 400 ms later; formula reveal: 4 × 10 bits ÷ 100 bits/s = 400 ms; comparison table: VHF DSC (1300/2100 Hz, 1200 baud, 33-1/3 ms) versus MF/HF DSC (1700 ± 85 Hz, 100 baud, 400 ms).

### Key topic 20: SITOR (NBDP)-ARQ

Facts to teach:

- In ARQ (automatic repeat request), the information sending station (ISS) transmits a block of three characters that the receiving station subsequently acknowledges or requests to be retransmitted. [9-20B1]
- The information receiving station (IRS) checks each block for parity, meaning each character's fixed 4:3 bit ratio, and if the block is correct a control signal tells the ISS to proceed, but if the parity check fails the block must be resent. [9-20B2]
- When a ship works a shore station in ARQ, the ship sends a group of 3 characters, the shore station checks parity, and if parity is OK the shore station indicates readiness for the next 3 characters, asking for a repeat only when the check fails. [9-20B3]
- Sending each character twice belongs to FEC, not ARQ, and NAVTEX and Maritime Safety Information broadcasts are one-way, so they cannot be contacted or copied in ARQ. [9-20B1, 9-20B2]
- When working an automated Coast Station, most ARQ commands are followed by "+", as in HELP+ and MSG+. [9-20B4]
- To send a message via a direct connection to a shoreside TELEX subscriber, the ship sends DIRTLX0xxyyyy+, while MSG+ retrieves waiting messages, AMV+ sends an AMVER report and OPR+ calls the operator. [9-20B5]
- KKKK is transmitted to terminate a direct TELEX connection, clearing the land-line link while the radio circuit can stay up. [9-20B6]

Scene ideas: timeline / interval badges: ISS sends a three-character block, IRS checks parity, control signal returns, next block follows, with a repeat only on a failed check; key-fact list: coast station commands HELP+, MSG+, AMV+, OPR+, DIRTLX0xxyyyy+ and KKKK; block diagram: ship (ISS) to coast station (IRS) to land-line telex subscriber.

### Key topic 21: SITOR (NBDP)-FEC

Facts to teach:

- The sequence ARQ, FEC, SFEC corresponds to two-way communications, one-way communications to all stations, and one-way communications to a single station. [9-21B2]
- Selective FEC (SFEC) is employed when an individual station must receive communications without transmitting, as under radio silence. [9-21B3]
- In SITOR (NBDP) Mode B, FEC (forward error correction) reduces the error rate in the presence of static crashes by transmitting each character twice, separated in time, so a corrupted copy is replaced by the other. [9-21B4]
- Within range of NAVTEX broadcasts, if both the Inmarsat-C and the NAVTEX receiver are inoperative, select 518 kHz FEC TELEX on the MF/HF console to receive MSI (maritime safety information), because ARQ cannot copy a broadcast. [9-21B1]
- Beyond range of NAVTEX broadcasts with the Sat-C system failed, select an HF MSI frequency and FEC TELEX mode to receive MSI. [9-21B5]
- With atmospheric interference to NAVTEX broadcasts, especially in the tropics, select one of the 8 HF MSI frequencies (4210 kHz to 26100.5 kHz) and set up the transceiver in FEC TELEX mode. [9-21B6]

Scene ideas: comparison table: ARQ two-way, FEC one-way to all stations, SFEC one-way to a single station; frequency band strip: NAVTEX at 518 kHz and the 8 HF MSI frequencies from 4210 kHz to 26100.5 kHz; timeline / interval badges: each FEC character sent twice, with a static crash wiping out one copy.

### Key topic 22: Antenna Systems

Facts to teach:

- The antenna tuner matches the antenna to the operating frequency, cancelling reactance and transforming impedance to the transmitter's 50 Ω so SWR is minimized. [9-22B1]
- An inductance in series with the antenna electrically lengthens a physically fixed length antenna and lowers its resonant frequency, which is how loading coils let short whips work on MF. [9-22B2]
- A capacitance in series with the antenna electrically shortens a physically fixed length antenna and raises its resonant frequency. [9-22B3]
- RG-8, 50 ohm coax is suitable for GMDSS MF/HF antenna systems, while 72 to 75 Ω cables such as RG-59, RG-6 and RG-179 would mismatch the system. [9-22B4]
- If the MF-HF whip antenna is carried away, rig a wire antenna approximately 35-40 ft long per the equipment instruction manual, because a 10 ft wire is too short to tune on MF and the VHF antenna is not usable at these frequencies. [9-22B5]
- The "PL-259" connector is often used in GMDSS MF/HF antenna systems, while "F" connectors are for 75 Ω TV cable, SMA is a small microwave connector and EIA-232 is a serial data interface. [9-22B6]

Scene ideas: block diagram: transceiver, RG-8 50 Ω coax, antenna tuner and whip, with a 35-40 ft emergency wire replacing the lost whip; comparison table: series inductance (electrically lengthens, lowers resonant frequency) versus series capacitance (electrically shortens, raises resonant frequency); equipment card: PL-259 plug with callouts for the threaded coupling and center pin.

## Lesson 9-C: Satellite Systems

Element 9 · Subelement C · Key topics 23–32

**Goal:** Explain how a ship's Inmarsat-C, Fleet Broadband, LRIT and GPS equipment and antennas work, and diagnose common satellite terminal and antenna faults.

**Visual style:** Frequency band strips place the Inmarsat-C and GPS L-band frequencies, block diagrams trace signals from satellite to terminal and data from ship to shore, and equipment cards label the antennas, the radome and the Fleet Broadband terminal ports. The three troubleshooting topics lean on comparison tables of symptom, cause and action. A small satellite icon above a ship's mast recurs in the corner of each scene as the lesson's motif.

**Narration style:** A friendly, plain-spoken instructor in short sentences at a steady pace, slowing down for frequencies, error codes and counts. Spell out each acronym the first time, including LNA, SNR, EGC, LES, NCS, LRIT (Long Range Identification and Tracking, which the pool words as Long Range Identity Tracking and Long Range Information Tracking), APR, PR, BGAN, VoIP, PoE, SIM, PIN, PUK, ISDN, TCP/IP, DGPS, NMEA, SPS, RHC, DCE, DTE, RCC, NDN, ACU, MPDS, ADE, AZ and EL. Say units and codes in words (megahertz, kilohertz, kilometers, degrees, decibels, ohm, "zero zero F zero H"), and stress the numbers the exam tests: 1530.0 to 1545.0 and 1626.5 to 1645.5 megahertz, one NCS per ocean region, 4 reports a day at one every 6 hours, service number 33, 3.1 kilohertz audio, 24 satellites in 6 planes at 20,200 kilometers and 55 degrees, 1575.42 and 1227.60 megahertz, four satellites and one ohm.

### Key topic 23: Technology

Facts to teach:

- An Inmarsat-C shipboard terminal receives on 1530.0–1545.0 MHz and transmits on 1626.5–1645.5 MHz; the ship's transmit band is the higher of the pair. [9-23C1]
- LNA stands for low noise amplifier, not low noise antenna or line noise amplifier. [9-23C2]
- The LNA receives and amplifies the very weak signal from the satellite, at or near the antenna, before cable losses and later stages add noise. [9-23C3]
- Because it adds very little noise of its own, a good LNA largely sets the receiver's overall noise figure, lowering it rather than increasing it. [9-23C2, 9-23C3]
- Fade margin is a design allowance to accommodate expected fading: extra signal level above the minimum, so the link keeps working when rain, multipath or other fading weakens the signal. [9-23C4]
- Signal to noise ratio is a measure that compares the level of a desired signal to the level of background noise, not their distance or frequency. [9-23C5]
- Signal to noise ratio is abbreviated SNR (also written S/N) and is usually given in decibels; an SNR of 10 dB means the signal power is ten times the noise power. [9-23C6]

Scene ideas: frequency band strip: an L-band strip from 1500 to 1700 MHz with the Inmarsat-C receive segment 1530.0–1545.0 MHz and the higher transmit segment 1626.5–1645.5 MHz, with downlink and uplink arrows; block diagram: satellite → antenna → LNA (low noise amplifier) → coax → receiver, the faint signal growing at the LNA while the noise it adds stays small; waveform: a received signal riding above a noisy floor with an SNR bracket between them, then a fade dipping into the fade margin band without falling below the minimum level.

### Key topic 24: C-Terminals

Facts to teach:

- To minimize shock hazard, ensure the chassis of the Inmarsat terminal is connected to an electrical ground, so fault current blows a fuse or trips a breaker instead of leaving the case live; isolating the frame does the opposite. [9-24C1]
- A LOOP BACK test is done by sending yourself a test message: it travels up through the satellite to the LES (Land Earth Station) and back, proving the whole transmit and receive path, which pinging 127.0.0.1 cannot do. [9-24C2]
- EGC (Enhanced Group Call) messages contain SafetyNET, FleetNET and System information: maritime safety information, commercial messages to selected groups of ships, and network system messages. [9-24C3]
- An Inmarsat-C antenna should never be electrically insulated from its mounting mast; it is grounded to the mast so static and lightning energy have a path to the hull. [9-24C4]
- Recommended antenna practice is to ground the antenna chassis to the mast and weatherproof that connection with silicone, form a drip loop in the transmission line near the antenna secured with a cable tie, and seal connectors with waterproof sealant or putty wrapped in self-bonding/vinyl tape. [9-24C4]
- Each Inmarsat ocean region has one NCS (Network Coordination Station) per Inmarsat system; it manages the region's channels and broadcasts EGC messages, while several LESs handle the traffic. [9-24C5]
- The Inmarsat-C system cannot provide telephone communications via VoIP, or any voice, because it is a low-rate, store-and-forward data system. [9-24C6]
- Inmarsat-C does provide message transmission to and from a mobile unit, broadcast data to groups of mobile terminals, and position reporting from fleets of mobile units. [9-24C6]

Scene ideas: equipment card: an Inmarsat-C antenna on its mast with callouts appearing one by one for the chassis grounded to the mast (an "insulated" tag crossed out), silicone over the bond, a drip loop secured with a cable tie and connectors sealed and taped, then the below-deck terminal chassis bonded to ground; block diagram: ship terminal → satellite → LES → satellite → the same terminal for the loop back test, then one NCS per ocean region sending EGC streams labeled SafetyNET, FleetNET and System; comparison table: what Inmarsat-C can do (two-way messaging, EGC group broadcasts, fleet position reporting) versus cannot do (telephone calls, VoIP or otherwise).

### Key topic 25: Long Range Identity Tracking

Facts to teach:

- LRIT data is a separate tracking system for each flag state's security: the ship's identity, position and time go through a data center to its own flag administration, separate from AIS and AMVER and not broadcast on the Internet. [9-25C2]
- LRIT is detected on the Inmarsat-C satellite network, since most ships meet the requirement with their GMDSS Inmarsat-C or Mini-C terminal; it does not use AIS channels and is not a backup for AIS. [9-25C3]
- An LRIT terminal must be capable of being configured to automatically transmit an APR (automatic position report), must transmit an APR every 6 hours, and must be able to automatically transmit a PR (position report) if requested by a poll. [9-25C5]
- The U.S. National Data Center that monitors polling input for each US Flag ship must receive at least 4 position reports daily, one every 6 hours; it can poll for more, and crew numbers are not part of the report. [9-25C1]
- When a compulsory equipped IMO ship is not correctly broadcasting LRIT info, double check the GMDSS console's Inmarsat-C terminal for regular operation (powered, logged in and working), because AIS plays no part in LRIT. [9-25C4]
- GPS does not support LRIT: its satellites only broadcast navigation signals and cannot carry a report back, so GPS supplies the position while the report travels over Inmarsat-C, Inmarsat-D+ or Iridium. [9-25C6]

Scene ideas: block diagram: GPS satellite → ship with a one-way arrow tagged "receive only", then GMDSS console Inmarsat-C terminal → Inmarsat-C satellite → U.S. National Data Center for the flag state, with a poll arrow coming back and a PR going up in reply, and Inmarsat-D+ and Iridium drawn as other two-way paths; timeline / interval badges: a 24-hour clock with an APR badge every 6 hours, totaling 4 reports a day, plus an on-demand "poll → PR" badge.

### Key topic 26: Fleet-33-55-77 Terminals

Facts to teach:

- The Fleet Broadband terminal, a component of below deck equipment, stores configuration data and contains all user interfaces and LED indicators, while the radome above deck holds the antenna, RF and antenna-control electronics. [9-26C1]
- Polling and data reporting is not a function of an Inmarsat Fleet Broadband IP handset; that is an Inmarsat-C function. [9-26C2]
- The IP handset makes Voice over IP telephone calls and, through its menus, displays terminal status and changes terminal parameters. [9-26C2, 9-26C6]
- The IP handset uses TCP/IP to communicate with the terminal, and its telephone calls can be transmitted as circuit-switched calls. [9-26C6]
- The IP handset does not provide the terminal with Power over Ethernet (PoE); power flows the other way, from the terminal's LAN port to the handset. [9-26C6]
- Inmarsat BGAN (Broadband Global Area Network) Streaming Data service is an exclusive, high-priority connection ideal for time critical applications such as live video, while ordinary e-mail, file transfer and Internet traffic uses the shared Standard IP service. [9-26C3]
- The best way to test the Inmarsat Distress Alarm is to use service number 33 (technical assistance) to arrange a Distress Alarm test transmission with the LES in advance, because pressing the DISTRESS button sends a real alert to a rescue coordination center. [9-26C4]
- The correct Fax/Data configuration of a Fleet Broadband terminal is RJ11 Port 1 and 2 set to 3.1 kHz audio, which passes fax and modem tones unprocessed; standard voice would garble them, and the LAN ports carry IP data, not audio. [9-26C5]

Scene ideas: equipment card: a Fleet Broadband below-deck terminal with callouts appearing one by one for configuration storage, the user interface ports and LED indicators, RJ11 ports 1 and 2 set to 3.1 kHz audio for fax/data, and a LAN port sending Power over Ethernet out to the IP handset; comparison table: first the IP handset's functions (VoIP calls, circuit-switched calls, TCP/IP link to the terminal, status display, changing parameters) versus non-functions (polling and data reporting, powering the terminal), then BGAN Streaming (exclusive, high-priority, time critical) versus Standard IP (shared, for e-mail, files and web); block diagram: ship → service number 33 → LES arranges the test in advance → test distress alert sent and expected, beside a warning box "don't just press DISTRESS".

### Key topic 27: Fleet Broadband Terminals

Facts to teach:

- A PC connected to the LAN interface of an Inmarsat terminal uses the TCP/IP protocol; SMTP and FTP ride on top of TCP/IP, and ISDN is a separate interface with its own port. [9-27C1]
- The LAN (Ethernet) port of a Fleet Broadband terminal provides IP connectivity for terminal configuration and troubleshooting, Internet browsing with a computer, and a Voice Over IP (VOIP) telephone handset. [9-27C3]
- Connecting an ISDN telephone handset is not a function of the LAN port; ISDN handsets plug into the terminal's dedicated ISDN port. [9-27C3]
- Thrane & Thrane F250 & F500 facsimile operation is configured as Group 3 fax via the 3.1 kHz audio channel for analog fax applications; the standard voice channel's compressed codec distorts fax tones, and there is no Group 5 or 5.1 kHz channel. [9-27C4]
- For standard voice telephone operation on the Thrane & Thrane F500, set RJ11 Port 1 and 2 to standard voice, the compressed speech service that costs less than 3.1 kHz audio. [9-27C5]
- A SIM (Subscriber Identity Module) is an integrated circuit device that securely stores the Inmarsat identity and an authentication key, which the network uses to verify the terminal. [9-27C6]
- A PUK (PIN Unlock Key) is used to unlock the SIM card in a Fleet Broadband terminal after too many wrong PIN (Personal Identification Number) entries; the airtime provider supplies it. [9-27C2]

Scene ideas: equipment card: a Thrane & Thrane F500 rear panel with callouts in turn for the SIM slot (identity and authentication key, PIN, then PUK if locked), RJ11 ports 1 and 2, the ISDN port with an ISDN handset, and the LAN ports with a PC on TCP/IP, web configuration and a VoIP handset; comparison table: standard voice (ordinary phones on RJ11, compressed codec, lower cost) versus 3.1 kHz audio (Group 3 analog fax and modems, tones passed unprocessed), with "Group 5 / 5.1 kHz" struck out.

### Key topic 28: GPS

Facts to teach:

- The usual GPS arrangement is 24 satellites in 6 orbital planes, 4 satellites in each plane, at 20,200 km altitude and 55 degrees inclination, so at least four are in view anywhere on Earth. [9-28C1]
- At least four satellites must be received to provide the highest accuracy, because the receiver solves for four unknowns: latitude, longitude, altitude and its own clock error. [9-28C6]
- The L1 carrier of 1575.42 MHz carries the navigation message and the SPS (Standard Positioning Service) code signals. [9-28C5]
- The L2 carrier of 1227.60 MHz is used to measure the ionospheric delay: the delay depends on frequency, so comparing the L1 and L2 arrival times lets a dual-frequency receiver remove it. [9-28C4, 9-28C5]
- The two GPS carriers are transmitted separately, not combined in a mixer, and 1650.5 MHz is not a GPS frequency. [9-28C5]
- Differential GPS corrects for various errors using a fixed receiving station at a precisely surveyed point, which transmits corrections via radio signals; marine systems use MF radiobeacons in the 285–325 kHz band. [9-28C2]
- GPS is usually interconnected with other bridge equipment through a NMEA-0183 or NMEA-2000 LAN, sharing position, speed and time with radars, DSC radios, ECDIS and autopilots. [9-28C3]

Scene ideas: equipment card: the GPS constellation around Earth with callouts for 24 satellites, 6 orbital planes, 4 per plane, 20,200 km altitude and 55 degrees inclination, then four range lines from satellites to a ship labeled latitude, longitude, altitude and clock error; frequency band strip: L2 at 1227.60 MHz (ionospheric delay) and L1 at 1575.42 MHz (navigation message and SPS code) on an L-band strip, with 1650.5 MHz crossed out; block diagram: DGPS reference station at a surveyed point → radio corrections → ship's GPS → NMEA-0183 or NMEA-2000 → radar, DSC radio, ECDIS and autopilot.

### Key topic 29: Antenna Systems

Facts to teach:

- The polarization of a satellite signal is the orientation of the RF signal's electric field component, not its magnetic field. [9-29C1]
- On a parabolic dish antenna the feedhorn is adjusted to the focal point, where the reflector focuses the energy; dishes give high gain and narrow beams at microwave frequencies, not at HF. [9-29C2]
- In a phased array antenna system, the RF from multiple antennas is varied in phase (and often amplitude) to produce a desired radiation pattern, steering the beam electronically without moving the antenna. [9-29C3]
- An Inmarsat-C antenna is RHC (right-hand circular) polarized with an omni-directional radiation pattern, so the small fixed antenna sees the satellite on any heading and as the ship rolls. [9-29C4]
- Best practice is to install Inmarsat satellite antennas as high as practical, free from shadowing of structures such as masts and funnels, and clear of other antennas and radar beams. [9-29C5]
- An Inmarsat Fleet Broadband RADOME typically includes a stabilized antenna, an RF unit, an Antenna Control Unit and a GPS antenna. [9-29C6]

Scene ideas: equipment card: a parabolic dish with incoming rays converging on the feedhorn at the focal point, tagged high gain and narrow beam; block diagram: a phased array of several antenna elements, each fed through its own phase shift, with the combined beam swinging across the sky as the phases change; equipment card: a ship's mast with the Inmarsat-C antenna mounted high and clear of shadowing (callout for RHC polarization and an omni-directional pattern, with a rotating electric-field arrow) beside a Fleet Broadband radome cutaway showing the stabilized antenna, RF unit, Antenna Control Unit and GPS antenna.

### Key topic 30: Equipment Faults and troubleshooting-1

Facts to teach:

- Using a "null" MODEM cable to connect the DTE (data terminal equipment) prevents communications with an Inmarsat-C data port: the port is wired as DCE (data communications equipment) and needs a straight-through EIA-232 cable, while a null-modem cable crosses the transmit and receive lines. [9-30C1]
- Stop bit and parity settings do not prevent communication; they are ordinary settings that just need to match at both ends. [9-30C1]
- A LES/RCC (Rescue Coordination Centre) can tell an Inmarsat-C Distress Alert is a TEST transmission because a flag in the message is set to identify it as a test alert, so no rescue response starts. [9-30C2]
- The "ACB" Inmarsat-C Non-Delivery Notification (NDN) failure code means access to the Inmarsat system has been barred. [9-30C3]
- A communication failure between the second receiver (RX2) and the Antenna Control Unit (ACU) in an Inmarsat Fleet 77 terminal shows as the message "RX2 Comm error" or "ACU Comm error"; locking onto the NCSC channel or receiving a valid frame are signs of normal operation. [9-30C4]
- Fleet 77/55 systems can get interference from transmitters operating in the 3-30 MHz range and shipboard RADARS in close proximity; EPIRBs, SARTs and survival craft radios are low power and seldom transmit. [9-30C5]
- If a connection to the Inmarsat MPDS (Mobile Packet Data Service) network fails, "00F0h" or "00F1h" is displayed, meaning the terminal is not registered to the MPDS network. [9-30C6]

Scene ideas: block diagram: Inmarsat-C data port (DCE) → straight-through EIA-232 cable → DTE with data flowing, then the cable swapped for a null-modem cable that crosses transmit and receive so neither end hears the other; comparison table: message or code against its meaning, with test flag set → test alert, ACB → access barred, "RX2 Comm error" or "ACU Comm error" → RX2 to ACU link failure, and 00F0h or 00F1h → not registered to MPDS; equipment card: a ship's mast with a Fleet 77 antenna close to an HF transmitting antenna (3-30 MHz) and a radar scanner, with interference arrows striking the Fleet antenna.

### Key topic 31: Equipment Faults and troubleshooting-2

Facts to teach:

- When an Inmarsat-C terminal shows a "No Receive Signal" alarm and there is no voltage on the antenna center pin, the most likely cause is a blown antenna power fuse in the above deck equipment, since the antenna's DC supply travels on the coax center conductor; a bad LNA would still leave the voltage present. [9-31C1]
- If an Inmarsat-C terminal will not LOG IN, but does log in with a test antenna cable and a new ADE (above deck equipment) in view of the satellite, the original ADE is at fault: install a replacement ADE. [9-31C2]
- Inmarsat-C antennas are fixed omni-directional units with no AZ (azimuth) or EL (elevation) motors to replace. [9-31C2]
- If an Inmarsat-C terminal will not LOG IN and shows an "Antenna not connected" alarm, short one end of the coax cable and measure resistance at the other; if it is above one ohm, replace the cable. [9-31C3]
- If the antenna goes past the AZ EL of the satellite but does not initialize, yet manual pointing acquires the signal, the most likely problem is a faulty antenna control module, since the motors and RF path clearly work. [9-31C4]
- If the antenna creeps up and down after initialization, check the EL step motor with power off and replace it if it is stiff; up-and-down creep is an elevation problem, not azimuth. [9-31C5]
- If the antenna tries to initialize, then points straight up and stops, the most likely problem is a defective level platform sensor, which gives the controller its horizontal reference. [9-31C6]

Scene ideas: comparison table: symptom → most likely cause → action for all six cases, from "No Receive Signal" with no center-pin voltage to "points straight up and stops"; equipment card: a stabilized tracking antenna with callouts for the EL step motor (creeps up and down), the level platform sensor (points straight up and stops) and the antenna control module (passes the satellite but won't initialize); block diagram: the ADE swap test, terminal → test cable → new ADE in view of the satellite → LOG IN succeeds → replace the original ADE, then the coax check with one end shorted, an ohmmeter at the other and "above one ohm → replace the cable".

### Key topic 32: Equipment Faults and troubleshooting-3

Facts to teach:

- If an Inmarsat Fleet Broadband antenna continuously changes azimuth after initialization, use the Web interface to check the event log, which shows the cause before any parts are replaced. [9-32C1]
- If an Inmarsat-C terminal fails to power up while AC voltage is present at the input terminals of the power supply, the cause is a component failure within the power supply itself. [9-32C2]
- An IP connection failure between a technician's laptop and a Fleet Broadband terminal results if the Ethernet cable is connected to the terminal's ISDN port, which has the same style RJ-45 connector but carries ISDN, not Ethernet. [9-32C3]
- A connection failure also results if the wrong IP address is entered as the URL in the web browser, so the browser cannot find the terminal's built-in web server. [9-32C4]
- To resolve interference induced from nearby HF transmitters, install ferrite clamps on the coax cable to suppress induced RF on the shield without affecting the L-band signal inside; a longer ground lead would make it worse. [9-32C5]
- A Fleet Broadband terminal's observed bit rate drops when a standard IP satellite channel is "busy" with many active users, because Standard IP throughput is shared among everyone using the channel. [9-32C6]

Scene ideas: equipment card: a Fleet Broadband terminal rear panel with a laptop cable moving from the ISDN port (no link) to a LAN port, a browser address bar showing the terminal's IP address and its event log page, and ferrite clamps snapping onto the antenna coax; comparison table: symptom → cause or action for all six cases; block diagram: one Standard IP channel in a spot beam divided among many ships, each slice shrinking as more users join, showing the lower bit rate.

## Lesson 9-D: Other GMDSS Equipment

Element 9 · Subelement D · Key topics 33–36

**Goal:** Identify, test and maintain a ship's EPIRB, SART, survival craft VHF and NAVTEX receiver, knowing their frequencies, signals, minimum performance figures and replacement intervals.

**Visual style:** Equipment cards carry the lesson: each device (EPIRB, SART, survival craft VHF, NAVTEX receiver) is drawn once and its callouts appear one by one as the facts are taught. A recurring row of timeline / interval badges collects the maintenance numbers (battery 5 years or after use, release mechanism 2 years) and is completed at the end of the survival craft topic. The radar PPI showing the SART 12-dot line is the centerpiece, supported by a waveform of the SART sweep, a formula reveal for the dot spacing and frequency band strips for the VHF and NAVTEX frequencies.

**Narration style:** A friendly, plain-spoken instructor with short sentences and an unhurried pace, pausing just before each number the exam tests. Spell out every acronym the first time: EPIRB (Emergency Position Indicating Radio Beacon), COSPAS-SARSAT (the international search and rescue satellite system), LUT (Local User Terminal), SAR (search and rescue), SART (Search And Rescue RADAR Transponder), ARM (automatic release mechanism), VHF (very high frequency), DSC (digital selective calling), ERP (effective radiated power) and FEC (forward error correction), and say NAVTEX as "nav-tex". Say units in words (megahertz, gigahertz, kilohertz, microseconds, nautical miles, microvolts, watt, milliseconds), read "Ch-16" as "channel sixteen", and stress 5 years or after use, 2 years, 406 megahertz, 121.5 megahertz, 12 dots, 0.4 and 7.5 microseconds, 0.64 nautical miles, 9 gigahertz, 0.25 watt, 2.0 microvolts and 518 kilohertz.

### Key topic 33: EPIRB

Facts to teach:

- COSPAS-SARSAT satellites do not provide follow-on SAR communications after an EPIRB is located; they are one-way relays, and rescuers use other radio and satellite links for that. [9-33D1]
- What the satellites do: EPIRB information is time-tagged and transmitted to any Local User Terminal in the satellite's view, the Doppler shift of the EPIRB signal is measured and the EPIRB's position is calculated, and the relayed message includes the EPIRB ID number, used to retrieve vessel information from the shore database. [9-33D1]
- The magnet in the EPIRB mounting bracket prevents accidental operation of the EPIRB while it is secured in the bracket, by holding the beacon's magnetic switch in the safe state so spray or rain cannot trigger an alert; its job is safety, not holding the EPIRB in or activating the release. [9-33D2]
- The EPIRB battery must be replaced every 5 years or after use, because any use drains capacity needed for a full 48 hours of transmission. [9-33D3]
- The automatic release mechanism (the hydrostatic release that frees the EPIRB a few meters underwater) must be replaced every 2 years, so it is sure to work if the ship sinks. [9-33D5]
- A 406 MHz satellite EPIRB normally has a 5-watt 406-MHz alert beacon, an Automatic Hydrostatic Release (ARM) and a strobe light; the alert beacon is 5 watts, not 1 watt. [9-33D6]
- Its 121.5 MHz signal is a low-power emergency homing transmitter, not a 5-watt beacon and not the alerting transmitter. [9-33D6, 9-33D4]
- A 406 MHz EPIRB's features include emergency transmission on 406.025 MHz, a 121.5 MHz emergency homing transmitter and a float-free release bracket, but no aural (audible) locator signal: searchers find it by radio homing and its flashing strobe light. [9-33D4]

Scene ideas: equipment card: a 406 MHz EPIRB seated in its float-free bracket, with callouts appearing one by one for the 5-watt 406 MHz alert beacon (406.025 MHz), the 121.5 MHz homing transmitter, the strobe light, the Automatic Hydrostatic Release (ARM) and the bracket magnet holding the switch safe, ending on a crossed-out speaker icon for "no aural locator"; block diagram: EPIRB → COSPAS-SARSAT satellite (time-tags the signal and relays the EPIRB ID) → Local User Terminal (Doppler shift → position) → shore database lookup of the EPIRB ID, then a dashed "follow-on SAR communications" arrow from the satellite back to the ship that is struck out; timeline / interval badges: EPIRB battery "5 years or after use" and automatic release mechanism "2 years", starting the lesson's badge row.

### Key topic 34: SART

Facts to teach:

- A SART (Search And Rescue RADAR Transponder) operates in the 9 GHz band, answering 3 cm X-band radars at about 9.2–9.5 GHz; it does not answer 3 GHz S-band radars, and 406 MHz is the EPIRB frequency. [9-34D2]
- After being activated, the SART waits in standby and responds only to RADAR interrogation; it does not start radiating the moment it is switched on, and no operator keys it. [9-34D3]
- On the searching radar's display, the SART signal appears as a series of 12 equally spaced dots extending outward from the SART's position along its bearing, not dashes or spirals; very close in, the dots become arcs and then circles. [9-34D1]
- When interrogated, the SART starts with a sweep of 0.4 µs across the entire 3 cm radar band, followed by a returning sweep of 7.5 µs back to the beginning, for a total of 12 sweeps. [9-34D5]
- Each slow 7.5 µs sweep passes through the searching radar's frequency once, painting one of the 12 dots. [9-34D5]
- Dot spacing is one sweep cycle divided by the radar mile: d = (7.5 µs + 0.4 µs) ÷ 12.34 µs/nm = 7.9 µs ÷ 12.34 µs/nm ≈ 0.64 nm. [9-34D6]
- The spacing is the same at any range, so at a distance of 5 miles the dots are approximately 0.64 nm apart. [9-34D6]
- The SART battery must be replaced every 5 years or after being used, because it must still provide 96 hours of standby followed by 8 hours of transmission. [9-34D4]

Scene ideas: radar PPI: an X-band sweep rotates past a liferaft, the SART switches from standby to reply on the first hit, and 12 equally spaced dots paint outward from its position along its bearing, then a VRM marks 0.64 nm between two dots and, as own ship closes in, the dots curve into arcs and then circles; waveform: SART frequency against time across the 9.2–9.5 GHz band, a fast 0.4 µs sweep followed by a slow 7.5 µs returning sweep, counted up to 12, with the searching radar's frequency drawn as a horizontal line that each 7.5 µs sweep crosses to make one dot; formula reveal: d = (7.5 µs + 0.4 µs) ÷ 12.34 µs/nm = 7.9 µs ÷ 12.34 µs/nm ≈ 0.64 nm, boxed, with a "same at 5 miles" tag.

### Key topic 35: Survival Craft Transceiver

Facts to teach:

- The Survival Craft Transceiver battery must be changed every 5 years or after use for distress communications, because it must still deliver 8 hours of operation when needed. [9-35D1]
- The minimum receiver sensitivity required for a Survival Craft Transceiver is 2.0 microvolts, enough for the short ranges these handheld radios work over. [9-35D2]
- The minimum required effective radiated power is 0.25 watt, adequate for short-range on-scene communication and easy on the battery; the requirement is not 1 watt. [9-35D3, 9-35D5, 9-35D6]
- Survival craft radiotelephone equipment under GMDSS must operate on Ch-16 (156.8 MHz), the voice distress and calling channel, plus at least one other channel. [9-35D4, 9-35D5]
- Ch-70 is used only for DSC, not simplex voice, so "operates simplex on Ch-70" is not a survival craft VHF requirement; 121.5 MHz is aeronautical and 457.525 MHz is an on-board UHF frequency. [9-35D4, 9-35D5]
- Survival craft portable two-way VHF equipment must be watertight to a depth of 1 meter for 5 minutes. [9-35D5]
- Its antenna is fixed and non-removable (permanently affixed). [9-35D5]
- In short, the required characteristics are operation on Ch-16, watertight construction and a permanently-affixed antenna. [9-35D6]

Scene ideas: equipment card: a handheld survival craft VHF with callouts appearing one by one for the permanently affixed, non-removable antenna, watertight to 1 meter for 5 minutes, Ch-16 plus at least one other channel, at least 0.25 watt ERP and receiver sensitivity 2.0 microvolts; frequency band strip: a strip from 100 to 500 MHz with Ch-16 at 156.8 MHz lit as required, Ch-70 tagged "DSC only, no voice", 121.5 MHz tagged "aeronautical" and 457.525 MHz tagged "on-board UHF", the last three greyed out; timeline / interval badges: the completed badge row, EPIRB battery, SART battery and survival craft VHF battery each "5 years or after use", with the EPIRB automatic release mechanism "2 years" set apart.

### Key topic 36: Navtex

Facts to teach:

- 518 kHz is the primary frequency used exclusively for NAVTEX broadcasts internationally, carrying English-language broadcasts worldwide. [9-36D1]
- 490 kHz serves national or local-language NAVTEX, 4209.5 kHz is the HF NAVTEX frequency, and 2187.5 kHz is an MF DSC distress channel, not NAVTEX. [9-36D1]
- NAVTEX broadcasts are sent in categories of messages indicated by a single letter or identifier, going out in each station's scheduled time slots rather than on request. [9-36D6]
- To program a NAVTEX receiver to reject certain messages, choose the message category's single letter (A–Z) identifier and then deselect or deactivate it. [9-36D3]
- Navigational warnings, meteorological warnings and search and rescue information cannot be turned off. [9-36D3, 9-36D4]
- The receiver can be programmed to reject certain stations and message categories; each transmitting station is identified by a single letter, not a two-digit number or a SELCALL. [9-36D4, 9-36D3]
- NAVTEX accuracy is ensured by sending each character twice with a time interval (collective FEC, the repeat following about 280 ms later), so the receiver uses whichever copy arrives correctly. [9-36D5]
- If a NAVTEX powers on and works normally with correct station settings but no new messages arrive for an extended period, the most likely source is a defective RF amplifier at the antenna base, which is powered through the coax. [9-36D2]

Scene ideas: frequency band strip: 490 kHz (national, local language), 518 kHz (international, English, highlighted), 2187.5 kHz (MF DSC distress, tagged "not NAVTEX") and 4209.5 kHz (HF NAVTEX) placed along an MF/HF strip; equipment card: a NAVTEX receiver and its active antenna, with callouts for the RF amplifier at the antenna base fed through the coax (the "no new messages" fault), the station-letter and A–Z message-category selection menu, and padlocked categories for navigational warnings, meteorological warnings and search and rescue information; waveform: a pulse train sending each character twice with a time interval of about 280 milliseconds, then a noise burst wiping out one copy while the receiver keeps the clean one.

## Lesson 9-E: Power Sources

Element 9 · Subelement E · Key topics 37–40

**Goal:** Explain how GMDSS batteries, battery chargers and the reserve source of energy work and are cared for, and how linear and switching power supplies, their filters and their protection circuits behave.

**Visual style:** Equipment cards for battery cells, the hydrometer and the GMDSS console voltmeter, with comparison tables for cell voltages, filter types and switcher pros and cons. Block diagrams carry the charger modes and the switching supply chain, and a formula reveal works the buck converter; a recurring battery-bank icon of 12 cells stands for the 24 volt GMDSS battery.

**Narration style:** Friendly, plain-spoken instructor, short sentences, steady pace. Spell out NICAD (nickel-cadmium), GMDSS (Global Maritime Distress and Safety System), RF (radio frequency), AF (audio frequency) and RFI (radio-frequency interference) the first time, and say units and symbols in words: volts, hertz, "V sub out". Stress the tested numbers: 1.2 volts, 2.1 volts, specific gravity 1.280, a constant 30 volts, ripple at twice the input frequency, and 10 volts in, 5 volts out at a 50 percent duty cycle.

### Key topic 37: Batteries

Facts to teach:

- Each NICAD (nickel-cadmium) battery cell has a normal voltage of 1.2 volts; 1.5 volts belongs to dry cells. [9-37E1]
- Each lead acid battery cell has a normal voltage of 2.1 volts, so a 12 volt battery has six cells (6 × 2.1 = 12.6 V) and a 24 volt GMDSS bank has twelve. [9-37E6]
- The normal specific gravity of a fully charged lead acid cell is 1.280, and the electrolyte is measured with a hydrometer, not a voltmeter. [9-37E4]
- Higher temperature results in a lower specific gravity reading, because warm electrolyte expands and becomes less dense even though the state of charge is unchanged. [9-37E2]
- When discharging the battery, if one cell becomes weaker than the remaining cells, their discharge current effectively charges the weaker cell in reverse polarity. [9-37E3]
- Gel cell batteries are typically sealed (lead acid with the electrolyte held as a gel), so special charging rates and voltages may be required. [9-37E5]

Scene ideas: comparison table: NICAD cell 1.2 volts, lead acid cell 2.1 volts, dry cell 1.5 volts, with six lead acid cells making 12.6 V; equipment card: hydrometer drawing electrolyte from a lead acid cell, float reading 1.280, with a callout that warmer electrolyte reads lower; block diagram: a string of cells discharging into a load, with the current through the weak cell charging it in reverse polarity.

### Key topic 38: Battery Chargers and Power Sources

Facts to teach:

- The "Reserve Source of Energy" is power to operate the radio installation and conduct Distress and Safety communications if the ship's main and emergency sources of electrical power fail; it is not the emergency generator. [9-38E4]
- The modes of a GMDSS compliant battery charger/supply are Charging, Change-over (switching the radio load to the battery when ship's power fails) and Parallel (charger and battery feeding the load together); float and trickle are charge rates, not these modes. [9-38E2]
- With a standard lead acid battery and a fully automatic GMDSS compliant charger, high charging is used once a week until the battery reaches the gassing range, which brings every cell to an equal full charge. [9-38E1]
- The automatic charger interrupts the high charging process to inhibit the generation of electrolytic gas, then switches to float. [9-38E5]
- The high (Full) charging mode must be disabled during setup for maintenance free lead acid gel type batteries, because sealed gel cells cannot vent gas or have water added. [9-38E6]
- On a 24 VDC GMDSS station, a constant 30 volt reading on the console voltmeter indicates a malfunction: 30 ÷ 12 = 2.5 volts per cell, so the charger is stuck in high charge and overcharging the battery. [9-38E3]
- After testing the station on battery power, a brief high voltage reading or a high charge current that then declines is normal, not a malfunction. [9-38E3]

Scene ideas: block diagram: ship's main and emergency power feeding the charger, reserve battery and radio installation, highlighting the Charging, Change-over and Parallel modes; timeline / interval badges: high charge once a week until the gassing range, then float, with gel type batteries marked "high charge disabled"; equipment card: GMDSS console voltmeter stuck at a constant 30 volts, flagged as a fault at 2.5 volts per cell.

### Key topic 39: Power Supplies-1

Facts to teach:

- In a standard full wave rectifier power supply the ripple frequency is twice the input frequency, so a 60 Hz input gives 120 Hz ripple. [9-39E1]
- Full wave rectifiers always use more than one diode, and a bridge rectifier needs no center tapped transformer secondary. [9-39E1]
- An inductive (choke) input filter gives good voltage regulation, high transformer utilization factor, low rectifier peak currents and relatively low output voltage. [9-39E2, 9-39E5]
- Capacitive input filters charge toward the peak voltage, giving higher output but poor voltage regulation and high rectifier peak currents. [9-39E6]
- The main advantages of a switcher type power supply are that the line voltage (not a transformed voltage) is directly rectified and filtered to produce a high dc voltage, components are much smaller and lighter weight, and it can provide much better efficiency. [9-39E3]
- The disadvantages of a switcher type power supply are increased complexity (more likelihood of a component failure), increased cost (many more parts) and a tendency to create radiated RF, not AF. [9-39E4]

Scene ideas: waveform: AC input and full wave rectified pulses, two per input cycle, 60 Hz in and 120 Hz ripple out; comparison table: inductive input vs capacitive input for voltage regulation, transformer utilization factor, rectifier peak currents and output voltage; comparison table: switcher advantages vs disadvantages.

### Key topic 40: Power Supplies-2

Facts to teach:

- The function of a crowbar circuit is to prevent an overvoltage condition from damaging circuitry by shorting the power supply output, which blows the fuse or trips the current limit. [9-40E1]
- The configuration of a mains operated switching power supply with output regulation is: input rectifier and filter, inverter (chopper), output transformer, output rectifier and filter to DC output, with a feedback loop from the output to a chopper controller and the inverter. [9-40E3]
- Switching power supply transformers use a ferrite core to reduce losses at high frequencies, not a laminated steel core. [9-40E4]
- The "BUCK" switching power supply steps voltage down in proportion to duty cycle: V<sub>out</sub> = duty cycle × V<sub>in</sub>. [9-40E5]
- Worked example at a 50% duty cycle: V<sub>out</sub> = 0.5 × 10 V = 5 V, so 10 volts in gives 5 volts out, and a buck output never exceeds its input. [9-40E5]
- "No RFI problems" is not an advantage of a switching power supply, since fast switching creates radio-frequency interference; its real advantages include working with a wide range of input voltages, working with direct current input and lighter weight than linear power supplies. [9-40E2]
- Switching mode power supply input current has high harmonic content and a low power factor, because it is drawn in short pulses near the AC peaks. [9-40E6]

Scene ideas: block diagram: input rectifier and filter, inverter (chopper), ferrite-core output transformer, output rectifier and filter to DC output, with the feedback loop to the chopper controller and inverter; formula reveal: V<sub>out</sub> = duty cycle × V<sub>in</sub> = 0.5 × 10 V = 5 V; waveform: pulse train at 50% duty cycle, then the spiky input current pulses with high harmonic content.

## Lesson 9-F: Other Equipment and Networks

Element 9 · Subelement F · Key topics 41–46

**Goal:** Troubleshoot shipboard computers and networks, and recall the key facts about NMEA 0183, NMEA 2000, depth finders, gyro compasses, SSAS, AIS, electronic chart systems, auto pilots and Vessel Data Recorders.

**Visual style:** Key-fact lists and equipment cards for computer troubleshooting, with block diagrams for the Ethernet star, the NMEA 0183 talker and listeners, the NMEA 2000 backbone and the auto pilot loop. Comparison tables contrast NMEA 0183 with NMEA 2000 and what the Vessel Data Recorder does and does not record, and a frequency band strip places the two AIS channels; a recurring cable-and-connector motif ties the networking topics together.

**Narration style:** Friendly, plain-spoken instructor, short sentences, brisk through the computer items and slower for the network numbers. Spell out each acronym the first time (BIOS, USB, NMEA, LEN, CAN, SSAS, AIS, GMSK, ECDIS, VDR, EGC, MSI) and say units and symbols in words: meters, volts, milliamps, kilohertz, microseconds, megahertz, "plus or minus". Stress the tested numbers (5 meters, 4 twisted pairs, plus or minus 15 volts, 9 to 16 volts, 1 LEN equals 50 milliamps, 6 meters, 200 to 400 kilohertz, 25 to 600 microseconds, 161.975 and 162.025 megahertz) and say "for the exam" before the two flagged answers.

### Key topic 41: Computers

Facts to teach:

- Defective graphics cards are not a likely reason a printer won't print, since the graphics card only drives the monitor; likely reasons are a frozen printer queue, no toner or ink, or a paper jam. [9-41F1]
- No display on the monitor most likely means a bad video card, a bad 15 pin video connector or no power to the monitor, not a CD-ROM drive or a fragmented hard drive. [9-41F2]
- The four main functions of the BIOS (basic input/output system) are P.O.S.T. (power-on self-test), the bootstrap loader, BIOS drivers and BIOS setup; printer drivers are loaded by the operating system, not the BIOS. [9-41F3]
- If power is on but the computer will not boot into the operating system, use the BIOS setup mode to check for proper BIOS settings, such as boot device order and drive detection. [9-41F4]
- To determine the type of disc drives in a Windows XP system, click Start, then Programs, Accessories and System Information. [9-41F5]
- When replacing a CD-ROM drive, the replacement drive should use the same interface system as the old drive (such as IDE/ATAPI, SATA or SCSI); its speed and data transfer rate need not match. [9-41F6]

Scene ideas: key-fact list: printer won't print (frozen queue, out of toner or ink, paper jam) vs no display (video card, 15 pin video connector, monitor power); block diagram: power on, P.O.S.T., bootstrap loader, BIOS drivers, operating system, with BIOS setup branching off; equipment card: CD-ROM drive with its interface connector highlighted.

### Key topic 42: Computer Networks – Ethernet

Facts to teach:

- Ethernet nodes are interconnected in a star, each by a cable making a "home run" back to the central hub. [9-42F1]
- In an Ethernet network, the available bandwidth is shared between all nodes within the same collision domain, because only one of them can transmit at a time. [9-42F6]
- 10Base-T and 100Base-TX systems generally use CAT-5 cable with 4 twisted pairs, not coax or fiber optic. [9-42F3]
- The maximum length of a USB (Universal Serial Bus) 2.0 cable between two hubs, or between a hub and a peripheral, is 5 meters. [9-42F2]
- The initial steps when installing a router are to open a web browser, enter the router's address for network admin, and enter the username and password; no internet download is needed. [9-42F4]
- For the exam, the most commonly used router IP addresses are keyed as 192.168.1.1, 192.168.0.1 and 192.168.2.0 (192.168.2.0 is normally a network address and the usual default is 192.168.2.1; see the flag note). [9-42F5]

Scene ideas: block diagram: star network with a home-run cable from each node to the central hub, all inside one shared collision domain; equipment card: CAT-5 cable cut away to show 4 twisted pairs, plus a USB 2.0 cable tagged 5 meters; key-fact list: router setup steps and the addresses 192.168.1.1, 192.168.0.1 and 192.168.2.0, marked "for the exam".

### Key topic 43: Local Area Networks- NMEA-0183

Facts to teach:

- NMEA (National Marine Electronics Association) 0183 uses serial data communication, sending its sentences one bit at a time, not parallel, CAN bus or Ethernet. [9-43F4]
- The current and most recent version of NMEA 0183 uses the RS422 standard for data communications. [9-43F3]
- An NMEA 0183 unit must be capable of handling a maximum signal voltage range of ±15 volts without damage. [9-43F2]
- In an NMEA 0183 system opto-isolators must be used, and the cable shield should be grounded to the talker chassis only, which prevents ground loops. [9-43F5]
- An important difference between NMEA 0183 and NMEA 2000 is single talker vs multi-talkers: NMEA 0183 allows only one talker per line. [9-43F6]
- HyperTerminal is a typical PC program used widely for logging and troubleshooting NMEA 0183 data. [9-43F1]

Scene ideas: block diagram: one talker driving several opto-isolated listeners over a shielded serial line, shield grounded at the talker chassis only; comparison table: NMEA 0183 (serial, RS422, single talker) vs NMEA 2000 (multi-talkers); equipment card: PC running HyperTerminal showing incoming NMEA 0183 sentences, with a ±15 volts input badge.

### Key topic 44: Local Area Networks- NMEA-2000

Facts to teach:

- The voltage of the NMEA 2000 backbone power supply pair must be maintained within 9 to 16 volts. [9-44F1]
- NMEA 2000 certified devices state their current requirements in LENs (Load Equivalency Numbers), and 1 LEN is equal to 50 mA, so a 3 LEN device draws up to 150 mA. [9-44F2]
- For the exam, the NMEA 2000 backbone operating speed is keyed as 250 bps (the real rate is 250 kbit/s; see the flag note). [9-44F4]
- NMEA 2000 networks are built from backbone cables, tees, drop cables, power cables and terminating resistors; multiplexers, combiners and routers are not NMEA 2000 components. [9-44F3]
- The maximum length for a drop cable to a single NMEA 2000 device is 6 meters. [9-44F6]
- NMEA 2000 is a CAN (Controller Area Network) bus, so viewing NMEA 2000 data requires a gateway that translates its messages for the viewing equipment. [9-44F5]

Scene ideas: block diagram: NMEA 2000 backbone with tees, drop cables (6 meters max), a power cable and a terminating resistor at each end, plus a gateway out to a PC; formula reveal: 1 LEN = 50 mA, so 3 LEN × 50 mA = 150 mA; key-fact list: 9 to 16 volts, 1 LEN = 50 mA, 250 bps marked "for the exam", 6 meter drop.

### Key topic 45: Depth Finders, Gyro Compass, SSAS, AIS

Facts to teach:

- Depth finding equipment commonly uses frequencies of 200-400 kHz. [9-45F1]
- Depth finding equipment commonly uses pulse widths of 25 to 600 microseconds: short pulses for fine resolution in shallow water, longer pulses for deeper soundings. [9-45F2]
- The "carbon pile" on an older gyro compass provides voltage regulation, acting as a variable resistor. [9-45F3]
- The fiber-optic gyro compass uses three fiber-optic coils and a dual-axis electronic level sensor to determine the direction of true north, with no spinning rotor. [9-45F4]
- The Ship Security Alert System (SSAS) operates by sending a covert alert to specific addresses via the Inmarsat-C terminal, not an all ships alert on VHF-DSC or MF-HF. [9-45F5]
- AIS (Automatic Identification System) units use VHF channels 87B (161.975 MHz) and 88B (162.025 MHz) and 9.6 kbs GMSK (Gaussian minimum shift keying) modulation. [9-45F6]

Scene ideas: frequency band strip: AIS channels 87B at 161.975 MHz and 88B at 162.025 MHz, with a 9.6 kbs GMSK badge; waveform: depth finder pulse train at 200-400 kHz with pulse widths from 25 to 600 microseconds; equipment card: fiber-optic gyro compass with its three coils and dual-axis level sensor, beside an older gyro with its carbon pile voltage regulator.

### Key topic 46: ECDIS – Auto Pilots – Data Recorders

Facts to teach:

- Before using C-Map charts for an Electronic Chart System, license information must be entered for each computer being used, not just in a master terminal. [9-46F1]
- Electronic Chart System data inputs include position, speed, depth and radar, but not SSAS, so the list "Radar, SSAS and Position" is incorrect. [9-46F2]
- The rudder feedback unit is a necessary component of an auto pilot, reporting the actual rudder angle; GPS is only a useful extra. [9-46F3]
- The inputs normally required for an auto pilot are course information and rudder feedback. [9-46F4]
- The Vessel Data Recorder (VDR) records items such as date, time, position, speed, heading, depth of water, radar, audio from the bridge and VHF radio communications, but not EGC (Enhanced Group Call) data. [9-46F5]
- MSI (Maritime Safety Information) is not a Vessel Data Recorder input, while rudder feedback, depth of water and radar may be. [9-46F6]
- In a Vessel Data Recorder, the "Crash Survivable Module" (CSM) retains data for up to 12 hours, and the "Data Acquisition Unit" (DAU) may have data storage for as long as 30 days. [9-46F6]

Scene ideas: block diagram: auto pilot loop from course information to the steering gear, with the rudder feedback unit closing the loop; comparison table: recorded by the VDR (date, time, position, speed, heading, depth, radar, bridge audio, VHF) vs not recorded (EGC data, MSI); equipment card: VDR with callouts for the CSM (up to 12 hours) and DAU (up to 30 days).

## Lesson 9-G: Inspections, Installations and Instruments

Element 9 · Subelement G · Key topics 47–50

**Goal:** Install GMDSS equipment correctly, carry out and record the annual GMDSS ship station inspection, and choose, set up and read the test instruments a maintainer uses.

**Visual style:** Equipment cards show the installation details (grounding strap, antenna spacing, transducer placement) and each test instrument with its callouts. Key-fact lists cover the annual inspection checklist, a formula reveal works the multimeter tolerance example, and waveform scenes show function generator outputs and a spectrum analyzer display; a recurring ship-profile outline marks where each installed item sits.

**Narration style:** Friendly, plain-spoken instructor, short sentences, calm pace, slowing down for the multimeter calculations. Spell out acronyms the first time (GMDSS, VHF, VSWR, RF, SINAD, LED, FM) and say units and symbols in words: meters, microvolts, megohms, picofarads, hertz, decibels, "plus or minus". Stress the tested numbers (8 meters, channels 6, 13 and 16, 4.99 to 5.01 volts, 0.1 microvolt, 10 megohms shunted by 12 picofarads, 1000 hertz) and say "for the exam" before the flagged 23.62 to 24.38 volt answer.

### Key topic 47: Equipment Installation

Facts to teach:

- The best method for grounding an Inmarsat-C terminal is a copper strap brazed to the steel terminal and the ship's steel hull, because a wide strap has low impedance, brazing won't loosen like a bolted joint, and aluminum on steel invites galvanic corrosion. [9-47G1]
- The most important consideration for installing a full-duplex VHF radiotelephone is maximum separation between the transmitting antenna and the duplex receiver antenna, so the transmitter does not desensitize the receiver. [9-47G2]
- The most important factor when locating depth finder transducers is an area not subject to cavitation, since air bubbles absorb and scatter the acoustic pulse. [9-47G3]
- Bridge equipment separation recommendations generally refer to the magnetic compass (the compass safe distance). [9-47G4]
- When installing an Inmarsat-C antenna, the minimum distance to other Inmarsat antennas is 8 meters. [9-47G5]
- After an Inmarsat-C system is fully installed, your Inmarsat Mobile Number must be entered in the terminal; a distress alert must never be sent as a test. [9-47G6]

Scene ideas: equipment card: Inmarsat-C terminal with a copper strap brazed to the ship's steel hull; equipment card: ship profile showing the Inmarsat-C antenna 8 meters from other Inmarsat antennas, the duplex VHF transmitting and receiving antennas far apart, the transducer clear of cavitation and the magnetic compass with its safe distance; key-fact list: after installation, enter the Inmarsat Mobile Number.

### Key topic 48: Annual Inspections

Facts to teach:

- Conducting a GMDSS ship station annual inspection requires a GMDSS Maintainer's License, not an operator's license. [9-48G1]
- After passing the annual inspection, the log entries must include certification by both the inspecting technician and the vessel's Master/owner that the inspection was successful. [9-48G2]
- The annual battery test is made with the battery off charge and the maximum required load: measure and record the maximum discharge current and voltage. [9-48G3]
- The easiest way to test the Inmarsat-C terminal for proper operation is to send a brief test message to your own terminal, which proves both transmit and receive. [9-48G4]
- After the station has successfully passed the survey, the vessel is issued a Cargo Ship Safety Certificate, which is separate from the Radio Station License. [9-48G5]
- Required annual VHF tests are power output and VSWR (voltage standing wave ratio) on Channels 6, 13 and 16, frequency tolerance, and operation from all required power sources; carrier deviation measurement is not required. [9-48G6]

Scene ideas: key-fact list: annual inspection checklist (GMDSS Maintainer's License, battery off charge at maximum required load, test message to your own Inmarsat-C terminal, VHF power output and VSWR on channels 6, 13 and 16, frequency tolerance, all power sources); equipment card: station log with two signature lines, inspecting technician and Master/owner, beside the Cargo Ship Safety Certificate.

### Key topic 49: Test Equipment-1

Facts to teach:

- Multimeter tolerance is a percentage of the reading plus a fixed number of counts of the last digit. [9-49G1, 9-49G2]
- On the 6 volt scale a 4 digit multi-meter resolves 0.001 V, and on the 60 volt scale it resolves 0.01 V, so 2 counts add 0.002 V or 0.02 V. [9-49G1, 9-49G2]
- Worked example, 0.15% and 2 counts on the 6 volt scale measuring a 5 volt DC source: Meter error = (0.15% × reading) + 2 counts = 0.0015 × 5 V + 2 × 0.001 V = 0.0075 + 0.002 = 0.0095 V ≈ 0.01 V, so expect 4.99 to 5.01 volts DC. [9-49G1]
- For the exam, the same meter on the 60 volt scale measuring a 24 volt DC source is keyed as 23.62 to 24.38 volts DC, which is 24 V ± 0.38 V (that window matches 1.5% plus 2 counts, 0.36 V + 0.02 V, not the 0.15% in the question; see the flag note). [9-49G2]
- The most important specification for an RF signal generator used at VHF frequencies is low signal leakage, so the receiver sees only the signal the attenuator setting indicates. [9-49G3]
- Good lab type signal generators for VHF measurements should be able to reduce their output to 0.1 microvolt. [9-49G4]
- The 10:1 attenuation probe for an oscilloscope presents a load of about 10 megohms shunted by 12 pF (a 9 MΩ probe resistor in series with the scope's 1 MΩ input). [9-49G5]
- In dual-trace oscilloscopes the "Mode" control selects either channel alone or a combination of both channels; input coupling and time base have their own controls. [9-49G6]

Scene ideas: formula reveal: Meter error = (0.15% × reading) + 2 counts = 0.0015 × 5 V + 2 × 0.001 V = 0.0095 V ≈ 0.01 V, answer boxed 4.99 to 5.01 volts DC; key-fact list: for the exam, 24 volts on the 60 volt scale reads 23.62 to 24.38 volts DC (24 V ± 0.38 V), marked as a flagged answer; equipment card: VHF signal generator (low signal leakage, down to 0.1 microvolt), 10:1 probe (about 10 megohms shunted by 12 pF) and the dual-trace scope Mode control.

### Key topic 50: Test Equipment-2

Facts to teach:

- Simple function generators usually provide sine waves, square waves and triangular waves. [9-50G1]
- The SINAD meter is a multi-range audio frequency voltmeter calibrated in decibels with a sharp internal 1000 Hz bandstop (notch) filter. [9-50G2]
- SINAD = (signal + noise + distortion) ÷ (noise + distortion); the bandstop filter removes the 1000 Hz test tone, and 12 dB SINAD is the usual sensitivity reference. [9-50G2]
- On a logic probe the red LED indicates a high state, the green LED a low state and the amber LED a pulse; the probe cannot identify a short, so "both red and green LEDs on indicate a short" is false. [9-50G3]
- An analog RF wattmeter gives its most accurate reading at the upper one third of the dial, because its accuracy is a percentage of full scale. [9-50G4]
- Example: on a 100 W scale with ±5% accuracy, the ±5 W error is about 6% of a 90 W reading but 25% of a 20 W reading. [9-50G4]
- The purpose of a deviation meter is to measure the carrier deviation in an FM (frequency modulation) transmitter. [9-50G5]
- The most likely reason to observe transmitter output with a spectrum analyzer is to measure spurious signals, which show up as separate spikes beside the carrier. [9-50G6]

Scene ideas: waveform: sine, square and triangular waves from a function generator, then a transmitter spectrum with spurious spikes beside the carrier; block diagram: SINAD meter, total audio in, sharp 1000 Hz bandstop filter removing the tone, noise and distortion left, ratio read in decibels; equipment card: logic probe with red high, green low and amber pulse LEDs, beside an analog RF wattmeter dial with the upper one third highlighted.
