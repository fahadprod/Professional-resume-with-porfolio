import React, { Component } from "react";
import { Table } from "reactstrap";


class about_hero extends Component{ 

     data = [
        {
            detail: {
                Name: 'Fahad Ahmad',
                Age: '20',
                Location: 'Lahore',
                Experience: '1 year',
                Degree : 'MSCIT',
                Career : 'Mid-Level',
                Phone: '123_456_ 789',
                Fax: '123_456',
                Email:'fahadahmadmd@gmail',
                Website: 'www.example.com'
            }
        }]

        

    render () {

        let styles = {
            fontSize: '12px'
        }
        var response = this.data.map( (obj, index) => {
            return (
                <Table borderless responsive key={index}>
                        <tbody style={styles}>
                            <tr>

                                <th>NAME</th>
                                <td>{obj.detail.Name}</td>
                                 <th>AGE</th>
                                <td>{obj.detail.Age}</td>
                            </tr>
                            <tr>
                                <th>LOCATION</th>
                                <td>{obj.detail.Location}</td>
                                <th>EXPERIENCE</th>
                                <td>{obj.detail.Experience}</td>
                            </tr>
                            <tr>
                                <th>DEGREE</th>
                                <td>{obj.detail.Degree}</td>
                                <th>CAREER-LEVEL</th>
                                <td>{obj.detail.Career}</td>
                            </tr>
                            <tr>
                                <th>PHONE</th>
                                <td>{obj.detail.Phone}</td>
                                <th>FAX</th>
                                <td>{obj.detail.Fax}</td>
                               
                            </tr>
                            <tr>
                                 <th>EMAIL</th>
                                <td>{obj.detail.Email}</td>
                                <th>WEBSITE</th>
                                <td>{obj.detail.Website}</td>
                            </tr>
                            
                        </tbody>
                    </Table>
            )
        })
        return (
            <div>
                
                        <h5 style={{ paddingTop: '15px' }}><strong>ABOUT ME</strong></h5>
                        <hr />

                        <div>{response}</div>

                        <h5 style={{ paddingTop: '15px' }}><strong>I'M WEB DESIGNER</strong></h5>
                        <hr />

                        <p style={styles}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, 
                            suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. 
                            Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. 
                        </p>
                        <p style={styles}>
                            Quisque semper justo at risus. Donec venenatis, turpis vel 
                            hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. 
                            Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus 
                            leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget
                             neque. Phasellus ornare, ante vitae consectetuer consequat, 
                            purus sapien ultricies dolor, et mollis pede metus eget nisi. 
                        </p>

                    
            </div>
        )
    }

}

export default about_hero;