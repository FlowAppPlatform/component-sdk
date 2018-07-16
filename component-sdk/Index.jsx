import React, { Component } from 'react';

class AppComponent extends Component {
    constructor() {
        super();
        this.state = {
            properties: [],
            name: '',
            iconUrl: '',
        };
        this.style = { opacity: this.props.isDragging ? 0 : 1 };
    }

    getPropertyData(id) {
        let property = findFirst(
            Object.assign({}, { properties: this.props.propertyData }), 
            'properties', 
            { id }
        );

        return property && property.data ? property.data : null;
    }

    renderContent() {
        return '';
    }

    render() {
        return null;
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
