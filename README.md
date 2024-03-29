# pi-charts

[![Tests](https://github.com/lancerael/pi-charts/workflows/Tests/badge.svg?branch=master)](https://github.com/lancerael/pi-charts/actions?query=workflow%3A%22Tests%22)

A charting library for visualization of complex data, to be used in any JavaScript based project.

## Overview

A simple API for the creation of SVG charts.  It's a successor to d-theia, using functional rather than OOP - but is currently in early stages.
Responsive in any device, providing additional detail via hover/touch tooltips.

## Charts added so far

# Bar Chart

```
<div class="container"></div>
<script>
  window.onload = function () {
    const chart = new Chart({ container: '.container', ...randomData() }).addDefaults()
  }
</script>
```

## PNPM tasks

- `lint`: Code formatting
- `test`: Run unit tests
- `build`: Build distributable
- `dev`: Run development server

