# Pool sources

`npm run pools` turns these files into `content/pools/element-{3,8,9}.json`. The generated JSON is committed, so building the app doesn't need these files.

| File | Pool | Downloaded from |
| --- | --- | --- |
| `pools/element-3.doc` | FCC Element 3, approved 25 June 2009 | https://www.fcc.gov/file/3799/download |
| `pools/element-8.doc` | FCC Element 8, approved 25 June 2009 | https://www.fcc.gov/file/3803/download |
| `pools/element-9.pdf` | USCG NAVCEN Element 9, September 2012 | https://www.navcen.uscg.gov/sites/default/files/pdf/GMDSS_QPool_Maintainer_EL_9Sept_2012.pdf |

The two FCC files are Word 97-2003 documents. `scripts/word-doc.ts` reads them directly, keeping symbols such as π and µ and subscripts such as X<sub>L</sub>, which plain text extraction loses.

## Checks

The build stops with a list of problems unless every element has the expected number of questions and key topics (`content/elements.json`), every key topic has 6 questions, every question has 4 choices, and every question has an answer from the pool's own answer key.

As a second check, every parsed question was compared with the FCC's PDF copies of the same pools posted on 6 March 2024 (including `Element 8 Question Pool updated 03062024.pdf`): all question text and every answer key entry match.

## Corrections

The official pools print a few choice letters as `C,` or `D` instead of `C.` / `D.`; the parser accepts those. One question label is misprinted and is fixed in `scripts/build-pools.ts` (`RELABEL`):

- Element 9: the fourth Navtex question (key topic 36) is printed as `34D4`; its answer key entry is `36D4`.

## Flagged answers

`flags.json` holds short notes for keyed answers that are questionable or wrong in the real world. The app shows the note next to the question; the keyed answer is still the one to give on the exam.

Element 3 key topic 59 (pulse modulation) was checked separately: all six keys (A, B, D, A, B, C) are the same in the 2009 file and the 2024 FCC PDF, and each is technically correct, so none is flagged.
