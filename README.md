# FCC Radio Study

A free, offline study program for the FCC commercial radio operator license exams:

- **Element 3**: General Radiotelephone (GROL)
- **Element 8**: Ship Radar Techniques
- **Element 9**: GMDSS Radio Maintenance

It runs as a single portable `.exe` on Windows 10 and 11. Nothing to install, no account, no internet connection needed.

> **Status:** in development. The app skeleton, portable data folder, automated builds and the three parsed question pools are done. Lessons and practice exams are coming.

## What it does

- Narrated, animated lessons for every subelement, with pop-up checkpoint questions and an end-of-lesson section quiz
- Practice exams built like the real ones (one question from each key topic), in exam mode or study mode
- Results with weak-spot feedback by subelement, a missed-questions deck with spaced repetition, and quick drills
- A searchable browser for all 1,200 pool questions, formula and fact sheets, light and dark themes, full keyboard use

## Download and run

1. Open the [latest release](../../releases/latest) and download **FCC-Radio-Study.exe**.
2. Put it in any folder, for example on a USB stick, and double-click it.

On first launch the program creates a folder called `FCC-Radio-Study-Data` next to the `.exe` and keeps all your progress there, so the whole folder can move between computers. If that location isn't writable (for example under `C:\Program Files`), it uses `%APPDATA%\FCC-Radio-Study` instead. Settings shows which folder is in use.

The program needs the Microsoft Edge WebView2 runtime, which is already part of Windows 11 and up-to-date Windows 10. If the window doesn't open on an older Windows 10 PC, install the [WebView2 Evergreen runtime](https://developer.microsoft.com/microsoft-edge/webview2/) from Microsoft.

Windows SmartScreen may warn about an unrecognized app because the `.exe` isn't code-signed. Choose **More info**, then **Run anyway**.

## Build from source on Windows

### Prerequisites

Install these once, from PowerShell:

```powershell
# C++ build tools that Rust uses on Windows (choose "Desktop development with C++")
winget install --id Microsoft.VisualStudio.2022.BuildTools --override "--wait --passive --add Microsoft.VisualStudio.Workload.VCTools --includeRecommended"

# Rust (stable, MSVC toolchain)
winget install --id Rustlang.Rustup
rustup default stable

# Node.js LTS and Git
winget install --id OpenJS.NodeJS.LTS
winget install --id Git.Git
```

Close and reopen PowerShell after installing so the new tools are on your `PATH`. WebView2 is already installed on Windows 10 and 11.

### Build

```powershell
git clone https://github.com/pf0952/fcc-radio-study.git
cd fcc-radio-study
npm ci
npx tauri build --no-bundle
```

The portable program is `src-tauri\target\release\fcc-radio-study.exe`. The first build takes several minutes; later builds are faster.

To run it during development with live reload:

```powershell
npx tauri dev
```

To type-check the app and the build scripts:

```powershell
npm run check
```

To rebuild the question pool JSON from the official files in `content/source/pools/` (only needed if the pools or the parser change):

```powershell
npm run pools
```

### Automated builds

GitHub Actions ([.github/workflows/build.yml](.github/workflows/build.yml)) builds the portable `.exe` on every push and uploads it as a workflow artifact. Pushing a version tag such as `v1.0.0` also attaches the `.exe` to a GitHub Release:

```powershell
git tag v1.0.0
git push origin v1.0.0
```

## Project layout

| Path | What's there |
| --- | --- |
| `src/` | The app's interface (Svelte + TypeScript) |
| `src-tauri/` | The Windows program around it (Tauri 2, Rust): window and data folder |
| `content/elements.json` | Exam rules and pool sources for each element |
| `content/pools/` | All 1,200 questions as JSON, with answers, explanations and flagged-answer notes |
| `content/figures/` | Figure images the Element 3 and 8 questions refer to |
| `content/source/` | The official pool files, flagged-answer notes, and how the pools are checked |
| `scripts/` | `build-pools.ts`, which parses and validates the pools |
| `.github/workflows/` | The build that produces the portable `.exe` |

## License and sources

The program's code is released under the [MIT License](LICENSE).

The question pools are works of the U.S. government and are not subject to copyright in the United States:

- Element 3 pool: Federal Communications Commission, effective 25 June 2009
- Element 8 pool: Federal Communications Commission, approved 25 June 2009
- Element 9 pool: U.S. Coast Guard Navigation Center, September 2012

Before you sit an exam, confirm with your exam provider (COLEM) that these pools are still current.
