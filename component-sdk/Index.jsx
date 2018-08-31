import React, { Component } from 'react';

class AppComponent extends Component {
    constructor() {
        super();
        this.state = {
            properties: [],
            name: '', //name to show on the right comp panel. 
            iconUrl: '',
            componentType: '', //type of the component
            parent: null, //parent of this component
            showOnComponentsPanel: true, //show on the right components panel?
            isDeleteable: true, //can this be deleetd?
            isValuable: false, //is this an imp component. (i.e: Ask confirmation before delete?)
            children:[] //children of this component. 
        };
    }

    getPropertyData(id) {
        let property = findFirst(
            Object.assign({}, { properties: this.props.propertyData }), 
            'properties', 
            { id }
        );

        return property && property.data ? property.data : null;
    }

    getDefaultStyle() {
      return { opacity: this.props && this.props.isDragging ? 0 : 1 };
    }

    getElementProps() {
      let elemProps = Object.assign({}, this.props);
      delete elemProps.nodeData;
      delete elemProps.positioningClasses;
      delete elemProps.propertyData;
      return elemProps;
    }

    propertyUpdated(id, data) {
      // do nothing
    }
    
    renderChildren(){
       for(var i=0;i<this.state.children.length; i++){
            this.renderChildren(this.state.children[i]);
       }
             
    }
    
    renderChildren(childId){
        return null;
    }

    renderContent() {
        return null;
    }

    render() {
        return this.renderContent();
    }
}

export default AppComponent;
