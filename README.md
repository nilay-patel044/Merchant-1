# Merchant

Merchant is a versatile, scalable theme that will grow with your store. Its clean design and four stylish presets provide a space for your products to shine. Ideally suited to catalogs large and small, Merchant is easy to set up, a pleasure to browse, and designed to get your customers to the checkout.

Built for BigCommerce's [Stencil](https://stencil.bigcommerce.com) platform. Designed and developed by [Pixel Union](https://www.pixelunion.net).

> PLEASE NOTE:
> 
> Pixel Union cannot provide support for themes that have been downloaded and customized.
> 
> We cannot be held liable for any defects or bugs that arise due to customization by a third party. Please make alterations at your own risk.
> 
> Also, please note that while we make a theme’s source code available to those who have purchased it, we retain the rights to all theme designs. You are not permitted to upload a derived theme to any theme marketplace (whether BigCommerce’s or third-party), nor sell it in any form whatsoever. By downloading and/or altering a Pixel Union theme, you continue to be bound to our Terms & Conditions.

## Theme documentation

Pixel Union's Settings documentation for this theme can be found [here](https://www.pixelunion.net/support/merchant-theme-manual/).

This theme comes with four design presets:
[Classic](https://merchant-classic-demo.mybigcommerce.com),
[Light](https://merchant-light-demo.mybigcommerce.com),
[Bright](https://merchant-bright-demo.mybigcommerce.com),
[Bold](https://merchant-bold-demo.mybigcommerce.com).

## Local development

### Prerequisites

Please ensure you have the following installed:

- [Node.js](https://nodejs.org) _version 5 or higher recommended_, with `npm` version 3 or higher
- `npm` _version 3 or higher_
- The Stencil CLI tools ([installation guide](https://stencil.bigcommerce.com/docs/installing-stencil-cli-1))
- [NVM](https://github.com/creationix/nvm) or similar (optional)

### SSH keys

To fetch theme dependencies, ensure that you have an ssh key configured and for both BitBucket and Github:

- [Github SSH key instructions](https://help.github.com/articles/connecting-to-github-with-ssh/)
- [BitBucket SSH key instructions](https://confluence.atlassian.com/bitbucket/set-up-ssh-for-git-728138079.html)

### Running the theme

Navigate to your theme's root folder and run `npm install` to install all theme dependencies.

You can now use the `stencil` command to run and build the theme. Please reference BigCommerce's documentation for using `stencil`:

 - [Preparing an API token](https://stencil.bigcommerce.com/docs/preparing-your-store-tokens)
 - [Launching the Stencil environment](https://stencil.bigcommerce.com/docs/launching-stencil)