import { FormLabel } from '@mui/material';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Navbar.css';
import CustomizedSwitches from './Themebtn';

function Navigation({label, lbl, fn}) {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Nav.Link className='heading'>
            <ul>
              <li>
                Online
              </li>
              <li>
                Code Compiler
              </li>
            </ul>
          </Nav.Link>
            <Nav.Link className='dropdown'>{lbl}</Nav.Link>
          <Nav className="me-auto">
            <CustomizedSwitches fn = {fn}/>
            <Nav.Link>{label}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;



// import './Navbar.css';


// export const Navbar = ({cssclass, fn, label}) =>{
//     return(
//         <>
//             <div className="navbar">
//                 <ul>
//                     <li>
//                         main.cpp
//                     </li>
//                     <li>
//                         {/* <BasicSelect /> */}
//                         C++
//                     </li>
//                     {/* <li>
//                         <Button cssclass="submit-btn" fn={handleRun} label="Run"/>
//                     </li> */}
//                 </ul>
//             </div>
//         </>
//     )
// }


// // import Nav from 'react-bootstrap/Nav';

// // export function Navbar() {
// //   return (
// //     <Nav variant="tabs" defaultActiveKey="/home">
// //       <Nav.Item>
// //         <Nav.Link href="/home">Active</Nav.Link>
// //       </Nav.Item>
// //       <Nav.Item>
// //         <Nav.Link eventKey="link-1">Option 2</Nav.Link>
// //       </Nav.Item>
// //       <Nav.Item>
// //         <Nav.Link eventKey="disabled" disabled>
// //           Disabled
// //         </Nav.Link>
// //       </Nav.Item>
// //     </Nav>
// //   );
// // }

// // export default Navbar;


