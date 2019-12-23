import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

const Footer = ({ muscles }) => {
  return (
    <Paper>
      <Tabs value={0} indicatorColor='primary' textColor='primary' centered>
        <Tab label='All' />
        {muscles.map((grp, i) => (
          <Tab label={grp} key={i} />
        ))}
      </Tabs>
    </Paper>
  );
};

export default Footer;
