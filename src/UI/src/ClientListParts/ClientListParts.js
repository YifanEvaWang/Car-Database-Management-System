import React, { Component } from "react";
import Axios from 'axios';
import '../ClientListParts/ClientListParts.css';

export default class ClientListParts extends Component {

    constructor() {
        super();
        this.state = {agentIdG4:localStorage.getItem('id'), agentNameG4: localStorage.getItem('username'), 
                    partsG4: [], partNoG4: '', statusMsgG4:'' };
        this.getPartsG4 = this.getPartsG4.bind(this);
        this.getSpecificPartG4 = this.getSpecificPartG4.bind(this);
        this.getPartsG4();
    }

    //Make the Web Service Call
    getPartsG4 = () => {
        //Get the PO Details
        let parts = '/parts';        
        Axios.get(parts).then((response) => {
            if(response.data != null){
                this.setState({partsG4: response.data, statusMsgG4:'', partNoG4:'' });
            }
        }).catch((err) => {
            alert(err);
        });
    }

    getSpecificPartG4 = () => {

        //Validation
        if(this.state.partNoG4 === ''){
            this.state.statusMsgG4 = 'Invalid Part No. Please enter a valid Part ID.';
        }else if(isNaN(this.state.partNoG4)){
            this.state.statusMsgG4 = 'Not a number. Please enter a valid number.';
        }else{

            //Get a Part
            let a_part = '/parts/'+this.state.partNoG4;                
            Axios.get(a_part).then((response) => {
                if(response.data != null){
                    this.setState({partsG4: [response.data], statusMsgG4:'' });                    
                }else{
                    this.setState({partsG4: [], statusMsgG4:'No Data'});
                }
            }).catch((err) => {
                alert(err);
            });
        }
    }

    //Handle Value Changes
    handlePartIdG4 = (event) => {
        this.setState({ partNoG4: event.target.value });
    }

    render() {

        // List all the parts 
        let allParts = this.state.partsG4.map(part => {
                return(
                    <div className="parts">
                            <h4>Part Number: {part.partNoG4}</h4>
                            <p>Part Name: {part.partNameG4}</p>
                            <p>Part Description: {part.partDescriptionG4}</p>
                            <p>Unit Price: ${part.currentPriceG4}</p>                                                             
                            <label for="quantity">Max. Qty that can be ordered (In Stock): {part.qtyG4}</label>                                
                    </div>
         )});    

         //overall layout
         return (
             <>            
                <div id="output-values" className="median-values" >
                    <br />
                    <h2>Products</h2>
                    <br />
                    <div className="search-input">
                    
                        <h5>Search</h5>
                        <div className="form-group ">
                            Display all, or, Search by part no.
                            <input type="text" className="form-control" value={this.state.partNoG4} onChange={this.handlePartIdG4} placeholder="Enter Part Number" />

                            <button className="btn btn-primary btn-block block-gap-left" onClick={() => this.getPartsG4()}>
                                Display All
                            </button> 
                            <button className="btn btn-primary btn-block block-gap-left" onClick={() => this.getSpecificPartG4()}>
                                Search
                            </button>

                            <div className="warning">{this.state.statusMsgG4}</div>
                        </div>                  

                    </div>
                    <br />
                    {allParts}
                </div> 
            </>        
         );
        }

}
