## My Sky
Location based product purchase service.

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

## Testing Evidences
###Service Tests - Automated Mocha (TDD & BDD)
All Services to and From Firebase are tested using Mocha.js.
TDD is achieved using Asset.
BDD is achieved using Expect.js

####Customer Location Service Test

A CustomerLocationService is available which will take the customerID as an input and return one of the following outputs.

#####Evidence

[See Unit Test Script for Customer Location Service](app/test/test-customer-location-service.js)

````sh
cd app/test/
mocha test-customer-location-service.js
````

<a href="https://asciinema.org/a/9jg8ph0vcpcl7th45ngq97p6t" target="_blank"><img src="https://asciinema.org/a/9jg8ph0vcpcl7th45ngq97p6t.png" width="705"/></a>

####Catalogue Service Test

The locationID returned from CustomerLocationService should be passed to a CatalogueService, which must return the following products.

1. The CatalogueService will only return ArsenalTV and ChelseaTV if the locationID is LONDON. 
2. The CatalogueService will only return LiverpoolTV if the locationID is LIVERPOOL.
3. The CatalogueService will always return Sky News and Sky Sports News.

#####Evidence
[See Unit Test Script for Catalogue Service](app/test/test-catalogue-service.js)

````sh
cd app/test/
mocha test-catalogue-service.js
````

<a href="https://asciinema.org/a/d1h731gqciq2d7mt0q3fn0s0h" target="_blank"><img src="https://asciinema.org/a/d1h731gqciq2d7mt0q3fn0s0h.png" width="705"/></a>


### UI Testing Scenarios - Manual

#### Landing Page

| Test Description           | Expected Result  | Test Result |
|:------------- |:-------------|:-----|
| Click - Valid User | Redirect To Product Selection Page | Pass |
| Click - Invalid User(Voldermort) | Redirect To 404 Page | Pass |

#### Product Selection Page

| Test Description           | Expected Result  | Test Result |
|:------------- |:-------------| -----|
| Show Only the channels w.r.t the location | Location Based Channels | Pass |
| Add a Channel | Update the Basket Size. Add the clicked Channel. Show a Toast.| Pass |
| Remove a Channel | Update the Basket Size. Remove the clicked Channel. Show a Toast.| Pass |
| Click - Check Out Button, when no Channels are added | Disabled Button; Don't redirect to Confirm Page| Pass |
| Click - Check Out Button, when basket size > 0 | Update DB. Redirect to Confirm Page| Pass |
| Click - SignOut| Clear the Basket. Clear the CheckBox Selection. Redirect To Landing Page | Pass |

#### Confirmation Page

| Test Description           | Expected Result  | Test Result |
|:------------- |:-------------|:-----|
|On Page Load| Show Success Toast. Show Customer Details. Show the products selected form previous step. | Pass |
|Click - SignOut| Clear the Basket. Clear the CheckBox Selection. Redirect To Landing Page | Pass |


## Task List
* **Test Cases for Services**
  1. ~~**Test Customer Location Service**~~
  2. ~~**Test Catalogue Service**~~
* **Landing Page**
	1. ~~Generate & Add Favicon~~
	2. ~~Customer Avatar~~
	3. ~~Create an Invalid User && Different Location~~
	4. ~~Show Toast of GetCustomerService Failure~~
	5. ~~Update Stub Data for entire Firebase collection~~
	6. ~~Add Location Icons to London,Liverpool~~
* **Side Bar**
  1. ~~Show Info & Help~~
  2. ~~Show Project Documentation~~
  3. Firebase Instructions
* **Product Selection Page**
  1. ~~Uncheck all checkboxes onload~~
  2. ~~Align Sports/News/Basket Cards~~
  3. ~~Show LOGOUT options~~
  4. ~~Show animated checkbox~~
  5. ~~Show animation when basket updated~~ added toast
  6. ~~VALIDATE Before Checkout; if Invlaid Disable ~~
* **Confirmation Page**
	1. ~~Show Customer ID & Details~~
	2. ~~Show Toast with Success Message - Green Color with Icon~~
	3. ~~Show LOGOUT~~
* **Demo**
	1. ~~Create a ScreenCast of test case execution~~
