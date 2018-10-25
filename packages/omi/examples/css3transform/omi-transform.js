import { WeElement, tag } from "../../src/omi";
import Transform from './css3transform'

@tag("css3-transform")
class CSS3Transform extends WeElement {

	install() {
		this.css = this.parentNode.host.css
	}

	installed() {
		Transform(this.host);
		this.transformByProps()
	}

	afterUpdate() {
		this.transformByProps()

	}

	transformByProps() {
		["translateX", "translateY", "translateZ", "scaleX", "scaleY", "scaleZ", "rotateX", "rotateY", "rotateZ", "skewX", "skewY", "originX", "originY", "originZ", "perspective"].forEach(item => {
			if (this.props.hasOwnProperty(item)) {
				this.host[item] = this.props[item]
			}
		})
	}


	render(props, data) {
		return props.children[0]
	}
}