# Turpin A-Frame Tour

This repository contains the A-Frame implementation of the Turpin exhibit environment. It is intended as a lightweight, web-based presentation of the Turpin site that can be viewed in-browser, iterated on quickly, and reviewed by collaborators.

The project includes the core HTML files, interaction scripts, exhibit configuration files, and media assets needed to run the experience locally and online.

## Purpose

This repository is meant to support:

- development of the Turpin A-Frame environment
- placement of interpretive and geolocated exhibit elements such as signage, walls, graphics, and audio triggers
- review by project collaborators
- safe collaboration with additional contributors and interns

## Repository Structure

```text
/
├── index.html                  # main A-Frame exhibit
├── index-threejs.html          # alternate / experimental file
├── index_shader.html           # alternate / experimental file
├── audio-toggle.js
├── audio-toggle-button.js
├── README.md
├── .gitignore
│
├── exhibits/
│   ├── landscape/
│   └── village/
│
├── media/                      # source or supporting media files
├── narration/                  # narration audio used by the exhibit
├── docs/                       # project documentation

## How To Run the Site

As an A-Frame site, this application needs to be run from a server. Either upload it to a server and access it that way for production, or for local development, create a server in the project folder itself:

In Terminal:

cd path/to/turpin-a-frame-tour
python3 -m http.server 8080

Then open in your browser:

http://localhost:8080 