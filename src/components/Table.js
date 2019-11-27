import React, { Component, Fragment } from "react";
import { elements } from "./_data";
import Element from "./Element";

document.title = "Electron Config";
const letters = ["K", "L", "M", "N", "O", "P", "Q"];

class Table extends Component {
	state = {
		showInfo: false,
		element: {}
	};

	showInfo = num => {
		this.setState({ showInfo: true, element: elements[num] });
	};

	closeInfo = () => {
		this.setState({ showInfo: false });
	};

	getShells = e => {
		let shells = [];
		for (let i = 0; i < e.shells.length; i++) {
			shells[i] = letters[i] + e.shells[i];
		}
		return shells;
	};

	render() {
		let element = this.state.element;

		return (
			<div className="wrapper">
				<h1>Electron Config</h1>
				<div id="table">
					<Element showInfo={this.showInfo} num="1" />
					<Element showInfo={this.showInfo} num="2" />
					<Element showInfo={this.showInfo} num="3" />
					<Element showInfo={this.showInfo} num="4" />
					{/* Information Table */}
					{this.state.showInfo ? (
						<Fragment>
							{}
							<div id="element-box" className={`${element.category}`}>
								<div className="number">{element.number}</div>
								<div className="symbol">{element.symbol}</div>
								<div className="element-name">{element.name}</div>
							</div>
							<div id="information">
								<div
									onClick={this.closeInfo}
									className="close-button"
									title="Close Info"
								>
									&times;
								</div>
								<div>
									<h2 className="big_title">{element.name}</h2>
									<div className="atom_info">
										<div>Group: {element.xpos}</div>
										<div>Period: {element.ypos}</div>
										<div>
											Electron Configuration:{" "}
											{element.electron_configuration.replace(
												new RegExp(" ", "g"),
												" "
											)}
										</div>
										<div>Shells: {this.getShells(element).join(" ")}</div>
									</div>
								</div>
							</div>
						</Fragment>
					) : (
						""
					)}
					<Element showInfo={this.showInfo} num="5" />
					<Element showInfo={this.showInfo} num="6" />
					<Element showInfo={this.showInfo} num="7" />
					<Element showInfo={this.showInfo} num="8" />
					<Element showInfo={this.showInfo} num="9" />
					<Element showInfo={this.showInfo} num="10" />
					<Element showInfo={this.showInfo} num="11" />
					<Element showInfo={this.showInfo} num="12" />
					<Element showInfo={this.showInfo} num="13" />
					<Element showInfo={this.showInfo} num="14" />
					<Element showInfo={this.showInfo} num="15" />
					<Element showInfo={this.showInfo} num="16" />
					<Element showInfo={this.showInfo} num="17" />
					<Element showInfo={this.showInfo} num="18" />
					<Element showInfo={this.showInfo} num="19" />
					<Element showInfo={this.showInfo} num="20" />
					<Element showInfo={this.showInfo} num="21" />
					<Element showInfo={this.showInfo} num="22" />
					<Element showInfo={this.showInfo} num="23" />
					<Element showInfo={this.showInfo} num="24" />
					<Element showInfo={this.showInfo} num="25" />
					<Element showInfo={this.showInfo} num="26" />
					<Element showInfo={this.showInfo} num="27" />
					<Element showInfo={this.showInfo} num="28" />
					<Element showInfo={this.showInfo} num="29" />
					<Element showInfo={this.showInfo} num="30" />
					<Element showInfo={this.showInfo} num="31" />
					<Element showInfo={this.showInfo} num="32" />
					<Element showInfo={this.showInfo} num="33" />
					<Element showInfo={this.showInfo} num="34" />
					<Element showInfo={this.showInfo} num="35" />
					<Element showInfo={this.showInfo} num="36" />
					<Element showInfo={this.showInfo} num="37" />
					<Element showInfo={this.showInfo} num="38" />
					<Element showInfo={this.showInfo} num="39" />
					<Element showInfo={this.showInfo} num="40" />
					<Element showInfo={this.showInfo} num="41" />
					<Element showInfo={this.showInfo} num="42" />
					<Element showInfo={this.showInfo} num="43" />
					<Element showInfo={this.showInfo} num="44" />
					<Element showInfo={this.showInfo} num="45" />
					<Element showInfo={this.showInfo} num="46" />
					<Element showInfo={this.showInfo} num="47" />
					<Element showInfo={this.showInfo} num="48" />
					<Element showInfo={this.showInfo} num="49" />
					<Element showInfo={this.showInfo} num="50" />
					<Element showInfo={this.showInfo} num="51" />
					<Element showInfo={this.showInfo} num="52" />
					<Element showInfo={this.showInfo} num="53" />
					<Element showInfo={this.showInfo} num="54" />
					<Element showInfo={this.showInfo} num="55" />
					<Element showInfo={this.showInfo} num="56" />
					<Element showInfo={this.showInfo} num="57" />

					{/* Lanthanoids split */}
					<Element showInfo={this.showInfo} num="72" />
					<Element showInfo={this.showInfo} num="73" />
					<Element showInfo={this.showInfo} num="74" />
					<Element showInfo={this.showInfo} num="75" />
					<Element showInfo={this.showInfo} num="76" />
					<Element showInfo={this.showInfo} num="77" />
					<Element showInfo={this.showInfo} num="78" />
					<Element showInfo={this.showInfo} num="79" />
					<Element showInfo={this.showInfo} num="80" />
					<Element showInfo={this.showInfo} num="81" />
					<Element showInfo={this.showInfo} num="82" />
					<Element showInfo={this.showInfo} num="83" />
					<Element showInfo={this.showInfo} num="84" />
					<Element showInfo={this.showInfo} num="85" />
					<Element showInfo={this.showInfo} num="86" />
					<Element showInfo={this.showInfo} num="87" />
					<Element showInfo={this.showInfo} num="88" />
					<Element showInfo={this.showInfo} num="89" />
					{/* Actinoids split */}
					<Element showInfo={this.showInfo} num="104" />
					<Element showInfo={this.showInfo} num="105" />
					<Element showInfo={this.showInfo} num="106" />
					<Element showInfo={this.showInfo} num="107" />
					<Element showInfo={this.showInfo} num="108" />
					<Element showInfo={this.showInfo} num="109" />
					<Element showInfo={this.showInfo} num="110" />
					<Element showInfo={this.showInfo} num="111" />
					<Element showInfo={this.showInfo} num="112" />
					<Element showInfo={this.showInfo} num="113" />
					<Element showInfo={this.showInfo} num="114" />
					<Element showInfo={this.showInfo} num="115" />
					<Element showInfo={this.showInfo} num="116" />
					<Element showInfo={this.showInfo} num="117" />
					<Element showInfo={this.showInfo} num="118" />
					<Element showInfo={this.showInfo} num="119" />
					{/* Lanthenoids */}
					<Element showInfo={this.showInfo} num="58" />
					<Element showInfo={this.showInfo} num="59" />
					<Element showInfo={this.showInfo} num="60" />
					<Element showInfo={this.showInfo} num="61" />
					<Element showInfo={this.showInfo} num="62" />
					<Element showInfo={this.showInfo} num="63" />
					<Element showInfo={this.showInfo} num="64" />
					<Element showInfo={this.showInfo} num="65" />
					<Element showInfo={this.showInfo} num="66" />
					<Element showInfo={this.showInfo} num="67" />
					<Element showInfo={this.showInfo} num="68" />
					<Element showInfo={this.showInfo} num="69" />
					<Element showInfo={this.showInfo} num="70" />
					<Element showInfo={this.showInfo} num="71" />
					{/* Actionoids */}
					<Element showInfo={this.showInfo} num="90" />
					<Element showInfo={this.showInfo} num="91" />
					<Element showInfo={this.showInfo} num="92" />
					<Element showInfo={this.showInfo} num="93" />
					<Element showInfo={this.showInfo} num="94" />
					<Element showInfo={this.showInfo} num="95" />
					<Element showInfo={this.showInfo} num="96" />
					<Element showInfo={this.showInfo} num="97" />
					<Element showInfo={this.showInfo} num="98" />
					<Element showInfo={this.showInfo} num="99" />
					<Element showInfo={this.showInfo} num="100" />
					<Element showInfo={this.showInfo} num="101" />
					<Element showInfo={this.showInfo} num="102" />
					<Element showInfo={this.showInfo} num="103" />
				</div>
			</div>
		);
	}
}

export default Table;
