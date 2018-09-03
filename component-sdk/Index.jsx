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
       return null;
    }

    renderContent() {
        return null;
    }

    render() {
        return this.renderContent();
    }
}

const findFirst = (tree, childrenKey, objToFindBy) => {
  let treeToReturn = tree;
  let found = false;
  const findKeys = Object.keys(objToFindBy);
  findKeys.forEach((key) => {
    tree[key] === objToFindBy[key] ? found = true : found = false;
  });
  if (found) {
    return tree;
  }
  const findInChildren = (obj, childrenKey, objToFindBy) => {
    let foundInChild = false;
    if (obj.hasOwnProperty(childrenKey)) {
      for (let i = 0; i < obj[childrenKey].length; i++) {
        findKeys.forEach((key) => {
          obj[childrenKey][i][key] === objToFindBy[key] ? foundInChild = true : foundInChild = false;
        });
        if (foundInChild) {
          found = true;
          treeToReturn = obj[childrenKey][i];
          break;
        }
      }
      if (!foundInChild && !found) {
        obj[childrenKey].forEach(child => findInChildren(child, childrenKey, objToFindBy));
      }
    }
    return obj;
  };
  findInChildren(tree, childrenKey, objToFindBy);
  return found ? treeToReturn : false;
};

export default AppComponent;
