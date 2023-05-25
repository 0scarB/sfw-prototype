# SFW Prototype
The SFW - "Simple Framwork" or "Safe for Work Framework", you choose - is a web framework, small enough to self-audit (i.e. read the source yourself).

## Example
TBD

## Motivation
TBD: Key points:
- long-lived, maintainable code
- lightweight dependency -> SFW does not depend on external libraries (except Typescript -> actual implementation may be in Javascript)
- auditable, copyable and easily modifiable/forkable code
- minimal infrastructure/tooling overhead -> small startup overhead for small projects

## Usage
TBD: Document API / link to API documentation

## Design
TBD: Key points:
- principles:
  - controlled side-effects and functional purity where possible
    - cycle: 
      1. initialize component state
      2. create virtual dom from component state
      3. use browser events to trigger a command
      4. recieve command and update state
      5. back to b.
  - modularity -> components
    - static stateless components for unchanging visual elements
    - dynamic stateless components for simple, changing visual elements
    - dynamic stateful components for complex, changing visual elements, relying on stateful logic

## Prototype
This repo is meant for R&D. If it turns out to be successful, we will rewrite (probably in Javascript instead of Typescript) and continue development in the main repo [sfw](https://github.com/0scarB/sfw)
