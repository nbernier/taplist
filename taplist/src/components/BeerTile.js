import React, { Component } from 'react'

class Table extends Component {
    render() {
        return (
            <div class="container">
                <div name="pint" role="img" aria-label="pint">
                    <div class="icon-inner">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="s-ion-icon">
                            <path fill={this.props.color} d="M64 48l42.9 379.2c2.6 20.8 20.5 36.8 42.5 36.8h213.3c22 0 39.9-16 42.5-36.8L448 48H64zm327 124.8H121l-9.4-83.2h288.6l-9.2 83.2z"></path>
                        </svg>
                    </div>
                </div>
                <h2 class="cover-heading">{this.props.name}</h2>
                <label>{this.props.type}</label><br/>
                <label>{this.props.abv}</label>
            </div>
        )
    }
}

export default Table