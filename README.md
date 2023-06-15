<h1 align="center">react-reading-panel 📖</h1> 

<div align="center">
Add accessibility reading panel to any website 
<br/><br/>
<a target="_blank" href="https://github.com/nitzano/react-reading-panel">Source Code</a> |
<a target="_blank" href="https://react-reading-panel-demo.vercel.app">Live Demo</a>
</div>


<br/>
<div align="center">

[![npm](https://img.shields.io/npm/v/react-reading-panel)](https://www.npmjs.com/package/react-reading-panel)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Repo stars](https://img.shields.io/github/stars/nitzano/react-reading-panel?style=flat)](https://github.com/nitzano/react-reading-panel/stargazers)
![npm](https://img.shields.io/npm/dw/react-reading-panel)

![Demo](https://github.com/nitzano/react-reading-panel/blob/bf4fe0dbdae44067d70b107a8d6863572ef6c90d/docs/demo.gif?raw=true)


</div>


# Main Features

1. Change font size
2. Change line spacing
3. Change letter spacing
4. Switch between light/dark colors
 
 More features are coming soon!

# Installation

```bash
npm install --save react-reading-panel
```
OR
```bash
yarn add react-reading-panel
```

# Usage

## Target by Id

```jsx
<ReadingPanel targetId="sample"></ReadingPanel>
<p id="sample">
    Text to be changes
</p>
```


## Target by class

```jsx
<ReadingPanel targetClass="sample"></ReadingPanel>
<p className="sample">
    Text to be changes
</p>
```


# Settings

| Name  | Description  | Default  | 
|---|---|---|
| `colorSetting` | light/dark default colors | see below |
| `defaultTheme` | default theme to start from |`light` |
| `fontSizeStep` | font size step size | 1 |
| `fontSizeUnits` | font size units | `px` |
| `letterSpacingDefaultSize` | letter spacing default size | `1px` |
| `letterSpacingUnit` |  letter spacing unit| `px` |
| `lineHeightDefaultSize` | line height default size | `1rem` |
| `lineHeightsStep` | line height step size | 1 |
| `lineHeightUnits` | line height units | `px` |


## Color Setting

| Name  | Description  | Default  | 
| --- | --- | --- |
| `bgLightColor` | light background color | `#ffffff` (white) | 
| `fgLightColor` | light foreground color | `#000000` (black) | 
| `fgDarkColor` | dark background color | `#ffffff` (white) | 
| `bgDarkColor` | dark foreground color | `#000000` (black) | 
