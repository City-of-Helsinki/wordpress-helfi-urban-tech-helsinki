# Helsinki Urban Tech theme

Roots Sage based theme with block editor support. See the [Sage installation documentation](https://roots.io/sage/docs/installation/).

## Requirements

### Environment

- PHP 8.1

### Packages

Include the following pacakges in the main composer.json file.

- log1x/acf-composer ^2.1
- log1x/navi ^2.0
- log1x/sage-svg ^1.1
- roots/acorn ^3.3

### Plugins

- Advanced Custom Fields Pro

## Notes

Workarounds to accomodate non writeable theme directory
- Compiled views relocated to a directory outside the theme
- packages.php and services.php cache files included in the theme source
