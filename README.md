# pi-charts

[![Tests](https://github.com/lancerael/pi-charts/workflows/Tests/badge.svg?branch=master)](https://github.com/lancerael/pi-charts/actions?query=workflow%3A%22Tests%22)
[![Coverage Status](https://coveralls.io/repos/github/lancerael/pi-charts/badge.svg?branch=master)](https://coveralls.io/github/lancerael/pi-charts?branch=master)
[![License](https://badgen.net/github/license/lancerael/pi-charts)](https://github.com/lancerael/pi-charts/blob/master/LICENSE)
[![TS-Standard - Typescript Standard Style Guide](https://badgen.net/badge/code%20style/ts-standard/blue?icon=typescript)](https://github.com/standard/ts-standard)

A charting library for visualization of complex data, to be used in any JavaScript based project.

## Overview

A simple API for the creation of SVG charts.
Responsive in any device, providing additional detail via hover/touch tooltips.

## Charts added so far

# Bar Chart

```
<div class="container"></div>
<script>
  window.onload = function () {
    const chart = new Chart({ container: '.container', randomData() }).addDefaults()
  }
</script>
```

## NPM / Yarn tasks

`lint`: Code formatting
`test`: Run simple unit tests
`build`: Build distributable
`start`: Run development server

## Work in progress

This is a very early alpha - expect many more chart variations and features in the first full release.