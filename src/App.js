//import axios from "axios";
import MUIDataTable from "mui-datatables";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import cities from './cities.json'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& .MuiTableCell-head': {
      color: '#263238',
      fontWeight: 700,
    }, '&  .MuiTableCell-head .MuiButton-text .MuiButton-label':{
      fontWeight: 700,
    },

    '& .MuiToolbar-regular .MuiTypography-root.MuiTypography-h6': {
      opacity: 0.3,
      fontWeight: 600
  }},
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const keyMap = {
  'city': ['City', 'string'],
  '100m+': ['100m+', 'number'],
  'country': ['Country', 'string'],
  'allbuildings': ['AllBuildings', 'number'],
  '150m+': ['150m+', 'number'],
  '200m+': ['200m+', 'number'],
  '300m+': ['300m+', 'number'],
  'telecomtowers': ['TelecomTowers', 'number'],
  'allstructures': ['AllStructures', 'number'],

};

const sortByKey = (key, data)=>{
  /*
    Function that takes in a key and returns an array sorted by the key
    key: string
    data: Array

    returns Array
  */
    let arr = [];
    arr = data.sort((a, b) => {
      // extract the actual key name and type defined in keyMap variable
      const [objKey, type] = keyMap[key];

      // if its a string type, sort lexicographically
      if (type === 'string') {
        return a[objKey].localeCompare(b[objKey]);
      } else if (type === 'number') { // sort numerically if it is a number [asc order]
        return a[objKey] - b[objKey];
      } else {
        return a - b;
      }
    });

    return arr;
}

function App() {
  const classes = useStyles();

  <AppBar position="static" style={{backgroundColor:'#b4bbbf'}}>
 
</AppBar>
  // URLSearchParams used to get the query parameters from the url
  const params = new URLSearchParams(window.location.search);
  let data = cities;
  // get the orderByField parameter from the url
  let orderByField = params.get('orderByField');

  // if orderByField exists (case insensitive) and it is one of our column headers, sort by the particular column
  if (orderByField && keyMap.hasOwnProperty(orderByField.toLowerCase())) {
    orderByField = orderByField.toLowerCase()
    data = sortByKey(orderByField, data);
  }
 
  // if(orderByField ==='city'){
  //     data = data.sort((a,b)=>{
  //     return a.City.localeCompare(b.City) ;
  //   })
  // }else if(orderByField ==='100m+'){
  //     data = data.sort((a,b)=>{
  //     return a['100m+'] - b['100m+'] ;
  //   })
  
  // }
  
//  console.log(orderByField)
const columns = ["City", "Country", "AllBuildings", "100m+", "150m+", "200m+","300m+","AllStructures"];
const options = {
  filterType: 'checkbox',
};

return (
<div className={classes.root}>
    
<AppBar position="static" style={{backgroundColor:'#b4bbbf'}}>
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="#29a9f2" aria-label="menu">
      <MenuIcon />
    </IconButton>
  </Toolbar>
</AppBar>

<MUIDataTable 
  title={"Cities List"} 
  data={data} 
  columns={columns} 
  options={options} 
/>
     
</div>);}

export default App;

