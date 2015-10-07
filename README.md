## My Sky - Sample
> Location based product purchase service

## Unit Testing Scenarios

### Landing Page

| Test Description           | Expected Result  | Test Result |
|:------------- |:-------------|:-----|
| Click - Valid User | Redirect To Product Selection Page | Pass |
|Click - Invalid User(Voldermort) | Redirect To 404 Page | Pass |

### Product Selection Page

| Test Description           | Expected Result  | Test Result |
|:------------- |:-------------| -----|
| Show Only the channels w.r.t the location | Location Based Channels | Pass |
| Add a Channel | Update the Basket Size. Add the clicked Channel. Show a Toast.| Pass |
| Remove a Channel | Update the Basket Size. Remove the clicked Channel. Show a Toast.| Pass |
| Click - Check Out Button, when no Channels are added | Disabled Button; Don't redirect to Confirm Page| Pass |
| Click - Check Out Button, when basket size > 0 | Update DB. Redirect to Confirm Page| Pass |
|Click - SignOut| Clear the Basket. Clear the CheckBox Selection. Redirect To Landing Page | Pass |

### Confirmation Page

| Test Description           | Expected Result  | Test Result |
|:------------- |:-------------|:-----|
|On Page Load| Show Success Toast. Show Customer Details. Show the products selected form previous step. | Pass |
|Click - SignOut| Clear the Basket. Clear the CheckBox Selection. Redirect To Landing Page | Pass |

##Service Tests
All Services to and From Firebase are tested using Mocha.js

###Customer Location Service Test

A CustomerLocationService is available which will take the customerID as an input and return one of the following outputs.

|Customer Service| Output Description|￼
|:------------- |:-------------||A location identifier| Customer is valid and a locationID is returned|￼|Failure exception| There was a problem retrieving the customer information|
#### Evidence
app/test/test-customer-location-service.js
````shcd app/test/
mocha test-customer-location-service.js
````

###Catalogue Service Test

The locationID returned from CustomerLocationService should be passed to a CatalogueService, which must return the following products.
￼| Category | Product | Dependent on locationID |
|:------------- |:-------------|:-----|
| ￼Sports| Arsenal TV | LONDON |
| Sports| Chelsea TV | LONDON |
￼| Sports| Liverpool TV| LIVERPOOL|
￼| News| Sky News|  |
￼| News| Sky Sports News|  |

1. The CatalogueService will only return ArsenalTV and ChelseaTV if the locationID is LONDON. 
2. The CatalogueService will only return LiverpoolTV if the locationID is LIVERPOOL.3. The CatalogueService will always return Sky News and Sky Sports News.

#### Evidence
app/test/test-catalogue-service.js
````shcd app/test/
mocha test-catalogue-service.js
````


## Technologies/Concepts Involved
* **Front-End**
	1. HTML5, CSS, JavaScript
	2. WebComponents(Polymer 1.0)
	3. Responsive Web Design(Adaptive UI)
* **Back-End**
	* Firebase
* **Unit Testing**
	1. Web Component Tester
* **Task Runners, Build Process & Development Workflow**
	*  **Polymer Starter Kit** which makes use of Gulp, bower, npm, browser-sync, vulcanize, etc.,
* **Source Control**
	* GitHub
* **Documentation**
	* Markdown
	* <iron-pages>
	* prism.js
* **IDE & Dev Tools**
	* Atom
	* Chrome Dev Tools
	* MoU - Markdown Editor
	* Vulcan - Firebase Data Inspector

## Getting Started

To run this application you need to:

1. Get a copy of the code.
2. Install the dependencies if you don't already have them.
3. Run the Application



### Get the code

[Download](https://github.com/thiruppathi/my-sky) and extract my-sky to where you want to work.

### Install dependencies

#### Quick-start

With Node.js installed, run the following one liner from the root of your my-sky download:

```sh
npm install -g gulp bower && npm install && bower install
```

#### Prerequisites (for everyone)

**my-sky** requires the following major dependencies:

- Node.js, used to run JavaScript tools from the command line.
- npm, the node package manager, installed with Node.js and used to install Node.js packages.
- gulp, a Node.js-based build tool.
- bower, a Node.js-based package manager used to install front-end packages (like Polymer).

**To install dependencies:**

1)  Check your Node.js version.

```sh
node --version
```

The version should be at or above 0.12.x.

2)  If you don't have Node.js installed, or you have a lower version, go to [nodejs.org](https://nodejs.org) and click on the big green Install button.

3)  Install `gulp` and `bower` globally.

```sh
npm install -g gulp bower
```

This lets you run `gulp` and `bower` from the command line.

4)  Install the starter kit's local `npm` and `bower` dependencies.

```sh
cd my-sky && npm install && bower install
```

This installs the polymer-element sets (Paper, Iron, Platinum) and tools **my-sky** requires to build and serve apps.

### Development workflow

#### Serve / watch

```sh
gulp serve
```

This outputs an IP address you can use to locally test and another that can be used on devices connected to your network.

gulp.js uses **browser-sync**, which enables to test the Responsiveness of the page, simultaneously across many devices for different viewports.

#### Run tests

```sh
gulp test:local
```

