import React, { Component } from 'react';

class AppComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			properties: [],
			name: '', //name to show on the right comp panel.
			iconUrl: '',
			componentType: '', //type of the component
			parent: null, //parent of this component
			showOnComponentsPanel: true, //show on the right components panel?
			isDeleteable: true, //can this be deleetd?
			isValuable: false, //is this an imp component. (i.e: Ask confirmation before delete?)
			children: [] //children of this component.
		};
	}

	getPropertyData(id) {
		return this.props && this.props.propertyData ? this.props.propertyData[id] : null;
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

	shouldRenderChild(childId) {
		//should this child be rendered. By default, yes.
		return true;
	}

	propertyUpdated(id, data) {
		//do nothing,
	}

	renderChildren() {
		return this.props.children;
	}

	getComponent(id) {
		return this.props.getComponent(id);
	}

	getComponentType(id) {
		return this.props.getComponentType(id);
	}

	getComponentPropertyData(componentId, propertyId) {
		return this.props.getComponentPropertyData(componentId, propertyId);
    }
    setPropertyData(componentId, propertyId, data) {
		this.props.setPropertyData && this.props.setPropertyData(componentId, propertyId, data);
	}

	setChildPropertyData(childId, propertyId, data) {
		this.setPropertyData(childId, propertyId, data);
	}

	getChildPropertyData(childId, propertyId) {
		return this.getComponentPropertyData(childId, propertyId);
	}

	renderOnPropertiesPanel() {
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
