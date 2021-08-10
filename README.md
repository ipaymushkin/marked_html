# React Marked Html

## Demo

1) clone project
2) install dependencies
3) npm run start

## What

React Component for highlighting html

## Installation

Using npm:

```shell
npm i react-marked-html --save
```

Using yarn:

```shell
yarn add react-marked-html
```

## Properties

| Property | Type | Default Value | Required | Description |
| --- | --- | --- | --- | --- |
| `html` | html element or string |  | true | html string or html element |
| `rules` | array | | true | array of highlight rules |
| `columnCount` | number | 1 | false | the number of columns into which the document will be divided
| `onlyUniqColor` | boolean | true | false | determines whether more than one of the same color should be shown in a cell
| `colorBoxHeight` | number | 4 | false | defines the height of the color box in pixels
| `magnifier` | boolean | false | false | show a magnifying glass? true == show
| `magnifierHeight` | number | 100 | false | magnifier height in pixels
| `minBoxHeight` | number | 50 | false | min height of scroll box
| `scrollWidth` | number | 55 | false | width of scroll box

### "rules" property:

array of objects, each object has the following form

* backgroundColor - background color for finding element (any color format)
* color - text color for finding element (any color format)
* words - array of words

## Supported Rules:

* complete word match

Example:

```shell
{
  backgroundColor: "red",
  color: "rgb(0,216,40)",
  words: ["from", "for"],
}
```

* with wildcards (* or ?)

Examples:

```shell
{backgroundColor: "rgb(1,255,198)", words: ["lib*", "crea*"]}
{backgroundColor: "yellow", words: ["*chain", "*bility"]}
{backgroundColor: "gray", words: ["*ebpa*", "*commen*"]}
{backgroundColor: "black", words: ["re?ct", "mo?re"]}
```

## Example of Use

```shell
<MarkedHtml
    html={<your_html>}
    columnCount={5}
    onlyUniqColor={true}
    colorBoxHeight={4}
    magnifier={true}
    magnifierHeight={100}
    minBoxHeight={100}
    scrollWidth={100}
    rules={[
        {
            backgroundColor: "red",
            color: "rgb(0,216,40)",
            words: ["from", "for"],
        },
        {backgroundColor: "blue", words: ["learning"]},
        {backgroundColor: "rgb(1,255,198)", words: ["lib*", "crea*"]},
        {backgroundColor: "yellow", words: ["*chain", "*bility"]},
        {backgroundColor: "gray", words: ["*ebpa*", "*commen*"]},
        {backgroundColor: "black", words: ["re?ct", "mo?re"]},
    ]}
/>
```
