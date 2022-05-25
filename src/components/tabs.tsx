import React ,{ useEffect} from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import { useEthers } from "@usedapp/core";


import {PageResults, PageVote,AdminPage} from "./pageVote";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function LabTabs(prop:any) {
  const classes = useStyles();
  const {account } = useEthers();
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  const [tabDisabled, setTabDisabled] = React.useState(true);

  
  
   



  if(prop.vowner ){
    if (tabDisabled&& prop.vowner === account) {
      setTabDisabled(false)
   } else {
       console.log(false)
   }
    return (<div className={classes.root}>

        
       
       {/* {console.log(`yooooooooooo ${prop.vowner.toString()===account?.toString()}`)} */}
  
       <TabContext value={value}>
        <AppBar position="static">
          <TabList onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Vote" value="1" />
            <Tab label="Results" value="2" />
            <Tab label="Disabled"  value="3" disabled={tabDisabled}  />
          
  
          </TabList>
        </AppBar>
        <TabPanel value="1">
            
            
            <PageVote/>
            
        </TabPanel>
        
        <TabPanel value="2">
             <PageResults/>
        
        
        
        </TabPanel>
        <TabPanel value="3">
          


          <AdminPage/>

        </TabPanel>

      </TabContext>
    </div>);
  }
  else{
    return(<div className={classes.root}>

        
       
      {/* {console.log(`yooooooooooo ${prop.vowner.toString()===account?.toString()}`)} */}
 
      <TabContext value={value}>
       <AppBar position="static">
         <TabList onChange={handleChange} aria-label="simple tabs example">
           <Tab label="Vote" value="1" />
           <Tab label="Results" value="2" />
           {/* <Tab label="Disabled"  value="3" disabled={tabDisabled}  /> */}
         
 
         </TabList>
       </AppBar>
       <TabPanel value="1">
           
           
           <PageVote/>
           
       </TabPanel>
       
       <TabPanel value="2">
            <PageResults/>
       
       
       
       </TabPanel>
       {/* <TabPanel value="3">
         


         <AdminPage/>

       </TabPanel> */}

     </TabContext>
   </div>);
  }

}