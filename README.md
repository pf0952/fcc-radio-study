# FCC Radio Study

Offline study app for the FCC commercial radio exams: Element 3 (GROL), Element 8 (ship radar) and Element 9 (GMDSS maintainer). Narrated lessons, practice exams built like the real thing, and all 1,200 pool questions with explanations. Windows 10/11.

## Get it

Download **[FCC-Radio-Study.exe](https://github.com/pf0952/fcc-radio-study/raw/main/FCC-Radio-Study.exe)** and run it. Nothing to install.

Your progress lives in a `FCC-Radio-Study-Data` folder next to the exe, so you can keep the whole thing on a USB stick. The exe isn't signed, so SmartScreen might complain: hit **More info → Run anyway**.

## Build it yourself

Needs Node, Rust and the Visual Studio C++ build tools.

```
npm ci
npx tauri build --no-bundle
```

The exe lands in `src-tauri/target/release/`.

## Heads up

The question pools are public domain (FCC, 2009, for Elements 3 and 8; U.S. Coast Guard, 2012, for Element 9). Check with your COLEM that they're still current before you test.
