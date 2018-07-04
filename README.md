# component-sdk
Component SDK for Flow. 

# Install SDK
`npm install flow-app-component --save`

# Import into your React project
`import AppComponent from 'flow-app-component';`

# Basic Example
LinkButton.jsx
```
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
        const elemProps = Object.assign({}, this.props);
        delete elemProps.propertyData;
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
```
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
