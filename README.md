# random-oklab-color

Generate a random okLAB color.

## Installation

```bash
npm install --save random-oklab-color
```

## Usage

The `randomOKLABColor` function can be used to generate a random okLAB color. By default, it returns the color as a string in the `oklab(L A B / Alpha)` format. However, you can also opt to get an object representation of the color by setting the `useObjectExport` parameter to `true`.

```javascript
var randomOKLABColor = require('random-oklab-color');

// Generate random okLAB color as a string
console.log(randomOKLABColor()); // oklab(64% -0.1 -0.1)
console.log(randomOKLABColor(0, 1, -1, 1, -1, 1, 0, 1)); // oklab(0.34 -0.58 -0.73 / 0.62)

// Generate random okLAB color as an object
console.log(randomOKLABColor(0, 1, -1, 1, -1, 1, 0, 1, true));
// { l: 0.85, a: -0.37, b: -0.63, alpha: 0.92 }
```

In the object representation, the returned object contains the following properties:

- **l**: The value of the L channel (range: 0 to 1 or 0 to 100).
- **a**: The value of the A channel (range: -128 to 127).
- **b**: The value of the B channel (range: -128 to 127).
- **alpha**: The value of the alpha channel (range: 0 to 1 or 0 to 100).

By adjusting the input parameters and using the `useObjectExport` parameter, you can control the range of each channel and obtain the color as an object with the respective channel values.

## Acknowledgements

Inspired by [random-hex-color by John Otander](http://github.com/johno/random-hex-color) which is repackaged from a [post by Paul Irish](http://www.paulirish.com/2009/random-hex-color-code-snippets/).

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## Additional Resources

Here are some additional resources that provide information about the okLAB color space:

- [okLAB Color Space on GitHub](https://github.com/gka/oklab)
- [okLab: A perceptual color space for image processing](https://bottosson.github.io/posts/oklab/)

Feel free to explore these resources to learn more about okLAB and its applications in generative art and design.

