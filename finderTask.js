/**
 * Created by DecaHub on 3/8/17.
 */

"use strict";

class FinderTask {
	
	constructor () {
		
		this.props = new Set();
		this.requiredProps = new Set();
		this.optionalProps = new Set();
		
		this.props.add({
			name: "target",
			required: true
		});
		this.props.add({
			name: "ignore",
			required: false
		});
		
		for (const prop of this.props) {
			
			if (prop.required) {
				
				this.requiredProps.add(prop.name);
				
			} else {
				
				this.optionalProps.add(prop.name);
				
			}
			
		}
		
	}
	
}

module.exports = new FinderTask();