This runs the unit tests defined in the `app/test` directory through [web-component-tester](https://github.com/Polymer/web-component-tester).

To run tests Java 7 or higher is required. To update Java go to http://www.oracle.com/technetwork/java/javase/downloads/index.html and download ***JDK*** and install it.

#### Build & Vulcanize

```sh
gulp
```

Build and optimize the current project, ready for deployment. This includes linting as well as vulcanization, image, script, stylesheet and HTML optimization and minification.

## Application Theming & Styling

**my-sky** uses Polymer Starter Kit. Polymer 1.0 introduces a shim for CSS custom properties. We take advantage of this in `app/styles/app-theme.html` to provide theming for your application. You can also find our presets for Material Design breakpoints in this file.

[Read more](https://www.polymer-project.org/1.0/docs/devguide/styling.html) about CSS custom properties.

### Styling
1. ***main.css*** - to define styles that can be applied outside of Polymer's custom CSS properties implementation. Some of the use-cases include defining styles that you want to be applied for a splash screen, styles for your application 'shell' before it gets upgraded using Polymer or critical style blocks that you want parsed before your elements are.
2. ***app-theme.html*** - to provide theming for your application. You can also find our presets for Material Design breakpoints in this file.
3. ***shared-styles.html*** - to shared styles between elements and index.html.
4. ***element styles only*** - styles specific to element. These styles should be inside the `<style></style>` inside `template`.

  ```HTML  
  <dom-module id="my-list">
    <template>
      <style>
        :host {
          display: block;
          background-color: yellow;
        }
      </style>
      <ul>
        <template is="dom-repeat" items="{{items}}">
          <li><span class="paper-font-body1">{{item}}</span></li>
        </template>
      </ul>
    </template>
  </dom-module>
  ```

These style files are located in the [styles folder](app/styles/).

## Unit Testing

Web apps built with Polymer Starter Kit come configured with support for [Web Component Tester](https://github.com/Polymer/web-component-tester) - Polymer's preferred tool for authoring and running unit tests. This makes testing your element based applications a pleasant experience.

[Read more](https://github.com/Polymer/web-component-tester#html-suites) about using Web Component tester.

## Dependency Management

MySky uses [Bower](http://bower.io) for package management. This makes it easy to keep your elements up to date and versioned. For tooling, it uses npm to manage Node.js-based dependencies.


## Frequently Asked Questions


### Something has failed during installation. How do I fix this?

Our most commonly reported issue is around system permissions for installing Node.js dependencies.
We recommend following the [fixing npm permissions](https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md)
guide to address any messages around administrator permissions being required. If you use `sudo`
to work around these issues, this guide may also be useful for avoiding that.

If you run into an exception that mentions five optional dependencies failing (or an `EEXIST` error), you
may have run into an npm [bug](https://github.com/npm/npm/issues/6309). We recommend updating to npm 2.11.0+
to work around this. You can do this by opening a Command Prompt/terminal and running `npm install npm@2.11.0 -g`. If you are on Windows,
Node.js (and npm) may have been installed into `C:\Program Files\`. Updating npm by running `npm install npm@2.11.0 -g` will install npm
into `%AppData%\npm`, but your system will still use the npm version. You can avoid this by deleting your older npm from `C:\Program Files\nodejs`
as described [here](https://github.com/npm/npm/issues/6309#issuecomment-67549380).

If the issue is to do with a failure somewhere else, you might find that due to a network issue
a dependency failed to correctly install. We recommend running `npm cache clean` and deleting the `node_modules` directory followed by
`npm install` to see if this corrects the problem. If not, please check the [issue tracker](https://github.com/PolymerElements/polymer-starter-kit/issues) in case
there is a workaround or fix already posted.

### I'm having trouble getting Vulcanize to fully build my project on Windows. Help?

Some Windows users have run into trouble with the `elements.vulcanized.html` file in their `dist` folder
not being correctly vulcanized. This can happen if your project is in a folder with a name containing a
space. You can work around this issue by ensuring your path doesn't contain one.

There is also an [in-flight](https://github.com/PolymerElements/polymer-starter-kit/issues/62#issuecomment-108974016) issue
where some are finding they need to disable the `inlineCss` option in our configuration for Vulcanize
to correctly build. We are still investigating this, however for the time-being use the workaround if
you find your builds getting stuck here.


### TODO
* **Test Cases for Services**
  1. **Test Customer Location Service**
  2. **Test Catalogue Service**
  3. **Test CheckOut & Order Update Service**
* **Landing Page**
	1. ~~Generate & Add Favicon~~
	2. ~~Customer Avatar~~
	3. ~~Create an Invalid User && Different Location~~
	4. ~~Show Toast of GetCustomerService Failure~~
	5. **Update Stub Data for entire Firebase
	collection**
	6. ~~Add Location Icons to London,Liverpool~~
* **Side Bar**
  1. Show About Author - Take to github/ or route with personal card
  2. Show Project Documentation
      * How To Install & Run
      * Explain about Each Services
      * Test Cases
      * Tools Used
* **Product Selection Page**
  1. ~~Uncheck all checkboxes onload~~
  2. ~~Align Sports/News/Basket Cards~~
  3. ~~Show LOGOUT options~~
  4. **Google Now Wallpaper on Background**
  5. ~~Show animated checkbox~~
  6. ~~Show animation when basket updated~~ added toast
  7. ~~VALIDATE Before Checkout; if Invlaid Disable ~~
* **Confirmation Page**
	1. ~~Show Customer ID & Details~~
	2. ~~Show Toast with Success Message - Green Color with Icon~~
	3. ~~Show LOGOUT~~
* **Demo**
	1. Create a ScreenCast
