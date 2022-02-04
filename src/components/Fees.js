import React from "react";
import withContext from "../withContext";

const Fees = props => {

    const [firstload, setLoad] = useState(true);
    
    useEffect( () => {
        if (firstload){ 
            window.scrollTo(0,0);
            setLoad(false);
        }
    });
     
    return(
        <div className="hero">
            <div className="hero-body">
                <div className="panel">
                    <div className="panel-heading yellowbkgn">
                        <h1 className="title">Fees</h1>
                    </div>
                    <div className="panel-block">
                        <table className="table is-fullwidth">
                        <thead>
                            <tr>
                            <th>Service</th>
                            <th>Classification</th>
                            <th> Cost </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th>Passport</th>
                            <td>Adult Regular</td>
                            <td>80 USD</td>
                            </tr>
                            <tr>
                            <th></th>
                            <td>Adult Replacement</td>
                            <td>160 USD</td>
                            </tr>
                            <tr>
                            <th></th>
                            <td>Child Regular</td>
                            <td>50 USD</td>
                            </tr>
                            <tr>
                            <th></th>
                            <td>Child Replacement</td>
                            <td>100 USD</td>
                            </tr>
                            <tr>
                            <th>Emergency Certificate (EC)</th>
                            <td>Adult or Child</td>
                            <td>80 USD</td>
                            </tr>
                            <tr>
                            <th>Visa</th>
                            <td></td>
                            <td>*20 USD</td>
                            </tr>
                        
                        </tbody>
                        <br />
                        <thead>
                            <tr>
                            <th> </th>
                            <th> Citizenship </th>
                            <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th>By Descent</th>
                            <td> </td>
                            <td>100 USD</td>
                            </tr>
                            <tr>
                            <th>By Marriage</th>
                            <td> </td>
                            <td>260 USD</td>
                            </tr>
                            <tr>
                            <th> Reg. of Minor </th>
                            <td> </td>
                            <td>100 USD</td>
                            </tr>
                            <tr>
                            <th> Certified Copy </th>
                            <td> </td>
                            <td>100 USD</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <br />
                    <span>* See Visa Fee Schedule based on reciprocity</span>
                    
                </div>

            </div>
        </div>
    )
}
export default withContext(Fees);