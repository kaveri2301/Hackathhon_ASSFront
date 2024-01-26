import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

export default function Registration() {

    const navigate = useNavigate()

    // const skillsList = ["React JS", "Node JS", "Express JS", "MongoDB", "Angular JS"];

    // const [validated, setValidated] = useState(false);

    const [empname, setEmpName] = useState("")
    const [empid, setEmpId] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [skills, setSkills] = useState([])
    const [city, setCity] = useState("")
    const [joiningdate, setJoiningDate] = useState("")
    const [marritalstatus, setMarritalStatus] = useState("")
    const [photo, setPhoto] = useState(null)

    // const getSkills = (e) => {
    //      let data = skills 
    //      data.push(e.target.value)
    //      setSkills(data)
    // }

    function handleSubmit(e) {
        e.preventDefault();
        // let newData = {
        //     empname,
        //     empid,
        //     email,
        //     password,
        //     age,
        //     gender,
        //     skills,
        //     city,
        //     joiningdate,
        //     marritalstatus
        // }

        const newData = new FormData()
        newData.append('empname', empname)
        newData.append('empid', empid)
        newData.append('email', email)
        newData.append('password', password)
        newData.append('age', age)
        newData.append('gender', gender)
        newData.append('skills', skills)
        newData.append('city', city)
        newData.append('joiningdate', joiningdate)
        newData.append('marritalstatus', marritalstatus)
        newData.append('image', photo)
        

        // Convert skills array to comma-separated string
    let skillsString = skills.join(', ');

    // Update the newData object with the skills string
    newData.skills = skillsString;
        console.log(newData);

        
        axios.post('http://localhost:8080/employee/add', newData)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        setEmpName("")
        setEmpId("")
        setEmail("")
        setPassword("")
        setAge("")
        setGender("")
        setSkills([])
        setCity("")
        setJoiningDate("")
        setMarritalStatus("")
        setPhoto("")
    }

    const handleSkillsChange = (selectedSkill) => {
        const updatedSkills = skills.includes(selectedSkill)
            ? skills.filter(skill => skill !== selectedSkill)
            : [...skills, selectedSkill];
    
        setSkills(updatedSkills);
    };
    
    return (
        <div className='container mt-5'>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustomempname">
                        <Form.Label>Employee name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Employee name"
                            id='forempname'
                            value={empname}
                            onChange={(e) => setEmpName(e.target.value)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationCustomempid">
                        <Form.Label>Employee Id</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Employee Id"
                            id='forempid'
                            onChange={(e) => setEmpId(e.target.value)}
                            value={empid}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Age"
                            id='age'
                            onChange={(e) => setAge(e.target.value)}
                            value={age}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom">
                        <Form.Label>Maternal Status</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="Married"
                                    name="matstatus"
                                    type={type}
                                    id={`inline-${type}-1`}
                                    onChange={() => setMarritalStatus("Married")}
                                    checked={marritalstatus === "Married"}
                                />
                                <Form.Check
                                    inline
                                    label="Unmarried"
                                    name="matstatus"
                                    type={type}
                                    id={`inline-${type}-2`}
                                    onChange={() => setMarritalStatus("Unmarried")}
                                    checked={marritalstatus === "Unmarried"}
                                />
                            </div>
                        ))}
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationCustom">
                        <Form.Label>City</Form.Label>
                        <Form.Select aria-label="City" onChange={(e) => setCity(e.target.value)} value={city}>
                            <option>Select City</option>
                            <option value="Nashik">Nashik</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Pune">Pune</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationCustomjoindate">
                        <Form.Label>Joining Date</Form.Label>
                        <Form.Control
                            required
                            type="date"
                            placeholder="Joining Date"
                            id='joindate'
                            value={joiningdate}
                            onChange={(e) => setJoiningDate(e.target.value)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} md="4" controlId="validationCustomEmail">
                        <Form.Label>Email</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                                type="email"
                                placeholder="email"
                                aria-describedby="inputGroupPrepend"
                                required
                                id='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a email.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationCustompassword">
                        <Form.Label>Password</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend1"><RiLockPasswordFill /></InputGroup.Text>
                            <Form.Control
                                type="password"
                                placeholder="password"
                                aria-describedby="inputGroupPrepend1"
                                id='password'
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a password.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationCustomempimg">
                        <Form.Label></Form.Label>
                        <Form.Control                            
                            type="file"                            
                            id='forempphoto'
                            onChange={(e) => setPhoto(e.target.files[0])}
                            // value={photo}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom">
                        <Form.Label>Gender</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="Male"
                                    name="gender"
                                    type={type}
                                    id={`inline-${type}-1`}
                                    onChange={() => setGender("Male")}
                                    checked={gender === "Male"}
                                />
                                <Form.Check
                                    inline
                                    label="Female"
                                    name="gender"
                                    type={type}
                                    id={`inline-${type}-2`}
                                    onChange={() => setGender("Female")}
                                    checked={gender === "Female"}
                                />
                            </div>
                        ))}
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                        <Form.Label>Skills</Form.Label>
                        {['checkbox'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="React JS"
                                    name="skills"
                                    value="React JS"
                                    type={type}
                                    id={`inline-${type}-1`}
                                    // onChange={ (e) => getSkills(e)}
                                    onChange={() => handleSkillsChange("React JS")}
                                    checked={skills.includes("React JS")}
                                />

                                <Form.Check
                                    inline
                                    label="Node JS"
                                    name="skills"
                                    type={type}
                                    id={`inline-${type}-1`}
                                    onChange={() => handleSkillsChange("Node JS")}
                                    checked={skills.includes("Node JS")}
                                    Value="Node JS"
                                    // onChange={ (e) => getSkills(e)}
                                />

                                <Form.Check
                                    inline
                                    label="Express JS"
                                    name="skills"
                                    type={type}
                                    id={`inline-${type}-1`}
                                    onChange={() => handleSkillsChange("Express JS")}
                                    checked={skills.includes("Express JS")}
                                    Value="Express JS"
                                    // onChange={ (e) => getSkills(e)}
                                />
                                <Form.Check
                                    inline
                                    label="MongoDB"
                                    name="skills"
                                    type={type}
                                    id={`inline-${type}-1`}
                                    onChange={() => handleSkillsChange("MongoDB")}
                                    checked={skills.includes("MongoDB")}
                                    Value="MongoDB"
                                    // onChange={ (e) => getSkills(e)}
                                />

                                <Form.Check
                                    inline
                                    label="Angular JS"
                                    name="skills"
                                    type={type}
                                    id={`inline-${type}-1`}
                                    onChange={() => handleSkillsChange("Angular JS")}
                                    checked={skills.includes("Angular JS")}
                                    Value="Angular JS"
                                    // onChange={ (e) => getSkills(e)}
                                />
                            </div>
                        ))}                         
                    </Form.Group>

                    

                    {/* <Form.Group as={Col} md="6" controlId="validationCustom04">
                        <Form.Label>Skills</Form.Label>
                        {['checkbox'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    value={skills}
                                    onChange={(e) => setSkills(e.target.value)}
                                    required
                                    inline
                                    label="HTML 5"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    value={skills}
                                    onChange={(e) => setSkills(e.target.value)}
                                    required
                                    inline
                                    label="CSS"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                                <Form.Check
                                    value={skills}
                                    onChange={(e) => setSkills(e.target.value)}
                                    required
                                    inline
                                    label="Bootstrap"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-3`}
                                />
                                <Form.Check
                                    value={skills}
                                    onChange={(e) => setSkills(e.target.value)}
                                    required
                                    inline
                                    label="Javascript"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-4`}
                                />
                                <Form.Check
                                    value={skills}
                                    onChange={(e) => setSkills(e.target.value)}
                                    required
                                    inline
                                    label="Jquery"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-5`}
                                />

                            </div>
                        ))}
                    </Form.Group> */}

                </Row>
                <Button type="submit">Submit form</Button>
        <Row>  

                <button className='btn btn-warning my-3 '
                    onClick={() => {
                      navigate('/table')
                      
                    }}>Employee Table</button>

             {/* <button className='btn btn-secondary mt-3'
                    onClick={() => {
                      navigate('/updateform')
                      
                    }}>Employee UpdateForm</button> */}
    </Row>
                
            </Form>


        </div >
    )
}
