# Flow Component SDK
Component SDK for Flow.

### Install SDK
`npm install flow-app-component --save`

### Import into your React project
`import AppComponent from 'flow-app-component';`

### Basic Example
LinkButton.jsx
```javascript
import React from 'react';

import AppComponent from 'flow-app-component';

class LinkButtonComponent extends AppComponent {
    constructor() {
        super();
        this.state = {
            properties: [
                {
                    categoryName: 'General',
                    categoryDescription: 'Basic settings for link button.',
                    properties: [
                        {
                            id: 'text',
                            name: 'Link Button',
                            type: 'text',
                            options: {},
                            data: null,
                        },
                        {
                            id: 'page',
                            name: 'Select Page',
                            type: 'select-page',
                            options: {},
                            data: null,
                        },
                    ],
                },
            ],
            iconUrl: 'src/assets/images/link-button-component.svg',
        };
    }

    renderContent() {
        const buttonStyle = {};
        const elemProps = this.getElementProps();
        elemProps.style = Object.assign(this.getDefaultStyle(), buttonStyle);
        return (
          <button {...elemProps}>
            <a>
              {
                  this.getPropertyData('text') || 'Default Button Text'
              }
            </a>
          </button>
        );
    }

    render() {
        return this.renderContent();
    }
}


export default LinkButtonComponent;

```
App.jsx
```javascript
import React, { Component } from 'react';

import LinkButton from './path/to/LinkButton.jsx';

class App extends Component {
    constructor() {
        super();
        this.state = {
            propertyData: [
                {
                    properties: [
                        {
                            id: 'text',
                            name: 'Link Button',
                            type: 'text',
                            options: {},
                            data: null,
                        },
                        {
                            id: 'page',
                            name: 'Select Page',
                            type: 'select-page',
                            options: {},
                            data: null,
                        },
                    ],
                },
            ],
        };
    }

    render() {
        return <LinkButton propertyData={this.state.propertyData} />;
    }
}

export default App;
```

### The Schema of a Component

Every component is associated with a set of properties that follow a schema. These properties define how the component is rendered.

#### Components

The following is the explanation of the terms you'll see for a component.
| Term                  | Description                                                          | Type                                  |
| --------------------- | -------------------------------------------------------------------- | ------------------------------------- |
| iconUrl               | The URL of the icon to show in the Component panel                   | String                                |
| name                  | The name of the component                                            | String                                |
| componentType         | The type of the component to render                                  | String                                |
| category              | The category of the component (used for the Component panel sorting) | String                                |
| parent                | The ID of the parent component                                       | String                                |
| showOnComponentsPanel | Should the component be shown on the Component Panel?                | Boolean                               |
| isDeleteable          | Can the component be deleted?                                        | Boolean                               |
| isValuable            | Is the component valuable (prompt before deleting) ?                 | Boolean                               |
| allowsChildren        | Does the component allow children?                                   | Boolean                               |
| allowedChildTypes     | Allowed types of children                                            | { number: Number, types: String[] }[] |
| allowedParentTypes    | Allowed types of parents                                             | String[]                              |
| properties            | All the properties for the component                                 | Property[] (Below)                    |


#### Properties

The following is the schema for the a Property.

| Property Name      | Description                                                  | Type    |
| ------------------ | ------------------------------------------------------------ | ------- |
| id                 | The unique ID of the property, used to set and get the value | String  |
| name               | Name of the property                                         | String  |
| type               | The type of the property                                     | String  |
| multi              | If the property should accept an array of values             | Boolean |
| data               | The data stored for the property                             | Any     |
| renderOnPropsPanel | Should the property render on the properties panel           | Boolean |

The "type" of the property can be any one of the following:

| Type           | Description                                          |
| -------------- | ---------------------------------------------------- |
| text           | A text input                                         |
| boolean        | A true/false input                                   |
| description    | A long text input                                    |
| number         | A number input                                       |
| color          | A color picker input                                 |
| dropdown       | A dropdown with options to select                    |
| toggle         | A toggle input                                       |
| image          | An image input                                       |
| component      | Renders the renderOnPropertiesPanel() of a component |
| select-page    | A page selector                                      |
| tables         | A CloudBoost table selector                          |
| select-columns | A column selector for a CloudBoost table             |
| query          | A query component for the columns                    |
| graph          | A graph selector                                     |

#### Available Components

| Type       | Description                                                            |
| ---------- | ---------------------------------------------------------------------- |
| text       | A simple text                                                          |
| image      | An image upload                                                        |
| link       | A link with a href property                                            |
| list       | A list of items to display                                             |
| space      | A space component to display space in the view                         |
| app        | The parent of all pages                                                |
| page       | The parent of all components                                           |
| directory  | A "category" component for the pages of an app                         |
| nav        | A Navigation Bar                                                       |
| navItem    | First child of nav                                                     |
| subNavItem | Child of NavItem                                                       |
| map        | A Google Maps component                                                |
| video      | A video display component                                              |
| search     | A search component. Hooked to one of the CloudBoost tables             |
| container  | An empty container for components.                                     |
| input      | A text input component                                                 |
| toggle     | A boolean or yes/no component                                          |
| radio      | A Radio component                                                      |
| checkbox   | A Checkbox component                                                   |
| form       | A form component, holds all the inputs, checkboxes, radios and toggles |
| loader     | A loading component                                                    |
| dropdown   | A dropdown component                                                   |

#### Component Specific Properties

Some properties are specific to certain component. The following table lists such properties.

##### app Component
| Property ID    | Property Type | Description                                                 |
| -------------- | ------------- | ----------------------------------------------------------- |
| home-page      | select-page   | The first page to open when the app is opened               |
| not-found-page | select-page   | The page to use for a 404 response                          |
| error-page     | select-page   | The page to use for an error response                       |
| allowed-roles  | dropdown      | The allowed roles for the app, others can't access the page |

##### directory Component
| Property ID   | Property Type | Description                                                        |
| ------------- | ------------- | ------------------------------------------------------------------ |
| allowed-roles | dropdown      | Allowed roles for the directory. All child pages will be affected. |

##### page Component
| Property ID   | Property Type | Description                      |
| ------------- | ------------- | -------------------------------- |
| allowed-roles | dropdown      | Allowed roles specific to a page |