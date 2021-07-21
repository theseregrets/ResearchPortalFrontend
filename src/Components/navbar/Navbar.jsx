import React,{useState} from 'react'
import RP from '../../Assets/research_portal_cropped.png'
import Logow from '../../Assets/ieeesb_logowhite.png'
import Logob from '../../Assets/ieeesb_logoblue.png'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import { Toolbar,AppBar,IconButton, Paper, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import{ List,ListItemText,ListItemIcon} from '@material-ui/core';
import FlagIcon from '@material-ui/icons/Flag';
import PeopleIcon from '@material-ui/icons/People';
import DashboardIcon from '@material-ui/icons/Dashboard';
import InfoIcon from '@material-ui/icons/Info';
import { useHistory } from 'react-router-dom';


const useStyle=makeStyles((theme)=>{
    
    return (
        
        {
             root:{
                marginBottom:"10px",
                padding:"3px"
             },
          logo_container:{
               width:"25%",
               [theme.breakpoints.down('sm')]:{
                width:"30%",
             },
               position:"relative",
               
            },
            grow:{
                flexGrow:"1"
            },
            button_container:{
              display :"flex",
              [theme.breakpoints.down('sm')]:{
               display:"none",
            },
              justifyContent:"flex-end",
              width:"min-content",

            },
            block:{
                display:"block"
            },
            logo2:{
                   width:"40%",
                   position:"absolute",
                   right:"0",
                   top:"-20px",
                   [theme.breakpoints.down('sm')]:{
                     display:"none"
                    
                 }
                
            },
            logo1:{
                width:"50%",
                [theme.breakpoints.down('xs')]:{
                    width:"60%",
                }
                
            },
            button: props=>( 
                  {
                
                marginLeft:theme.spacing(4),
                [theme.breakpoints.down('md')]:{
                    marginLeft:theme.spacing(2),
                },
                [theme.breakpoints.down('sm')]:{
                    marginLeft:theme.spacing(1)
                },
                color: props.ishome?"white":"blue",
                fontSize:"15px",
               
                
              '&:hover':{
               color:props.ishome?"white":"blue",
            }

        }),
        menu_container:{
               
                display:"none",
                
                [theme.breakpoints.down('sm')]:{
                   display:"flex",
                   flexGrow:"1",
                   justifyContent:"flex-end"
                },
                 
        },
        menu_icon: props=>({
            color:props.ishome?"white":"blue",
            fontSize:"3rem",
            // [theme.breakpoints.down('xs')]:{
            //     width:"60%",
            // }
        }),
        drawer_logo_container:{
            positon:"relative",
            width:"100%",
            padding:"10px",
            marginBottom:"50px"
        },
        drawer_logo:{
            width:"80%",
             position:"absolute",
             left:"0",
             top:"0"
        }
            


        }
    )
})


export default function Navbar() {
    const [isOpen,toggle]=useState(false);
    const [ishome,setishome]=useState(true);
     
      const classes=useStyle({ishome});
     
      const history = useHistory()
   function Push_to(path){

      history.push(path);
       toggle(false);
        setishome(false);
    }
    
    return (
        <div className={classes.root} >
             
           <AppBar position="none" color="transparent" elevation="0">
               <Toolbar>
                   <div  className={classes.logo_container}>
                   <Link to="/" onClick={()=>{setishome(true)}} >
                       <img src={RP} alt="logo" className={classes.logo1} />
                    
                   </Link>
                   
                   </div>
                 
                 <div style={{flexGrow:"1"}} className={classes.button_container}>
                 <Button component={Link} to={'/milestones'} className={classes.button} onClick={()=>{setishome(false)}}>Milestone</Button>
                 <Button component={Link} to={'/team'} className={classes.button} onClick={()=>{setishome(false)}}>Team</Button>
                 <Button component={Link} to={'/dashboard'}  className={classes.button} onClick={()=>{setishome(false)}}>Dashborad</Button>
                 <Button component={Link} to={'/about-us'}className={classes.button} onClick={()=>{setishome(false)}}>About us</Button>
                 </div>
                 <div className={classes.logo_container}>
                 <a href="https://www.ieeesbnitdgp.com/" >
                     <img src={ishome?Logow:Logob} alt="ieeelogo"  className={classes.logo2}/>
                    </a>
                  </div>
                  <div className={classes.menu_container}>
                  <IconButton  onClick={()=>{ console.log("clicked"); toggle(true)}} >
                      <MenuIcon className={classes.menu_icon}/>
                  </IconButton>
                  </div>
               </Toolbar>
           </AppBar>
 
     
           <Drawer anchor='left' open={isOpen} onClose={()=>toggle(false)}>
           <List>
               <ListItem>
                   <div className={classes.drawer_logo_container}>
                       <a href="https://www.ieeesbnitdgp.com/" ><img src={Logob}  alt="logo" className={classes.drawer_logo} /></a>
                       </div>
               </ListItem>
               <ListItem style={{paddingTop:"10px"}} divider button>
                 <ListItemIcon><FlagIcon color="primary"/></ListItemIcon>
                 <ListItemText onClick={()=>{Push_to("/milestones")}}>MileStones</ListItemText>
               </ListItem>
               <ListItem style={{paddingTop:"10px"}} divider button>
               <ListItemIcon><PeopleIcon color="primary"/></ListItemIcon>
                   <ListItemText onClick={()=>{Push_to("/team")}} >Team</ListItemText>
               </ListItem>
               <ListItem style={{paddingTop:"10px"}} divider button>
               <ListItemIcon><DashboardIcon color="primary"/></ListItemIcon>
                   <ListItemText  onClick={()=>{Push_to("/dashboard")}}>Dashboard</ListItemText>
               </ListItem>
               <ListItem style={{paddingTop:"10px"}} divider button>
               <ListItemIcon><InfoIcon color="primary"/></ListItemIcon>
                   <ListItemText  onClick={()=>{Push_to("/about-us")}}>About Us</ListItemText>
               </ListItem>
           </List>
            </Drawer>


        </div>
      
  );
}
